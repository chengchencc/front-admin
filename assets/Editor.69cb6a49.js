import{B as s}from"./BasicForm.8adc6160.js";import{au as u,a as l,cC as c,aw as r,o as d,k as f,B as i,p,b_ as _,G as C}from"./index.47c27fa3.js";import{M as h}from"./index.fc9b8c9e.js";import{P as b}from"./index.47205108.js";import"./index.db035426.js";import"./index.43ecb289.js";import"./responsiveObserve.82bd8af1.js";import"./useFlexGapSupport.10110a3a.js";import"./_baseIteratee.c3bb2e53.js";import"./_baseIsEqual.651d1c09.js";import"./get.ec27449e.js";import"./findIndex.0ae9d528.js";import"./toInteger.50699d26.js";import"./isEqual.4dbc08e5.js";import"./useSize.1a235d89.js";import"./index.7f26bd4c.js";import"./index.9c8b9277.js";import"./Checkbox.219512c3.js";import"./index.a96ef7b3.js";import"./index.97c978d6.js";import"./index.03bd4258.js";import"./UpOutlined.ecf31566.js";import"./index.b595ff2d.js";import"./index.60c3c61a.js";import"./warning.ca82f8e0.js";import"./util.6c5479ad.js";import"./Tree.63d3056b.js";import"./RedoOutlined.4f553d73.js";import"./index.057d6705.js";import"./uniqBy.00178e4f.js";import"./index.42be32d5.js";import"./DeleteOutlined.bea6872a.js";import"./index.d1ee7f75.js";import"./index.606fd3a9.js";import"./useWindowSizeFn.ba3fdbd9.js";import"./FullscreenOutlined.7b4a2790.js";import"./index.0c916bfb.js";import"./uuid.2b29000c.js";import"./download.c04f444b.js";import"./base64Conver.08b9f4ec.js";import"./index.d1814024.js";import"./index.ad473bbd.js";import"./index.1633ee86.js";import"./index.1c791828.js";import"./useBreakpoint.d5131304.js";import"./useContentViewHeight.e747bcb3.js";import"./index.20b3f9c9.js";import"./transButton.7bf1790b.js";import"./ArrowLeftOutlined.a0bf86a2.js";const g=[{field:"title",component:"Input",label:"title",defaultValue:"\u6807\u9898",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:o,field:t})=>_(h,{value:o[t],onChange:e=>{o[t]=e}})}],k=l({components:{BasicForm:s,CollapseContainer:c,PageWrapper:b},setup(){const{createMessage:o}=C();return{schemas:g,handleSubmit:t=>{o.success("click search,values:"+JSON.stringify(t))}}}});function B(o,t,e,w,F,M){const m=r("BasicForm"),a=r("CollapseContainer"),n=r("PageWrapper");return d(),f(n,{title:"MarkDown\u7EC4\u4EF6\u5D4C\u5165Form\u793A\u4F8B"},{default:i(()=>[p(a,{title:"MarkDown\u8868\u5355"},{default:i(()=>[p(m,{labelWidth:100,schemas:o.schemas,actionColOptions:{span:24},onSubmit:o.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var Bo=u(k,[["render",B]]);export{Bo as default};
