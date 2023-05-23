"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=l(r),f=o,m=b["".concat(s,".").concat(f)]||b[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},38131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,u={unversionedId:"cli/testkube_abort",id:"cli/testkube_abort",title:"testkube_abort",description:"testkube abort",source:"@site/docs/cli/testkube_abort.md",sourceDirName:"cli",slug:"/cli/testkube_abort",permalink:"/cli/testkube_abort",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/cli/testkube_abort.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testkube",permalink:"/cli/testkube"},next:{title:"testkube_abort_execution",permalink:"/cli/testkube_abort_execution"}},s={},l=[{value:"testkube abort",id:"testkube-abort",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"testkube-abort"},"testkube abort"),(0,o.kt)("p",null,"Abort tests or test suites"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"testkube abort <resourceName> [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for abort\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "https://demo.testkube.io/results/v1")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth\n      --verbose            show additional debug messages\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli/testkube"},"testkube"),"\t - Testkube entrypoint for kubectl plugin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli/testkube_abort_execution"},"testkube abort execution"),"\t - Aborts execution of the test"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli/testkube_abort_executions"},"testkube abort executions"),"\t - Aborts all executions of the test"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli/testkube_abort_testsuiteexecution"},"testkube abort testsuiteexecution"),"\t - Abort test suite execution"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli/testkube_abort_testsuiteexecutions"},"testkube abort testsuiteexecutions"),"\t - Abort all test suite executions")))}p.isMDXComponent=!0}}]);