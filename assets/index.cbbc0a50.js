import{D as f}from"./index.f8ea86a1.js";import{B as _}from"./TableImg.3975ff3a.js";import"./BasicForm.33be6605.js";import{u as l}from"./useTable.6d2b5fcf.js";import{P as T}from"./index.7f4f8797.js";import{au as h,a as g,aw as r,o as D,k as b,B,p as t}from"./index.a4184510.js";import{D as c}from"./index.b3c2b46d.js";import{refundTableData as S,refundTableSchema as v,refundTimeTableSchema as y,refundTimeTableData as C,refundSchema as F,refundData as R,personSchema as w,personData as E}from"./data.dbcda11c.js";import"./index.5a914d38.js";import"./responsiveObserve.74da7233.js";import"./get.e620704d.js";import"./index.f9d35bfd.js";import"./Checkbox.341a0e84.js";import"./index.40118052.js";import"./useForm.e9f1e61e.js";import"./index.69d9b4a1.js";import"./UpOutlined.c620fc88.js";import"./index.e572ad54.js";import"./index.42ece229.js";import"./isEqual.297bdb1e.js";import"./_baseIsEqual.022cfbb5.js";import"./uuid.2b29000c.js";import"./index.761088f5.js";import"./uniqBy.634fce4d.js";import"./_baseIteratee.e5042e06.js";import"./findIndex.657e235c.js";import"./toInteger.58eec37d.js";import"./util.89eee439.js";import"./warning.ca82f8e0.js";import"./index.88fce616.js";import"./DeleteOutlined.36a39901.js";import"./useWindowSizeFn.c1349caf.js";import"./index.380f5c41.js";import"./FullscreenOutlined.06198031.js";import"./useSortable.a1985680.js";import"./RedoOutlined.59e0b862.js";import"./CaretDownFilled.075b8f9c.js";import"./scrollTo.9ef220d2.js";import"./transButton.5ba7ce35.js";import"./index.8d369d29.js";import"./index.1ecd5574.js";import"./index.61947057.js";import"./index.5389ab9f.js";import"./useFlexGapSupport.22cad392.js";import"./useSize.6d3e9c8f.js";import"./index.453418bd.js";import"./Tree.4c3dc6e1.js";import"./index.61ad094d.js";import"./download.8dd6afc4.js";import"./base64Conver.08b9f4ec.js";import"./index.8b1a4278.js";import"./index.b2270280.js";import"./index.00036abf.js";import"./index.97a5ac83.js";import"./useBreakpoint.3d7302fa.js";import"./useContentViewHeight.82e6d0cc.js";import"./index.cff0b8af.js";import"./ArrowLeftOutlined.62eef3b2.js";const k=g({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[e]=l({title:"\u9000\u8D27\u5546\u54C1",dataSource:S,columns:v,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:n}),[p]=l({title:"\u9000\u8D27\u8FDB\u5EA6",columns:y,pagination:!1,dataSource:C,showIndexColumn:!1,scroll:{y:300}});function n(s){let i=0,a=0;return s.forEach(o=>{i+=o.t5,a+=o.t6}),[{t1:"\u603B\u8BA1",t5:i,t6:a}]}return{registerRefundTable:e,registerTimeTable:p,refundSchema:F,refundData:R,personSchema:w,personData:E}}});function P(e,p,n,s,i,a){const o=r("Description"),m=r("a-divider"),u=r("BasicTable"),d=r("PageWrapper");return D(),b(d,{title:"\u57FA\u7840\u8BE6\u60C5\u9875",contentBackground:""},{default:B(()=>[t(o,{size:"middle",title:"\u9000\u6B3E\u7533\u8BF7",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),t(m),t(o,{size:"middle",title:"\u7528\u6237\u4FE1\u606F",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),t(m),t(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),t(m),t(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}var We=h(k,[["render",P],["__scopeId","data-v-33e8998f"]]);export{We as default};