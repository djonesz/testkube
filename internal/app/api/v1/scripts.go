package v1

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/davecgh/go-spew/spew"
	"github.com/gofiber/fiber/v2"
	scriptsv1 "github.com/kubeshop/kubtest-operator/apis/script/v1"
	"github.com/kubeshop/kubtest/pkg/api/kubtest"
	"github.com/kubeshop/kubtest/pkg/executor/client"
	"github.com/kubeshop/kubtest/pkg/jobs"
	scriptsMapper "github.com/kubeshop/kubtest/pkg/mapper/scripts"
	"github.com/kubeshop/kubtest/pkg/rand"
	"go.mongodb.org/mongo-driver/mongo"
	"k8s.io/apimachinery/pkg/api/errors"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ListScripts for getting list of all available scripts
func (s kubtestAPI) GetScript() fiber.Handler {
	return func(c *fiber.Ctx) error {
		name := c.Params("id")
		namespace := c.Query("namespace", "default")
		crScript, err := s.ScriptsClient.Get(namespace, name)
		if err != nil {
			if errors.IsNotFound(err) {
				return s.Error(c, http.StatusNotFound, err)
			}

			return s.Error(c, http.StatusBadGateway, err)
		}

		scripts := scriptsMapper.MapScriptKubeToAPI(*crScript)

		return c.JSON(scripts)
	}
}

// ListScripts for getting list of all available scripts
func (s kubtestAPI) ListScripts() fiber.Handler {
	return func(c *fiber.Ctx) error {
		namespace := c.Query("namespace", "default")
		crScripts, err := s.ScriptsClient.List(namespace)
		if err != nil {
			return s.Error(c, http.StatusBadGateway, err)
		}

		scripts := scriptsMapper.MapScriptListKubeToAPI(*crScripts)

		return c.JSON(scripts)
	}
}

// CreateScript creates new script CR based on script content
func (s kubtestAPI) CreateScript() fiber.Handler {
	return func(c *fiber.Ctx) error {

		var request kubtest.ScriptCreateRequest
		err := c.BodyParser(&request)
		if err != nil {
			return s.Error(c, http.StatusBadRequest, err)
		}
		fmt.Println("REQ:", spew.Sdump(request))

		s.Log.Infow("creating script", "request", request)

		var repository *scriptsv1.Repository

		if request.Repository != nil {
			repository = &scriptsv1.Repository{
				Type_:  "git",
				Uri:    request.Repository.Uri,
				Branch: request.Repository.Branch,
				Path:   request.Repository.Path,
			}
		}

		script, err := s.ScriptsClient.Create(&scriptsv1.Script{
			ObjectMeta: metav1.ObjectMeta{
				Name:      request.Name,
				Namespace: request.Namespace,
			},
			Spec: scriptsv1.ScriptSpec{
				Type_:      request.Type_,
				InputType:  request.InputType,
				Content:    request.Content,
				Repository: repository,
			},
		})

		s.Metrics.IncCreateScript(script.Spec.Type_, err)

		if err != nil {
			return s.Error(c, http.StatusBadGateway, err)
		}

		return c.JSON(script)
	}
}

// ExecuteScript calls particular executor based on execution request content and type
func (s kubtestAPI) ExecuteScript() fiber.Handler {
	return func(c *fiber.Ctx) error {
		scriptID := c.Params("id")

		var request kubtest.ScriptExecutionRequest
		err := c.BodyParser(&request)
		if err != nil {
			return s.Error(c, http.StatusBadRequest, fmt.Errorf("script request body invalid: %w", err))
		}

		s.Log.Infow("running execution of script", "script", request)

		// generate random execution name in case there is no one set
		// like for docker images
		if request.Name == "" {
			request.Name = rand.Name()
		}

		// script name + script execution name should be unique
		scriptExecution, _ := s.Repository.GetByNameAndScript(c.Context(), request.Name, scriptID)
		if scriptExecution.Name == request.Name {
			return s.Error(c, http.StatusBadRequest, fmt.Errorf("script execution with name %s already exists", request.Name))
		}

		// get script content from Custom Resource
		scriptCR, err := s.ScriptsClient.Get(request.Namespace, scriptID)
		if err != nil {
			return s.Error(c, http.StatusBadGateway, fmt.Errorf("getting script CR error: %w", err))
		}

		// get executor from kubernetes CRs
		// executor, err := s.Executors.Get(scriptCR.Spec.Type_)
		// if err != nil {
		// 	return s.Error(c, http.StatusInternalServerError, fmt.Errorf("can't get executor: %w", err))
		// }

		// TODO move to mapper

		// check if repository exists in cr repository
		var respository *kubtest.Repository
		if scriptCR.Spec.Repository != nil {
			respository = &kubtest.Repository{
				Type_:  "git",
				Uri:    scriptCR.Spec.Repository.Uri,
				Branch: scriptCR.Spec.Repository.Branch,
				Path:   scriptCR.Spec.Repository.Path,
			}
		}

		// pass options to executor client
		options := client.ExecuteOptions{
			Type_:      scriptCR.Spec.Type_,
			InputType:  scriptCR.Spec.InputType,
			Content:    scriptCR.Spec.Content,
			Repository: respository,
			Params:     request.Params,
		}
		s.Log.Infow("calling executor with options", "options", options)
		// execution, err := executor.Execute(options)

		execution := kubtest.NewExecution()
		execution.ScriptContent = options.Content
		execution.Repository = options.Repository
		execution.Result = &kubtest.ExecutionResult{Status: "queued"}
		execution.Params = options.Params

		// store execution
		ctx := c.Context()
		scriptExecution = kubtest.NewScriptExecution(
			scriptID,
			request.Name,
			scriptCR.Spec.Type_,
			execution,
			request.Params,
		)
		err = s.Repository.Insert(ctx, scriptExecution)
		if err != nil {
			return s.Error(c, http.StatusBadGateway, fmt.Errorf("inserting script CR error: %w", err))

		}
		jobClient, err := jobs.NewJobClient()
		if err != nil {
			return s.Error(c, http.StatusInternalServerError, fmt.Errorf("can't get k8s client: %w", err))
		}
		// save watch result asynchronously
		go func(scriptExecution kubtest.ScriptExecution) error {
			result := jobClient.LaunchK8sJob(scriptExecution.Id, getImageFromCRType(scriptCR.Spec.Type_), execution)

			if err != nil {
				return s.Error(c, http.StatusInternalServerError, err)
			}
			scriptExecution.Execution.Result = result
			scriptExecution.Execution.Status = result.Status
			return s.Repository.Update(ctx, scriptExecution)

		}(scriptExecution)

		// metrics increase
		s.Metrics.IncExecution(scriptExecution)
		if err != nil {
			return s.Error(c, http.StatusBadRequest, err)
		}

		return c.JSON(scriptExecution)
	}
}

// ListExecutions returns array of available script executions
func (s kubtestAPI) ListExecutions() fiber.Handler {
	return func(c *fiber.Ctx) error {
		scriptID := c.Params("id", "-")
		limit, err := strconv.Atoi(c.Params("limit", "100"))
		if err != nil {
			limit = 100
		} else if limit < 1 || limit > 1000 {
			limit = 1000
		}

		ctx := c.Context()

		var executions []kubtest.ScriptExecution

		// TODO should we split this to separate endpoint? currently this one handles
		// endpoints from /executions and from /scripts/{id}/executions
		// or should scriptID be a query string as it's some kind of filter?
		if scriptID == "-" {
			s.Log.Infow("Getting script executions (no id passed)")
			executions, err = s.Repository.GetNewestExecutions(ctx, limit)
		} else {
			s.Log.Infow("Getting script executions", "id", scriptID)
			executions, err = s.Repository.GetScriptExecutions(ctx, scriptID)
		}
		if err != nil {
			return s.Error(c, http.StatusInternalServerError, err)
		}

		// convert to summary
		result := make([]kubtest.ExecutionSummary, len(executions))
		for i, s := range executions {
			result[i] = kubtest.ExecutionSummary{
				Id:         s.Id,
				ScriptName: s.ScriptName,
				ScriptType: s.ScriptType,
				Status:     s.Execution.Status,
				StartTime:  s.Execution.StartTime,
				EndTime:    s.Execution.EndTime,
			}
		}

		return c.JSON(result)
	}
}

// GetScriptExecution returns script execution object for given script and execution id
func (s kubtestAPI) GetScriptExecution() fiber.Handler {
	return func(c *fiber.Ctx) error {
		ctx := c.Context()
		scriptID := c.Params("id", "-")
		executionID := c.Params("executionID")

		s.Log.Infow("get execution request", "id", scriptID, "executionID", executionID)

		var scriptExecution kubtest.ScriptExecution
		var err error

		if scriptID == "-" {
			scriptExecution, err = s.Repository.Get(ctx, executionID)
			if err == mongo.ErrNoDocuments {
				return s.Error(c, http.StatusNotFound, fmt.Errorf("script with execution id %s not found", executionID))
			}
			if err != nil {
				return s.Error(c, http.StatusInternalServerError, err)
			}
		} else {
			scriptExecution, err = s.Repository.GetByNameAndScript(ctx, executionID, scriptID)
			if err == mongo.ErrNoDocuments {
				return s.Error(c, http.StatusNotFound, fmt.Errorf("script %s/%s not found", scriptID, executionID))
			}
			if err != nil {
				return s.Error(c, http.StatusInternalServerError, err)
			}
		}

		return c.JSON(scriptExecution)
	}
}

func (s kubtestAPI) AbortExecution() fiber.Handler {
	return func(c *fiber.Ctx) error {
		jobClient, err := jobs.NewJobClient()
		if err != nil {
			return s.Error(c, http.StatusInternalServerError, err)
		}
		return c.JSON(jobClient.AbortK8sJob(c.Params("executionID")))
	}
}

func getImageFromCRType(crType string) string {
	switch crType {
	case "postman/collection":
		return "jasmingacic/postman-agent"
	case "cypress/project":
		return "jasmingacic/cypress-agent"
	case "curl/test":
		return "jasmingacic/curl-agent"
	}
	return ""
}
