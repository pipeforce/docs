"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9677],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2847:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=t(7462),i=(t(7294),t(3905));const o={},l="Custom Functions",r={unversionedId:"guides/commands_pipelines/custom_functions",id:"guides/commands_pipelines/custom_functions",isDocsHomePage:!1,title:"Custom Functions",description:"Inside a Pipeline  you can declare a custom function using the command function and reuse it by calling the command function.call.",source:"@site/docs/guides/commands_pipelines/33_custom_functions.md",sourceDirName:"guides/commands_pipelines",slug:"/guides/commands_pipelines/custom_functions",permalink:"/docs/guides/commands_pipelines/custom_functions",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/commands_pipelines/33_custom_functions.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Built-In Functions",permalink:"/docs/guides/commands_pipelines/functions"},next:{title:"Controlling Pipeline Flow",permalink:"/docs/guides/commands_pipelines/controlling_flow"}},s=[{value:"Declaring a function",id:"declaring-a-function",children:[],level:2},{value:"Accessing scope variables",id:"accessing-scope-variables",children:[],level:2},{value:"Calling a function",id:"calling-a-function",children:[],level:2},{value:"Report an Issue",id:"report-an-issue",children:[],level:2}],c={toc:s};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-functions"},"Custom Functions"),(0,i.kt)("p",null,"Inside a ",(0,i.kt)("a",{parentName:"p",href:"/docs/commands_pipelines#pipeline"},"Pipeline ")," you can declare a custom function using the command ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#function-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"function"))," and reuse it by calling the command ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/commands#functioncall-v1"},(0,i.kt)("inlineCode",{parentName:"a"},"function.call")),"."),(0,i.kt)("h2",{id:"declaring-a-function"},"Declaring a function"),(0,i.kt)("p",null,"Here is a simple example to declare a function in a pipeline:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - function:\n      args:\n        firstName: "Some"\n        lastName:  "Name"\n      do: |\n        firstName + \' \' + lastName\n')),(0,i.kt)("p",null,"The parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," defines the (optional) parameters to the function as name-value pairs."),(0,i.kt)("p",null,"This arguments can be directly accessed by their names inside to the function expression."),(0,i.kt)("p",null,"The function expression is placed using the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"do"),". This can be any supported ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/commands_pipelines/pel"},"Pipeline Expression"),". Since the parameter is an explicit expression parameter, you do not need to use the expression brackets like ",(0,i.kt)("inlineCode",{parentName:"p"},"#{"),"and ",(0,i.kt)("inlineCode",{parentName:"p"},"}"),". They're optional."),(0,i.kt)("p",null,"This example will execute the function with the pipeline flow and results in an output like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Some Name\n")),(0,i.kt)("h2",{id:"accessing-scope-variables"},"Accessing scope variables"),(0,i.kt)("p",null,"You can also access all scopes variables like ",(0,i.kt)("inlineCode",{parentName:"p"},"vars"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"headers")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"body"),", as would inside any Pipeline Expression:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  lastName: "Name"\npipeline:\n  - function:\n      args:\n        firstName: "Some"\n      do: |\n        firstName + \' \' + lastName\n')),(0,i.kt)("h2",{id:"calling-a-function"},"Calling a function"),(0,i.kt)("p",null,"In order to call a function from another position in the pipeline, you have to first declare it using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"function")," and to define a name for the function unique inside the pipelie using the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"A callable function must be declared first in the pipeline, before it can be called."),(0,i.kt)("li",{parentName:"ul"},"It's good practise to define callable functions always at the very top of the pipeline."),(0,i.kt)("li",{parentName:"ul"},"Callable function names must be unique within a pipeline."),(0,i.kt)("li",{parentName:"ul"},"A callable function (= has ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," parameter) will be ignored by the pipeline flow and must be explicitely called using the command ",(0,i.kt)("inlineCode",{parentName:"li"},"function.call"),".")))),(0,i.kt)("p",null,"Here is an example to declare such a callable function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - function:\n      name: "concatNames"\n      args:\n        firstName: "Some"\n        lastName:  "Name"\n      do: |\n        firstName + \' \' + lastName\n\n')),(0,i.kt)("p",null,"As soon as such a function has a ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," assigned, it will no longer be executed by the default pipeline flow, but ignored. Now, it can be executed only by calling the command ",(0,i.kt)("inlineCode",{parentName:"p"},"function.call"),"."),(0,i.kt)("p",null,"In case you would like to execute this function with the pipeline flow and via ",(0,i.kt)("inlineCode",{parentName:"p"},"function.call"),", you need to set the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"flow")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". "),(0,i.kt)("p",null,"Here is an example to call the function ",(0,i.kt)("inlineCode",{parentName:"p"},"concatNames")," declared before:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - function:\n      name: "concatNames"\n      args:\n        firstName: "Some"\n        lastName:  "Name"\n      do: |\n        firstName + \' \' + lastName\n\n  - function.call:\n      name: "concatNames"\n\n')),(0,i.kt)("p",null,"In case you do not define any args in ",(0,i.kt)("inlineCode",{parentName:"p"},"function.call"),", the default args will be used. So the output here would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Some Name\n")),(0,i.kt)("p",null,"You can overwrite the default args by re-declaring some or all of them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - function:\n      name: "concatNames"\n      args:\n        firstName: "Some"\n        lastName:  "Name"\n      do: |\n        firstName + \' \' + lastName\n\n  - function.call:\n      name: "concatNames"\n      args:\n        firstName: "HELLO"\n\n')),(0,i.kt)("p",null,"Output would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HELLO Name\n")),(0,i.kt)("p",null,"By default, the result of the function will be stored to the body. You can change that, by using the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"output")," to store it to any location like the vars scope for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - function:\n      name: "concatNames"\n      args:\n        firstName: "Some"\n        lastName:  "Name"\n      do: |\n        firstName + \' \' + lastName\n\n  - function.call:\n      name: "concatNames"\n      args:\n        firstName: "HELLO"\n      output: var.functionResult\n\n  - set.body:\n      value: "Result in variable functionResult: #{var.functionResult}"\n\n')),(0,i.kt)("p",null,"This will create a body value like this after execution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Result in variable functionResult: HELLO Name\n")),(0,i.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Your help is needed!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,i.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!"))))}p.isMDXComponent=!0}}]);