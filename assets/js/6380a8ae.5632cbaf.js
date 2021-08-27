"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9181],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},91813:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>c,toc:()=>l,default:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={title:"useLoading()"},i=void 0,c={unversionedId:"api/useLoading",id:"version-2.2/api/useLoading",isDocsHomePage:!1,title:"useLoading()",description:"`typescript",source:"@site/versioned_docs/version-2.2/api/useLoading.md",sourceDirName:"api",slug:"/api/useLoading",permalink:"/docs/2.2/api/useLoading",editUrl:"https://github.com/coinbase/rest-hooks/edit/main/website-2/docs/api/useLoading.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"useLoading()"}},l=[{value:"Todo toggle example",id:"todo-toggle-example",children:[]}],s={toc:l};function p({components:e,...n}){return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default function useLoading<F extends (...args: any) => Promise<any>>(\n  func: F,\n  onError?: (error: Error) => void,\n): [F, boolean];\n")),(0,o.kt)("p",null,"Helps track loading state of imperative async functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLoading } from '@rest-hooks/hooks';\n\nfunction Button({ onClick, children, ...props }) {\n  const [clickHandler, loading, error] = useLoading(onClick);\n  return (\n    <button onClick={clickHandler} {...props}>\n      {loading ? 'Loading...' : children}\n    </button>\n  );\n}\n")),(0,o.kt)("p",null,"Part of ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/hooks"},"@rest-hooks/hooks")),(0,o.kt)("h3",{id:"todo-toggle-example"},"Todo toggle example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useCallback } from 'react';\nimport { useFetcher } from 'rest-hooks';\nimport { useLoading } from '@rest-hooks/hooks';\n\nimport TodoResource from 'resources/TodoResource';\n\ninterface Props {\n  todo: TodoResource;\n}\n\nfunction TodoListItem({ todo }) {\n  const partialUpdate = useFetcher(TodoResource.partialUpdate());\n\n  const toggle = useCallback(\n    (e: ChangeEvent<HTMLInputElement>) =>\n      partialUpdate({ id }, { completed: e.currentTarget.checked }),\n    [partialUpdate],\n  );\n\n  const [toggleHandler, loading, error] = useLoading(toggle);\n\n  return (\n    <div>\n      <input\n        type=\"checkbox\"\n        checked={todo.completed}\n        onChange={toggleHandler}\n      />\n      {loading ? <Spinner /> : null}\n      {error ? <Error>{error}</Error> : null}\n      {todo.title}\n    </div>\n  );\n}\n")))}p.isMDXComponent=!0}}]);