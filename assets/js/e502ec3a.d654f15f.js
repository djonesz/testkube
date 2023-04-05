"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[5673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||s;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},40396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const s={},i="testkube get testsuite",a={unversionedId:"reference/cli/testkube_get_testsuite",id:"reference/cli/testkube_get_testsuite",title:"testkube get testsuite",description:"Get test suite by name",source:"@site/docs/reference/cli/testkube_get_testsuite.md",sourceDirName:"reference/cli",slug:"/reference/cli/testkube_get_testsuite",permalink:"/reference/cli/testkube_get_testsuite",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/reference/cli/testkube_get_testsuite.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testkube get testsource",permalink:"/reference/cli/testkube_get_testsource"},next:{title:"testkube get testsuiteexecution",permalink:"/reference/cli/testkube_get_testsuiteexecution"}},u={},l=[{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testkube-get-testsuite"},"testkube get testsuite"),(0,o.kt)("p",null,"Get test suite by name"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,'Getting test suite from given namespace - if no namespace given "testkube" namespace is used'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"testkube get testsuite <testSuiteName> [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --crd-only        show only test crd\n  -h, --help            help for testsuite\n  -l, --label strings   label key value pair: --label key1=value1\n      --no-execution    don't show latest execution\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --api-uri string       api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string        client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --go-template string   go template to render (default "{{.}}")\n      --namespace string     Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled        enable oauth\n  -o, --output string        output type can be one of json|yaml|pretty|go-template (default "pretty")\n      --verbose              show additional debug messages\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/cli/testkube_get"},"testkube get"),"\t - Get resources")))}p.isMDXComponent=!0}}]);