import{I as x}from"./index.f3c6aa8a.js";import{B as S}from"./TableImg.2893489d.js";import"./BasicForm.44f290bf.js";import{P as E}from"./index.46f9773d.js";import{au as h,a as C,w as F,aw as e,o as a,k as d,B as s,p as f,C as I,i as b,F as g,az as k}from"./index.18956233.js";import"./index.f6da7695.js";import"./useWindowSizeFn.f4ad2eee.js";import"./FullscreenOutlined.d3310a9b.js";import"./isEqual.e03db52b.js";import"./_baseIsEqual.ba2713df.js";import"./useForm.db3568e3.js";import"./index.b63d8af9.js";import"./Checkbox.21515344.js";import"./index.6f50f245.js";import"./index.ad82600a.js";import"./UpOutlined.efddc79a.js";import"./index.3e1408f1.js";import"./index.d9681285.js";import"./uuid.2b29000c.js";import"./index.8ada3863.js";import"./uniqBy.00f5c4cb.js";import"./_baseIteratee.95ec3def.js";import"./get.9b230a51.js";import"./findIndex.35a0834d.js";import"./toInteger.6e90fb3b.js";import"./util.2f7864c0.js";import"./warning.ca82f8e0.js";import"./index.97db6f06.js";import"./DeleteOutlined.5080a543.js";import"./index.a6679ce1.js";import"./useSortable.73127fd2.js";import"./RedoOutlined.56ad32e8.js";import"./CaretDownFilled.d85eb8bb.js";import"./scrollTo.6ef5eff8.js";import"./transButton.d90e7e67.js";import"./index.42999ed4.js";import"./index.fe065e77.js";import"./index.69d70993.js";import"./index.7198d6db.js";import"./responsiveObserve.a8026f94.js";import"./useFlexGapSupport.d3bdb946.js";import"./useSize.e266be7f.js";import"./index.2d8f431e.js";import"./Tree.719da42e.js";import"./index.0c2b30d1.js";import"./download.95b0a726.js";import"./base64Conver.08b9f4ec.js";import"./index.4b8fe0ac.js";import"./index.4400172f.js";import"./index.3b8ac8f2.js";import"./index.fe0c3553.js";import"./useBreakpoint.281f226e.js";import"./useContentViewHeight.736e25c3.js";import"./index.6dce6f0a.js";import"./ArrowLeftOutlined.62d293c9.js";const v=C({components:{BasicTable:S,ImpExcel:x,PageWrapper:E},setup(){const t=F([]);function c(p){t.value=[],console.log(p);for(const n of p){const{header:u,results:l,meta:{sheetName:m}}=n,o=[];for(const r of u)o.push({title:r,dataIndex:r});t.value.push({title:m,dataSource:l,columns:o})}}return{loadDataSuccess:c,tableListRef:t}}});function D(t,c,p,n,u,l){const m=e("a-button"),o=e("ImpExcel"),r=e("BasicTable"),_=e("PageWrapper");return a(),d(_,{title:"excel\u6570\u636E\u5BFC\u5165\u793A\u4F8B"},{default:s(()=>[f(o,{onSuccess:t.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:s(()=>[f(m,{class:"m-3"},{default:s(()=>[I(" \u5BFC\u5165Excel ")]),_:1})]),_:1},8,["onSuccess"]),(a(!0),b(g,null,k(t.tableListRef,(i,B)=>(a(),d(r,{key:B,title:i.title,columns:i.columns,dataSource:i.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}var Tt=h(v,[["render",D]]);export{Tt as default};
