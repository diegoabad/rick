(this["webpackJsonpreact-web"]=this["webpackJsonpreact-web"]||[]).push([[0],{10:function(e,t,a){e.exports={home:"Home_home__1RrHi",nav:"Home_nav__ZW2u_",searchBar:"Home_searchBar__f5bEQ",searchButton:"Home_searchButton__3GuJO",toLanding:"Home_toLanding__pYbmO"}},12:function(e,t,a){e.exports={card:"Card_card__3TeW9",image:"Card_image__3CZY5",divImage:"Card_divImage__2SXhY",info:"Card_info__2s3NC"}},15:function(e,t,a){e.exports={background:"Landing_background__Ax7wN",btn:"Landing_btn__81SWG"}},33:function(e,t,a){e.exports={cards:"Cards_cards__1A59O"}},40:function(e,t,a){},41:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(30),s=a.n(c),r=(a(40),a.p,a(41),a(2)),i=a(18),o=a.n(i),u=a(31),j=a(20),d=a(8),b=a(32),h=a.n(b),m=a(10),l=a.n(m),O=a(33),x=a.n(O),_=a(12),p=a.n(_),f=a(1);function g(e){var t=e.name,a=e.status,n=e.especies,c=e.image;return Object(f.jsxs)("div",{className:p.a.card,children:[Object(f.jsx)("div",{className:p.a.divImage,children:Object(f.jsx)("img",{src:c,className:p.a.image})}),Object(f.jsxs)("div",{className:p.a.info,children:[Object(f.jsx)("h3",{children:t}),Object(f.jsx)("p",{children:"Estatus: ".concat(a)}),Object(f.jsx)("p",{children:"Especie: ".concat(n)})]})]})}function v(e){var t=e.char;return Object(f.jsx)("div",{className:x.a.cards,children:t.map((function(e){return Object(f.jsx)(g,{name:e.name,status:e.status,especies:e.species,image:e.image})}))})}var N=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(j.a)(s,2),i=r[0],b=r[1];function m(){return(m=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://rickandmortyapi.com/api/character");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=function(){return m.apply(this,arguments)}();e.then((function(e){c(e),b(e)}))}),[]),Object(f.jsxs)("div",{className:l.a.home,children:[Object(f.jsxs)("nav",{className:l.a.nav,children:[Object(f.jsx)(d.b,{to:"/",children:Object(f.jsx)("img",{className:l.a.toLanding})}),Object(f.jsx)("input",{type:"text",className:l.a.searchBar,placeholder:"Ingrese su busqueda",onChange:function(e){var t=e.target.value,n=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));b(n)}}),Object(f.jsx)("button",{className:l.a.searchButton,children:Object(f.jsx)("img",{})})]}),Object(f.jsx)(v,{char:i})]})},C=a(15),w=a.n(C);function L(){return Object(f.jsx)("div",{className:w.a.background,children:Object(f.jsx)(d.b,{to:"/home",className:w.a.btn,children:Object(f.jsx)("p",{className:w.a.p,children:"TO HOME"})})})}var B=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(r.c,{children:[Object(f.jsx)(r.a,{exact:!0,path:"/",children:Object(f.jsx)(L,{})}),Object(f.jsx)(r.a,{path:"/home",children:Object(f.jsx)(N,{})})]})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};s.a.render(Object(f.jsx)(d.a,{children:Object(f.jsx)(B,{})}),document.getElementById("root")),k()}},[[67,1,2]]]);
//# sourceMappingURL=main.adb727aa.chunk.js.map