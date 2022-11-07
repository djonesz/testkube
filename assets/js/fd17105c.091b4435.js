"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[2195],{3905:(e,t,s)=>{s.d(t,{Zo:()=>d,kt:()=>m});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(s),m=a,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||r;return s?n.createElement(f,o(o({ref:t},d),{},{components:s})):n.createElement(f,o({ref:t},d))}));function m(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,o=new Array(r);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=s[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}p.displayName="MDXCreateElement"},65632:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=s(87462),a=(s(67294),s(3905));const r={sidebar_position:4,sidebar_label:"Getting Results"},o="Getting Testkube Test Execution Results",i={unversionedId:"using-testkube/tests/tests-getting-results",id:"using-testkube/tests/tests-getting-results",title:"Getting Testkube Test Execution Results",description:"We saw how simple it is to create and run Testkube tests execution. Obtaining test results is also simple.",source:"@site/docs/3-using-testkube/tests/tests-getting-results.md",sourceDirName:"3-using-testkube/tests",slug:"/using-testkube/tests/tests-getting-results",permalink:"/testkube/using-testkube/tests/tests-getting-results",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/3-using-testkube/tests/tests-getting-results.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Getting Results"},sidebar:"tutorialSidebar",previous:{title:"Running",permalink:"/testkube/using-testkube/tests/tests-running"},next:{title:"Using Test Variables",permalink:"/testkube/using-testkube/tests/tests-variables"}},u={},l=[{value:"<strong>Getting Test Executions After Test is Executed</strong>",id:"getting-test-executions-after-test-is-executed",level:2},{value:"<strong>Change the Output Format of Execution Results</strong>",id:"change-the-output-format-of-execution-results",level:2},{value:"<strong>JSON output</strong>",id:"json-output",level:3},{value:"<strong>Need Non-standard Output? Go-Template for the Rescue</strong>",id:"need-non-standard-output-go-template-for-the-rescue",level:3},{value:"<strong>Getting a List of Test Executions</strong>",id:"getting-a-list-of-test-executions",level:2},{value:"<strong>Getting a List of Recent Executions</strong>",id:"getting-a-list-of-recent-executions",level:3},{value:"<strong>Getting a List of Executions in Different Formats</strong>",id:"getting-a-list-of-executions-in-different-formats",level:3},{value:"<strong>JSON</strong>",id:"json",level:4},{value:"<strong>Go-Template</strong>",id:"go-template",level:4},{value:"<strong>Getting a List of Executions of a Given Test</strong>",id:"getting-a-list-of-executions-of-a-given-test",level:3}],d={toc:l};function c(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-testkube-test-execution-results"},"Getting Testkube Test Execution Results"),(0,a.kt)("p",null,"We saw how simple it is to create and run Testkube tests execution. Obtaining test results is also simple."),(0,a.kt)("h2",{id:"getting-test-executions-after-test-is-executed"},(0,a.kt)("strong",{parentName:"h2"},"Getting Test Executions After Test is Executed")),(0,a.kt)("p",null,"After each run, Testkube informs you that you can get results of a given test execution."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube run test api-incluster-test\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Type          : postman/collection\nName          : api-incluster-test\nExecution ID  : 615d6398b046f8fbd3d955d4\nExecution name: openly-full-bream\n\nTest queued for execution\nUse the following command to get test execution details:\n$ kubectl testkube get execution 615d6398b046f8fbd3d955d4\n\nOr watch test execution until complete:\n$ kubectl testkube watch execution 615d6398b046f8fbd3d955d4\n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl testkube get execution 615d6398b046f8fbd3d955d4")," - is for getting string output of test execution, where ",(0,a.kt)("inlineCode",{parentName:"p"},"615d6398b046f8fbd3d955d4")," is the test execution ID."),(0,a.kt)("h2",{id:"change-the-output-format-of-execution-results"},(0,a.kt)("strong",{parentName:"h2"},"Change the Output Format of Execution Results")),(0,a.kt)("p",null,"By default, Testkube returns string output of a particular executor. It can also return JSON or Go-Template based outputs."),(0,a.kt)("h3",{id:"json-output"},(0,a.kt)("strong",{parentName:"h3"},"JSON output")),(0,a.kt)("p",null,"Sometimes you need to parse test results programatically. To simplify this task, test execution results can be in JSON format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\nkubectl testkube get execution 615d7e1ab046f8fbd3d955d6 -ojson\n\n {"id":"615d7e1ab046f8fbd3d955d6","testName":"api-incluster-test","testType":"postman/collection","name":"monthly-sure-finch","executionResult":{"status":"passed","startTime":"2021-10-06T10:44:46.338Z","endTime":"2021-10-06T10:44:46.933Z","output":"newman\\n\\nAPI-Health\\n\\n\u2192 Health\\n  GET http://testkube-api-server:8088/health [200 OK, 124B, 282ms]\\n  \u2713  Status code is 200\\n\\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\\n\u2502                         \u2502           executed \u2502            failed \u2502\\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\\n\u2502              iterations \u2502                  1 \u2502                 0 \u2502\\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\\n\u2502                requests \u2502                  1 \u2502                 0 \u2502\\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\\n\u2502            test-tests \u2502                  2 \u2502                 0 \u2502\\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\\n\u2502      prerequest-tests \u2502                  1 \u2502                 0 \u2502\\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\\n\u2502              assertions \u2502                  1 \u2502                 0 \u2502\\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\\n\u2502 total run duration: 519ms                                        \u2502\\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\\n\u2502 total data received: 8B (approx)                                 \u2502\\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\\n\u2502 average response time: 282ms [min: 282ms, max: 282ms, s.d.: 0\xb5s] \u2502\\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\\n","outputType":"text/plain","steps":[{"name":"Health","duration":"282ms","status":"passed","assertionResults":[{"name":"Status code is 200","status":"passed"}]}]}}\n\n')),(0,a.kt)("p",null,"It is quite easy to parse data from test executions with tools like ",(0,a.kt)("inlineCode",{parentName:"p"},"jq")," or in other programmatic ways."),(0,a.kt)("h3",{id:"need-non-standard-output-go-template-for-the-rescue"},(0,a.kt)("strong",{parentName:"h3"},"Need Non-standard Output? Go-Template for the Rescue")),(0,a.kt)("p",null,"If you need non-standard test execution output, you can easily use ouput ",(0,a.kt)("inlineCode",{parentName:"p"},"-o go")," with the passed ",(0,a.kt)("inlineCode",{parentName:"p"},"--go-template")," template content."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube get execution 615d7e1ab046f8fbd3d955d6 -ogo --go-template='{{.Name}} {{.Id}} {{.ExecutionResult.Status}}'\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"monthly-sure-finch 615d7e1ab046f8fbd3d955d6 success  \n")),(0,a.kt)("h2",{id:"getting-a-list-of-test-executions"},(0,a.kt)("strong",{parentName:"h2"},"Getting a List of Test Executions")),(0,a.kt)("h3",{id:"getting-a-list-of-recent-executions"},(0,a.kt)("strong",{parentName:"h3"},"Getting a List of Recent Executions")),(0,a.kt)("p",null,"We can get a list of current executions with use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"executions")," subcommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube get executions \n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"        TEST          |        TYPE        | NAME |            ID            | STATUS   \n+---------------------+--------------------+------+--------------------------+---------+\n  api-incluster-test  | postman/collection |      | 615d7e1ab046f8fbd3d955d6 | success  \n  api-incluster-test  | postman/collection |      | 615d6398b046f8fbd3d955d4 | success  \n  kubeshop-cypress    | cypress/project    |      | 615d5372b046f8fbd3d955d2 | success  \n  kubeshop-cypress    | cypress/project    |      | 615d5265b046f8fbd3d955d0 | error    \n  cypress-example     | cypress/project    |      | 615d4fe6b046f8fbd3d955ce | error    \n  cypress-example     | cypress/project    |      | 615d4556b046f8fbd3d955cc | error   \n")),(0,a.kt)("p",null,"Now we can use an ID to check the results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube get execution 615d5265b046f8fbd3d955d0\n")),(0,a.kt)("h3",{id:"getting-a-list-of-executions-in-different-formats"},(0,a.kt)("strong",{parentName:"h3"},"Getting a List of Executions in Different Formats")),(0,a.kt)("p",null,"Terminal mode table data is not always best when processing results in code or shell tests. To simplify this, we have implemented JSON or Go-Template based results when getting results lists."),(0,a.kt)("h4",{id:"json"},(0,a.kt)("strong",{parentName:"h4"},"JSON")),(0,a.kt)("p",null,"Getting JSON results is quite easy, just pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"-o json")," flag to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl testkube get executions -ojson\n\n{"totals":{"results":17,"passed":7,"failed":10,"queued":0,"pending":0},"results":[{"id":"615d7e1ab046f8fbd3d955d6","name":"","testName":"api-incluster-test","testType":"postman/collection","status":"passed","startTime":"2021-10-06T10:44:46.338Z","endTime":"2021-10-06T10:44:46.933Z"},{"id":"615d6398b046f8fbd3d955d4","name":"","testName":"api-incluster-test","testType":"postman/collection","status":"passed","startTime":"2021-10-06T08:51:39.834Z","endTime":"2021-10-06T08:51:40.432Z"},{"id":"615d5372b046f8fbd3d955d2","name":"","testName":"kubeshop-cypress","testType":"cypress/project","status":"passed","startTime":"0001-01-01T00:00:00Z","endTime":"2021-10-06T07:44:30.025Z"},{"id":"615d5265b046f8fbd3d955d0","name":"","testName":"kubeshop-cypress","testType":"cypress/project","status":"failed","startTime":"0001-01-01T00:00:00Z","endTime":"2021-10-06T07:40:09.261Z"},{"id":"615d4fe6b046f8fbd3d955ce","name":"","testName":"cypress-example","testType":"cypress/project","status":"failed","startTime":"0001-01-01T00:00:00Z","endTime":"2021-10-06T07:28:54.579Z"},{"id":"615d4556b046f8fbd3d955cc","name":"","testName":"cypress-example","testType":"cypress/project","status":"failed","startTime":"0001-01-01T00:00:00Z","endTime":"2021-10-06T06:43:44.1Z"},{"id":"615d43d3b046f8fbd3d955ca","name":"","testName":"cypress-example","testType":"cypress/project","status":"failed","startTime":"0001-01-01T00:00:00Z","endTime":"2021-10-06T06:37:52.601Z"},{"id":"6155cd7db046f8fbd3d955c8","name":"","testName":"postman-test-7f6qrm","testType":"postman/collection","status":"passed","startTime":"2021-09-30T14:45:20.819Z","endTime":"2021-09-30T14:45:21.419Z"},{"id":"6155cd67b046f8fbd3d955c6","name":"","testName":"sanity","testType":"postman/collection","status":"failed","startTime":"0001-01-01T00:00:00Z","endTime":"2021-09-30T14:45:00.135Z"},{"id":"615322f3f47de75f31ae7a06","name":"","testName":"long-1","testType":"postman/collection","status":"passed","startTime":"2021-09-28T14:13:11.293Z","endTime":"2021-09-28T14:13:45.271Z"},{"id":"61532298f47de75f31ae7a04","name":"","testName":"long-1","testType":"postman/collection","status":"passed","startTime":"2021-09-28T14:11:39.179Z","endTime":"2021-09-28T14:12:15.202Z"},{"id":"6151b4b342189df67944968e","name":"","testName":"postman-test-7f6qrm","testType":"postman/collection","status":"passed","startTime":"2021-09-27T12:10:31.581Z","endTime":"2021-09-27T12:10:32.105Z"},{"id":"6151b49d42189df67944968c","name":"","testName":"curl-test","testType":"curl/test","status":"failed","startTime":"0001-01-01T00:00:00Z","endTime":"2021-09-27T12:10:06.954Z"},{"id":"6151b41742189df67944968a","name":"","testName":"curl-test","testType":"curl/test","status":"failed","startTime":"0001-01-01T00:00:00Z","endTime":"2021-09-27T12:07:52.893Z"},{"id":"6151b41342189df679449688","name":"","testName":"curl-test","testType":"curl/test","status":"failed","startTime":"0001-01-01T00:00:00Z","endTime":"2021-09-27T12:07:48.868Z"},{"id":"6151b40f42189df679449686","name":"","testName":"curl-test","testType":"curl/test","status":"failed","startTime":"0001-01-01T00:00:00Z","endTime":"2021-09-27T12:07:44.89Z"},{"id":"6151b40b42189df679449684","name":"","testName":"curl-test","testType":"curl/test","status":"failed","startTime":"0001-01-01T00:00:00Z","endTime":"2021-09-27T12:07:41.168Z"}]}\n')),(0,a.kt)("h4",{id:"go-template"},(0,a.kt)("strong",{parentName:"h4"},"Go-Template")),(0,a.kt)("p",null,"To get a list of test excution IDs with their corresponding statuses with go-template:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube get executions -ogo --go-template '{{.Id}}:{{.Status}} '\n\n 615d7e1ab046f8fbd3d955d6:success 615d6398b046f8fbd3d955d4:success 615d5372b046f8fbd3d955d2:success 615d5265b046f8fbd3d955d0:error 615d4fe6b046f8fbd3d955ce:error 615d4556b046f8fbd3d955cc:error 615d43d3b046f8fbd3d955ca:error 6155cd7db046f8fbd3d955c8:success 6155cd67b046f8fbd3d955c6:error 615322f3f47de75f31ae7a06:success 61532298f47de75f31ae7a04:success 6151b4b342189df67944968e:success 6151b49d42189df67944968c:error 6151b41742189df67944968a:error 6151b41342189df679449688:error 6151b40f42189df679449686:error 6151b40b42189df679449684:error\n\n")),(0,a.kt)("h3",{id:"getting-a-list-of-executions-of-a-given-test"},(0,a.kt)("strong",{parentName:"h3"},"Getting a List of Executions of a Given Test")),(0,a.kt)("p",null,"To find the execution of a particular test, pass the test name as a parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube get executions api-incluster-test\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"        TEST         |        TYPE        | NAME |            ID            | STATUS   \n+--------------------+--------------------+------+--------------------------+---------+\n  api-incluster-test | postman/collection |      | 615d6398b046f8fbd3d955d4 | success  \n  api-incluster-test | postman/collection |      | 615d7e1ab046f8fbd3d955d6 | success  \n")))}c.isMDXComponent=!0}}]);