package main

import (
	"context"
	"flag"
	"fmt"
	"net"
	"os"

	"github.com/kelseyhightower/envconfig"

	kubeclient "github.com/kubeshop/testkube-operator/client"
	executorsclientv1 "github.com/kubeshop/testkube-operator/client/executors/v1"
	scriptsclient "github.com/kubeshop/testkube-operator/client/scripts/v2"
	testsclientv1 "github.com/kubeshop/testkube-operator/client/tests"
	testsclientv2 "github.com/kubeshop/testkube-operator/client/tests/v2"
	testsuitesclientv1 "github.com/kubeshop/testkube-operator/client/testsuites/v1"
	apiv1 "github.com/kubeshop/testkube/internal/app/api/v1"
	"github.com/kubeshop/testkube/internal/migrations"
	"github.com/kubeshop/testkube/internal/pkg/api"
	"github.com/kubeshop/testkube/internal/pkg/api/repository/config"
	"github.com/kubeshop/testkube/internal/pkg/api/repository/result"
	"github.com/kubeshop/testkube/internal/pkg/api/repository/storage"
	"github.com/kubeshop/testkube/internal/pkg/api/repository/testresult"
	"github.com/kubeshop/testkube/pkg/analytics"
	"github.com/kubeshop/testkube/pkg/envs"
	"github.com/kubeshop/testkube/pkg/migrator"
	"github.com/kubeshop/testkube/pkg/secret"
	"github.com/kubeshop/testkube/pkg/ui"
)

type MongoConfig struct {
	DSN string `envconfig:"API_MONGO_DSN" default:"mongodb://localhost:27017"`
	DB  string `envconfig:"API_MONGO_DB" default:"testkube"`
}

var Config MongoConfig

var verbose = flag.Bool("v", false, "enable verbosity level")

func init() {
	flag.Parse()
	ui.Verbose = *verbose
	err := envconfig.Process("mongo", &Config)
	ui.PrintOnError("Processing mongo environment config", err)
}

func runMigrations() (err error) {
	ui.Info("Available migrations for", api.Version)
	results := migrations.Migrator.GetValidMigrations(api.Version, migrator.MigrationTypeServer)
	if len(results) == 0 {
		ui.Warn("No migrations available for", api.Version)
		return nil
	}

	for _, migration := range results {
		fmt.Printf("- %+v - %s\n", migration.Version(), migration.Info())
	}

	return migrations.Migrator.Run(api.Version, migrator.MigrationTypeServer)
}

func main() {

	if envs.IsTrue("TESTKUBE_ANALYTICS_ENABLED") {
		out, err := analytics.SendServerStartEvent()
		if err != nil {
			ui.Debug("analytics send error", "error", err.Error())
		}
		ui.Debug(out)
	}

	port := os.Getenv("APISERVER_PORT")
	namespace := "testkube"
	if ns, ok := os.LookupEnv("TESTKUBE_NAMESPACE"); ok {
		namespace = ns
	}

	ln, err := net.Listen("tcp", ":"+port)
	ui.ExitOnError("Checking if port "+port+"is free", err)
	ln.Close()
	ui.Debug("TCP Port is available", port)

	// DI
	db, err := storage.GetMongoDataBase(Config.DSN, Config.DB)
	ui.ExitOnError("Getting mongo database", err)

	kubeClient, err := kubeclient.GetClient()
	ui.ExitOnError("Getting kubernetes client", err)

	secretClient, err := secret.NewClient(namespace)
	ui.ExitOnError("Getting secret client", err)

	scriptsClient := scriptsclient.NewClient(kubeClient, namespace)
	testsClientV1 := testsclientv1.NewClient(kubeClient, namespace)
	testsClientV2 := testsclientv2.NewClient(kubeClient, namespace)
	executorsClient := executorsclientv1.NewClient(kubeClient, namespace)
	webhooksClient := executorsclientv1.NewWebhooksClient(kubeClient, namespace)
	testsuitesClient := testsuitesclientv1.NewClient(kubeClient, namespace)

	resultsRepository := result.NewMongoRespository(db)
	testResultsRepository := testresult.NewMongoRespository(db)
	configRepository := config.NewMongoRespository(db)

	clusterId, err := configRepository.GetUniqueClusterId(context.Background())
	ui.WarnOnError("Getting uniqe clusterId", err)

	migrations.Migrator.Add(migrations.NewVersion_0_9_2(scriptsClient, testsClientV1, testsClientV2, testsuitesClient))
	if err := runMigrations(); err != nil {
		ui.ExitOnError("Running server migrations", err)
	}

	err = apiv1.NewTestkubeAPI(
		namespace,
		resultsRepository,
		testResultsRepository,
		testsClientV2,
		executorsClient,
		testsuitesClient,
		secretClient,
		webhooksClient,
		clusterId,
	).Run()

	ui.ExitOnError("Running API Server", err)
}
