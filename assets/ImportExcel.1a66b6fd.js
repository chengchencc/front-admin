import{I as x}from"./index.b6eac784.js";import{B as S}from"./TableImg.48a48f29.js";import"./BasicForm.bfc748d5.js";import{P as E}from"./index.bcb5cbac.js";import{au as h,a as C,w as F,aw as e,o as i,k as d,B as s,p as f,C as I,i as b,F as g,az as k}from"./index.47e23b6d.js";import"./index.ba498438.js";import"./useWindowSizeFn.334d9012.js";import"./FullscreenOutlined.226be3a0.js";import"./isEqual.266c78e9.js";import"./_baseIsEqual.2c011939.js";import"./useForm.e5ebb155.js";import"./index.c65c4b9b.js";import"./Checkbox.7fecedb7.js";import"./index.ddba01e4.js";import"./index.b877419d.js";import"./UpOutlined.22b3801f.js";import"./index.b6cfac0f.js";import"./index.2025d1f0.js";import"./uuid.2b29000c.js";import"./index.ceca6f94.js";import"./uniqBy.65385b37.js";import"./_baseIteratee.d1ed8bfb.js";import"./get.659c0466.js";import"./findIndex.2796655d.js";import"./toInteger.5c58eeae.js";import"./util.d91a6884.js";import"./warning.ca82f8e0.js";import"./index.dd40f929.js";import"./DeleteOutlined.00404b2f.js";import"./index.b2f9b607.js";import"./useSortable.50f2c115.js";import"./RedoOutlined.8d00bf2a.js";import"./CaretDownFilled.d20d9f66.js";import"./scrollTo.35395ae4.js";import"./index.5475205d.js";import"./index.80de389f.js";import"./index.3f247607.js";import"./index.8df56aab.js";import"./responsiveObserve.e74128d1.js";import"./useFlexGapSupport.01bde4dc.js";import"./useSize.7d9c76f4.js";import"./index.f640b252.js";import"./Tree.300cec75.js";import"./index.7cf79cb3.js";import"./download.ae3ff163.js";import"./base64Conver.08b9f4ec.js";import"./index.089e934e.js";import"./index.47dcf74c.js";import"./index.59e7287a.js";import"./index.e0d3e890.js";import"./useBreakpoint.82e584b1.js";import"./useContentViewHeight.7871b0d4.js";import"./index.b7f548dc.js";import"./ArrowLeftOutlined.e5e1e96b.js";const v=C({components:{BasicTable:S,ImpExcel:x,PageWrapper:E},setup(){const t=F([]);function c(p){t.value=[],console.log(p);for(const n of p){const{header:u,results:l,meta:{sheetName:m}}=n,o=[];for(const r of u)o.push({title:r,dataIndex:r});t.value.push({title:m,dataSource:l,columns:o})}}return{loadDataSuccess:c,tableListRef:t}}});function D(t,c,p,n,u,l){const m=e("a-button"),o=e("ImpExcel"),r=e("BasicTable"),_=e("PageWrapper");return i(),d(_,{title:"excel\u6570\u636E\u5BFC\u5165\u793A\u4F8B"},{default:s(()=>[f(o,{onSuccess:t.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:s(()=>[f(m,{class:"m-3"},{default:s(()=>[I(" \u5BFC\u5165Excel ")]),_:1})]),_:1},8,["onSuccess"]),(i(!0),b(g,null,k(t.tableListRef,(a,B)=>(i(),d(r,{key:B,title:a.title,columns:a.columns,dataSource:a.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}var Pt=h(v,[["render",D]]);export{Pt as default};
