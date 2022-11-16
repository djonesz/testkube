"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[7318],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),a=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=a(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=a(r),d=l,k=b["".concat(i,".").concat(d)]||b[d]||p[d]||s;return r?n.createElement(k,u(u({ref:t},c),{},{components:r})):n.createElement(k,u({ref:t},c))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=r.length,u=new Array(s);u[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,u[1]=o;for(var a=2;a<s;a++)u[a]=r[a];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},90831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var n=r(87462),l=(r(67294),r(3905));const s={},u=void 0,o={unversionedId:"cli-reference/kubectl-testkube_delete_testsuite",id:"cli-reference/kubectl-testkube_delete_testsuite",title:"kubectl-testkube_delete_testsuite",description:"kubectl-testkube delete testsuite",source:"@site/docs/5-cli-reference/kubectl-testkube_delete_testsuite.md",sourceDirName:"5-cli-reference",slug:"/cli-reference/kubectl-testkube_delete_testsuite",permalink:"/testkube/cli-reference/kubectl-testkube_delete_testsuite",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/5-cli-reference/kubectl-testkube_delete_testsuite.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kubectl-testkube_delete_testsource",permalink:"/testkube/cli-reference/kubectl-testkube_delete_testsource"},next:{title:"kubectl-testkube_delete_webhook",permalink:"/testkube/cli-reference/kubectl-testkube_delete_webhook"}},i={},a=[{value:"kubectl-testkube delete testsuite",id:"kubectl-testkube-delete-testsuite",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:a};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"kubectl-testkube-delete-testsuite"},"kubectl-testkube delete testsuite"),(0,l.kt)("p",null,"Delete test suite"),(0,l.kt)("h3",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Delete test suite by name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl-testkube delete testsuite <testSuiteName> [flags]\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"      --all             Delete all tests\n  -h, --help            help for testsuite\n  -l, --label strings   label key value pair: --label key1=value1\n")),(0,l.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string      Client used for connecting to testkube API one of proxy|direct (default "proxy")\n      --namespace string   kubernetes namespace (default "testkube")\n      --oauth-enabled      enable oauth\n      --verbose            should I show additional debug messages\n')),(0,l.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_delete"},"kubectl-testkube delete"),"\t - Delete resources")))}p.isMDXComponent=!0}}]);