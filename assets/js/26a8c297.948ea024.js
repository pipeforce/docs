"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[5597],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var l=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,p=function(e,t){if(null==e)return{};var n,l,p={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=l.createContext({}),s=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=p,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||a;return n?l.createElement(k,r(r({ref:t},u),{},{components:n})):l.createElement(k,r({ref:t},u))}));function c(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,r=new Array(a);r[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,r[1]=i;for(var s=2;s<a;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4085:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var l=n(7462),p=n(3366),a=(n(7294),n(3905)),r=["components"],i={},o="CLI",s={unversionedId:"api/cli",id:"api/cli",isDocsHomePage:!1,title:"CLI",description:"The Command Line Interface (short \u201cCLI\u201d or \u201cpi tool\u201d) is a local command line tool, which allows remote control PIPEFORCE from the command line.",source:"@site/docs/api/cli.md",sourceDirName:"api",slug:"/api/cli",permalink:"/docs/api/cli",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/api/cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Local Workspace",permalink:"/docs/guides/local-workspace"},next:{title:"Commands",permalink:"/docs/api/commands"}},u=[{value:"Call structure",id:"call-structure",children:[],level:2},{value:"pi command",id:"pi-command",children:[],level:2},{value:"pi delete",id:"pi-delete",children:[],level:2},{value:"pi get",id:"pi-get",children:[],level:2},{value:"pi help",id:"pi-help",children:[],level:2},{value:"pi list",id:"pi-list",children:[],level:2},{value:"pi new",id:"pi-new",children:[],level:2},{value:"pi pipeline",id:"pi-pipeline",children:[],level:2},{value:"pi publish",id:"pi-publish",children:[],level:2},{value:"pi setup",id:"pi-setup",children:[],level:2},{value:"pi status",id:"pi-status",children:[],level:2},{value:"pi update",id:"pi-update",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,p.Z)(e,r);return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cli"},"CLI"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Command Line Interface")," (short \u201cCLI\u201d or \u201cpi tool\u201d) is a local command line tool, which allows remote control PIPEFORCE from the command line."),(0,a.kt)("p",null,"It makes it handy to automate local tasks by executing commands and pipelines and helps in local development."),(0,a.kt)("p",null,"See the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"/docs/downloads"},"Downloads"))," section on how to install this tool."),(0,a.kt)("p",null,"The tutorial ",(0,a.kt)("a",{parentName:"p",href:"../docs/tutorials/beginner/intro.md"},"Setup local workspace + CLI")," shows, how to install and work with the CLI."),(0,a.kt)("h2",{id:"call-structure"},"Call structure"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The main structure of a CLI command is always like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi <action> <args>\n")),(0,a.kt)("p",null,"To get a list off all supported actions and their parameters use the help command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi help\n")),(0,a.kt)("p",null,"Below you can find the description of the most important actions."),(0,a.kt)("h2",{id:"pi-command"},"pi command"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Executes a single pipeline command at server side and returns the result."),(0,a.kt)("p",null,"Each command parameter will become a command line parameter."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi command log message=HELLO\n")),(0,a.kt)("p",null,"This executes the ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," command at server side with the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"HELLO"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'pi command mail.send to=my@email.tld subject=Hello message="This is a test"\n')),(0,a.kt)("p",null,"This command sends an email."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")),(0,a.kt)("p",null,"Use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"pi help command")," to get the documentation of all available commands activated in your license."),(0,a.kt)("p",null,"Or use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"pi help command COMMAND_NAME")," to get the documentation for a specific command."),(0,a.kt)("h2",{id:"pi-delete"},"pi delete"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Deletes the remote resources inside a given app. It doesn\u2019t delete any local resource."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi delete global/app/myapp/pipeline/helloworld\n")),(0,a.kt)("p",null,"Deletes the pipeline helloworld."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi delete global/app/myapp/**\n")),(0,a.kt)("p",null,"Deletes all resources of the app ",(0,a.kt)("inlineCode",{parentName:"p"},"myapp"),"."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This command deletes remote resources without the option to recover. So be careful in using it!"))),(0,a.kt)("h2",{id:"pi-get"},"pi get"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Downloads all resources of a given app, stores them into the local workspace in order to be able to edit them. If a local resource already exists, asks for overwrite or skip."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi get global/app/myapp/**\n")),(0,a.kt)("p",null,"This command line call downloads all resources of the app ",(0,a.kt)("inlineCode",{parentName:"p"},"myapp")," and its sub-folders and stores them into the local workspace folder ",(0,a.kt)("inlineCode",{parentName:"p"},"src/global/app/myapp"),". Note that you have to define the property key here, not the local file path."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,"This downloads only the resources inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"myapp")," folder but no resource from inside its sub-folders."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi get global/app/myapp/*\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("p",null,"This downloads a single resource by its key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi get global/app/myapp/pipeline/hello\n")),(0,a.kt)("h2",{id:"pi-help"},"pi help"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Lists all available CLI options or pipeline commands."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi help\n")),(0,a.kt)("p",null,"Lists all available command line options."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi help command\n")),(0,a.kt)("p",null,"Lists the documentation of all available pipeline commands for the currently logged-in user."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi help command log\n")),(0,a.kt)("p",null,"Explains the log pipeline command. The output could look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'---\nlog:\n  type: "object"\n  description: "Logs the given input message without changing it. Sets the log message\\\n    \\ in the body in case body is empty. Doesn\'t overwrite any existing content in\\\n    \\ the body."\n  inputType: "JsonNode"\n  outputType: "JsonNode"\n  properties:\n    message:\n      type: "number"\n      description: "The message to log. Can be a string or a pipe expression. If null\\\n        \\ or empty, the full pipe message will be logged."\n      default: null\n    level:\n      type: "string"\n      description: "The log level. Can be one of DEBUG, TRACE, INFO, WARN, ERROR.\\\n        \\ If null or empty, INFO will be used."\n      default: "INFO"\n  required:\n  - "message"\n')),(0,a.kt)("h2",{id:"pi-list"},"pi list"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Lists all remote resources of a given path."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi list global/app/myapp**\n")),(0,a.kt)("p",null,"Lists all resources of the app ",(0,a.kt)("inlineCode",{parentName:"p"},"myapp")," recursively."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi list global/app/myapp/*\n")),(0,a.kt)("p",null,"Lists all resources of the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"myapp")," but not the resources inside any sub-folder."),(0,a.kt)("h2",{id:"pi-new"},"pi new"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Creates a new resource based on a wizard."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi new\n")),(0,a.kt)("p",null,"Would print this wizard:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Create new...\n  0: app\n  1: form\n  2: list\n  3: object\n  4: pipeline\n  5: workflow\nChoose number : \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,"You can also directly start the resource wizard:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi new app\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("p",null,"And if you are inside a app folder, the app you want to create the resource for is already pre-selected for you."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~ pipeforce> cd src/global/app/myapp\n~ app/myapp> pi new pipeline\n")),(0,a.kt)("h2",{id:"pi-pipeline"},"pi pipeline"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Executes a locally stored pipeline file, a remote pipeline or a pipeline uri."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi pipeline file src/global/app/myapp/pipeline/helloworld.pi.yaml\n")),(0,a.kt)("p",null,"This example uploads the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"helloworld.pi.yaml")," to the server, executes it there and returns the result. It doesn't store the pipeline at server side."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'pi pipeline uri "log?message=HELLO"\n')),(0,a.kt)("p",null,"This example takes the given pipeline uri and executes it at server side."),(0,a.kt)("p",null,"The syntax of a pipeline uri looks like this:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<command>[?<arg1>=<value1>&<arg2>=<value2>"),"]"),(0,a.kt)("p",null,"It is also possible to combine multiple commands to form a pipeline using the pipe ",(0,a.kt)("inlineCode",{parentName:"p"},"|"),"\xa0character:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<commandA>?<arg1>=<value1>&<arg2>=<value2>|<commandB>?<arg1>=<value1>&<arg2>=<value2>")),(0,a.kt)("p",null,"Here is an example to re-write this YAML pipeline configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'pipeline:\n  - datetime:\n      format: "dd.MM.YY"\n  - log:\n')),(0,a.kt)("p",null,"To this pipeline uri format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"datetime?format=dd.MM.YY|log\n")),(0,a.kt)("p",null,"Therefore, a call of this pipeline uri would look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'pi pipeline uri "datetime?format=dd.MM.YY|log"\n')),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"23.01.21\n")),(0,a.kt)("p",null,"The idea of a pipeline uri is to adhoc execute commands without the need to create a pipeline file and/or upload it."),(0,a.kt)("p",null,"Also see the CLI command ",(0,a.kt)("inlineCode",{parentName:"p"},"pi help command")," which lists all available pipeline commands and their description you can use to build pipelines and pipeline uris."),(0,a.kt)("h2",{id:"pi-publish"},"pi publish"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Uploads your created or changed resources like pipeline or form configurations to the server."),(0,a.kt)("p",null,"In case a resource already exists at the server updates only in case it has changed since last upload."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi publish\n")),(0,a.kt)("p",null,"This command uploads / updates all resources inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,"If you want to publish only a certain subset of the src folder, you can specify the folder like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi publish src/global/app/myapp/**\n")),(0,a.kt)("p",null,"This will recursively publish any resource inside this folder and its sub-folders."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("p",null,"In case you want to publish only the files inside this folder but not its sub-folders and files, you can use a single asterisk instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi publish src/global/app/myapp/*\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 4:")),(0,a.kt)("p",null,"If you want to publish a single resource, define it by its filename:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi publish src/global/app/myapp/pipeline/hello.pi.yaml\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 5:")),(0,a.kt)("p",null,"Note that the path argument is always relatively to your current working dir, as long as you are inside the workspace home folder $USER","_","HOME/pipeforce:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd $USER_HOME/pipeforce/src/global/app/myapp\npi publish **\n")),(0,a.kt)("p",null,"This will publish all resources inside ",(0,a.kt)("inlineCode",{parentName:"p"},"src/gobal/app/myapp")," recursively."),(0,a.kt)("p",null,"For security reasons (for example to no accidentally publish a huge path structure of your file system to the server), publish is only possible in case your current working dir is inside the workspace folder."),(0,a.kt)("h2",{id:"pi-setup"},"pi setup"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Changes the settings of the CLI tool using a wizard and/or installs the CLI if not already done."),(0,a.kt)("p",null,"This writes the final result into the file ",(0,a.kt)("inlineCode",{parentName:"p"},"$USER_HOME/pipeforce/conf/cli.conf.json"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi setup\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,"For more advanced users, you can use the flag advanced in order to be able to adjust more settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi setup advanced\n")),(0,a.kt)("h2",{id:"pi-status"},"pi status"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Returns status information about the CLI."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi status\n")),(0,a.kt)("h2",{id:"pi-update"},"pi update"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Looks for an update of the CLI and installs it if a newer version exists."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi update\n")))}m.isMDXComponent=!0}}]);