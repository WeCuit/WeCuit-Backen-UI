!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var c=null!=arguments[r]?arguments[r]:{};r%2?e(Object(c),!0).forEach((function(e){n(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):e(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./vendor-legacy.81140759.js","./index-legacy.0b88fb80.js","./index-legacy.3c2ce67b.js"],(function(e){"use strict";var n,r,c,i,l,o,u,a,f,s,d,p,b;return{setters:[function(e){n=e.d,r=e.y,c=e.aR,i=e.A,l=e.aP,o=e.k,u=e.e,a=e.c,f=e.s,s=e.q,d=e.g},function(e){p=e.d,b=e.g},function(){}],execute:function(){var g=e("default",n({setup:function(){var e=r({list:[],currentPage:1,totalPages:1,pageLimit:10}),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;b().then((function(n){var r=n.data;e.list=r.rows,e.currentPage=t,e.totalPages=r.pages}))};return c((function(){n()})),t(t({},i(e)),{},{deleteArticleById:function(t){p(t).then((function(t){t.data.result&&(l.ElMessage({message:"删除成功",type:"success"}),n(e.currentPage,e.pageLimit))}))}})}})),y=d("h2",null,"文章列表",-1);g.render=function(e,t,n,r,c,i){var l=o("el-table-column"),d=o("el-button"),p=o("router-link"),b=o("el-table"),g=o("el-card");return u(),a("div",null,[f(g,null,{default:s((function(){return[y,f(b,{data:e.list},{default:s((function(){return[f(l,{prop:"title",label:"标题"}),f(l,{prop:"created",label:"发布时间"}),f(l,{label:"操作"},{default:s((function(t){return[f(p,{to:"/article/edit?id="+t.row.id},{default:s((function(){return[f(d,{type:"primary",icon:"el-icon-edit",circle:""})]})),_:2},1032,["to"]),f(d,{type:"danger",icon:"el-icon-delete",circle:"",onClick:function(n){return e.deleteArticleById(t.row.id)}},null,8,["onClick"])]})),_:1})]})),_:1},8,["data"])]})),_:1})])}}}}))}();
