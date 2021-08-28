"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80095],{20830:(e,t,n)=>{n.d(t,{W:()=>r});var a=n(67294);function r(){return a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},36742:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),r=n(73727),l=n(52263),o=n(13919),c=n(10412);const s=(0,a.createContext)({collectLink:()=>{}});var i=n(44996),u=n(18780);const m=function({isNavLink:e,to:t,href:n,activeClassName:m,isActive:d,"data-noBrokenLinkCheck":h,autoAddBaseUrl:f=!0,...v}){var b;const{siteConfig:{trailingSlash:g,baseUrl:E}}=(0,l.Z)(),{withBaseUrl:p}=(0,i.C)(),k=(0,a.useContext)(s),Z=t||n,w=(0,o.Z)(Z),y=null==Z?void 0:Z.replace("pathname://","");let _=void 0!==y?(C=y,f&&(e=>e.startsWith("/"))(C)?p(C):C):void 0;var C;_&&w&&(_=(0,u.applyTrailingSlash)(_,{trailingSlash:g,baseUrl:E}));const N=(0,a.useRef)(!1),S=e?r.OL:r.rU,L=c.Z.canUseIntersectionObserver;let D;(0,a.useEffect)((()=>(!L&&w&&null!=_&&window.docusaurus.prefetch(_),()=>{L&&D&&D.disconnect()})),[_,L,w]);const I=null!==(b=null==_?void 0:_.startsWith("#"))&&void 0!==b&&b,T=!_||!w||I;return _&&w&&!I&&!h&&k.collectLink(_),T?a.createElement("a",{href:_,...Z&&!w&&{target:"_blank",rel:"noopener noreferrer"},...v}):a.createElement(S,{...v,onMouseEnter:()=>{N.current||null==_||(window.docusaurus.preload(_),N.current=!0)},innerRef:e=>{var t,n;L&&e&&w&&(t=e,n=()=>{null!=_&&window.docusaurus.prefetch(_)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))})),D.observe(t))},to:_||"",...e&&{isActive:d,activeClassName:m}})}},13919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>r})},44996:(e,t,n)=>{n.d(t,{C:()=>l,Z:()=>o});var a=n(52263),r=n(13919);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=l();return n(e,t)}},18617:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294);const r="iconExternalLink_3J9K",l=({width:e=13.5,height:t=13.5})=>a.createElement("svg",{width:e,height:t,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))},80095:(e,t,n)=>{n.d(t,{Z:()=>Ee});var a=n(67294),r=n(86010),l=n(5977),o=n(24973),c=n(41773);const s="skipToContent_1oUP";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const u=function(){const e=(0,a.useRef)(null),{action:t}=(0,l.k6)();return(0,c.SL)((({location:n})=>{e.current&&!n.hash&&"PUSH"===t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_3WsW",d="announcementBarClose_38nx",h="announcementBarContent_3EUC",f="announcementBarCloseable_3myR";const v=function(){const{isClosed:e,close:t}=(0,c.nT)(),{announcementBar:n}=(0,c.LU)();if(!n)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:u}=n;return!l||u&&e?null:a.createElement("div",{className:m,style:{backgroundColor:s,color:i},role:"banner"},a.createElement("div",{className:(0,r.Z)(h,{[f]:u}),dangerouslySetInnerHTML:{__html:l}}),u?a.createElement("button",{type:"button",className:(0,r.Z)(d,"clean-btn"),onClick:t,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};var b=n(87462),g=n(81036),E=n(72389);const p={toggle:"toggle_71bT"},k=({icon:e,style:t})=>a.createElement("span",{className:(0,r.Z)(p.toggle,p.dark),style:t},e),Z=({icon:e,style:t})=>a.createElement("span",{className:(0,r.Z)(p.toggle,p.light),style:t},e),w=(0,a.memo)((({className:e,icons:t,checked:n,disabled:l,onChange:o})=>{const[c,s]=(0,a.useState)(n),[i,u]=(0,a.useState)(!1),m=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",e,{"react-toggle--checked":c,"react-toggle--focus":i,"react-toggle--disabled":l})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>{var e;return null==(e=m.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},t.checked),a.createElement("div",{className:"react-toggle-track-x"},t.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:m,checked:c,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:o,onClick:()=>s(!c),onFocus:()=>u(!0),onBlur:()=>u(!1),onKeyDown:e=>{var t;"Enter"===e.key&&(null==(t=m.current)||t.click())}}))}));function y(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,c.LU)(),o=(0,E.Z)();return a.createElement(w,(0,b.Z)({disabled:!o,icons:{checked:a.createElement(k,{icon:t,style:n}),unchecked:a.createElement(Z,{icon:r,style:l})}},e))}var _=n(85350),C=n(77898);const N=e=>{const t=(0,l.TH)(),[n,r]=(0,a.useState)(e),o=(0,a.useRef)(!1),[s,i]=(0,a.useState)(0),u=(0,a.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return(0,C.Z)(((t,n)=>{const a=t.scrollY,l=null==n?void 0:n.scrollY;if(!e)return;if(a<s)return void r(!0);if(o.current)return o.current=!1,void r(!1);l&&0===a&&r(!0);const c=document.documentElement.scrollHeight-s,i=window.innerHeight;l&&a>=l?r(!1):a+i<c&&r(!0)}),[s,o]),(0,c.SL)((t=>{e&&!t.location.hash&&r(!0)})),(0,a.useEffect)((()=>{e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:u,isNavbarVisible:n}};const S=function(e=!0){(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])};var L=n(93783),D=n(80907),I=n(77819),T=n(55537);const B=({width:e=30,height:t=30,className:n,...r})=>a.createElement("svg",(0,b.Z)({className:n,width:e,height:t,viewBox:"0 0 30 30","aria-hidden":"true"},r),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"})),M="toggle_3Zt9",U="navbarHideable_2qcr",P="navbarHidden_3yey",A="right";function O(){return(0,c.LU)().navbar.items}function R(){const{colorMode:{disableSwitch:e}}=(0,c.LU)(),{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=(0,_.Z)();return{isDarkTheme:t,toggle:(0,a.useCallback)((e=>e.target.checked?r():n()),[n,r]),disabled:e}}function x({sidebarShown:e,toggleSidebar:t}){S(e);const n=O(),l=R(),s=function({sidebarShown:e,toggleSidebar:t}){var n;const r=null==(n=(0,c.g8)())?void 0:n({toggleSidebar:t}),l=(0,c.D9)(r),[o,s]=(0,a.useState)((()=>!1));(0,a.useEffect)((()=>{r&&!l&&s(!0)}),[r,l]);const i=!!r;return(0,a.useEffect)((()=>{i?e||s(!0):s(!1)}),[e,i]),{shown:o,hide:(0,a.useCallback)((()=>{s(!1)}),[]),content:r}}({sidebarShown:e,toggleSidebar:t});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(T.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!l.disabled&&e&&a.createElement(y,{checked:l.isDarkTheme,onChange:l.toggle})),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},n.map(((e,n)=>a.createElement(I.Z,(0,b.Z)({mobile:!0},e,{onClick:t,key:n})))))),a.createElement("div",{className:"navbar-sidebar__item menu"},n.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}const W=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.LU)(),n=function(){const e=(0,L.Z)(),t="mobile"===e,[n,r]=(0,a.useState)(!1),l=(0,a.useCallback)((()=>{r((e=>!e))}),[]);return(0,a.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:l,shown:n}}(),l=R(),o=(0,D.gA)(),{navbarRef:s,isNavbarVisible:i}=N(e),u=O(),m=u.some((e=>"search"===e.type)),{leftItems:d,rightItems:h}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??A))),rightItems:e.filter((e=>"right"===(e.position??A)))}}(u);return a.createElement("nav",{ref:s,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":n.shown,[U]:e,[P]:e&&!i})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},((null==u?void 0:u.length)>0||o)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:n.toggle,onKeyDown:n.toggle},a.createElement(B,null)),a.createElement(T.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),d.map(((e,t)=>a.createElement(I.Z,(0,b.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},h.map(((e,t)=>a.createElement(I.Z,(0,b.Z)({},e,{key:t})))),!l.disabled&&a.createElement(y,{className:M,checked:l.isDarkTheme,onChange:l.toggle}),!m&&a.createElement(g.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:n.toggle}),n.shouldRender&&a.createElement(x,{sidebarShown:n.shown,toggleSidebar:n.toggle}))};var V=n(36742),$=n(44996),H=n(13919);const j="footerLogoLink_MyFc";var z=n(98465),q=n(18617);function F({to:e,href:t,label:n,prependBaseUrlToHref:r,...l}){const o=(0,$.Z)(e),c=(0,$.Z)(t,{forcePrependBaseUrl:!0});return a.createElement(V.Z,(0,b.Z)({className:"footer__link-item"},t?{href:r?c:t}:{to:o},l),t&&!(0,H.Z)(t)?a.createElement("span",null,n,a.createElement(q.Z,null)):n)}const K=({sources:e,alt:t})=>a.createElement(z.Z,{className:"footer__logo",alt:t,sources:e});const G=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:n=[],logo:l={}}=e||{},o={light:(0,$.Z)(l.src),dark:(0,$.Z)(l.srcDark||l.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(F,e))))):null)))),(l||t)&&a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},l.href?a.createElement(V.Z,{href:l.href,className:j},a.createElement(K,{alt:l.alt,sources:o})):a.createElement(K,{alt:l.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var Y=n(10412);const Q=(0,c.WA)("theme"),X="light",J="dark",ee=e=>e===J?J:X,te=e=>{(0,c.WA)("theme").set(ee(e))},ne=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[r,l]=(0,a.useState)((e=>Y.Z.canUseDOM?ee(document.documentElement.getAttribute("data-theme")):ee(e))(e)),o=(0,a.useCallback)((()=>{l(X),te(X)}),[]),s=(0,a.useCallback)((()=>{l(J),te(J)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",ee(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=Q.get();null!==e&&l(ee(e))}catch(e){console.error(e)}}),[l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{l(e?J:X)}))}),[]),{isDarkTheme:r===J,setLightTheme:o,setDarkTheme:s}};var ae=n(82924);const re=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=ne();return a.createElement(ae.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},le="docusaurus.tab.",oe=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.WA)(`docusaurus.tab.${e}`).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(le)){const n=t.substring(le.length);e[n]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}};var ce=n(79443);const se=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=oe();return a.createElement(ce.Z.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function ie({children:e}){return a.createElement(re,null,a.createElement(c.pl,null,a.createElement(se,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,e)))))}var ue=n(99105),me=n(52263);function de({locale:e,version:t,tag:n}){const r=e;return a.createElement(ue.Z,null,r&&a.createElement("meta",{name:"docsearch:language",content:r}),t&&a.createElement("meta",{name:"docsearch:version",content:t}),n&&a.createElement("meta",{name:"docsearch:docusaurus_tag",content:n}))}var he=n(41217);function fe(){const{i18n:{defaultLocale:e,locales:t}}=(0,me.Z)(),n=(0,c.l5)();return a.createElement(ue.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function ve({permalink:e}){const{siteConfig:{url:t}}=(0,me.Z)(),n=function(){const{siteConfig:{url:e}}=(0,me.Z)(),{pathname:t}=(0,l.TH)();return e+(0,$.Z)(t)}(),r=e?`${t}${e}`:n;return a.createElement(ue.Z,null,a.createElement("meta",{property:"og:url",content:r}),a.createElement("link",{rel:"canonical",href:r}))}function be(e){const{siteConfig:{favicon:t},i18n:{currentLocale:n,localeConfigs:r}}=(0,me.Z)(),{metadatas:l,image:o}=(0,c.LU)(),{title:s,description:i,image:u,keywords:m,searchMetadatas:d}=e,h=(0,$.Z)(t),f=(0,c.pe)(s),v=n,g=r[n].direction;return a.createElement(a.Fragment,null,a.createElement(ue.Z,null,a.createElement("html",{lang:v,dir:g}),t&&a.createElement("link",{rel:"shortcut icon",href:h}),a.createElement("title",null,f),a.createElement("meta",{property:"og:title",content:f}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o&&a.createElement(he.Z,{image:o}),u&&a.createElement(he.Z,{image:u}),a.createElement(he.Z,{description:i,keywords:m}),a.createElement(ve,null),a.createElement(fe,null),a.createElement(de,(0,b.Z)({tag:c.HX,locale:n},d)),a.createElement(ue.Z,null,l.map(((e,t)=>a.createElement("meta",(0,b.Z)({key:`metadata_${t}`},e))))))}const ge=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const Ee=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return ge(),a.createElement(ie,null,a.createElement(be,e),a.createElement(u,null),a.createElement(v,null),a.createElement(W,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(G,null))}},55537:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),r=n(67294),l=n(36742),o=n(98465),c=n(44996),s=n(52263),i=n(41773);const u=e=>{const{siteConfig:{title:t}}=(0,s.Z)(),{navbar:{title:n,logo:u={src:""}}}=(0,i.LU)(),{imageClassName:m,titleClassName:d,...h}=e,f=(0,c.Z)(u.href||"/"),v={light:(0,c.Z)(u.src),dark:(0,c.Z)(u.srcDark||u.src)};return r.createElement(l.Z,(0,a.Z)({to:f},h,u.target&&{target:u.target}),u.src&&r.createElement(o.Z,{className:m,sources:v,alt:u.alt||n||t}),null!=n&&r.createElement("b",{className:d},n))}},5525:(e,t,n)=>{n.d(t,{O:()=>m,Z:()=>f});var a=n(87462),r=n(67294),l=n(86010),o=n(36742),c=n(44996),s=n(18617),i=n(13919),u=n(77819);function m({activeBasePath:e,activeBaseRegex:t,to:n,href:l,label:u,activeClassName:m="",prependBaseUrlToHref:d,...h}){var f;const v=(0,c.Z)(n),b=(0,c.Z)(e),g=(0,c.Z)(l,{forcePrependBaseUrl:!0}),E=u&&l&&!(0,i.Z)(l),p="dropdown__link--active"===m;return r.createElement(o.Z,(0,a.Z)({},l?{href:d?g:l}:{isNavLink:!0,activeClassName:null!=(f=h.className)&&f.includes(m)?"":m,to:v,...e||t?{isActive:(e,n)=>t?new RegExp(t).test(n.pathname):n.pathname.startsWith(b)}:null},h),E?r.createElement("span",null,u,r.createElement(s.Z,p&&{width:12,height:12})):u)}function d({className:e,isDropdownItem:t=!1,...n}){const o=r.createElement(m,(0,a.Z)({className:(0,l.Z)(t?"dropdown__link":"navbar__item navbar__link",e)},n));return t?r.createElement("li",null,o):o}function h({className:e,isDropdownItem:t,...n}){return r.createElement("li",{className:"menu__list-item"},r.createElement(m,(0,a.Z)({className:(0,l.Z)("menu__link",e)},n)))}const f=function({mobile:e=!1,position:t,...n}){const l=e?h:d;return r.createElement(l,(0,a.Z)({},n,{activeClassName:(0,u.E)(e)}))}},76400:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(5525),o=n(80907),c=n(86010),s=n(77819),i=n(41773),u=n(18780);function m({docId:e,label:t,docsPluginId:n,...m}){const{activeVersion:d,activeDoc:h}=(0,o.Iw)(n),{preferredVersion:f}=(0,i.J)(n),v=(0,o.yW)(n),b=function(e,t){const n=e.flatMap((e=>e.docs)),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${a}`)}return a}((0,u.uniq)([d,f,v].filter(Boolean)),e),g=(0,s.E)(m.mobile);return r.createElement(l.Z,(0,a.Z)({exact:!0},m,{className:(0,c.Z)(m.className,{[g]:(null==h?void 0:h.sidebar)&&h.sidebar===b.sidebar}),activeClassName:g,label:t??b.id,to:b.path}))}},59308:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(5525),o=n(23154),c=n(80907),s=n(41773),i=n(24973);const u=e=>e.docs.find((t=>t.id===e.mainDocId));function m({mobile:e,docsPluginId:t,dropdownActiveClassDisabled:n,dropdownItemsBefore:m,dropdownItemsAfter:d,...h}){const f=(0,c.Iw)(t),v=(0,c.gB)(t),b=(0,c.yW)(t),{preferredVersion:g,savePreferredVersionName:E}=(0,s.J)(t);const p=function(){const e=v.map((e=>{const t=(null==f?void 0:f.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==f?void 0:f.activeVersion),onClick:()=>{E(e.name)}}}));return[...m,...e,...d]}(),k=f.activeVersion??g??b,Z=e&&p?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):k.label,w=e&&p?void 0:u(k).path;return p.length<=1?r.createElement(l.Z,(0,a.Z)({},h,{mobile:e,label:Z,to:w,isActive:n?()=>!1:void 0})):r.createElement(o.Z,(0,a.Z)({},h,{mobile:e,label:Z,to:w,items:p,isActive:n?()=>!1:void 0}))}},47250:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87462),r=n(67294),l=n(5525),o=n(80907),c=n(41773);function s({label:e,to:t,docsPluginId:n,...s}){const i=(0,o.zu)(n),{preferredVersion:u}=(0,c.J)(n),m=(0,o.yW)(n),d=i??u??m,h=e??d.label,f=t??(e=>e.docs.find((t=>t.id===e.mainDocId)))(d).path;return r.createElement(l.Z,(0,a.Z)({},s,{label:h,to:f}))}},23154:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),l=n(86010),o=n(41773),c=n(5525),s=n(77819);function i(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function u({items:e,position:t,className:n,...o}){const i=(0,r.useRef)(null),u=(0,r.useRef)(null),[m,d]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{i.current&&!i.current.contains(e.target)&&d(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[i]),r.createElement("div",{ref:i,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===t,"dropdown--show":m})},r.createElement(c.O,(0,a.Z)({className:(0,l.Z)("navbar__link",n)},o,{onClick:o.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),d(!m))}}),o.children??o.label),r.createElement("ul",{ref:u,className:"dropdown__menu"},e.map(((t,n)=>r.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:t=>{if(n===e.length-1&&"Tab"===t.key){t.preventDefault(),d(!1);const e=i.current.nextElementSibling;e&&e.focus()}},activeClassName:"dropdown__link--active"},t,{key:n}))))))}function m({items:e,className:t,position:n,...u}){const m=(0,o.be)(),d=i(e,m),{collapsed:h,toggleCollapsed:f,setCollapsed:v}=(0,o.uR)({initialState:()=>!d});return(0,r.useEffect)((()=>{d&&v(!d)}),[m,d]),r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":h})},r.createElement(c.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",t)},u,{onClick:e=>{e.preventDefault(),f()}}),u.children??u.label),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},e.map(((e,t)=>r.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:u.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const d=function({mobile:e=!1,...t}){const n=e?m:u;return r.createElement(n,t)}},77819:(e,t,n)=>{n.d(t,{Z:()=>b,E:()=>v});var a=n(67294),r=n(5525),l=n(23154),o=n(87462);const c=({width:e=20,height:t=20,...n})=>a.createElement("svg",(0,o.Z)({viewBox:"0 0 20 20",width:e,height:t,"aria-hidden":"true"},n),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}));var s=n(52263),i=n(41773);const u="iconLanguage_3vod";function m({mobile:e,dropdownItemsBefore:t,dropdownItemsAfter:n,...r}){const{i18n:{currentLocale:m,locales:d,localeConfigs:h}}=(0,s.Z)(),f=(0,i.l5)();function v(e){return h[e].label}const b=[...t,...d.map((e=>{const t=`pathname://${f.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:v(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===m?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...n],g=e?"Languages":v(m);return a.createElement(l.Z,(0,o.Z)({},r,{href:"#",mobile:e,label:a.createElement("span",null,a.createElement(c,{className:u}),a.createElement("span",null,g)),items:b}))}var d=n(81036);function h({mobile:e}){return e?null:a.createElement(d.Z,null)}const f={default:()=>r.Z,localeDropdown:()=>m,search:()=>h,dropdown:()=>l.Z,docsVersion:()=>n(47250).Z,docsVersionDropdown:()=>n(59308).Z,doc:()=>n(76400).Z};const v=e=>e?"menu__link--active":"navbar__link--active";function b({type:e,...t}){const n=(e=>{const t=f[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()})(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(e,void 0!==t.items));return a.createElement(n,t)}},41217:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(99105),l=n(41773),o=n(44996);function c({title:e,description:t,keywords:n,image:c,children:s}){const i=(0,l.pe)(e),{withBaseUrl:u}=(0,o.C)(),m=c?u(c,{absolute:!0}):void 0;return a.createElement(r.Z,null,e&&a.createElement("title",null,i),e&&a.createElement("meta",{property:"og:title",content:i}),t&&a.createElement("meta",{name:"description",content:t}),t&&a.createElement("meta",{property:"og:description",content:t}),n&&a.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),m&&a.createElement("meta",{property:"og:image",content:m}),m&&a.createElement("meta",{name:"twitter:image",content:m}),s)}},98465:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),c=n(85350);const s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},i=e=>{const t=(0,o.Z)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:u,alt:m="",...d}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.Z)({key:e,src:i[e],alt:m,className:(0,l.Z)(s.themedImage,s[`themedImage--${e}`],u)},d)))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)(void 0)},77898:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(10412);const l=()=>r.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null,o=(e,t=[])=>{const n=(0,a.useRef)(l()),r=()=>{const t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((()=>{const e={passive:!0};return r(),window.addEventListener("scroll",r,e),()=>window.removeEventListener("scroll",r,e)}),t)}},93783:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(10412);const l="desktop",o="mobile",c="ssr";function s(){return r.Z.canUseDOM?window.innerWidth>996?l:o:c}const i=function(){const[e,t]=(0,a.useState)((()=>s()));return(0,a.useEffect)((()=>{function e(){t(s())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),e}},81036:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(87462),r=n(67294),l=n(73935),o=n(52263),c=n(5977),s=n(44996),i=n(36742),u=n(99105),m=n(6397);function d(){return r.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var h=n(20830);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b="Ctrl";var g=r.forwardRef((function(e,t){var n=e.translations,a=void 0===n?{}:n,l=v(e,["translations"]),o=a.buttonText,c=void 0===o?"Search":o,s=a.buttonAriaLabel,i=void 0===s?"Search":s,u=(0,r.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":b:null}),[]);return r.createElement("button",f({type:"button",className:"DocSearch DocSearch-Button","aria-label":i},l,{ref:t}),r.createElement("span",{className:"DocSearch-Button-Container"},r.createElement(h.W,null),r.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),r.createElement("span",{className:"DocSearch-Button-Keys"},null!==u&&r.createElement(r.Fragment,null,r.createElement("span",{className:"DocSearch-Button-Key"},u===b?r.createElement(d,null):u),r.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),E=n(80907),p=n(41773);function k(){const{locale:e,tags:t}=function(){const{i18n:e}=(0,o.Z)(),t=(0,E._r)(),n=(0,E.WS)(),a=(0,p.Oh)(),r=[p.HX,...Object.keys(t).map((function(e){var r;const l=(null==n||null==(r=n.activePlugin)?void 0:r.pluginId)===e?n.activeVersion:void 0,o=a[e],c=t[e].versions.find((e=>e.isLast)),s=l??o??c;return(0,p.os)(e,s.name)}))];return{locale:e.currentLocale,tags:r}}();return[`language:${e}`,t.map((e=>`docusaurus_tag:${e}`))]}var Z=n(24973);const w="searchBox_1Doo";let y=null;function _({hit:e,children:t}){return r.createElement(i.Z,{to:e.url},t)}function C({state:e,onClose:t}){const{generateSearchPageLink:n}=(0,m.Z)();return r.createElement(i.Z,{to:n(e.query),onClick:t},"See all ",e.context.nbHits," results")}function N({contextualSearch:e,...t}){var i;const{siteMetadata:m}=(0,o.Z)(),d=k(),h=(null==(i=t.searchParameters)?void 0:i.facetFilters)??[],f=e?[...d,...h]:h,v={...t.searchParameters,facetFilters:f},{withBaseUrl:b}=(0,s.C)(),E=(0,c.k6)(),p=(0,r.useRef)(null),N=(0,r.useRef)(null),[S,L]=(0,r.useState)(!1),[D,I]=(0,r.useState)(null),T=(0,r.useCallback)((()=>y?Promise.resolve():Promise.all([n.e(44300).then(n.bind(n,44300)),Promise.all([n.e(40532),n.e(46945)]).then(n.bind(n,46945)),Promise.all([n.e(40532),n.e(95256)]).then(n.bind(n,95256))]).then((([{DocSearchModal:e}])=>{y=e}))),[]),B=(0,r.useCallback)((()=>{T().then((()=>{p.current=document.createElement("div"),document.body.insertBefore(p.current,document.body.firstChild),L(!0)}))}),[T,L]),M=(0,r.useCallback)((()=>{L(!1),p.current.remove()}),[L]),U=(0,r.useCallback)((e=>{T().then((()=>{L(!0),I(e.key)}))}),[T,L,I]),P=(0,r.useRef)({navigate({itemUrl:e}){E.push(e)}}).current,A=(0,r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:b(`${t.pathname}${t.hash}`)}})))).current,O=(0,r.useMemo)((()=>e=>r.createElement(C,(0,a.Z)({},e,{onClose:M}))),[M]),R=(0,r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",m.docusaurusVersion),e)),[m.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,l=e.onInput,o=e.searchButtonRef;r.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&l&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&l(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,l,o])}({isOpen:S,onOpen:B,onClose:M,onInput:U,searchButtonRef:N});const x=(0,Z.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(u.Z,null,r.createElement("link",{rel:"preconnect",href:`https://${t.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),r.createElement("div",{className:w},r.createElement(g,{onTouchStart:T,onFocus:T,onMouseOver:T,onClick:B,ref:N,translations:{buttonText:x,buttonAriaLabel:x}})),S&&(0,l.createPortal)(r.createElement(y,(0,a.Z)({onClose:M,initialScrollY:window.scrollY,initialQuery:D,navigator:P,transformItems:A,hitComponent:_,resultsFooterComponent:O,transformSearchClient:R},t,{searchParameters:v})),p.current))}const S=function(){const{siteConfig:e}=(0,o.Z)();return r.createElement(N,e.themeConfig.algolia)}},6397:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(5977),r=n(10412),l=n(52263);const o=function(){const e=(0,a.k6)(),t=(0,a.TH)(),{siteConfig:{baseUrl:n}={}}=(0,l.Z)();return{searchValue:r.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:a}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[r]=e.split(/[#?]/),l="/"===r||r===a?r:(o=r,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(r,l)}},18780:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(l).default}})},29964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);