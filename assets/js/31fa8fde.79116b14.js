"use strict";(self.webpackChunkfoundance_docs=self.webpackChunkfoundance_docs||[]).push([[352],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>v});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),m=a,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return o?n.createElement(v,i(i({ref:t},c),{},{components:o})):n.createElement(v,i({ref:t},c))}));function v(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1032:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={sidebar_position:4},i="Choose a governance method",l={unversionedId:"tutorial-basics/choose-governance",id:"tutorial-basics/choose-governance",title:"Choose a governance method",description:"This will decide on how your voting system will look like We offer three different voting mechanisms:",source:"@site/docs/tutorial-basics/choose-governance.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/choose-governance",permalink:"/foundance-docs/tutorial-basics/choose-governance",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/choose-governance.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Define salaries / vested shares",permalink:"/foundance-docs/tutorial-basics/salaries-&-shares"},next:{title:"Make an agreement",permalink:"/foundance-docs/tutorial-basics/make-agreement"}},s={},p=[{value:"Proportional (One share - one vote)",id:"proportional-one-share---one-vote",level:2},{value:"Proportional Voting Example:",id:"proportional-voting-example",level:3},{value:"Quadratic Voting",id:"quadratic-voting",level:2},{value:"Quadratic Voting Example:",id:"quadratic-voting-example",level:3},{value:"Cooperative (One Person - One Vote)",id:"cooperative-one-person---one-vote",level:2},{value:"Cooperative Voting Example:",id:"cooperative-voting-example",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"choose-a-governance-method"},"Choose a governance method"),(0,a.kt)("p",null," This will decide on how your voting system will look like We offer three different voting mechanisms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proportional"),": 1 share 1 vote"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Quadratic"),":  Your share-ratio squared will be your voting power."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cooperative"),": 1 person 1 vote")),(0,a.kt)("p",null,"There are three types of governance offered by foundance."),(0,a.kt)("h2",{id:"proportional-one-share---one-vote"},"Proportional (One share - one vote)"),(0,a.kt)("p",null,"This governance method is the usual governance method in todays limited or stock companies. The more stocks or shares you own as a co-founder, advisor or freelancer, the more votes you get in the governance of your project. "),(0,a.kt)("h3",{id:"proportional-voting-example"},"Proportional Voting Example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Andrea owns 40% of the token"),(0,a.kt)("li",{parentName:"ul"},"Tom owns 30% of the token"),(0,a.kt)("li",{parentName:"ul"},"Sophia owns 15% of the token"),(0,a.kt)("li",{parentName:"ul"},"Rick owns 15% of the token")),(0,a.kt)("p",null,"In an election, Andreas vote is worth ",(0,a.kt)("inlineCode",{parentName:"p"},"40%")," of all votes, so Andrea and Rick together would hold a majority of ",(0,a.kt)("inlineCode",{parentName:"p"},"55%")," i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"(40+15)%")),(0,a.kt)("h2",{id:"quadratic-voting"},"Quadratic Voting"),(0,a.kt)("p",null,"In the quadratic voting system the token share will be squared to get the respective vote in the election."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Andreas quadratic vote is ",(0,a.kt)("inlineCode",{parentName:"li"},"0, 4*0, 4=0, 16=16%")),(0,a.kt)("li",{parentName:"ul"},"Tom quadratic vote is ",(0,a.kt)("inlineCode",{parentName:"li"},"0, 3*0, 3=0, 09=9%")),(0,a.kt)("li",{parentName:"ul"},"Sophias quardratic vote is ",(0,a.kt)("inlineCode",{parentName:"li"},"0, 15*0, 15=2, 25%")),(0,a.kt)("li",{parentName:"ul"},"Ricks quadratic vote is also ",(0,a.kt)("inlineCode",{parentName:"li"},"2, 25%"))),(0,a.kt)("h3",{id:"quadratic-voting-example"},"Quadratic Voting Example:"),(0,a.kt)("p",null,"Adding these numbers would only result in ",(0,a.kt)("inlineCode",{parentName:"p"},"29"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"5%")," token cast for a vote. So the result has to be multiplied by ",(0,a.kt)("inlineCode",{parentName:"p"},"100/29"),",",(0,a.kt)("inlineCode",{parentName:"p"},"5%=3"),",",(0,a.kt)("inlineCode",{parentName:"p"},"x")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Andreas governance share: ",(0,a.kt)("inlineCode",{parentName:"li"},"16%*3"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"x=50+%")),(0,a.kt)("li",{parentName:"ul"},"Tom governance share: ",(0,a.kt)("inlineCode",{parentName:"li"},"9%*3"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"x=30%")),(0,a.kt)("li",{parentName:"ul"},"Sophias governance share is ",(0,a.kt)("inlineCode",{parentName:"li"},"7%")," \u2026")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Quadratic voting favors higher shares over lower shares")),(0,a.kt)("h2",{id:"cooperative-one-person---one-vote"},"Cooperative (One Person - One Vote)"),(0,a.kt)("p",null,"This governance method is the usual governance method for associations or cooperatives. Here each shareholder has a single vote, no matter how many shares they own."),(0,a.kt)("h3",{id:"cooperative-voting-example"},"Cooperative Voting Example:"),(0,a.kt)("p",null,"following our above examples, you would need three people (among Andreas, Tom, Sophias, Ricks) to get to a majority vote."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In this voting method, you would need more than half of the people to get to a majority vote. ")))}u.isMDXComponent=!0}}]);