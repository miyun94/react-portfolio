(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(18),r=c.n(i),o=(c(24),c(25),c.p+"static/media/20201130_143132_952.b478da00.jpg"),s=c(0);var l=function(){return Object(s.jsxs)("section",{className:"my-5",children:[Object(s.jsx)("h1",{id:"about",children:"About Me"}),Object(s.jsx)("img",{src:o,className:"my-2",style:{width:"5%"},alt:"cover image"}),Object(s.jsx)("div",{className:"my-2",children:Object(s.jsx)("p",{children:"I am a full stack web-developer in the process. In my freetime, I like to practice and further my coding skills by tackling on new projects or going over old lesson plans from my time at UCLA's Full Stack Web Development Program."})})]})},j=c(7);var d=function(){return Object(s.jsxs)("header",{className:"flex-row px-1",children:[Object(s.jsx)("h2",{children:"My Portfolio"}),Object(s.jsx)("nav",{children:Object(s.jsxs)("ul",{className:"flex-row",children:[Object(s.jsx)("li",{className:"mx-2",children:Object(s.jsx)(j.b,{to:"/react-portfolio/about",children:"About"})}),Object(s.jsx)("li",{className:"mx-2",children:Object(s.jsx)(j.b,{to:"/react-portfolio/portfolio",children:"Portfolio"})}),Object(s.jsx)("li",{className:"mx-2",children:Object(s.jsx)(j.b,{to:"/react-portfolio/contact",children:"Contact"})}),Object(s.jsx)("li",{className:"mx-2",children:Object(s.jsx)(j.b,{to:"/react-portfolio/resume",children:"Resume"})})]})})]})},b=c(2),h=c(11),m=c(16),u=c(10);var p=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),r=Object(u.a)(i,2),o=r[0],l=r[1],j=c.name,d=c.email,b=c.message,p=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);l(t?"":"Your email is invalid.")}else e.target.value.length?l(""):l("".concat(e.target.name," is required."));o||(a(Object(m.a)(Object(m.a)({},c),{},Object(h.a)({},e.target.name,e.target.value))),console.log("Handle Form",c))};return Object(s.jsxs)("section",{children:[Object(s.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(s.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",c)},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(s.jsx)("input",{type:"text",name:"name",defaultValue:j,onBlur:p})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(s.jsx)("input",{type:"email",name:"email",defaultValue:d,onBlur:p})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(s.jsx)("textarea",{name:"message",rows:"5",defaultValue:b,onBlur:p})]}),o&&Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"error-text",children:o})}),Object(s.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})},g=c.p+"static/media/0.4d5fd389.png",O=c.p+"static/media/1.126785b7.png",x=c.p+"static/media/2.45c5f7a3.png",f=c.p+"static/media/3.ed5e330a.png",k=c.p+"static/media/4.6a8b7ebd.png",v=c.p+"static/media/5.12953006.png",A=c.p+"static/media/6.19b7e0e9.png";var y=function(){var e=Object(n.useState)([{name:"Work Day Scheduler",deployedLink:"https://miyun94.github.io/scheduler/",github:"https://github.com/miyun94/scheduler",imageLink:g},{name:"Budget Tracker",deployedLink:"https://budgettracker042521.herokuapp.com/",github:"https://github.com/miyun94/budget-tracker",imageLink:O},{name:"Book Search",deployedLink:"https://salty-spire-75874.herokuapp.com/",github:"https://github.com/miyun94/book-search-engine",imageLink:x},{name:"Note Taker",deployedLink:"https://github.com/miyun94/note-taker",github:"https://github.com/miyun94/note-taker",imageLink:f},{name:"Event Planner",deployedLink:"https://jcc83267.github.io/Event-Planner/",github:"https://github.com/jcc83267/Event-Planner",imageLink:k},{name:"Flowers Dating App",deployedLink:" https://send-flowers.herokuapp.com",github:"https://github.com/matt-gross-27/flowers",imageLink:v},{name:"Memonto",deployedLink:"https://rocky-shelf-98146.herokuapp.com/",github:"https://github.com/davevebber/memonto",imageLink:A}]),t=Object(u.a)(e,1)[0],c=t.map((function(e,t){return Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{}),Object(s.jsxs)("span",{children:[Object(s.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",children:Object(s.jsx)("img",{src:"data:image/png;base64,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",style:{width:"3%"}})}),Object(s.jsx)("a",{href:"".concat(e.deployedLink),target:"_blank",rel:"noreferrer",children:e.name}),Object(s.jsx)("div",{className:"backgroundImage",style:{backgroundImage:"url(".concat(e.imageLink,")")},onClick:function(){return window.open("".concat(e.deployedLink),"_blank")},children:Object(s.jsx)("br",{})})]}),Object(s.jsx)("br",{})]})}));return console.log(t[1].name),Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Portfolio"}),Object(s.jsx)("div",{children:c})]})};var w=function(){return Object(s.jsxs)("section",{id:"resume",children:[Object(s.jsx)("h1",{children:"RESUME"}),Object(s.jsx)("h2",{children:"Links"}),Object(s.jsx)("a",{href:"https://docs.google.com/document/d/17cqdUGRJgH6Zhmm9M5O9rIyjbHHOb0nOu_N_2RlB9r4/edit?usp=sharing",target:"_blank",rel:"noreferrer",children:"Resume Link"}),Object(s.jsx)("h2",{children:"Front-end Proficiencies"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"HTML"}),Object(s.jsx)("li",{children:"CSS"}),Object(s.jsx)("li",{children:"Javascript"}),Object(s.jsx)("li",{children:"React"}),Object(s.jsx)("li",{children:"Bootstrap"})]}),Object(s.jsx)("h2",{children:"Back-end Proficiencies"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Node"}),Object(s.jsx)("li",{children:"Express"}),Object(s.jsx)("li",{children:"MySql, Sequelize"}),Object(s.jsx)("li",{children:"MongoDB, Mongoose"}),Object(s.jsx)("li",{children:"GraphQL"})]})]})};var L=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)(d,{}),Object(s.jsx)("main",{children:Object(s.jsxs)(b.c,{children:[Object(s.jsx)(b.a,{exact:!0,path:"/react-portfolio/",component:l}),Object(s.jsx)(b.a,{exact:!0,path:"/react-portfolio/about",component:l}),Object(s.jsx)(b.a,{exact:!0,path:"/react-portfolio/contact",component:p}),Object(s.jsx)(b.a,{exact:!0,path:"/react-portfolio/portfolio",component:y}),Object(s.jsx)(b.a,{exact:!0,path:"/react-portfolio/resume",component:w})]})})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root")),N()}},[[32,1,2]]]);
//# sourceMappingURL=main.2ca8c560.chunk.js.map