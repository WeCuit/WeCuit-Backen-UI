var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{d as n,y as i,aR as c,A as d,aP as p,k as u,e as b,c as f,s as g,q as y,g as m}from"./vendor.15aec843.js";import{d as P,g as j}from"./index.734f4b75.js";import"./index.d603c67d.js";const O=n({setup(){const e=i({list:[],currentPage:1,totalPages:1,pageLimit:10}),n=(t=1,r=10)=>{j().then((r=>{const{data:a}=r;e.list=a.rows,e.currentPage=t,e.totalPages=a.pages}))};return c((()=>{n()})),u=((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&s(e,r,t[r]);return e})({},d(e)),t(u,r({deleteArticleById:t=>{P(t).then((t=>{const{data:r}=t;r.result&&(p.ElMessage({message:"删除成功",type:"success"}),n(e.currentPage,e.pageLimit))}))}}));var u}}),v=m("h2",null,"文章列表",-1);O.render=function(e,t,r,a,l,o){const s=u("el-table-column"),n=u("el-button"),i=u("router-link"),c=u("el-table"),d=u("el-card");return b(),f("div",null,[g(d,null,{default:y((()=>[v,g(c,{data:e.list},{default:y((()=>[g(s,{prop:"title",label:"标题"}),g(s,{prop:"created",label:"发布时间"}),g(s,{label:"操作"},{default:y((t=>[g(i,{to:"/article/edit?id="+t.row.id},{default:y((()=>[g(n,{type:"primary",icon:"el-icon-edit",circle:""})])),_:2},1032,["to"]),g(n,{type:"danger",icon:"el-icon-delete",circle:"",onClick:r=>e.deleteArticleById(t.row.id)},null,8,["onClick"])])),_:1})])),_:1},8,["data"])])),_:1})])};export{O as default};
