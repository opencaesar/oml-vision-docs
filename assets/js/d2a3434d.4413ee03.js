"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[4354],{3417:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(5893),t=i(1151);const r={sidebar_position:1},d="Pages",o={id:"api-documentation/layouts/pages",title:"Pages",description:"Create a src/vision/layouts/pages.json file (case-sensitive)",source:"@site/versioned_docs/version-0.1.0/api-documentation/layouts/pages.md",sourceDirName:"api-documentation/layouts",slug:"/api-documentation/layouts/pages",permalink:"/oml-vision-docs/docs/0.1.0/api-documentation/layouts/pages",draft:!1,unlisted:!1,editUrl:"https://github.com/opencaesar/oml-vision-docs/tree/master/versioned_docs/version-0.1.0/api-documentation/layouts/pages.md",tags:[],version:"0.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Layouts",permalink:"/oml-vision-docs/docs/0.1.0/category/layouts"},next:{title:"Tables",permalink:"/oml-vision-docs/docs/0.1.0/api-documentation/layouts/tables"}},l={},c=[{value:"Home Page",id:"home-page",level:2},{value:"title",id:"title",level:3},{value:"path",id:"path",level:3},{value:"treeIcon",id:"treeicon",level:3},{value:"Child Pages",id:"child-pages",level:2},{value:"title",id:"title-1",level:3},{value:"treeIcon",id:"treeicon-1",level:3},{value:"iconUrl",id:"iconurl",level:3},{value:"children",id:"children",level:3},{value:"title",id:"title-2",level:4},{value:"path",id:"path-1",level:4},{value:"treeIcon",id:"treeicon-2",level:4},{value:"isTree",id:"istree",level:4},{value:"isDiagram",id:"isdiagram",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"pages",children:"Pages"}),"\n",(0,s.jsx)(n.admonition,{title:"pages.json",type:"info",children:(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"src/vision/layouts/pages.json"})," file (case-sensitive)"]})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"src/vision/layouts/pages.json"})," file is responsible for:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Defining what OML Vision can render","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Home Page","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Titles"}),"\n",(0,s.jsx)(n.li,{children:"Icons"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Sidebar","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Titles"}),"\n",(0,s.jsx)(n.li,{children:"Icons"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Child Pages","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Titles"}),"\n",(0,s.jsx)(n.li,{children:"Table, Tree, or Diagram"}),"\n",(0,s.jsx)(n.li,{children:"Icons"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Defining the path to the content that OML Vision renders"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"It is formatted as a JSON data structure."}),"\n",(0,s.jsxs)(n.p,{children:["An example of what this looks like is seen below with the source code found ",(0,s.jsx)(n.a,{href:"https://github.com/pogi7/kepler16b-example/blob/main/src/vision/layouts/pages.json",children:"here"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  { "title": "Home", "path": "/", "treeIcon": "home" },\n  {\n    "title": "Kepler16b",\n    "treeIcon": "server",\n    "iconUrl": "https://nasa-jpl.github.io/stellar/icons/satellite.svg",\n    "children": [\n      { \n        "title": "Objectives",\n        "treeIcon": "window",\n        "path": "objectives" \n      },\n      {\n        "title": "Missions",\n        "treeIcon": "graph-scatter",\n        "path": "missions",\n        "isDiagram": true\n      },\n      {\n        "title": "Components",\n        "treeIcon": "list-tree",\n        "path": "components",\n        "isTree": true\n      },\n      {\n        "title": "Connections",\n        "treeIcon": "window",\n        "path": "connections"\n      },\n      {\n        "title": "Requirements",\n        "treeIcon": "list-tree",\n        "path": "requirements",\n        "isTree": true\n      }\n    ]\n  }\n]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"home-page",children:"Home Page"}),"\n",(0,s.jsx)(n.p,{children:"The home page acts as an entry point for users to navigate through the pages that OML Vision renders."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Home Page",src:i(9676).Z+"",width:"3680",height:"2252"})}),"\n",(0,s.jsx)(n.h3,{id:"title",children:"title"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"title: string\n"})})}),"\n",(0,s.jsx)(n.p,{children:'This string defines the title of the home page.  A good name for the home page is "Home" or "Frontpage"'}),"\n",(0,s.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,s.jsxs)(n.p,{children:["The name of the ",(0,s.jsx)(n.code,{children:"title"})," is rendered in the sidebar for the OML Vision extension shown in the red boxes."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Title Home Page",src:i(4419).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,s.jsx)(n.h3,{id:"path",children:"path"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"path: string\n"})})}),"\n",(0,s.jsx)(n.p,{children:"This string defines the path of the page."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["For the ",(0,s.jsx)(n.code,{children:"Home Page"})," the path must be ",(0,s.jsx)(n.code,{children:"/"})]})}),"\n",(0,s.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,s.jsxs)(n.p,{children:["The name of the ",(0,s.jsx)(n.code,{children:"path"})," is rendered in the sidebar when you hover and hold for 2 seconds over the ",(0,s.jsx)(n.code,{children:"Home Page"})," in the OML Vision extension shown in the red boxes."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Path Home Page",src:i(2118).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,s.jsx)(n.h3,{id:"treeicon",children:"treeIcon"}),"\n",(0,s.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"treeIcon: string\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This string defines the icon to be rendered in the sidebar next to the ",(0,s.jsx)(n.code,{children:"Title"})," of the page."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["A full list of available icons can be seen ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/api/references/icons-in-labels#icon-listing",children:"here"}),".  Use the ",(0,s.jsx)(n.code,{children:"default codicon ID"})," as the value of the ",(0,s.jsx)(n.code,{children:"treeIcon"})]})}),"\n",(0,s.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Home Page"})," icon of the ",(0,s.jsx)(n.code,{children:"treeIcon"})," is rendered in the sidebar for the OML Vision extension shown in the red boxes."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Path Home Page",src:i(8427).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,s.jsx)(n.h2,{id:"child-pages",children:"Child Pages"}),"\n",(0,s.jsxs)(n.p,{children:["Child pages are pages that are grouped with other similar pages.  The paths to these pages are rendered in the sidebar and in the ",(0,s.jsx)(n.code,{children:"Home Page"})," shown in the red boxes."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"OML Vision supports more than 1 child page."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Child Page",src:i(8200).Z+"",width:"3680",height:"2252"})}),"\n",(0,s.jsx)(n.h3,{id:"title-1",children:"title"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"title: string\n"})})}),"\n",(0,s.jsx)(n.p,{children:"This string defines the title of the child page."}),"\n",(0,s.jsx)(n.admonition,{title:"USER INTERFACE",type:"tip",children:(0,s.jsxs)(n.p,{children:["The name of the ",(0,s.jsx)(n.code,{children:"title"})," is rendered in the sidebar and in the ",(0,s.jsx)(n.code,{children:"Home Page"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"treeicon-1",children:"treeIcon"}),"\n",(0,s.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"treeIcon: string\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This string defines the icon to be rendered in the sidebar next to the ",(0,s.jsx)(n.code,{children:"Title"})," of the page."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["A full list of available icons can be seen ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/api/references/icons-in-labels#icon-listing",children:"here"}),".  Use the ",(0,s.jsx)(n.code,{children:"default codicon ID"})," as the value of the ",(0,s.jsx)(n.code,{children:"treeIcon"})]})}),"\n",(0,s.jsx)(n.admonition,{title:"USER INTERFACE",type:"tip",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Child Page"})," icon of the ",(0,s.jsx)(n.code,{children:"treeIcon"})," is rendered in the sidebar for the OML Vision extension."]})}),"\n",(0,s.jsx)(n.h3,{id:"iconurl",children:"iconUrl"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"iconUrl: string\n"})})}),"\n",(0,s.jsx)(n.p,{children:"This string defines the path of the icon that is rendered in the home page."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Supported image file formats are .svg, .png, or .jpg"})}),"\n",(0,s.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Child Page"})," icon of the ",(0,s.jsx)(n.code,{children:"iconUrl"})," is rendered in the ",(0,s.jsx)(n.code,{children:"Home Page"})," in the OML Vision extension shown in the red boxes."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Icon URL Child Page",src:i(2024).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,s.jsx)(n.h3,{id:"children",children:"children"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"children: {\n    title: string;\n    path: string;\n    treeIcon: string;\n    isTree: boolean;\n    isDiagram: boolean;\n  }[];\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This ",(0,s.jsx)(n.code,{children:"children"})," array of objects defines the ",(0,s.jsx)(n.code,{children:"title"}),", ",(0,s.jsx)(n.code,{children:"path"}),", and ",(0,s.jsx)(n.code,{children:"treeIcon"})," of the ",(0,s.jsx)(n.code,{children:"Child Page"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["You can more than one ",(0,s.jsx)(n.code,{children:"Child Page"})," in the ",(0,s.jsx)(n.code,{children:"children"})," array."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"By default all child pages are rendered as tables unless specified with the isTree or isDiagram booleans."})}),"\n",(0,s.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Child Pages"})," are rendered in the sidebar and in the ",(0,s.jsx)(n.code,{children:"Home Page"})," of the OML Vision extension shown in the red boxes."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Children Pages",src:i(8116).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,s.jsx)(n.h4,{id:"title-2",children:"title"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"title: string\n"})})}),"\n",(0,s.jsx)(n.p,{children:"This string defines the title of the child page."}),"\n",(0,s.jsx)(n.admonition,{title:"USER INTERFACE",type:"tip",children:(0,s.jsxs)(n.p,{children:["The name of the ",(0,s.jsx)(n.code,{children:"title"})," of the ",(0,s.jsx)(n.code,{children:"Child Page"})," is rendered in the sidebar and in the ",(0,s.jsx)(n.code,{children:"Home Page"})," of the OML Vision extension."]})}),"\n",(0,s.jsx)(n.h4,{id:"path-1",children:"path"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"path: string\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This string defines the path of the ",(0,s.jsx)(n.code,{children:"Child Page"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Remember this string as it will be needed for the layouts of the tables, trees, and diagrams"})}),"\n",(0,s.jsx)(n.admonition,{title:"USER INTERFACE",type:"tip",children:(0,s.jsxs)(n.p,{children:["The name of the ",(0,s.jsx)(n.code,{children:"path"})," is rendered in the sidebar when you hover and hold for 2 seconds over the ",(0,s.jsx)(n.code,{children:"Child Page"})," in the OML Vision extension."]})}),"\n",(0,s.jsx)(n.h4,{id:"treeicon-2",children:"treeIcon"}),"\n",(0,s.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"treeIcon: string\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This string defines the icon to be rendered in the sidebar next to the ",(0,s.jsx)(n.code,{children:"Title"})," of the page."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["A full list of available icons can be seen ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/api/references/icons-in-labels#icon-listing",children:"here"}),".  Use the ",(0,s.jsx)(n.code,{children:"default codicon ID"})," as the value of the ",(0,s.jsx)(n.code,{children:"treeIcon"})]})}),"\n",(0,s.jsx)(n.admonition,{title:"USER INTERFACE",type:"tip",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Child Page"})," icon of the ",(0,s.jsx)(n.code,{children:"treeIcon"})," is rendered in the sidebar for the OML Vision extension."]})}),"\n",(0,s.jsx)(n.h4,{id:"istree",children:"isTree"}),"\n",(0,s.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"isTree: boolean\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This bool specifies whether or not the ",(0,s.jsx)(n.code,{children:"Child Page"})," will be a tree.  Set ",(0,s.jsx)(n.code,{children:"isTree"})," to ",(0,s.jsx)(n.code,{children:"true"})," to turn the ",(0,s.jsx)(n.code,{children:"Child Page"})," into a tree."]}),"\n",(0,s.jsx)(n.h4,{id:"isdiagram",children:"isDiagram"}),"\n",(0,s.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"isDiagram: boolean\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This bool specifies whether or not the ",(0,s.jsx)(n.code,{children:"Child Page"})," will be a diagram.  Set ",(0,s.jsx)(n.code,{children:"isDiagram"})," to ",(0,s.jsx)(n.code,{children:"true"})," to turn the ",(0,s.jsx)(n.code,{children:"Child Page"})," into a diagram."]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8200:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/childPage-b0eefc3ba8754e79a2d45ae27d1da925.png"},8116:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/childrenPages-6845941fa407816b67303b0d3001d557.png"},9676:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/homePage-0a92501ab6a4e75d2676ca2efafeeac7.png"},2024:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/iconUrlChildPage-758702ff18d55234e20bb6aacdacff6c.png"},2118:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/pathHomePage-b4ddf59e6ce537c4d52af3b1933479e5.png"},4419:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/titleHomePage-14c24d51c735db2b9f1969d3db9c996d.png"},8427:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/treeIconHomePage-348f964f69e08422602fb69d22ff0f1f.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>d});var s=i(7294);const t={},r=s.createContext(t);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);