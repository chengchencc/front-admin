import{D as f}from"./index.9262972b.js";import{B as _}from"./TableImg.8ea7a7be.js";import"./BasicForm.6a80a3ef.js";import{u as l}from"./useTable.d0292164.js";import{P as T}from"./index.86f2dbf6.js";import{au as h,a as g,aw as r,o as D,k as b,B,p as t}from"./index.4804300a.js";import{D as c}from"./index.b31cd219.js";import{refundTableData as S,refundTableSchema as v,refundTimeTableSchema as y,refundTimeTableData as C,refundSchema as F,refundData as R,personSchema as w,personData as E}from"./data.7b825400.js";import"./index.bb84701f.js";import"./responsiveObserve.dcad6fcd.js";import"./get.0b3d73ff.js";import"./index.aafc8171.js";import"./Checkbox.ed9ba07d.js";import"./index.b072982e.js";import"./useForm.9f5f06ba.js";import"./index.4b18e1d8.js";import"./UpOutlined.7d204e9d.js";import"./index.f77551c2.js";import"./index.8d4032f7.js";import"./isEqual.d085b836.js";import"./_baseIsEqual.b58e8f82.js";import"./uuid.2b29000c.js";import"./index.ea8a2f75.js";import"./uniqBy.a37949c3.js";import"./_baseIteratee.fd601a92.js";import"./findIndex.64769271.js";import"./toInteger.cb8f48a7.js";import"./util.911c028f.js";import"./warning.ca82f8e0.js";import"./index.bf15c0c1.js";import"./DeleteOutlined.8ae61e5f.js";import"./useWindowSizeFn.38c7676c.js";import"./index.2fdf992b.js";import"./FullscreenOutlined.6182337b.js";import"./useSortable.3f99009a.js";import"./RedoOutlined.f42eea3d.js";import"./CaretDownFilled.b2855526.js";import"./scrollTo.0eb69a3c.js";import"./transButton.342edbea.js";import"./index.5b9902c5.js";import"./index.419d1edd.js";import"./index.0c62ab03.js";import"./index.716c17fa.js";import"./useFlexGapSupport.80df3ddb.js";import"./useSize.ea1bf5d1.js";import"./index.9c7c8f45.js";import"./Tree.d17c098e.js";import"./index.7e49ec2b.js";import"./download.9c0a35ab.js";import"./base64Conver.08b9f4ec.js";import"./index.b8e933b2.js";import"./index.259bc711.js";import"./index.699aa748.js";import"./index.1f68cb78.js";import"./useBreakpoint.3a1e9c1a.js";import"./useContentViewHeight.8fc9ee42.js";import"./index.583dbbd3.js";import"./ArrowLeftOutlined.0255904f.js";const k=g({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[e]=l({title:"\u9000\u8D27\u5546\u54C1",dataSource:S,columns:v,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:n}),[p]=l({title:"\u9000\u8D27\u8FDB\u5EA6",columns:y,pagination:!1,dataSource:C,showIndexColumn:!1,scroll:{y:300}});function n(s){let i=0,a=0;return s.forEach(o=>{i+=o.t5,a+=o.t6}),[{t1:"\u603B\u8BA1",t5:i,t6:a}]}return{registerRefundTable:e,registerTimeTable:p,refundSchema:F,refundData:R,personSchema:w,personData:E}}});function P(e,p,n,s,i,a){const o=r("Description"),m=r("a-divider"),u=r("BasicTable"),d=r("PageWrapper");return D(),b(d,{title:"\u57FA\u7840\u8BE6\u60C5\u9875",contentBackground:""},{default:B(()=>[t(o,{size:"middle",title:"\u9000\u6B3E\u7533\u8BF7",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),t(m),t(o,{size:"middle",title:"\u7528\u6237\u4FE1\u606F",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),t(m),t(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),t(m),t(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}var We=h(k,[["render",P],["__scopeId","data-v-33e8998f"]]);export{We as default};
