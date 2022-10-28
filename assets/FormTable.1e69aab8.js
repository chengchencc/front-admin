import{B as d}from"./TableImg.3906216b.js";import"./BasicForm.d765cc9c.js";import{u as h}from"./useTable.f02b5d26.js";import{getBasicColumns as F,getFormConfig as k}from"./tableData.6b686000.js";import{au as C,a as y,w as B,aw as i,o as m,k as b,B as t,C as p,p as s,i as c,F as _,n as E,t as T}from"./index.0afb6b1a.js";import{A as w}from"./index.35e066f0.js";import{d as A}from"./table.b4d13db3.js";import"./index.0c92bc5e.js";import"./Checkbox.b94383d9.js";import"./index.f188e1cd.js";import"./useForm.d0f78599.js";import"./index.f1bbd8b9.js";import"./index.0fb2ca65.js";import"./index.ab4596d9.js";import"./useBreakpoint.f66a95b4.js";import"./responsiveObserve.8bc71b85.js";import"./useSize.b98aa611.js";import"./useWindowSizeFn.b437c5f3.js";import"./useContentViewHeight.6667aea5.js";import"./index.97f64344.js";import"./ArrowLeftOutlined.8571d53f.js";import"./index.a38530f5.js";import"./UpOutlined.53f4e913.js";import"./index.a86fe11c.js";import"./index.f3dc3acc.js";import"./isEqual.c3167c03.js";import"./_baseIsEqual.b9ab726e.js";import"./uuid.2b29000c.js";import"./index.3608aaa4.js";import"./uniqBy.1231b8aa.js";import"./_baseIteratee.ccaeac66.js";import"./get.cbf01dd9.js";import"./findIndex.bebb7dcc.js";import"./toInteger.385c5e34.js";import"./util.5b402eb8.js";import"./warning.ca82f8e0.js";import"./index.b920e176.js";import"./DeleteOutlined.7747d063.js";import"./index.afe49db0.js";import"./FullscreenOutlined.f42c8b10.js";import"./index.b5e58356.js";import"./useSortable.04beedbd.js";import"./RedoOutlined.8a38e0cf.js";import"./CaretDownFilled.6c2b69f4.js";import"./scrollTo.b6090ae3.js";import"./index.9ecfb69b.js";import"./index.1916b734.js";import"./index.f9b7668c.js";import"./index.335339a9.js";import"./useFlexGapSupport.358e75d5.js";import"./index.752237d9.js";import"./Tree.c194a51d.js";import"./download.8e655723.js";import"./base64Conver.08b9f4ec.js";import"./index.487b659d.js";import"./index.3fdd4c89.js";const S=y({components:{BasicTable:d,AAlert:w},setup(){const o=B([]),[e,{getForm:n}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:A,columns:F(),useSearchForm:!0,formConfig:k(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function a(){console.log(n().getFieldsValue())}function u(r){console.log(r),o.value=r}return{registerTable:e,getFormValues:a,checkedKeys:o,onSelectChange:u}}}),D={key:1};function K(o,e,n,a,u,r){const l=i("a-button"),f=i("a-alert"),g=i("BasicTable");return m(),b(g,{onRegister:o.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:o.checkedKeys,onChange:o.onSelectChange}},{"form-custom":t(()=>[p(" custom-slot ")]),headerTop:t(()=>[s(f,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(m(),c(_,{key:0},[E("span",null,"\u5DF2\u9009\u4E2D"+T(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),s(l,{type:"link",onClick:e[0]||(e[0]=V=>o.checkedKeys=[]),size:"small"},{default:t(()=>[p("\u6E05\u7A7A")]),_:1})],64)):(m(),c("span",D,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:t(()=>[s(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[p("\u83B7\u53D6\u8868\u5355\u6570\u636E")]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var Ro=C(S,[["render",K]]);export{Ro as default};
