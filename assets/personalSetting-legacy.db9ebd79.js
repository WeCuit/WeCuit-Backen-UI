!function(){function e(e,t,n,a,r,i,o){try{var l=e[i](o),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(a,r)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function n(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=document.createElement("style");r.innerHTML=".login-icon{cursor:pointer;font-size:xxx-large}.PersonalSetting[data-v-9c6b9988]{margin-top:20px}.PersonalSetting .demo-ruleForm[data-v-9c6b9988]{text-align:left}.PersonalSetting .set-title[data-v-9c6b9988]{text-align:left}.PersonalSetting .secure-item[data-v-9c6b9988]{width:100%;padding:20px;border-bottom:1px solid #f0f0f0;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.PersonalSetting .secure-item .secure-info[data-v-9c6b9988]{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.PersonalSetting .secure-item .secure-info .secure-key[data-v-9c6b9988]{margin-bottom:4px;color:#000000d9;font-size:14px;line-height:1.6}.PersonalSetting .secure-item .secure-info .secure-value[data-v-9c6b9988]{color:#00000073;font-size:14px;line-height:1.6}.PersonalSetting .secure-item .opera-btn[data-v-9c6b9988]{color:#1890ff;cursor:pointer}.PersonalSetting .set-info[data-v-9c6b9988]{display:flex;flex-direction:row;justify-content:space-around;align-items:flex-start}.PersonalSetting .set-info .form-info[data-v-9c6b9988],.PersonalSetting .set-info .avatar[data-v-9c6b9988]{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-end;margin-left:30px}.PersonalSetting .set-info .form-info .preview[data-v-9c6b9988],.PersonalSetting .set-info .avatar .preview[data-v-9c6b9988]{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;margin-right:20px}.PersonalSetting .set-info .form-info .preview img[data-v-9c6b9988],.PersonalSetting .set-info .avatar .preview img[data-v-9c6b9988]{width:100px;height:100px;border-radius:50%}.PersonalSetting .set-info .form-info .avatar-uploader .el-upload[data-v-9c6b9988]:hover,.PersonalSetting .set-info .avatar .avatar-uploader .el-upload[data-v-9c6b9988]:hover{border-color:#409eff}.PersonalSetting .set-info .form-info .avatar-uploader-icon[data-v-9c6b9988],.PersonalSetting .set-info .avatar .avatar-uploader-icon[data-v-9c6b9988]{font-size:28px;color:#8c939d;width:178px;height:178px;line-height:178px;text-align:center}.PersonalSetting .set-info .form-info .avatar[data-v-9c6b9988],.PersonalSetting .set-info .avatar .avatar[data-v-9c6b9988]{width:178px;height:178px;display:block}.PersonalSetting .info[data-v-9c6b9988]{text-align:left;padding-left:20px;margin-bottom:20px;font-size:12px}.PersonalSetting .card-header[data-v-9c6b9988]{display:flex;justify-content:space-between;align-items:center}.PersonalSetting .text[data-v-9c6b9988]{font-size:14px}.PersonalSetting .item[data-v-9c6b9988]{margin-bottom:18px}.PersonalSetting .box-card[data-v-9c6b9988]{width:100%}\n",document.head.appendChild(r),System.register(["./vendor-legacy.9b1ff592.js","./qrcode.vue.esm-legacy.f3d8568b.js","./index-legacy.69e7a37d.js","./index-legacy.c4cf8f5a.js"],(function(t){"use strict";var a,r,i,o,l,c,s,u,d,f,p,v,g,m,b,h,y,k,x,w,S,P,j;return{setters:[function(e){a=e.d,r=e.s,i=e.x,o=e.m,l=e.g,c=e.e,s=e.f,u=e.H,d=e.I,f=e.t,p=e.E,v=e.h,g=e.r,m=e.b,b=e.A,h=e.p,y=e.c,k=e.w},function(e){x=e.q},function(e){w=e.a,S=e._},function(e){P=e.g,j=e.p}],execute:function(){var _=a({components:{qrcodeVue:x},setup:function(){var e=r({type:"",bind:{wx:!1,qq:!1},qrcode:"",token:"",qrScanVisible:!1,checkTokenIntval:-1,message:""}),t=function(t){return function(e){return w.get("/auth/mini/qrcode/".concat(e))}(t).then((function(t){var n=t.data;return e.qrcode=n.img||n.url,e.token=n.token,e.message="请扫描小程序码",Promise.resolve()}))},a=function(){var t;(t=e.token,w.get("/auth/mini/binding",{params:{token:t}})).then((function(t){var n=t.data;console.log(n),e.message="绑定成功！"}))},o=function n(r){console.log(encodeURIComponent(r)),function(e){return w.get("/auth/mini/login/check",{params:{token:e}})}(r).then((function(r){var i=r.data;switch(console.log(i),0!==i.result&&3!==i.result&&clearInterval(e.checkTokenIntval),i.result){case-2:case-1:t(e.type).then((function(){e.checkTokenIntval=setInterval(n,5e3,e.token)}));break;case 0:console.log("等待授权");break;case 1:e.token="",e.message="授权被拒绝";break;case 2:e.message="授权成功！正在绑定...",a();break;case 3:e.message="已扫描，请进行授权操作"}}))};return n(n({},i(e)),{},{scanQRCode:function(n){e.qrScanVisible=!0,e.type=n,e.message="正在获取小程序码",t(n).then((function(){e.checkTokenIntval=setInterval(o,5e3,e.token)}))},cancelScan:function(){e.qrScanVisible=!1,e.qrcode="",clearInterval(e.checkTokenIntval)},refreshQRCodeAction:function(){e.message="正在刷新小程序码",clearInterval(e.checkTokenIntval),t(e.type).then((function(){e.checkTokenIntval=setInterval(o,5e3,e.token)}))}})}}),q={key:0},V={class:"dialog-footer"},O=p("刷新"),C=p("取消");_.render=function(e,t,n,a,r,i){var p=o("el-col"),v=o("el-row"),g=o("qrcode-vue"),m=o("el-button"),b=o("el-dialog");return l(),c("div",null,[s(v,null,{default:u((function(){return[s(p,{span:12},{default:u((function(){return[s("i",{class:"ic ic-weixindenglu login-icon",style:{color:e.bind.wx?"#1db308":"gray"},onClick:t[1]||(t[1]=function(t){return e.scanQRCode("WX")})},null,4)]})),_:1}),s(p,{span:12},{default:u((function(){return[s("i",{class:"ic ic-qqdenglu login-icon",style:{color:e.bind.qq?"#1277e3":"gray"},onClick:t[2]||(t[2]=function(t){return e.scanQRCode("QQ")})},null,4)]})),_:1})]})),_:1}),s(b,{modelValue:e.qrScanVisible,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.qrScanVisible=t}),title:"请扫描小程序码"},{default:u((function(){return[e.qrcode&&e.qrcode.length>0?(l(),c("div",q,["WX"===e.type?(l(),c("img",{key:0,height:"300",width:"300",src:e.qrcode},null,8,["src"])):(l(),c(g,{key:1,size:300,value:e.qrcode},null,8,["value"]))])):d("",!0),s("h2",null,f(e.message),1)]})),footer:u((function(){return[s("div",V,[s(m,{type:"primary",onClick:e.refreshQRCodeAction},{default:u((function(){return[O]})),_:1},8,["onClick"]),s(m,{onClick:e.cancelScan},{default:u((function(){return[C]})),_:1},8,["onClick"])])]})),_:1},8,["modelValue"])])};var I=t("default",a({name:"PersonalSetting",components:{MiniLogin:_},setup:function(){var t=v(),a=g("left"),o=g(),l=r({userSwitch:!1,sysSwitch:!0,taskSwitch:!0}),c=r({email:"",nickname:"",desc:"",mobile:"",avatar:"../../assets/avatar-default.jpg"}),s=g(),u=g(!1),d={email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],nickname:{required:!0,message:"请输入昵称",trigger:["blur","change"]},desc:{required:!0,message:"请输入个人简介",trigger:["blur","change"]},mobile:{required:!0,validator:function(e,t,n){if(""===t)n(new Error("手机号码不可为空哦"));else{/^1[3-9]\d{9}$/.test(t)?n():n(new Error("请输入正确的手机号码"))}},trigger:["blur","change"]}};m((function(){P().then((function(e){var t=e.data.info;c.email=t.email,c.nickname=t.nickname,t.avatar&&(c.avatar=t.avatar)}))}));return n(n({handleBack:function(){t.go(-1)},tabPosition:a,settingFormRef:o,settingForm:c,submitForm:function(){o.value.validate(function(){var t,a=(t=regeneratorRuntime.mark((function e(t){var a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=16;break}return e.prev=1,u.value=!0,a=n({},c),e.next=6,j(a);case 6:r=e.sent,u.value=!1,!0===r.data.result?b.ElMessage({type:"success",message:"更新成功"}):b.ElMessage({type:"error",message:"更新失败"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:return e.abrupt("return",!0);case 16:return e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})),function(){var n=this,a=arguments;return new Promise((function(r,i){var o=t.apply(n,a);function l(t){e(o,r,i,l,c,"next",t)}function c(t){e(o,r,i,l,c,"throw",t)}l(void 0)}))});return function(e){return a.apply(this,arguments)}}())},resetForm:function(){o.value.resetFields()},handleAvatarSuccess:function(e,t){s.value=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){if(!/(gif|png|jpg|jpeg)$/i.test(e.type))return b.ElMessage({message:"上传头像图片只能是gif|png|jpg|jpeg 格式!",type:"warning"}),!1;var t=e.size/1024/1024<2;return t||b.ElMessage({type:"error",message:"上传头像图片大小不能超过 2MB!"}),t},rules:d,imageUrl:s},i(l)),{},{updateLoading:u})}})),F=k();h("data-v-9c6b9988");var R={class:"PersonalSetting"},U={class:"grid-content bg-purple-dark"},E={class:"card-header"},z=s("i",{class:"el-icon-arrow-left"},null,-1),T=p("返回 "),A=s("span",null,"个人设置",-1),M=s("div",null,null,-1),Q=s("div",{class:"set-title"},[s("span",null,"基本设置")],-1),L={class:"set-info"},D={class:"form-info"},B=p("更新"),H=p("重置"),W={class:"avatar"},X=s("div",{class:"preview"},[s("span",null,"头像"),s("img",{src:S})],-1),$=s("i",{class:"el-icon-upload"},null,-1),G=p("更换头像 "),J=s("div",{class:"set-title"},[s("span",null,"安全设置")],-1),K=s("div",{class:"secure-item"},[s("div",{class:"secure-info"},[s("span",{class:"secure-key"},"绑定邮箱"),s("span",{class:"secure-value"},"已绑定邮箱：geek****@outlook.com")]),s("div",{class:"opera-btn"},[s("span",null,"修改")])],-1),N=s("div",{class:"set-title"},[s("span",null,"新消息通知")],-1),Y={class:"secure-item"},Z=s("div",{class:"secure-info"},[s("span",{class:"secure-key"},"账户密码"),s("span",{class:"secure-value"},"用户信息将以系统内部渠道通知")],-1),ee={class:"secure-item"},te=s("div",{class:"secure-info"},[s("span",{class:"secure-key"},"系统消息"),s("span",{class:"secure-value"},"系统消息将以系统内部渠道通知")],-1),ne={class:"secure-item"},ae=s("div",{class:"secure-info"},[s("span",{class:"secure-key"},"代办任务"),s("span",{class:"secure-value"},"代办任务将以系统内部渠道通知")],-1),re=s("div",{class:"set-title"},[s("span",null,"账号绑定")],-1),ie={style:{"margin-top":"3rem"}};y();var oe=F((function(e,t,n,a,r,i){var u=o("el-button"),d=o("el-input"),f=o("el-form-item"),p=o("el-form"),v=o("el-upload"),g=o("el-tab-pane"),m=o("el-switch"),b=o("el-tooltip"),h=o("mini-login"),y=o("el-tabs"),k=o("el-card"),x=o("el-col"),w=o("el-row");return l(),c("div",R,[s(w,null,{default:F((function(){return[s(x,{offset:1,span:22},{default:F((function(){return[s("div",U,[s(k,{class:"box-card"},{header:F((function(){return[s("div",E,[s(u,{class:"button",type:"text",onClick:e.handleBack},{default:F((function(){return[z,T]})),_:1},8,["onClick"]),A,M])]})),default:F((function(){return[s(y,{"tab-position":e.tabPosition},{default:F((function(){return[s(g,{label:"基本设置"},{default:F((function(){return[Q,s("div",L,[s("div",D,[s(p,{ref:"settingFormRef",model:e.settingForm,rules:e.rules,"label-width":"100px",class:"demo-ruleForm"},{default:F((function(){return[s(f,{label:"昵称",prop:"nickname"},{default:F((function(){return[s(d,{modelValue:e.settingForm.nickname,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.settingForm.nickname=t}),placeholder:"请输入昵称",maxlength:"10"},null,8,["modelValue"])]})),_:1}),s(f,{label:"邮箱",prop:"email"},{default:F((function(){return[s(d,{modelValue:e.settingForm.email,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.settingForm.email=t}),placeholder:"请输入邮箱"},null,8,["modelValue"])]})),_:1}),s(f,null,{default:F((function(){return[s(u,{type:"primary",loading:e.updateLoading,onClick:t[3]||(t[3]=function(t){return e.submitForm()})},{default:F((function(){return[B]})),_:1},8,["loading"]),s(u,{onClick:t[4]||(t[4]=function(t){return e.resetForm()})},{default:F((function(){return[H]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])]),s("div",W,[X,s(v,{class:"avatar-uploader",action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload},{default:F((function(){return[s(u,{style:{"margin-left":"10px"},size:"small",type:"success"},{default:F((function(){return[$,G]})),_:1})]})),_:1},8,["on-success","before-upload"])])])]})),_:1}),s(g,{label:"安全设置"},{default:F((function(){return[J,K]})),_:1}),s(g,{label:"新消息通知"},{default:F((function(){return[N,s("div",Y,[Z,s(b,{content:"是否开启用户信息: ",placement:"top"},{default:F((function(){return[s(m,{modelValue:e.userSwitch,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.userSwitch=t}),"active-color":"#13ce66","inactive-color":"#ff4949","active-value":!0,"inactive-value":!1},null,8,["modelValue"])]})),_:1})]),s("div",ee,[te,s(b,{content:"是否开启系统消息: ",placement:"top"},{default:F((function(){return[s(m,{modelValue:e.sysSwitch,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.sysSwitch=t}),"active-color":"#13ce66","inactive-color":"#ff4949","active-value":!0,"inactive-value":!1},null,8,["modelValue"])]})),_:1})]),s("div",ne,[ae,s(b,{content:"是否开启代办任务消息: ",placement:"top"},{default:F((function(){return[s(m,{modelValue:e.taskSwitch,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.taskSwitch=t}),"active-color":"#13ce66","inactive-color":"#ff4949","active-value":!0,"inactive-value":!1},null,8,["modelValue"])]})),_:1})])]})),_:1}),s(g,{label:"账号绑定"},{default:F((function(){return[re,s("div",ie,[s(h)])]})),_:1})]})),_:1},8,["tab-position"])]})),_:1})])]})),_:1})]})),_:1})])}));I.render=oe,I.__scopeId="data-v-9c6b9988"}}}))}();
