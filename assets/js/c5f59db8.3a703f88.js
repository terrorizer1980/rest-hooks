"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32591:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>a,toc:()=>c,default:()=>l});var r=n(87462),s=(n(67294),n(3905));const i={title:"useSubscription()",id:"useSubscription",original_id:"useSubscription"},o=void 0,a={unversionedId:"api/useSubscription",id:"version-4.2/api/useSubscription",isDocsHomePage:!1,title:"useSubscription()",description:"`typescript",source:"@site/versioned_docs/version-4.2/api/useSubscription.md",sourceDirName:"api",slug:"/api/useSubscription",permalink:"/docs/4.2/api/useSubscription",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useSubscription.md",tags:[],version:"4.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"useSubscription()",id:"useSubscription",original_id:"useSubscription"},sidebar:"version-4.2/docs",previous:{title:"useCache()",permalink:"/docs/4.2/api/useCache"},next:{title:"useRetrieve()",permalink:"/docs/4.2/api/useRetrieve"}},c=[{value:"Example",id:"example",children:[]},{value:"Only subscribe while element is visible",id:"only-subscribe-while-element-is-visible",children:[]},{value:"Useful <code>FetchShape</code>s to send",id:"useful-fetchshapes-to-send",children:[]}],p={toc:c};function l({components:e,...t}){return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription(\n  fetchShape: ReadShape,\n  params: object | null,\n): void;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription<\n  Params extends Readonly<object>,\n  S extends Schema\n>(\n  fetchShape: ReadShape<S, Params>,\n  params: Params | null,\n): void;\n")),(0,s.kt)("p",null,"Great for keeping resources up-to-date with frequent changes."),(0,s.kt)("p",null,"When using the default ",(0,s.kt)("a",{parentName:"p",href:"./PollingSubscription"},"polling subscriptions"),", frequency must be set in\n",(0,s.kt)("a",{parentName:"p",href:"/docs/4.2/api/FetchShape"},"FetchShape"),", otherwise will have no effect."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Send ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," to params to unsubscribe.")),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"PriceResource.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, FetchOptions } from 'rest-hooks';\n\nexport default class PriceResource extends Resource {\n  readonly symbol: string | undefined = undefined;\n  readonly price: string = '0.0';\n  // ...\n\n  pk() {\n    return this.symbol;\n  }\n  static urlRoot = 'http://test.com/price/';\n\n  /** Used as default options for every FetchShape */\n  static getFetchOptions(): FetchOptions {\n    return {\n      pollFrequency: 5000, // every 5 seconds\n    };\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"MasterPrice.tsx")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource, useSubscription } from 'rest-hooks';\nimport PriceResource from 'resources/PriceResource';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useResource(PriceResource.detailShape(), { symbol });\n  useSubscription(PriceResource.detailShape(), { symbol });\n  // ...\n}\n")),(0,s.kt)("h2",{id:"only-subscribe-while-element-is-visible"},"Only subscribe while element is visible"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"MasterPrice.tsx")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRef } from 'react';\nimport { useResource, useSubscription } from 'rest-hooks';\nimport PriceResource from 'resources/PriceResource';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useResource(PriceResource.detailShape(), { symbol });\n  const ref = useRef();\n  const onScreen = useOnScreen(ref);\n  // null params means don't subscribe\n  useSubscription(PriceResource.detailShape(), onScreen ? null : { symbol });\n\n  return (\n    <div ref={ref}>{price.value.toLocaleString('en', { currency: 'USD' })}</div>\n  );\n}\n")),(0,s.kt)("p",null,"Using the last argument ",(0,s.kt)("inlineCode",{parentName:"p"},"active")," we control whether the subscription is active or not\nbased on whether the element rendered is ",(0,s.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"visible on screen"),"."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"useOnScreen()")," uses ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"IntersectionObserver"),", which is very performant."),(0,s.kt)("h2",{id:"useful-fetchshapes-to-send"},"Useful ",(0,s.kt)("inlineCode",{parentName:"h2"},"FetchShape"),"s to send"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/4.2/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"detailShape()"),(0,s.kt)("li",{parentName:"ul"},"listShape()")),(0,s.kt)("p",null,"Be sure to extend these ",(0,s.kt)("a",{parentName:"p",href:"/docs/4.2/api/FetchShape"},"FetchShape"),"s with a pollFrequency to set\nthe polling-rate."))}l.isMDXComponent=!0}}]);