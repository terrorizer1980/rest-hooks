"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1456],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64661:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>a,metadata:()=>c,toc:()=>s,default:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={title:"Custom Resource cache lifetime",sidebar_label:"Custom cache lifetime",id:"resource-lifetime",original_id:"resource-lifetime"},a=void 0,c={unversionedId:"guides/resource-lifetime",id:"version-4.0/guides/resource-lifetime",isDocsHomePage:!1,title:"Custom Resource cache lifetime",description:"By default the NetworkManager specifies the lifetime of data and errors in the cache.",source:"@site/versioned_docs/version-4.0/guides/resource-lifetime.md",sourceDirName:"guides",slug:"/guides/resource-lifetime",permalink:"/docs/4.0/guides/resource-lifetime",editUrl:"https://github.com/coinbase/rest-hooks/edit/main/website-2/docs/guides/resource-lifetime.md",tags:[],version:"4.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Custom Resource cache lifetime",sidebar_label:"Custom cache lifetime",id:"resource-lifetime",original_id:"resource-lifetime"},sidebar:"version-4.0/docs",previous:{title:"Custom networking library",permalink:"/docs/4.0/guides/custom-networking"},next:{title:"Infinite Scrolling",permalink:"/docs/4.0/guides/infinite-scrolling-pagination"}},s=[{value:"Examples",id:"examples",children:[{value:"Long cache lifetime",id:"long-cache-lifetime",children:[]},{value:"Never retry on error",id:"never-retry-on-error",children:[]}]}],l={toc:s};function u({components:e,...t}){return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default the NetworkManager specifies the lifetime of data and errors in the cache.\nIf some resources are longer living, or shorter living than other, the can specify their own expiry length values,\nwhich will be passed on to all ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.0/api/FetchShape"},"fetch shape")," creator functions of ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.0/api/resource"},"Resource"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"long-cache-lifetime"},"Long cache lifetime"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LongLivingResource.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// We can now extend LongLivingResource to get a resource that will be cached for one hour\nabstract class LongLivingResource extends Resource {\n  static getFetchOptions() {\n    return {\n      ...super.getFetchOptions(),\n      dataExpiryLength: 60 * 60 * 1000, // one hour\n    };\n  }\n}\n")),(0,i.kt)("h3",{id:"never-retry-on-error"},"Never retry on error"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NoRetryResource.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// We can now extend NoRetryResource to get a resource that will never retry on network error\nabstract class NoRetryResource extends Resource {\n  static getFetchOptions() {\n    return {\n      ...super.getFetchOptions(),\n      errorExpiryLength: Infinity,\n    };\n  }\n}\n")))}u.isMDXComponent=!0}}]);