"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{854:function(e,t,n){n.d(t,{a:function(){return i}});var r=n(881),a=n(184),i=function(){return(0,a.jsx)(r.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"30",visible:!0})}},186:function(e,t,n){n.r(t);var r=n(861),a=n(757),i=n.n(a),u=n(854),s=n(256),c=n(940),o=n(791),p=n(184);t.default=function(){var e=(0,c.B)(),t=e.params,n=e.reviews,a=e.setReviews,f=e.loading,v=e.setLoading;return(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,s.fetchMovieReviews)(t.movieId);case 4:n=e.sent,a(n.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("ERROR");case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,v,t.movieId]),(0,p.jsxs)("div",{children:[f&&(0,p.jsx)(u.a,{}),n.length>0?(0,p.jsx)("ul",{children:n.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:e.author}),(0,p.jsx)("p",{children:e.content})]},e.id)}))}):(0,p.jsx)("p",{children:"We don't have any reviews for this movie."})]})}},256:function(e,t,n){n.r(t),n.d(t,{fetchMovieBySearch:function(){return v},fetchMovieCredits:function(){return p},fetchMovieReviews:function(){return f},fetchMovies:function(){return c},fetchMoviesById:function(){return o}});var r=n(861),a=n(757),i=n.n(a),u=n(243),s={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWYwNzZkYzkxYmE1ZGM1YzNhNzg0ZmEyZjhkYjJmOCIsInN1YiI6IjY1MmU1MzcyZWE4NGM3MDBlYmEzNDk3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eb5AtnB5In8Rid9oVZN6shMyC5JnuDma5srOC9ipFqk"}},c=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",s);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),e.next=3,u.Z.get(n,s);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),e.next=3,u.Z.get(n,s);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),e.next=3,u.Z.get(n,s);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),e.next=3,u.Z.get(n,s);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},940:function(e,t,n){n.d(t,{B:function(){return u}});var r=n(439),a=n(791),i=n(689),u=function(){var e=(0,i.UO)(),t=(0,a.useState)([]),n=(0,r.Z)(t,2),u=n[0],s=n[1],c=(0,a.useState)(null),o=(0,r.Z)(c,2),p=o[0],f=o[1],v=(0,a.useState)(!1),h=(0,r.Z)(v,2),d=h[0],l=h[1],m=(0,a.useState)(null),g=(0,r.Z)(m,2),w=g[0],Z=g[1],x=(0,a.useState)([]),k=(0,r.Z)(x,2);return{params:e,movies:u,setMovies:s,movie:p,setMovie:f,loading:d,setLoading:l,cast:w,setCast:Z,reviews:k[0],setReviews:k[1]}}}}]);
//# sourceMappingURL=186.21d978c4.chunk.js.map