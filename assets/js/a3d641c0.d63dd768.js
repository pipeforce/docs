"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[1478],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return u}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(o),u=a,c=m["".concat(s,".").concat(u)]||m[u]||h[u]||i;return o?n.createElement(c,r(r({ref:t},p),{},{components:o})):n.createElement(c,r({ref:t},p))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3973:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=o(7462),a=o(3366),i=(o(7294),o(3905)),r=["components"],l={},s="Webhooks",d={unversionedId:"guides/webhooks",id:"guides/webhooks",isDocsHomePage:!1,title:"Webhooks",description:"A webhook is a unique url endpoint. When called, it triggers some action on the target server.",source:"@site/docs/guides/90_webhooks.md",sourceDirName:"guides",slug:"/guides/webhooks",permalink:"/docs/guides/webhooks",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/90_webhooks.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Groups, Roles, and Permissions",permalink:"/docs/guides/permissions"},next:{title:"Local Workspace",permalink:"/docs/guides/local-workspace copy"}},p=[{value:"Incoming Webhook",id:"incoming-webhook",children:[{value:"Create Webhook",id:"create-webhook",children:[{value:"Quick guide to create a webhook",id:"quick-guide-to-create-a-webhook",children:[],level:4},{value:"Create Webhook via CLI",id:"create-webhook-via-cli",children:[],level:4},{value:"Setup Webhook via Portal",id:"setup-webhook-via-portal",children:[],level:4}],level:3},{value:"Trigger Webhook",id:"trigger-webhook",children:[],level:3},{value:"Listening for Webhook",id:"listening-for-webhook",children:[],level:3},{value:"List all Webhooks",id:"list-all-webhooks",children:[{value:"List all Webhooks via CLI",id:"list-all-webhooks-via-cli",children:[],level:4},{value:"List all Webhooks via Portal",id:"list-all-webhooks-via-portal",children:[],level:4}],level:3},{value:"Edit or delete webhook",id:"edit-or-delete-webhook",children:[{value:"Edit or delete via CLI",id:"edit-or-delete-via-cli",children:[],level:4},{value:"Edit or delete via Portal",id:"edit-or-delete-via-portal",children:[],level:4}],level:3},{value:"Receiving Files",id:"receiving-files",children:[],level:3}],level:2},{value:"Outgoing webhook",id:"outgoing-webhook",children:[],level:2}],h={toc:p};function m(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"webhooks"},"Webhooks"),(0,i.kt)("p",null,"A webhook is a unique url endpoint. When called, it triggers some action on the target server."),(0,i.kt)("p",null,"In PIPEFORCE, you can create ",(0,i.kt)("strong",{parentName:"p"},"custom")," url endpoints. When called, it produces an internal event message which in turn can be consumed by a pipeline using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"event.listen"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Replace any url ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"https://hub-try.pipeforce.org"))," from the examples shown on this page by the url of your PIPEFORCE instance."))),(0,i.kt)("h2",{id:"incoming-webhook"},"Incoming Webhook"),(0,i.kt)("p",null,"An incoming webhook is an url endpoint created inside PIPEFORCE which can be called by an external system to trigger a pipeline inside PIPEFORCE. The url of such an incoming webhook has a format similar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://hub-try.pipeforce.org/api/v3/command/webhook.receive?uuid=<uuid>\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"<uuid>")," by the UUID of your webhook. See below to get such an uuid.")))),(0,i.kt)("h3",{id:"create-webhook"},"Create Webhook"),(0,i.kt)("h4",{id:"quick-guide-to-create-a-webhook"},"Quick guide to create a webhook"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new incoming webhook endpoint by using the command ",(0,i.kt)("inlineCode",{parentName:"li"},"webhook.put"),"."),(0,i.kt)("li",{parentName:"ol"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"eventKey")," to the name of an event to be fired internally every time this webhook has been received."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Remember the url or uuid of the webhook (is returned after it was created).")),(0,i.kt)("li",{parentName:"ol"},"Create a pipeline which listens for the ",(0,i.kt)("inlineCode",{parentName:"li"},"eventKey"),", that is fired by the webhook using the ",(0,i.kt)("inlineCode",{parentName:"li"},"event.listen")," command, and store it to the property store (this automatically triggers the registration of the listener). This pipeline will then be executed every time this webhook is called."),(0,i.kt)("li",{parentName:"ol"},"To call a webhook from outside, use the command ",(0,i.kt)("inlineCode",{parentName:"li"},"webhook.receive")," and the webhook uuid, for example:",(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("inlineCode",{parentName:"li"},"https://hub-try.pipeforce.org/api/v3/command/webhook.receive?uuid=<uuid>")),(0,i.kt)("li",{parentName:"ol"},"To trigger a webhook from inside a pipeline to an external system, use the command ",(0,i.kt)("inlineCode",{parentName:"li"},"webhook.send"),".")),(0,i.kt)("h4",{id:"create-webhook-via-cli"},"Create Webhook via CLI"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In order to create and setup a new incoming webhook, you can simply use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.put")," and the CLI:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"pi command webhook.put eventKey=<ID>\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<ID>")," by the name of the event, which must be fired when this webhook gets triggered.",(0,i.kt)("br",{parentName:"p"}),"\n","Note: It is a good practice to name event keys as always lower case, and separate it in groups with a dot and ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.")," as the root group. For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"pi command webhook.put eventKey=webhook.github.update\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After you have executed this command, a new webhook was created and the details about it will be returned as a JSON or YAML format, which looks similar to this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n  "eventKey": "salesforce.lead.created",\n  "webhookUrl": "https://hub-try.pipeforce.org/api/v3/webhook.receive?uuid=885d...",\n  "uuid": "885d...",\n  ...\n}\n')))),(0,i.kt)("p",null,"Since a webhook is secured by its uuid which is a secret and hard to detect, make sure the ",(0,i.kt)("strong",{parentName:"p"},"webhookUrl")," is kept secure between the two systems."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"PIPEFORCE regularly scans the internet for this secret, and if it finds it, the associated webhooks will be deactivated for security reasons. So, never make it publicly available!"))),(0,i.kt)("h4",{id:"setup-webhook-via-portal"},"Setup Webhook via Portal"),(0,i.kt)("p",null,"You can also use the command form LOW CODE \u2192 Commands \u2192 ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.put")," in the portal to create a webhook without the CLI:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151288935/image-20211029-134322.png?api=v2",alt:null})),(0,i.kt)("h3",{id:"trigger-webhook"},"Trigger Webhook"),(0,i.kt)("p",null,"After you have setup the webhook successfully, it can be triggered (or called) from the outside."),(0,i.kt)("p",null,"To do so, send a GET or POST HTTP request to the webhook url which was returned when you created it:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://hub-try.pipeforce.org/api/v3/command/webhook.receive?uuid=abcdef")),(0,i.kt)("p",null,"In order to secure the ",(0,i.kt)("strong",{parentName:"p"},"webhookUrl"),", you should always prefer a ",(0,i.kt)("strong",{parentName:"p"},"HTTPS connection")," between the two systems, and send the uuid parameter in the body of a ",(0,i.kt)("strong",{parentName:"p"},"POST")," request, instead of GET. PIPEFORCE supports both methods. But, it mainly depends on the caller of the webhook, whether this external system supports ",(0,i.kt)("strong",{parentName:"p"},"POST")," calls."),(0,i.kt)("h3",{id:"listening-for-webhook"},"Listening for Webhook"),(0,i.kt)("p",null,"After you have successfully setup the webhook, any time the webhook url is called from the outside, a new message is produced internally inside PIPEFORCE, which can then be consumed by any pipeline. To do so, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.listen")," command to listen for such new event messages. Here\u2019s an example which sends an email whenever a new lead in Salesforce was created using a webhook with the ",(0,i.kt)("inlineCode",{parentName:"p"},"eventKey")," =",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.salesforce.lead.created"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n - event.listen:\n     eventKey: webhook.salesforce.lead.created\n - mail:\n     to: name@company.tld\n     subject: "New lead was created!"\n     body: "#{convert.fromBase64(body.origin)}"\n')),(0,i.kt)("p",null,"The input body of the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.listen")," command is the payload of the event message submitted from the outside caller."),(0,i.kt)("p",null,"In case the sender has sent some payload in the body of the webhook request, this payload is made available for you as base64 encoded string in the ",(0,i.kt)("inlineCode",{parentName:"p"},"origin")," field of the event. To access this data, you have to convert this value as shown in this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#{convert.fromBase64(body.origin)}\n")),(0,i.kt)("p",null,"For security reasons, by default, the webhook pipeline is executed with very limited ",(0,i.kt)("inlineCode",{parentName:"p"},"anonymousUser")," privileges. So, make sure that you use only commands in your pipeline which can be executed by this user. In case you need more privileges, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"iam.run.as")," command to switch to the privileges of the given user before executing the command. See the IAM portal for the permissions (or roles) of a given user. Also see ",(0,i.kt)("a",{parentName:"p",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/2151288874/Groups%2C+Roles%2C+Permissions"},"Groups, Roles, and Permissions")," for more details on user privileges / permissions."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Some words about security and webhooks")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Since webhooks allow executing pipelines, they can be very powerful. This power also comes with ",(0,i.kt)("strong",{parentName:"p"},"additional responsibility")," for you, the pipeline engineer. Make sure you have sufficient security testings in place, and you have secured your webhook pipelines accordingly."))),(0,i.kt)("h3",{id:"list-all-webhooks"},"List all Webhooks"),(0,i.kt)("h4",{id:"list-all-webhooks-via-cli"},"List all Webhooks via CLI"),(0,i.kt)("p",null,"To list all existing webhooks, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.get")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pi command webhook.get\n")),(0,i.kt)("p",null,"You will see a JSON / YAML list with details about all existing webhooks."),(0,i.kt)("p",null,"In order to get the details of a single webhook, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.get")," with the param ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid"),", where uuid is the id of the webhook you want to list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pi command webhook.get uuid=<yourWebhookUuid>\n")),(0,i.kt)("h4",{id:"list-all-webhooks-via-portal"},"List all Webhooks via Portal"),(0,i.kt)("p",null,"Only: ENTERPRISE CORPORATE"),(0,i.kt)("p",null,"In the portal, go to LOW CODE \u2192 Commands \u2192 webhook.get, and execute the form:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151288935/image-20211029-140005.png?api=v2",alt:null}),(0,i.kt)("img",{parentName:"p",src:"https://logabit.atlassian.net/wiki/download/attachments/2151288935/image-20211029-140117.png?api=v2",alt:null})),(0,i.kt)("h3",{id:"edit-or-delete-webhook"},"Edit or delete webhook"),(0,i.kt)("h4",{id:"edit-or-delete-via-cli"},"Edit or delete via CLI"),(0,i.kt)("p",null,"In order to edit an existing webhook, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.put")," command, and set the uuid of the webhook to edit. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pi command webhook.put uuid=abcdef eventKey=webhook.changed.key\n")),(0,i.kt)("p",null,"In order to delete an existing webhook, you can use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.delete"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pi command webhook.delete uuid=abcdef\n")),(0,i.kt)("p",null,"And then, set the uuid of the webhook you want to delete."),(0,i.kt)("h4",{id:"edit-or-delete-via-portal"},"Edit or delete via Portal"),(0,i.kt)("p",null,"To edit or delete a webhook using the portal, go to Commands \u2192 ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.put")," or Commands -> ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.delete"),", and execute the form accordingly."),(0,i.kt)("h3",{id:"receiving-files"},"Receiving Files"),(0,i.kt)("p",null,"It is also possible to send a playload, like multiple files, with a webhook. To do so, execute the request as multipart POST with the body formatted as ",(0,i.kt)("inlineCode",{parentName:"p"},"multipart/form-data"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'POST /api/v3/command/webhook.receive?uuid=abcdef HTTP/1.1 \nHost: hub-<NS>.pipefore.net\nContent-Type: multipart/form-data;boundary="boundary" \n\n--boundary \nContent-Disposition: form-data; name="file"; filename="fileA.pdf" \n\n<CONTENT FILE fileA.pdf GOES HERE...>\n--boundary \nContent-Disposition: form-data; name="file"; filename="fileB.pdf" \n\n<CONTENT FILE fileB.pdf GOES HERE...>\n--boundary--\n')),(0,i.kt)("p",null,"More information about multipart POST requests can be found here: ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST")),(0,i.kt)("h2",{id:"outgoing-webhook"},"Outgoing webhook"),(0,i.kt)("p",null,"An outgoing webhook is a url to be called from inside a pipeline in order to trigger something at an external system. To send a webhook to an external system, you can use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook.send")," as this pipeline example shows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - webhook.send:\n      url: "https://hostname/webhook/id"\n      message: |\n        {"text": "hello world"}\n')),(0,i.kt)("p",null,"When this pipeline is called, it sends the ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," (must be a valid JSON string) as ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," body to the given ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),". The response from the webhook call is written into the pipeline body by default."),(0,i.kt)("p",null,"How the webhook url looks like and what format the webhook supports as message, depends on the target system. Consult its documentation for more details."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The same can also be done using one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"http.get")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"http.post")," commands."))))}m.isMDXComponent=!0}}]);