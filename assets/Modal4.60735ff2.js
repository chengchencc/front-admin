import{B as l,a as c}from"./index.41c42497.js";import{B as d}from"./BasicForm.4ec4a520.js";import{u}from"./useForm.43a8256f.js";import{a as f,w as B,au as g,K as h,aw as a,o as _,k as b,B as C,n as R,p as V,ax as v}from"./index.382fc83e.js";import"./useWindowSizeFn.435c6f18.js";import"./FullscreenOutlined.b8bf3642.js";import"./isEqual.a078e6bd.js";import"./_baseIsEqual.cdc22aaf.js";import"./index.cb317af3.js";import"./index.3fc2d770.js";import"./responsiveObserve.ea75b784.js";import"./useFlexGapSupport.6c12f438.js";import"./_baseIteratee.54e5789e.js";import"./get.e5e78019.js";import"./findIndex.2c6a2366.js";import"./toInteger.aa53cd67.js";import"./useSize.4c41a328.js";import"./index.d14f017e.js";import"./index.0b211a8b.js";import"./Checkbox.d7b0098f.js";import"./index.0b4a170c.js";import"./index.4828a7ce.js";import"./index.3f97a02a.js";import"./UpOutlined.97c9d97c.js";import"./index.ff31cd23.js";import"./index.c4f44adf.js";import"./warning.ca82f8e0.js";import"./util.f28e2161.js";import"./Tree.8453a007.js";import"./RedoOutlined.db466b1c.js";import"./index.e1d199ff.js";import"./uniqBy.093644f1.js";import"./index.3199418a.js";import"./DeleteOutlined.65f410d2.js";import"./index.ea1996b2.js";import"./index.d5ce8522.js";import"./uuid.2b29000c.js";import"./download.5d149050.js";import"./base64Conver.08b9f4ec.js";import"./index.4bfc3713.js";import"./index.edafa899.js";const m=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],F=f({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=B({}),[i,{}]=u({labelWidth:120,schemas:m,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=c(o=>{o&&r(o)});function r(o){console.log("Data Received",o),t.value={field2:o.data,field1:o.info}}function p(o){o&&e.userData&&h(()=>r(e.userData))}return{register:s,schemas:m,registerForm:i,model:t,handleVisibleChange:p}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,p){const o=a("BasicForm"),n=a("BasicModal");return _(),b(n,v(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:C(()=>[R("div",M,[V(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var Bo=g(F,[["render",D]]);export{Bo as default};
