import{j as c,B as l}from"./BasicForm.a4ec12e5.js";import{au as d,a as g,aw as r,o as f,k as B,B as F,p as t,G as _}from"./index.ac094c1a.js";import{u as A}from"./useForm.ba331bff.js";import{P as C}from"./index.4fc42462.js";import{A as m}from"./index.f4f15c4e.js";import{u as a}from"./upload.395509e5.js";import"./index.18ac8270.js";import"./index.f8ca73f1.js";import"./responsiveObserve.215173d9.js";import"./useFlexGapSupport.30ffab55.js";import"./_baseIteratee.ab0bd894.js";import"./_baseIsEqual.0a6c69ba.js";import"./get.77a8764f.js";import"./findIndex.ada0a456.js";import"./toInteger.3e4658ba.js";import"./isEqual.8db4730b.js";import"./useSize.8e66fcdc.js";import"./index.c837e7c4.js";import"./index.898d86e5.js";import"./Checkbox.a75103c0.js";import"./index.aa5ff920.js";import"./index.d3605325.js";import"./index.1c127be3.js";import"./UpOutlined.288cc8f8.js";import"./index.b49e189c.js";import"./index.eceb37c5.js";import"./warning.ca82f8e0.js";import"./util.92a724ca.js";import"./Tree.35762ca1.js";import"./RedoOutlined.fc634378.js";import"./index.39737088.js";import"./uniqBy.6c7f8abc.js";import"./index.f7967e6e.js";import"./DeleteOutlined.35136336.js";import"./index.cf77662e.js";import"./useWindowSizeFn.d402f620.js";import"./FullscreenOutlined.e6b1e7b6.js";import"./index.3a7a10e8.js";import"./uuid.2b29000c.js";import"./download.48cbdc0b.js";import"./base64Conver.08b9f4ec.js";import"./index.7a765935.js";import"./index.6dcbf63c.js";import"./index.eeb46555.js";import"./index.87d849bc.js";import"./useBreakpoint.1f3756ad.js";import"./useContentViewHeight.f40a2028.js";import"./index.631565e4.js";import"./transButton.3b98ebc6.js";import"./ArrowLeftOutlined.2a151e97.js";const h=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:a}}],E=g({components:{BasicUpload:c,BasicForm:l,PageWrapper:C,[m.name]:m},setup(){const{createMessage:o}=_(),[p]=A({labelWidth:120,schemas:h,actionColOptions:{span:16}});return{handleChange:e=>{o.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(e)}`)},uploadApi:a,register:p}}});function P(o,p,e,$,x,U){const i=r("a-alert"),s=r("BasicUpload"),n=r("BasicForm"),u=r("PageWrapper");return f(),B(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:F(()=>[t(i,{message:"\u57FA\u7840\u793A\u4F8B"}),t(s,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),t(i,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),t(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var $o=d(E,[["render",P]]);export{$o as default};
