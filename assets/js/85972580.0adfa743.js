"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[8361],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5829:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"basics",title:"Workflow Basics",sidebar_label:"Basics"},l=void 0,p={unversionedId:"guides/workflows/basics",id:"guides/workflows/basics",isDocsHomePage:!1,title:"Workflow Basics",description:"A workflow in PIPEFORCE is a stateful business process, where one or more humans are involved. Workflows can be modelled using a graphical interface and they can optionally trigger the execution of pipelines.",source:"@site/docs/guides/workflows/010_basics.md",sourceDirName:"guides/workflows",slug:"/guides/workflows/basics",permalink:"/docs/guides/workflows/basics",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/workflows/010_basics.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"basics",title:"Workflow Basics",sidebar_label:"Basics"},sidebar:"tutorialSidebar",previous:{title:"App Testing",permalink:"/docs/guides/app_testing"},next:{title:"Gateways",permalink:"/docs/guides/workflows/gateways"}},u=[{value:"Workflow design with BPMN",id:"workflow-design-with-bpmn",children:[],level:2},{value:"User Task",id:"user-task",children:[],level:2},{value:"System Task",id:"system-task",children:[{value:"Call an embedded pipeline",id:"call-an-embedded-pipeline",children:[],level:3},{value:"Call a pipeline stored in the property store",id:"call-a-pipeline-stored-in-the-property-store",children:[],level:3}],level:2},{value:"How to start a workflow in PIPEFORCE?",id:"how-to-start-a-workflow-in-pipeforce",children:[],level:2}],c={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A workflow in PIPEFORCE is a stateful business process, where one or more humans are involved. Workflows can be modelled using a graphical interface and they can optionally trigger the execution of pipelines."),(0,r.kt)("h2",{id:"workflow-design-with-bpmn"},"Workflow design with BPMN"),(0,r.kt)("p",null,"In PIPEFORCE, workflows can be designed using BPMN (Business Process Model and Notation), which is a worldwide ISO standardization to describe business processes in a formalized (graphical) way. Also, most non-technicals can understand BPMN diagrams. If you\u2019re not familiar with BPMN so far, we highly recommend you to learn more about it before you dive deeper into this chapter. Here you can find a first introduction on Wikipedia: ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation"},"https://en.wikipedia.org/wiki/Business","_","Process","_","Model","_","and","_","Notation"),"."),(0,r.kt)("p",null,"Below is a very simple example of such a BPMN diagram, which shows a vacation approval process where the employee must fill-out a request form, and the supervisor can then approve or decline the vacation request:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4697).Z})),(0,r.kt)("p",null,"BPMN digrams are designed using a BPMN designer tool. You can use your own local software to design such a diagram and then upload them to PIPEFORCE, or you can use the built-in online BPMN designer from PIPEFORCE. With the latter, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create BPMN diagrams online in your web browser and save them"),(0,r.kt)("li",{parentName:"ul"},"Discuss a BPMN diagram with your team"),(0,r.kt)("li",{parentName:"ul"},"Link BPMN tasks with pipeline"),(0,r.kt)("li",{parentName:"ul"},"Directly execute and review BPMN diagrams as workflows")),(0,r.kt)("p",null,"In order to draw a BPMN diagram, the most important elements are these, that you should be aware of:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(29).Z})),(0,r.kt)("h2",{id:"user-task"},"User Task"),(0,r.kt)("p",null,"The user task is the part of a workflow in case an input from a user is required. The workflow waits at this point until the user has finished this task by clicking \u201cComplete\u201d."),(0,r.kt)("p",null,"The input of the user is typically given by filling-out a form."),(0,r.kt)("p",null,"The form can be defined using the \u201cForms\u201d tab in the modeller."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6064).Z})),(0,r.kt)("h2",{id:"system-task"},"System Task"),(0,r.kt)("p",null,"If a task in the workflow must be executed by a \u201cmachine\u201d, for example, sending an email, doing a conversion, or creating a new dataset, typically a System Task is used for this."),(0,r.kt)("p",null,"By default, a pipeline is used to execute such a system task."),(0,r.kt)("p",null,"To configure a system task to execute such a pipeline, you need to make sure, that you have these settings in place:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The task type is set to a System Task."),(0,r.kt)("li",{parentName:"ol"},"The Implementation is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"Delegate Expression"),"."),(0,r.kt)("li",{parentName:"ol"},"The Delegate Expression is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"${pipelineDelegate}"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7285).Z})),(0,r.kt)("p",null,"To execute a pipeline, you have two configuration options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Calling a pipeline ",(0,r.kt)("strong",{parentName:"li"},"embedded")," into the User task as a parameter."),(0,r.kt)("li",{parentName:"ol"},"Calling a pipeline ",(0,r.kt)("strong",{parentName:"li"},"stored in the property store"),".")),(0,r.kt)("h3",{id:"call-an-embedded-pipeline"},"Call an embedded pipeline"),(0,r.kt)("p",null,"In order to trigger an embedded pipeline whenever the system task is executed, you can define a new input parameter with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Text"),", and add the pipeline directly as a value:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9135).Z})),(0,r.kt)("h3",{id:"call-a-pipeline-stored-in-the-property-store"},"Call a pipeline stored in the property store"),(0,r.kt)("p",null,"Lets assume, a pipeline is stored in the property store under this key path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"global/app/vacation-request/pipeline/myPipeline\n")),(0,r.kt)("p",null,"Then, you need to configure your System Task like this to automatically pick-up and execute this pipeline, in case the system task is executed by the workflow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure the Id of the BPMN workflow has the same name as the app: ",(0,r.kt)("inlineCode",{parentName:"li"},"vacation-request"),"."),(0,r.kt)("li",{parentName:"ol"},"Make sure the Id of the System Task, which should execute the pipeline, has the same name as the pipeline: ",(0,r.kt)("inlineCode",{parentName:"li"},"myPipeline"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Do not")," define any pipeline parameter in the System Task.")),(0,r.kt)("p",null,"When executed, the System Task automatically searches for a pipeline in the given app folder and executes it."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2597).Z})),(0,r.kt)("h2",{id:"how-to-start-a-workflow-in-pipeforce"},"How to start a workflow in PIPEFORCE?"),(0,r.kt)("p",null,"The design and execution of a workflow in PIPEFORCE is always a 3-steps task:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Design")," the workflow in the BPMN modeler, and save the result. When you work locally with the pi tool, save it at: ",(0,r.kt)("inlineCode",{parentName:"li"},"app/myApp/workflow/myWorkflow.bpmn"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Deploy")," by pushing the ",(0,r.kt)("strong",{parentName:"li"},"DEPLOY")," button in the online designer, or upload the BPMN file using the pi tool by calling the command: ",(0,r.kt)("inlineCode",{parentName:"li"},"pi publish"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Execute")," the workflow using the command ",(0,r.kt)("inlineCode",{parentName:"li"},"workflow.start")," in a pipeline, and set the Id of your process as the parameter key (see BPMN file). You can use, for example, the pi tool to start a workflow:",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"pi uri \u201dworkflow.start?key=<ID>\u201d"))),(0,r.kt)("p",null,"Then, you can login to your portal at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<NAMESPACE>.pipeforce.net"),", and complete the workflow."))}d.isMDXComponent=!0},29:function(e,t,n){t.Z=n.p+"assets/images/grafik-20201023-111600-e716540ced3fc78d6972cb237074f22a.png"},6064:function(e,t,n){t.Z=n.p+"assets/images/grafik-20201023-112343-ccfefce3bbb9c35fb8f3db56e177f43e.png"},7285:function(e,t,n){t.Z=n.p+"assets/images/grafik-20201023-112937-d7197fcc603c8242fb9ae10461f14890.png"},4697:function(e,t,n){t.Z=n.p+"assets/images/grafik-20210712-071439-264f5ebfa64363d31bd51b553a9591a1.png"},9135:function(e,t,n){t.Z=n.p+"assets/images/send-email-efb16a98ec6933e0d72d13addd0e6d34.png"},2597:function(e,t,n){t.Z=n.p+"assets/images/validation-request-23e2576ea14ab73f055c70f8a7b8e696.png"}}]);