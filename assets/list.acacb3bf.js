import{d as e,Q as a,m as s,g as t,e as l,f as d,H as i,F as o,n,E as c}from"./vendor.3edfc556.js";import{a as r}from"./index.cea58471.js";const u=e({data:()=>({list:[]}),mounted(){console.log("mounted media/list.vue"),this.loadMediaList()},activated(){console.log("activated media/list.vue"),this.loadMediaList()},methods:{loadMediaList(){r.get("/media/list").then((e=>{console.log("media list",e),this.list=e.data.list}))},deleteMedia(e){(e=>r.delete("/media/delete",{params:{id:e}}))(e).then((e=>{const{data:s}=e;s.result?(a.ElMessage({message:"删除成功",type:"success"}),this.loadMediaList()):a.ElMessage({message:"删除失败(文件可能不存在)",type:"error"})}))}}}),m=d("h2",null,"文件列表",-1),g=c(" 123456  ");u.render=function(e,a,c,r,u,f){const h=s("el-button"),p=s("el-row"),M=s("el-card"),v=s("el-col");return t(),l("div",null,[m,d(p,null,{default:i((()=>[(t(!0),l(o,null,n(e.list,(a=>(t(),l(v,{key:a.id,span:8,class:"item"},{default:i((()=>[d(M,{"body-style":{padding:"0px"},shadow:"hover"},{default:i((()=>[d("img",{src:a.path,class:"image"},null,8,["src"]),d(p,{justify:"center",align:"middle"},{default:i((()=>[g,d(h,{type:"danger",icon:"el-icon-delete",circle:"",onClick:s=>e.deleteMedia(a.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])};export{u as default};
