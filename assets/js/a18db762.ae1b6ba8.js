"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=a.createContext({}),c=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=s,k=d["".concat(r,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const i={},l="Integrating with Slack",o={unversionedId:"articles/slack-integration",id:"articles/slack-integration",title:"Integrating with Slack",description:"In order to receive notifications in Slack about the status of the testing process, Testkube provides integration with Slack. Below are the steps to configure it. Click here for a video tutorial.",source:"@site/docs/articles/slack-integration.md",sourceDirName:"articles",slug:"/articles/slack-integration",permalink:"/articles/slack-integration",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/articles/slack-integration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Emitting standard CDEvents",permalink:"/articles/cd-events"},next:{title:"Test CRD Generation",permalink:"/articles/generate-test-crds"}},r={},c=[{value:"Step 1 - Install the Testkube bot to Your Slack Workspace",id:"step-1---install-the-testkube-bot-to-your-slack-workspace",level:2},{value:"Step 2 - Configure Testkube to Use the Slack bot Token",id:"step-2---configure-testkube-to-use-the-slack-bot-token",level:2},{value:"Step 3 - Add the Testkube bot to the Slack Channel",id:"step-3---add-the-testkube-bot-to-the-slack-channel",level:2},{value:"Step 4 - (Optional) Adjust Slack Config File",id:"step-4---optional-adjust-slack-config-file",level:2},{value:"Configure Message Template",id:"configure-message-template",level:3},{value:"Video Tutorial",id:"video-tutorial",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"integrating-with-slack"},"Integrating with Slack"),(0,s.kt)("p",null,"In order to receive notifications in Slack about the status of the testing process, Testkube provides integration with Slack. Below are the steps to configure it. Click ",(0,s.kt)("a",{parentName:"p",href:"#video-tutorial"},"here")," for a video tutorial."),(0,s.kt)("h2",{id:"step-1---install-the-testkube-bot-to-your-slack-workspace"},"Step 1 - Install the Testkube bot to Your Slack Workspace"),(0,s.kt)("p",null,"Testkube bot:"),(0,s.kt)("a",{href:"https://slack.com/oauth/v2/authorize?client_id=1943550956369.3416932538629&scope=chat:write,chat:write.public,groups:read,channels:read&user_scope="},(0,s.kt)("img",{alt:"Add Testkube bot to your Slack workspace",height:"40",width:"139",src:"https://platform.slack-edge.com/img/add_to_slack.png",srcSet:"https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"})),(0,s.kt)("p",null,"Once you add Slack bot to your workspace, you will get the bot token, you will need it in the next step."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Authentification was succesfull!\nPlease use the following token in the helm values for slackToken:\nxoxb-123456789012-1234567890123-123456789012345678901234\n")),(0,s.kt)("h2",{id:"step-2---configure-testkube-to-use-the-slack-bot-token"},"Step 2 - Configure Testkube to Use the Slack bot Token"),(0,s.kt)("p",null,"Populate ",(0,s.kt)("inlineCode",{parentName:"p"},"slackToken")," in the Helm values or apply it directly with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'helm upgrade \\\n  --install \\\n  --namespace testkube \\\n  --create-namespace \\\n  --set testkube-api.slackToken="YOUR_SLACK_TOKEN" \\\n  kubeshop/testkube\n')),(0,s.kt)("p",null,"To see all the values that can be configured, check the helm chart ",(0,s.kt)("a",{parentName:"p",href:"/articles/helm-chart"},"here"),". "),(0,s.kt)("h2",{id:"step-3---add-the-testkube-bot-to-the-slack-channel"},"Step 3 - Add the Testkube bot to the Slack Channel"),(0,s.kt)("p",null,"Add the Testkube bot to the Slack channel where you want to receive notifications. You can do it by inviting the bot to a specific channel. The Testkube bot by default will send to the first channel that the Testkube bot is member of, you can update the config in the next step."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Add Testkube bot to Slack channel",src:n(70626).Z,width:"676",height:"549"})),(0,s.kt)("h2",{id:"step-4---optional-adjust-slack-config-file"},"Step 4 - (Optional) Adjust Slack Config File"),(0,s.kt)("p",null,"By default the configuration ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts/blob/704c71fa3b8f0138f983ea9a2fa598ecbe3868ae/charts/testkube-api/slack-config.json"},"/charts/testkube-api/slack-config.json")," looks like below; it will send notification for all events and all test or test suite names with any labels.\nIf the channel is left empty, it will send to the first channel that the Testkube bot is member of."),(0,s.kt)("p",null,"It is an array of config objects and can use any config combinations:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"- ChannelID: C058AGQ25D2\n  selector: {}\n  testName: []\n  testSuiteName: []\n  events:\n    - start-test\n    - end-test-success\n    - end-test-failed\n    - end-test-aborted\n    - end-test-timeout\n    - start-testsuite\n    - end-testsuite-success\n    - end-testsuite-failed\n    - end-testsuite-aborted\n    - end-testsuite-timeout\n")),(0,s.kt)("p",null,"To apply, pass the file to the Helm values:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'helm upgrade \\\n  --install \\\n  --create-namespace \\\n  --namespace testkube \\\n  testkube \\\n  kubeshop/testkube \\\n  --set testkube-api.slackToken="$SLACK_BOT_TOKEN" \\\n  --set testkube-api.slackConfig="$(cat config.yaml)"\n')),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"- ChannelID: C01234567\n  selector:\n    label1: value1\n  testName:\n    - sanity\n    - testName2\n  testSuiteName:\n    - test-suite1\n    - test-suite2\n  events:\n    - end-test-failed\n    - end-test-timeout\n    - end-testsuite-failed\n    - end-testsuite-timeout\n- ChannelID: C07654342\n  selector:\n    label3: value4\n  testName:\n    - integration-test1\n    - integration-test2\n  testSuiteName:\n    - integration-test-suite1\n    - integration-test-suite2\n  events:\n    - start-test\n    - end-test-success\n    - end-test-failed\n    - end-test-aborted\n    - end-test-timeout\n    - start-testsuite\n    - end-testsuite-success\n    - end-testsuite-failed\n    - end-testsuite-aborted\n    - end-testsuite-timeout\n\n")),(0,s.kt)("p",null,"This will send notifications to the channel with the id ",(0,s.kt)("inlineCode",{parentName:"p"},"C01234567")," for the test and test suites with labels ",(0,s.kt)("inlineCode",{parentName:"p"},"label1:value1"),'. Tests with the labels "sanity" and "testName2" and test suites with the labels "test-suite1" and "test-suite2". On events with the labels "end-test-failed", "end-test-timeout", "end-testsuite-failed" and "end-testsuite-timeout". And to the channel with the id ',(0,s.kt)("inlineCode",{parentName:"p"},"C07654342")," for tests with labels ",(0,s.kt)("inlineCode",{parentName:"p"},"label3:value4"),', tests with the labels "integration-test1" and "integration-test2" and test suites with the labels "integration-test-suite1" and "integration-test-suite2" on all events.'),(0,s.kt)("h3",{id:"configure-message-template"},"Configure Message Template"),(0,s.kt)("p",null,"The default message is ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts/blob/311ff9f6fc38dfb5196b91a6f63ee7d3f59f7f4b/charts/testkube-api/slack-template.json"},"/charts/testkube-api/slack-template.json")," and is written using ",(0,s.kt)("a",{parentName:"p",href:"https://app.slack.com/block-kit-builder"},"Slack block kit builder")," and Golang templates. You can customize it depending on your needs. The following structure is referenced in the template where it is getting the data to show:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"type MessageArgs struct {\n    ExecutionID   string\n    ExecutionName string\n    EventType     string\n    Namespace     string\n    Labels        string\n    TestName      string\n    TestType      string\n    Status        string\n    FailedSteps   int\n    TotalSteps    int\n    StartTime     string\n    EndTime       string\n    Duration      string\n}\n")),(0,s.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,s.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/iaiiDilAyMY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))}p.isMDXComponent=!0},70626:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/slack-running-example-3385923c720d56c6648fc215d2ee4076.png"}}]);