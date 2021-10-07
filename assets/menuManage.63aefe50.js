var i=Object.defineProperty,e=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,t=(e,l,c)=>l in e?i(e,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[l]=c,n=(i,e)=>{for(var l in e||(e={}))a.call(e,l)&&t(i,l,e[l]);if(c)for(var l of c(e))o.call(e,l)&&t(i,l,e[l]);return i},s=(i,c)=>e(i,l(c));import{a as r,u as d}from"./index.b07bde12.js";import{d as u,s as m,r as f,b as p,x as g,p as b,c as h,m as k,g as y,e as v,f as w,F as C,n as V,w as _,aT as S,B as z,H as x,E,G as j,i as M,A as O,t as q,I as U}from"./vendor.3edfc556.js";var I=u({name:"Icon",props:{msg:{type:String,required:!1,default:""}},emits:["success"],setup:(i,{emit:e})=>{const l=m({icons:["ic ic-accessory","ic ic-activity","ic ic-activity-fill","ic ic-add","ic ic-addition-fill","ic ic-addition","ic ic-addpeople-fill","ic ic-addpeople","ic ic-addressbook-fill","ic ic-addressbook","ic ic-barrage-fill","ic ic-barrage","ic ic-browse-fill","ic ic-browse","ic ic-brush","ic ic-brush-fill","ic ic-businesscard-fill","ic ic-businesscard","ic ic-camera-fill","ic ic-camera","ic ic-clock-fill","ic ic-clock","ic ic-close","ic ic-collection-fill","ic ic-collection","ic ic-computer-fill","ic ic-computer","ic ic-coordinates-fill","ic ic-coordinates","ic ic-coupons-fill","ic ic-coupons","ic ic-createtask-fill","ic ic-createtask","ic ic-customerservice-fill","ic ic-customerservice","ic ic-delete-fill","ic ic-delete","ic ic-document","ic ic-document-fill","ic ic-dynamic ic-fill","ic ic-dynamic","ic ic-editor","ic ic-eit","ic ic-emoji-fill","ic ic-emoji","ic ic-empty","ic ic-empty-fill","ic ic-enter","ic ic-enterinto","ic ic-enterinto-fill","ic ic-feedback-fill","ic ic-feedback","ic ic-flag-fill","ic ic-flag","ic ic-flashlight","ic ic-flashlight-fill","ic ic-flip","ic ic-flip-fill","ic ic-fullscreen","ic ic-group","ic ic-group-fill","ic ic-headlines-fill","ic ic-headlines","ic ic-homepage-fill","ic ic-homepage","ic ic-integral-fill","ic ic-integral","ic ic-interactive-fill","ic ic-interactive","ic ic-keyboard","ic ic-label","ic ic-label-fill","ic ic-like-fill","ic ic-like","ic ic-live-fill","ic ic-live","ic ic-lock-fill","ic ic-lock","ic ic-mail","ic ic-mail-fill","ic ic-manage-fill","ic ic-manage","ic ic-message","ic ic-message-fill","ic ic-mine","ic ic-mine-fill","ic ic-mobilephone-fill","ic ic-mobilephone","ic ic-more","ic ic-narrow","ic ic-offline-fill","ic ic-offline","ic ic-order-fill","ic ic-order","ic ic-other","ic ic-people-fill","ic ic-people","ic ic-picture-fill","ic ic-picture","ic ic-play","ic ic-play-fill","ic ic-playon-fill","ic ic-playon","ic ic-praise-fill","ic ic-praise","ic ic-prompt-fill","ic ic-prompt","ic ic-qrcode-fill","ic ic-qrcode","ic ic-redpacket-fill","ic ic-redpacket","ic ic-refresh","ic ic-remind-fill","ic ic-remind","ic ic-return","ic ic-right","ic ic-scan","ic ic-select-fill","ic ic-select","ic ic-send","ic ic-service-fill","ic ic-service","ic ic-setup-fill","ic ic-setup","ic ic-share-fill","ic ic-share","ic ic-shielding-fill","ic ic-shielding","ic ic-smallscreen-fill","ic ic-smallscreen","ic ic-stealth-fill","ic ic-stealth","ic ic-success-fill","ic ic-success","ic ic-suspend","ic ic-switch","ic ic-systemprompt-fill","ic ic-systemprompt","ic ic-tailor","ic ic-task","ic ic-task-fill","ic ic-tasklist-fill","ic ic-tasklist","ic ic-text","ic ic-time-fill","ic ic-time","ic ic-translation-fill","ic ic-translation","ic ic-trash","ic ic-trash-fill","ic ic-undo","ic ic-unlock-fill","ic ic-unlock","ic ic-video","ic ic-video-fill","ic ic-warning-fill","ic ic-warning","ic ic-workbench-fill","ic ic-workbench","ic ic-search","ic ic-searchfill","ic ic-publishgoods-fill","ic ic-shop-fill","ic ic-transaction-fill","ic ic-packup","ic ic-unfold","ic ic-wangwang","ic ic-financial-fill","ic ic-marketing-fill","ic ic-shake","ic ic-decoration-fill","ic ic-questions","ic ic-supply","ic ic-tools","ic ic-int","ic ic-commodity","ic ic-zhtn"],data:[""],key:""}),c=f(0);return p((()=>{l.data=l.icons})),s(n({count:c},g(l)),{search:()=>{const{key:i}=l,{icons:e}=l;l.data=i?e.filter((i=>e=>e.toLowerCase().indexOf(i.toLowerCase())>0)(i)):e},selected:i=>{e("success",i)}})}});const A=_();b("data-v-57f84410");const R={class:"icon-panel"},F=w("br",null,null,-1),P=w("br",null,null,-1),$=w("br",null,null,-1);h();const B=A(((i,e,l,c,a,o)=>{const t=k("el-button"),n=k("el-input");return y(),v("div",R,[w(n,{modelValue:i.key,"onUpdate:modelValue":e[2]||(e[2]=e=>i.key=e),placeholder:"搜索图标",onInput:i.search},{default:A((()=>[w(t,{icon:"el-icon-search",onClick:e[1]||(e[1]=e=>i.search())})])),_:1},8,["modelValue","onInput"]),F,P,w("section",null,[(y(!0),v(C,null,V(i.data,(e=>(y(),v("span",{key:e,class:"icon-items",onClick:l=>i.selected(e)},[w("i",{class:e},null,2),$],8,["onClick"])))),128))])])}));I.render=B,I.__scopeId="data-v-57f84410";const Z=/^(\/[a-zA-Z][0-9a-zA-Z]+)+$/,D=(i,e,l)=>{Z.test(e)?l():l(new Error("必须输入正确的路径"))};var L=u({name:"MenuNew",components:{Icons:I},emits:["success"],setup(i,{emit:e}){const l={"meta.title":[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],"meta.icon":[{required:!0,message:"请输入菜单图标",trigger:"blur"}],path:[{required:!0,message:"请输入菜单路径",trigger:"blur"},{min:2,message:"至少2个字符",trigger:"blur"},{validator:D,trigger:"blur"}]},c=f(),a=m({form:{path:"",meta:{title:"",icon:""}},modal:!1,loading:!1});return s(n({},g(a)),{formRef:c,rules:l,onSuccess:i=>{console.log("val is ",i),a.modal=!1,a.form.meta.icon=i},submitForm:()=>{c.value.validate((i=>!!i&&(console.log(a.form),e("success",a.form),!0)))},handleClickChoose:()=>{a.modal=!a.modal,console.log(" state.modal",a.modal)}})}});const T={class:"new"},N=E("选择图标"),G=w("i",{class:"fa fa-plus"},null,-1),H=E(" 确认修改 ");L.render=function(i,e,l,c,a,o){const t=k("el-input"),n=k("el-form-item"),s=k("el-button"),r=k("icons"),d=k("el-popover"),u=k("el-row"),m=k("el-form"),f=S("loading");return z((y(),v("div",T,[w(m,{ref:"formRef",model:i.form,rules:i.rules,"label-position":"right","label-width":"100px"},{default:x((()=>[w(n,{label:"菜单名称",prop:"meta.title"},{default:x((()=>[w(t,{modelValue:i.form.meta.title,"onUpdate:modelValue":e[1]||(e[1]=e=>i.form.meta.title=e),placeholder:"请输入菜单名称"},null,8,["modelValue"])])),_:1}),w(n,{label:"菜单图标",prop:"meta.icon"},{default:x((()=>[w(t,{modelValue:i.form.meta.icon,"onUpdate:modelValue":e[2]||(e[2]=e=>i.form.meta.icon=e),placeholder:"请选择菜单图标",style:{width:"60%"}},null,8,["modelValue"]),w(s,{disabled:"disabled"},{default:x((()=>[w("i",{class:i.form.meta.icon},null,2)])),_:1}),w(d,{visible:i.modal,placement:"bottom",width:"80vw",title:"请选择图标"},{reference:x((()=>[w(s,{icon:"el-icon-search",onClick:i.handleClickChoose},{default:x((()=>[N])),_:1},8,["onClick"])])),default:x((()=>[w(r,{onSuccess:i.onSuccess},null,8,["onSuccess"])])),_:1},8,["visible"])])),_:1}),w(n,{label:"菜单路径",prop:"path"},{default:x((()=>[w(t,{modelValue:i.form.path,"onUpdate:modelValue":e[3]||(e[3]=e=>i.form.path=e),placeholder:"请输入菜单路径"},null,8,["modelValue"])])),_:1}),w(u,{class:"btn-container"},{default:x((()=>[w(s,{size:"mini",type:"primary",onClick:e[4]||(e[4]=e=>i.submitForm())},{default:x((()=>[G,H])),_:1})])),_:1})])),_:1},8,["model","rules"])],512)),[[f,i.loading]])};const J=()=>r.get("/auth/menus"),K=/^(\/[a-zA-Z][0-9a-zA-Z]+)+$/,Q=(i,e,l)=>{K.test(e)?l():l(new Error("必须输入正确的路径"))};var W=u({name:"MenuEdit",components:{Icons:I},props:{currentMenu:{type:Object,default:null}},emits:["success"],setup(i,{emit:e}){const l=j(i,"currentMenu");console.log(l);const c={name:[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],icon:[{required:!0,message:"请输入菜单图标",trigger:"blur"}],path:[{required:!0,message:"请输入菜单路径",trigger:"blur"},{min:2,message:"至少2个字符",trigger:"blur"},{validator:Q,trigger:"blur"}]},a=f(),o=m({form:l,modal:!1,loading:!1});return s(n({},g(o)),{formRef:a,rules:c,onSuccess:i=>{console.log("val is ",i),o.modal=!1,o.form.icon=i},submitForm:()=>{a.value.validate((i=>{return!!i&&((l=o.form,r.patch(`/auth/menus/${l.id}`,l)).then((i=>{i.data.result&&e("success",o.form)})),!0);var l}))},handleClickChoose:()=>{o.modal=!o.modal,console.log(" state.modal",o.modal)}})}});const X={class:"new"},Y=E("选择图标"),ii=w("i",{class:"fa fa-plus"},null,-1),ei=E(" 确认修改 ");W.render=function(i,e,l,c,a,o){const t=k("el-input"),n=k("el-form-item"),s=k("el-button"),r=k("icons"),d=k("el-popover"),u=k("el-row"),m=k("el-form"),f=S("loading");return z((y(),v("div",X,[w(m,{ref:"formRef",model:i.form,rules:i.rules,"label-position":"right","label-width":"100px"},{default:x((()=>[w(n,{label:"菜单名称",prop:"name"},{default:x((()=>[w(t,{modelValue:i.form.name,"onUpdate:modelValue":e[1]||(e[1]=e=>i.form.name=e),placeholder:"请输入菜单名称"},null,8,["modelValue"])])),_:1}),w(n,{label:"菜单图标",prop:"icon"},{default:x((()=>[w(t,{modelValue:i.form.icon,"onUpdate:modelValue":e[2]||(e[2]=e=>i.form.icon=e),placeholder:"请选择菜单图标",style:{width:"60%"}},null,8,["modelValue"]),w(s,{disabled:"disabled"},{default:x((()=>[w("i",{class:i.form.icon},null,2)])),_:1}),w(d,{visible:i.modal,placement:"bottom",width:"80vw",title:"请选择图标"},{reference:x((()=>[w(s,{icon:"el-icon-search",onClick:i.handleClickChoose},{default:x((()=>[Y])),_:1},8,["onClick"])])),default:x((()=>[w(r,{onSuccess:i.onSuccess},null,8,["onSuccess"])])),_:1},8,["visible"])])),_:1}),w(n,{label:"菜单路径",prop:"path"},{default:x((()=>[w(t,{modelValue:i.form.path,"onUpdate:modelValue":e[3]||(e[3]=e=>i.form.path=e),placeholder:"请输入菜单路径"},null,8,["modelValue"])])),_:1}),w(u,{class:"btn-container"},{default:x((()=>[w(s,{size:"mini",type:"primary",onClick:e[4]||(e[4]=e=>i.submitForm())},{default:x((()=>[ii,ei])),_:1})])),_:1})])),_:1},8,["model","rules"])],512)),[[f,i.loading]])};var li=u({name:"Menu",components:{MenuNew:L,MenuEdit:W},setup(){const i=d(),e=M((()=>i.getters["settingsModule/getLangState"])),l=m({url:{c:"/menu/add",r:"/menu/list",u:"/menu/update",d:"/menu/delete"},param:{limit:10,page:1},data:[{name:"首页",icon:"el-icon-s-home",path:"/"}],total:1,loading:!1,addVisible:!1,editVisible:!1,detailVisible:!1,posted:{menu:{name:"",icon:"",path:""}}}),c=i=>{console.log(i),J().then((i=>{l.data=i.data}))};return p((()=>{J().then((i=>{l.data=i.data}))})),s(n({},g(l)),{onError:()=>{},lang:e,onAddSuccess:()=>{l.addVisible=!1,c()},onEditSuccess:()=>{console.log("on edit success"),l.editVisible=!1},onDelete:(i,e)=>{console.log(e),(i=>{console.log(i),O.ElMessageBox.confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{O.ElMessage({type:"success",message:"删除成功"})})).catch((()=>{O.ElMessage({type:"info",message:"已取消删除"})}))})(i)},onCurrentChange:i=>{c(i)},onSizeChange:i=>{l.param.limit=i,c(i)},onCreate:()=>{l.addVisible=!0},onRefresh:()=>{c()},onEdit:(i,e)=>{console.log("row,",e,i),l.posted.menu=e,l.editVisible=!0}})}});const ci=E("新增"),ai=E("刷新"),oi={class:"pagination"};li.render=function(i,e,l,c,a,o){const t=k("el-button"),n=k("el-col"),s=k("el-table-column"),r=k("el-tag"),d=k("el-tooltip"),u=k("el-table"),m=k("el-pagination"),f=k("el-row"),p=k("el-card"),g=k("menu-new"),b=k("el-dialog"),h=k("menu-edit"),V=S("loading");return y(),v("div",null,[w(p,{class:"card-ctrl"},{default:x((()=>[w(f,null,{default:x((()=>[w(n,null,{default:x((()=>[w(n,null,{default:x((()=>[w(t,{type:"primary",icon:"el-icon-plus",size:"small",onClick:i.onCreate},{default:x((()=>[ci])),_:1},8,["onClick"]),w(t,{type:"success",icon:"el-icon-refresh",size:"small",onClick:i.onRefresh},{default:x((()=>[ai])),_:1},8,["onClick"])])),_:1}),z(w(u,{data:i.data,stripe:"",class:"table"},{default:x((()=>[w(s,{label:"菜单名称",align:"center"},{default:x((i=>[w("span",null,q(i.row.name),1)])),_:1}),w(s,{label:"图标",align:"center"},{default:x((i=>[w("i",{class:i.row.icon},null,2)])),_:1}),w(s,{label:"路径",align:"center"},{default:x((i=>[w(r,{size:"mini",type:"info"},{default:x((()=>[E(q(i.row.path),1)])),_:2},1024)])),_:1}),w(s,{label:"操作",align:"center"},{default:x((e=>[0!=e.row.state?(y(),v(C,{key:0},[w(d,{class:"item",effect:"dark",content:"修改",placement:"bottom"},{default:x((()=>[w(t,{circle:"",plain:"",type:"primary",icon:"el-icon-edit",size:"mini",onClick:l=>i.onEdit(e.$index,e.row)},null,8,["onClick"])])),_:2},1024),w(d,{class:"item",effect:"dark",content:"删除",placement:"bottom"},{default:x((()=>[w(t,{circle:"",plain:"",type:"danger",icon:"el-icon-minus",size:"mini",onClick:l=>i.onDelete(e.$index,e.row)},null,8,["onClick"])])),_:2},1024)],64)):U("",!0)])),_:1})])),_:1},8,["data"]),[[V,i.loading]]),w("div",oi,[w(m,{"current-page":i.param.page,"page-size":i.param.limit,layout:"sizes,prev,pager,next,total","page-sizes":[5,10,20],total:i.total,background:"",onCurrentChange:i.onCurrentChange,onSizeChange:i.onSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])])),_:1})])),_:1})])),_:1}),w(b,{modelValue:i.addVisible,"onUpdate:modelValue":e[1]||(e[1]=e=>i.addVisible=e),width:"632px",title:"新增菜单"},{default:x((()=>[w(g,{onSuccess:i.onAddSuccess},null,8,["onSuccess"])])),_:1},8,["modelValue"]),w(b,{modelValue:i.editVisible,"onUpdate:modelValue":e[2]||(e[2]=e=>i.editVisible=e),center:"",width:"632px",title:i.posted.menu.name},{default:x((()=>[w(h,{"current-menu":i.posted.menu,onSuccess:i.onEditSuccess},null,8,["current-menu","onSuccess"])])),_:1},8,["modelValue","title"])])};export{li as default};
