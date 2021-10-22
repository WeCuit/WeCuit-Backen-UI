import{d as e,h as l,y as a,r,b as o,k as d,e as t,c as u,g as s,s as m,q as n,I as i,p,f as c}from"./vendor.aed6a4c3.js";var g=e({name:"FormInfo",setup(){const e=l(),d=a({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),t=r();o((()=>{console.log("show ruleFormRef.value",t.value)}));return{handleBack:()=>{e.go(-1)},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},ruleForm:d,ruleFormRef:t,submitForm:()=>{t.value.validate((e=>e?(alert("submit!"),!0):(console.log("error submit!!"),!1)))},resetForm:()=>{t.value.resetFields()}}}});const f=e=>(p("data-v-a8ed5eea"),e=e(),c(),e),b={class:"FormInfo"},F={class:"info"},y=i("基础表单"),_=f((()=>s("span",{style:{"text-align":"left"}},"用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",-1))),V={class:"grid-content bg-purple-dark"},h={class:"card-header"},v=f((()=>s("i",{class:"el-icon-arrow-left"},null,-1))),k=i("返回"),q=f((()=>s("span",null,"表单信息",-1))),x=f((()=>s("div",null,null,-1))),U=i("-"),w=i("立即创建"),C=i("重置");g.render=function(e,l,a,r,o,i){const p=d("el-divider"),c=d("el-button"),g=d("el-input"),f=d("el-form-item"),I=d("el-option"),R=d("el-select"),j=d("el-date-picker"),B=d("el-col"),z=d("el-time-picker"),A=d("el-switch"),D=d("el-checkbox"),E=d("el-checkbox-group"),G=d("el-radio"),H=d("el-radio-group"),J=d("el-form"),K=d("el-card"),L=d("el-row");return t(),u("div",b,[s("div",F,[m(p,{"content-position":"left"},{default:n((()=>[y])),_:1}),_]),m(L,null,{default:n((()=>[m(B,{offset:1,span:22},{default:n((()=>[s("div",V,[m(K,{class:"box-card"},{header:n((()=>[s("div",h,[m(c,{class:"button",type:"text",onClick:e.handleBack},{default:n((()=>[v,k])),_:1},8,["onClick"]),q,x])])),default:n((()=>[m(J,{ref:"ruleFormRef",model:e.ruleForm,"label-position":"right",rules:e.rules,"label-width":"100px",class:"demo-ruleForm"},{default:n((()=>[m(f,{label:"活动名称",prop:"name"},{default:n((()=>[m(g,{modelValue:e.ruleForm.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.ruleForm.name=l)},null,8,["modelValue"])])),_:1}),m(f,{label:"活动区域",prop:"region"},{default:n((()=>[m(R,{modelValue:e.ruleForm.region,"onUpdate:modelValue":l[1]||(l[1]=l=>e.ruleForm.region=l),placeholder:"请选择活动区域"},{default:n((()=>[m(I,{label:"区域一",value:"shanghai"}),m(I,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),m(f,{label:"活动时间",required:""},{default:n((()=>[m(B,{span:11},{default:n((()=>[m(f,{prop:"date1"},{default:n((()=>[m(j,{modelValue:e.ruleForm.date1,"onUpdate:modelValue":l[2]||(l[2]=l=>e.ruleForm.date1=l),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),m(B,{class:"line",span:2},{default:n((()=>[U])),_:1}),m(B,{span:11},{default:n((()=>[m(f,{prop:"date2"},{default:n((()=>[m(z,{modelValue:e.ruleForm.date2,"onUpdate:modelValue":l[3]||(l[3]=l=>e.ruleForm.date2=l),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(f,{label:"即时配送",prop:"delivery"},{default:n((()=>[m(A,{modelValue:e.ruleForm.delivery,"onUpdate:modelValue":l[4]||(l[4]=l=>e.ruleForm.delivery=l)},null,8,["modelValue"])])),_:1}),m(f,{label:"活动性质",prop:"type"},{default:n((()=>[m(E,{modelValue:e.ruleForm.type,"onUpdate:modelValue":l[5]||(l[5]=l=>e.ruleForm.type=l)},{default:n((()=>[m(D,{label:"美食/餐厅线上活动",name:"type"}),m(D,{label:"地推活动",name:"type"}),m(D,{label:"线下主题活动",name:"type"}),m(D,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),m(f,{label:"特殊资源",prop:"resource"},{default:n((()=>[m(H,{modelValue:e.ruleForm.resource,"onUpdate:modelValue":l[6]||(l[6]=l=>e.ruleForm.resource=l)},{default:n((()=>[m(G,{label:"线上品牌商赞助"}),m(G,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),m(f,{label:"活动形式",prop:"desc"},{default:n((()=>[m(g,{modelValue:e.ruleForm.desc,"onUpdate:modelValue":l[7]||(l[7]=l=>e.ruleForm.desc=l),type:"textarea"},null,8,["modelValue"])])),_:1}),m(f,null,{default:n((()=>[m(c,{type:"primary",onClick:l[8]||(l[8]=l=>e.submitForm())},{default:n((()=>[w])),_:1}),m(c,{onClick:l[9]||(l[9]=l=>e.resetForm())},{default:n((()=>[C])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1})])])),_:1})])),_:1})])},g.__scopeId="data-v-a8ed5eea";export{g as default};
