"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[2422],{3905:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>u});var t=i(7294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(i),u=a,v=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return i?t.createElement(v,r(r({ref:n},c),{},{components:i})):t.createElement(v,r({ref:n},c))}));function u(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=i[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},9966:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=i(7462),a=(i(7294),i(3905));const o={},r="Versioning",l={unversionedId:"guides/commands_pipelines/command_versioning",id:"guides/commands_pipelines/command_versioning",isDocsHomePage:!1,title:"Versioning",description:"Each command can be available and used in different versions in parallel in pipelines. This is to support downwards compatibilty in pipeline scripts. Which commands are availble in which versions can be found in the commands reference docs.",source:"@site/docs/guides/commands_pipelines/40_command_versioning.md",sourceDirName:"guides/commands_pipelines",slug:"/guides/commands_pipelines/command_versioning",permalink:"/docs/guides/commands_pipelines/command_versioning",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/commands_pipelines/40_command_versioning.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Controlling Pipeline Flow",permalink:"/docs/guides/commands_pipelines/controlling_flow"},next:{title:"Error Handling",permalink:"/docs/guides/commands_pipelines/error_handling"}},s=[{value:"Local version",id:"local-version",children:[],level:3},{value:"Global version",id:"global-version",children:[],level:3},{value:"Version fallback",id:"version-fallback",children:[],level:3},{value:"Default version",id:"default-version",children:[],level:3},{value:"Report an Issue",id:"report-an-issue",children:[],level:2}],p={toc:s};function c(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"versioning"},"Versioning"),(0,a.kt)("p",null,"Each command can be available and used in different versions in parallel in pipelines. This is to support downwards compatibilty in pipeline scripts. Which commands are availble in which versions can be found in the ",(0,a.kt)("a",{parentName:"p",href:"../../api/commands"},"commands reference docs"),"."),(0,a.kt)("h3",{id:"local-version"},"Local version"),(0,a.kt)("p",null,"In order to use a specific version of a single command, you need to add it as suffix ",(0,a.kt)("inlineCode",{parentName:"p"},":<version>")," to the command name, whereas ",(0,a.kt)("inlineCode",{parentName:"p"},"<version>")," needs to be replaced by the version to be used. For example ",(0,a.kt)("inlineCode",{parentName:"p"},":v1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},":v2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},":v3"),", aso. Here is an example to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," command with exact version ",(0,a.kt)("inlineCode",{parentName:"p"},"v3")," in a pipeline:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - log:v3:\n      message: "Hello World!"   \n')),(0,a.kt)("p",null,"Here, we use version ",(0,a.kt)("inlineCode",{parentName:"p"},"v4")," of command ",(0,a.kt)("inlineCode",{parentName:"p"},"log"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - log:v4:\n      message: "Hello World!"   \n')),(0,a.kt)("p",null,"If no version is specified, by default ",(0,a.kt)("inlineCode",{parentName:"p"},"v1")," is used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - log:\n      message: "Hello World!"   \n')),(0,a.kt)("p",null,"Is the same as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - log:v1:\n      message: "Hello World!"   \n')),(0,a.kt)("h3",{id:"global-version"},"Global version"),(0,a.kt)("p",null,"Instead of defining the version for each command, you can also set it globally for all commands of a pipeline using the header ",(0,a.kt)("inlineCode",{parentName:"p"},"version"),". Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'headers:\n  version: v4\npipeline:\n  - log:\n      message: "Hello World!"\n')),(0,a.kt)("p",null,"In this case all commands defined in the pipeline will use version ",(0,a.kt)("inlineCode",{parentName:"p"},"v4")," without the need of local definition."),(0,a.kt)("p",null,"In case you combine the header ",(0,a.kt)("inlineCode",{parentName:"p"},"apiVersion")," with local version on a command, the local one wins:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'headers:\n  version: v4\npipeline:\n  - log:v5:\n      message: "Hello World!"\n')),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," command is used with version ",(0,a.kt)("inlineCode",{parentName:"p"},"v5"),". "),(0,a.kt)("h3",{id:"version-fallback"},"Version fallback"),(0,a.kt)("p",null,"Definig a version means you specify the highest version number to be used. If this version is not availble, the next lower available version is loaded instead. "),(0,a.kt)("p",null,"In case you specify a version like ",(0,a.kt)("inlineCode",{parentName:"p"},"v5")," for example, it will be tried to load the command with this exact version. In case no such command with this version exists, the next lower version will be looked up, like ",(0,a.kt)("inlineCode",{parentName:"p"},"v4")," for example. If no command with this version exists, the next lower version ",(0,a.kt)("inlineCode",{parentName:"p"},"v3")," is tried, aso. "),(0,a.kt)("h3",{id:"default-version"},"Default version"),(0,a.kt)("p",null,"In case no version is specified, the version ",(0,a.kt)("inlineCode",{parentName:"p"},"v1")," is used by default."),(0,a.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Your help is needed!")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,a.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!"))))}c.isMDXComponent=!0}}]);