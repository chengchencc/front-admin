import{B as l,b as c}from"./index.2e551384.js";import{B as d}from"./BasicForm.02b7178d.js";import{u}from"./useForm.e6dc2e4a.js";import{au as f,a as B,w as g,aw as a,o as h,k as _,B as b,n as C,p as R,ax as V,L as v}from"./index.2d782bcc.js";import"./useWindowSizeFn.e290f54f.js";import"./FullscreenOutlined.53488658.js";import"./isEqual.11901826.js";import"./_baseIsEqual.0de2b5d3.js";import"./index.6224a568.js";import"./index.bf60d517.js";import"./responsiveObserve.37523389.js";import"./useFlexGapSupport.46b1d290.js";import"./_baseIteratee.2ef5ad90.js";import"./get.043b0610.js";import"./findIndex.f47c946a.js";import"./toInteger.c204e16e.js";import"./useSize.fc767944.js";import"./index.5af3f25b.js";import"./index.b2c7511a.js";import"./Checkbox.c7829bfd.js";import"./index.04e4f142.js";import"./index.051734d7.js";import"./index.aa016e5b.js";import"./UpOutlined.12a1e306.js";import"./index.373f6534.js";import"./index.d02ebe9a.js";import"./warning.ca82f8e0.js";import"./util.d83e5a37.js";import"./Tree.f27a6644.js";import"./RedoOutlined.7ded6882.js";import"./index.6e80a0ff.js";import"./uniqBy.50404865.js";import"./index.ee10230f.js";import"./DeleteOutlined.0a0522fd.js";import"./index.ad66d854.js";import"./index.e501c187.js";import"./uuid.2b29000c.js";import"./download.4b0b9b08.js";import"./base64Conver.08b9f4ec.js";import"./index.9ceea8c9.js";import"./index.bf916240.js";const m=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],F=B({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=g({}),[i,{}]=u({labelWidth:120,schemas:m,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=c(o=>{o&&r(o)});function r(o){console.log("Data Received",o),t.value={field2:o.data,field1:o.info}}function p(o){o&&e.userData&&v(()=>r(e.userData))}return{register:s,schemas:m,registerForm:i,model:t,handleVisibleChange:p}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,p){const o=a("BasicForm"),n=a("BasicModal");return h(),_(n,V(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:b(()=>[C("div",M,[R(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var Bo=f(F,[["render",D]]);export{Bo as default};
