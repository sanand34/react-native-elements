"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[66553,4701,19960,45574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,v=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23612:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(67294),r=n(86010),o=n(35281),i=n(95999);const l="admonition_LlT9",c="admonitionHeading_tbUL",s="admonitionIcon_kALy",u="admonitionContent_S0QG";var d={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function p(e){var t,n=function(e){var t=a.Children.toArray(e),n=t.find((function(e){var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return{mdxAdmonitionTitle:n,rest:r}}(e.children),r=n.mdxAdmonitionTitle,o=n.rest;return Object.assign({},e,{title:null!=(t=e.title)?t:r,children:o})}function v(e){var t=p(e),n=t.children,i=t.type,v=t.title,f=t.icon,h=function(e){var t,n=null!=(t=m[e])?t:e;return d[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),d.info)}(i),b=null!=v?v:h.label,g=h.iconComponent,y=null!=f?f:a.createElement(g,null);return a.createElement("div",{className:(0,r.Z)(o.k.common.admonition,o.k.common.admonitionType(e.type),"alert","alert--"+h.infimaClassName,l)},a.createElement("div",{className:c},a.createElement("span",{className:s},y),b),a.createElement("div",{className:u},n))}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),c=n(91980),s=n(67392),u=n(50012);function d(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,c._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,s=e.groupId,d=m(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:d})})),h=f[0],b=f[1],g=v({queryString:c,groupId:s}),y=g[0],k=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,u.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),E=w[0],T=w[1],x=function(){var e=null!=y?y:E;return p({value:e,tabValues:d})?e:null}();return(0,r.useEffect)((function(){x&&b(x)}),[x]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),T(e)}),[k,T,d]),tabValues:d}}var h=n(72389);const b="tabList__CuJ",g="tabItem_LNqP";function y(e){var t=e.className,n=e.block,l=e.selectedValue,c=e.selectValue,s=e.tabValues,u=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==l&&(d(t),c(a))},p=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;n=null!=(o=u[i])?o:u[u.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return u.push(e)},onKeyDown:p,onClick:m},i,{className:(0,o.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function E(e){var t=(0,h.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},49537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=(n(44996),n(39960)),l=(n(74866),n(85162),n(97735)),c=(n(23612),["components"]),s={id:"overview",title:"Overview",slug:"/",hide_table_of_contents:!0},u=void 0,d={unversionedId:"overview",id:"version-4.0.0-rc.7/overview",title:"Overview",description:"The aim of React Native Elements is to provide an all-in-one UI kit for",source:"@site/versioned_docs/version-4.0.0-rc.7/index.mdx",sourceDirName:".",slug:"/",permalink:"/docs/4.0.0-rc.7/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/index.mdx",tags:[],version:"4.0.0-rc.7",frontMatter:{id:"overview",title:"Overview",slug:"/",hide_table_of_contents:!0},sidebar:"docs",next:{title:"Installation",permalink:"/docs/4.0.0-rc.7/installation"}},m={},p=[{value:"Installation",id:"installation",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Using themed components",id:"using-themed-components",level:2}],v={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{className:"admonition-content"},"The aim of React Native Elements is to provide an all-in-one UI kit for creating apps in react native. There are many great ui components made by developers all around open source. React Native Elements takes the hassle of assembling these packages together by giving you a ready made kit with consistent api and look and feel.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("div",{class:"container",style:{padding:0}},(0,o.kt)("div",{class:"row is-multiline"},(0,o.kt)("div",{class:"col col--6"},(0,o.kt)(i.Z,{class:"card ",to:"docs/installation#using-expo",style:{height:"100%"},mdxType:"Link"},(0,o.kt)("div",{class:"card__body position-relative"},(0,o.kt)("h4",null,"Expo CLI",(0,o.kt)(l.ipR,{class:"card__icon",mdxType:"SiExpo"})),(0,o.kt)("p",null,"Guide to install with expo-cli")))),(0,o.kt)("div",{class:"col col--6"},(0,o.kt)(i.Z,{class:"card ",to:"docs/installation",style:{height:"100%"},mdxType:"Link"},(0,o.kt)("div",{class:"card__body  position-relative"},(0,o.kt)("h4",null,"React Native CLI ",(0,o.kt)(l.pNp,{class:"card__icon",mdxType:"SiReact"})),(0,o.kt)("p",null,"Guide to install with react-native cli")))),(0,o.kt)("div",{class:"col col--6"},(0,o.kt)(i.Z,{class:"card ",to:"docs/installation#using-on-web",style:{height:"100%"},mdxType:"Link"},(0,o.kt)("div",{class:"card__body position-relative"},(0,o.kt)("h4",null,"React JS ",(0,o.kt)(l.pNp,{class:"card__icon",mdxType:"SiReact"})),(0,o.kt)("p",null,"Guide to install with ",(0,o.kt)("code",null,"create-react-app"))))),(0,o.kt)("div",{class:"col col--6"},(0,o.kt)(i.Z,{class:"card ",to:"#",style:{height:"100%"},mdxType:"Link"},(0,o.kt)("div",{class:"card__body position-relative"},(0,o.kt)("h4",null,"Next JS (coming soon) ",(0,o.kt)(l.Xou,{class:"card__icon",mdxType:"SiNextdotjs"})),(0,o.kt)("p",null,"Guide to install with create-next-app")))))),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("p",null,"Here's a quick example to get you started, ",(0,o.kt)("strong",{parentName:"p"},"it's literally all you need:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Button } from '@rneui/base';\n\nconst App = () => {\n  return <Button title=\"Hello World\" />;\n};\n")),(0,o.kt)("h2",{id:"using-themed-components"},"Using themed components"),(0,o.kt)("p",null,"The components in this library have a single theme running through them. From\none central location, we can update the colours used in all components. While\nthis was great for the developers of the library, the actual users also needed a\nway to use this feature."),(0,o.kt)("p",null,"But why stop at colours? Why not allow the props of every component to be\ndefined in one central place? And so the idea behind theming with React Native\nElements was born!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Button, ThemeProvider } from '@rneui/themed';\n\nconst MyApp = () => {\n  return (\n    <ThemeProvider>\n      <Button title=\"Hey!\" />\n    </ThemeProvider>\n  );\n};\n")),(0,o.kt)("p",null,"To customize the theme, or use it within your own components, be sure to check\nthe docs on ",(0,o.kt)("a",{parentName:"p",href:"https://reactnativeelements.com/docs/customizing"},"Customization"),"."))}f.isMDXComponent=!0}}]);