(this.webpackJsonpantelolive=this.webpackJsonpantelolive||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(14),a=n.n(r),i=(n(20),n(21),n(5)),o=n(2),u=n(7),j=n(1),l=function(){var e=s.a.useState([]),t=Object(u.a)(e,2),n=t[0],c=t[1];return s.a.useEffect((function(){fetch("https://dev.to/api/articles?username=fwuensche").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{src:"https://avatars.githubusercontent.com/u/1740848?s=460&u=92755565c64e1972eebc04a505ccc98372d461b8&v=4",className:"App-logo",alt:"logo"}),Object(j.jsx)("p",{children:"Antelo Live"}),n.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(i.b,{className:"App-link",to:"posts/".concat(e.id),children:e.title})})}))]})},h=function(){var e=Object(o.f)().id,t=s.a.useState([]),n=Object(u.a)(t,2),c=n[0],r=n[1];return s.a.useEffect((function(){(function(e){return fetch("https://dev.to/api/articles/".concat(e)).then((function(e){return e.json()}))})(e).then((function(e){return r(e)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i.b,{to:"/",children:"Back"}),Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:c.body_html}})]})},b=function(){return Object(j.jsx)(i.a,{basename:"/antelolive",children:Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(l,{})}}),Object(j.jsx)(o.a,{path:"/posts/:id",children:Object(j.jsx)(h,{})})]})})})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),d()}},[[28,1,2]]]);
//# sourceMappingURL=main.8e64983b.chunk.js.map