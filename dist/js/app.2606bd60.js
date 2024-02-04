(function(){"use strict";var t={8351:function(t,e,a){var i=a(6116),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],r={name:"app"},o=r,l=a(2528),c=(0,l.c)(o,s,n,!1,null,"ef400e78",null),u=c.exports,d=(a(6596),a(1476)),p=a(928),v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"detail-page"},[e("van-nav-bar",{attrs:{"left-text":"返回",fixed:"",title:"面经详情"},on:{"click-left":function(e){return t.$router.back()}}}),e("header",{staticClass:"header"},[e("h1",[t._v(t._s(t.detail.stem))]),e("p",[t._v(" "+t._s(t.detail.createAt)+" | "+t._s(t.detail.views)+" 浏览量 | "+t._s(t.detail.likeCount)+" 点赞数 ")]),e("p",[e("img",{attrs:{src:t.detail.avater,alt:""}}),e("span",[t._v(t._s(t.detail.creator))])])]),e("main",{staticClass:"body",domProps:{innerHTML:t._s(t.detail.content)}}),e("div",{staticClass:"opt"},[e("van-icon",{class:{active:1===t.like},attrs:{name:"like-o"},nativeOn:{click:function(e){return t.addlikeorstar(1)}}}),e("van-icon",{class:{active:1===t.star},attrs:{name:"star-o"},nativeOn:{click:function(e){return t.addlikeorstar(2)}}})],1)],1)},h=[],m=(a(3248),a(2964));const f="token",g=t=>{localStorage.setItem(f,t)},b=()=>localStorage.getItem(f),k=()=>{localStorage.removeItem(f)},_=m.c.create({baseURL:"http://interview-api-t.itheima.net/h5/",timeout:5e3});_.interceptors.request.use((t=>{const e=b();return e&&(t.headers.Authorization="Bearer "+e),t}),(t=>Promise.reject(t))),_.interceptors.response.use((t=>t.data),(t=>(401===t.response.status?(d.c.fail("登录已过期，请重新登录"),k(),It.push("/login")):d.c.fail({message:t.response.data.message,forbidClick:!0}),Promise.reject(t))));var w=_;const y=t=>w.get("interview/query",{params:{...t,pageSize:10}}),x=t=>w.get("interview/show/",{params:{id:t}}),C=t=>w.post("interview/opt",t),j=t=>w.get("interview/opt/list",{params:{...t}});var O={name:"MyDetail",data(){return{detail:{},like:0,star:0}},methods:{async addlikeorstar(t){await C({id:this.$route.params.id,optType:t}),1===t&&(this.detail.likeFlag=0===this.detail.likeFlag?1:0),2===t&&(this.detail.collectFlag=0===this.detail.collectFlag?1:0),this.star=this.detail.collectFlag,this.like=this.detail.likeFlag}},async created(){const t=await x(this.$route.params.id);this.detail=t.data,this.like=this.detail.likeFlag,this.star=this.detail.collectFlag}},$=O,S=(0,l.c)($,v,h,!1,null,"2943c486",null),T=S.exports,I=function(){var t=this,e=t._self._c;return e("div",[e("router-view"),e("van-tabbar",{attrs:{route:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("van-tabbar-item",{attrs:{to:"/article",icon:"notes-o"}},[t._v("面经")]),e("van-tabbar-item",{attrs:{to:"/collect",icon:"star-o"}},[t._v("收藏")]),e("van-tabbar-item",{attrs:{to:"/like",icon:"like-o"}},[t._v("喜欢")]),e("van-tabbar-item",{attrs:{to:"/user",icon:"user-o"}},[t._v("我的")])],1)],1)},A=[],P={name:"LayOut",data(){return{active:0}}},q=P,F=(0,l.c)(q,I,A,!1,null,null,null),M=F.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"loginbox"},[e("van-nav-bar",{attrs:{title:"面经登录"}}),e("van-form",{attrs:{"show-error":!1},on:{submit:t.onSubmit}},[e("van-field",{attrs:{name:"username",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"},{pattern:/^[a-zA-Z0-9]{5,10}$/,message:"用户名格式错误"}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),e("van-field",{attrs:{type:"password",name:"password",placeholder:"密码",rules:[{required:!0,message:"请填写密码"},{pattern:/^[a-zA-Z0-9]{6,15}$/,message:"密码格式错误"}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{square:"",block:"",color:"orange","native-type":"submit"}},[t._v("提交")])],1)],1),e("router-link",{staticClass:"link",attrs:{to:"/register"}},[t._v("没有账号？点击注册")])],1)},z=[];const Z=t=>w.post("/user/register",t),H=t=>w.post("/user/login",t),U=()=>w.get("/user/currentUser");var E={name:"MyLogin",data(){return{username:"",password:""}},methods:{async onSubmit(t){const e=await H(t);d.c.success({message:"登录成功",forbidClick:!0}),g(e.data.token),setTimeout((()=>{this.$router.push("/")}),2e3)}}},R=E,B=(0,l.c)(R,L,z,!1,null,"2a6b5f40",null),D=B.exports,G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"loginbox"},[e("van-nav-bar",{attrs:{title:"面经注册"}}),e("van-form",{attrs:{"show-error":!1},on:{submit:t.onSubmit}},[e("van-field",{attrs:{name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"},{pattern:/^[a-zA-Z0-9]{5,10}$/,message:"用户名格式错误"}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),e("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"},{pattern:/^[a-zA-Z0-9]{6,15}$/,message:"密码格式错误"}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{square:"",block:"",color:"skyblue","native-type":"submit"}},[t._v("提交")])],1)],1),e("router-link",{staticClass:"link",attrs:{to:"/login"}},[t._v("已有账号？点击登录")])],1)},J=[],K={name:"MyRegister",data(){return{username:"",password:""}},methods:{async onSubmit(t){await Z(t),d.c.success({message:"注册成功",forbidClick:!0}),setTimeout((()=>{this.$router.push("/login")}),2e3)}}},N=K,Q=(0,l.c)(N,G,J,!1,null,"2aef1eb1",null),V=Q.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"article-page"},[e("nav",{staticClass:"my-nav van-hairline--bottom"},[e("a",{class:{active:0===t.activeIndex},attrs:{href:"javascript:;"},on:{click:function(e){t.activeIndex=0}}},[t._v("推荐")]),e("a",{class:{active:1===t.activeIndex},attrs:{href:"javascript:;"},on:{click:function(e){t.activeIndex=1}}},[t._v("最新")]),t._m(0)]),e("keep-alive",[e("van-list",{attrs:{finished:t.finished,"finished-text":"到底了"},on:{load:t.onload},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(a){return e("article-item",{key:a.id,attrs:{ele:a},nativeOn:{click:function(e){return t.getarticleiteminfo(a.id)}}})})),1)],1)],1)},X=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:a(656),alt:""}})])}],Y={name:"ArticlePage",data(){return{list:[],loading:!1,finished:!1,activeIndex:0,obj:{current:1,sorter:"weight_desc"}}},methods:{getarticleiteminfo(t){this.$router.push(`/detail/${t}`)},async onload(){const t=await y(this.obj);this.list.push(...t.data.rows),this.obj.current++,this.loading=!1,t.data.total===this.list.length&&(this.finished=!0)}},watch:{activeIndex(t){this.obj.sorter=0===this.activeIndex?"weight_desc":null,this.list=[],this.obj.current=1,this.loading=!0,this.onload()}}},tt=Y,et=(0,l.c)(tt,W,X,!1,null,"213839ee",null),at=et.exports,it=function(){var t=this,e=t._self._c;return e("div",{staticClass:"collect-page"},[e("van-list",{attrs:{finished:t.finished,"finished-text":"到底了"},on:{load:t.onload},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(a){return e("article-item",{key:a.id,attrs:{ele:a},nativeOn:{click:function(e){return t.getarticleiteminfo(a.id)}}})})),1)],1)},st=[],nt={name:"CollectPage",data(){return{obj1:{optType:2,page:1},list:[],loading:!1,finished:!1}},methods:{getarticleiteminfo(t){this.$router.push(`/detail/${t}`)},async onload(){const t=await j(this.obj1);this.list.push(...t.data.rows),this.obj1.page++,this.loading=!1,t.data.total===this.list.length&&(this.finished=!0)}}},rt=nt,ot=(0,l.c)(rt,it,st,!1,null,"706c80a2",null),lt=ot.exports,ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"like-page"},[e("van-list",{attrs:{finished:t.finished,"finished-text":"到底了"},on:{load:t.onload},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(a){return e("article-item",{key:a.id,attrs:{ele:a},nativeOn:{click:function(e){return t.getarticleiteminfo(a.id)}}})})),1)],1)},ut=[],dt=function(){var t=this,e=t._self._c;return e("div",[e("van-cell",{staticClass:"article-item"},[e("div",{staticClass:"head"},[e("img",{attrs:{src:t.ele.avatar,alt:""}}),e("div",{staticClass:"con"},[e("p",{staticClass:"title van-ellipsis"},[t._v(t._s(t.ele.stem))]),e("p",{staticClass:"other"},[t._v(t._s(t.ele.creator)+" | "+t._s(t.ele.createdAt))])])]),e("div",{staticClass:"body van-multi-ellipsis--l2"},[t._v(t._s(t.removeHTMLTags(t.ele.content)))]),e("div",{staticClass:"foot"},[t._v("点赞 "+t._s(t.ele.likeCount)+" | 浏览 "+t._s(t.ele.views))])])],1)},pt=[],vt={name:"ArticleItem",props:{ele:{type:Object,required:!0}},methods:{removeHTMLTags(t){return t.replace(/<[^>]*>/g,"")}}},ht=vt,mt=(0,l.c)(ht,dt,pt,!1,null,"52813f1c",null),ft=mt.exports,gt={components:{ArticleItem:ft},name:"LikePage",data(){return{obj1:{optType:1,page:1},list:[],loading:!1,finished:!1}},methods:{getarticleiteminfo(t){this.$router.push(`/detail/${t}`)},async onload(){const t=await j(this.obj1);this.list.push(...t.data.rows),this.obj1.page++,this.loading=!1,t.data.total===this.list.length&&(this.finished=!0)}}},bt=gt,kt=(0,l.c)(bt,ct,ut,!1,null,"2f1f42b5",null),_t=kt.exports,wt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-page"},[e("div",{staticClass:"user"},[e("img",{attrs:{src:t.avatar,alt:""}}),e("h3",[t._v(t._s(t.username))])]),e("van-grid",{attrs:{clickable:"","column-num":3,border:!1}},[e("van-grid-item",{attrs:{icon:"clock-o",text:"历史记录",to:"/"}}),e("van-grid-item",{attrs:{icon:"bookmark-o",text:"我的收藏",to:"/collect"}}),e("van-grid-item",{attrs:{icon:"thumb-circle-o",text:"我的点赞",to:"/like"}})],1),e("van-cell-group",{staticClass:"mt20"},[e("van-cell",{attrs:{title:"推荐分享","is-link":""}}),e("van-cell",{attrs:{title:"意见反馈","is-link":""}}),e("van-cell",{attrs:{title:"关于我们","is-link":""}}),e("van-cell",{attrs:{title:"退出登录","is-link":""},on:{click:t.logout}})],1)],1)},yt=[],xt={name:"UserPage",data(){return{avatar:"",username:""}},async created(){const t=await U();this.avatar=t.data.avatar,this.username=t.data.username},methods:{logout(){this.$dialog.confirm({title:"提示",message:"确认退出吗？"}).then((()=>{k(),this.$toast.success("退出成功"),this.$router.push("/login")})).catch((()=>{this.$toast("取消退出")}))}}},Ct=xt,jt=(0,l.c)(Ct,wt,yt,!1,null,"0bad4b9e",null),Ot=jt.exports;i.cp.use(p.cp);const $t=[{path:"/login",component:D},{path:"/detail/:id",component:T},{path:"/",component:M,redirect:"/article",children:[{path:"/article",component:at},{path:"collect",component:lt},{path:"like",component:_t},{path:"user",component:Ot}]},{path:"/register",component:V}],St=new p.cp({routes:$t,mode:"hash"}),Tt=["/login","/register"];St.beforeEach(((t,e,a)=>{const i=b();return i||Tt.includes(t.path)?a():((0,d.c)("请先登录"),void a("/login"))}));var It=St,At=(a(4804),a(2516)),Pt=(a(6832),a(8344)),qt=(a(9972),a(3048)),Ft=(a(2260),a(6244)),Mt=(a(6504),a(6484)),Lt=(a(4068),a(3831)),zt=(a(7108),a(2064)),Zt=(a(4784),a(8708)),Ht=(a(6776),a(564)),Ut=(a(9540),a(8100)),Et=(a(3868),a(2240)),Rt=(a(5148),a(3056)),Bt=(a(8112),a(8048)),Dt=(a(1560),a(4716)),Gt=(a(7336),a(4276)),Jt=(a(7848),a(7784));i.cp.use(Jt.c),i.cp.use(Gt.c),i.cp.use(Dt.c),i.cp.use(Bt.c),i.cp.use(Rt.c),i.cp.use(Et.c),i.cp.use(Ut.c),i.cp.use(Ht.c),i.cp.use(Bt.c),i.cp.use(Zt.c),i.cp.use(d.c),i.cp.use(zt.c),i.cp.use(Lt.c),i.cp.use(Mt.c),i.cp.use(Ft.c),i.cp.use(qt.c),i.cp.use(Pt.c),i.cp.use(At.c),i.cp.config.productionTip=!1,i.cp.component("ArticleItem",ft),new i.cp({router:It,render:t=>t(u)}).$mount("#app")},656:function(t,e,a){t.exports=a.p+"img/logo.dbd40807.png"}},e={};function a(i){var s=e[i];if(void 0!==s)return s.exports;var n=e[i]={exports:{}};return t[i].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,i,s,n){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],s=t[u][1],n=t[u][2];for(var o=!0,l=0;l<i.length;l++)(!1&n||r>=n)&&Object.keys(a.O).every((function(t){return a.O[t](i[l])}))?i.splice(l--,1):(o=!1,n<r&&(r=n));if(o){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,s,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,n,r=i[0],o=i[1],l=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var u=l(a)}for(e&&e(i);c<r.length;c++)n=r[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},i=self["webpackChunkhm_yidongmj"]=self["webpackChunkhm_yidongmj"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[999],(function(){return a(8351)}));i=a.O(i)})();
//# sourceMappingURL=app.2606bd60.js.map