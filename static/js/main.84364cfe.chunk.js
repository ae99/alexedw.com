(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e){e.exports=[{company:"Atlassian",role:"Junior Software Engineer Intern",when:[{start:"October 2018",end:"December 2018"}],location:"Sydney, AU",description:"As part of Atlassian's Ecosystems team, I worked to improve the experience of developers across the world through developer.atlassian.com. My role primarily involved the development of React based applications in a modern agile environment.",achievements:["Finalist in internal hackathon \u201cShipIt\u201d, built enhanced    post sprint report into the next generation of Jira.","Made substantial contributions within the team to complete and ship a React & GraphQL based admin page for 3LO grants."]},{company:"Saphi Engineering",role:"Front End Developer",when:[{start:"August 2017",end:"February 2018"},{start:"July 2018",end:"October 2018 (Part Time)"}],location:"Newcastle, AU",description:"At Saphi, I have been part of a fast paced team developing an Angular6 based web application utilising Google Firebase and aggregating data from a number of third party integrations.",achievements:["Gained experience building single page applications with Angular 2+, asynchronous programming with ReactiveX, and utilising Google Cloud Services.","Developed services which pull data from a number of third parties including Github, Stack Overflow and GitLab."]},{company:"Cogesic",role:"Full Stack Developer",when:[{start:"July 2017",end:"February 2018"}],location:"Newcastle, AU",description:"Cogesic is a startup based at the Dantia Smart Hub creating a NodeJS based generative development platform allowing declarative specifications to be used to generate artefacts such as code, business rules, documents, and partial or full applications.",achievements:["Utilised NodeJS to build a large number of server side applications, as well as created a number of React based components for front end use.","Created 15+ new schema based documents for the platform utilising HTML/Sass as well as created a proprietary YAML based markup language for PDF generation in JavaScript.","Gained experience maintaining and working within large codebases and collaborating heavily with other developers."]},{company:"Unreal VR",role:"Web Developer & Technical Support",when:[{start:"May 2017",end:"November 2017"}],location:"Newcastle, AU",description:"Unreal VR is a Virtual Reality company based in Newcastle, serving as a VR Arcade and providing VR services (game development and equipment) to the corporate market.",achievements:["Redesigned Unreal VR\u2019s public facing games listings website, which currently receives an average of 500 visitors per week."]}]},29:function(e){e.exports=[{name:"Task Canary",link:"https://taskcanary.com/",description:"Task Canary (previously QuackList) is a personal project admitted into the Sydney Genesis Startup Program, currently in early development which allows for automatic task scheduling and prioritisation.",technologies:["React, SASS, TypeScript","NodeJS","ExpressJS + Websockets","Digital Ocean Server w/Docker & Dokku +  managed Postgres SQL"]},{name:"Tony Morton Photography",link:"http://tonymortonphotography.com/",description:"A photography site built as a personal portfolio. Fully mobile responsive, automatic image compression & watermarks, categories, pagination and administration area built on a custom CMS.",technologies:["Python Django Web Framework","HTLM5, CSS3/SASS, ECMAScript 6","Savvior JS Multicolumn Layouts","Digital Ocean Apache2 Server w/Postgres SQL"]},{name:"Facebook Hackathon Project",link:"https://github.com/ae99/fb-emoji-posts/",description:"Coming in 2nd Place for Facebook\u2019s 2018 Sydney Hackathon, this project generates animated backgrounds in real time based on Natural Language Processing of your posts content.",technologies:["Angular 6, SASS, TypeScript","Python Flask","Natural Language Processing with NLTK"]}]},35:function(e,n,t){e.exports=t(58)},40:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(13),o=t.n(i),c=(t(40),t(32)),s=t(6),l=t(7),u=t(9),p=t(8),d=t(10),m=t(2),f=t(3),h=t(61);function g(){var e=Object(m.a)(["\n    font-size: 3em;\n    font-weight: 400;\n\n    @media screen and (max-width: 1000px) {\n        font-size: 2em;\n    }\n"]);return g=function(){return e},e}var b=f.a.h1(g()),v=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(b,null,"I'm a developer and student majoring in Computer Science and Data Science at the University of Sydney.")}}]),n}(r.a.Component),y=t(28);function j(){var e=Object(m.a)(["\n    font-family: 'Noto Serif', serif;\n    font-size: 1.125em;\n    padding: 0 1em;\n    line-height: 1.6;\n"]);return j=function(){return e},e}function w(){var e=Object(m.a)(["\n    font-weight: 400;\n    font-size: 1.75em;\n    color: #707070;\n    margin: 0 0 0.5em 0;\n"]);return w=function(){return e},e}function O(){var e=Object(m.a)(["\n    font-size: 0.75em;\n    opacity: 0.8;\n    margin-bottom: 0.5em;\n    padding-left: 0em;\n"]);return O=function(){return e},e}function E(){var e=Object(m.a)(["\n    border-top: 1px solid #DEDEDE;\n    margin: 2em 0;\n"]);return E=function(){return e},e}function S(){var e=Object(m.a)(["\n    border-bottom: 1px solid #DEDEDE;\n    padding: 2em 0;\n"]);return S=function(){return e},e}var k=f.a.div(S()),x=f.a.div(E()),D=f.a.div(O()),A=f.a.h2(w()),C=f.a.p(j()),N=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(x,null,y.map(function(e){return r.a.createElement(k,null,r.a.createElement(A,null,e.company," - ",e.role),r.a.createElement(D,null,e.when.map(function(e,n){return"".concat(e.start," - ").concat(e.end)}).join(" & ")),r.a.createElement(C,null,e.description),r.a.createElement(C,null,r.a.createElement("ul",null,e.achievements.map(function(e,n){return r.a.createElement("li",{key:n},e)}))))}))}}]),n}(r.a.Component),L=t(29);function P(){var e=Object(m.a)(["\n    font-family: 'Noto Serif', serif;\n    font-size: 1.125em;\n    padding: 0 1em;\n    line-height: 1.6;\n"]);return P=function(){return e},e}function F(){var e=Object(m.a)(["\n    font-weight: 400;\n    font-size: 1.75em;\n    color: #707070;\n    margin: 0 0 0.5em 0;\n"]);return F=function(){return e},e}function J(){var e=Object(m.a)(["\n    font-size: 0.75em;\n    opacity: 0.8;\n    margin-bottom: 0.5em;\n    padding-left: 0em;\n"]);return J=function(){return e},e}function M(){var e=Object(m.a)(["\n    border-top: 1px solid #DEDEDE;\n    margin: 2em 0;\n    column-count: 2;\n"]);return M=function(){return e},e}function R(){var e=Object(m.a)(["\n    border-bottom: 1px solid #DEDEDE;\n    padding: 2em 0;\n    break-after: region;\n"]);return R=function(){return e},e}var T=f.a.div(R()),I=f.a.div(M()),U=(f.a.div(J()),f.a.h2(F())),z=f.a.p(P()),G=[{path:"/",component:v,exact:!0,heading:"Alexander Edwards",bold:!0},{path:"/experience/",component:N,heading:"Experience"},{path:"/projects/",component:function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(I,null,L.map(function(e){return r.a.createElement(T,null,r.a.createElement(U,null,e.name),r.a.createElement("a",{href:e.link},e.link),r.a.createElement(z,null,e.description),r.a.createElement(z,null,r.a.createElement("ul",null,e.technologies.map(function(e,n){return r.a.createElement("li",{key:n},e)}))))}))}}]),n}(r.a.Component),heading:"Projects"}];function H(){var e=Object(m.a)(["\n        text-decoration: none;\n        color: #707070;\n        display: inline;\n\n        transition: color 100ms;\n        &.active {\n            color: #094C72;\n        }\n        padding-right: 2rem;\n\n        @media screen and (max-width: 1000px) {\n            padding: 0.5rem;\n        }\n\n    "]);return H=function(){return e},e}function V(){var e=Object(m.a)(["\n        font-family: 'Open Sans', sans-serif;\n        padding: 3rem 0;\n\n        @media screen and (max-width: 1000px) {\n            text-align: center;\n        }\n    "]);return V=function(){return e},e}var W=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(n.Header,null,G.map(function(e,t){if(e.heading)return e.bold?r.a.createElement(n.Item,{to:e.path,key:t,activeClassName:"active-disabled",exact:!0},r.a.createElement("b",null,e.heading.replace(/ /g,"\xa0")+" ")):r.a.createElement(n.Item,{to:e.path,key:t,activeClassName:"active"},e.heading.replace(/ /g,"\xa0")+" ")}))}}]),n}(r.a.Component);function Q(){var e=Object(m.a)(["\n        margin: auto;\n        max-width: 1050px;\n\n        @media screen and (max-width: 1100px) {\n            padding: 0 1em;\n        }\n    "]);return Q=function(){return e},e}W.Header=f.a.div(V()),W.Item=Object(f.a)(h.a)(H());var B=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(n.Main,null,r.a.createElement(W,null),this.props.children)}}]),n}(r.a.Component);B.Main=f.a.div(Q());var Y=t(60),q=t(59),K=t(22);function X(){var e=Object(m.a)(["\n  position: relative;\n  & > div {\n    position: absolute;\n    width: 100%;\n    padding-bottom: 3rem;\n  }\n"]);return X=function(){return e},e}var $=Object(f.a)(K.a)(X());function Z(e){return Object(K.b)(e,{stiffness:135,damping:15})}var _={atEnter:{opacity:0,offset:-50},atLeave:{opacity:0,offset:Z(50)},atActive:{opacity:1,offset:Z(0)}};function ee(e){return{opacity:e.opacity,transform:"translateY(".concat(e.offset,"px)")}}var ne=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(Y.a,{basename:""},r.a.createElement(B,null,r.a.createElement($,Object.assign({},_,{mapStyles:ee}),G.map(function(e){var n=Object(c.a)({},e,{bold:void 0,heading:void 0});return r.a.createElement(q.a,n)}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.84364cfe.chunk.js.map