"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6244],{3905:(r,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>f});var n=t(67294);function o(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function a(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function l(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}var c=n.createContext({}),p=function(r){var e=n.useContext(c),t=e;return r&&(t="function"==typeof r?r(e):i(i({},e),r)),t},s=function(r){var e=p(r.components);return n.createElement(c.Provider,{value:e},r.children)},u={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(r,e){var t=r.components,o=r.mdxType,a=r.originalType,c=r.parentName,s=l(r,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,i(i({ref:e},s),{},{components:t})):n.createElement(m,i({ref:e},s))}));function f(r,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof r||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=r,l.mdxType="string"==typeof r?r:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45584:(r,e,t)=>{t.r(e),t.d(e,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>l,toc:()=>c,default:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={title:"<NetworkErrorBoundary />",id:"NetworkErrorBoundary",original_id:"NetworkErrorBoundary"},i=void 0,l={unversionedId:"api/NetworkErrorBoundary",id:"version-4.3/api/NetworkErrorBoundary",isDocsHomePage:!1,title:"<NetworkErrorBoundary />",description:"Displays a fallback component when a network error happens in its subtree.",source:"@site/versioned_docs/version-4.3/api/NetworkErrorBoundary.md",sourceDirName:"api",slug:"/api/NetworkErrorBoundary",permalink:"/docs/4.3/api/NetworkErrorBoundary",editUrl:"https://github.com/coinbase/rest-hooks/edit/main/website-2/docs/api/NetworkErrorBoundary.md",tags:[],version:"4.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"<NetworkErrorBoundary />",id:"NetworkErrorBoundary",original_id:"NetworkErrorBoundary"},sidebar:"version-4.3/docs",previous:{title:"<ExternalCacheProvider />",permalink:"/docs/4.3/api/ExternalCacheProvider"},next:{title:"Manager",permalink:"/docs/4.3/api/Manager"}},c=[],p={toc:c};function s({components:r,...e}){return(0,o.kt)("wrapper",(0,n.Z)({},p,e,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Displays a fallback component when a network error happens in its subtree."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Props {\n  children: React.ReactNode;\n  fallbackComponent: React.ComponentType<{\n    error: NetworkError;\n  }>;\n}\nexport default class NetworkErrorBoundary extends React.Component<Props> {\n  static defaultProps: {\n    fallbackComponent: ({ error }: { error: NetworkError }) => JSX.Element;\n  };\n}\n")),(0,o.kt)("p",null,"Custom fallback usage example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { CacheProvider, NetworkErrorBoundary, NetworkError } from 'rest-hooks';\n\nfunction ErrorPage({ error }: { error: NetworkError }) {\n  return (\n    <div>\n      {error.status} {error.response && error.response.statusText}\n    </div>\n  );\n}\n\nexport default function App(): React.ReactElement {\n  return (\n    <CacheProvider>\n      <NetworkErrorBoundary fallbackComponent={ErrorPage}>\n        <Router />\n      </NetworkErrorBoundary>\n    </CacheProvider>\n  );\n}\n")),(0,o.kt)("p",null,"Note: Once ",(0,o.kt)("inlineCode",{parentName:"p"},"<NetworkErrorBoundary />")," catches an error it will only render the fallback\nuntil it is remounted. To get around this you'll likely want to place the boundary at\nlocations that will cause remounts when the error should be cleared. This is usually\nbelow the route itself."))}s.isMDXComponent=!0}}]);