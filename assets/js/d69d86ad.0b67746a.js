"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},90517:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>o,metadata:()=>l,toc:()=>c,default:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={title:"Understanding Immutability",sidebar_label:"Understanding Immutability"},o=void 0,l={unversionedId:"guides/immutability",id:"version-5.0/guides/immutability",isDocsHomePage:!1,title:"Understanding Immutability",description:"Benefits",source:"@site/versioned_docs/version-5.0/guides/immutability.md",sourceDirName:"guides",slug:"/guides/immutability",permalink:"/docs/5.0/guides/immutability",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/immutability.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Understanding Immutability",sidebar_label:"Understanding Immutability"}},c=[{value:"Benefits",id:"benefits",children:[]},{value:"The case for immutability",id:"the-case-for-immutability",children:[]}],u={toc:c};function s({components:e,...t}){return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Simplicity"),(0,i.kt)("li",{parentName:"ul"},"Predictability"),(0,i.kt)("li",{parentName:"ul"},"Performance",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"===")," checks allow frequent short-circuiting in React")))),(0,i.kt)("h2",{id:"the-case-for-immutability"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/immutable-js/immutable-js#the-case-for-immutability"},"The case for immutability")))}s.isMDXComponent=!0}}]);