"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[4590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>a,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},a=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),k=u(n),b=o,m=k["".concat(s,".").concat(b)]||k[b]||p[b]||l;return n?r.createElement(m,c(c({ref:t},a),{},{components:n})):r.createElement(m,c({ref:t},a))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<l;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},94629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const l={},c=void 0,i={unversionedId:"cli-reference/kubectl-testkube_completion_zsh",id:"cli-reference/kubectl-testkube_completion_zsh",title:"kubectl-testkube_completion_zsh",description:"kubectl-testkube completion zsh",source:"@site/docs/5-cli-reference/kubectl-testkube_completion_zsh.md",sourceDirName:"5-cli-reference",slug:"/cli-reference/kubectl-testkube_completion_zsh",permalink:"/testkube/cli-reference/kubectl-testkube_completion_zsh",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/5-cli-reference/kubectl-testkube_completion_zsh.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kubectl-testkube_completion_powershell",permalink:"/testkube/cli-reference/kubectl-testkube_completion_powershell"},next:{title:"kubectl-testkube_config",permalink:"/testkube/cli-reference/kubectl-testkube_config"}},s={},u=[{value:"kubectl-testkube completion zsh",id:"kubectl-testkube-completion-zsh",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Linux:",id:"linux",level:4},{value:"macOS:",id:"macos",level:4},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],a={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kubectl-testkube-completion-zsh"},"kubectl-testkube completion zsh"),(0,o.kt)("p",null,"Generate the autocompletion script for zsh"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Generate the autocompletion script for the zsh shell."),(0,o.kt)("p",null,"If shell completion is not already enabled in your environment you will need\nto enable it.  You can execute the following once:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'echo "autoload -U compinit; compinit" >> ~/.zshrc\n')),(0,o.kt)("p",null,"To load completions in your current shell session:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"source <(kubectl-testkube completion zsh); compdef _kubectl-testkube kubectl-testkube\n")),(0,o.kt)("p",null,"To load completions for every new session, execute once:"),(0,o.kt)("h4",{id:"linux"},"Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl-testkube completion zsh > "${fpath[1]}/_kubectl-testkube"\n')),(0,o.kt)("h4",{id:"macos"},"macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl-testkube completion zsh > $(brew --prefix)/share/zsh/site-functions/_kubectl-testkube\n")),(0,o.kt)("p",null,"You will need to start a new shell for this setup to take effect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl-testkube completion zsh [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help              help for zsh\n      --no-descriptions   disable completion descriptions\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth (default true)\n      --verbose            show additional debug messages\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_completion"},"kubectl-testkube completion"),"\t - Generate the autocompletion script for the specified shell")))}p.isMDXComponent=!0}}]);