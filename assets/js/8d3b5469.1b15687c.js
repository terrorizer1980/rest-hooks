"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const o=function({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},55064:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(67294),o=n(79443);const s=function(){const e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=n(86010);const a="tabItem_1uMI",l="tabItemActive_2DSg";const c=37,u=39;const p=function(e){const{lazy:t,block:n,defaultValue:o,values:p,groupId:d,className:m}=e,{tabGroupChoices:f,setTabGroupChoices:b}=s(),[h,v]=(0,r.useState)(o),y=r.Children.toArray(e.children),k=[];if(null!=d){const e=f[d];null!=e&&e!==h&&p.some((t=>t.value===e))&&v(e)}const g=e=>{const t=e.currentTarget,n=k.indexOf(t),r=p[n].value;v(r),null!=d&&(b(d,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:o}=e.getBoundingClientRect(),{innerHeight:s,innerWidth:i}=window;return t>=0&&o<=i&&r<=s&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},O=e=>{var t;let n;switch(e.keyCode){case u:{const t=k.indexOf(e.target)+1;n=k[t]||k[0];break}case c:{const t=k.indexOf(e.target)-1;n=k[t]||k[k.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((({value:e,label:t})=>r.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,i.Z)("tabs__item",a,{"tabs__item--active":h===e}),key:e,ref:e=>k.push(e),onKeyDown:O,onFocus:g,onClick:g},t)))),t?(0,r.cloneElement)(y.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)(void 0)},11048:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(55064),o=n(58215),s=n(67294);function i({children:e}){return s.createElement(r.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},s.createElement(o.Z,{value:"simple"},e[0]),s.createElement(o.Z,{value:"generics"},e[1]))}},11981:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>l,toc:()=>c,default:()=>p});var r=n(87462),o=(n(67294),n(3905)),s=n(11048);const i={title:"useSubscription()"},a=void 0,l={unversionedId:"api/useSubscription",id:"version-5.0/api/useSubscription",isDocsHomePage:!1,title:"useSubscription()",description:"`typescript",source:"@site/versioned_docs/version-5.0/api/useSubscription.md",sourceDirName:"api",slug:"/api/useSubscription",permalink:"/docs/5.0/api/useSubscription",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useSubscription.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"useSubscription()"}},c=[{value:"Example",id:"example",children:[]},{value:"Only subscribe while element is visible",id:"only-subscribe-while-element-is-visible",children:[]},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",children:[]}],u={toc:c};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{mdxType:"GenericsTabs"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription(\n  endpoint: ReadEndpoint,\n  params: object | null,\n): void;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription<\n  Params extends Readonly<object>,\n  S extends Schema\n>(\n  endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>,\n  params: Params | null,\n): void;\n"))),(0,o.kt)("p",null,"Great for keeping resources up-to-date with frequent changes."),(0,o.kt)("p",null,"When using the default ",(0,o.kt)("a",{parentName:"p",href:"./PollingSubscription"},"polling subscriptions"),", frequency must be set in\n",(0,o.kt)("a",{parentName:"p",href:"/docs/5.0/api/Endpoint"},"Endpoint"),", otherwise will have no effect."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Send ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to params to unsubscribe.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PriceResource.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\nimport { EndpointExtraOptions } from '@rest-hooks/endpoint';\n\nexport default class PriceResource extends Resource {\n  readonly symbol: string | undefined = undefined;\n  readonly price: string = '0.0';\n  // ...\n\n  pk() {\n    return this.symbol;\n  }\n  static urlRoot = 'http://test.com/price/';\n\n  /** Used as default options for every Endpoint */\n  static getEndpointExtra(): EndpointExtraOptions {\n    return {\n      pollFrequency: 5000, // every 5 seconds\n    };\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MasterPrice.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource, useSubscription } from 'rest-hooks';\nimport PriceResource from 'resources/PriceResource';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useResource(PriceResource.detail(), { symbol });\n  useSubscription(PriceResource.detail(), { symbol });\n  // ...\n}\n")),(0,o.kt)("h2",{id:"only-subscribe-while-element-is-visible"},"Only subscribe while element is visible"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MasterPrice.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRef } from 'react';\nimport { useResource, useSubscription } from 'rest-hooks';\nimport PriceResource from 'resources/PriceResource';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useResource(PriceResource.detail(), { symbol });\n  const ref = useRef();\n  const onScreen = useOnScreen(ref);\n  // null params means don't subscribe\n  useSubscription(PriceResource.detail(), onScreen ? null : { symbol });\n\n  return (\n    <div ref={ref}>{price.value.toLocaleString('en', { currency: 'USD' })}</div>\n  );\n}\n")),(0,o.kt)("p",null,"Using the last argument ",(0,o.kt)("inlineCode",{parentName:"p"},"active")," we control whether the subscription is active or not\nbased on whether the element rendered is ",(0,o.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"visible on screen"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"useOnScreen()")," uses ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"IntersectionObserver"),", which is very performant."),(0,o.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,o.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/5.0/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"detail()"),(0,o.kt)("li",{parentName:"ul"},"list()")),(0,o.kt)("p",null,"Be sure to extend these ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.0/api/Endpoint"},"Endpoint"),"s with a pollFrequency to set\nthe polling-rate."))}p.isMDXComponent=!0},86010:(e,t,n)=>{function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})}}]);