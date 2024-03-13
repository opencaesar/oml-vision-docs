"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[2664],{5429:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>d,default:()=>M,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=t(5893),s=t(1151);const o={sidebar_position:2},d="Config",r={id:"api-documentation/config",title:"Config",description:"The config or configuration directory contains the configuration the following API endpoints for the in-memory Fuseki RDF triplestore:",source:"@site/versioned_docs/version-v0.2.5/api-documentation/config.md",sourceDirName:"api-documentation",slug:"/api-documentation/config",permalink:"/oml-vision-docs/docs/api-documentation/config",draft:!1,unlisted:!1,editUrl:"https://github.com/opencaesar/oml-vision-docs/tree/master/versioned_docs/version-v0.2.5/api-documentation/config.md",tags:[],version:"v0.2.5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Required Directories",permalink:"/oml-vision-docs/docs/api-documentation/required-directories"},next:{title:"Layouts",permalink:"/oml-vision-docs/docs/category/layouts"}},a={},l=[{value:"sparqlConfig.json",id:"sparqlconfigjson",level:2},{value:"queryEndpoint",id:"queryendpoint",level:3},{value:"Fuseki",id:"fuseki",level:4},{value:"updateEndpoint",id:"updateendpoint",level:3},{value:"Fuseki",id:"fuseki-1",level:4},{value:"pingEndpoint",id:"pingendpoint",level:3},{value:"Fuseki",id:"fuseki-2",level:4},{value:"Triplestore Status",id:"triplestore-status",level:2},{value:"Ping Status",id:"ping-status",level:3},{value:"Load Status",id:"load-status",level:3},{value:"Sidebar Example",id:"sidebar-example",level:3}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"config",children:"Config"}),"\n",(0,n.jsxs)(i.p,{children:["The config or configuration directory contains the configuration the following API endpoints for the in-memory ",(0,n.jsx)(i.a,{href:"https://jena.apache.org/documentation/fuseki2/",children:"Fuseki"})," RDF triplestore:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"query"}),"\n",(0,n.jsx)(i.li,{children:"update"}),"\n",(0,n.jsx)(i.li,{children:"ping"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["An example of a config directory correctly formatted for OML Vision can be seen ",(0,n.jsx)(i.a,{href:"https://github.com/pogi7/kepler16b-example/blob/main/src/vision/config/sparqlConfig.json",children:"here"})]}),"\n",(0,n.jsx)(i.h2,{id:"sparqlconfigjson",children:"sparqlConfig.json"}),"\n",(0,n.jsx)(i.admonition,{title:"sparqlConfig.json",type:"info",children:(0,n.jsxs)(i.p,{children:["Create a ",(0,n.jsx)(i.code,{children:"src/vision/config/sparqlConfig.json"})," file (case-sensitive)"]})}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"src/vision/config/sparqlConfig.json"})," file is responsible for specifying the query and update API endpoints."]}),"\n",(0,n.jsx)(i.p,{children:"It is formatted as a JSON data structure."}),"\n",(0,n.jsxs)(i.p,{children:["An example of what this looks like is seen below with the source code found ",(0,n.jsx)(i.a,{href:"https://github.com/pogi7/kepler16b-example/blob/main/src/vision/config/sparqlConfig.json",children:"here"})]}),"\n",(0,n.jsx)(i.h3,{id:"queryendpoint",children:"queryEndpoint"}),"\n",(0,n.jsx)(i.admonition,{title:"REQUIRED",type:"danger",children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-typescript",children:"queryEndpoint: string\n"})})}),"\n",(0,n.jsx)(i.p,{children:"This string defines the API query endpoint of the in-memory RDF triplestore."}),"\n",(0,n.jsx)(i.h4,{id:"fuseki",children:"Fuseki"}),"\n",(0,n.jsxs)(i.p,{children:["This endpoint can usually be found within the ",(0,n.jsx)(i.code,{children:".fuseki.ttl"})," file under the ",(0,n.jsx)(i.code,{children:"sparql"})," service.  An example of how to specify this endpoint can be found ",(0,n.jsx)(i.a,{href:"https://github.com/pogi7/kepler16b-example/blob/main/.fuseki.ttl#L15",children:"here"})]}),"\n",(0,n.jsx)(i.h3,{id:"updateendpoint",children:"updateEndpoint"}),"\n",(0,n.jsx)(i.admonition,{title:"REQUIRED",type:"danger",children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-typescript",children:"updateEndpoint: string\n"})})}),"\n",(0,n.jsx)(i.p,{children:"This string defines the API update endpoint of the in-memory RDF triplestore."}),"\n",(0,n.jsx)(i.h4,{id:"fuseki-1",children:"Fuseki"}),"\n",(0,n.jsxs)(i.p,{children:["This endpoint can usually be found within the ",(0,n.jsx)(i.code,{children:".fuseki.ttl"})," file under the ",(0,n.jsx)(i.code,{children:"update"})," service.  An example of how to specify this endpoint can be found ",(0,n.jsx)(i.a,{href:"https://github.com/pogi7/kepler16b-example/blob/main/.fuseki.ttl#L14",children:"here"})]}),"\n",(0,n.jsx)(i.h3,{id:"pingendpoint",children:"pingEndpoint"}),"\n",(0,n.jsx)(i.admonition,{title:"REQUIRED",type:"danger",children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-typescript",children:"pingEndpoint: string\n"})})}),"\n",(0,n.jsx)(i.p,{children:"This string defines the API ping endpoint of the in-memory RDF triplestore."}),"\n",(0,n.jsx)(i.h4,{id:"fuseki-2",children:"Fuseki"}),"\n",(0,n.jsxs)(i.p,{children:["You can refer to refer to the ",(0,n.jsx)(i.a,{href:"https://jena.apache.org/documentation/fuseki2/fuseki-server-protocol.html",children:"Fuseki HTTP Server Protocol"})," for an example of an in-memory RDF triplestore with a pingable endpoint."]}),"\n",(0,n.jsx)(i.h2,{id:"triplestore-status",children:"Triplestore Status"}),"\n",(0,n.jsx)(i.h3,{id:"ping-status",children:"Ping Status"}),"\n",(0,n.jsxs)(i.p,{children:["The ping status of the RDF triplestore is shown at all times in OML Vision in the ",(0,n.jsx)(i.code,{children:"RDF Triplestore Status"})," sidebar window.  It indicates whether the triplestore is running or not."]}),"\n",(0,n.jsxs)(i.p,{children:["RDF Triplestore On Icon = ",(0,n.jsx)(i.img,{alt:"On Ping",src:t(6172).Z+"",width:"16",height:"16"})]}),"\n",(0,n.jsxs)(i.p,{children:["RDF Triplestore Off Icon = ",(0,n.jsx)(i.img,{alt:"Off Ping",src:t(4872).Z+"",width:"16",height:"16"})]}),"\n",(0,n.jsx)(i.h3,{id:"load-status",children:"Load Status"}),"\n",(0,n.jsxs)(i.p,{children:["The load status of the RDF triplestore is shown at all times in OML Vision in the ",(0,n.jsx)(i.code,{children:"RDF Triplestore Status"})," sidebar window.  It indicates whether data has been loaded into the triplestore or not."]}),"\n",(0,n.jsxs)(i.p,{children:["RDF Triplestore Loaded Icon = ",(0,n.jsx)(i.img,{alt:"Loaded",src:t(6693).Z+"",width:"16",height:"16"})]}),"\n",(0,n.jsxs)(i.p,{children:["RDF Triplestore Not Loaded Icon = ",(0,n.jsx)(i.img,{alt:"Not Loaded",src:t(5008).Z+"",width:"16",height:"16"})]}),"\n",(0,n.jsxs)(i.admonition,{title:"Check if triplestore is loaded button",type:"info",children:[(0,n.jsx)(i.p,{children:"The concept of operations for checking the loaded status of a triplestore is"}),(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Start the server (usually with a gradle task).  Refer to gradle section ",(0,n.jsx)(i.a,{href:"docs/api-documentation/gradle",children:"here"}),".  DO NOT LOAD DATA UNTIL STEP 4."]}),"\n",(0,n.jsxs)(i.li,{children:["Run the ",(0,n.jsx)(i.code,{children:"Check if triplestore is loaded"})," button"]}),"\n",(0,n.jsxs)(i.li,{children:["If the RDF Triplestore Loaded Icon = ",(0,n.jsx)(i.img,{alt:"Loaded",src:t(6693).Z+"",width:"16",height:"16"})," then you have verified that data is loaded into the triplestore.  You may skip the next steps."]}),"\n",(0,n.jsxs)(i.li,{children:["If RDF Triplestore Not Loaded Icon = ",(0,n.jsx)(i.img,{alt:"Not Loaded",src:t(5008).Z+"",width:"16",height:"16"})," then you must load data into the triplestore (usually with a gradle task).  Refer to gradle section ",(0,n.jsx)(i.a,{href:"docs/api-documentation/gradle",children:"here"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Afterwards the RDF Triplestore Loaded Icon = ",(0,n.jsx)(i.img,{alt:"Loaded",src:t(6693).Z+"",width:"16",height:"16"}),". You have verified that data is loaded into the triplestore."]}),"\n"]})]}),"\n",(0,n.jsx)(i.h3,{id:"sidebar-example",children:"Sidebar Example"}),"\n",(0,n.jsxs)(i.p,{children:["An example of how the ",(0,n.jsx)(i.code,{children:"RDF Triplestore Status"})," sidebar window looks like is shown below."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"RDF Triplestore Status",src:t(2930).Z+"",width:"3680",height:"2260"})})]})}function M(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},2930:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/rdfTriplestoreStatus-16219c17fb469d70009476dbdee9a7cc.png"},6693:(e,i,t)=>{t.d(i,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImdyZWVuIiBmaWxsPSJncmVlbiIgc3Ryb2tlLXdpZHRoPSIwIiB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMWVtIiB3aWR0aD0iMWVtIgogICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoCiAgICAgICAgZD0iTTEzIDMuNUMxMyAyLjExOSAxMC43NjEgMSA4IDFTMyAyLjExOSAzIDMuNWMwIC4wNC4wMi4wNzcuMDI0LjExN0gzdjguODcybC4wNTYuMzU3QzMuMzM2IDE0LjA1NiA1LjQyOSAxNSA4IDE1YzIuNTcxIDAgNC42NjQtLjk0NCA0Ljk0NC0yLjE1NGwuMDU2LS4zNTdWMy42MTdoLS4wMjRjLjAwNC0uMDQuMDI0LS4wNzcuMDI0LS4xMTd6TTggMi4wMzJjMi40NDIgMCA0IC45NjQgNCAxLjQ2OHMtMS41NTggMS40NjgtNCAxLjQ2OFM0IDQgNCAzLjVzMS41NTgtMS40NjggNC0xLjQ2OHptNCAxMC40NThsLS4wMy4xMzFDMTEuODU1IDEzLjExNiAxMC40MzEgMTQgOCAxNHMtMy44NTUtLjg4NC0zLjk3LTEuMzc5TDQgMTIuNDl2LTcuNUE3LjQxNCA3LjQxNCAwIDAgMCA4IDZhNy40MTQgNy40MTQgMCAwIDAgNC0xLjAxNHY3LjUwNHoiPgogICAgPC9wYXRoPgo8L3N2Zz4="},5008:(e,i,t)=>{t.d(i,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9InJlZCIgZmlsbD0icmVkIiBzdHJva2Utd2lkdGg9IjAiIHZpZXdCb3g9IjAgMCAxNiAxNiIgaGVpZ2h0PSIxZW0iIHdpZHRoPSIxZW0iCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGgKICAgICAgICBkPSJNMTMgMy41QzEzIDIuMTE5IDEwLjc2MSAxIDggMVMzIDIuMTE5IDMgMy41YzAgLjA0LjAyLjA3Ny4wMjQuMTE3SDN2OC44NzJsLjA1Ni4zNTdDMy4zMzYgMTQuMDU2IDUuNDI5IDE1IDggMTVjMi41NzEgMCA0LjY2NC0uOTQ0IDQuOTQ0LTIuMTU0bC4wNTYtLjM1N1YzLjYxN2gtLjAyNGMuMDA0LS4wNC4wMjQtLjA3Ny4wMjQtLjExN3pNOCAyLjAzMmMyLjQ0MiAwIDQgLjk2NCA0IDEuNDY4cy0xLjU1OCAxLjQ2OC00IDEuNDY4UzQgNCA0IDMuNXMxLjU1OC0xLjQ2OCA0LTEuNDY4em00IDEwLjQ1OGwtLjAzLjEzMUMxMS44NTUgMTMuMTE2IDEwLjQzMSAxNCA4IDE0cy0zLjg1NS0uODg0LTMuOTctMS4zNzlMNCAxMi40OXYtNy41QTcuNDE0IDcuNDE0IDAgMCAwIDggNmE3LjQxNCA3LjQxNCAwIDAgMCA0LTEuMDE0djcuNTA0eiI+CiAgICA8L3BhdGg+Cjwvc3ZnPg=="},4872:(e,i,t)=>{t.d(i,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9InJlZCIgZmlsbD0icmVkIiBzdHJva2Utd2lkdGg9IjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIxZW0iIHdpZHRoPSIxZW0iCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGgKICAgICAgICBkPSJNMS4yOTMgOC4zOTVsMS40MTQgMS40MTRDMy4yMTEgOS4zMDUgMy43NTkgOC44NTkgNC4zMjkgOC40NUwyLjkgNy4wMjFDMi4zNCA3LjQ0MyAxLjc5NiA3Ljg5MSAxLjI5MyA4LjM5NXpNNi40NzQgNS4wNkwzLjcwNyAyLjI5MyAyLjI5MyAzLjcwN2wxOCAxOCAxLjQxNC0xLjQxNC01LjAxMi01LjAxMi45NzYtLjk3NWMtMS4xNDUtMS4xNDUtMi41ODUtMS44NTgtNC4wOTktMi4xNDhMMTEuMjk0IDkuODhjMi43ODktLjE5MSA1LjY0OS43NDggNy43MjkgMi44MjdsMS40MTQtMS40MTRjLTIuODk4LTIuODk5LTcuMDYxLTMuOTM2LTEwLjg4OC0zLjE1OEw4LjAyNCA2LjYxQzkuMjkxIDYuMjE2IDEwLjYyNSA2IDEyIDZjMy41MzcgMCA2LjgzNyAxLjM1MyA5LjI5MyAzLjgwOWwxLjQxNC0xLjQxNEMxOS44NzQgNS41NjEgMTYuMDcxIDQgMTIgNCAxMC4wNjYgNC4wMDEgOC4yMDkgNC4zODQgNi40NzQgNS4wNnpNMy41NjMgMTEuMjkzbDEuNDE0IDEuNDE0Yy42MjItLjYyMiAxLjMxOS0xLjEzMiAyLjA1OC0xLjU1MUw1LjU3NiA5LjY5N0M0Ljg1OSAxMC4xNDggNC4xODEgMTAuNjc2IDMuNTYzIDExLjI5M3pNNi4zMjkgMTQuMzA3bDEuNDE0IDEuNDE0Yy42OTItLjY5MiAxLjUzNS0xLjE1MSAyLjQyOS0xLjQyOGwtMS41NTctMS41NTdDNy43ODIgMTMuMTE1IDcuMDAzIDEzLjYzMyA2LjMyOSAxNC4zMDd6TTEzLjk4OSAxOC4xMWwtMi4xLTIuMUMxMC44MzggMTYuMDY5IDEwIDE2LjkzMyAxMCAxOGMtLjAwMSAxLjEwNC44OTUgMiAyIDJDMTMuMDY2IDIwIDEzLjkzMSAxOS4xNjIgMTMuOTg5IDE4LjExeiI+CiAgICA8L3BhdGg+Cjwvc3ZnPg=="},6172:(e,i,t)=>{t.d(i,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImdyZWVuIiBmaWxsPSJncmVlbiIgc3Ryb2tlLXdpZHRoPSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMWVtIiB3aWR0aD0iMWVtIgogICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoCiAgICAgICAgZD0iTTEyIDZjMy41MzcgMCA2LjgzNyAxLjM1MyA5LjI5MyAzLjgwOWwxLjQxNC0xLjQxNEMxOS44NzQgNS41NjEgMTYuMDcxIDQgMTIgNCA3LjkyOSA0LjAwMSA0LjEyNiA1LjU2MSAxLjI5MyA4LjM5NWwxLjQxNCAxLjQxNEM1LjE2MyA3LjM1MyA4LjQ2MyA2IDEyIDZ6TTE3LjY3MSAxNC4zMDdjLTMuMDc0LTMuMDc0LTguMjY4LTMuMDc0LTExLjM0MiAwbDEuNDE0IDEuNDE0YzIuMzA3LTIuMzA3IDYuMjA3LTIuMzA3IDguNTE0IDBMMTcuNjcxIDE0LjMwN3oiPgogICAgPC9wYXRoPgogICAgPHBhdGgKICAgICAgICBkPSJNMjAuNDM3LDExLjI5M2MtNC41NzItNC41NzQtMTIuMzAxLTQuNTc0LTE2Ljg3MywwbDEuNDE0LDEuNDE0YzMuODA3LTMuODA3LDEwLjIzOC0zLjgwNywxNC4wNDUsMEwyMC40MzcsMTEuMjkzeiI+CiAgICA8L3BhdGg+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjE4IiByPSIyIj48L2NpcmNsZT4KPC9zdmc+"},1151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>d});var n=t(7294);const s={},o=n.createContext(s);function d(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);