"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9588],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=a.createContext({}),c=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(r.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,h=m["".concat(r,".").concat(u)]||m[u]||p[u]||s;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=m;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const s={},o="Async & Polling",l={unversionedId:"guides/commands_pipelines/async_command",id:"guides/commands_pipelines/async_command",title:"Async & Polling",description:"Since Version: 9.0",source:"@site/docs/guides/commands_pipelines/55_async_command.md",sourceDirName:"guides/commands_pipelines",slug:"/guides/commands_pipelines/async_command",permalink:"/docs/guides/commands_pipelines/async_command",draft:!1,editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/commands_pipelines/55_async_command.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/docs/guides/commands_pipelines/error_handling"},next:{title:"3. Connectors",permalink:"/docs/guides/connectors"}},r={},c=[{value:"Start a command async",id:"start-a-command-async",level:2},{value:"Listing async tasks: <code>async.list</code>",id:"listing-async-tasks-asynclist",level:2},{value:"Polling async task: <code>async.fetch</code>",id:"polling-async-task-asyncfetch",level:2},{value:"Async task not finished",id:"async-task-not-finished",level:3},{value:"Async task finished",id:"async-task-finished",level:3},{value:"Async task already fetched",id:"async-task-already-fetched",level:3},{value:"Polling frequency",id:"polling-frequency",level:3},{value:"Complete a task",id:"complete-a-task",level:2},{value:"Via command <code>async.complete</code>",id:"via-command-asynccomplete",level:3},{value:"Via message <code>async.complete.id</code>",id:"via-message-asynccompleteid",level:3},{value:"Cancel a task",id:"cancel-a-task",level:2},{value:"Via command <code>async.cancel</code>",id:"via-command-asynccancel",level:3},{value:"Via message <code>async.cancel.id</code>",id:"via-message-asynccancelid",level:3},{value:"Async task timeout (experimental)",id:"async-task-timeout-experimental",level:2},{value:"Report an Issue",id:"report-an-issue",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"async--polling"},"Async & Polling"),(0,i.kt)("p",{class:"theme-doc-version-badge badge badge--secondary"},"Since Version: 9.0"),(0,i.kt)("p",null,"By default, commands are executed in sync mode. This means if the command is executed and once it has finished its task, it returns the result to the caller."),(0,i.kt)("p",null,"Even if this approach is easy to understand and to use, it has some drawbacks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Long running tasks could timeout (so no return to caller)"),(0,i.kt)("li",{parentName:"ul"},"No parallel execution = lower performance ")),(0,i.kt)("p",null,"Since version ",(0,i.kt)("inlineCode",{parentName:"p"},"9.0")," of PIPEFORCE, these new features have been introduced in order to support the async execution of commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Optional command parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"wait")," in order to wait for an async command to be finished."),(0,i.kt)("li",{parentName:"ul"},"You can now list, get, complete and cancel async tasks remotely via command endpoints."),(0,i.kt)("li",{parentName:"ul"},"Long-polling support in order to poll for an async task to be finished")),(0,i.kt)("h2",{id:"start-a-command-async"},"Start a command async"),(0,i.kt)("p",null,"See the commands documentation in order to find out, which commands support async execution. Commands which support async execution will be executed in async by default. So no special configuration required."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In case the caller needs to wait for the result of a command in a synchronous way even if the command is by default executed async, you can use the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"wait: true")," in order to block the command until the result is available. But note: For long running tasks, this could lead to an HTTP gateway timeout in case calculation of the result takes too long.")),(0,i.kt)("p",null,"When a command runs in async mode, it will create an async task, register this task in the backend and will immediately return with a ",(0,i.kt)("inlineCode",{parentName:"p"},"correlationId")," which is a reference to this async task. The response of such an async command call could look like this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "correlationId": "254d7d80-4530-431a-a0cc-c606e8faa406",\n    "status": "running",\n    "statusCode": 200,\n    "created": 1682349730659\n}\n')),(0,i.kt)("p",null," Async tasks can be listed, fetched, completed or cancelled using the ",(0,i.kt)("inlineCode",{parentName:"p"},"correlationId")," and one of the appropriate commands, explained as follows."),(0,i.kt)("h2",{id:"listing-async-tasks-asynclist"},"Listing async tasks: ",(0,i.kt)("inlineCode",{parentName:"h2"},"async.list")),(0,i.kt)("p",null,"In order to list all active async tasks registered in the backend queue, you can use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"async.list"),". Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  - async.list\n")),(0,i.kt)("p",null,"This command will return you a JSON array with information about all async tasks in ",(0,i.kt)("inlineCode",{parentName:"p"},"running")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"finished")," state. Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "correlationId": "254d7d80-4530-431a-a0cc-c606e8faa406",\n        "status": "running",\n        "statusCode": 200,\n        "created": 1682349730659\n    },\n    {\n        "correlationId": "a5dd7d81-3520-791a-c3fc-a706e8faa000",\n        "status": "finished",\n        "statusCode": 200,\n        "created": 16823497312345\n    }\n]\n')),(0,i.kt)("p",null,"If a task is in ",(0,i.kt)("inlineCode",{parentName:"p"},"running")," state, this means it is still executing or it has been finished but no result has been set so far. So it is not ready to be fetched. "),(0,i.kt)("p",null,"If a task is in state ",(0,i.kt)("inlineCode",{parentName:"p"},"finished")," it means its execution has been finished ",(0,i.kt)("strong",{parentName:"p"},"and")," the final result has been provided, but the result was not fetched so far."),(0,i.kt)("p",null,"Once the result of an async task has been fetched (returned) by the caller, the async task will be removed from this list."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Do not use this listing of tasks for polling since this is not optimized for this. Calling the command ",(0,i.kt)("inlineCode",{parentName:"p"},"async.list")," too high-frequently will result in a blocking by the backend for some minutes. Use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"async.fetch")," for polling instead. ")),(0,i.kt)("h2",{id:"polling-async-task-asyncfetch"},"Polling async task: ",(0,i.kt)("inlineCode",{parentName:"h2"},"async.fetch")),(0,i.kt)("p",null,"Once an async task has been started, it can be polled in intervalls to check if it has been finished and to return its computation result. This concept is also called long-polling."),(0,i.kt)("p",null,"For this, you can use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"async.fetch")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"correlationId")," as parameter and call it in intervals. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  - async.fetch:\n      correlationId: 254d7d80-4530-431a-a0cc-c606e8faa406\n")),(0,i.kt)("p",null,"This command will behave like this:"),(0,i.kt)("h3",{id:"async-task-not-finished"},"Async task not finished"),(0,i.kt)("p",null,"If the async task is not finished yet (still in ",(0,i.kt)("inlineCode",{parentName:"p"},"running")," state) it will return the HTTP status code ",(0,i.kt)("inlineCode",{parentName:"p"},"204")," (No Content) and in the body, a result JSON will be placed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCode")," attribute set to ",(0,i.kt)("inlineCode",{parentName:"p"},"204"),". Example response body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "correlationId": "96ce80ba-c43c-48f3-b772-a3bd822634d3",\n  "status": "running",\n  "statusCode": 204,\n  "statusMessage": "No Content",\n  "created": 1682438759158\n}\n')),(0,i.kt)("h3",{id:"async-task-finished"},"Async task finished"),(0,i.kt)("p",null,"If the async task is finished, the computation value of the task will be returned with a HTTP status code 200. Example response body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "correlationId": "96ce80ba-c43c-48f3-b772-a3bd822634d3",\n  "status": "finished",\n  "statusCode": 200,\n  "value": "someAsyncComputationResult",\n  "created": 1682438759158\n}\n')),(0,i.kt)("h3",{id:"async-task-already-fetched"},"Async task already fetched"),(0,i.kt)("p",null,"In case the result of an async task was already fetched by a previous call of ",(0,i.kt)("inlineCode",{parentName:"p"},"async.fetch"),", the HTTP status code ",(0,i.kt)("inlineCode",{parentName:"p"},"404")," (Not Found) will be returned in header and in the attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCode")," of result JSON. Example response body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "correlationId": "96ce80ba-c43c-48f3-b772-a3bd822634d3",\n  "statusCode": 404,\n  "statusMessage": "Not Found",\n  "created": 1682438759158\n}\n')),(0,i.kt)("h3",{id:"polling-frequency"},"Polling frequency"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The first polling call using ",(0,i.kt)("inlineCode",{parentName:"p"},"async.fetch")," can be executed immediately after starting the task. The time between any subsequet polling calls must be >= 2 seconds. If called in intervals < 2 seconds a punishment time of 2 seconds will be added for each call up to 10 minutes. This means after the task has been finished, it will wait this additional time before it returns. ")),(0,i.kt)("h2",{id:"complete-a-task"},"Complete a task"),(0,i.kt)("p",null,"Sometimes an async task must be completed from external since the result could be provided earlier or the design is like this that the compution takes place externally (by a microservice for example)."),(0,i.kt)("p",null,"For this, you you have to options: "),(0,i.kt)("h3",{id:"via-command-asynccomplete"},"Via command ",(0,i.kt)("inlineCode",{parentName:"h3"},"async.complete")),(0,i.kt)("p",null,"You can complete a running async task by calling the command ",(0,i.kt)("inlineCode",{parentName:"p"},"async.complete")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"correlationId"),". Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml:"},'pipeline:\n  - async.complete:\n      correlationId: 254d7d80-4530-431a-a0cc-c606e8faa406\n      input: "theResultValueOfTheTask"\n')),(0,i.kt)("p",null,"You can optionally specify the result value to be returned to the caller / poller of the task using the ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," parameter or by placing it at the body of the pipeline."),(0,i.kt)("p",null,"Once the command ",(0,i.kt)("inlineCode",{parentName:"p"},"async.complete")," was called, the async task will change its state to ",(0,i.kt)("inlineCode",{parentName:"p"},"finished")," and the given result will be set as the computation result. The next polling call of ",(0,i.kt)("inlineCode",{parentName:"p"},"async.fetch")," will return this result value and finally removes the async task from the backend queue."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"async.complete")," several times for the same ",(0,i.kt)("inlineCode",{parentName:"p"},"correlationId")," has no effect since only the first caller wins. Any subsequent such calls will simply be ignored (bot no error is thrown).")),(0,i.kt)("h3",{id:"via-message-asynccompleteid"},"Via message ",(0,i.kt)("inlineCode",{parentName:"h3"},"async.complete.id")),(0,i.kt)("p",null,"Another option to complete an async task is by sending a message to the queue ",(0,i.kt)("inlineCode",{parentName:"p"},"pipeforce_async_response")," via the default exchange ",(0,i.kt)("inlineCode",{parentName:"p"},"pipeforce.default.topic")," with a routing key of this format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"async.complete.<CORRELATION_ID>\n")),(0,i.kt)("p",null,"Whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"<CORRELATION_ID>")," must be replaced by the correlation id from the async response."),(0,i.kt)("p",null,"This is especially handy in case you have a microservice which is working mainly in async mode."),(0,i.kt)("p",null,"The body of the message will be used as the response value to the async call."),(0,i.kt)("p",null,"Once the message ",(0,i.kt)("inlineCode",{parentName:"p"},"async.complete.<CORRELATION_ID>")," was send, the async task will change its state to ",(0,i.kt)("inlineCode",{parentName:"p"},"finished")," and the given message body will be set as the computation result. The next polling call of ",(0,i.kt)("inlineCode",{parentName:"p"},"async.fetch")," will return this result value and finally removes the async task from the backend queue."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Sending the message  ",(0,i.kt)("inlineCode",{parentName:"p"},"async.complete.<CORRELATION_ID>")," several times for the same ",(0,i.kt)("inlineCode",{parentName:"p"},"correlationId")," has no effect since only the first message wins. Any subsequent such message will simply be ignored (bot no error is thrown).")),(0,i.kt)("h2",{id:"cancel-a-task"},"Cancel a task"),(0,i.kt)("p",null,"In case an async task must be cancelled, you also have two options:"),(0,i.kt)("h3",{id:"via-command-asynccancel"},"Via command ",(0,i.kt)("inlineCode",{parentName:"h3"},"async.cancel")),(0,i.kt)("p",null,"You can use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"async.cancel")," together with the ",(0,i.kt)("inlineCode",{parentName:"p"},"correlationId")," of the task:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  - async.cancel:\n      correlationId: 254d7d80-4530-431a-a0cc-c606e8faa406\n")),(0,i.kt)("p",null,"This will immediately remove the async task from the backend queue. Any subsequent call of ",(0,i.kt)("inlineCode",{parentName:"p"},"async.fetch")," will result in a ",(0,i.kt)("inlineCode",{parentName:"p"},"404")," (Not found)."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"async.cancel")," several times for the same ",(0,i.kt)("inlineCode",{parentName:"p"},"correlationId")," has no effect since only the first caller wins. Any subsequent such calls will simply be ignored (bot no error is thrown).")),(0,i.kt)("h3",{id:"via-message-asynccancelid"},"Via message ",(0,i.kt)("inlineCode",{parentName:"h3"},"async.cancel.id")),(0,i.kt)("p",null,"Similar to completing an async task, another option to cancel an async task is by sending a message to the queue ",(0,i.kt)("inlineCode",{parentName:"p"},"pipeforce_async_response")," via the default exchange ",(0,i.kt)("inlineCode",{parentName:"p"},"pipeforce.default.topic")," with a routing key of this format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"async.cancel.<CORRELATION_ID>\n")),(0,i.kt)("p",null,"Whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"<CORRELATION_ID>")," must be replaced by the correlation id from the async response."),(0,i.kt)("p",null,"This is especially handy in case you have a microservice which is working mainly in async mode."),(0,i.kt)("p",null,"The body of the message will be used as the response value to the async call."),(0,i.kt)("p",null,"This will immediately remove the async task from the backend queue. Any subsequent call of ",(0,i.kt)("inlineCode",{parentName:"p"},"async.fetch")," will result in a ",(0,i.kt)("inlineCode",{parentName:"p"},"404")," (Not found)."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Sending the message  ",(0,i.kt)("inlineCode",{parentName:"p"},"async.cancel.<CORRELATION_ID>")," several times for the same ",(0,i.kt)("inlineCode",{parentName:"p"},"correlationId")," has no effect since only the first message wins. Any subsequent such message will simply be ignored (bot no error is thrown).")),(0,i.kt)("h2",{id:"async-task-timeout-experimental"},"Async task timeout (experimental)"),(0,i.kt)("p",null,"Once an async task has been started, it will by default run a certain amount of time before it will be automatically cancelled, assuming the task cannot be finished and/or the caller has died. The concrete timout after an async task will be cancelled depends on the command or user context it is being used in."),(0,i.kt)("p",null,'In order to avoid a timeout and to prolong the max. execution time, you have to send a "keep alive ping" every minute to the backend in order to signal that there is still interest in the result. This way the async task will not be cancelled in case it still is not finished after the timeout. Example:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  - async.ping: \n      correlationId: 254d7d80-4530-431a-a0cc-c606e8faa406\n")),(0,i.kt)("p",null," How much an async task can be kept alive overall using this ping approach also depends on the command and your user context. So refer to the documentation of the command or context you would like to use."),(0,i.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,i.kt)("admonition",{title:"Your help is needed!",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,i.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!")))}p.isMDXComponent=!0}}]);