import{B as l,b as c}from"./index.fde18210.js";import{B as d}from"./BasicForm.f668fd01.js";import{u}from"./useForm.c7ecccd7.js";import{au as f,a as B,w as g,aw as a,o as h,k as _,B as b,n as C,p as R,ax as V,L as v}from"./index.3df4c6d5.js";import"./useWindowSizeFn.3ebe2a1d.js";import"./FullscreenOutlined.d446ad78.js";import"./isEqual.f415c100.js";import"./_baseIsEqual.f131e593.js";import"./index.139bd604.js";import"./index.fe17dd2d.js";import"./responsiveObserve.b37a2a23.js";import"./useFlexGapSupport.07dfe529.js";import"./_baseIteratee.f711d970.js";import"./get.856a19e0.js";import"./findIndex.b57f26a5.js";import"./toInteger.3fd123a6.js";import"./useSize.803d2cab.js";import"./index.a987c533.js";import"./index.0e8be3c2.js";import"./Checkbox.57aa7240.js";import"./index.f3a9decb.js";import"./index.c39058cd.js";import"./index.93d769ba.js";import"./UpOutlined.f0075db7.js";import"./index.364b86cb.js";import"./index.0a64092d.js";import"./warning.ca82f8e0.js";import"./util.77194c1c.js";import"./Tree.d9a9ebe8.js";import"./RedoOutlined.8aecc604.js";import"./index.56436c07.js";import"./uniqBy.01e8947b.js";import"./index.4c0f5e2a.js";import"./DeleteOutlined.f07f76cc.js";import"./index.0cb3d63a.js";import"./index.9c23565c.js";import"./uuid.2b29000c.js";import"./download.35ab208d.js";import"./base64Conver.08b9f4ec.js";import"./index.37f634df.js";import"./index.1a2847b9.js";const m=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],F=B({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=g({}),[i,{}]=u({labelWidth:120,schemas:m,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=c(o=>{o&&r(o)});function r(o){console.log("Data Received",o),t.value={field2:o.data,field1:o.info}}function p(o){o&&e.userData&&v(()=>r(e.userData))}return{register:s,schemas:m,registerForm:i,model:t,handleVisibleChange:p}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,p){const o=a("BasicForm"),n=a("BasicModal");return h(),_(n,V(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:b(()=>[C("div",M,[R(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var Bo=f(F,[["render",D]]);export{Bo as default};
