import{j as c,B as l}from"./BasicForm.33be6605.js";import{au as d,a as g,aw as r,o as f,k as B,B as F,p as t,G as _}from"./index.a4184510.js";import{u as A}from"./useForm.e9f1e61e.js";import{P as C}from"./index.7f4f8797.js";import{A as m}from"./index.61ad094d.js";import{u as a}from"./upload.3eccbdfd.js";import"./index.61947057.js";import"./index.5389ab9f.js";import"./responsiveObserve.74da7233.js";import"./useFlexGapSupport.22cad392.js";import"./_baseIteratee.e5042e06.js";import"./_baseIsEqual.022cfbb5.js";import"./get.e620704d.js";import"./findIndex.657e235c.js";import"./toInteger.58eec37d.js";import"./isEqual.297bdb1e.js";import"./useSize.6d3e9c8f.js";import"./index.b3c2b46d.js";import"./index.f9d35bfd.js";import"./Checkbox.341a0e84.js";import"./index.40118052.js";import"./index.42ece229.js";import"./index.69d9b4a1.js";import"./UpOutlined.c620fc88.js";import"./index.e572ad54.js";import"./index.453418bd.js";import"./warning.ca82f8e0.js";import"./util.89eee439.js";import"./Tree.4c3dc6e1.js";import"./RedoOutlined.59e0b862.js";import"./index.761088f5.js";import"./uniqBy.634fce4d.js";import"./index.88fce616.js";import"./DeleteOutlined.36a39901.js";import"./index.380f5c41.js";import"./useWindowSizeFn.c1349caf.js";import"./FullscreenOutlined.06198031.js";import"./index.8d369d29.js";import"./uuid.2b29000c.js";import"./download.8dd6afc4.js";import"./base64Conver.08b9f4ec.js";import"./index.8b1a4278.js";import"./index.b2270280.js";import"./index.00036abf.js";import"./index.97a5ac83.js";import"./useBreakpoint.3d7302fa.js";import"./useContentViewHeight.82e6d0cc.js";import"./index.cff0b8af.js";import"./transButton.5ba7ce35.js";import"./ArrowLeftOutlined.62eef3b2.js";const h=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:a}}],E=g({components:{BasicUpload:c,BasicForm:l,PageWrapper:C,[m.name]:m},setup(){const{createMessage:o}=_(),[p]=A({labelWidth:120,schemas:h,actionColOptions:{span:16}});return{handleChange:e=>{o.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(e)}`)},uploadApi:a,register:p}}});function P(o,p,e,$,x,U){const i=r("a-alert"),s=r("BasicUpload"),n=r("BasicForm"),u=r("PageWrapper");return f(),B(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:F(()=>[t(i,{message:"\u57FA\u7840\u793A\u4F8B"}),t(s,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),t(i,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),t(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var $o=d(E,[["render",P]]);export{$o as default};