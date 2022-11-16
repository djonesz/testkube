"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[47],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=s.createContext({}),l=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return s.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?s.createElement(b,i(i({ref:t},c),{},{components:n})):s.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(87462),r=(n(67294),n(3905));const a={sidebar_position:1,sidebar_label:"Creating"},i="Test Suites",o={unversionedId:"using-testkube/test-suites/testsuites-creating",id:"using-testkube/test-suites/testsuites-creating",title:"Test Suites",description:"A large IT department has a frontend team and a backend team, everything is",source:"@site/docs/3-using-testkube/test-suites/testsuites-creating.md",sourceDirName:"3-using-testkube/test-suites",slug:"/using-testkube/test-suites/testsuites-creating",permalink:"/testkube/using-testkube/test-suites/testsuites-creating",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/3-using-testkube/test-suites/testsuites-creating.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Creating"},sidebar:"tutorialSidebar",previous:{title:"Test Suites",permalink:"/testkube/category/test-suites"},next:{title:"Running",permalink:"/testkube/using-testkube/test-suites/testsuites-running"}},u={},l=[{value:"<strong>Test Suite Creation</strong>",id:"test-suite-creation",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test-suites"},"Test Suites"),(0,r.kt)("p",null,"A large IT department has a frontend team and a backend team, everything is\ndeployed on Kubernetes cluster, and each team is responsible for its part of the work. The frontend engineers test their code using the  Cypress testing framework, but the backend engineers prefer simpler tools like Postman. They have a lot of Postman collections defined and want to run them against a Kubernetes cluster but some of their services are not exposed externally."),(0,r.kt)("p",null,"A QA leader is responsible for release trains and wants to be sure that before the release all tests are completed successfully. The QA leader will need to create pipelines that orchestrate each teams' tests into a common platform."),(0,r.kt)("p",null,"This is easily done with Testkube. Each team can run their tests against clusters on their own, and the QA manager can create test resources and add tests written by all teams."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Test Suites")," stands for the orchestration of different test steps such as test execution, delay, or other (future) steps."),(0,r.kt)("h2",{id:"test-suite-creation"},(0,r.kt)("strong",{parentName:"h2"},"Test Suite Creation")),(0,r.kt)("p",null,"Creating tests is really simple - create the test definition in a JSON file and pass it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"testkube")," ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," plugin."),(0,r.kt)("p",null,"An example test file could look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'\n{\n    "name": "testkube-suite",\n    "description": "Testkube test suite, api, dashboard and performance",\n    "steps": [\n        {"execute": {"name": "testkube-api"}},\n        {"delay": {"duration": 1000}},\n        {"execute": {"name": "testkube-dashboard"}},\n        {"delay": {"duration": 1000}},\n        {"execute": {"name": "testkube-api-performance"}},\n        {"delay": {"duration": 1000}},\n        {"execute": {"name": "testkube-homepage-performance"}}\n    ]\n}\' | kubectl testkube create testsuite\n')),(0,r.kt)("p",null,"To check if the test was created correctly, you can look at ",(0,r.kt)("inlineCode",{parentName:"p"},"TestSuite")," Custom Resource in your Kubernetes cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get testsuites -ntestkube\n\nNAME                  AGE\ntestkube-suite           1m\ntestsuite-example-2   2d21h\n")),(0,r.kt)("p",null,"Get the details of a test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl get testsuites -ntestkube testkube-suite -oyaml\n\napiVersion: tests.testkube.io/v1\nkind: Test\nmetadata:\n  creationTimestamp: "2022-01-11T07:46:12Z"\n  generation: 4\n  name: test-example\n  namespace: testkube-suite\n  resourceVersion: "57695094"\n  uid: ea90a79e-bb46-49ee-a3ef-a5d99cee0a2c\nspec:\n  description: Example simple tests orchestration\n  steps:\n  steps:\n  - execute:\n      name: testkube-api\n  - delay:\n      duration: 1000\n  - execute:\n      name: testkube-dashboard\n  - delay:\n      duration: 1000\n  - execute:\n      name: testkube-api-performance\n  - delay:\n      duration: 1000\n  - execute:\n      name: testkube-homepage-performance\n')),(0,r.kt)("p",null,"Your ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Suite")," is defined and you can start running testing workflows."))}p.isMDXComponent=!0}}]);