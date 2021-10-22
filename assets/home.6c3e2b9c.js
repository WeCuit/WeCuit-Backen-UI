var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,s=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&n(e,a,t[a]);if(o)for(var a of o(t))r.call(t,a)&&n(e,a,t[a]);return e},l=(e,o)=>t(e,a(o));import{r as c,v as p}from"./index.32e961e9.js";import{r as d,U as u,l as m,C as f}from"./index.ca412961.js";import{d as v,y as g,b,A as h,k as y,e as w,c as k,s as j,q as x,F as S,t as P,g as _,p as I,f as O,I as C,a1 as z,m as L}from"./vendor.aed6a4c3.js";const M="/api/data/world-population";var V=v({name:"Home",components:{},setup(){const e=g({swiperItems:[{name:"vue-next",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c588b8ab65a74d59aa379801136df4e0~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/vuejs/docs-next-zh-cn"},{name:"vitejs",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7351d2dcd7846158604ac8bd57222b5~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/vitejs"},{name:"element-plus",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48a7fd198df44cca9c0dc10a8047bbef~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/element-plus/element-plus"},{name:"tslang",itemSrc:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/610fc57450884ceaae9578689663fe2f~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/Microsoft/TypeScript"}]});d("point","cloud",{draw(e,t){const a=(e=>{var t;return l(s(s({},e.defaultStyle),e.style),{fontSize:e.data.size,text:e.data.text,textAlign:"center",fontFamily:e.data.font,fill:e.color||(null==(t=null==e?void 0:e.defaultStyle)?void 0:t.stroke),textBaseline:"alphabetic"})})(e),o=t.addShape("text",{attrs:l(s({},a),{x:null==e?void 0:e.x,y:null==e?void 0:e.y})}),i=e.data;return i.rotate&&u.rotate(o,i.rotate*Math.PI/180),o}});const t=async()=>{try{const e=await class{static getWorldPopulation(){return c({url:M,method:"get",json:!0}).then((e=>0===e.status?Promise.resolve(e):Promise.reject(e)))}}.getWorldPopulation(),{dataSets:t}=e.data,a=(new m.View).source(t),o=a.range("value"),i=o[0],r=o[1];a.transform({type:"tag-cloud",fields:["x","value"],size:[800,600],font:"Verdana",padding:0,timeInterval:5e3,rotate(){let e=~~(4*Math.random())%4;return 2===e&&(e=0),90*e},fontSize:e=>e.value?(e.value-i)/(r-i)*56+24:0});const n=new f({container:"container",autoFit:!1,width:800,height:600,padding:0});n.data(a.rows),n.scale({x:{nice:!1},y:{nice:!1}}),n.legend(!1),n.axis(!1),n.tooltip({showTitle:!1,showMarkers:!1}),n.coordinate().reflect("x"),n.point().position("x*y").color("CornflowerBlue").shape("cloud").tooltip("value*category"),n.interaction("element-active"),n.render()}catch(e){console.error(e)}};return b((()=>{console.log(),t()})),l(s({handleClickImg:e=>{window.open(e,"_blank")}},h(e)),{logo:p})}});const F=e=>(I("data-v-3ca6a9eb"),e=e(),O(),e),T={class:"home-container page-container"},A=F((()=>_("div",null,null,-1))),B=["alt","src","onClick"],E={class:"top-container"},W=F((()=>_("div",{class:"title"},"搜索词云",-1))),q={class:"page-title"},D=C("信息链接:"),H=C("Vite2.x +"),N=C("Vue3.x +"),U=C("TypeScript +"),G=C("Element Plus"),J=z('<div class="word-cloud-wrapper" data-v-3ca6a9eb><div class="right-bottom" data-v-3ca6a9eb></div><div class="word-sets" data-v-3ca6a9eb><div class="sets-module" data-v-3ca6a9eb><div id="container" data-v-3ca6a9eb></div></div></div></div>',1);V.render=function(e,t,a,o,i,r){const n=y("el-carousel-item"),s=y("el-carousel"),l=y("el-link");return w(),k("div",T,[A,j(s,{interval:4e3,"indicator-position":"outside"},{default:x((()=>[(w(!0),k(S,null,P(e.swiperItems,(t=>(w(),L(n,{key:t},{default:x((()=>[_("img",{class:"vue-element-plus-logo",alt:t.name,src:t.itemSrc,onClick:a=>e.handleClickImg(t.targetLink)},null,8,B)])),_:2},1024)))),128))])),_:1}),_("div",E,[W,_("div",q,[j(l,{type:"info"},{default:x((()=>[D])),_:1}),j(l,{type:"primary",href:"https://www.vitejs.net/guide/"},{default:x((()=>[H])),_:1}),j(l,{type:"success",href:"https://v3.cn.vuejs.org/"},{default:x((()=>[N])),_:1}),j(l,{type:"warning",href:"https://www.tslang.cn/"},{default:x((()=>[U])),_:1}),j(l,{type:"danger",href:"https://element-plus.gitee.io/#/zh-CN/component/link"},{default:x((()=>[G])),_:1})])]),J])},V.__scopeId="data-v-3ca6a9eb";export{V as default};
