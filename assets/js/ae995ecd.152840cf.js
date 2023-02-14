"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[7140],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(r),k=a,m=f["".concat(l,".").concat(k)]||f[k]||p[k]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,s={unversionedId:"cli-reference/testkube_get",id:"cli-reference/testkube_get",title:"testkube_get",description:"testkube get",source:"@site/docs/cli-reference/testkube_get.md",sourceDirName:"cli-reference",slug:"/cli-reference/testkube_get",permalink:"/cli-reference/testkube_get",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/cli-reference/testkube_get.md",tags:[],version:"current",frontMatter:{}},l={},u=[{value:"testkube get",id:"testkube-get",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"testkube-get"},"testkube get"),(0,a.kt)("p",null,"Get resources"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Get available resources, get single item or list"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"testkube get <resourceName> [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --go-template string   go template to render (default "{{.}}")\n  -h, --help                 help for get\n  -o, --output string        output type can be one of json|yaml|pretty|go-template (default "pretty")\n')),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth (default true)\n      --verbose            show additional debug messages\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube"},"testkube"),"\t - Testkube entrypoint for kubectl plugin"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_get_artifact"},"testkube get artifact"),"\t - List artifacts of the given test or test suite execution name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_get_context"},"testkube get context"),"\t - Set context for Testkube Cloud"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_get_execution"},"testkube get execution"),"\t - Lists or gets test executions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_get_executor"},"testkube get executor"),"\t - Gets executor details"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_get_test"},"testkube get test"),"\t - Get all available tests"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_get_testsource"},"testkube get testsource"),"\t - Get test source details"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_get_testsuite"},"testkube get testsuite"),"\t - Get test suite by name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_get_testsuiteexecution"},"testkube get testsuiteexecution"),"\t - Gets TestSuite Execution details"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_get_webhook"},"testkube get webhook"),"\t - Get webhook details")))}p.isMDXComponent=!0}}]);