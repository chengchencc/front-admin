var m=(u,i,e)=>new Promise((t,r)=>{var n=o=>{try{p(e.next(o))}catch(s){r(s)}},a=o=>{try{p(e.throw(o))}catch(s){r(s)}},p=o=>o.done?t(o.value):Promise.resolve(o.value).then(n,a);p((e=e.apply(u,i)).next())});import{B as c}from"./BasicForm.d765cc9c.js";import{u as F}from"./useForm.d0f78599.js";import{au as d,a as B,aw as l,o as E,k as C,B as b,p as f,G as A}from"./index.0afb6b1a.js";import{P as _}from"./index.f1bbd8b9.js";import"./index.f9b7668c.js";import"./index.335339a9.js";import"./responsiveObserve.8bc71b85.js";import"./useFlexGapSupport.358e75d5.js";import"./_baseIteratee.ccaeac66.js";import"./_baseIsEqual.b9ab726e.js";import"./get.cbf01dd9.js";import"./findIndex.bebb7dcc.js";import"./toInteger.385c5e34.js";import"./isEqual.c3167c03.js";import"./useSize.b98aa611.js";import"./index.b5e58356.js";import"./index.0c92bc5e.js";import"./Checkbox.b94383d9.js";import"./index.f188e1cd.js";import"./index.f3dc3acc.js";import"./index.a38530f5.js";import"./UpOutlined.53f4e913.js";import"./index.a86fe11c.js";import"./index.752237d9.js";import"./warning.ca82f8e0.js";import"./util.5b402eb8.js";import"./Tree.c194a51d.js";import"./RedoOutlined.8a38e0cf.js";import"./index.3608aaa4.js";import"./uniqBy.1231b8aa.js";import"./index.b920e176.js";import"./DeleteOutlined.7747d063.js";import"./index.35e066f0.js";import"./index.afe49db0.js";import"./useWindowSizeFn.b437c5f3.js";import"./FullscreenOutlined.f42c8b10.js";import"./index.9ecfb69b.js";import"./uuid.2b29000c.js";import"./download.8e655723.js";import"./base64Conver.08b9f4ec.js";import"./index.487b659d.js";import"./index.3fdd4c89.js";import"./index.0fb2ca65.js";import"./index.ab4596d9.js";import"./useBreakpoint.f66a95b4.js";import"./useContentViewHeight.6667aea5.js";import"./index.97f64344.js";import"./ArrowLeftOutlined.8571d53f.js";const D=[{field:"title",component:"Input",label:"\u6807\u9898",componentProps:{placeholder:"\u7ED9\u76EE\u6807\u8D77\u4E2A\u540D\u5B57"},required:!0},{field:"time",component:"RangePicker",label:"\u8D77\u6B62\u65E5\u671F",required:!0},{field:"target",component:"InputTextArea",label:"\u76EE\u6807\u63CF\u8FF0",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u9636\u6BB5\u6027\u5DE5\u4F5C\u76EE\u6807",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"\u8861\u91CF\u6807\u51C6",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6",rows:4},required:!0},{field:"client",component:"Input",label:"\u5BA2\u6237",helpMessage:"\u76EE\u6807\u7684\u670D\u52A1\u5BF9\u8C61",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u63CF\u8FF0\u4F60\u670D\u52A1\u7684\u5BA2\u6237\uFF0C\u5185\u90E8\u5BA2\u6237\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7"}},{field:"inviteer",component:"Input",label:"\u9080\u8BC4\u4EBA",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7\uFF0C\u6700\u591A\u53EF\u9080\u8BF7 5 \u4EBA"}},{field:"weights",component:"InputNumber",label:"\u6743\u91CD",subLabel:"( \u9009\u586B )",componentProps:{formatter:u=>u?`${u}%`:"",parser:u=>u.replace("%",""),placeholder:"\u8BF7\u8F93\u5165"}},{field:"disclosure",component:"RadioGroup",label:"\u76EE\u6807\u516C\u5F00",itemProps:{extra:"\u5BA2\u6237\u3001\u9080\u8BC4\u4EBA\u9ED8\u8BA4\u88AB\u5206\u4EAB"},componentProps:{options:[{label:"\u516C\u5F00",value:"1"},{label:"\u90E8\u5206\u516C\u5F00",value:"2"},{label:"\u4E0D\u516C\u5F00",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:u})=>u.disclosure==="2",componentProps:{placeholder:"\u516C\u5F00\u7ED9",mode:"multiple",options:[{label:"\u540C\u4E8B1",value:"1"},{label:"\u540C\u4E8B2",value:"2"},{label:"\u540C\u4E8B3",value:"3"}]}}];const g=B({name:"FormBasicPage",components:{BasicForm:c,PageWrapper:_},setup(){const{createMessage:u}=A(),[i,{validate:e,setProps:t}]=F({labelCol:{span:8},wrapperCol:{span:10},schemas:D,actionColOptions:{offset:8,span:12},submitButtonOptions:{text:"\u63D0\u4EA4"},submitFunc:r});function r(){return m(this,null,function*(){try{yield e(),t({submitButtonOptions:{loading:!0}}),setTimeout(()=>{t({submitButtonOptions:{loading:!1}}),u.success("\u63D0\u4EA4\u6210\u529F\uFF01")},2e3)}catch(n){}})}return{register:i}}});function P(u,i,e,t,r,n){const a=l("BasicForm"),p=l("PageWrapper");return E(),C(p,{title:"\u57FA\u7840\u8868\u5355",contentBackground:"",content:" \u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002",contentClass:"p-4"},{default:b(()=>[f(a,{onRegister:u.register},null,8,["onRegister"])]),_:1})}var Au=d(g,[["render",P],["__scopeId","data-v-10c89d50"]]);export{Au as default};
