"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97355],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=i,m=d["".concat(s,".").concat(b)]||d[b]||l[b]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40144:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>a,metadata:()=>c,toc:()=>s,default:()=>p});var r=t(87462),i=(t(67294),t(3905));const o={title:"SubscriptionManager<S extends SubscriptionConstructable> implements Manager",sidebar_label:"SubscriptionManager",id:"SubscriptionManager",original_id:"SubscriptionManager"},a=void 0,c={unversionedId:"api/SubscriptionManager",id:"version-4.2/api/SubscriptionManager",isDocsHomePage:!1,title:"SubscriptionManager<S extends SubscriptionConstructable> implements Manager",description:"`typescript",source:"@site/versioned_docs/version-4.2/api/SubscriptionManager.md",sourceDirName:"api",slug:"/api/SubscriptionManager",permalink:"/docs/4.2/api/SubscriptionManager",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/SubscriptionManager.md",tags:[],version:"4.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"SubscriptionManager<S extends SubscriptionConstructable> implements Manager",sidebar_label:"SubscriptionManager",id:"SubscriptionManager",original_id:"SubscriptionManager"},sidebar:"version-4.2/docs",previous:{title:"NetworkManager",permalink:"/docs/4.2/api/NetworkManager"},next:{title:"PollingSubscription",permalink:"/docs/4.2/api/PollingSubscription"}},s=[{value:"constructor(Subscription: S)",id:"constructorsubscription-s",children:[]},{value:"Consumed Actions",id:"consumed-actions",children:[]},{value:"Subscription",id:"subscription",children:[{value:"add(frequency?: number): void",id:"addfrequency-number-void",children:[]},{value:"remove(frequency?: number): boolean",id:"removefrequency-number-boolean",children:[]},{value:"cleanup(): void",id:"cleanup-void",children:[]},{value:"Included implementation",id:"included-implementation",children:[]}]}],u={toc:s};function p({components:e,...n}){return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class SubscriptionManager<S extends SubscriptionConstructable> implements Manager\n")),(0,i.kt)("p",null,"Keeps track of all resource subscriptions."),(0,i.kt)("h2",{id:"constructorsubscription-s"},"constructor(Subscription: S)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#subscription"},"Subscription")," is the class that will be used to handle subscriptions to each endpoint.\nEach instance represents one subscription to a specific unique endpoint."),(0,i.kt)("h2",{id:"consumed-actions"},"Consumed Actions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"'rest-hooks/subscribe'"),(0,i.kt)("li",{parentName:"ul"},"'rest-hooks/unsubscribe'")),(0,i.kt)("h2",{id:"subscription"},"Subscription"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Subscription")," is a class that implements ",(0,i.kt)("inlineCode",{parentName:"p"},"SubscriptionConstructable"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscription")," instances\nhandle the actual subscriptions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"/** Properties sent to Subscription constructor */\nexport interface SubscriptionInit {\n  schema: Schema;\n  fetch: () => Promise<any>;\n  url: string;\n  frequency?: number;\n}\n\n/** Interface handling a single resource subscription */\ninterface Subscription {\n  add(frequency?: number): void;\n  remove(frequency?: number): boolean;\n  cleanup(): void;\n}\n\n/** The static class that constructs Subscription */\ninterface SubscriptionConstructable {\n  new (init: SubscriptionInit, dispatch: React.Dispatch<any>): Subscription;\n}\n")),(0,i.kt)("h3",{id:"addfrequency-number-void"},"add(frequency?: number): void"),(0,i.kt)("p",null,"Adds a new subscription at the provided frequency for the resource."),(0,i.kt)("h3",{id:"removefrequency-number-boolean"},"remove(frequency?: number): boolean"),(0,i.kt)("p",null,"Removes a subscription for the given frequency. Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if there are no\nmore subscriptions after. This is used to clean up unused ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscription"),"s."),(0,i.kt)("h3",{id:"cleanup-void"},"cleanup(): void"),(0,i.kt)("p",null,"Provides any cleanup of dangling resources after Subscription is no longer in use."),(0,i.kt)("h3",{id:"included-implementation"},"Included implementation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./PollingSubscription"},"PollingSubscription"))),(0,i.kt)("blockquote",null,(0,i.kt)("h4",{parentName:"blockquote",id:"note"},"Note"),(0,i.kt)("p",{parentName:"blockquote"},"Implementing your own ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscription")," to handle websockets can be done by\ndispatching ",(0,i.kt)("inlineCode",{parentName:"p"},"rest-hooks/receive")," actions with the data it gets to update.\nBe sure to handle connection opening in the constructor and close the connection\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"cleanup()"))))}p.isMDXComponent=!0}}]);