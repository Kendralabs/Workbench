"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[144],{6268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(4848),s=t(8453);const i={title:"Intro to Components",sidebar_position:0,slug:"/components"},c=void 0,a={id:"Components/components",title:"Intro to Components",description:"Component",source:"@site/docs/Components/components.md",sourceDirName:"Components",slug:"/components",permalink:"/components",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Intro to Components",sidebar_position:0,slug:"/components"},sidebar:"defaultSidebar",previous:{title:"Logs",permalink:"/workspace-logs"},next:{title:"Inputs & Outputs",permalink:"/components-io"}},r={},d=[{value:"Component",id:"0323a728d8314767adb907b998036bb4",level:2},{value:"Component Menu",id:"7e3f2f8ff5074b2fb3eee97c9cfaabe7",level:3},{value:"Output Preview",id:"ed7b3c34e0774b8a916b0e68821c9a7a",level:3},{value:"Advanced Settings",id:"b6430d4903df44f0ba4618a558c83d7b",level:3},{value:"Group Components",id:"c3f5ed818e3b40ceb6534dc358e1a5f2",level:3},{value:"Component Version",id:"887fd587589448dc8c27336d1c235b9b",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"0323a728d8314767adb907b998036bb4",children:"Component"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"A\xa0component\xa0is a single building block within a flow. It consists of inputs, outputs, and parameters that define their functionality. These elements provide a convenient and  straightforward way to compose LLM-based applications. Learn more about components and how they work below."}),"\n",(0,o.jsx)(n.p,{children:"During the flow creation process, you will notice handles (colored circles) attached to one or both sides of a component. These handles use distinct colors to indicate the types of inputs and outputs that can be interconnected. Hover over a handle to see connection details."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(6380).A+"",width:"1102",height:"1125"})}),"\n",(0,o.jsxs)(n.p,{children:["On the top right corner of the component, you'll find the a play button to run a component. Once it runs, a status icon appears and you can hover over that to visualize success or error messages. Start interacting with your AI by clicking the\xa0",(0,o.jsx)(n.strong,{children:"Playground"}),"\xa0at the bottom right of the workspace."]}),"\n",(0,o.jsx)(n.h3,{id:"7e3f2f8ff5074b2fb3eee97c9cfaabe7",children:"Component Menu"}),"\n",(0,o.jsx)(n.p,{children:"Each component is unique, but they all have a menu bar at the top that looks something like this."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(2341).A+"",width:"2000",height:"938"})}),"\n",(0,o.jsx)(n.p,{children:"It consists of options such as:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Code"}),"\xa0\u2014 displays the component's Python code. You can modify the code and save it."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Advanced"}),"\xa0\u2014 See and adjust all parameters of a component."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Freeze"}),"\xa0\u2014 After a component runs, lock its previous output state to prevent it from re-running."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Click\xa0",(0,o.jsx)(n.strong,{children:"All"}),'\xa0(the "..." button) to see all options.']}),"\n",(0,o.jsx)(n.h3,{id:"ed7b3c34e0774b8a916b0e68821c9a7a",children:"Output Preview"}),"\n",(0,o.jsx)(n.p,{children:"Langflow includes an output visualizer for components that opens a pop-up screen. This allows you to easily inspect and monitor transmissions between components, providing instant feedback on your workflows."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(4165).A+"",width:"1504",height:"846"})}),"\n",(0,o.jsx)(n.h3,{id:"b6430d4903df44f0ba4618a558c83d7b",children:"Advanced Settings"}),"\n",(0,o.jsxs)(n.p,{children:["Langflow components can be edited by clicking the\xa0",(0,o.jsx)(n.strong,{children:"Advanced Settings"}),"\xa0button."]}),"\n",(0,o.jsxs)(n.p,{children:["Hide parameters with the\xa0",(0,o.jsx)(n.strong,{children:"Show"}),"\xa0button to reduce complexity and keep the workspace clean and intuitive for experimentation."]}),"\n",(0,o.jsx)(n.p,{children:"You can also double-click a component's name and description to modify those. Component descriptions accept markdown syntax."}),"\n",(0,o.jsx)(n.h3,{id:"c3f5ed818e3b40ceb6534dc358e1a5f2",children:"Group Components"}),"\n",(0,o.jsx)(n.p,{children:"Multiple components can be grouped into a single component for reuse. This is useful when combining large flows into single components (like RAG with a vector database, for example) and saving space."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Hold\xa0",(0,o.jsx)(n.strong,{children:"Shift"}),"\xa0and drag to select components."]}),"\n",(0,o.jsxs)(n.li,{children:["Select\xa0",(0,o.jsx)(n.strong,{children:"Group"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"The components merge into a single component."}),"\n",(0,o.jsx)(n.li,{children:"Double-click the name and description to change them."}),"\n",(0,o.jsx)(n.li,{children:"Save your grouped component to in the sidebar for later use!"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"[group video here]"}),"\n",(0,o.jsx)(n.h3,{id:"887fd587589448dc8c27336d1c235b9b",children:"Component Version"}),"\n",(0,o.jsx)(n.p,{children:"A component's state is stored in a database, while sidebar components are like starter templates. As soon as you drag a component from the sidebar to the workspace, the two components are no longer in parity."}),"\n",(0,o.jsxs)(n.p,{children:["The component will keep the version number it was initialized to the workspace with. Click the\xa0",(0,o.jsx)(n.strong,{children:"Update Component"}),"\xa0icon (exclamation mark) to bring the component up to the\xa0",(0,o.jsx)(n.code,{children:"latest"}),"\xa0version. This will change the code of the component in place so you can validate that the component was updated by checking its Python code before and after updating it."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(7258).A+"",width:"1879",height:"1125"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},7258:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/263391508-9ce87f139f7f4bc4a0e174faa80eebc1.png"},6380:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/565424296-c8af2ae30a99ab660ccd3f720e90016b.png"},2341:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/938852908-aeb8a9f6838598e728ec2b80e0d0839d.png"},4165:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/987204819-871c02417b712a9cb7fc5f5df16b597a.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var o=t(6540);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);