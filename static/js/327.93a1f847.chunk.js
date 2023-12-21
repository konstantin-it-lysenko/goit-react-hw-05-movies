"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[327],{327:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var t,i,a,c,s,o,u,d,p,f=r(5861),l=r(9439),x=r(4687),m=r.n(x),h=r(168),v=r(9202),g=r(1039),w=r(1087),Z=v.Z.ul(t||(t=(0,h.Z)(["\n  padding: 40px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n"]))),b=(0,v.Z)(w.rU)(i||(i=(0,h.Z)(["\n  padding: 8px 20px;\n  font-size: 0.8rem;\n  color: ",";\n  border-radius: 3px;\n  background: ",";\n  &:hover {\n    background: ",";\n  }\n"])),g.r.colors.fontPrimary,g.r.colors.btnBackground,g.r.colors.active),j=v.Z.div(a||(a=(0,h.Z)(["\n  padding: 40px 0;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 40px;\n  align-items: center;\n  justify-content: space-between;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: url(",") no-repeat center/cover;\n    filter: blur(10px);\n    z-index: -1;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 80px 0;\n    flex-direction: row;\n  }\n\n  @media screen and (min-width: 1024px) {\n    padding: 80px;\n  }\n"])),(function(n){return n.background})),k=v.Z.div(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),y=v.Z.h2(s||(s=(0,h.Z)(["\n  font-size: 1.4rem;\n\n  @media screen and (min-width: 768px) {\n    font-size: 1.8rem;\n  }\n\n  @media screen and (min-width: 1024px) {\n    font-size: 1.6rem;\n  }\n"]))),z=v.Z.div(o||(o=(0,h.Z)(["\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  color: ",";\n  font-size: 0.9rem;\n\n  @media screen and (min-width: 768px) {\n    font-size: 1rem;\n  }\n"])),g.r.colors.fontSecondary),_=v.Z.span(u||(u=(0,h.Z)(["\n  position: relative;\n  ::before {\n    position: absolute;\n    content: '|';\n    left: -8px;\n    top: 0;\n  }\n"]))),S=v.Z.p(d||(d=(0,h.Z)(["\n  max-width: 300px;\n  font-size: 0.9rem;\n  line-height: 1.1;\n\n  @media screen and (min-width: 768px) {\n    max-width: 500px;\n    font-size: 1rem;\n    line-height: 1.1;\n  }\n\n  @media screen and (min-width: 1024px) {\n    font-size: 1rem;\n  }\n"]))),U=v.Z.p(p||(p=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  align-items: center;\n  color: ",";\n  font-size: 0.9rem;\n\n  @media screen and (min-width: 768px) {\n    font-size: 1rem;\n  }\n"])),g.r.colors.fontSecondary),C=r(3414),E=r(184),I=function(n){var e=n.movie,r=e.adult,t=e.backdrop_path,i=e.genres,a=e.original_title,c=e.overview,s=e.poster_path,o=e.runtime,u="https://image.tmdb.org/t/p/w300".concat(s),d=s?u:C,p="https://image.tmdb.org/t/p/w500".concat(t),f=t?p:C;return(0,E.jsx)("section",{children:(0,E.jsxs)(j,{background:f,children:[(0,E.jsxs)(k,{children:[(0,E.jsx)(y,{children:a}),(0,E.jsxs)(z,{children:[(0,E.jsxs)("span",{children:[o," minutes"]}),(0,E.jsx)(_,{children:!0===r?"21+":"For kids"})]}),(0,E.jsx)(S,{children:c}),(0,E.jsxs)(U,{children:["Genres:",i.map((function(n){var e=n.id,r=n.name;return(0,E.jsx)("span",{children:r},e)}))]})]}),(0,E.jsx)("img",{src:d,alt:a})]})})},P=r(2791),R=r(7689),B=r(4248),F=function(){var n,e,r=(0,R.UO)().movieId,t=(0,P.useState)(null),i=(0,l.Z)(t,2),a=i[0],c=i[1],s=(0,R.TH)(),o=(0,P.useRef)(null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,P.useEffect)((function(){r&&u(r)}),[r]);var u=function(){var n=(0,f.Z)(m().mark((function n(e){var r;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,B.Pg)(e);case 3:r=n.sent,c(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(w.rU,{to:o.current,children:"Back to movies"}),a&&(0,E.jsx)(I,{movie:a}),(0,E.jsxs)(Z,{children:[(0,E.jsx)("li",{children:(0,E.jsx)(b,{to:"credits",children:"CAST"})}),(0,E.jsx)("li",{children:(0,E.jsx)(b,{to:"reviews",children:"REVIEWS"})})]}),(0,E.jsx)(P.Suspense,{fallback:(0,E.jsx)("div",{children:"Loading..."}),children:(0,E.jsx)(R.j3,{})})]})}},4248:function(n,e,r){r.d(e,{Ku:function(){return u},Pg:function(){return o},e2:function(){return s},fI:function(){return d},zi:function(){return p}});var t=r(5861),i=r(4687),a=r.n(i),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"3405a2990e159ff0db5f2b7b81775051"};var s=function(){var n=(0,t.Z)(a().mark((function n(){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/week");case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e,r){var t,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?query=".concat(e,"&page=").concat(r));case 2:return t=n.sent,i=t.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()},3414:function(n,e,r){n.exports=r.p+"static/media/default-poster.71253f31d01ef6cdd4cc.jpeg"}}]);
//# sourceMappingURL=327.93a1f847.chunk.js.map