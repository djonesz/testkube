"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[7103],{3905:(e,t,s)=>{s.d(t,{Zo:()=>o,kt:()=>h});var n=s(67294);function l(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function c(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){l(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(e,t){if(null==e)return{};var s,n,l=function(e,t){if(null==e)return{};var s,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(l[s]=e[s]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(l[s]=e[s])}return l}var u=n.createContext({}),i=function(e){var t=n.useContext(u),s=t;return e&&(s="function"==typeof e?e(t):c(c({},t),e)),s},o=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var s=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),p=i(s),h=l,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||a;return s?n.createElement(m,c(c({ref:t},o),{},{components:s})):n.createElement(m,c({ref:t},o))}));function h(e,t){var s=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=s.length,c=new Array(a);c[0]=p;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:l,c[1]=r;for(var i=2;i<a;i++)c[i]=s[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,s)}p.displayName="MDXCreateElement"},50071:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>i});var n=s(87462),l=(s(67294),s(3905));const a={},c="Scheduling Tests",r={unversionedId:"articles/scheduling-tests",id:"articles/scheduling-tests",title:"Scheduling Tests",description:"In order to run Tests and Test Suites on a regular basis, we support a scheduling mechanism for these objects.",source:"@site/docs/articles/scheduling-tests.md",sourceDirName:"articles",slug:"/articles/scheduling-tests",permalink:"/articles/scheduling-tests",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/articles/scheduling-tests.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Secret Variables",permalink:"/articles/adding-tests-secrets"},next:{title:"Triggers",permalink:"/articles/test-triggers"}},u={},i=[{value:"Scheduling Architecture",id:"scheduling-architecture",level:2},{value:"Create a Test with a Schedule",id:"create-a-test-with-a-schedule",level:2},{value:"Getting Scheduled Test Results",id:"getting-scheduled-test-results",level:2},{value:"Create a Test Suite with a Schedule",id:"create-a-test-suite-with-a-schedule",level:2},{value:"Getting Scheduled Test Suite Results",id:"getting-scheduled-test-suite-results",level:2}],o={toc:i};function d(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"scheduling-tests"},"Scheduling Tests"),(0,l.kt)("p",null,"In order to run Tests and Test Suites on a regular basis, we support a scheduling mechanism for these objects.\nCRDs both for tests and test suites contain a ",(0,l.kt)("strong",{parentName:"p"},"schedule")," field used to define rules for launching them in time.\nTestkube's schedule data format is the same that is used to define Kubernetes Cron jobs (check Wikipedia Cron format for details ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cron"},"https://en.wikipedia.org/wiki/Cron"),")."),(0,l.kt)("h2",{id:"scheduling-architecture"},"Scheduling Architecture"),(0,l.kt)("p",null,"Testkube uses the scheduling engine from Kubernetes Cron jobs.\nIn fact, for each scheduled Test or Test Suite, a special cron job is created from this template:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts/tree/main/charts/testkube-operator/cronjob-template.yml"},"https://github.com/kubeshop/helm-charts/tree/main/charts/testkube-operator/cronjob-template.yml"),".\nTechnically, it is a callback to the Testkube API server method, launching either Test or Test Suite execution.\nThis works similarly to scheduled Test and Test Suite executions done by external scheduling platforms."),(0,l.kt)("h2",{id:"create-a-test-with-a-schedule"},"Create a Test with a Schedule"),(0,l.kt)("p",null,"Let's create a test with a required schedule using Testkube CLI command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'kubectl testkube create test --file test/postman/TODO.postman_collection.json --name scheduled-test --schedule="*/1 * * * *"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"Detected test type postman/collection\nTest created  / scheduled-test \ud83e\udd47\n")),(0,l.kt)("p",null,"We successfully created a scheduled test and can check the list of the available tests:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl testkube get tests\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"  NAME              | TYPE               | CREATED                       | LABELS | SCHEDULE    | STATUS | EXECUTION ID\n+-------------------+--------------------+-------------------------------+--------+-------------+--------+--------------------------+\n  scheduled-test    | postman/collection | 2022-04-13 12:37:40 +0000 UTC |        | */1 * * * * |        |\n")),(0,l.kt)("p",null,"The scheduled test was created and successfully scheduled for execution."),(0,l.kt)("p",null,"Let's check a Cron job connected to this test:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get cronjobs -A\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"NAMESPACE   NAME                   SCHEDULE      SUSPEND   ACTIVE   LAST SCHEDULE   AGE\ntestkube    scheduled-test-tests   */1 * * * *   False     1        42s           3m22s\n")),(0,l.kt)("p",null,"The Cron job for this test was successfully created and the test was executed."),(0,l.kt)("p",null,"To the check Cron job details:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl describe cronjob scheduled-test-tests -n testkube\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},'Name:                          scheduled-test-tests\nNamespace:                     testkube\nLabels:                        testkube=tests\nAnnotations:                   <none>\nSchedule:                      */1 * * * *\nConcurrency Policy:            Forbid\nSuspend:                       False\nSuccessful Job History Limit:  3\nFailed Job History Limit:      1\nStarting Deadline Seconds:     <unset>\nSelector:                      <unset>\nParallelism:                   <unset>\nCompletions:                   <unset>\nPod Template:\n  Labels:  <none>\n  Containers:\n   curlimage:\n    Image:      curlimages/curl\n    Port:       <none>\n    Host Port:  <none>\n    Command:\n      sh\n      -c\n    Args:\n      curl -X POST -H "Content-Type: application/json" -d \'{}\' "http://testkube-api-server:8088/v1/tests/scheduled-test/executions?callback=true"\n    Environment:     <none>\n    Mounts:          <none>\n  Volumes:           <none>\nLast Schedule Time:  Wed, 13 Apr 2022 15:50:00 +0300\nActive Jobs:         scheduled-test-tests-27497570\nEvents:\n  Type    Reason            Age                  From                Message\n  ----    ------            ----                 ----                -------\n  Normal  SuccessfulCreate  5m41s                cronjob-controller  Created job scheduled-test-tests-2749757\n')),(0,l.kt)("p",null,"As mentioned above, we have a scheduled callback for launching our test."),(0,l.kt)("h2",{id:"getting-scheduled-test-results"},"Getting Scheduled Test Results"),(0,l.kt)("p",null,"Now we can check if the test is executed every minute per the schedule we provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl testkube get execution\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"  ID                       | NAME                | TYPE               | STATUS  | LABELS\n+--------------------------+---------------------+--------------------+---------+--------+\n  6256c98f418062706814e1fc | scheduled-test      | postman/collection | passed  |\n  6256c953418062706814e1fa | scheduled-test      | postman/collection | passed  |\n  6256c91e418062706814e1f8 | scheduled-test      | postman/collection | passed  |\n  6256c8db418062706814e1f6 | scheduled-test      | postman/collection | passed  |\n  6256c89f418062706814e1f4 | scheduled-test      | postman/collection | passed  |\n  6256c885418062706814e1f2 | scheduled-test      | postman/collection | passed  |\n  6256c87e418062706814e1f0 | scheduled-test      | postman/collection | passed  |\n")),(0,l.kt)("p",null,"The test is successfully executed on the stated schedule."),(0,l.kt)("h2",{id:"create-a-test-suite-with-a-schedule"},"Create a Test Suite with a Schedule"),(0,l.kt)("p",null,"Let's create a Test Suite with a required schedule using the Testkube CLI command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'cat test/suites/testsuite.json | kubectl testkube create testsuite --name scheduled-testsuite --schedule="*/1 * * * *"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"TestSuite created scheduled-testsuite \ud83e\udd47\n")),(0,l.kt)("p",null,"We successfully created a scheduled Test Suite and can view a list of the available Test Suites:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl testkube get testsuites\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"  NAME                | DESCRIPTION            | STEPS | LABELS | SCHEDULE    | STATUS | EXECUTION ID\n+---------------------+------------------------+-------+--------+-------------+--------+--------------+\n  scheduled-testsuite | Run test several times |     2 |        | */1 * * * * |        |\n")),(0,l.kt)("p",null,"The scheduled test suite was created and successfully scheduled for execution.\nWe will skip the Cron job details, they are fully similar to test one described above."),(0,l.kt)("h2",{id:"getting-scheduled-test-suite-results"},"Getting Scheduled Test Suite Results"),(0,l.kt)("p",null,"The Test Suite is executed every minute per the schedule we provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl testkube get tse\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"  ID                       | TEST SUITE NAME     | EXECUTION NAME                             | STATUS | STEPS | LABELS\n+--------------------------+---------------------+--------------------------------------------+--------+-------+--------+\n  6256ce3f418062706814e210 | scheduled-testsuite | scheduled-testsuite.abnormally-in-lark     | passed |     2 |\n  6256ce04418062706814e20c | scheduled-testsuite | scheduled-testsuite.kindly-evolved-primate | passed |     2 |\n  6256cdcc418062706814e208 | scheduled-testsuite | scheduled-testsuite.formerly-champion-dodo | passed |     2 |\n")),(0,l.kt)("p",null,"The Test Suite is successfully executed on the stated schedule."))}d.isMDXComponent=!0}}]);