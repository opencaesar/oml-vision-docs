"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9763],{1397:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=i(5893),t=i(1151);const a={sidebar_position:2},r="Tables",l={id:"api-documentation/viewpoints/tables",title:"Tables",description:"Tables are created using tanstack table.",source:"@site/versioned_docs/version-v0.2.6/api-documentation/viewpoints/tables.md",sourceDirName:"api-documentation/viewpoints",slug:"/api-documentation/viewpoints/tables",permalink:"/oml-vision-docs/docs/api-documentation/viewpoints/tables",draft:!1,unlisted:!1,editUrl:"https://github.com/opencaesar/oml-vision-docs/tree/master/versioned_docs/version-v0.2.6/api-documentation/viewpoints/tables.md",tags:[],version:"v0.2.6",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Pages",permalink:"/oml-vision-docs/docs/api-documentation/viewpoints/pages"},next:{title:"Trees",permalink:"/oml-vision-docs/docs/api-documentation/viewpoints/trees"}},o={},d=[{value:"Defining A Table",id:"defining-a-table",level:2},{value:"path",id:"path",level:3},{value:"name",id:"name",level:3},{value:"diagrams",id:"diagrams",level:3},{value:"all-rows",id:"all-rows",level:4},{value:"columnNames",id:"columnnames",level:3},{value:"queries",id:"queries",level:3},{value:"rowMapping",id:"rowmapping",level:3},{value:"id",id:"id",level:4},{value:"name",id:"name-1",level:4},{value:"labelFormat",id:"labelformat",level:4},{value:"subRowMappings",id:"subrowmappings",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tables",children:"Tables"}),"\n",(0,s.jsxs)(n.p,{children:["Tables are created using ",(0,s.jsx)(n.a,{href:"https://tanstack.com/table/v8",children:"tanstack table"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"tables directory",type:"info",children:(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"src/vision/viewpoints/tables"})," directory (case-sensitive)"]})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"src/vision/viewpoints/tables"})," directory is responsible for:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Defining what OML Vision Tables can render","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Name of the Table"}),"\n",(0,s.jsx)(n.li,{children:"Commands that can be executed from the Table"}),"\n",(0,s.jsx)(n.li,{children:"Name of the columns for the Table"}),"\n",(0,s.jsx)(n.li,{children:"Queries that the Table's content needs"}),"\n",(0,s.jsx)(n.li,{children:"How to map Table queries to columns"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Each file in the directory is formatted as a JSON data structure."}),"\n",(0,s.jsxs)(n.p,{children:["An example of what this looks like is seen below with the source code found ",(0,s.jsx)(n.a,{href:"https://github.com/pogi7/kepler16b-example/blob/main/src/vision/viewpoints/tables",children:"here"})]}),"\n",(0,s.jsx)(n.h2,{id:"defining-a-table",children:"Defining A Table"}),"\n",(0,s.jsx)(n.p,{children:"A table must be properly defined in order to be rendered by OML Vision."}),"\n",(0,s.jsx)(n.p,{children:"The following are JSON key-value pairs that can be defined for a Table."}),"\n",(0,s.jsx)(n.h3,{id:"path",children:"path"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"path: string\n"})})}),"\n",(0,s.jsx)(n.p,{children:"This string defines the path of the Table."}),"\n",(0,s.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,s.jsxs)(n.p,{children:["The name of the ",(0,s.jsx)(n.code,{children:"path"})," is the same path that was defined in the ",(0,s.jsx)(n.code,{children:"pages.json"}),"."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Table Path",src:i(308).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,s.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"name: string\n"})})}),"\n",(0,s.jsx)(n.p,{children:"This string gives a name to the table."}),"\n",(0,s.jsx)(n.h3,{id:"diagrams",children:"diagrams"}),"\n",(0,s.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"diagrams: {\n    all-rows: string\n  }\n"})})}),"\n",(0,s.jsx)(n.p,{children:"The diagrams object defines the commands that the Table is able to execute."}),"\n",(0,s.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"diagrams"})," correspond to the commands that appear when a user right clicks a row in the Table."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Table Commands",src:i(3780).Z+"",width:"3444",height:"2022"})})]}),"\n",(0,s.jsx)(n.h4,{id:"all-rows",children:"all-rows"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"all-rows: string\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This string defines that all rows have the commands defined available for them to execute.  The name of the string is arbitrary, but a good name for ",(0,s.jsx)(n.code,{children:"all-rows"}),' is "all-rows".']}),"\n",(0,s.jsx)(n.h3,{id:"columnnames",children:"columnNames"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"columnNames: {}\n"})})}),"\n",(0,s.jsx)(n.p,{children:"This object contains the columns that will render on the Table."}),"\n",(0,s.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"columnNames"})," are rendered in the headers of the Table shown in the red boxes."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Table Column Names",src:i(138).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,s.jsx)(n.h3,{id:"queries",children:"queries"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"queries: {}\n"})})}),"\n",(0,s.jsx)(n.p,{children:"This object contains the queries that will query the RDF Triplestore for the content that will populate in the Table."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Look at the sparql docs for more info found ",(0,s.jsx)(n.a,{href:"/docs/api-documentation/sparql",children:"here"})]})}),"\n",(0,s.jsxs)(n.admonition,{title:"FUSEKI",type:"tip",children:[(0,s.jsxs)(n.p,{children:["You can test queries by going to localhost:3030 which is created once data is loaded into the Fuseki DB.  You can watch more info about testing queries with Fuseki by going ",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=w_pJ3XiBWeM&t=621s",children:"here"})]}),(0,s.jsxs)(n.p,{children:["The AI & DS Channel (2021, February 18). SPARQL Query [Video]. YouTube. ",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=w_pJ3XiBWeM&t=621s",children:"https://www.youtube.com/watch?v=w_pJ3XiBWeM&t=621s"})]})]}),"\n",(0,s.jsx)(n.h3,{id:"rowmapping",children:"rowMapping"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"rowMapping: {}\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This object defines how the ",(0,s.jsx)(n.code,{children:"queries"})," map to the ",(0,s.jsx)(n.code,{children:"columnNames"})]}),"\n",(0,s.jsx)(n.h4,{id:"id",children:"id"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"id: string\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This string the ",(0,s.jsx)(n.code,{children:"id"})," for the ",(0,s.jsx)(n.code,{children:"rowMapping"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"id"})," correspond to one of the ",(0,s.jsx)(n.code,{children:"columnNames"}),"."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Table Row Mapping Id",src:i(4416).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,s.jsx)(n.h4,{id:"name-1",children:"name"}),"\n",(0,s.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"name: string\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This string gives a name to the ",(0,s.jsx)(n.code,{children:"rowMapping"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"labelformat",children:"labelFormat"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"labelFormat: string\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This string contains the label of the row for the ",(0,s.jsx)(n.code,{children:"rowMapping"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"labelFormat"})," is rendered in the rows of the Table shown in the red boxes."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Table Column Names",src:i(7796).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,s.jsxs)(n.admonition,{title:"STRING INTERPOLATION",type:"tip",children:[(0,s.jsxs)(n.p,{children:["OML Vision supports string interpolation with the queries that were formatted.  The format is ",(0,s.jsx)(n.code,{children:'"{string}"'})]}),(0,s.jsxs)(n.p,{children:["An example is found ",(0,s.jsx)(n.a,{href:"https://github.com/pogi7/kepler16b-example/blob/main/src/vision/viewpoints/tables/objectives.json#L25",children:"here"})]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Table String Interpolation",src:i(1383).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,s.jsx)(n.h4,{id:"subrowmappings",children:"subRowMappings"}),"\n",(0,s.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"subRowMappings: {\n    id: string\n    name: string\n    labelFormat: string\n  }[]\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This ",(0,s.jsx)(n.code,{children:"subRowMappings"})," array of objects defines the ",(0,s.jsx)(n.code,{children:"id"}),", ",(0,s.jsx)(n.code,{children:"name"}),", and ",(0,s.jsx)(n.code,{children:"labelFormat"})," for the subrows of the Table."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["The ",(0,s.jsx)(n.code,{children:"id"}),", ",(0,s.jsx)(n.code,{children:"name"}),", and ",(0,s.jsx)(n.code,{children:"labelFormat"})," have the same data structure as ",(0,s.jsx)(n.code,{children:"rowMapping"})]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},138:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/tableColumnNames-46ed838d0deddf6c0074aa95f649f87e.png"},3780:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/tableCommands-b2fd2e043d809d20bbe41ecc6283b0bc.png"},308:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/tablePath-96df27598d20e4e89c67dbb7489bf477.png"},4416:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/tableRowMappingId-4eec3ca1a8fd69a8a4015943bb239399.png"},7796:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/tableRowMappingLabelFormat-8e0d847533335a460d766dd65e0373a9.png"},1383:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/tableStringInterpolation-2ee7030fc74a45e2750866858ed1b512.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var s=i(7294);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);