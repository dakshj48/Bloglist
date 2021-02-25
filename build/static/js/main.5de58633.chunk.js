(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{257:function(e,t,n){e.exports=n(443)},443:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(61),l=n.n(c),o=n(67),u=n(221),i=n(49),s=n(444),m=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],l=n[1],o={display:c?"none":""},u={display:c?"":"none"},m=function(){return l(!c)};return r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement(s.a,{onClick:m},e.buttonLabel)),r.a.createElement("div",{style:u},e.children,r.a.createElement(s.a,{onClick:m},"cancel")))},p=n(15),d=n.n(p),f=n(22),b=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],c=n[1];return{type:e,value:r,onChange:function(e){c(e.target.value)},reset:function(){c("")}}},E=n(38),v=n.n(E),h="/api/blogs",g=null,O={setToken:function(e){g="bearer ".concat(e)},getAll:function(){return v.a.get(h).then(function(e){return e.data})},create:function(){var e=Object(f.a)(d.a.mark(function e(t){var n,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,v.a.post(h,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(f.a)(d.a.mark(function e(t,n){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.put("".concat(h,"/").concat(t),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),deleteBlog:function(){var e=Object(f.a)(d.a.mark(function e(t){var n,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,v.a.delete("".concat(h,"/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.status);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),addComment:function(){var e=Object(f.a)(d.a.mark(function e(t,n){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("".concat(h,"/").concat(t,"/comments"),{comment:n});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var j={blogs:[],user:null},k=function(e){return{type:"SET_BLOGS",data:e}},x=function(e){return{type:"SET_USER",data:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BLOGS":return w({},e,{blogs:t.data});case"SET_USER":return w({},e,{user:t.data});default:return e}},C=function(e){return{type:"SET_NOT",data:e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOT":return t.data;default:return e}},D=n(454),T=n(452),R=n(41),B=function(e){var t=e.store,n=e.removeReset,a=b("text"),c=b("text"),l=b("text"),o=function(){var e=Object(f.a)(d.a.mark(function e(n){var r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,O.create({title:a.value,author:c.value,url:l.value});case 4:return e.next=6,O.getAll();case 6:r=e.sent,t.dispatch(k(r)),t.dispatch(C(["".concat(a.value," by ").concat(c.value," added"),"success"])),setTimeout(function(){t.dispatch(C([]))},5e3),a.reset(),c.reset(),l.reset(),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),t.dispatch(C(["Failed to save the blog","error"])),setTimeout(function(){t.dispatch(C([]))},5e3);case 19:case"end":return e.stop()}},e,null,[[1,15]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"add new"),r.a.createElement(D.a,{onSubmit:o},r.a.createElement(D.a.Field,null,r.a.createElement("label",null,"title:"),r.a.createElement(T.a,n(a))),r.a.createElement(D.a.Field,null,r.a.createElement("label",null,"author:"),r.a.createElement(T.a,n(c))),r.a.createElement(D.a.Field,null,r.a.createElement("label",null,"url:"),r.a.createElement(T.a,n(l))),r.a.createElement(s.a,{animated:!0,type:"submit"},r.a.createElement(s.a.Content,{visible:!0},"add"),r.a.createElement(s.a.Content,{hidden:!0},r.a.createElement(R.a,{name:"add"})))),r.a.createElement("br",null))},I=n(33),U={paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},F=function(e){var t=e.blog;return r.a.createElement("div",{style:U,className:"blog"},r.a.createElement(I.b,{to:"/blogs/".concat(t.id)},t.title))},_=n(458),A=function(e){var t=e.message;return 0===t.length?null:"success"===t[1]?r.a.createElement(_.a,{content:t[0],success:!0}):r.a.createElement(_.a,{content:t[0],error:!0})},L=function(e){var t=e.store,n=e.removeReset;return r.a.createElement("div",null,r.a.createElement("h5",{style:{margin:0}},"Welcome ",t.getState().app.user.name),r.a.createElement("h1",{style:{marginTop:0}},"Blogs"),r.a.createElement(A,{message:t.getState().notification}),r.a.createElement(m,{buttonLabel:"add blog"},r.a.createElement(B,{store:t,removeReset:n})),r.a.createElement("br",null),t.getState().app.blogs.map(function(e){return r.a.createElement(F,{key:e.id,blog:e,store:t})}))},N={login:function(){var e=Object(f.a)(d.a.mark(function e(t){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},J=function(e){var t=e.store,n=e.removeReset,a=b("text"),c=b("password"),l=function(){var e=Object(f.a)(d.a.mark(function e(n){var r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,N.login({username:a.value,password:c.value});case 4:r=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(r)),O.setToken(r.token),t.dispatch(x(r)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),t.dispatch(C(["wrong username or password","error"])),setTimeout(function(){t.dispatch(C([]))},5e3);case 14:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Bloglist"),r.a.createElement("h2",null,"log in"),r.a.createElement(A,{message:t.getState().notification}),r.a.createElement(D.a,{onSubmit:l},r.a.createElement(D.a.Field,null,r.a.createElement("label",null,"username"),r.a.createElement(T.a,n(a))),r.a.createElement(D.a.Field,null,r.a.createElement("label",null,"password"),r.a.createElement(T.a,n(c))),r.a.createElement(s.a,{primary:!0,animated:!0},r.a.createElement(s.a.Content,{visible:!0},"login"),r.a.createElement(s.a.Content,{hidden:!0},r.a.createElement(R.a,{name:"arrow right"})))))},z=n(456),W=function(e){var t=e.users;return r.a.createElement("div",null,r.a.createElement("h1",null,"Users"),r.a.createElement(z.a,{striped:!0,celled:!0,unstackable:!0},r.a.createElement(z.a.Body,null,r.a.createElement(z.a.Row,null,r.a.createElement(z.a.Cell,null,r.a.createElement("b",null,"user")),r.a.createElement(z.a.Cell,null,r.a.createElement("b",null,"blogs created"))),t.map(function(e){return r.a.createElement(z.a.Row,{key:e.id},r.a.createElement(z.a.Cell,null,r.a.createElement(I.b,{to:"/users/".concat(e.id)},e.name)),r.a.createElement(z.a.Cell,null,e.blogs.length))}))))},G=n(453),M=n(53),q=n(457),H=function(e){var t=e.user;return void 0===t?null:r.a.createElement("div",null,r.a.createElement("h2",null,"User ",t.name),r.a.createElement("b",{style:{margin:0}},"blogs added:")," ",r.a.createElement("br",null),r.a.createElement(q.a,{bulleted:!0},t.blogs.map(function(e){return r.a.createElement(q.a.Item,{key:e.id},e.title)})))},K={getUsers:function(){var e=Object(f.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},Q=n(155),V=n(455);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Z=Object(M.e)(function(e){var t=e.store,n=t.getState().app.user,c=t.getState().app.blogs,l=e.blog,o=b("text"),u=Object(a.useState)(!1),m=Object(i.a)(u,2),p=m[0],E=m[1],v={display:n.username===l.user.username?"":"none"},h=function(){var e=Object(f.a)(d.a.mark(function e(n){var a,r,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,a=Y({},l,{likes:l.likes+1}),e.next=5,O.update(l.id,a);case 5:r=Object(Q.a)(c),o=r.findIndex(function(e){return e.id===l.id}),r[o].likes++,r.sort(function(e,t){return t.likes-e.likes}),t.dispatch(k(r)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),console.log("Error while liking");case 16:case"end":return e.stop()}},e,null,[[1,12]])}));return function(t){return e.apply(this,arguments)}}(),g=function(){var n=Object(f.a)(d.a.mark(function n(a){var r,o;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,E(!1),e.history.push("/"),n.next=6,O.deleteBlog(l.id);case 6:r=Object(Q.a)(c),o=r.findIndex(function(e){return e.id===l.id}),r.splice(o,1),t.dispatch(k(r)),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0),console.log("Failed to remove the blog");case 16:case"end":return n.stop()}},n,null,[[1,12]])}));return function(e){return n.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(d.a.mark(function e(n){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,o.value){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,O.addComment(l.id,o.value);case 6:return e.next=8,O.getAll();case 8:a=e.sent,t.dispatch(k(a)),o.reset(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[1,13]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,l.title," by ",l.author),r.a.createElement("a",{href:l.url,target:"_blank",rel:"noopener noreferrer"},l.url)," ",r.a.createElement("br",null),l.likes," ",1===l.likes?"like":"likes"," "," ",r.a.createElement(s.a,{animated:!0,onClick:h},r.a.createElement(s.a.Content,{visible:!0},"like"),r.a.createElement(s.a.Content,{hidden:!0},r.a.createElement(R.a,{name:"like"}))),r.a.createElement("br",null),"added by ",l.user.name," ",r.a.createElement("br",null),r.a.createElement("div",{style:v},r.a.createElement(s.a,{animated:!0,type:"submit",onClick:function(){return E(!0)}},r.a.createElement(s.a.Content,{visible:!0},"remove"),r.a.createElement(s.a.Content,{hidden:!0},r.a.createElement(R.a,{name:"delete"}))),r.a.createElement(V.a,{open:p,onConfirm:g,onCancel:function(){return E(!1)},content:"remove blog ".concat(l.title," by ").concat(l.author,"?")})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("b",null,"comments"),r.a.createElement(D.a,{onSubmit:y},r.a.createElement(T.a,e.removeReset(o))," "," ",r.a.createElement(s.a,{animated:!0,type:"submit"},r.a.createElement(s.a.Content,{visible:!0},"add comment"),r.a.createElement(s.a.Content,{hidden:!0},r.a.createElement(R.a,{name:"add"})))),r.a.createElement(q.a,{bulleted:!0},l.comments.map(function(e){return r.a.createElement(q.a.Item,{key:Math.floor(1e4*Math.random()+1)},e)}))))}),$=n(459);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var te=Object(M.e)(function(e){var t=e.store,n=Object(a.useState)([]),c=Object(i.a)(n,2),l=c[0],m=c[1];Object(a.useEffect)(function(){O.getAll().then(function(e){e.sort(function(e,t){return t.likes-e.likes}),t.dispatch(k(e))})},[t]),Object(a.useEffect)(function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var n=JSON.parse(e);t.dispatch(x(n)),O.setToken(n.token)}},[t]),Object(a.useEffect)(function(){K.getUsers().then(function(e){return m(e)})},[m]);var p=function(e){return(t=e).reset,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},Object(u.a)(t,["reset"]));var t};return r.a.createElement("div",null,null===t.getState().app.user&&r.a.createElement(G.a,{style:{width:"90%",padding:"10px"}},r.a.createElement(J,{store:t,removeReset:p})),null!==t.getState().app.user&&r.a.createElement(I.a,null,r.a.createElement($.a,{inverted:!0,tabular:!0,style:{width:"auto"}},r.a.createElement($.a.Item,{link:!0},r.a.createElement(I.b,{to:"/"},r.a.createElement("h5",null,"Blogs"))),r.a.createElement($.a.Item,{link:!0},r.a.createElement(I.b,{to:"/users"},r.a.createElement("h5",null,"Users"))),r.a.createElement($.a.Item,{position:"right",disabled:!0},r.a.createElement(s.a,{animated:!0,size:"tiny",fluid:!0,type:"submit",onClick:function(){return e.history.push("/"),window.localStorage.clear(),void t.dispatch(x(null))}},r.a.createElement(s.a.Content,{visible:!0},"logout"),r.a.createElement(s.a.Content,{hidden:!0},r.a.createElement(R.a,{name:"sign-out"}))))),r.a.createElement(G.a,{style:{width:"95%"}},r.a.createElement(M.a,{exact:!0,path:"/",render:function(){return r.a.createElement(L,{store:e.store,removeReset:p})}}),r.a.createElement(M.a,{exact:!0,path:"/users",render:function(){return r.a.createElement(W,{users:l,setUsers:m,store:e.store,removeReset:p})}}),r.a.createElement(M.a,{exact:!0,path:"/users/:id",render:function(e){var t,n=e.match;return r.a.createElement(H,{user:(t=n.params.id,l.find(function(e){return e.id===t}))})}}),r.a.createElement(M.a,{exact:!0,path:"/blogs/:id",render:function(n){var a,c=n.match;return r.a.createElement(Z,{store:e.store,blog:(a=c.params.id,t.getState().app.blogs.find(function(e){return e.id===a})),removeReset:p})}}))))}),ne=n(114),ae=n(244),re=Object(ne.combineReducers)({app:S,notification:P}),ce=Object(ne.createStore)(re,Object(ae.composeWithDevTools)()),le=function(){l.a.render(r.a.createElement(I.a,null,r.a.createElement(te,{store:ce})),document.getElementById("root"))};le(),ce.subscribe(le)}},[[257,1,2]]]);
//# sourceMappingURL=main.5de58633.chunk.js.map