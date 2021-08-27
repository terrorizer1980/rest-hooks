"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12597:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>a,toc:()=>c,default:()=>d});var r=n(87462),o=(n(67294),n(3905));const i={id:"unit-testing-components",title:"Unit testing components",original_id:"unit-testing-components"},s=void 0,a={unversionedId:"guides/unit-testing-components",id:"version-4.0/guides/unit-testing-components",isDocsHomePage:!1,title:"Unit testing components",description:"If you need to add unit tests to your components to check some behavior you might want",source:"@site/versioned_docs/version-4.0/guides/unit-testing-components.md",sourceDirName:"guides",slug:"/guides/unit-testing-components",permalink:"/docs/4.0/guides/unit-testing-components",editUrl:"https://github.com/coinbase/rest-hooks/edit/main/website-2/docs/guides/unit-testing-components.md",tags:[],version:"4.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{id:"unit-testing-components",title:"Unit testing components",original_id:"unit-testing-components"},sidebar:"version-4.0/docs",previous:{title:"Unit testing hooks",permalink:"/docs/4.0/guides/unit-testing-hooks"},next:{title:"Fetch then Render",permalink:"/docs/4.0/guides/fetch-then-render"}},c=[],u=(l="MockProvider",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var l;const p={toc:c};function d({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you need to add unit tests to your components to check some behavior you might want\navoid dealing with network fetch cycle as that is probably orthogonal to what your are\ntrying to test. Using ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0/api/MockProvider"},"\\",(0,o.kt)(u,{mdxType:"MockProvider"}))," in our tests allow\nus to prime the cache with provided fixtures so the components will immediately render\nwith said results."),(0,o.kt)("h4",{id:"__tests__fixturests"},(0,o.kt)("inlineCode",{parentName:"h4"},"__tests__/fixtures.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  full: [\n    {\n      request: ArticleResource.listShape(),\n      params: { maxResults: 10 },\n      result: [\n        {\n          id: 5,\n          content: 'have a merry christmas',\n          author: 2,\n          contributors: [],\n        },\n        {\n          id: 532,\n          content: 'never again',\n          author: 23,\n          contributors: [5],\n        },\n      ],\n    },\n  ],\n  empty: [\n    {\n      request: ArticleResource.listShape(),\n      params: { maxResults: 10 },\n      result: [],\n    },\n  ],\n  loading: [],\n};\n")),(0,o.kt)("h4",{id:"__tests__articlelisttsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"__tests__/ArticleList.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { render } from '@testing-library/react';\nimport { MockProvider } from '@rest-hooks/test';\n\nimport ArticleList from 'components/ArticleList';\nimport results from './fixtures';\n\ndescribe('<ArticleList />', () => {\n  it('renders', () => {\n    const tree = (\n      <MockProvider results={results.full}>\n        <ArticleList maxResults={10} />\n      </MockProvider>\n    );\n    const { queryByText } = render(tree);\n    const content = queryByText(results.full.result[0].content);\n    expect(content).toBeDefined();\n  });\n});\n")))}d.isMDXComponent=!0}}]);