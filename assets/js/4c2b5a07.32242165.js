"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[5341],{8462:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var s=i(5893),l=i(1151);const o={sidebar_position:1},t="Get Started",a={id:"intro",title:"Get Started",description:"Let's discover OML Vision in less than 5 minutes.",source:"@site/versioned_docs/version-v0.2.5/intro.md",sourceDirName:".",slug:"/intro",permalink:"/oml-vision-docs/docs/v0.2.5/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/opencaesar/oml-vision-docs/tree/master/versioned_docs/version-v0.2.5/intro.md",tags:[],version:"v0.2.5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"API Documentation",permalink:"/oml-vision-docs/docs/v0.2.5/category/api-documentation"}},d={},r=[{value:"Getting Started",id:"getting-started",level:2},{value:"VSCode Terminology (Optional)",id:"vscode-terminology-optional",level:3},{value:"Install OML Vision",id:"install-oml-vision",level:3},{value:"VSCode Marketplace (Automatic Installation)",id:"vscode-marketplace-automatic-installation",level:4},{value:"VSIX File (Manual Installation)",id:"vsix-file-manual-installation",level:4},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Windows",id:"windows",level:4},{value:"macOS",id:"macos",level:4},{value:"Load OML Model Data",id:"load-oml-model-data",level:2},{value:"Start from Scratch",id:"start-from-scratch",level:3},{value:"Use existing OML model",id:"use-existing-oml-model",level:3},{value:"Start OML Vision",id:"start-oml-vision",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"get-started",children:"Get Started"}),"\n",(0,s.jsxs)(n.p,{children:["Let's discover ",(0,s.jsx)(n.strong,{children:"OML Vision in less than 5 minutes"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(n.h3,{id:"vscode-terminology-optional",children:"VSCode Terminology (Optional)"}),"\n",(0,s.jsx)(n.admonition,{title:"VSCode Terminology",type:"tip",children:(0,s.jsxs)(n.p,{children:["While not required, it is recommended to read the documentation on VSCode terminology as it will be referenced heavily.  Read more ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/docs/getstarted/userinterface",children:"here"})]})}),"\n",(0,s.jsx)(n.h3,{id:"install-oml-vision",children:"Install OML Vision"}),"\n",(0,s.jsx)(n.h4,{id:"vscode-marketplace-automatic-installation",children:"VSCode Marketplace (Automatic Installation)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Go to VSCode Marketplace and install the extension from there."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"vsix-file-manual-installation",children:"VSIX File (Manual Installation)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to latest release of ",(0,s.jsx)(n.a,{href:"https://github.com/opencaesar/oml-vision/releases/latest",children:"OML Vision"})]}),"\n",(0,s.jsx)(n.li,{children:"Download the VSIX file"}),"\n",(0,s.jsxs)(n.li,{children:["Install the OML Vision extension using the downloaded VSIX file.  Helpful guide ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix",children:"here"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"what-youll-need",children:"What you'll need"}),"\n",(0,s.jsx)(n.h4,{id:"windows",children:"Windows"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Install scoop ",(0,s.jsx)(n.a,{href:"https://scoop.sh/#/",children:"https://scoop.sh/#/"})]}),"\n",(0,s.jsxs)(n.li,{children:["Use scoop to install ",(0,s.jsx)(n.code,{children:"git"}),", ",(0,s.jsx)(n.code,{children:"nodejs"}),", ",(0,s.jsx)(n.code,{children:"nvm"}),", ",(0,s.jsx)(n.code,{children:"yarn"}),", ",(0,s.jsx)(n.code,{children:"java17"})," and ",(0,s.jsx)(n.code,{children:"visual studio code"})," if not already installed."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"scoop bucket add main\nscoop bucket add extras\nscoop bucket add java\nscoop install main/git\nscoop install main/nodejs\nscoop install main/nvm\nscoop install main/yarn\nscoop install java/openjdk17\nscoop install extras/vscode\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["The version of VSCode must be at ",(0,s.jsx)(n.code,{children:"1.78.2"})," or newer."]}),"\n",(0,s.jsx)(n.li,{children:"Install the following VSCode extensions if not already installed"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"code --install-extension vscjava.vscode-java-pack\ncode --install-extension vscjava.vscode-gradle\n"})}),"\n",(0,s.jsx)(n.h4,{id:"macos",children:"macOS"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Install homebrew ",(0,s.jsx)(n.a,{href:"https://brew.sh",children:"https://brew.sh"})]}),"\n",(0,s.jsxs)(n.li,{children:["Use scoop to install ",(0,s.jsx)(n.code,{children:"git"}),", ",(0,s.jsx)(n.code,{children:"nodejs"}),", ",(0,s.jsx)(n.code,{children:"nvm"}),", ",(0,s.jsx)(n.code,{children:"yarn"})," and ",(0,s.jsx)(n.code,{children:"visual studio code"})," if not already installed."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install git\nbrew install nodejs\nbrew install nvm\nbrew install yarn\nbrew install openjdk@17\nbrew install --cask visual-studio-code\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["The version of VSCode must be at ",(0,s.jsx)(n.code,{children:"1.78.2"})," or newer."]}),"\n",(0,s.jsx)(n.li,{children:"Install the following VSCode extensions"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"code --install-extension vscjava.vscode-java-pack\ncode --install-extension vscjava.vscode-gradle\n"})}),"\n",(0,s.jsx)(n.h2,{id:"load-oml-model-data",children:"Load OML Model Data"}),"\n",(0,s.jsx)(n.p,{children:"OML Vision is designed to work with OML (Ontological Modeling Language) models."}),"\n",(0,s.jsx)(n.h3,{id:"start-from-scratch",children:"Start from Scratch"}),"\n",(0,s.jsxs)(n.p,{children:["Tutorials on how to create an OML model from scratch can be found ",(0,s.jsx)(n.a,{href:"https://www.opencaesar.io/oml-tutorials/",children:"here"})]}),"\n",(0,s.jsx)(n.admonition,{title:"No OML Vision viewpoints defined in above tutorial",type:"danger",children:(0,s.jsxs)(n.p,{children:["OML Vision works with viewpoints which will be covered in ",(0,s.jsx)(n.code,{children:"Layouts"})," found ",(0,s.jsx)(n.a,{href:"/docs/v0.2.5/category/layouts",children:"here"})]})}),"\n",(0,s.jsx)(n.h3,{id:"use-existing-oml-model",children:"Use existing OML model"}),"\n",(0,s.jsx)(n.p,{children:"If you want to see the capabilities of OML Vision without creating your own OML model you may use one of the following OML models:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/pogi7/kepler16b-example/tree/main",children:"Kepler16b"}),": A hypothetical spacecraft that will explore the ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Kepler-16b",children:"Kepler16b exoplanet"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/UTNAK/open-source-rover/tree/main",children:"Open Source Rover"}),": A descriptive model of the ",(0,s.jsx)(n.a,{href:"https://github.com/nasa-jpl/open-source-rover/tree/master",children:"JPL Open Source Rover"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click the eye icon in the sidebar which will activate the OML Vision extension"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Your screen should look like this\n",(0,s.jsx)(n.img,{alt:"Unopened Workspace",src:i(7803).Z+"",width:"3680",height:"2252"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.code,{children:"Clone OML Model"})," and enter in this URL ",(0,s.jsx)(n.a,{href:"https://github.com/pogi7/kepler16b-example.git",children:"https://github.com/pogi7/kepler16b-example.git"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"Command Line Interface",type:"tip",children:[(0,s.jsx)(n.p,{children:"You can also run this command from the command line using"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/pogi7/kepler16b-example.git\n"})})]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Open the kepler16b-example OML model in VSCode"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"start-oml-vision",children:"Start OML Vision"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Your screen should look like this\n",(0,s.jsx)(n.img,{alt:"Entry Point",src:i(1488).Z+"",width:"4064",height:"2334"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click the eye icon in the sidebar which will activate the OML Vision extension"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Your screen should look like this\n",(0,s.jsx)(n.img,{alt:"Activate Extension",src:i(4993).Z+"",width:"4064",height:"2334"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Data must be loaded into the in-memory RDF triplestore for OML Vision to render views"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.code,{children:"Run clean"})," (This will clear the cache i.e.delete the build folder)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"Command Line Interface",type:"tip",children:[(0,s.jsx)(n.p,{children:"You can also run this command from the command line using"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"./gradlew clean\n"})}),(0,s.jsxs)(n.p,{children:["Look in the ",(0,s.jsx)(n.a,{href:"https://github.com/pogi7/kepler16b-example/blob/layouts/build.gradle",children:"build.gradle"})," file for a list of commands"]})]}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Run owlLoad"})," (This will load data into the in-memory RDF triplestore)"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"Command Line Interface",type:"tip",children:[(0,s.jsx)(n.p,{children:"You can also run this command from the command line using"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"./gradlew owlLoad\n"})}),(0,s.jsxs)(n.p,{children:["Look in the ",(0,s.jsx)(n.a,{href:"https://github.com/pogi7/kepler16b-example/blob/layouts/build.gradle",children:"build.gradle"})," file for a list of commands"]})]}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Objectives"})]}),"\n",(0,s.jsxs)(n.li,{children:["Your screen should look like this\n",(0,s.jsx)(n.img,{alt:"Objectives Table",src:i(9408).Z+"",width:"3680",height:"2252"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4993:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/activateExtension-c9be59e9484bb0f61db2ec5e2bf87994.png"},1488:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/entryPoint-b23252efcf22e8652d677aceeac537f3.png"},9408:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/objectivesTable-3b3c6ac9776b3931528b9b9c76ecc096.png"},7803:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/unopenedWorkspace-a77f6d3fbc2224c4c31019e665843db5.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>t});var s=i(7294);const l={},o=s.createContext(l);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);