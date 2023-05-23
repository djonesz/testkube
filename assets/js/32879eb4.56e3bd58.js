"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[8559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),b=o,h=d["".concat(l,".").concat(b)]||d[b]||p[b]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},s="Webhooks",i={unversionedId:"articles/webhooks",id:"articles/webhooks",title:"Webhooks",description:"Webhooks allow you to build or set up integrations and send HTTP POST payloads (your Testkube Execution and its current state) whenever an event is triggered. In this case, when your Tests start or finish.",source:"@site/docs/articles/webhooks.md",sourceDirName:"articles",slug:"/articles/webhooks",permalink:"/articles/webhooks",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/articles/webhooks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gitops Testing with ArgoCD",permalink:"/articles/argocd-integration"},next:{title:"Integrating with Slack",permalink:"/articles/slack-integration"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webhooks"},"Webhooks"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/webhooks-and-events/webhooks/about-webhooks"},"Webhooks")," allow you to build or set up integrations and send HTTP POST payloads (your Testkube Execution and its current state) whenever an event is triggered. In this case, when your Tests start or finish."),(0,o.kt)("p",null,"To set them up when using Testkube, you'll need to create your webhook as shown in the following format example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="webhook.yaml"',title:'"webhook.yaml"'},"apiVersion: executor.testkube.io/v1\nkind: Webhook\nmetadata:\n  name: example-webhook\n  namespace: testkube\nspec:\n  uri: http://localhost:8080/events\n  events:\n  - start-test\n  - end-test\n  - end-test-success\n  - end-test-failed\n")),(0,o.kt)("p",null,"And then apply with: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f webhook.yaml\n")),(0,o.kt)("p",null,"Here you'll be able to pass events depending on which webhooks you want to be triggered. Testkube will pass ",(0,o.kt)("inlineCode",{parentName:"p"},"Event")," which can have ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"testExecution")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"testsuiteExecution")," fields."))}p.isMDXComponent=!0}}]);