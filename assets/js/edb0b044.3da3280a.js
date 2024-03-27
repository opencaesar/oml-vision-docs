"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[8012],{2391:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=i(5893),t=i(1151);const o={sidebar_position:5},r="Gradle",l={id:"api-documentation/gradle",title:"Gradle",description:"OML models tend to use Gradle to package dependencies and tasks to manipulate and analyze the model.",source:"@site/versioned_docs/version-v0.2.0/api-documentation/gradle.md",sourceDirName:"api-documentation",slug:"/api-documentation/gradle",permalink:"/oml-vision-docs/docs/v0.2.0/api-documentation/gradle",draft:!1,unlisted:!1,editUrl:"https://github.com/opencaesar/oml-vision-docs/tree/master/versioned_docs/version-v0.2.0/api-documentation/gradle.md",tags:[],version:"v0.2.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Sparql",permalink:"/oml-vision-docs/docs/v0.2.0/api-documentation/sparql"},next:{title:"Troubleshooting",permalink:"/oml-vision-docs/docs/v0.2.0/api-documentation/troubleshooting"}},d={},a=[{value:"Build",id:"build",level:2},{value:"Tasks",id:"tasks",level:2},{value:"Vision Group",id:"vision-group",level:3},{value:"Running Tasks",id:"running-tasks",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"gradle",children:"Gradle"}),"\n",(0,s.jsx)(n.p,{children:"OML models tend to use Gradle to package dependencies and tasks to manipulate and analyze the model."}),"\n",(0,s.jsxs)(n.admonition,{title:"Gradle for Java VSCode Extension",type:"danger",children:[(0,s.jsxs)(n.p,{children:["OML Vision requires the ",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle",children:"Gradle for Java"})," VSCode extension."]}),(0,s.jsxs)(n.p,{children:["Read more installation instructions ",(0,s.jsx)(n.a,{href:"docs/intro#what-youll-need",children:"here"})]})]}),"\n",(0,s.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,s.jsx)(n.admonition,{title:"build.gradle",type:"info",children:(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"build.gradle"})," file (case-sensitive)"]})}),"\n",(0,s.jsxs)(n.p,{children:["In OML Vision, the ",(0,s.jsx)(n.code,{children:"build.gradle"})," file is responsible for:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Defining tasks to run in OML Vision"}),"\n",(0,s.jsxs)(n.li,{children:["Listens on the ",(0,s.jsx)(n.code,{children:"build.gradle"})," file for any changes."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Examples of correctly formatted ",(0,s.jsx)(n.code,{children:"build.gradle"})," files for OML Vision are found here:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/pogi7/kepler16b-example/blob/layout_files/build.gradle",children:"Kepler16b build.gradle"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/UTNAK/open-source-rover/blob/main/build.gradle",children:"Open Source Rover build.gradle"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can read more about ",(0,s.jsx)(n.code,{children:"build.gradle"})," files ",(0,s.jsx)(n.a,{href:"https://docs.gradle.org/current/userguide/build_file_basics.html",children:"here"})]}),"\n",(0,s.jsx)(n.h2,{id:"tasks",children:"Tasks"}),"\n",(0,s.jsx)(n.p,{children:"A task in Gradle refers to some command or program that Gradle executes."}),"\n",(0,s.jsx)(n.p,{children:"Generally OML Vision only requires 5 tasks:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"clean (Removes build folder)"}),"\n",(0,s.jsx)(n.li,{children:"build (Constructs OWL and OML files)"}),"\n",(0,s.jsx)(n.li,{children:"startFuseki (starts RDF triplestore)"}),"\n",(0,s.jsx)(n.li,{children:"owlLoad (Loads OWL data into RDF triplestore)"}),"\n",(0,s.jsx)(n.li,{children:"stopFuseki (stops RDF triplestore)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"vision-group",children:"Vision Group"}),"\n",(0,s.jsxs)(n.p,{children:["OML Vision is asynchronously listening in the ",(0,s.jsx)(n.code,{children:"build.gradle"})," for any changes to the tasks.  OML Vision will display any task in the ",(0,s.jsx)(n.code,{children:"vision"})," group in the sidebar."]}),"\n",(0,s.jsx)(n.admonition,{title:"REGISTERING NEW GRADLE TASKS",type:"note",children:(0,s.jsxs)(n.p,{children:["New tasks will register once you deactivate then reactive OML Vision.  You can do this by clicking the ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/docs/getstarted/userinterface#_explorer",children:"File Explorer"})," then clicking the OML Vision extension icon."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["By default, OML Vision displays the ",(0,s.jsx)(n.code,{children:"clean"})," and ",(0,s.jsx)(n.code,{children:"build"})," tasks.  Those tasks do not need to be within the ",(0,s.jsx)(n.code,{children:"vision"})," Gradle group."]})}),"\n",(0,s.jsxs)(n.admonition,{title:"USER INTERFACE",type:"tip",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"vision"})," gradle corresponds to the ",(0,s.jsx)(n.code,{children:"Setup Tasks"})," section in OML Vision shown in the red boxes."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Gradle Tasks",src:i(5915).Z+"",width:"3680",height:"2252"})})]}),"\n",(0,s.jsx)(n.h3,{id:"running-tasks",children:"Running Tasks"}),"\n",(0,s.jsx)(n.p,{children:"You may run tasks in OML Vision either"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["By clicking the ",(0,s.jsx)(n.code,{children:"Run Task"})," button in the OML Vision extension under the ",(0,s.jsx)(n.code,{children:"Setup Tasks"})," section"]}),"\n",(0,s.jsxs)(n.li,{children:["Running the task using the Gradle wrapper in any terminal.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An example of this would be running ",(0,s.jsx)(n.code,{children:"./gradlew clean"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5915:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/gradleTasks-12f2f089dae86095914c9e0b0b8ca1db.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var s=i(7294);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);