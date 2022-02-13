"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[6868],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8076:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"settingup",title:"Setting Up for Local Development",description:"What you'll need to help develop the CIPP React frontend.",slug:"/settingup"},s=void 0,p={unversionedId:"settingup",id:"settingup",title:"Setting Up for Local Development",description:"What you'll need to help develop the CIPP React frontend.",source:"@site/docs/dev/settingup.md",sourceDirName:".",slug:"/settingup",permalink:"/docs/dev/settingup",tags:[],version:"current",lastUpdatedBy:"Michael O'Toole",lastUpdatedAt:1644777269,formattedLastUpdatedAt:"13/02/2022",frontMatter:{id:"settingup",title:"Setting Up for Local Development",description:"What you'll need to help develop the CIPP React frontend.",slug:"/settingup"},sidebar:"devSidebar",next:{title:"Preparing for Local Development",permalink:"/docs/dev/preparing"}},m=[],d={toc:m};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page provides information on various required and recommended tools, programs and resources for developing the CIPP React frontend."),(0,o.kt)("p",null,"It's recommended that you have the following installed on the computer you're using for development:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"Visual Studio Code")," (VSCode) ",(0,o.kt)("inlineCode",{parentName:"li"},"winget install --exact vscode")),(0,o.kt)("li",{parentName:"ul"},"These VSCode extensions:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions"},"Azure Functions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"ESLint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script"},"npm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense"},"npm Intellisense")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"Prettier")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint"},"Stylelint")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2"},"PowerShell 7")," ",(0,o.kt)("inlineCode",{parentName:"li"},"winget install --exact PowerShell")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"git")," ",(0,o.kt)("inlineCode",{parentName:"li"},"winget install --exact git")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"node.js LTS")," ",(0,o.kt)("inlineCode",{parentName:"li"},'winget install --exact "Node.js LTS"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/5.0"},".NET SDK 5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0"},".NET SDK 6")," ",(0,o.kt)("inlineCode",{parentName:"li"},"winget install --exact Microsoft.dotnet"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"About these instructions")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This page guides you through getting setup to develop for CIPP using the command line to perform operations with ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),". There are graphical user interfaces for these tools but they won't be covered in this documentation. The commands below are broadly OS agnostic."))),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," which is included with ",(0,o.kt)("inlineCode",{parentName:"p"},"nodejs")," you're going to install the ",(0,o.kt)("em",{parentName:"p"},"Azure Static Web Apps CLI"),", the ",(0,o.kt)("em",{parentName:"p"},"Azure Functions Core Tools")," and the ",(0,o.kt)("em",{parentName:"p"},"Azurite")," storage emulator globally."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),(0,o.kt)("inlineCode",{parentName:"h5"},"npm install --global")," Permissions")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Depending on your system setup you may have to run the following commands as an administrator in order for npm to write the package files into its global package folder. Globally installed npm packages are available to all users."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Installing the Azure Static Web Apps CLI"',title:'"Installing',the:!0,Azure:!0,Static:!0,Web:!0,Apps:!0,'CLI"':!0},"npm install --global @azure/static-web-apps-cli\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Installing the Azure Functions Core Tools"',title:'"Installing',the:!0,Azure:!0,Functions:!0,Core:!0,'Tools"':!0},"npm install --global azure-functions-core-tools@4 --unsafe-perms true\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Installing the Azurite storage emulator"',title:'"Installing',the:!0,Azurite:!0,storage:!0,'emulator"':!0},"npm install --global azurite\n")),(0,o.kt)("p",null,"Now we need to get the files downloaded for CIPP. In order to properly test as you develop the CIPP frontend we need a copy of your CIPP and CIPP-API repositories."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Forking repositories")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You're going to want to work on a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"forked copy")," of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP"},"CIPP")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP-API"},"CIPP-API")," repositories."),(0,o.kt)("p",{parentName:"div"},"For the rest of this guide we assume that your forks are at:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CIPP")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"https://github.com/goodatforking/CIPP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CIPP-API")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"https://github.com/goodatforking/CIPP-API"))))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"What's a repository?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A Git repository is the ",(0,o.kt)("inlineCode",{parentName:"p"},".git/")," folder which you'll find inside many projects like CIPP. This repository tracks all changes made to files in the project, changes to these files are ",(0,o.kt)("em",{parentName:"p"},"commited")," to the repository (repo) which then builds up a history of the project."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CIPP")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CIPP-API")," repositories need to be located alongside each other (siblings) - so we're looking for a folder structure that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"- CIPP-Project\n-- CIPP\n-- CIPP-API\n")),(0,o.kt)("p",null,"So if we assume that we want our ",(0,o.kt)("inlineCode",{parentName:"p"},"CIPP-Project")," directory in ",(0,o.kt)("inlineCode",{parentName:"p"},"X:\\Development")," we're going to do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cd "X:\\Development"\nmkdir "CIPP-Project"\ncd "CIPP-Project"\ngit clone https://github.com/goodatforking/CIPP --origin goodatforking\ngit clone https://github.com/goodatforking/CIPP-API --origin goodatforking\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Git remotes - An origin story")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When you clone a git repository you automatically get a ",(0,o.kt)("em",{parentName:"p"},"remote")," this is a pointer (usually a URL) to a remote copy of the git repository which you can push changes to. By default your first remote is called ",(0,o.kt)("strong",{parentName:"p"},"origin"),". But that doesn't really mean much to most people. In the commands above we're using ",(0,o.kt)("inlineCode",{parentName:"p"},"--origin goodatforking")," to tell git that we want our first remote (origin) to be called ",(0,o.kt)("inlineCode",{parentName:"p"},"goodatforking"),"."))),(0,o.kt)("p",null,"At this point we could start working on the code - we have our pre-requisites and we have to code setup as we need it, but we're going to do one last thing to make life easier down the road."),(0,o.kt)("p",null,"We're going to add Kelvin's original repository as ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cd "CIPP"\ngit remote add upstream https://github.com/KelvinTegelaar/CIPP\ncd ..\ncd "CIPP-API"\ngit remote add upstream https://github.com/KelvinTegelaar/CIPP-API\ncd ..\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"git Branches")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When working on open source projects it's often helpful to keep your stable / tested code separate from your under-development code. We can achieve this with git by using ",(0,o.kt)("em",{parentName:"p"},"branches"),". The CIPP project uses the following branches:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"main")," - Our stable/tested code - this is where releases are created (tagged)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dev")," - Our development code - this is the branch where active development takes place."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"website")," - The CIPP website code and documentation files.")))),(0,o.kt)("p",null,"We're going to want to work from the ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," branch since that's where the latest development code is, switching branches in git is achieved by doing a ",(0,o.kt)("inlineCode",{parentName:"p"},"checkout")," on the branch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cd "CIPP"\ngit checkout dev\ncd ..\ncd "CIPP-API"\ngit checkout dev\ncd ..\n')),(0,o.kt)("p",null,"That's it - we've got our repositories set locally and on the dev branch, our local environment is setup and ready to develop the CIPP UI. Read on through this section for further instructions."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"GitHub CLI")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can install and use the ",(0,o.kt)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub CLI")," ",(0,o.kt)("inlineCode",{parentName:"p"},"winget install --id GitHub.cli")," to interact with GitHub from your command line. This is a fantastic addition to your command-line Git workflows allowing you to create Pull Requests and Issues without having to open a browser."))))}c.isMDXComponent=!0}}]);