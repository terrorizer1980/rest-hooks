"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92688],{58215:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294);const a=function({children:e,hidden:t,className:n}){return o.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},55064:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(67294),a=n(79443);const r=function(){const e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(86010);const l="tabItem_1uMI",i="tabItemActive_2DSg";const c=37,u=39;const d=function(e){const{lazy:t,block:n,defaultValue:a,values:d,groupId:p,className:m}=e,{tabGroupChoices:k,setTabGroupChoices:h}=r(),[g,f]=(0,o.useState)(a),v=o.Children.toArray(e.children),b=[];if(null!=p){const e=k[p];null!=e&&e!==g&&d.some((t=>t.value===e))&&f(e)}const y=e=>{const t=e.currentTarget,n=b.indexOf(t),o=d[n].value;f(o),null!=p&&(h(p,o),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:o,right:a}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:s}=window;return t>=0&&a<=s&&o<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((()=>t.classList.remove(i)),2e3))}),150))},w=e=>{var t;let n;switch(e.keyCode){case u:{const t=b.indexOf(e.target)+1;n=b[t]||b[0];break}case c:{const t=b.indexOf(e.target)-1;n=b[t]||b[b.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},m)},d.map((({value:e,label:t})=>o.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,s.Z)("tabs__item",l,{"tabs__item--active":g===e}),key:e,ref:e=>b.push(e),onKeyDown:w,onFocus:y,onClick:y},t)))),t?(0,o.cloneElement)(v.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(0,n(67294).createContext)(void 0)},96497:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(55064),a=n(58215),r=n(67294),s=n(67934);function l({pkgs:e,dev:t=!1}){return r.createElement(o.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},r.createElement(a.Z,{value:"yarn"},r.createElement(s.Z,{className:"language-bash"},"yarn add ",t?"--dev ":"",e)),r.createElement(a.Z,{value:"npm"},r.createElement(s.Z,{className:"language-bash"},"npm install --save",t?"Dev ":""," ",e)))}},56922:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(67294),a=n(28953);const r={React:o,...o,...a}},1695:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>u,toc:()=>d,default:()=>m});var o=n(87462),a=(n(67294),n(3905)),r=n(96497),s=n(55064),l=n(58215);const i={title:"Unit testing hooks"},c=void 0,u={unversionedId:"guides/unit-testing-hooks",id:"version-5.0/guides/unit-testing-hooks",isDocsHomePage:!1,title:"Unit testing hooks",description:"Hooks allow you to pull complex behaviors out of your components into succinct,",source:"@site/versioned_docs/version-5.0/guides/unit-testing-hooks.md",sourceDirName:"guides",slug:"/guides/unit-testing-hooks",permalink:"/docs/5.0/guides/unit-testing-hooks",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/unit-testing-hooks.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630038660,formattedLastUpdatedAt:"8/26/2021",frontMatter:{title:"Unit testing hooks"}},d=[{value:"Polyfill fetch in node",id:"polyfill-fetch-in-node",children:[]},{value:"Example:",id:"example",children:[]}],p={toc:d};function m({components:e,...t}){return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hooks allow you to pull complex behaviors out of your components into succinct,\ncomposable functions. This makes testing component behavior potentially much\neasier. But how does this work if you want to use hooks from ",(0,a.kt)("inlineCode",{parentName:"p"},"rest-hooks"),"?"),(0,a.kt)("p",null,"We have provided some simple utilities to reduce boilerplate for unit tests\nthat are wrappers around ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks"),"'s ",(0,a.kt)("a",{parentName:"p",href:"https://react-hooks-testing-library.com/reference/api#renderhook-options"},"renderHook()"),"."),(0,a.kt)("p",null,"We want a ",(0,a.kt)("a",{parentName:"p",href:"../api/makeRenderRestHook#renderresthook"},"renderRestHook()")," function that renders in the context of both\na ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Suspense")," boundary."),(0,a.kt)("p",null,"To support both providers, you must choose among two provider-generators to\nsend as args to the ",(0,a.kt)("a",{parentName:"p",href:"../api/makeRenderRestHook#renderresthook"},"renderRestHook()")," generator."),(0,a.kt)("p",null,"These will generally be done during test setup. It's important to call cleanup\nupon test completion."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note:"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," creates a Provider context with new manager instances. This means each call\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," will result in a completely fresh cache state as well as manager state.")),(0,a.kt)("h3",{id:"polyfill-fetch-in-node"},"Polyfill fetch in node"),(0,a.kt)("p",null,"Node doesn't come with fetch out of the box, so we need to be sure to polyfill it."),(0,a.kt)(r.Z,{pkgs:"whatwg-fetch",dev:!0,mdxType:"PkgTabs"}),(0,a.kt)(s.Z,{defaultValue:"jest",values:[{label:"jest",value:"jest"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"jest",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // other things\n  setupFiles: ['./testSetup.js'],\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// testSetup.js\nrequire('whatwg-fetch');\n")))),(0,a.kt)("h3",{id:"example"},"Example:"),(0,a.kt)(s.Z,{defaultValue:"CacheProvider",values:[{label:"CacheProvider",value:"CacheProvider"},{label:"ExternalCacheProvider",value:"ExternalCacheProvider"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"CacheProvider",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import nock from 'nock';\nimport { makeRenderRestHook, makeCacheProvider } from '@rest-hooks/test';\n\ndescribe('useResource()', () => {\n  let renderRestHook: ReturnType<typeof makeRenderRestHook>;\n\n  beforeEach(() => {\n    nock(/.*/)\n      .persist()\n      .defaultReplyHeaders({\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      })\n      .options(/.*/)\n      .reply(200)\n      .get(`/article/0`)\n      .reply(403, {});\n    renderRestHook = makeRenderRestHook(makeCacheProvider);\n  });\n\n  afterEach(() => {\n    nock.cleanAll();\n  });\n\n  it('should throw errors on bad network', async () => {\n    const { result, waitForNextUpdate } = renderRestHook(() => {\n      return useResource(ArticleResource.detail(), {\n        title: '0',\n      });\n    });\n    expect(result.current).toBeUndefined();\n    await waitForNextUpdate();\n    expect(result.error).toBeDefined();\n    expect((result.error as any).status).toBe(403);\n  });\n});\n"))),(0,a.kt)(l.Z,{value:"ExternalCacheProvider",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import nock from 'nock';\nimport { makeRenderRestHook, makeExternalCacheProvider } from '@rest-hooks/test';\n\ndescribe('useResource()', () => {\n  let renderRestHook: ReturnType<typeof makeRenderRestHook>;\n\n  beforeEach(() => {\n    nock(/.*/)\n      .persist()\n      .defaultReplyHeaders({\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      })\n      .options(/.*/)\n      .reply(200)\n      .get(`/article/0`)\n      .reply(403, {});\n    renderRestHook = makeRenderRestHook(makeExternalCacheProvider);\n  });\n\n  afterEach(() => {\n    nock.cleanAll();\n  });\n\n  it('should throw errors on bad network', async () => {\n    const { result, waitForNextUpdate } = renderRestHook(() => {\n      return useResource(ArticleResource.detail(), {\n        title: '0',\n      });\n    });\n    expect(result.current).toBeUndefined();\n    await waitForNextUpdate();\n    expect(result.error).toBeDefined();\n    expect((result.error as any).status).toBe(403);\n  });\n});\n")))))}m.isMDXComponent=!0}}]);