(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e){e.exports=[{company:"Atlassian",role:"Junior Software Engineer Intern",when:[{start:"October 2018",end:"December 2018"}],location:"Sydney, AU",description:"As part of Atlassian's Ecosystems team, I worked to improve the experience of developers across the world through developer.atlassian.com. My role primarily involved the development of React based applications in a modern agile environment.",achievements:["Finalist in internal hackathon \u201cShipIt\u201d, built enhanced post sprint report into the next generation of Jira.","Made substantial contributions within the team to complete and ship a React & GraphQL based admin page for 3LO grants."]},{company:"Saphi Engineering",role:"Front End Developer",when:[{start:"August 2017",end:"February 2018"},{start:"July 2018",end:"October 2018 (Part Time)"}],location:"Newcastle, AU",description:"At Saphi, I have been part of a fast paced team developing an Angular6 based web application utilising Google Firebase and aggregating data from a number of third party integrations.",achievements:["Gained experience building single page applications with Angular 2+, asynchronous programming with ReactiveX, and utilising Google Cloud Services.","Developed services which pull data from a number of third parties including Github and Stack Overflow."]},{company:"Cogesic",role:"Full Stack Developer",when:[{start:"July 2017",end:"February 2018"}],location:"Newcastle, AU",description:"Cogesic is a startup based at the Dantia Smart Hub creating a NodeJS based generative development platform allowing declarative specifications to be used to generate artefacts such as code, business rules, documents, and partial or full applications.",achievements:["Utilised NodeJS to build a large number of server side applications, as well as created a number of React based components for front end use.","Created 15+ new schema based documents for the platform utilising HTML/Sass as well as created a proprietary YAML based markup language for PDF generation in JavaScript.","Gained experience maintaining and working within large codebases and collaborating heavily with other developers."]},{company:"Unreal VR",role:"Web Developer & Technical Support",when:[{start:"May 2017",end:"November 2017"}],location:"Newcastle, AU",description:"Unreal VR is a Virtual Reality company based in Newcastle, serving as a VR Arcade and providing VR services (game development and equipment) to the corporate market.",achievements:["Redesigned Unreal VR\u2019s public facing games listings website, which currently receives an average of 500 visitors per week.","Acted as part of the team responsible for overseeing the daily operations at Unreal VR."]}]},34:function(e,n,t){e.exports=t(57)},39:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(13),o=t.n(i),c=(t(39),t(31)),s=t(7),l=t(8),u=t(10),d=t(9),p=t(11),m=t(3),f=t(4),h=t(60);function b(){var e=Object(m.a)(["\n    font-size: 3em;\n    font-weight: 400;\n\n    @media screen and (max-width: 1000px) {\n        font-size: 2em;\n    }\n"]);return b=function(){return e},e}var v=f.a.h1(b()),g=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(v,null,"I'm a developer and student majoring in Computer Science and Data Science at the University of Sydney.")}}]),n}(r.a.Component),y=t(28);function w(){var e=Object(m.a)(["\n    font-family: 'Noto Serif', serif;\n    font-size: 1.125em;\n    padding: 0 1em;\n    line-height: 1.6;\n"]);return w=function(){return e},e}function O(){var e=Object(m.a)(["\n    font-weight: 400;\n    font-size: 1.75em;\n    color: #707070;\n    margin: 0 0 0.5em 0;\n"]);return O=function(){return e},e}function j(){var e=Object(m.a)(["\n    font-size: 0.75em;\n    opacity: 0.8;\n    margin-bottom: 0.5em;\n    padding-left: 0em;\n"]);return j=function(){return e},e}function E(){var e=Object(m.a)(["\n    border-top: 1px solid #DEDEDE;\n    margin: 2em 0;\n"]);return E=function(){return e},e}function x(){var e=Object(m.a)(["\n    border-bottom: 1px solid #DEDEDE;\n    padding: 2em 0;\n"]);return x=function(){return e},e}var k=f.a.div(x()),S=f.a.div(E()),A=f.a.div(j()),D=f.a.h2(O()),C=f.a.p(w()),R=[{path:"/",component:g,exact:!0,heading:"Alexander Edwards",bold:!0},{path:"/experience/",component:function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(S,null,y.map(function(e){return r.a.createElement(k,null,r.a.createElement(D,null,e.company," - ",e.role),r.a.createElement(A,null,e.when.map(function(e,n){return"".concat(e.start," - ").concat(e.end)}).join(" & ")),r.a.createElement(C,null,e.description),r.a.createElement(C,null,r.a.createElement("ul",null,e.achievements.map(function(e,n){return r.a.createElement("li",{key:n},e)}))))}))}}]),n}(r.a.Component),heading:"Experience"}];function N(){var e=Object(m.a)(["\n        text-decoration: none;\n        color: #707070;\n        display: inline;\n\n        transition: color 100ms;\n        &.active {\n            color: #094C72;\n        }\n        padding-right: 2rem;\n\n        @media screen and (max-width: 1000px) {\n            padding: 0.5rem;\n        }\n\n    "]);return N=function(){return e},e}function U(){var e=Object(m.a)(["\n        font-family: 'Open Sans', sans-serif;\n        padding: 3rem 0;\n\n        @media screen and (max-width: 1000px) {\n            text-align: center;\n        }\n    "]);return U=function(){return e},e}var I=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(n.Header,null,R.map(function(e,t){if(e.heading)return e.bold?r.a.createElement(n.Item,{to:e.path,key:t,activeClassName:"active-disabled",exact:!0},r.a.createElement("b",null,e.heading.replace(/ /g,"\xa0")+" ")):r.a.createElement(n.Item,{to:e.path,key:t,activeClassName:"active"},e.heading.replace(/ /g,"\xa0")+" ")}))}}]),n}(r.a.Component);function J(){var e=Object(m.a)(["\n        margin: auto;\n        max-width: 1050px;\n\n        @media screen and (max-width: 1100px) {\n            padding: 0 1em;\n        }\n    "]);return J=function(){return e},e}I.Header=f.a.div(U()),I.Item=Object(f.a)(h.a)(N());var F=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(n.Main,null,r.a.createElement(I,null),this.props.children)}}]),n}(r.a.Component);F.Main=f.a.div(J());var M=t(59),V=t(58),G=t(22);function z(){var e=Object(m.a)(["\n  position: relative;\n  & > div {\n    position: absolute;\n    width: 100%;\n    padding-bottom: 3rem;\n  }\n"]);return z=function(){return e},e}var L=Object(f.a)(G.a)(z());function H(e){return Object(G.b)(e,{stiffness:135,damping:15})}var T={atEnter:{opacity:0,offset:-50},atLeave:{opacity:0,offset:H(50)},atActive:{opacity:1,offset:H(0)}};function W(e){return{opacity:e.opacity,transform:"translateY(".concat(e.offset,"px)")}}var B=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(M.a,null,r.a.createElement(F,null,r.a.createElement(L,Object.assign({},T,{mapStyles:W}),R.map(function(e){var n=Object(c.a)({},e,{bold:void 0,heading:void 0});return r.a.createElement(V.a,n)}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,2,1]]]);
//# sourceMappingURL=main.5f80a0ac.chunk.js.map