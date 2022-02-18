"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[9486],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1770:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var i=n(7462),r=n(3366),s=(n(7294),n(3905)),a=n(5108),o=["components"],l={id:"reports",title:"Reports",description:"Reports available within CIPP - E-mail & Exchange",slug:"/usingcipp/emailexchange/reports"},c=void 0,u={unversionedId:"usingcipp/emailexchange/reports",id:"usingcipp/emailexchange/reports",title:"Reports",description:"Reports available within CIPP - E-mail & Exchange",source:"@site/docs/user/usingcipp/emailexchange/reports.mdx",sourceDirName:"usingcipp/emailexchange",slug:"/usingcipp/emailexchange/reports",permalink:"/docs/user/usingcipp/emailexchange/reports",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/usingcipp/emailexchange/reports.mdx",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1645182623,formattedLastUpdatedAt:"18/02/2022",frontMatter:{id:"reports",title:"Reports",description:"Reports available within CIPP - E-mail & Exchange",slug:"/usingcipp/emailexchange/reports"},sidebar:"userSidebar",previous:{title:"Contacts",permalink:"/docs/user/usingcipp/emailexchange/contacts"},next:{title:"Settings",permalink:"/docs/user/usingcipp/settings"}},p=[{value:"Mailbox Statistics",id:"mailbox-statistics",children:[],level:2},{value:"Mailbox Client Access Settings",id:"mailbox-client-access-settings",children:[],level:2},{value:"Message Trace",id:"message-trace",children:[],level:2},{value:"Phishing Policies",id:"phishing-policies",children:[],level:2},{value:"Known Issues / Limitations",id:"known-issues--limitations",children:[],level:2}],d=function(e){return function(t){return a.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},h=d("PseudonymisedData"),g=d("OtherIssues"),m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Many Exchange reports exist in CIPP, see below for further details:"),(0,s.kt)(h,{mdxType:"PseudonymisedData"}),(0,s.kt)("p",null,"All reports feature filtering and the ability to export to a PDF or CSV file."),(0,s.kt)("h2",{id:"mailbox-statistics"},"Mailbox Statistics"),(0,s.kt)("p",null,"This report lists all mailboxes and pulls activity date, total space used, number of items in the mailbox and, the status of archiving."),(0,s.kt)("p",null,"Mailboxes using 80% to 90% of their quota show with an orange highlight.\nMailboxes using 90% to 100% of their quota show with a red highlight."),(0,s.kt)("h2",{id:"mailbox-client-access-settings"},"Mailbox Client Access Settings"),(0,s.kt)("p",null,"This report lists all users and the status of various Client Access Settings on their mailbox, such as IMAP / OWA / POP."),(0,s.kt)("h2",{id:"message-trace"},"Message Trace"),(0,s.kt)("p",null,"Message Trace provides the ability for you to trace an e-mail instantly from to any recipient, or any sender over the last 10 days (max)."),(0,s.kt)("h2",{id:"phishing-policies"},"Phishing Policies"),(0,s.kt)("p",null,"This report provides the ability for you to view Phishing Policies for the selected tenant and whether they're enabled, have excluded senders or domains and the last amended date."),(0,s.kt)("h2",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Message Trace currently only shows limited data, such as whether the message was successfully delivered or not. You can't currently see the Message Events indicating why this occurred. ")),(0,s.kt)(g,{mdxType:"OtherIssues"}))}f.isMDXComponent=!0}}]);