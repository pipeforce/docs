"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[6161],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(t),u=i,h=c["".concat(o,".").concat(u)]||c[u]||d[u]||r;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var m=2;m<r;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=t(7462),i=(t(7294),t(3905));const r={},l="Emailing",s={unversionedId:"guides/messaging/email",id:"guides/messaging/email",title:"Emailing",description:"Since Version: 3.0",source:"@site/docs/guides/messaging/30_email.md",sourceDirName:"guides/messaging",slug:"/guides/messaging/email",permalink:"/docs/guides/messaging/email",draft:!1,editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/messaging/30_email.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/guides/messaging/events"},next:{title:"Webhooks",permalink:"/docs/guides/messaging/webhooks"}},o={},m=[{value:"Email Templates",id:"email-templates",level:2},{value:"Using PEL",id:"using-pel",level:3},{value:"Using a Transformer Command",id:"using-a-transformer-command",level:3},{value:"Using a Custom URI",id:"using-a-custom-uri",level:3},{value:"Email Attachments",id:"email-attachments",level:2},{value:"From Body",id:"from-body",level:3},{value:"From Custom URI",id:"from-custom-uri",level:3},{value:"HTML Emails",id:"html-emails",level:2},{value:"Bulk Emails",id:"bulk-emails",level:2},{value:"Report an Issue",id:"report-an-issue",level:2}],p={toc:m};function d(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"emailing"},"Emailing"),(0,i.kt)("p",{class:"theme-doc-version-badge badge badge--secondary"},"Since Version: 3.0"),(0,i.kt)("p",null,"In PIPEFORCE you can send email messages out-of-the-box using the ",(0,i.kt)("a",{parentName:"p",href:"../api/commands#mailsend-v1"},"mail.send")," command."),(0,i.kt)("p",null,"Here is an example pipeline to use this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n - mail.send:\n    to: "recipient@domain.tld"\n    subject: "This is the subject"\n    message: |\n      Hello recipient,\n      this is an email sent from a pipeline.\n      Greetings\n')),(0,i.kt)("h2",{id:"email-templates"},"Email Templates"),(0,i.kt)("p",null,"There are different possibilties in PIPEFORCE to set the email data dynamically."),(0,i.kt)("h3",{id:"using-pel"},"Using PEL"),(0,i.kt)("p",null,"As usual, you can use the ",(0,i.kt)("a",{parentName:"p",href:"../api/pel"},"Pipeline Expression Language (PEL)")," in order to define placeholders in the command parameters. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  name: "Sam"\n  email: "recipient@domain.tld"\n\npipeline:\n - mail.send:\n    to: "#{vars.email}"\n    subject: "This is for #{vars.name}"\n    message: |\n      Hello #{vars.name},\n      this is an email sent from a pipeline.\n      Greetings\n')),(0,i.kt)("h3",{id:"using-a-transformer-command"},"Using a Transformer Command"),(0,i.kt)("p",null,"You can use a transformer command like ",(0,i.kt)("a",{parentName:"p",href:"../guides/transformers/freemarker"},"transform.ftl")," in order to render the message. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  name: "Sam"\n  email: "recipient@domain.tld"\n\npipeline:\n\n  - transform.ftl:\n      template: |\n        Hello ${vars.name},\n        this is an email sent from a pipeline.\n        Greetings\n\n  - mail.send:\n      to: "#{vars.email}"\n      subject: "This is for #{vars.name}"\n')),(0,i.kt)("p",null,"In this example, the message is rendered and then stored in the body using ",(0,i.kt)("inlineCode",{parentName:"p"},"transform.ftl"),". The command ",(0,i.kt)("inlineCode",{parentName:"p"},"mail.send"),"\nthen picks up the rendered message from the body and uses it as email message."),(0,i.kt)("p",null,"And here is an example to load the template from the property store from location ",(0,i.kt)("inlineCode",{parentName:"p"},"global/app/myapp/template/email"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  name: "Sam"\n  email: "recipient@domain.tld"\n\npipeline:\n\n  - transform.ftl:\n      template: "uri:property:global/app/myapp/template/email"\n\n  - mail.send:\n      to: "#{vars.email}"\n      subject: "This is for #{vars.name}"\n')),(0,i.kt)("h3",{id:"using-a-custom-uri"},"Using a Custom URI"),(0,i.kt)("p",null,"Instead of defining a separate transformer command in the pipeline, you can use a ",(0,i.kt)("a",{parentName:"p",href:"../api/uris"},"Custom URI")," which points inline to a template. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  name: "Sam"\n  email: "recipient@domain.tld"\n\npipeline:\n\n  - mail.send:\n      to: "#{vars.email}"\n      subject: "This is for #{vars.name}"\n      message: "uri:property:global/app/myapp/template/email"\n')),(0,i.kt)("p",null,"In this case, the ",(0,i.kt)("inlineCode",{parentName:"p"},"mail.send")," command loads the template as property from location ",(0,i.kt)("inlineCode",{parentName:"p"},"global/app/myapp/template/email"),", renders it and uses\nthe result as email message. The variables ",(0,i.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," will be provided as default model to the template."),(0,i.kt)("p",null,"You can replace these default template variables by your custom ",(0,i.kt)("inlineCode",{parentName:"p"},"model"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - mail.send:\n      to: "recipient@domain.tld"\n      subject: "This is a subject"\n      message: "uri:property:global/app/myapp/template/email"\n      model: {"name": "Sam"}\n')),(0,i.kt)("h2",{id:"email-attachments"},"Email Attachments"),(0,i.kt)("p",null,"In case you would like to add attachments, you can use the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"attachments")," to do so."),(0,i.kt)("h3",{id:"from-body"},"From Body"),(0,i.kt)("p",null,"One approach is to load the attachments into a scope, like vars or the body first and then refer to them using a PEL inside the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"attachments"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - drive.read:\n      path: "contract.docx"\n\n  - mail.send:\n      to: "recipient@domain.tld"\n      subject: "This is the contract"\n      message: "Hello, attached you can find the contract for your reference."\n      attachments: "#{body}"\n')),(0,i.kt)("p",null,"In this example the file is first loaded (implicitely) to body using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"drive.read")," and then linked to the ",(0,i.kt)("inlineCode",{parentName:"p"},"attachments")," parameter. You can place any ",(0,i.kt)("a",{parentName:"p",href:"../guides/contentobject"},"content object")," as attachment. "),(0,i.kt)("p",null,"Using this approach it is also possible to create the attachments dynamically on-the-fly in the pipeline (for example by using a template engine) and then add them finally to the email."),(0,i.kt)("h3",{id:"from-custom-uri"},"From Custom URI"),(0,i.kt)("p",null,"Another approach to add attachments to an email is by using a ",(0,i.kt)("a",{parentName:"p",href:"../api/uris"},"Custom URI")," which points to the location of the attachments. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - mail.send:\n      ...\n      attachments: "uri:drive:contract-v1.docx, uri:drive:contract-v2.docx"\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can add multiple attachments by separating them by comma.")),(0,i.kt)("h2",{id:"html-emails"},"HTML Emails"),(0,i.kt)("p",null,"Emails are sent by default using a base HTML skeleton. Any message is placed as text inside this HTML skeleton. HTML tags will be escaped by default."),(0,i.kt)("p",null,"In case you would like to format the text using HTML tags, you need to place the whole message inside a single HTML tag like ",(0,i.kt)("inlineCode",{parentName:"p"},"<p>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"</p>")," for example."),(0,i.kt)("p",null,"Here is an example to place a HTML link and HTML bullet points in your email message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - mail.send:\n      to: "recipient@domain.tld"\n      subject: "This is the contract"\n      message: |\n        <p>Hello,\n        please click <a href="#">this link</a>.\n        <br/>\n        These are the reasons:\n        <ul>\n          <li>Clicking is fun</li>\n          <li>Test it</li>\n        </ul>\n        </p>\n')),(0,i.kt)("p",null,"This will produce an email message output similar to this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(8698).Z,width:"600",height:"274"})),(0,i.kt)("h2",{id:"bulk-emails"},"Bulk Emails"),(0,i.kt)("p",null,"Sending multiple emails to multiple recipients with dynamic content can be done using the ",(0,i.kt)("inlineCode",{parentName:"p"},"mail.send")," command in combination with the ",(0,i.kt)("inlineCode",{parentName:"p"},"foreach")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  recipients: [\n      {"name": "Sam Mayer", "email": "s.mayer@domain.tld"},\n      {"name": "Marissa Foley", "email": "m.foley@domain.tld"},\n    ]\n    \npipeline:\n\n  - foreach:\n      in: "#{vars.recipients}"\n      \n  - mail.send:\n      to: "#{vars.loop.item.email}"\n      subject: "Letter to #{vars.loop.item.name}"\n      message: |\n        Hello #{vars.loop.item.name},\n        this is a letter for you.\n        Cheers\n      \n  - foreach:\n      end:\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Depending on your license and/or environment, the number of allowed emails to be send per minute is restricted.\nPlease refer to your support in order to get information about this limit.\nIn case you need to send a higher amount of emails, consider to use one of the email services and integrate\ntheir API using the ",(0,i.kt)("inlineCode",{parentName:"p"},"http.*")," commands.")),(0,i.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,i.kt)("admonition",{title:"Your help is needed!",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,i.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!")))}d.isMDXComponent=!0},8698:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/html-email-85295d9ee345a72587fdeb7f24803ade.png"}}]);