/*
 * Testkube API
 *
 * Testkube provides a Kubernetes-native framework for test definition, execution and results
 *
 * API version: 1.0.0
 * Contact: testkube@kubeshop.io
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package testkube

// CRD based webhook data
type Webhook struct {
	Name      string      `json:"name,omitempty"`
	Namespace string      `json:"namespace,omitempty"`
	Uri       string      `json:"uri"`
	Events    []EventType `json:"events,omitempty"`
	// Labels to filter for tests and test suites
	Selector string `json:"selector,omitempty"`
	// webhook labels
	Labels map[string]string `json:"labels,omitempty"`
}