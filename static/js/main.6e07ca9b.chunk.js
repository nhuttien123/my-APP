(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{270:function(e,t,r){"use strict";r.r(t);var n,a,c,s,i=r(0),o=r.n(i),l=r(31),u=r.n(l),j=r(37),d=r(28),b=r(30),m=r(24),p=r.n(m),O=r(36),h=r(65),g=r.n(h),f={getUser:function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("https://server-thelaptopworld.herokuapp.com/api/v1/tai-khoan-khach-hang/login",t).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),createUser:function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("https://server-thelaptopworld.herokuapp.com/api/v1/tai-khoan-khach-hang",t).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=Object(d.b)("user/getUser",function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getUser(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=Object(d.c)({name:"user",initialState:{data:[],loading:null,error:null},reducers:{},extraReducers:(n={},Object(b.a)(n,x.pending,(function(e,t){e.data=[],e.loading=!0})),Object(b.a)(n,x.fulfilled,(function(e,t){var r=t.payload;e.data=r,e.loading=!1,e.error=null})),Object(b.a)(n,x.rejected,(function(e,t){e.loading=!1,e.error=t.error})),n)}).reducer,v={getProduct:function(){var e=Object(O.a)(p.a.mark((function e(t){var r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.name,n=t.page,e.prev=1,void 0!=r&&null!=r){e.next=8;break}return e.next=5,g.a.get("https://619b19fb27827600174453c2.mockapi.io/products?filter=&page=".concat(n,"&limit=6")).then((function(e){return e.data}));case 5:return e.abrupt("return",e.sent);case 8:return e.next=10,g.a.get("https://619b19fb27827600174453c2.mockapi.io/products?filter=".concat(r,"&page=").concat(n,"&limit=6")).then((function(e){return e.data}));case 10:return e.abrupt("return",e.sent);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),getProductID:function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://619b19fb27827600174453c2.mockapi.io/products/".concat(t)).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=Object(d.b)("product/getProduct",function(){var e=Object(O.a)(p.a.mark((function e(t){var r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,n=t.page,e.next=3,v.getProduct({name:r,page:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=Object(d.c)({name:"product",initialState:{data:[],loading:null,error:null},reducers:{},extraReducers:(a={},Object(b.a)(a,w.pending,(function(e,t){e.loading=!0})),Object(b.a)(a,w.fulfilled,(function(e,t){var r=t.payload;e.data=r,e.loading=!1,e.error=null})),Object(b.a)(a,w.rejected,(function(e,t){e.loading=!1,e.error=t.error})),a)}).reducer,k=Object(d.b)("productDetail/getProductDetail",function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getProductID(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=Object(d.c)({name:"productDetail",initialState:{data:[],loading:null,error:null},reducers:{},extraReducers:(c={},Object(b.a)(c,k.pending,(function(e,t){e.loading=!0})),Object(b.a)(c,k.fulfilled,(function(e,t){var r=t.payload;e.data=r,e.loading=!1,e.error=null})),Object(b.a)(c,k.rejected,(function(e,t){e.loading=!1,e.error=t.error})),c)}).reducer,P=Object(d.b)("create_user/createUser",function(){var e=Object(O.a)(p.a.mark((function e(t,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.createUser(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),C={products:I,userLogin:y,userRegister:Object(d.c)({name:"create_user",initialState:{response:null,loading:null,error:null},reducers:{},extraReducers:(s={},Object(b.a)(s,P.pending,(function(e,t){e.response=null,e.loading=!0})),Object(b.a)(s,P.fulfilled,(function(e,t){var r=t.payload;console.log(r),e.response=r,e.loading=!1,e.error=null})),Object(b.a)(s,P.rejected,(function(e,t){e.loading=!1,e.error=t.error})),s)}).reducer,detail:S},N=Object(d.a)({reducer:C}),T=r(162),q=r(41),L=r(21),U=r(272),R=r(68),E=r(278),F=r(277),J=r(116),A=r(32),K=r(279),z=r(280),D=r(281),_=r(6);var H=function(e){var t=e.count,r=U.a.Header,n=Object(_.jsx)(R.a,{children:Object(_.jsx)(R.a.Item,{icon:Object(_.jsx)(K.a,{}),onClick:function(){localStorage.removeItem("accessKey"),sessionStorage.removeItem("cartItem"),window.location.replace("/my-app/login")},children:Object(_.jsx)(E.b,{align:"center",children:" Log-out"})},"3")});return Object(i.useEffect)((function(){}),[]),Object(_.jsx)(r,{style:{zIndex:1,width:"100%"},children:Object(_.jsxs)(R.a,{theme:"dark",mode:"horizontal",children:[Object(_.jsx)(R.a.Item,{style:{fontSize:"1.1rem"},children:Object(_.jsx)(A.b,{to:"/my-app/",children:"Home"})},"1"),Object(_.jsx)(R.a.Item,{icon:Object(_.jsx)(z.a,{style:{fontSize:"1.1rem"}}),children:Object(_.jsx)(A.b,{to:"/my-app/cart",children:Object(_.jsx)(F.a,{count:t,children:Object(_.jsx)("span",{style:{color:"white"},children:"Cart"})})})},"2"),Object(_.jsx)(J.a,{overlay:n,placement:"bottomRight",arrow:!0,children:Object(_.jsx)(R.a.Item,{icon:Object(_.jsx)(D.a,{style:{fontSize:"1.1rem"}}),children:localStorage.accessKey},"3")})]})})},V=(r(263),r(88)),B=r(47),$=r(274),G=r(276),M=r(54),Q=r(95),W=r(50);var X=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.userLogin})),r=t.data,n=t.loading,a=r.status;Object(i.useEffect)((function(){if(a)if("success"===a){var e=r.response;localStorage.setItem("accessKey",[e.useName]),W.b.success("Login success !"),setTimeout((function(){window.location.replace("/my-app/")}),1500)}else"wrong-pass"===a?W.b.error("Password incorrect"):"not-found"===a&&W.b.error("Username incorrect")}),[a,r.response,e]);var c=JSON.parse(localStorage.getItem("rememberToken"));return Object(_.jsx)(V.a,{justify:"center",style:{paddingTop:"5rem"},children:Object(_.jsxs)(B.a,{span:8,children:[Object(_.jsx)("h1",{style:{textAlign:"center"},children:"Login"}),Object(_.jsxs)($.a,{name:"basic",layout:"vertical",initialValues:{remember:!0},onFinish:function(t){if(Object(d.d)(e(x({Username:t.username,Password:t.password}))),1==t.remember){var r={name:t.username,pass:t.password};localStorage.setItem("rememberToken",JSON.stringify(r))}else localStorage.removeItem("rememberToken")},autoComplete:"off",children:[Object(_.jsx)($.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],initialValue:c?c.name:"",children:Object(_.jsx)(G.a,{})}),Object(_.jsx)($.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],initialValue:c?c.pass:"",children:Object(_.jsx)(G.a.Password,{})}),Object(_.jsxs)($.a.Item,{children:[n?Object(_.jsx)(M.a,{type:"primary",htmlType:"submit",disabled:!0,loading:!0,children:"Checking"}):Object(_.jsx)(M.a,{type:"primary",htmlType:"submit",children:"Submit"}),Object(_.jsx)(A.b,{to:"/my-app/register",style:{marginLeft:"1rem"},children:"Register"})]}),Object(_.jsx)($.a.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16},children:Object(_.jsx)(Q.a,{children:"Remember me"})})]})]})})};var Y=function(){return Object(_.jsx)("h1",{children:"404 Error"})};var Z=function(){var e=Object(j.b)(),t=Object(L.f)(),r=Object(j.c)((function(e){return e.userRegister})),n=r.response,a=r.loading;return Object(i.useEffect)((function(){n&&(console.log(typeof n),"object"===typeof n?(W.b.success("Register success !"),setTimeout((function(){t("/my-app/")}),1500)):"string"===typeof n&&W.b.error("Username already exist !"))}),[n,t]),Object(_.jsx)(V.a,{justify:"center",style:{paddingTop:"5rem"},children:Object(_.jsxs)(B.a,{span:8,children:[Object(_.jsx)("h1",{style:{textAlign:"center"},children:"Register"}),Object(_.jsxs)($.a,{name:"basic",layout:"vertical",initialValues:{remember:!0},onFinish:function(t){t.password!=t.re_password?W.b.error("Re-password incorrect",{position:"top-center"}):Object(d.d)(e(P({TenKhachHang:t.fullname,Username:t.username,Password:t.re_password,Email:t.email,Phone:"NULL",Avatar:"NULL"})))},autoComplete:"off",children:[Object(_.jsx)($.a.Item,{label:"Fullname",name:"fullname",rules:[{required:!0,message:"Please input your fullname!"}],children:Object(_.jsx)(G.a,{})}),Object(_.jsx)($.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(_.jsx)(G.a,{})}),Object(_.jsx)($.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(_.jsx)(G.a.Password,{})}),Object(_.jsx)($.a.Item,{label:"Re_Password",name:"re_password",rules:[{required:!0,message:"Please input your re-password!"}],children:Object(_.jsx)(G.a.Password,{})}),Object(_.jsx)($.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!",type:"email"}],children:Object(_.jsx)(G.a,{})}),Object(_.jsxs)($.a.Item,{children:[a?Object(_.jsx)(M.a,{type:"primary",htmlType:"submit",disabled:!0,children:"Checking"}):Object(_.jsx)(M.a,{type:"primary",htmlType:"submit",children:"Submit"}),Object(_.jsx)(A.b,{to:"/my-app/",style:{marginLeft:"1rem"},children:"back"})]})]})]})})},ee=r(57),te=r(156),re=r(115),ne=r(275);var ae=function(e){var t=e.data,r=e.addCart,n=ne.a.Meta;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(B.a,{xl:8,lg:8,md:12,sm:12,xs:24,children:Object(_.jsx)("div",{className:"site-card-border-less-wrapper",children:Object(_.jsx)(ne.a,{style:{width:"100%"},hoverable:!0,cover:Object(_.jsx)(A.b,{to:"/product/"+t.id,children:Object(_.jsx)("img",{alt:"example",src:t.images,style:{width:"100%",height:"16rem"}})}),actions:[Object(_.jsx)(z.a,{onClick:function(){return r(t.id,t.price,t.images,t.name)}},"setting")],children:Object(_.jsx)(n,{title:t.name,description:t.price.toLocaleString("vi-vn")+"$"})})})})})};var ce=function(e,t){var r=e.addCart,n=Object(j.b)(),a=Object(L.f)(),c=Object(j.c)((function(e){return e.products})),s=c.data,l=c.loading,u=new URLSearchParams(window.location.search),b=u.get("page"),m=u.get("key");b||(b=1);var p=window.location.pathname,O=o.a.useState(1),h=Object(q.a)(O,2),g=h[0],f=h[1],x=Object(i.useState)({Key:m,Page:b}),y=Object(q.a)(x,2),v=y[0],I=y[1];Object(i.useEffect)((function(){Object(d.d)(n(w({name:v.Key,page:v.Page})))}),[n,v]);var k=function(){v?(a("".concat(p,"?key=").concat(m,"&page=").concat(Number(b)-1)),I(Object(ee.a)(Object(ee.a)({},v),{},{Page:Number(b)-1}))):(a("".concat(p,"?page=").concat(Number(b)-1)),I(Object(ee.a)(Object(ee.a)({},v),{},{Page:Number(b)-1})))};return Object(_.jsx)(te.a,{spinning:l,size:"middle",style:{marginTop:"5rem"},children:Object(_.jsxs)(V.a,{gutter:[16,26],children:[Object(_.jsxs)(B.a,{xl:4,style:{margin:"0 auto",position:"relative"},children:[Object(_.jsx)("h1",{children:"Filter"}),Object(_.jsxs)(re.a.Group,{onChange:function(e){a({pathname:p,search:"?"+new URLSearchParams({key:e.target.value}).toString()}),I({Page:1,Key:e.target.value}),f(e.target.value)},value:g,style:{position:"sticky",top:50},children:[Object(_.jsx)(re.a,{value:"cat",children:"Cat"}),Object(_.jsx)(re.a,{value:"dog",children:"Dog"}),Object(_.jsx)(M.a,{onClick:function(){a(p),I({Page:1,Key:""}),f("")},style:{marginTop:"1rem"},children:"Cancel Filter"})]})]}),Object(_.jsxs)(B.a,{xl:20,children:[Object(_.jsxs)("div",{style:{margin:"0 auto",width:"10rem",display:"block",marginBottom:"1rem"},children:[1==b?Object(_.jsx)(M.a,{onClick:k,disabled:!0,children:"Prev"}):Object(_.jsx)(M.a,{onClick:k,children:"Prev"}),0==(s||[]).length?Object(_.jsx)(M.a,{disabled:!0,children:"Next"}):Object(_.jsx)(M.a,{onClick:function(){m?(a("".concat(p,"?key=").concat(m,"&page=").concat(Number(b)+1)),I(Object(ee.a)(Object(ee.a)({},v),{},{Page:Number(b)+1}))):(a("".concat(p,"?page=").concat(Number(b)+1)),I(Object(ee.a)(Object(ee.a)({},v),{},{Page:Number(b)+1})))},children:"Next"})]}),Object(_.jsx)(V.a,{gutter:[16,16],children:0==(s||[]).length?Object(_.jsx)("div",{style:{margin:"0 auto",marginTop:"3rem"},children:Object(_.jsx)("h1",{children:"End page"})}):(s||[]).map((function(e){return Object(_.jsx)(ae,{data:e,addCart:r},e.id)}))})]})]})})},se=r(273),ie=r(282);var oe=function(e){var t=e.data,r=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return Object(_.jsx)("a",{children:e})}},{title:"Quantity",dataIndex:"quantity",key:"quantity"},{title:"Price",dataIndex:"price",key:"price"},{title:"Action",key:"action",render:function(t,r){return Object(_.jsxs)(E.b,{size:"middle",children:[Object(_.jsxs)("a",{children:["Invite ",r.id]}),1==r.quantity?Object(_.jsx)(M.a,{disabled:!0,children:"-"}):Object(_.jsx)(M.a,{onClick:function(){return e.minus(r.id)},children:"-"}),Object(_.jsx)(M.a,{onClick:function(){return e.plus(r.id)},children:"+"}),Object(_.jsx)(M.a,{onClick:function(){return e.remove(r.id)},children:Object(_.jsx)(ie.a,{})})]})}}],n=[{key:t.id,id:t.idItem,name:t.name,quantity:t.quantity,price:t.quantity*t.price.toLocaleString("vi-vn")+"$",tags:["nice","developer"]}];return Object(_.jsx)(se.a,{columns:r,dataSource:n})};var le=function(e){var t=e.removeCartItem,r=e.plus,n=e.minus,a=Object(i.useState)([]),c=Object(q.a)(a,2),s=c[0],o=c[1];Object(i.useEffect)((function(){l()}),[]);var l=function(){var e=JSON.parse(sessionStorage.getItem("cartItem"));e&&o(e)},u=function(e){t(e),l()},j=function(e){r(e),l()},d=function(e){n(e),l()};return Object(_.jsx)(_.Fragment,{children:0!=(s||[]).length&&sessionStorage.cartItem?(s||[]).map((function(e){return Object(_.jsx)(oe,{style:{width:"100%"},remove:u,plus:j,minus:d,data:e,children:" "},e.id)})):Object(_.jsx)("h1",{style:{textAlign:"center"},children:"No item"})})};var ue=function(e){console.log(e);var t=window.location.pathname.split("/product/").splice(1).toString(),r=Object(j.c)((function(e){return e.detail})),n=r.loading,a=r.data,c=Object(j.b)();return console.log(a),Object(i.useEffect)((function(){c(k(t))}),[c,t]),Object(_.jsx)(te.a,{spinning:n,children:Object(_.jsxs)(V.a,{children:[Object(_.jsx)(B.a,{xl:12,children:Object(_.jsx)("img",{src:a.images,style:{width:"100%"},alt:""})}),Object(_.jsx)(B.a,{xl:12,children:Object(_.jsxs)("div",{style:{margin:"0 auto",display:"block",width:"100%",textAlign:"center"},children:[Object(_.jsx)("h1",{children:a.name}),Object(_.jsxs)("h2",{children:["Price ",a.price,"$"]}),Object(_.jsx)(M.a,{onClick:function(){return e.addCart(a.id,a.price,a.images,a.name)},children:"Add to cart"})]})})]})})},je=r(283);var de=function(){return Object(_.jsxs)("div",{style:{textAlign:"center",marginTop:"10rem"},children:[Object(_.jsx)("h1",{style:{fontSize:"4rem"},children:"Welcome !!!"}),Object(_.jsxs)(A.b,{to:"/my-app/login",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:["login to app",Object(_.jsx)(je.a,{style:{marginLeft:"1rem"}})]})]})};r(269);var be=function(e){var t=U.a.Content,r=window.location.pathname.split("/"),n=localStorage.getItem("accessKey"),a=Object(i.useState)([]),c=Object(q.a)(a,2),s=c[0],o=c[1];Object(i.useEffect)((function(){u()}));var l=JSON.parse(sessionStorage.getItem("cartItem")),u=function(){if(l){var e=[];l.map((function(t){return e.push(t.quantity)}));var t=e.reduce((function(e,t){return e+t}));o(t)}},j=function(e,t,r,n){var a={idItem:e,quantity:1,price:t,image:r,name:n};if(null!=l){var c=l.find((function(t){return t.idItem==e}));c?c.quantity+=1:l=[].concat(Object(T.a)(l),[a])}else l=[a];sessionStorage.setItem("cartItem",JSON.stringify(l)),u()};return n?Object(_.jsxs)("div",{children:["login"===r[1]?null:Object(_.jsx)(H,{count:s}),Object(_.jsx)(t,{className:"site-layout",style:{padding:"0 50px",marginTop:20},children:Object(_.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:Object(_.jsxs)(L.c,{children:[Object(_.jsx)(L.a,{path:"/my-app/",element:Object(_.jsx)(ce,{addCart:j})}),Object(_.jsx)(L.a,{path:"/my-app/cart",element:Object(_.jsx)(le,{removeCartItem:function(e){(l||[]).map((function(t,r){(l||[]).length<=1?(sessionStorage.removeItem("cartItem"),o(0)):t.idItem==e&&(l.splice(r,1),sessionStorage.setItem("cartItem",JSON.stringify(l)),u())}))},plus:function(e){(l||[]).map((function(t){t.idItem==e&&(t.quantity++,sessionStorage.setItem("cartItem",JSON.stringify(l)),u())}))},minus:function(e){(l||[]).map((function(t,r){t.idItem==e&&(t.quantity--,sessionStorage.setItem("cartItem",JSON.stringify(l)),u())}))}})}),Object(_.jsx)(L.a,{path:"/product/:id",element:Object(_.jsx)(ue,{addCart:j})}),Object(_.jsx)(L.a,{path:"*",element:Object(_.jsx)(Y,{})})]})})})]}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(W.a,{position:"top-center"}),Object(_.jsxs)(L.c,{children:[Object(_.jsx)(L.a,{path:"/my-app/",element:Object(_.jsx)(de,{})}),Object(_.jsx)(L.a,{path:"/my-app/login",element:Object(_.jsx)(X,{})}),Object(_.jsx)(L.a,{path:"/my-app/register",element:Object(_.jsx)(Z,{})}),Object(_.jsx)(L.a,{path:"*",element:Object(_.jsx)(Y,{})})]})]})};var me=function(){return Object(_.jsx)(A.a,{children:Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(be,{})})})},pe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,284)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};u.a.render(Object(_.jsx)(j.a,{store:N,children:Object(_.jsx)(me,{})}),document.getElementById("root")),pe()}},[[270,1,2]]]);
//# sourceMappingURL=main.6e07ca9b.chunk.js.map