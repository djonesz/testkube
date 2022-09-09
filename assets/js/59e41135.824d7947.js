"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[3940],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=i(r),k=c,f=b["".concat(l,".").concat(k)]||b[k]||p[k]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function k(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,o=new Array(a);o[0]=b;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:c,o[1]=u;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var n=r(7462),c=(r(7294),r(3905));const a={},o=void 0,u={unversionedId:"cli-reference/kubectl-testkube_watch",id:"cli-reference/kubectl-testkube_watch",title:"kubectl-testkube_watch",description:"kubectl-testkube watch",source:"@site/docs/5-cli-reference/kubectl-testkube_watch.md",sourceDirName:"5-cli-reference",slug:"/cli-reference/kubectl-testkube_watch",permalink:"/testkube/cli-reference/kubectl-testkube_watch",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/5-cli-reference/kubectl-testkube_watch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kubectl-testkube_version",permalink:"/testkube/cli-reference/kubectl-testkube_version"},next:{title:"kubectl-testkube_watch_execution",permalink:"/testkube/cli-reference/kubectl-testkube_watch_execution"}},l={},i=[{value:"kubectl-testkube watch",id:"kubectl-testkube-watch",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:i};function p(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"kubectl-testkube-watch"},"kubectl-testkube watch"),(0,c.kt)("p",null,"Watch tests or test suites"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"kubectl-testkube watch <resourceName> [flags]\n")),(0,c.kt)("h3",{id:"options"},"Options"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"  -h, --help   help for watch\n")),(0,c.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth\n      --verbose            show additional debug messages\n')),(0,c.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube"},"kubectl-testkube"),"\t - Testkube entrypoint for kubectl plugin"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_watch_execution"},"kubectl-testkube watch execution"),"\t - Watch logs output from executor pod"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_watch_testsuiteexecution"},"kubectl-testkube watch testsuiteexecution"),"\t - Watch test")))}p.isMDXComponent=!0}}]);