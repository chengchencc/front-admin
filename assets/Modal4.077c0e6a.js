import{B as l,b as c}from"./index.52781a27.js";import{B as d}from"./BasicForm.98f50938.js";import{u}from"./useForm.bfe01fc7.js";import{au as f,a as B,w as g,aw as a,o as h,k as _,B as b,n as C,p as R,ax as V,L as v}from"./index.aba13b9e.js";import"./useWindowSizeFn.3d69ec7c.js";import"./FullscreenOutlined.580eb656.js";import"./isEqual.0af20ba9.js";import"./_baseIsEqual.8092e4b4.js";import"./index.18402e23.js";import"./index.a8ff5acb.js";import"./responsiveObserve.4ae63a96.js";import"./useFlexGapSupport.5aceff22.js";import"./_baseIteratee.88cab0d3.js";import"./get.a1c1c04a.js";import"./findIndex.56030645.js";import"./toInteger.25ef3694.js";import"./useSize.4701823f.js";import"./index.f835d4c3.js";import"./index.87c0c19d.js";import"./Checkbox.91c0a7ae.js";import"./index.48a8bb18.js";import"./index.3ee94c40.js";import"./index.da60eaf0.js";import"./UpOutlined.c38880cf.js";import"./index.f9713a9f.js";import"./index.6b8902f9.js";import"./warning.ca82f8e0.js";import"./util.69498fc4.js";import"./Tree.fa4e64e2.js";import"./RedoOutlined.ed4e315b.js";import"./index.9cca30d8.js";import"./uniqBy.12eb99ec.js";import"./index.2d5060d5.js";import"./DeleteOutlined.1423e77c.js";import"./index.5c9c9354.js";import"./index.4f6a0420.js";import"./uuid.2b29000c.js";import"./download.2a76f273.js";import"./base64Conver.08b9f4ec.js";import"./index.acfcda35.js";import"./index.7e09e114.js";const m=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],F=B({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=g({}),[i,{}]=u({labelWidth:120,schemas:m,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=c(o=>{o&&r(o)});function r(o){console.log("Data Received",o),t.value={field2:o.data,field1:o.info}}function p(o){o&&e.userData&&v(()=>r(e.userData))}return{register:s,schemas:m,registerForm:i,model:t,handleVisibleChange:p}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,p){const o=a("BasicForm"),n=a("BasicModal");return h(),_(n,V(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:b(()=>[C("div",M,[R(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var Bo=f(F,[["render",D]]);export{Bo as default};
