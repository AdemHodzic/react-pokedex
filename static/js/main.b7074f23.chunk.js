(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),u=(n(88),n(89),n(164)),i=n(165),l=n(11),s=n.n(l),f=n(17),m=n(13),p=n(7),d=n(31),b=n.n(d),h=n(21),v=n.n(h),E=n(162),g=n(8);n(92);function x(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return x=function(){return e},e}function j(){var e=Object(p.a)(["\n  background-color: #007bff;\n  &:hover {\n    background-color: #ffffff;\n    "," {\n      text-decoration: 'none';\n      color: #007bff;\n    }\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(p.a)(["\n  text-decoration: 'none';\n  color: #ffffff;\n"]);return O=function(){return e},e}var w=Object(g.a)(E.a)(O()),y=Object(g.a)(v.a)(j(),w),k=g.a.div(x()),C=function(e){var t=e.name.charAt(0).toUpperCase()+e.name.slice(1),n="/pokemons/".concat(e.id);return r.a.createElement(b.a,{style:{width:"18rem",margin:"1rem",color:"#ffffff",backgroundColor:"#1a1a1a"}},r.a.createElement(b.a.Img,{variant:"top",src:e.image}),r.a.createElement(b.a.Body,null,r.a.createElement(k,null,r.a.createElement(b.a.Title,null,t),r.a.createElement(y,{variant:"primary"},r.a.createElement(w,{to:n,style:{textDecoration:"none"}},"Details")))))};function S(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return S=function(){return e},e}function I(){var e=Object(p.a)(["\n  object-fit: contain;\n  height: 91.5vh;\n  width: 100%;\n"]);return I=function(){return e},e}var D=g.a.img(I()),P=g.a.div(S()),_=function(e){var t=e.success?n(98):n(99);return r.a.createElement(P,null,r.a.createElement(D,{src:t,alt:"Loading..."}))},W=n(74),z=n.n(W),G=n(75),B=n.n(G),A=n(22),L=n.n(A),N=r.a.createContext({auth:!1,user:null,error:null,logIn:function(e,t){},register:function(e,t){},logOut:function(){}}),T=function(e){var t="https://pokedex-232720.appspot.com",n=Object(a.useState)(!1),c=Object(m.a)(n,2),o=c[0],u=c[1],i=Object(a.useState)(null),l=Object(m.a)(i,2),p=l[0],d=l[1],b=Object(a.useState)(null),h=Object(m.a)(b,2),v=h[0],E=h[1];Object(a.useEffect)(function(){var e=localStorage.getItem("auth"),t=localStorage.getItem("user");u(e),d(t)},[]);var g=function(){var e=Object(f.a)(s.a.mark(function e(n,a){var r,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.post(t+"/login",{name:n,password:a});case 3:if(200===(r=e.sent).status){e.next=6;break}throw new Error(r.data.error);case 6:return e.next=8,r.data;case 8:c=e.sent,d(c.user),u(c.auth),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),E(e.t0),u(!1);case 17:case"end":return e.stop()}},e,null,[[0,13]])}));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(f.a)(s.a.mark(function e(n,a){var r,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.post(t+"/register",{name:n,password:a});case 3:if(200===(r=e.sent).status){e.next=6;break}throw new Error(r.data.error);case 6:return e.next=8,r.data;case 8:c=e.sent,d(c.user),u(c.auth),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),E(e.t0),u(!1);case 17:case"end":return e.stop()}},e,null,[[0,13]])}));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(f.a)(s.a.mark(function e(){var n,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get(t+"/logout");case 2:return n=e.sent,e.next=5,n.data;case 5:a=e.sent,d(a.user),u(a.auth);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(N.Provider,{value:{auth:o,user:p,error:v,logIn:g,register:x,logOut:j},style:{height:"100%"}},e.children)},U=n(166),J=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!0),u=Object(m.a)(o,2),i=u[0],l=u[1],p=Object(a.useState)(!1),d=Object(m.a)(p,2),b=d[0],h=d[1],v=Object(a.useContext)(N),E=function(){var e=Object(f.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L()("https://pokedex-232720.appspot.com/pokemons");case 3:t=e.sent,c(t.data.map(function(e){return r.a.createElement(C,{key:e.id,id:e.id,name:e.name,image:"http://"+e.image})})),l(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),h(!0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){E()},[]),v.auth?b?r.a.createElement(_,{success:!1}):i?r.a.createElement(_,{success:!0}):r.a.createElement(z.a,null,r.a.createElement(B.a,null,n)):r.a.createElement(U.a,{to:"/auth"})},F=n(78),H=n.n(F),M=n(48),R=n.n(M),$=n(32),q=n.n($),K=n(76),Q=n(77);function V(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return V=function(){return e},e}function X(){var e=Object(p.a)(["\n  text-decoration: 'none';\n  color: #ffffff;\n  transition: 0.1s;\n  &:hover {\n    text-decoration: 'none';\n    color: #007bff;\n  }\n"]);return X=function(){return e},e}var Y=Object(g.a)(E.a)(X()),Z=Object(g.a)(H.a)(V()),ee=function(){var e=Object(a.useContext)(N),t=function(){var t=Object(f.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.logOut();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement(Z,{bg:"dark",expand:"lg"},r.a.createElement(R.a,null,r.a.createElement(Y,{to:"/",style:{textDecoration:"none"}},"Pokedex")),e.auth?r.a.createElement(q.a,{drop:"left"},r.a.createElement(q.a.Toggle,null,r.a.createElement(K.a,{icon:Q.a})),r.a.createElement(q.a.Menu,null,r.a.createElement(q.a.Item,{onClick:t},"Log Out"))):r.a.createElement("span",null))},te=n(80),ne=n.n(te),ae=n(81),re=n.n(ae),ce=n(28),oe=n.n(ce);function ue(){var e=Object(p.a)(["\n  text-decoration: 'none';\n  color: #ffffff;\n  transition: 0.1s;\n  &:hover {\n    text-decoration: 'none';\n    color: #000000;\n  }\n"]);return ue=function(){return e},e}function ie(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ie=function(){return e},e}function le(){var e=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"]);return le=function(){return e},e}function se(){var e=Object(p.a)(["\n  width: 40%;\n  margin-top: 2%;\n  @media screen and (max-width: 630px) {\n    width: 90%;\n  }\n"]);return se=function(){return e},e}var fe=Object(g.a)(ne.a)(se()),me=g.a.thead(le()),pe=g.a.div(ie()),de=Object(g.a)(E.a)(ue()),be=function(e){var t,n,c=e.match.params.id,o="https://pokeapi.co/api/v2/pokemon/".concat(c),u=Object(a.useState)(null),i=Object(m.a)(u,2),l=i[0],p=i[1],d=Object(a.useState)(!0),b=Object(m.a)(d,2),h=b[0],E=b[1],g=Object(a.useContext)(N),x=function(){var e=Object(f.a)(s.a.mark(function e(){var t,n,a,r,c,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get(o);case 2:return t=e.sent,e.next=5,t.data;case 5:n=e.sent,a=n.moves.map(function(e){return e.move.name.replace("-"," ")}),r=n.stats.map(function(e){return{name:e.stat.name,base:e.base_stat}}),c=n.types.map(function(e){return e.type.name}),u={experience:n.base_experience,moves:a,name:n.name,stats:r,types:c,weight:n.weight,image:n.sprites.front_default},p(u),E(!1);case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){x()},[]),g.auth?h?r.a.createElement(_,{success:!0}):(t=l.stats.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.base))}),n=l.types.map(function(e){switch(e){case"fire":return r.a.createElement(oe.a,{variant:"danger",style:{margin:"2%"}},e);case"grass":case"bug":return r.a.createElement(oe.a,{variant:"success",style:{margin:"2%"}},e);case"water":case"ice":return r.a.createElement(oe.a,{variant:"primary",style:{margin:"2%"}},e);case"electric":return r.a.createElement(oe.a,{variant:"warning",style:{margin:"2%"}},e);default:return r.a.createElement(oe.a,{variant:"light",style:{margin:"2%"}},e)}}),r.a.createElement(pe,null,r.a.createElement(fe,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement(me,null,r.a.createElement(v.a,{variant:"outline-light",size:"lg",block:!0,style:{margin:"1%"}},r.a.createElement(de,{to:"/",style:{textDecoration:"none"}},"Back to All Pokemons")),r.a.createElement(re.a,{src:l.image,alt:"Here is the image of pokemon",style:{minWidth:"100%"}})),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,l.name)),r.a.createElement("tr",null,r.a.createElement("td",null,"Types"),r.a.createElement("td",null,n)),r.a.createElement("tr",null,r.a.createElement("td",null,"Initial Experience"),r.a.createElement("td",null,l.experience)),r.a.createElement("tr",null,r.a.createElement("td",null,"Weight"),r.a.createElement("td",null,l.weight))),t))):r.a.createElement(U.a,{to:"/auth"})},he=n(18),ve=n.n(he),Ee=n(36),ge=n.n(Ee);function xe(){var e=Object(p.a)(["\n  transition: all 0.2s ease-out;\n  &:hover {\n    transform: scale(1.15);\n  }\n  @media screen and (max-width: 630px) {\n    font-size: 12px;\n  }\n"]);return xe=function(){return e},e}function je(){var e=Object(p.a)(["\n  padding: 10%;\n"]);return je=function(){return e},e}function Oe(){var e=Object(p.a)(["\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n"]);return Oe=function(){return e},e}function we(){var e=Object(p.a)(["\n  text-decoration: 'none';\n  color: #ffffff;\n  height: 100vh;\n  &:hover {\n    color: #ffffff;\n  }\n"]);return we=function(){return e},e}function ye(){var e=Object(p.a)(["\n  color: #007bff;\n  padding-top: 5%;\n  @media screen and (max-width: 630px) {\n    font-size: 14px;\n  }\n"]);return ye=function(){return e},e}function ke(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  margin: 10%;\n  background-color: #ffffff;\n  align-items: center;\n  border-radius: 5%;\n  padding-top: 5%;\n  @media screen and (max-width: 630px) {\n    width: 90%;\n  }\n"]);return ke=function(){return e},e}function Ce(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]);return Ce=function(){return e},e}var Se=g.a.div(Ce()),Ie=g.a.div(ke()),De=g.a.h3(ye()),Pe=Object(g.a)(E.a)(we()),_e=g.a.div(Oe()),We=Object(g.a)(ve.a)(je()),ze=Object(g.a)(v.a)(xe()),Ge=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(m.a)(o,2),i=u[0],l=u[1],p=Object(a.useState)(null),d=Object(m.a)(p,2),b=d[0],h=d[1],v=Object(a.useContext)(N);Object(a.useEffect)(function(){h(null),c(""),l("")},[]);var E=function(){var e=Object(f.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),0!==n.length&&0!==i.length||h(new Error("One or more fields are empty")),e.next=4,v.logIn(n,i);case 4:h(v.error);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return v.auth?r.a.createElement(U.a,{to:"/"}):r.a.createElement(Se,null,r.a.createElement(Ie,null,r.a.createElement(De,null,"Welcome back, trainer!"),b?r.a.createElement(ge.a,{variant:"danger"},v.error.message):r.a.createElement("span",null),r.a.createElement(We,{onSubmit:E},r.a.createElement(ve.a.Group,{controlId:"username"},r.a.createElement(ve.a.Control,{type:"text",placeholder:"Username",onChange:function(e){return c(e.target.value)}})),r.a.createElement(ve.a.Group,{controlId:"password"},r.a.createElement(ve.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return l(e.target.value)}})),r.a.createElement(_e,null,r.a.createElement(ze,{variant:"primary",type:"submit"},"Login"),r.a.createElement(ze,{variant:"success"},r.a.createElement(Pe,{style:{textDecoration:"none"},to:"/auth/register"},"Not a member?"))))))};function Be(){var e=Object(p.a)(["\n  transition: all 0.2s ease-out;\n  &:hover {\n    transform: scale(1.15);\n  }\n  @media screen and (max-width: 630px) {\n    font-size: 12px;\n  }\n"]);return Be=function(){return e},e}function Ae(){var e=Object(p.a)(["\n  padding: 10%;\n"]);return Ae=function(){return e},e}function Le(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return Le=function(){return e},e}function Ne(){var e=Object(p.a)(["\n  text-decoration: 'none';\n  color: #ffffff;\n  height: 100vh;\n  &:hover {\n    color: #ffffff;\n  }\n"]);return Ne=function(){return e},e}function Te(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]);return Te=function(){return e},e}function Ue(){var e=Object(p.a)(["\n  color: #007bff;\n  padding-top: 5%;\n  @media screen and (max-width: 630px) {\n    font-size: 14px;\n  }\n"]);return Ue=function(){return e},e}function Je(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  margin: 10%;\n  background-color: #ffffff;\n  align-items: center;\n  border-radius: 5%;\n  @media screen and (max-width: 630px) {\n    width: 90%;\n  }\n"]);return Je=function(){return e},e}var Fe=g.a.div(Je()),He=g.a.h3(Ue()),Me=g.a.div(Te()),Re=Object(g.a)(E.a)(Ne()),$e=g.a.div(Le()),qe=Object(g.a)(ve.a)(Ae()),Ke=Object(g.a)(v.a)(Be()),Qe=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(m.a)(o,2),i=u[0],l=u[1],p=Object(a.useState)(""),d=Object(m.a)(p,2),b=d[0],h=d[1],v=Object(a.useState)(null),E=Object(m.a)(v,2),g=E[0],x=E[1],j=Object(a.useContext)(N);Object(a.useEffect)(function(){x(null),c(""),l("")},[]);var O=function(){var e=Object(f.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),i===b){e.next=4;break}return x(new Error("Passwords do not match.")),e.abrupt("return");case 4:if(0!==i.length&&0!==b.length&&0!==n.length){e.next=7;break}return x(new Error("Fields cannot be left empty.")),e.abrupt("return");case 7:return e.next=9,j.register(n,i);case 9:x(j.error);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return j.auth?r.a.createElement(U.a,{to:"/"}):r.a.createElement(Me,null,r.a.createElement(Fe,null,r.a.createElement(He,null,"Welcome back, trainer!"),g?r.a.createElement(ge.a,{variant:"danger"},g.message):r.a.createElement("span",null),r.a.createElement(qe,{onSubmit:O},r.a.createElement(ve.a.Group,{controlId:"username"},r.a.createElement(ve.a.Control,{type:"text",placeholder:"Username",onChange:function(e){return c(e.target.value)}})),r.a.createElement(ve.a.Group,{controlId:"password"},r.a.createElement(ve.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return l(e.target.value)}})),r.a.createElement(ve.a.Group,{controlId:"password-confirm"},r.a.createElement(ve.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}})),r.a.createElement($e,null,r.a.createElement(Ke,{variant:"primary",type:"submit"},"Register"),r.a.createElement(Ke,{variant:"success"},r.a.createElement(Re,{style:{textDecoration:"none"},to:"/auth"},"Already a member?"))))))};function Ve(){var e=Object(p.a)(["\n  width: 100%;\n\n"]);return Ve=function(){return e},e}var Xe=g.a.div(Ve()),Ye=function(e){return r.a.createElement(Xe,null,r.a.createElement(u.a,null,r.a.createElement(i.a,{path:"/auth/register",component:Qe}),r.a.createElement(i.a,{path:"/auth",component:Ge})))},Ze=function(e){return r.a.createElement(T,null,r.a.createElement("div",{className:"app__container"},r.a.createElement(ee,null),r.a.createElement(u.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:J}),r.a.createElement(i.a,{path:"/auth",component:Ye}),r.a.createElement(i.a,{path:"/pokemons/:id",component:be}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var et=n(163);o.a.render(r.a.createElement(et.a,{basename:"/react-pokedex"},r.a.createElement(Ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,n){e.exports=n(161)},88:function(e,t,n){},89:function(e,t,n){},92:function(e,t,n){},98:function(e,t,n){e.exports=n.p+"static/media/working_pikachu.674fe440.gif"},99:function(e,t,n){e.exports=n.p+"static/media/sad_pikachu.e8ddb9b8.webp"}},[[83,1,2]]]);
//# sourceMappingURL=main.b7074f23.chunk.js.map