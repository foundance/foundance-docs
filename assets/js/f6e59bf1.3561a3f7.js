"use strict";(self.webpackChunkfoundance_docs=self.webpackChunkfoundance_docs||[]).push([[595],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2094:(e,t,o)=>{o.d(t,{Z:()=>h});var n=o(7294),a=o(6010);const r="browserWindow_my1Q",i="browserWindowHeader_jXSR",l="buttons_uHc7",s="browserWindowAddressBar_Pd8y",c="dot_giz1",u="browserWindowMenuIcon_Vhuh",p="bar_rrRL",d="browserWindowBody_Idgs";const h=function(e){let{children:t,minHeight:o,url:h="http://localhost:3000"}=e;return n.createElement("div",{className:r,style:{minHeight:o}},n.createElement("div",{className:i},n.createElement("div",{className:l},n.createElement("span",{className:c,style:{background:"#f25f58"}}),n.createElement("span",{className:c,style:{background:"#fbbe3c"}}),n.createElement("span",{className:c,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,a.Z)(s,"text--truncate")},h),n.createElement("div",{className:u},n.createElement("div",null,n.createElement("span",{className:p}),n.createElement("span",{className:p}),n.createElement("span",{className:p})))),n.createElement("div",{className:d},t))}},3829:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(7294);const a=e=>{let{children:t,url:o=null,color:a="#FF7900",textColor:r="#FFFFFF"}=e;return null!==o?n.createElement("a",{href:o,style:{color:r,cursor:"pointer",textDecoration:"none",margin:"0 5px"}},n.createElement("span",{style:{backgroundColor:a,borderRadius:"20px",padding:"5px 10px"}},t)):n.createElement("span",{style:{backgroundColor:a,borderRadius:"20px",padding:"5px 10px",color:r,cursor:"pointer",margin:"0 5px"}},t)}},3639:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=o(7462),a=(o(7294),o(3905)),r=o(2094),i=o(3829);const l={sidebar_position:0},s="Authentication",c={unversionedId:"tutorial-basics/authentication",id:"tutorial-basics/authentication",title:"Authentication",description:"1. Connect your wallet",source:"@site/docs/tutorial-basics/authentication.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/authentication",permalink:"/tutorial-basics/authentication",draft:!1,editUrl:"https://github.com/foundance/foundance-docs/docs/tutorial-basics/authentication.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Foundance Process",permalink:"/category/foundance-process"},next:{title:"Your Profile",permalink:"/tutorial-basics/your-profile"}},u={},p=[{value:"1. Connect your wallet",id:"1-connect-your-wallet",level:3},{value:"2. Verify Email",id:"2-verify-email",level:3},{value:"3. Tell us who you are",id:"3-tell-us-who-you-are",level:3},{value:"4. You are in",id:"4-you-are-in",level:3}],d={toc:p};function h(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentication"},"Authentication"),(0,a.kt)("h3",{id:"1-connect-your-wallet"},"1. Connect your wallet"),(0,a.kt)("p",null,"This is important, Blockchain is the underlying technology for all of the tools we are providing within the platform, your wallet is where you will hold your tokens and what you will use to authorise governance actions for your Organizations later on."),(0,a.kt)("p",null,"If you don't have a wallet yet, you can ",(0,a.kt)(i.Z,{url:"https://myterablock.medium.com/how-to-create-or-import-a-metamask-wallet-a551fc2f5a6b",color:"#FF7900",mdxType:"Highlight"},"learn how to create a wallet here"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.bybit.com/blockchain/off-chain-vs-on-chain-transactions/"},"All activities which will be executed on-chain")," will need to be signed (accepted) by you within your wallet - Metamask in our example. For all future actions (transactions) we encourage you to always have some amount of MATIC in your wallet, the token of the Polygon network. We will add mechanisms for getting tokens directly through the platform, but for now see the options listed in this ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/prepo/setting-up-metamask-and-getting-eth-matic-on-polygon-step-by-step-guide-fd55147a0f05"},"blog post"),"."),(0,a.kt)("p",null,"Once you open the app, you need to authenticate by choosing one of the wallet options, as shown bellow."),(0,a.kt)(r.Z,{url:"https://app.foundance.org",mdxType:"BrowserWindow"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connecting Wallet",src:o(1957).Z,title:"Wallet Authentication",width:"2880",height:"2048"}))),(0,a.kt)("p",null,"then you need to ",(0,a.kt)(i.Z,{color:"#F6F5F5",textColor:"black",mdxType:"Highlight"},"sign a message")," by clicking the button."),(0,a.kt)(r.Z,{url:"https://app.foundance.org/authentication/sign-message",mdxType:"BrowserWindow"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Authenticate with Message",src:o(5494).Z,title:"Authenticate with Message",width:"1920",height:"396"}))),(0,a.kt)("p",null,"To login, your wallet will open and requests for your signature. By clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sign")," you will confirm and authenticate your wallet."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You will not be paying any gas fees to sign and authenticate your wallet.")),(0,a.kt)(r.Z,{url:"https://app.foundance.org/authentication/sign-message",mdxType:"BrowserWindow"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sign the wallet message",src:o(1085).Z,title:"Sign the message in wallet",width:"1920",height:"732"}))),(0,a.kt)("h3",{id:"2-verify-email"},"2. Verify Email"),(0,a.kt)("p",null,"Foundance uses your email address to stay in contact with you, and to alert you when there is activity that you may be interested in. Your email is not used to identify you, is stored securely, and will not be shared with any other users of the Foundance platform."),(0,a.kt)("p",null,"To create a profile, add your email and click on ",(0,a.kt)(i.Z,{color:"#F6F5F5",textColor:"black",mdxType:"Highlight"},"proceed")," button."),(0,a.kt)(r.Z,{url:"https://app.foundance.org/authentication/create-profile",mdxType:"BrowserWindow"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a profile",src:o(4260).Z,title:"Create a profile",width:"1920",height:"584"}))),(0,a.kt)("p",null,"At this stage, your profile is availabe, but you need to ",(0,a.kt)("inlineCode",{parentName:"p"},"verify your email")," for activating your account."),(0,a.kt)(r.Z,{url:"https://app.foundance.org/authentication/verify-email",mdxType:"BrowserWindow"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Verify email",src:o(8896).Z,title:"Verify email",width:"1920",height:"463"}))),(0,a.kt)("p",null,"To activate your account, go to your inbox and simply click on the ",(0,a.kt)(i.Z,{mdxType:"Highlight"},"verify")," button in the email that was just sent for you. Once your email is verified, you can access your account and you will be redirected to the your ",(0,a.kt)("inlineCode",{parentName:"p"},"dashboard"),". You just have done everything to start interacting with the platform, however, there is much more to use all of the features. We will be covering them in the next steps, but if you want to be ready for what is coming up it\u2019s better to complete your profile right now rather than skip it."),(0,a.kt)(r.Z,{url:"https://app.foundance.org/dashboard",mdxType:"BrowserWindow"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Complete Profile",src:o(6337).Z,title:"Complete Profile",width:"2880",height:"2048"}))),(0,a.kt)("h3",{id:"3-tell-us-who-you-are"},"3. Tell us who you are"),(0,a.kt)("p",null,"Usually we believe in identified founders - as it\u2019s just easier for people to put the trust in new friends we can verify. However we will enable anonymous co-founder projects for certain use cases at a later stage of development of Foundance platform. Good tip from our experience is that the better and more insightful is your profile, the more people will follow your ideas. Due to regulatory landscape we need to copy everyday, we have to mention that we might need you to run through a KYC process some time in the future."),(0,a.kt)("p",null,"You can always return and update your profile by clicking on your wallet address in the top right corner of the screen and selecting ",(0,a.kt)("inlineCode",{parentName:"p"},"go to profile"),"."),(0,a.kt)(r.Z,{url:"https://app.foundance.org/dashboard/account/profile/edit",mdxType:"BrowserWindow"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Complete Profile",src:o(853).Z,title:"Complete Profile",width:"2880",height:"2048"}))),(0,a.kt)("p",null,"once you completed the form, scroll down and click the ",(0,a.kt)(i.Z,{mdxType:"Highlight"},"done")," button to save your profile information."),(0,a.kt)("h3",{id:"4-you-are-in"},"4. You are in"),(0,a.kt)("p",null,"Whether you completed your profile or not, you will now see the Projects Dashboard and can start exploring."),(0,a.kt)(r.Z,{url:"https://app.foundance.org/dashboard",mdxType:"BrowserWindow"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project Dashbard",src:o(7657).Z,title:"Project Dashboard",width:"1920",height:"1000"}))))}h.isMDXComponent=!0},1957:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/1-connect-wallet-c75151b5afd8e1b64d10c1319cf00951.jpg"},5494:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/1-sign-a-message-291473b16809513ab8d9cf42f3c8cce8.jpg"},1085:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/1-signature-request-3ad835cb59710c2e4986599562121a34.jpg"},7657:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2-account-created-173f0a91379d1c9be37ef9cc93725687.jpg"},4260:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2-complete-info-email-19d77adfad35c0f5a7dbf1cc2e30f9f4.jpg"},8896:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2-complete-info-verify-email-253386505800333546228c097aac82dd.jpg"},853:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2-complete-profile-info-18b52ef28ad3122ecf614c5c73dd9968.png"},6337:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2-complete-profile-a13fd9a1bd09709baad07d5f1efde424.png"}}]);