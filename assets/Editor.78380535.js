import{B as n}from"./BasicForm.02b7178d.js";import{au as u,a as l,cC as c,aw as r,o as d,k as C,B as i,p,b_ as f,G as _}from"./index.2d782bcc.js";import{T as h}from"./index.f9ef86bb.js";import{P as B}from"./index.45f647a3.js";import"./index.6224a568.js";import"./index.bf60d517.js";import"./responsiveObserve.37523389.js";import"./useFlexGapSupport.46b1d290.js";import"./_baseIteratee.2ef5ad90.js";import"./_baseIsEqual.0de2b5d3.js";import"./get.043b0610.js";import"./findIndex.f47c946a.js";import"./toInteger.c204e16e.js";import"./isEqual.11901826.js";import"./useSize.fc767944.js";import"./index.5af3f25b.js";import"./index.b2c7511a.js";import"./Checkbox.c7829bfd.js";import"./index.04e4f142.js";import"./index.051734d7.js";import"./index.aa016e5b.js";import"./UpOutlined.12a1e306.js";import"./index.373f6534.js";import"./index.d02ebe9a.js";import"./warning.ca82f8e0.js";import"./util.d83e5a37.js";import"./Tree.f27a6644.js";import"./RedoOutlined.7ded6882.js";import"./index.6e80a0ff.js";import"./uniqBy.50404865.js";import"./index.ee10230f.js";import"./DeleteOutlined.0a0522fd.js";import"./index.ad66d854.js";import"./index.2e551384.js";import"./useWindowSizeFn.e290f54f.js";import"./FullscreenOutlined.53488658.js";import"./index.e501c187.js";import"./uuid.2b29000c.js";import"./download.4b0b9b08.js";import"./base64Conver.08b9f4ec.js";import"./index.9ceea8c9.js";import"./index.bf916240.js";import"./index.7e02ee39.js";import"./index.9f1926af.js";import"./useBreakpoint.d743f914.js";import"./useContentViewHeight.abce7e43.js";import"./index.439c9cc6.js";import"./transButton.d58a9aee.js";import"./ArrowLeftOutlined.9092f4c2.js";const b=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:t,field:o})=>f(h,{value:t[o],onChange:e=>{t[o]=e}})}],g=l({components:{BasicForm:n,CollapseContainer:c,PageWrapper:B},setup(){const{createMessage:t}=_();return{schemas:b,handleSubmit:o=>{t.success("click search,values:"+JSON.stringify(o))}}}});function S(t,o,e,V,k,v){const m=r("BasicForm"),a=r("CollapseContainer"),s=r("PageWrapper");return d(),C(s,{title:"\u5BCC\u6587\u672C\u5D4C\u5165\u8868\u5355\u793A\u4F8B"},{default:i(()=>[p(a,{title:"\u5BCC\u6587\u672C\u8868\u5355"},{default:i(()=>[p(m,{labelWidth:100,schemas:t.schemas,actionColOptions:{span:24},onSubmit:t.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var gt=u(g,[["render",S]]);export{gt as default};
