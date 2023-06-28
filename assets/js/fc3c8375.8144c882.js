"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[2490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),y=o,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8912:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="19. Encryption",p={unversionedId:"guides/encryption",id:"guides/encryption",title:"19. Encryption",description:"Since Version: 9.0",source:"@site/docs/guides/180_encryption.md",sourceDirName:"guides",slug:"/guides/encryption",permalink:"/docs/guides/encryption",draft:!1,editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/180_encryption.md",tags:[],version:"current",sidebarPosition:180,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"18. Python Functions",permalink:"/docs/guides/faas"},next:{title:"API Gateway",permalink:"/docs/apigateway"}},s={},c=[{value:"Keystore",id:"keystore",level:2},{value:"Auto-encrypting properties",id:"auto-encrypting-properties",level:2},{value:"Auto-decrypting properties",id:"auto-decrypting-properties",level:2},{value:"Custom encryption and decryption",id:"custom-encryption-and-decryption",level:2},{value:"Report an Issue",id:"report-an-issue",level:2}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"19-encryption"},"19. Encryption"),(0,o.kt)("p",{class:"theme-doc-version-badge badge badge--secondary"},"Since Version: 9.0"),(0,o.kt)("p",null,"The crypto engines of PIPEFORCE allow to encrypt and decrypt data very effectively so workflows can be implemented in an very secure way."),(0,o.kt)("h2",{id:"keystore"},"Keystore"),(0,o.kt)("p",null,"If you're using PIPEFORCE as a cloud service, a random secure keystore is automatically provided to your instance. This keystore is generated in an encrypted wallet oustide the PIPEFORCE cloud and is never persisted somewhere else. The keystore will also take part on key rotations which will take place in order to change the keys from time to time. So all setup for you by default in a most secure way."),(0,o.kt)("h2",{id:"auto-encrypting-properties"},"Auto-encrypting properties"),(0,o.kt)("p",null,"In order to store property values only in encrypted format in the property store, you have to set the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"encrypted")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," when you create the property schema using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"property.schema.put"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - property.schema.put:\n      path: "global/app/myapp/data/secret"\n      encrypted: true\n')),(0,o.kt)("p",null,"When storing value to this property later using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"property.put")," this value is automatically encrypted using AES-256 with CBC mode before it gets stored to the database using the default access key of the platform. So you can be sure that the data is encrypted at rest."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Encrypting the value of a property this way increases security but also has some drawbacks you have to be aware of:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"You can no longer apply in-database JSON queries on encrypted property values."),(0,o.kt)("li",{parentName:"ul"},"Events with the properties as payload (for example ",(0,o.kt)("inlineCode",{parentName:"li"},"property.created")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"property.updated"),") will send the payload in messages also encrypted. So listeners to these events do have limited access to this property."),(0,o.kt)("li",{parentName:"ul"},"In lists where a set of properties is returned, the encrypted property stays encrypted. So you could have a mixture of plain text and encrypted properties for example. You have to make sure to handle this in your application accordingly."),(0,o.kt)("li",{parentName:"ul"},"Once a property was set to ",(0,o.kt)("inlineCode",{parentName:"li"},"encrypted:true")," it cannot be switched back to plain text."))),(0,o.kt)("h2",{id:"auto-decrypting-properties"},"Auto-decrypting properties"),(0,o.kt)("p",null,"Once a property has been stored encrypted in the property store you can load and decrypt its value using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"property.value.get")," with parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"decrypt")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - property.value.get:\n      path: "global/app/myapp/data/secret"\n      decrypt: true\n')),(0,o.kt)("p",null,"In this case the property will be automatically decrypted using the default access key of the platform and then returned."),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},'This is the only way to decrypt the value of the property. For performance and security reasons it is not possible to "mass-decrypt" properties returned in a list. For example by using the command ',(0,o.kt)("inlineCode",{parentName:"p"},"property.get")," with a path pattern.")),(0,o.kt)("h2",{id:"custom-encryption-and-decryption"},"Custom encryption and decryption"),(0,o.kt)("p",null,"You can also encrypt and decrypt data in PIPEFORCE using AES-256 in CBC mode by providing your own encryption key. For this see the command ",(0,o.kt)("inlineCode",{parentName:"p"},"data.encrypt")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"data.decrypt")," where you can set your custom key."),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When using custom encryption and decryption you have to make sure by your own to manage the encryption keys securely.")),(0,o.kt)("h2",{id:"report-an-issue"},"Report an Issue"),(0,o.kt)("admonition",{title:"Your help is needed!",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In case you're missing something on this page, you found an error or you have an idea for improvement, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pipeforce/pipeforce.github.io/issues/new"},"click here to create a new issue"),". Another way to contribute is, to click ",(0,o.kt)("strong",{parentName:"p"},"Edit this page")," below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!")))}d.isMDXComponent=!0}}]);