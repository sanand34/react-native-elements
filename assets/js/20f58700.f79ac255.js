"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[6438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),o=n(86010),i=n(72389),l=n(67392),u=n(7094),s=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,f=e.values,v=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==w&&!y.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var O=(0,u.U)(),I=O.tabGroupChoices,k=O.setTabGroupChoices,T=(0,a.useState)(w),E=T[0],x=T[1],_=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var N=I[v];null!=N&&N!==E&&y.some((function(e){return e.value===N}))&&x(N)}var P=function(e){var t=e.currentTarget,n=_.indexOf(t),r=y[n].value;r!==E&&(j(t),x(r),null!=v&&k(v,String(r)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=_.indexOf(e.currentTarget)+1;n=null!=(r=_[a])?r:_[0];break;case"ArrowLeft":var o,i=_.indexOf(e.currentTarget)-1;n=null!=(o=_[i])?o:_[_.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return _.push(e)},onKeyDown:C,onFocus:P,onClick:P},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},29625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=(n(65488),n(85162),n(32408),["components"]),l={id:"listitem_input",title:"ListItem.Input"},u=void 0,s={unversionedId:"components/listitem_input",id:"version-4.0.0-rc.2/components/listitem_input",title:"ListItem.Input",description:"This allows adding an Text Input within the ListItem.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/ListItem.Input.mdx",sourceDirName:"components",slug:"/components/listitem_input",permalink:"/docs/4.0.0-rc.2/components/listitem_input",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/ListItem.Input.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"listitem_input",title:"ListItem.Input"},sidebar:"docs",previous:{title:"ListItem.Content",permalink:"/docs/4.0.0-rc.2/components/listitem_content"},next:{title:"ListItem.Subtitle",permalink:"/docs/4.0.0-rc.2/components/listitem_subtitle"}},c={},p=[{value:"Props",id:"props",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This allows adding an Text Input within the ListItem.\nThis, Receives all ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0.0-rc.2/components/input#props"},"Input")," props."),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"input#props"},"Input")," props.")))}d.isMDXComponent=!0}}]);