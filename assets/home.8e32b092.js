var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,s=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&r(e,a,t[a]);if(o)for(var a of o(t))n.call(t,a)&&r(e,a,t[a]);return e},l=(e,o)=>t(e,a(o));import{r as c,v as p}from"./index.2950bfb7.js";import{r as d,U as u,l as m,C as f}from"./index.7f445b7b.js";import{d as v,s as b,b as g,x as h,p as w,c as y,m as k,g as j,e as x,f as S,F as P,n as _,w as O,E as I,Z as C}from"./vendor.3edfc556.js";const z="/api/data/world-population";var L=v({name:"Home",components:{},setup(){const e=b({swiperItems:[{name:"vue-next",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c588b8ab65a74d59aa379801136df4e0~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/vuejs/docs-next-zh-cn"},{name:"vitejs",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7351d2dcd7846158604ac8bd57222b5~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/vitejs"},{name:"element-plus",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48a7fd198df44cca9c0dc10a8047bbef~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/element-plus/element-plus"},{name:"tslang",itemSrc:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/610fc57450884ceaae9578689663fe2f~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/Microsoft/TypeScript"}]});d("point","cloud",{draw(e,t){const a=(e=>{var t;return l(s(s({},e.defaultStyle),e.style),{fontSize:e.data.size,text:e.data.text,textAlign:"center",fontFamily:e.data.font,fill:e.color||(null==(t=null==e?void 0:e.defaultStyle)?void 0:t.stroke),textBaseline:"alphabetic"})})(e),o=t.addShape("text",{attrs:l(s({},a),{x:null==e?void 0:e.x,y:null==e?void 0:e.y})}),i=e.data;return i.rotate&&u.rotate(o,i.rotate*Math.PI/180),o}});const t=async()=>{try{const e=await class{static getWorldPopulation(){return c({url:z,method:"get",json:!0}).then((e=>0===e.status?Promise.resolve(e):Promise.reject(e)))}}.getWorldPopulation(),{dataSets:t}=e.data,a=(new m.View).source(t),o=a.range("value"),i=o[0],n=o[1];a.transform({type:"tag-cloud",fields:["x","value"],size:[800,600],font:"Verdana",padding:0,timeInterval:5e3,rotate(){let e=~~(4*Math.random())%4;return 2===e&&(e=0),90*e},fontSize:e=>e.value?(e.value-i)/(n-i)*56+24:0});const r=new f({container:"container",autoFit:!1,width:800,height:600,padding:0});r.data(a.rows),r.scale({x:{nice:!1},y:{nice:!1}}),r.legend(!1),r.axis(!1),r.tooltip({showTitle:!1,showMarkers:!1}),r.coordinate().reflect("x"),r.point().position("x*y").color("CornflowerBlue").shape("cloud").tooltip("value*category"),r.interaction("element-active"),r.render()}catch(e){console.error(e)}};return g((()=>{console.log(),t()})),l(s({handleClickImg:e=>{window.open(e,"_blank")}},h(e)),{logo:p})}});const M=O();w("data-v-3ca6a9eb");const V={class:"home-container page-container"},E=S("div",null,null,-1),F={class:"top-container"},T=S("div",{class:"title"},"搜索词云",-1),B={class:"page-title"},W=I("信息链接:"),A=I("Vite2.x +"),D=I("Vue3.x +"),H=I("TypeScript +"),N=I("Element Plus"),U=C('<div class="word-cloud-wrapper" data-v-3ca6a9eb><div class="right-bottom" data-v-3ca6a9eb></div><div class="word-sets" data-v-3ca6a9eb><div class="sets-module" data-v-3ca6a9eb><div id="container" data-v-3ca6a9eb></div></div></div></div>',1);y();const Z=M(((e,t,a,o,i,n)=>{const r=k("el-carousel-item"),s=k("el-carousel"),l=k("el-link");return j(),x("div",V,[E,S(s,{interval:4e3,"indicator-position":"outside"},{default:M((()=>[(j(!0),x(P,null,_(e.swiperItems,(t=>(j(),x(r,{key:t},{default:M((()=>[S("img",{class:"vue-element-plus-logo",alt:t.name,src:t.itemSrc,onClick:a=>e.handleClickImg(t.targetLink)},null,8,["alt","src","onClick"])])),_:2},1024)))),128))])),_:1}),S("div",F,[T,S("div",B,[S(l,{type:"info"},{default:M((()=>[W])),_:1}),S(l,{type:"primary",href:"https://www.vitejs.net/guide/"},{default:M((()=>[A])),_:1}),S(l,{type:"success",href:"https://v3.cn.vuejs.org/"},{default:M((()=>[D])),_:1}),S(l,{type:"warning",href:"https://www.tslang.cn/"},{default:M((()=>[H])),_:1}),S(l,{type:"danger",href:"https://element-plus.gitee.io/#/zh-CN/component/link"},{default:M((()=>[N])),_:1})])]),U])}));L.render=Z,L.__scopeId="data-v-3ca6a9eb";export{L as default};
