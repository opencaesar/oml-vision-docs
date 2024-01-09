"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[2235],{9461:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=s(5893),t=s(1151);const r={sidebar_position:3},a="Trees",o={id:"api-documentation/layouts/trees",title:"Trees",description:"Trees are created using React Arborist.",source:"@site/docs/api-documentation/layouts/trees.md",sourceDirName:"api-documentation/layouts",slug:"/api-documentation/layouts/trees",permalink:"/oml-vision-docs/docs/next/api-documentation/layouts/trees",draft:!1,unlisted:!1,editUrl:"https://github.com/opencaesar/oml-vision-docs/tree/master/docs/api-documentation/layouts/trees.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tables",permalink:"/oml-vision-docs/docs/next/api-documentation/layouts/tables"},next:{title:"Diagrams",permalink:"/oml-vision-docs/docs/next/api-documentation/layouts/diagrams"}},d={},l=[{value:"Defining Tree",id:"defining-tree",level:2},{value:"path",id:"path",level:3},{value:"name",id:"name",level:3},{value:"diagrams",id:"diagrams",level:3},{value:"all-rows",id:"all-rows",level:4},{value:"queries",id:"queries",level:3},{value:"rowMapping",id:"rowmapping",level:3},{value:"id",id:"id",level:4},{value:"name",id:"name-1",level:4},{value:"labelFormat",id:"labelformat",level:4},{value:"subRowMappings",id:"subrowmappings",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"trees",children:"Trees"}),"\n",(0,i.jsxs)(n.p,{children:["Trees are created using ",(0,i.jsx)(n.a,{href:"https://github.com/brimdata/react-arborist",children:"React Arborist"}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"trees.json",type:"info",children:(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"src/vision/layouts/trees.json"})," file (case-sensitive)"]})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"src/vision/layouts/trees.json"})," file is responsible for:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Defining what OML Vision Trees can render","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Name of the Trees"}),"\n",(0,i.jsx)(n.li,{children:"Commands that can be executed from the Trees"}),"\n",(0,i.jsx)(n.li,{children:"Name of the columns for the Trees"}),"\n",(0,i.jsx)(n.li,{children:"Queries that the Trees's content needs"}),"\n",(0,i.jsx)(n.li,{children:"How to map Tree queries to columns"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It is formatted as a JSON data structure."}),"\n",(0,i.jsxs)(n.p,{children:["An example of what this looks like is seen below with the source code found ",(0,i.jsx)(n.a,{href:"https://github.com/pogi7/kepler16b-example/blob/main/src/vision/layouts/treeLayouts.json",children:"here"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "requirements": {\n    "name": "Requirements Diagram",\n    "diagrams": {\n      "all-rows": "requirements-diagram"\n    },\n    "queries": {\n      "requirements": "requirements.sparql"\n    },\n    "rowMapping": {\n      "id": "requirements",\n      "name": "Requirements",\n      "labelFormat": "{r_id}",\n      "subRowMappings": [\n        {\n          "id": "requirements",\n          "name": "Components",\n          "labelFormat": "C Name: {c_name}"\n        }\n      ]\n    }\n  },\n  "components": {\n    "name": "Components",\n    "diagrams": {\n      "all-rows": "components-diagram"\n    },\n    "queries": {\n      "components": "components.sparql"\n    },\n    "rowMapping": {\n      "id": "components",\n      "name": "Components",\n      "labelFormat": "{c1_id} {c1_name}",\n      "subRowMappings": [\n        {\n          "id": "components",\n          "name": "Masses",\n          "labelFormat": "{c1_mass}"\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"defining-tree",children:"Defining Tree"}),"\n",(0,i.jsx)(n.p,{children:"A tree must be properly defined in order to be rendered by OML Vision"}),"\n",(0,i.jsx)(n.h3,{id:"path",children:"path"}),"\n",(0,i.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"path: string\n"})})}),"\n",(0,i.jsx)(n.p,{children:"This string defines the path of the Tree."}),"\n",(0,i.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,i.jsxs)(n.p,{children:["The name of the ",(0,i.jsx)(n.code,{children:"path"})," is the same path that was defined in the ",(0,i.jsx)(n.code,{children:"pages.json"}),"."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Tree Path",src:s(7892).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,i.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"name: string\n"})})}),"\n",(0,i.jsxs)(n.p,{children:["This string gives a name to the Tree in the ",(0,i.jsx)(n.code,{children:"treeLayouts.json"})," file."]}),"\n",(0,i.jsx)(n.h3,{id:"diagrams",children:"diagrams"}),"\n",(0,i.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"diagrams: {\n    all-rows: string\n  }\n"})})}),"\n",(0,i.jsx)(n.p,{children:"The diagrams object defines the commands that the Tree is able to execute."}),"\n",(0,i.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"diagrams"})," correspond to the commands that appear when a user right clicks a row in the Tree."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Tree Commands",src:s(1232).Z+"",width:"3450",height:"2022"})})]}),"\n",(0,i.jsx)(n.h4,{id:"all-rows",children:"all-rows"}),"\n",(0,i.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"all-rows: string\n"})})}),"\n",(0,i.jsxs)(n.p,{children:["This string defines that all rows have the commands defined available for them to execute.  The name of the string is arbitrary, but a good name for ",(0,i.jsx)(n.code,{children:"all-rows"}),' is "all-rows".']}),"\n",(0,i.jsx)(n.h3,{id:"queries",children:"queries"}),"\n",(0,i.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"queries: {}\n"})})}),"\n",(0,i.jsx)(n.p,{children:"This object contains the queries that will query the RDF Triplestore for the content that will populate in the Tree."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Look at the sparql docs for more info found ",(0,i.jsx)(n.a,{href:"/docs/api-documentation/sparql",children:"here"})]})}),"\n",(0,i.jsxs)(n.admonition,{title:"FUSEKI",type:"tip",children:[(0,i.jsxs)(n.p,{children:["You can test queries by going to localhost:3030 which is created once data is loaded into the Fuseki DB.  You can watch more info about testing queries with Fuseki by going ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=w_pJ3XiBWeM&t=621s",children:"here"})]}),(0,i.jsxs)(n.p,{children:["The AI & DS Channel (2021, February 18). SPARQL Query [Video]. YouTube. ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=w_pJ3XiBWeM&t=621s",children:"https://www.youtube.com/watch?v=w_pJ3XiBWeM&t=621s"})]})]}),"\n",(0,i.jsx)(n.h3,{id:"rowmapping",children:"rowMapping"}),"\n",(0,i.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"rowMapping: {}\n"})})}),"\n",(0,i.jsxs)(n.p,{children:["This object defines how the ",(0,i.jsx)(n.code,{children:"queries"})," map to the ",(0,i.jsx)(n.code,{children:"columnNames"})]}),"\n",(0,i.jsx)(n.h4,{id:"id",children:"id"}),"\n",(0,i.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"id: string\n"})})}),"\n",(0,i.jsxs)(n.p,{children:["This string the ",(0,i.jsx)(n.code,{children:"id"})," for the ",(0,i.jsx)(n.code,{children:"rowMapping"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"id"})," correspond to one of the ",(0,i.jsx)(n.code,{children:"columnNames"}),"."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Tree Row Mapping Id",src:s(8001).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,i.jsx)(n.h4,{id:"name-1",children:"name"}),"\n",(0,i.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"name: string\n"})})}),"\n",(0,i.jsxs)(n.p,{children:["This string gives a name to the ",(0,i.jsx)(n.code,{children:"rowMapping"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"labelformat",children:"labelFormat"}),"\n",(0,i.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"labelFormat: string\n"})})}),"\n",(0,i.jsxs)(n.p,{children:["This string contains the label of the row for the ",(0,i.jsx)(n.code,{children:"rowMapping"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"labelFormat"})," is rendered in the rows of the Tree shown in the red boxes."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"STRING INTERPOLATION"})}),(0,i.jsxs)(n.p,{children:["OML Vision supports string interpolation with the queries that were formatted.  The format is ",(0,i.jsx)(n.code,{children:'"{string}"'})]}),(0,i.jsxs)(n.p,{children:["An example is found ",(0,i.jsx)(n.a,{href:"https://github.com/pogi7/kepler16b-example/blob/main/src/vision/layouts/treeLayouts.json#L18",children:"here"})]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Tree Column Names",src:s(2454).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,i.jsx)(n.h4,{id:"subrowmappings",children:"subRowMappings"}),"\n",(0,i.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"subRowMappings: {\n    id: string\n    name: string\n    labelFormat: string\n  }[]\n"})})}),"\n",(0,i.jsxs)(n.p,{children:["This ",(0,i.jsx)(n.code,{children:"subRowMappings"})," array of objects defines the ",(0,i.jsx)(n.code,{children:"id"}),", ",(0,i.jsx)(n.code,{children:"name"}),", and ",(0,i.jsx)(n.code,{children:"labelFormat"})," for the subrows of the Tree."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["The ",(0,i.jsx)(n.code,{children:"id"}),", ",(0,i.jsx)(n.code,{children:"name"}),", and ",(0,i.jsx)(n.code,{children:"labelFormat"})," have the same data structure as ",(0,i.jsx)(n.code,{children:"rowMapping"})]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1232:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/treeCommands-15269913786a9f83221e9b530f2403a7.png"},7892:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/treePath-05173d0b4de91cb625828391ecf493fa.png"},8001:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/treeRowMappingId-20ac0c02b7d37e9a6aae7a0d0d35d99a.png"},2454:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/treeRowMappingLabelFormat-c1fc92c3cac41f36f82c3c226b1ad8f1.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var i=s(7294);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);