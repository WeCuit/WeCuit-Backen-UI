var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(l,t,o)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o;import{_ as u}from"./richEditor.83a61f51.js";import{d,s,h as p,x as i,Q as m,m as f,g as c,e as b,f as y,H as v,F as h,n as V,E as j}from"./vendor.3edfc556.js";import{p as O}from"./index.04225538.js";import"./index.bfc6a750.js";const _=d({components:{RichEditor:u},setup(){const e=s({form:{title:"",content:"",postContent:"",type:"html"},types:[{value:"html"},{value:"link"}]}),u=p();return d=((e,l)=>{for(var t in l||(l={}))a.call(l,t)&&n(e,t,l[t]);if(o)for(var t of o(l))r.call(l,t)&&n(e,t,l[t]);return e})({},i(e)),l(d,t({publishArticle:()=>{const l={id:e.form.id,title:e.form.title,content:e.form.postContent,type:e.form.type};O(l).then((e=>{const{data:l}=e;m.ElMessage({type:"success",message:"发布成功，跳转至编辑页面"}),u.push(`/article/edit?id=${l.id}`)}))},handleUpdateValue:l=>{e.form.postContent=l}}));var d}}),U=j("提交"),g=j("返回");_.render=function(e,l,t,o,a,r){const n=f("el-input"),u=f("el-form-item"),d=f("RichEditor"),s=f("el-option"),p=f("el-select"),i=f("el-button"),m=f("el-form"),j=f("el-card");return c(),b("div",null,[y(j,null,{default:v((()=>[y(m,{modelValue:e.form,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form=l)},{default:v((()=>[y(u,{label:"标题"},{default:v((()=>[y(n,{modelValue:e.form.title,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.title=l)},null,8,["modelValue"])])),_:1}),y(u,{label:"内容"},{default:v((()=>[y(d,{"model-value":e.form.content,"onUpdate:modelValue":e.handleUpdateValue},null,8,["model-value","onUpdate:modelValue"])])),_:1}),y(p,{modelValue:e.form.type,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.type=l),placeholder:"文章类型"},{default:v((()=>[(c(!0),b(h,null,V(e.types,(e=>(c(),b(s,{key:e.value,value:e.value,label:e.value},null,8,["value","label"])))),128))])),_:1},8,["modelValue"]),y(u,null,{default:v((()=>[y(i,{type:"primary",onClick:e.publishArticle},{default:v((()=>[U])),_:1},8,["onClick"]),y(i,null,{default:v((()=>[g])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])};export{_ as default};
