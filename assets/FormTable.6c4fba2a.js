import{B as d}from"./TableImg.48a48f29.js";import"./BasicForm.bfc748d5.js";import{u as h}from"./useTable.a08c963a.js";import{getBasicColumns as F,getFormConfig as k}from"./tableData.6b686000.js";import{au as C,a as y,w as B,aw as i,o as m,k as b,B as t,C as p,p as s,i as c,F as _,n as E,t as T}from"./index.47e23b6d.js";import{A as w}from"./index.7cf79cb3.js";import{d as A}from"./table.1301cd09.js";import"./index.c65c4b9b.js";import"./Checkbox.7fecedb7.js";import"./index.ddba01e4.js";import"./useForm.e5ebb155.js";import"./index.bcb5cbac.js";import"./index.59e7287a.js";import"./index.e0d3e890.js";import"./useBreakpoint.82e584b1.js";import"./responsiveObserve.e74128d1.js";import"./useSize.7d9c76f4.js";import"./useWindowSizeFn.334d9012.js";import"./useContentViewHeight.7871b0d4.js";import"./index.b7f548dc.js";import"./ArrowLeftOutlined.e5e1e96b.js";import"./index.b877419d.js";import"./UpOutlined.22b3801f.js";import"./index.b6cfac0f.js";import"./index.2025d1f0.js";import"./isEqual.266c78e9.js";import"./_baseIsEqual.2c011939.js";import"./uuid.2b29000c.js";import"./index.ceca6f94.js";import"./uniqBy.65385b37.js";import"./_baseIteratee.d1ed8bfb.js";import"./get.659c0466.js";import"./findIndex.2796655d.js";import"./toInteger.5c58eeae.js";import"./util.d91a6884.js";import"./warning.ca82f8e0.js";import"./index.dd40f929.js";import"./DeleteOutlined.00404b2f.js";import"./index.ba498438.js";import"./FullscreenOutlined.226be3a0.js";import"./index.b2f9b607.js";import"./useSortable.50f2c115.js";import"./RedoOutlined.8d00bf2a.js";import"./CaretDownFilled.d20d9f66.js";import"./scrollTo.35395ae4.js";import"./index.5475205d.js";import"./index.80de389f.js";import"./index.3f247607.js";import"./index.8df56aab.js";import"./useFlexGapSupport.01bde4dc.js";import"./index.f640b252.js";import"./Tree.300cec75.js";import"./download.ae3ff163.js";import"./base64Conver.08b9f4ec.js";import"./index.089e934e.js";import"./index.47dcf74c.js";const S=y({components:{BasicTable:d,AAlert:w},setup(){const o=B([]),[e,{getForm:n}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:A,columns:F(),useSearchForm:!0,formConfig:k(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function a(){console.log(n().getFieldsValue())}function u(r){console.log(r),o.value=r}return{registerTable:e,getFormValues:a,checkedKeys:o,onSelectChange:u}}}),D={key:1};function K(o,e,n,a,u,r){const l=i("a-button"),f=i("a-alert"),g=i("BasicTable");return m(),b(g,{onRegister:o.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:o.checkedKeys,onChange:o.onSelectChange}},{"form-custom":t(()=>[p(" custom-slot ")]),headerTop:t(()=>[s(f,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(m(),c(_,{key:0},[E("span",null,"\u5DF2\u9009\u4E2D"+T(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),s(l,{type:"link",onClick:e[0]||(e[0]=V=>o.checkedKeys=[]),size:"small"},{default:t(()=>[p("\u6E05\u7A7A")]),_:1})],64)):(m(),c("span",D,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:t(()=>[s(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[p("\u83B7\u53D6\u8868\u5355\u6570\u636E")]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var Ro=C(S,[["render",K]]);export{Ro as default};
