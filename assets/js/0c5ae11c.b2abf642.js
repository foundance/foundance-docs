"use strict";(self.webpackChunkfoundance_docs=self.webpackChunkfoundance_docs||[]).push([[2791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2094:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(7294),a=n(6010);const r="browserWindow_my1Q",i="browserWindowHeader_jXSR",l="buttons_uHc7",s="browserWindowAddressBar_Pd8y",c="dot_giz1",u="browserWindowMenuIcon_Vhuh",d="bar_rrRL",p="browserWindowBody_Idgs";const h=function(e){let{children:t,minHeight:n,url:h="http://localhost:3000"}=e;return o.createElement("div",{className:r,style:{minHeight:n}},o.createElement("div",{className:i},o.createElement("div",{className:l},o.createElement("span",{className:c,style:{background:"#f25f58"}}),o.createElement("span",{className:c,style:{background:"#fbbe3c"}}),o.createElement("span",{className:c,style:{background:"#58cb42"}})),o.createElement("div",{className:(0,a.Z)(s,"text--truncate")},h),o.createElement("div",{className:u},o.createElement("div",null,o.createElement("span",{className:d}),o.createElement("span",{className:d}),o.createElement("span",{className:d})))),o.createElement("div",{className:p},t))}},3829:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(7294);const a=e=>{let{children:t,url:n=null,color:a="#FF7900",textColor:r="#FFFFFF"}=e;return null!==n?o.createElement("a",{href:n,style:{color:r,cursor:"pointer",textDecoration:"none",margin:"0 5px"}},o.createElement("span",{style:{backgroundColor:a,borderRadius:"5px",padding:"5px 10px"}},t)):o.createElement("span",{style:{backgroundColor:a,borderRadius:"5px",padding:"5px 10px",color:r,cursor:"pointer",margin:"0 5px"}},t)}},834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=n(7462),a=(n(7294),n(3905)),r=n(2094),i=n(3829);const l={sidebar_position:3},s="Onboarding",c={unversionedId:"onboarding",id:"onboarding",title:"Onboarding",description:"In general, onboarding to Foundance is as simple as clicking a social sign-in link or connecting your wallet - however, if you want your profile to be seen, there are some basic steps that you should follow. Same if you want to sign up to an event!",source:"@site/docs/onboarding.md",sourceDirName:".",slug:"/onboarding",permalink:"/onboarding",draft:!1,editUrl:"https://github.com/foundance/foundance-docs/docs/onboarding.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/started"},next:{title:"Your Profile",permalink:"/your-profile"}},u={},d=[{value:"A Note on Wallets and Socials",id:"a-note-on-wallets-and-socials",level:2},{value:"General Onboarding",id:"general-onboarding",level:2},{value:"1. Authenticate",id:"1-authenticate",level:3},{value:"2. First steps",id:"2-first-steps",level:3},{value:"3. You are in",id:"3-you-are-in",level:3},{value:"What now?",id:"what-now",level:3}],p={toc:d};function h(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"onboarding"},"Onboarding"),(0,a.kt)("p",null,"In general, onboarding to Foundance is as simple as clicking a social sign-in link or connecting your wallet - however, if you want your profile to be seen, there are some basic steps that you should follow. Same if you want to sign up to an event!"),(0,a.kt)("p",null,"To see more about the Event onboarding you can read below at ",(0,a.kt)("a",{parentName:"p",href:"#event-onboarding"},"Event Onboarding")),(0,a.kt)("h2",{id:"a-note-on-wallets-and-socials"},"A Note on Wallets and Socials"),(0,a.kt)("p",null,"Blockchain (and for Foundance, specifically ",(0,a.kt)("a",{parentName:"p",href:"https://polygon.technology"},"Polygon"),") is the underlying technology for all of the tools we are providing for the cofounder agreement and contribution facilities on the platform. Your wallet is where you will hold your tokens and what you will use to authorise governance actions within your Organizations, later on."),(0,a.kt)("p",null,"If you don't have a wallet yet, you can ",(0,a.kt)(i.Z,{url:"https://myterablock.medium.com/how-to-create-or-import-a-metamask-wallet-a551fc2f5a6b",color:"#FF7900",mdxType:"Highlight"},"learn how to create one here"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.bybit.com/blockchain/off-chain-vs-on-chain-transactions/"},"All activities which will be executed on-chain")," will need to be signed (accepted) by you using your wallet - Metamask in our example. For all future actions (transactions) we encourage you to always have some amount of MATIC - the token of the Polygon network - in your wallet, as this is required to pay the (small) transaction fees. We will add mechanisms for acquiring tokens directly through the platform, but for now see the options listed in this ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/prepo/setting-up-metamask-and-getting-eth-matic-on-polygon-step-by-step-guide-fd55147a0f05"},"blog post"),"."),(0,a.kt)("p",null,"At the early venture building steps, it is not required for you to have a wallet connected. All of the network building and project tooling can be use with a regular socially authenticated account."),(0,a.kt)("h2",{id:"general-onboarding"},"General Onboarding"),(0,a.kt)("h3",{id:"1-authenticate"},"1. Authenticate"),(0,a.kt)("p",null,"Once you open the app, you need to authenticate by choosing one of the social options. Each will direct you to approve the request through the selected platform's own approval flow."),(0,a.kt)(r.Z,{url:"https://app.foundance.org/authentication",mdxType:"BrowserWindow"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Authentication",src:n(9549).Z,title:"Authentication",width:"3836",height:"2048"}))),(0,a.kt)("p",null,"If you have a wallet and you want to use that you can click on the small ",(0,a.kt)("inlineCode",{parentName:"p"},"Click here")," link to find your options."),(0,a.kt)(r.Z,{url:"https://app.foundance.org/authentication",mdxType:"BrowserWindow"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wallet Authentication",src:n(9360).Z,title:"Wallet Authentication",width:"3840",height:"2047"}))),(0,a.kt)("p",null,"Where you will then be prompted to sign a message verifying your ownership of the account, for example on Metamask"),(0,a.kt)(r.Z,{url:"https://app.foundance.org/authentication",mdxType:"BrowserWindow"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wallet Authentication",src:n(8317).Z,title:"Wallet Authentication",width:"3840",height:"2044"}))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You will not be paying any gas fees to sign and authenticate your wallet.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you have used your wallet to authenticate and you are not already connected to the Polygon network you will notice that there is an overlay asking you to switch network (this will also add Polygon to your wallet if it is not already present). This is not mandatory until you come to the steps with the agreement, but you will have a better experience if you make the overlay disappear!")),(0,a.kt)("h3",{id:"2-first-steps"},"2. First steps"),(0,a.kt)("p",null,"We don't want to make the onboarding cumbersome for you. We're only asking about:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the way you intend to support the Foundance community; This is also, the reason you are here: are you a founder, a co-founder, an adviser, a freelancer or a hacker? "),(0,a.kt)("li",{parentName:"ul"},"your username on the platform"),(0,a.kt)("li",{parentName:"ul"},"referral code; Did a friend or acquaintance invite you? Use their promo code and they'll get a reward. Once you signup, you will have your own code."),(0,a.kt)("li",{parentName:"ul"},"the email address we can use to communicate with you. Don't worry, you can always unsubscribe from any email category.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"onboardin details",src:n(1317).Z,title:"onboarding details",width:"3008",height:"1520"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you don't get these right from the start, don't worry! You can always change this info.")),(0,a.kt)("h3",{id:"3-you-are-in"},"3. You are in"),(0,a.kt)("p",null,"That's it! You are logged into the platform and you can start your Foundance journey. The page you've just landed on is your ",(0,a.kt)("strong",{parentName:"p"},"Foundance Dashboard"),". Here, you can check out the ",(0,a.kt)("strong",{parentName:"p"},"latest activity")," of our community, view ",(0,a.kt)("strong",{parentName:"p"},"recommended next steps")," or ",(0,a.kt)("strong",{parentName:"p"},"navigate")," to other spaces."),(0,a.kt)(r.Z,{url:"https://app.foundance.org/",mdxType:"BrowserWindow"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dashbard",src:n(2767).Z,title:"Dashboard",width:"3018",height:"1530"}))),(0,a.kt)("h3",{id:"what-now"},"What now?"),(0,a.kt)("p",null,"As you can see on the very top, your profile is quite boring and it will need some attention before being public. You can read more on profiles, ",(0,a.kt)("a",{parentName:"p",href:"/your-profile"},"here"),"."),(0,a.kt)("p",null,"Depending on how you intend to support the community, you will be instructed with some 'Next Steps'. For example, if you are a founder, the first thing you need to do (after completeting your profile) is to ",(0,a.kt)("a",{parentName:"p",href:"/tutorial-basics/create-your-project"},"create a venture")," on Foundance."))}h.isMDXComponent=!0},2767:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/0-dashboard-52c912cad176ec15816ed88da25c99ff.png"},1317:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/0-onboarding-details-706b521c9f9295564f0432fc96f3c872.png"},9549:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1-logging-in-263a440189790d95abb598b47a080d16.png"},8317:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1-sign-transaction-96b45d079615c13246c131ea180b9442.png"},9360:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1-wallet-overlay-e50c922e718c9940f22da4733d8dbced.png"}}]);