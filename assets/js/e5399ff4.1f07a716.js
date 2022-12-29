(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[14508],{70202:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(67294),r=a(13925),i=a(54236),l=a(40318),o=a(62290);const s=function(){var e=(0,l.Z)({componentName:"Tab",props:{children:{value:' \n          <Tab.Item title="Recent" />\n          <Tab.Item title="favourite" />\n          <Tab.Item title="cart" />\n         ',type:o.n.ReactNode},value:{type:o.n.Number,value:0},onChange:{type:o.n.Function,value:'() => console.log("onChange()")'},disableIndicator:{type:o.n.Boolean,value:!1},indicatorStyle:{type:o.n.Object,value:"{}"},variant:{type:o.n.Enum,options:{primary:"primary",default:"default"},value:"default"}},scope:{Tab:r.Tab},imports:{"@rneui/base":{named:["Tab"]}}});return n.createElement(n.Fragment,null,n.createElement(i.Z,{params:e}))}},37047:(e,t,a)=>{"use strict";a.d(t,{w:()=>s});var n=a(67294),r=a(35742),i=a(14330),l=a(98576),o=a(61720),s=function(){return n.createElement(r.Z,null,n.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+i.Z+") format('truetype');\n          }\n        "))}},54236:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(87462),r=a(67294),i=a(91262),l=a(18421),o=a(77356),s=a(41652),d=a(24309),m=a(16042),c=a(20346),p=a(30650);const u=function(e){var t=e.params,a=e.containerStyle,u=void 0===a?{}:a;return r.createElement(i.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(c.X9.Provider,null,r.createElement(c.PK,{initialMetrics:p.o},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},r.createElement(l.Z,(0,n.Z)({},t.compilerProps,{minHeight:62,placeholder:o.Z}))),r.createElement(s.Z,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(d.Z,t.knobProps),r.createElement(s.Z,t.errorProps),r.createElement(m.E,t.actions)))}))}},60378:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>A,frontMatter:()=>p,metadata:()=>b,toc:()=>g});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=a(37047),o=(a(65488),a(85162),["components"]),s={toc:[]};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"snack-player","data-snack-name":"RNE Tab","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tab%2C%20Text%2C%20TabView%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0Aconst%20%5Bindex%2C%20setIndex%5D%20%3D%20React.useState(0)%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CTab%0A%20%20%20%20%20%20value%3D%7Bindex%7D%0A%20%20%20%20%20%20onChange%3D%7B(e)%20%3D%3E%20setIndex(e)%7D%0A%20%20%20%20%20%20indicatorStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20height%3A%203%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20variant%3D%22primary%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20title%3D%22Recent%22%0A%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'timer'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20title%3D%22favorite%22%0A%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'heart'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20title%3D%22cart%22%0A%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'cart'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FTab%3E%0A%0A%20%20%20%20%3CTabView%20value%3D%7Bindex%7D%20onChange%3D%7BsetIndex%7D%20animationType%3D%22spring%22%3E%0A%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'red'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20h1%3ERecent%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'blue'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20h1%3EFavorite%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'green'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20h1%3ECart%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%3C%2FTabView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0;var m=a(70202),c=["components"],p={id:"tab",title:"Tab"},u=void 0,b={unversionedId:"components/tab",id:"version-4.0.0-rc.6/components/tab",title:"Tab",description:"Tabs organize content across different screens, data sets, and other interactions.",source:"@site/versioned_docs/version-4.0.0-rc.6/components/Tab.mdx",sourceDirName:"components",slug:"/components/tab",permalink:"/docs/4.0.0-rc.6/components/tab",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/components/Tab.mdx",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"tab",title:"Tab"},sidebar:"docs",previous:{title:"Switch",permalink:"/docs/4.0.0-rc.6/components/switch"},next:{title:"Tab.Item",permalink:"/docs/4.0.0-rc.6/components/tab_item"}},k={},g=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Tabs",id:"basic-tabs",level:3},{value:"Active Tab Items",id:"active-tab-items",level:3},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],v={toc:g};function A(e){var t=e.components,a=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.w,{mdxType:"IconsStyle"}),(0,i.kt)("p",null,"Tabs organize content across different screens, data sets, and other interactions."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This component is not for (complex) navigation. Use ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org"},"React Navigation")," for that.")),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Tab } from "@rneui/themed";\n')),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"basic-tabs"},"Basic Tabs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Tab value={0} variant="primary">\n  <Tab.Item>Tab</Tab.Item>\n  <Tab.Item>Tab</Tab.Item>\n</Tab>\n')),(0,i.kt)("h3",{id:"active-tab-items"},"Active Tab Items"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Tab value={0} variant="primary" scrollable>\n  <Tab.Item\n    containerStyle={(active) => ({\n      backgroundColor: active ? "red" : undefined,\n    })}\n  >\n    Tab\n  </Tab.Item>\n  <Tab.Item\n    buttonStyle={(active) => ({\n      backgroundColor: active ? "red" : undefined,\n    })}\n  >\n    Tab\n  </Tab.Item>\n</Tab>\n')),(0,i.kt)(d,{mdxType:"Usage"}),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Includes all ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,i.kt)("div",{class:"table-responsive"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,i.kt)("td",{parentName:"tr",align:null},"View Style"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Style for Tab container")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"disableIndicator")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Disable the indicator below.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"indicatorStyle")),(0,i.kt)("td",{parentName:"tr",align:null},"View Style"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Additional styling for tab indicator.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"onChange")),(0,i.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Function")),(0,i.kt)("td",{parentName:"tr",align:null},"On Index Change Callback.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scrollable")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Makes Tab Scrolling")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Child position index value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"variant")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"primary")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"default")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Define the background Variant."))))),(0,i.kt)("h2",{id:"playground"},"Playground"),(0,i.kt)(m.Z,{mdxType:"Play"}))}A.isMDXComponent=!0},61720:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14330:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},98576:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"},33770:()=>{},72950:()=>{},54882:()=>{}}]);