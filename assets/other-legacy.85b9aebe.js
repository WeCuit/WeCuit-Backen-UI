!function(){function e(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function n(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?e(Object(o),!0).forEach((function(e){r(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function r(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var t=document.createElement("style");t.innerHTML="",document.head.appendChild(t),System.register(["./vendor-legacy.2aa4e646.js","./index-legacy.0d4973cb.js","./index-legacy.39c89606.js"],(function(e){"use strict";var r,t,o,u,l,i,a,c,m,f,p,s,d;return{setters:[function(e){r=e.d,t=e.s,o=e.b,u=e.x,l=e.aM,i=e.m,a=e.g,c=e.e,m=e.f,f=e.H,p=e.E},function(e){s=e.p,d=e.a},function(){}],execute:function(){var b=e("default",r({setup:function(){var e=t({tempForm:{},form:{mini_other_aboutlink:"",mini_other_group:"",mini_other_opensource:""}});return o((function(){d().then((function(n){var r=n.data;console.log(r),r.forEach((function(n){e.form[n.name]=n.value,e.tempForm[n.name]=n}))}))})),n(n({},u(e)),{},{submitForm:function(){var n=[];Object.getOwnPropertyNames(e.form).forEach((function(r){n.push({id:e.tempForm[r].id,name:r,value:e.form[r]})})),s(n).then((function(e){var n=e.data;console.log(n),!0===n.result?l.ElMessage({type:"success",message:"保存成功"}):l.ElMessage({type:"error",message:"保存失败"})}))}})}})),_=m("h2",null,"小程序其它配置",-1),h=m("br",null,null,-1),g=m("br",null,null,-1),y=m("br",null,null,-1),O=p("保存"),v=p("重置");b.render=function(e,n,r,t,o,u){var l=i("el-input"),p=i("el-form-item"),s=i("el-button"),d=i("el-form"),b=i("el-card");return a(),c("div",null,[m(b,null,{default:f((function(){return[_,h,g,y,m(d,{model:e.form,"label-position":"right","label-width":"100px",class:"demo-ruleForm"},{default:f((function(){return[m(p,{label:"关于链接",prop:"mini_other_aboutlink"},{default:f((function(){return[m(l,{modelValue:e.form.mini_other_aboutlink,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.form.mini_other_aboutlink=n})},null,8,["modelValue"])]})),_:1}),m(p,{label:"群号",prop:"mini_other_group"},{default:f((function(){return[m(l,{modelValue:e.form.mini_other_group,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.form.mini_other_group=n})},null,8,["modelValue"])]})),_:1}),m(p,{label:"开源地址",prop:"mini_other_opensource"},{default:f((function(){return[m(l,{modelValue:e.form.mini_other_opensource,"onUpdate:modelValue":n[3]||(n[3]=function(n){return e.form.mini_other_opensource=n})},null,8,["modelValue"])]})),_:1}),m(p,null,{default:f((function(){return[m(s,{type:"primary",onClick:e.submitForm},{default:f((function(){return[O]})),_:1},8,["onClick"]),m(s,{onClick:n[4]||(n[4]=function(n){return e.resetForm("ruleForm")})},{default:f((function(){return[v]})),_:1})]})),_:1})]})),_:1},8,["model"])]})),_:1})])}}}}))}();
