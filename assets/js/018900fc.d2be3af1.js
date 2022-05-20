"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[1484],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5251:function(e,t,n){n.r(t),n.d(t,{default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c={unversionedId:"eco/distributed-transaction",id:"eco/distributed-transaction",isDocsHomePage:!1,title:"Distributed Transaction",description:"Application Scenario",source:"@site/docs/eco/distributed-transaction.md",sourceDirName:"eco",slug:"/eco/distributed-transaction",permalink:"/docs/eco/distributed-transaction",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/eco/distributed-transaction.md",version:"current",lastUpdatedAt:1653016622,formattedLastUpdatedAt:"5/20/2022",frontMatter:{}},l=[{value:"Application Scenario",id:"application-scenario",children:[]},{value:"Solution",id:"solution",children:[]},{value:"More application scenarios",id:"more-application-scenarios",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"application-scenario"},"Application Scenario"),(0,o.kt)("p",null,"In a microservices architecture, when we need to ensure data consistency across services, the local database transactions are overwhelmed and cannot put multiple operations across databases and services into a single transaction. There are many such scenarios and we can list many of them."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Order systems: need to ensure that order creation and stock deduction either both succeeded or both rolled back."),(0,o.kt)("li",{parentName:"ul"},"Inter-bank transfer scenarios: the data is not in one database, but you need to ensure that the balance deduction and balance increase either both succeeded or both failed."),(0,o.kt)("li",{parentName:"ul"},"Travel booking scenario: several tickets need to be booked in the third-party system, either all succeeded or all cancelled.")),(0,o.kt)("p",null,"For these scenarios that cannot be solved by local transactions, we need a distributed transaction solution to ensure consistency of data updates across services and databases."),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"go-zero and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dtm-labs/dtm"},"dtm")," have cooperated deeply to introduce an elegant solution that seamlessly accesses dtm in go-zero. The solution has the following features."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"dtm services can be directly registered to go-zero's registry through configuration"),(0,o.kt)("li",{parentName:"ul"},"go-zero is able to access the dtm server with a built-in target format"),(0,o.kt)("li",{parentName:"ul"},"dtm can recognise go-zero's target format and dynamically access services in go-zero")),(0,o.kt)("p",null,"For detailed access, see the dtm documentation: ",(0,o.kt)("a",{parentName:"p",href:"https://en.dtm.pub/ref/gozero.html"},"go-zero support")),(0,o.kt)("h2",{id:"more-application-scenarios"},"More application scenarios"),(0,o.kt)("p",null,"dtm can address not only the above distributed transaction scenarios, but also many more scenarios related to data consistency, including"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Database and cache consistency: dtm's two-phase messages can guarantee atomicity for database update operations, and cache update/delete operations"),(0,o.kt)("li",{parentName:"ul"},"Flash-sales system: dtm ensures that the number of orders created in a flash-sales scenario is exactly the same as the number of stock deductions, without the need for subsequent manual calibration"),(0,o.kt)("li",{parentName:"ul"},"Multiple storage combinations: dtm already supports multiple storage such as database, Redis, Mongo, etc., which can be combined into one global transaction to ensure data consistency")),(0,o.kt)("p",null,"For more information on dtm's capabilities and presentation, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dtm-labs/dtm"},"dtm")))}d.isMDXComponent=!0}}]);