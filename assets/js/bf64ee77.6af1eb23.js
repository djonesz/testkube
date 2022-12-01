"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[5685],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>k});var n=r(67294);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,u=function(e,t){if(null==e)return{};var r,n,u={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,u=e.mdxType,s=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),b=c(r),k=u,f=b["".concat(l,".").concat(k)]||b[k]||p[k]||s;return r?n.createElement(f,a(a({ref:t},i),{},{components:r})):n.createElement(f,a({ref:t},i))}));function k(e,t){var r=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var s=r.length,a=new Array(s);a[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:u,a[1]=o;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},72968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(87462),u=(r(67294),r(3905));const s={},a=void 0,o={unversionedId:"cli-reference/kubectl-testkube_status",id:"cli-reference/kubectl-testkube_status",title:"kubectl-testkube_status",description:"kubectl-testkube status",source:"@site/docs/5-cli-reference/kubectl-testkube_status.md",sourceDirName:"5-cli-reference",slug:"/cli-reference/kubectl-testkube_status",permalink:"/testkube/cli-reference/kubectl-testkube_status",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/5-cli-reference/kubectl-testkube_status.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kubectl-testkube_run_testsuite",permalink:"/testkube/cli-reference/kubectl-testkube_run_testsuite"},next:{title:"kubectl-testkube_status_oauth",permalink:"/testkube/cli-reference/kubectl-testkube_status_oauth"}},l={},c=[{value:"kubectl-testkube status",id:"kubectl-testkube-status",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],i={toc:c};function p(e){let{components:t,...r}=e;return(0,u.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"kubectl-testkube-status"},"kubectl-testkube status"),(0,u.kt)("p",null,"Show status of feature or resource"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"kubectl-testkube status [feature|resource] [flags]\n")),(0,u.kt)("h3",{id:"options"},"Options"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"  -h, --help   help for status\n")),(0,u.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth\n      --verbose            show additional debug messages\n')),(0,u.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube"},"kubectl-testkube"),"\t - Testkube entrypoint for kubectl plugin"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_status_oauth"},"kubectl-testkube status oauth"),"\t - Get oauth status"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_status_telemetry"},"kubectl-testkube status telemetry"),"\t - Get telemetry status")))}p.isMDXComponent=!0}}]);