var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(l,t,o)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o;import{_ as u}from"./richEditor.e13f18e7.js";import{d,y as s,h as p,A as i,aP as m,k as f,e as c,c as y,s as b,q as v,F as h,t as V,I as j,m as O}from"./vendor.15aec843.js";import{p as _}from"./index.734f4b75.js";import"./index.d603c67d.js";const U=d({components:{RichEditor:u},setup(){const e=s({form:{title:"",content:"",postContent:"",type:"html"},types:[{value:"html"},{value:"link"}]}),u=p();return d=((e,l)=>{for(var t in l||(l={}))a.call(l,t)&&n(e,t,l[t]);if(o)for(var t of o(l))r.call(l,t)&&n(e,t,l[t]);return e})({},i(e)),l(d,t({publishArticle:()=>{const l={id:e.form.id,title:e.form.title,content:e.form.postContent,type:e.form.type};_(l).then((e=>{const{data:l}=e;m.ElMessage({type:"success",message:"发布成功，跳转至编辑页面"}),u.push(`/article/edit?id=${l.id}`)}))},handleUpdateValue:l=>{e.form.postContent=l}}));var d}}),P=j("提交"),g=j("返回");U.render=function(e,l,t,o,a,r){const n=f("el-input"),u=f("el-form-item"),d=f("RichEditor"),s=f("el-option"),p=f("el-select"),i=f("el-button"),m=f("el-form"),j=f("el-card");return c(),y("div",null,[b(j,null,{default:v((()=>[b(m,{modelValue:e.form,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form=l)},{default:v((()=>[b(u,{label:"标题"},{default:v((()=>[b(n,{modelValue:e.form.title,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.title=l)},null,8,["modelValue"])])),_:1}),b(u,{label:"内容"},{default:v((()=>[b(d,{"model-value":e.form.content,"onUpdate:modelValue":e.handleUpdateValue},null,8,["model-value","onUpdate:modelValue"])])),_:1}),b(p,{modelValue:e.form.type,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.type=l),placeholder:"文章类型"},{default:v((()=>[(c(!0),y(h,null,V(e.types,(e=>(c(),O(s,{key:e.value,value:e.value,label:e.value},null,8,["value","label"])))),128))])),_:1},8,["modelValue"]),b(u,null,{default:v((()=>[b(i,{type:"primary",onClick:e.publishArticle},{default:v((()=>[P])),_:1},8,["onClick"]),b(i,null,{default:v((()=>[g])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])};export{U as default};
