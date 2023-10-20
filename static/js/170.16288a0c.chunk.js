"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[170],{854:function(e,t,n){n.d(t,{a:function(){return a}});var r=n(881),i=n(184),a=function(){return(0,i.jsx)(r.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"30",visible:!0})}},170:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r,i,a=n(861),s=n(757),c=n.n(s),u=n(256),o=n(791),h=n(689),p=n(87),d=n(168),v=n(867),l=v.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n"]))),f=v.ZP.img(i||(i=(0,d.Z)(["\n  width: 250px;\n  height: 350px;\n"]))),x=n(854),m=n(940),g=n(184),j=function(){var e,t,n=(0,h.TH)(),r=(0,o.useRef)(null!==(e=null===n||void 0===n||null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies"),i=(0,m.B)(),s=i.params,d=i.movie,v=i.setMovie,j=i.loading,Z=i.setLoading;return(0,o.useEffect)((function(){function e(){return(e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(!0),e.next=4,(0,u.fetchMoviesById)(s.movieId);case 4:t=e.sent,v(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("ERROR");case 11:return e.prev=11,Z(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v,Z,s.movieId]),(0,g.jsxs)("div",{children:[j&&(0,g.jsx)(x.a,{}),d&&(0,g.jsxs)("div",{children:[(0,g.jsx)(p.rU,{to:r.current,children:"Back to previous page"}),(0,g.jsx)("hr",{}),(0,g.jsxs)(l,{children:[(0,g.jsx)(f,{src:"https://image.tmdb.org/t/p/w500/".concat(d.poster_path),alt:"movie-prev"}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{children:d.title}),(0,g.jsxs)("p",{children:["User Score: ",d.vote_average]}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("p",{children:d.overview}),(0,g.jsx)("h4",{children:"Genres"}),(0,g.jsx)("ul",{children:d.genres.map((function(e){return(0,g.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,g.jsx)("hr",{}),(0,g.jsx)("p",{children:"Additional information"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)(p.rU,{to:"cast",children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(p.rU,{to:"reviews",children:"Reviews"})})]}),(0,g.jsx)("hr",{}),(0,g.jsx)(o.Suspense,{fallback:(0,g.jsx)("div",{children:"Loading..."}),children:(0,g.jsx)(h.j3,{})})]})]})}},256:function(e,t,n){n.r(t),n.d(t,{fetchMovieBySearch:function(){return d},fetchMovieCredits:function(){return h},fetchMovieReviews:function(){return p},fetchMovies:function(){return u},fetchMoviesById:function(){return o}});var r=n(861),i=n(757),a=n.n(i),s=n(243),c={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWYwNzZkYzkxYmE1ZGM1YzNhNzg0ZmEyZjhkYjJmOCIsInN1YiI6IjY1MmU1MzcyZWE4NGM3MDBlYmEzNDk3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eb5AtnB5In8Rid9oVZN6shMyC5JnuDma5srOC9ipFqk"}},u=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",c);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),e.next=3,s.Z.get(n,c);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),e.next=3,s.Z.get(n,c);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),e.next=3,s.Z.get(n,c);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),e.next=3,s.Z.get(n,c);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},940:function(e,t,n){n.d(t,{B:function(){return s}});var r=n(439),i=n(791),a=n(689),s=function(){var e=(0,a.UO)(),t=(0,i.useState)([]),n=(0,r.Z)(t,2),s=n[0],c=n[1],u=(0,i.useState)(null),o=(0,r.Z)(u,2),h=o[0],p=o[1],d=(0,i.useState)(!1),v=(0,r.Z)(d,2),l=v[0],f=v[1],x=(0,i.useState)(null),m=(0,r.Z)(x,2),g=m[0],j=m[1],Z=(0,i.useState)([]),w=(0,r.Z)(Z,2);return{params:e,movies:s,setMovies:c,movie:h,setMovie:p,loading:l,setLoading:f,cast:g,setCast:j,reviews:w[0],setReviews:w[1]}}}}]);
//# sourceMappingURL=170.16288a0c.chunk.js.map