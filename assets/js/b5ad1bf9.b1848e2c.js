"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79161],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,y=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50109:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>a,metadata:()=>s,toc:()=>u,default:()=>p});var n=r(87462),i=(r(67294),r(3905));const o={title:"Multi-column primary key",id:"multi-pk",original_id:"multi-pk"},a=void 0,s={unversionedId:"guides/multi-pk",id:"version-4.1/guides/multi-pk",isDocsHomePage:!1,title:"Multi-column primary key",description:"Sometimes you have a resource that doesn't have its own primary key. This is typically",source:"@site/versioned_docs/version-4.1/guides/multi-pk.md",sourceDirName:"guides",slug:"/guides/multi-pk",permalink:"/docs/4.1/guides/multi-pk",editUrl:"https://github.com/coinbase/rest-hooks/edit/main/website-2/docs/guides/multi-pk.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Multi-column primary key",id:"multi-pk",original_id:"multi-pk"},sidebar:"version-4.1/docs",previous:{title:"Computed Properties",permalink:"/docs/4.1/guides/computed-properties"},next:{title:"Nesting related resources (server-side join)",permalink:"/docs/4.1/guides/nested-response"}},u=[],l={toc:u};function p({components:e,...t}){return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sometimes you have a resource that doesn't have its own primary key. This is typically\nfound in ",(0,i.kt)("inlineCode",{parentName:"p"},"join tables")," that express ",(0,i.kt)("inlineCode",{parentName:"p"},"many-to-many")," relationships."),(0,i.kt)("p",null,"Since the pk() method must return either a number, string or undefined, make sure to\ndo a simple serialization. A simple join on the values should work. Be care to\nmake sure your join value can't be a part of the id."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class VoteResource extends Resource {\n  readonly userId: number | undefined = undefined;\n  readonly postId: number | undefined = undefined;\n  readonly createdAt: string = '1900-01-01T01:01:01Z';\n\n  pk() {\n    return [this.userId, this.postId].join(',');\n  }\n  static urlRoot = 'https://example.com/votes/';\n}\n")))}p.isMDXComponent=!0}}]);