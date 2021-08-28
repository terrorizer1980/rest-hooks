"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26462],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28907:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>i,toc:()=>l,default:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"Usage without Suspense",id:"no-suspense",original_id:"no-suspense"},s=void 0,i={unversionedId:"guides/no-suspense",id:"version-3.0/guides/no-suspense",isDocsHomePage:!1,title:"Usage without Suspense",description:"Some libraries you work with may take a loading or error state.",source:"@site/versioned_docs/version-3.0/guides/no-suspense.md",sourceDirName:"guides",slug:"/guides/no-suspense",permalink:"/docs/3.0/guides/no-suspense",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/no-suspense.md",tags:[],version:"3.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Usage without Suspense",id:"no-suspense",original_id:"no-suspense"},sidebar:"version-3.0/docs",previous:{title:"Usage with class components",permalink:"/docs/3.0/guides/class-components"},next:{title:"API Reference",permalink:"/docs/3.0/api/README"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Hook usage",id:"hook-usage",children:[]},{value:"API",id:"api",children:[]}],u={toc:l};function p({components:e,...n}){return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Some libraries you work with may take a ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/card/#components-card-demo-loading"},"loading")," or error state.\nIn these cases you might want a boolean ",(0,a.kt)("inlineCode",{parentName:"p"},"loading")," instead of yielding to Suspense."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useStatefulResource()")," hook has been published under ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),"\nfor this purpose."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @rest-hooks/legacy\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @rest-hooks/legacy\n")),(0,a.kt)("h2",{id:"hook-usage"},"Hook usage"),(0,a.kt)("h4",{id:"resourcesprofileresourcets"},(0,a.kt)("inlineCode",{parentName:"h4"},"resources/ProfileResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class ProfileResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly img: string = '';\n  readonly fullName: string = '';\n  readonly bio: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = '/profiles';\n}\n")),(0,a.kt)("h4",{id:"profilelisttsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"ProfileList.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useStatefulResource } from '@rest-hooks/legacy';\nimport { Skeleton, Card, Avatar } from 'antd';\nimport ProfileResource from 'resources/ProfileResource';\n\nconst { Meta } = Card;\n\nfunction ProfileList() {\n  const { data, loading, error } = useStatefulResource(\n    ProfileResource.detailShape(),\n    {},\n  );\n  if (error) return <div>Error {error.status}</div>\n  return (\n    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>\n      <Meta\n        avatar={\n          <Avatar src={data.img} />\n        }\n        title={data.fullName}\n        description={data.bio}\n      />\n    </Card>\n  );\n}\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useStatefulResource<Params extends Readonly<object>, S extends Schema>(fetchShape: ReadShape<S, Params>, params: Params | null): {\n    data: DenormalizeNullable<S>;\n    loading: boolean;\n    error: (Params extends null ? undefined : Error) | undefined;\n};\n")))}p.isMDXComponent=!0}}]);