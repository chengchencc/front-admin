import{j as c,B as l}from"./BasicForm.bfc748d5.js";import{au as d,a as g,aw as r,o as f,k as B,B as F,p as t,G as _}from"./index.47e23b6d.js";import{u as A}from"./useForm.e5ebb155.js";import{P as C}from"./index.bcb5cbac.js";import{A as m}from"./index.7cf79cb3.js";import{u as a}from"./upload.4f7a4495.js";import"./index.3f247607.js";import"./index.8df56aab.js";import"./responsiveObserve.e74128d1.js";import"./useFlexGapSupport.01bde4dc.js";import"./_baseIteratee.d1ed8bfb.js";import"./_baseIsEqual.2c011939.js";import"./get.659c0466.js";import"./findIndex.2796655d.js";import"./toInteger.5c58eeae.js";import"./isEqual.266c78e9.js";import"./useSize.7d9c76f4.js";import"./index.b2f9b607.js";import"./index.c65c4b9b.js";import"./Checkbox.7fecedb7.js";import"./index.ddba01e4.js";import"./index.2025d1f0.js";import"./index.b877419d.js";import"./UpOutlined.22b3801f.js";import"./index.b6cfac0f.js";import"./index.f640b252.js";import"./warning.ca82f8e0.js";import"./util.d91a6884.js";import"./Tree.300cec75.js";import"./RedoOutlined.8d00bf2a.js";import"./index.ceca6f94.js";import"./uniqBy.65385b37.js";import"./index.dd40f929.js";import"./DeleteOutlined.00404b2f.js";import"./index.ba498438.js";import"./useWindowSizeFn.334d9012.js";import"./FullscreenOutlined.226be3a0.js";import"./index.5475205d.js";import"./uuid.2b29000c.js";import"./download.ae3ff163.js";import"./base64Conver.08b9f4ec.js";import"./index.089e934e.js";import"./index.47dcf74c.js";import"./index.59e7287a.js";import"./index.e0d3e890.js";import"./useBreakpoint.82e584b1.js";import"./useContentViewHeight.7871b0d4.js";import"./index.b7f548dc.js";import"./ArrowLeftOutlined.e5e1e96b.js";const h=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:a}}],E=g({components:{BasicUpload:c,BasicForm:l,PageWrapper:C,[m.name]:m},setup(){const{createMessage:o}=_(),[p]=A({labelWidth:120,schemas:h,actionColOptions:{span:16}});return{handleChange:e=>{o.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(e)}`)},uploadApi:a,register:p}}});function P(o,p,e,$,x,U){const i=r("a-alert"),s=r("BasicUpload"),n=r("BasicForm"),u=r("PageWrapper");return f(),B(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:F(()=>[t(i,{message:"\u57FA\u7840\u793A\u4F8B"}),t(s,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),t(i,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),t(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var Po=d(E,[["render",P]]);export{Po as default};
