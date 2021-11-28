"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[493],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5486:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={},s="Send Teams Message",p={unversionedId:"tutorials/beginner/send-teams-message",id:"tutorials/beginner/send-teams-message",isDocsHomePage:!1,title:"Send Teams Message",description:"Estimated time: 10 min.",source:"@site/docs/tutorials/beginner/90_send-teams-message.md",sourceDirName:"tutorials/beginner",slug:"/tutorials/beginner/send-teams-message",permalink:"/docs/tutorials/beginner/send-teams-message",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/tutorials/beginner/90_send-teams-message.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Send an Email",permalink:"/docs/tutorials/beginner/send-email"},next:{title:"Create a new Webhook",permalink:"/docs/tutorials/beginner/create-webhook"}},m=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Intro",id:"intro",children:[],level:2},{value:"1 - Create a webhook in Microsoft Teams",id:"1---create-a-webhook-in-microsoft-teams",children:[],level:2},{value:"2 - Send a message from a pipeline",id:"2---send-a-message-from-a-pipeline",children:[],level:2}],c={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"send-teams-message"},"Send Teams Message"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Estimated time:")," 10 min."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PIPEFORCE Enterprise 7.0 or higher"),(0,i.kt)("li",{parentName:"ul"},"You have a valid PIPEFORCE Developer account"),(0,i.kt)("li",{parentName:"ul"},"You have completed tutorial: ",(0,i.kt)("a",{parentName:"li",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/2151284934/Tutorial%3A+Create+a+new+app"},"Tutorial: Create a new app")),(0,i.kt)("li",{parentName:"ul"},"You have completed tutorial: ",(0,i.kt)("a",{parentName:"li",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/2151285094/Tutorial%3A+Create+and+execute+a+pipeline"},"Tutorial: Create and execute a pipeline")),(0,i.kt)("li",{parentName:"ul"},"You have an Office 365 / Teams account")),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"Sending messages from PIPEFORCE to external systems is very easy in case there is an API or webhook available. This tutorial will demonstrate that by sending a message to Office 365 / Teams."),(0,i.kt)("h2",{id:"1---create-a-webhook-in-microsoft-teams"},"1 - Create a webhook in Microsoft Teams"),(0,i.kt)("p",null,"In the first step, you need to create a webhook in Teams so we can send data to it. To do so, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Login to your Office 365 account: ",(0,i.kt)("a",{parentName:"p",href:"https://office.com"},"https://office.com"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the Teams app")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to Teams \u2192 Your Teams \u2192 Select the channel you want to send messages to \u2192 Connectors:  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151285568/grafik-20210727-092443.png?api=v2",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the upcoming list click ",(0,i.kt)("inlineCode",{parentName:"p"},"Configure")," of ",(0,i.kt)("strong",{parentName:"p"},"Incoming Webhook"),":  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151285568/grafik-20210727-092742.png?api=v2",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Give the webhook a meaningful name and then click ",(0,i.kt)("inlineCode",{parentName:"p"},"Create"),":  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151285568/grafik-20210727-092945.png?api=v2",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the generated webhook url into your clipboard, then click ",(0,i.kt)("inlineCode",{parentName:"p"},"Done"),":  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151285568/grafik-20210727-093159.png?api=v2",alt:null})))),(0,i.kt)("h2",{id:"2---send-a-message-from-a-pipeline"},"2 - Send a message from a pipeline"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Login to the portal ",(0,i.kt)("a",{parentName:"p",href:"https://NAMESPACE.pipeforce.net"},"https://NAMESPACE.pipeforce.net"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to LOW CODE \u2192 Workbench")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ad-hoc pipeline editor is shown")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy and paste this content into the editor and overwrite any existing data there by this:  "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n   - http.post:\n      url: "https://yourname.webhook.office.com/..."\n      body: |\n        {\n          "text": "This message was sent with PIPEFORCE."\n        }\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," param by the webhook url you have copied to clipboard before.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"As you can see, we set the ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," for the HTTP message which will be used by the ",(0,i.kt)("inlineCode",{parentName:"p"},"http.post")," command in order to send it to the Teams webhook using the given url. Note the pipe ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," character of parameter body. This is specific to YAML and allows to define a multi-line value without additional \u201cline encodings\u201d or \u201cescapes\u201d. We can write a JSON string straight here.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"RUN"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Done"),". After a few seconds, you should receive a new message in the Teams channel:  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151285568/grafik-20210727-123350.png?api=v2",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you want, you can persist this pipeline in an app to keep it for later use."))),(0,i.kt)("p",null,"References:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/send-via-connectors"},"https://docs.microsoft.com/en-us/outlook/actionable-messages/send-via-connectors")))}u.isMDXComponent=!0}}]);