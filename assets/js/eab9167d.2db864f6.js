"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[1878],{6316:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=i(5893),t=i(1151);const r={sidebar_position:4},o="Diagrams",d={id:"api-documentation/layouts/diagrams",title:"Diagrams",description:"Diagrams are created using React Flow.",source:"@site/docs/api-documentation/layouts/diagrams.md",sourceDirName:"api-documentation/layouts",slug:"/api-documentation/layouts/diagrams",permalink:"/oml-vision-docs/docs/next/api-documentation/layouts/diagrams",draft:!1,unlisted:!1,editUrl:"https://github.com/opencaesar/oml-vision-docs/tree/master/docs/api-documentation/layouts/diagrams.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Trees",permalink:"/oml-vision-docs/docs/next/api-documentation/layouts/trees"},next:{title:"Sparql",permalink:"/oml-vision-docs/docs/next/api-documentation/sparql"}},a={},l=[{value:"Defining Diagram",id:"defining-diagram",level:2},{value:"Terminology",id:"terminology",level:3},{value:"path",id:"path",level:3},{value:"name",id:"name",level:3},{value:"queries",id:"queries",level:3},{value:"rowMapping",id:"rowmapping",level:3},{value:"id",id:"id",level:4},{value:"name",id:"name-1",level:4},{value:"labelFormat",id:"labelformat",level:4},{value:"colorKey",id:"colorkey",level:4},{value:"nodeColor",id:"nodecolor",level:4},{value:"nodeTextColor",id:"nodetextcolor",level:4},{value:"nodeType",id:"nodetype",level:4},{value:"edgeMatchKey",id:"edgematchkey",level:4},{value:"subRowMappings",id:"subrowmappings",level:4},{value:"edges",id:"edges",level:3},{value:"animated",id:"animated",level:4},{value:"legendItems",id:"legenditems",level:4},{value:"sourceKey",id:"sourcekey",level:4},{value:"targetKey",id:"targetkey",level:4},{value:"Abilities",id:"abilities",level:2},{value:"Highlight Edges",id:"highlight-edges",level:3},{value:"PNG Download",id:"png-download",level:3},{value:"SVG Download",id:"svg-download",level:3},{value:"Lock/Unlock",id:"lockunlock",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"diagrams",children:"Diagrams"}),"\n",(0,s.jsxs)(n.p,{children:["Diagrams are created using ",(0,s.jsx)(n.a,{href:"https://reactflow.dev/",children:"React Flow"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"diagrams.json",type:"info",children:(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"src/vision/layouts/diagrams.json"})," file (case-sensitive)"]})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"src/vision/layouts/diagrams.json"})," file is responsible for:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Defining what OML Vision Diagrams can render","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Name of the Diagrams"}),"\n",(0,s.jsx)(n.li,{children:"Name of the nodes for the Diagram"}),"\n",(0,s.jsx)(n.li,{children:"Name of the edges for the Diagram"}),"\n",(0,s.jsx)(n.li,{children:"Queries for the Diagram node content"}),"\n",(0,s.jsx)(n.li,{children:"Queries for the Diagram edge content"}),"\n",(0,s.jsx)(n.li,{children:"How to map Diagrams node queries to edge queries"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"It is formatted as a JSON data structure."}),"\n",(0,s.jsxs)(n.p,{children:["An example of what this looks like is seen below with the source code found ",(0,s.jsx)(n.a,{href:"https://github.com/UTNAK/open-source-rover/blob/main/src/vision/layouts/diagramLayouts.json",children:"here"})]}),"\n",(0,s.jsx)(n.h2,{id:"defining-diagram",children:"Defining Diagram"}),"\n",(0,s.jsx)(n.p,{children:"A Diagram must be properly defined in order to be rendered by OML Vision"}),"\n",(0,s.jsx)(n.h3,{id:"terminology",children:"Terminology"}),"\n",(0,s.jsx)(n.p,{children:"OML Vision defines a node and edge as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Node: A graphical element that contains information"}),"\n",(0,s.jsx)(n.li,{children:"Edge: A graphical element that connects information"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram Terminology",src:i(3625).Z+"",width:"3680",height:"2252"})}),"\n",(0,s.jsx)(n.h3,{id:"path",children:"path"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"path: string\n"})})}),"\n",(0,s.jsx)(n.p,{children:"This string defines the path of the Diagram."}),"\n",(0,s.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,s.jsxs)(n.p,{children:["The name of the ",(0,s.jsx)(n.code,{children:"path"})," is the same path that was defined in the ",(0,s.jsx)(n.code,{children:"pages.json"}),"."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram Path",src:i(5041).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,s.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"name: string\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This string gives a name to the Diagram in the ",(0,s.jsx)(n.code,{children:"diagramLayouts.json"})," file."]}),"\n",(0,s.jsx)(n.h3,{id:"queries",children:"queries"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"queries: {}\n"})})}),"\n",(0,s.jsx)(n.p,{children:"This object contains the queries that will query the RDF Triplestore for the content that will populate in the Diagram."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Look at the sparql docs for more info found ",(0,s.jsx)(n.a,{href:"/docs/api-documentation/sparql",children:"here"})]})}),"\n",(0,s.jsxs)(n.admonition,{title:"FUSEKI",type:"tip",children:[(0,s.jsxs)(n.p,{children:["You can test queries by going to localhost:3030 which is created once data is loaded into the Fuseki DB.  You can watch more info about testing queries with Fuseki by going ",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=w_pJ3XiBWeM&t=621s",children:"here"})]}),(0,s.jsxs)(n.p,{children:["The AI & DS Channel (2021, February 18). SPARQL Query [Video]. YouTube. ",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=w_pJ3XiBWeM&t=621s",children:"https://www.youtube.com/watch?v=w_pJ3XiBWeM&t=621s"})]})]}),"\n",(0,s.jsx)(n.h3,{id:"rowmapping",children:"rowMapping"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"rowMapping: {}\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This object defines how the ",(0,s.jsx)(n.code,{children:"queries"})," map to the ",(0,s.jsx)(n.code,{children:"columnNames"})]}),"\n",(0,s.jsx)(n.h4,{id:"id",children:"id"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"id: string\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This string the ",(0,s.jsx)(n.code,{children:"id"})," for the ",(0,s.jsx)(n.code,{children:"rowMapping"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"id"})," correspond to one of the ",(0,s.jsx)(n.code,{children:"columnNames"}),"."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram Row Mapping Id",src:i(9348).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,s.jsx)(n.h4,{id:"name-1",children:"name"}),"\n",(0,s.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"name: string\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This string gives a name to the ",(0,s.jsx)(n.code,{children:"rowMapping"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"labelformat",children:"labelFormat"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"labelFormat: string\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This string contains the label of the row for the ",(0,s.jsx)(n.code,{children:"rowMapping"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"labelFormat"})," is rendered in the rows of the Diagram shown in the red boxes."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"STRING INTERPOLATION"})}),(0,s.jsxs)(n.p,{children:["OML Vision supports string interpolation with the queries that were formatted.  The format is ",(0,s.jsx)(n.code,{children:'"{string}"'}),".  Please visit the sparql section of the documentation for more info located ",(0,s.jsx)(n.a,{href:"/docs/api-documentation/sparql",children:"here"})]}),(0,s.jsxs)(n.p,{children:["An example is found ",(0,s.jsx)(n.a,{href:"https://github.com/UTNAK/open-source-rover/blob/main/src/vision/layouts/diagramLayouts.json#L11",children:"here"})]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram Column Names",src:i(7958).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,s.jsx)(n.h4,{id:"colorkey",children:"colorKey"}),"\n",(0,s.jsxs)(n.admonition,{title:"DEPRECATED",type:"warning",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"colorKey: string\n"})}),(0,s.jsx)(n.p,{children:"This string is the seed for a random color generator for the nodes rendered in the Diagram.  Needed to generate the legend."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"STRING INTERPOLATION"})}),(0,s.jsxs)(n.p,{children:["OML Vision supports string interpolation with the queries that were formatted.  The format is ",(0,s.jsx)(n.code,{children:'"{string}"'}),".  Please visit the sparql section of the documentation for more info located ",(0,s.jsx)(n.a,{href:"/docs/api-documentation/sparql",children:"here"})]})]}),"\n",(0,s.jsx)(n.h4,{id:"nodecolor",children:"nodeColor"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"nodeColor: string\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This string sets the color of the nodes rendered in the Diagram.  Users can pick from a wide array of colors.  The full list is ",(0,s.jsx)(n.a,{href:"https://github.com/opencaesar/oml-vision/blob/master/view/src/components/shared/colors.ts",children:"here"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Non Case Sensitive Spelling"})}),"\n",(0,s.jsx)(n.p,{children:"OML vision is smart enough to understand inputting the name of the color or the hex value.  These inputs are not case sensitive."}),"\n",(0,s.jsxs)(n.p,{children:["Inputting ",(0,s.jsx)(n.code,{children:"green"}),", ",(0,s.jsx)(n.code,{children:"GREEN"}),", ",(0,s.jsx)(n.code,{children:"Green"}),", or ",(0,s.jsx)(n.code,{children:"#00ff00"})," will all output the color green to the nodes in the diagram view."]}),"\n",(0,s.jsx)(n.h4,{id:"nodetextcolor",children:"nodeTextColor"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"nodeTextColor: string\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This string sets the color of the text within the nodes rendered in the Diagram.  Users can pick from a wide array of colors.  The full list is ",(0,s.jsx)(n.a,{href:"https://github.com/opencaesar/oml-vision/blob/master/view/src/components/shared/colors.ts",children:"here"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Non Case Sensitive Spelling"})}),"\n",(0,s.jsx)(n.p,{children:"OML vision is smart enough to understand inputting the name of the color or the hex value.  These inputs are not case sensitive."}),"\n",(0,s.jsxs)(n.p,{children:["Inputting ",(0,s.jsx)(n.code,{children:"green"}),", ",(0,s.jsx)(n.code,{children:"GREEN"}),", ",(0,s.jsx)(n.code,{children:"Green"}),", or ",(0,s.jsx)(n.code,{children:"#00ff00"})," will all output the color green to the text of the nodes in the diagram view."]}),"\n",(0,s.jsx)(n.h4,{id:"nodetype",children:"nodeType"}),"\n",(0,s.jsxs)(n.admonition,{title:"REQUIRED",type:"danger",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"nodeTextColor: string\n"})}),(0,s.jsx)(n.p,{children:"This string sets the type of node in the diagram view."}),(0,s.jsx)(n.p,{children:'OML Vision colors nodes which are of type "Assembly" and "Subsystem" differently than other nodes.'}),(0,s.jsxs)(n.p,{children:['The "Subsystem" node is automatically darkened relative to the ',(0,s.jsx)(n.code,{children:"nodeColor"}),"."]}),(0,s.jsxs)(n.p,{children:['The "Assembly" node is automatically lightened relative to the ',(0,s.jsx)(n.code,{children:"nodeColor"}),"."]}),(0,s.jsxs)(n.p,{children:["For an example of how these nodes are queried and configured look at the following example located ",(0,s.jsx)(n.a,{href:"https://github.com/UTNAK/open-source-rover/blob/main/src/vision/sparql/component_filtered.sparql#L26-L37",children:"here"})]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"STRING INTERPOLATION"})}),(0,s.jsxs)(n.p,{children:["OML Vision supports string interpolation with the queries that were formatted.  The format is ",(0,s.jsx)(n.code,{children:'"{string}"'}),".  Please visit the sparql section of the documentation for more info located ",(0,s.jsx)(n.a,{href:"/docs/api-documentation/sparql",children:"here"})]})]}),"\n",(0,s.jsx)(n.h4,{id:"edgematchkey",children:"edgeMatchKey"}),"\n",(0,s.jsxs)(n.admonition,{title:"REQUIRED",type:"danger",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"edgeMatchKey: string\n"})}),(0,s.jsx)(n.p,{children:"This string defines the edge for each node in the Diagram."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"STRING INTERPOLATION"})}),(0,s.jsxs)(n.p,{children:["OML Vision supports string interpolation with the queries that were formatted.  The format is ",(0,s.jsx)(n.code,{children:'"{string}"'}),".  Please visit the sparql section of the documentation for more info located ",(0,s.jsx)(n.a,{href:"/docs/api-documentation/sparql",children:"here"})]})]}),"\n",(0,s.jsx)(n.h4,{id:"subrowmappings",children:"subRowMappings"}),"\n",(0,s.jsx)(n.admonition,{title:"OPTIONAL",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"subRowMappings: {\n    id: string\n    name: string\n    labelFormat: string\n    nodeColor: string\n    nodeTextColor: string\n    nodeType: string\n    edgeMatchKey: string\n  }[]\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This ",(0,s.jsx)(n.code,{children:"subRowMappings"})," array of objects defines the ",(0,s.jsx)(n.code,{children:"id"}),", ",(0,s.jsx)(n.code,{children:"name"}),", ",(0,s.jsx)(n.code,{children:"labelFormat"}),", ",(0,s.jsx)(n.code,{children:"nodeColor"}),", ",(0,s.jsx)(n.code,{children:"nodeTextColor"}),", ",(0,s.jsx)(n.code,{children:"nodeType"}),", and ",(0,s.jsx)(n.code,{children:"edgeMatchKey"})," for the subrows of the Diagram."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["The ",(0,s.jsx)(n.code,{children:"id"}),", ",(0,s.jsx)(n.code,{children:"name"}),", ",(0,s.jsx)(n.code,{children:"labelFormat"}),", ",(0,s.jsx)(n.code,{children:"nodeColor"}),", ",(0,s.jsx)(n.code,{children:"nodeTextColor"}),", ",(0,s.jsx)(n.code,{children:"nodeType"}),", and ",(0,s.jsx)(n.code,{children:"edgeMatchKey"})," have the same data structure as ",(0,s.jsx)(n.code,{children:"rowMapping"})]})}),"\n",(0,s.jsx)(n.h3,{id:"edges",children:"edges"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"edges: {\n    id: string\n    name: string\n    animated: boolean\n    labelFormat: string\n    legendItems: string\n    sourceKey: string\n    targetKey: string\n  }[]\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["This ",(0,s.jsx)(n.code,{children:"edges"})," array of objects defines the ",(0,s.jsx)(n.code,{children:"id"}),", ",(0,s.jsx)(n.code,{children:"name"}),", ",(0,s.jsx)(n.code,{children:"animated"}),", ",(0,s.jsx)(n.code,{children:"labelFormat"}),", ",(0,s.jsx)(n.code,{children:"legendItems"}),", ",(0,s.jsx)(n.code,{children:"sourceKey"}),", and ",(0,s.jsx)(n.code,{children:"targetKey"})," for the edges of the Diagram."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["The ",(0,s.jsx)(n.code,{children:"id"}),", ",(0,s.jsx)(n.code,{children:"name"}),", and ",(0,s.jsx)(n.code,{children:"labelFormat"})," have the same data structure as ",(0,s.jsx)(n.code,{children:"rowMapping"})]})}),"\n",(0,s.jsx)(n.h4,{id:"animated",children:"animated"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"animated: boolean\n"})})}),"\n",(0,s.jsx)(n.p,{children:"This boolean defines whether or not all edges in the Diagram are animated are not."}),"\n",(0,s.jsx)(n.h4,{id:"legenditems",children:"legendItems"}),"\n",(0,s.jsxs)(n.admonition,{title:"REQUIRED",type:"danger",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"legendItems: string\n"})}),(0,s.jsx)(n.p,{children:"This string defines the items that are populated in the legend in the diagram.  These items are automatically colored by OML Vision."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"STRING INTERPOLATION"})}),(0,s.jsxs)(n.p,{children:["OML Vision supports string interpolation with the queries that were formatted.  The format is ",(0,s.jsx)(n.code,{children:'"{string}"'}),".  Please visit the sparql section of the documentation for more info located ",(0,s.jsx)(n.a,{href:"/docs/api-documentation/sparql",children:"here"})]})]}),"\n",(0,s.jsx)(n.h4,{id:"sourcekey",children:"sourceKey"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"sourceKey: string\n"})})}),"\n",(0,s.jsx)(n.p,{children:"This string defines the source node for the edge in the Diagram."}),"\n",(0,s.jsx)(n.h4,{id:"targetkey",children:"targetKey"}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"targetKey: string\n"})})}),"\n",(0,s.jsx)(n.p,{children:"This string defines the target node for the edge in the Diagram."}),"\n",(0,s.jsx)(n.h2,{id:"abilities",children:"Abilities"}),"\n",(0,s.jsx)(n.h3,{id:"highlight-edges",children:"Highlight Edges"}),"\n",(0,s.jsx)(n.p,{children:"Hightlight edges connected to nodes by clicking one or multiple nodes.  You can select multiple nodes by holding down the CMD (macOS) or Ctrl (Windows) key."}),"\n",(0,s.jsxs)(n.p,{children:["No Node Highlight with unlighted edges:\n",(0,s.jsx)(n.img,{alt:"No Node Highlight",src:i(400).Z+"",width:"1840",height:"1106"})]}),"\n",(0,s.jsxs)(n.p,{children:["Node Highlight with highlighted edges:\n",(0,s.jsx)(n.img,{alt:"Node Highlight",src:i(1461).Z+"",width:"1840",height:"1106"})]}),"\n",(0,s.jsx)(n.h3,{id:"png-download",children:"PNG Download"}),"\n",(0,s.jsx)(n.p,{children:"In the lower left of the diagram, you can click the PNG icon to download the current state of the diagram to a PNG image."}),"\n",(0,s.jsx)(n.h3,{id:"svg-download",children:"SVG Download"}),"\n",(0,s.jsx)(n.p,{children:"In the lower left of the diagram, you can click the SVG icon to download the current state of the diagram to a SVG file."}),"\n",(0,s.jsx)(n.h3,{id:"lockunlock",children:"Lock/Unlock"}),"\n",(0,s.jsx)(n.p,{children:"In the lower left of the diagram, you can click the lock icon to unlock the nodes and edges in the diagram."}),"\n",(0,s.jsx)(n.p,{children:"When the diagram is unlocked you can select one or multiple nodes to move around."}),"\n",(0,s.jsx)(n.p,{children:"You can lock the nodes and edges in the diagram by clicking the unlock icon."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5041:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/diagramPath-a32511528971d0cc075408af2c16977f.png"},9348:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/diagramRowMappingId-25edd3d007281287babb45748ab9b2ef.png"},7958:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/diagramRowMappingLabelFormat-7af8527188340d03e466480840453128.png"},3625:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/diagramTerminology-5efcbc91d5039268075d4fbe30067687.png"},400:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/noNodeHighlight-f7642741208546ec366a221604c82f3a.png"},1461:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/nodeHighlight-76102ca574e850b43e54d41936df39ee.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var s=i(7294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);