import{B as f}from"./TableImg.8ea7a7be.js";import{T as h}from"./BasicForm.6a80a3ef.js";import{u as b}from"./useTable.d0292164.js";import{c as C}from"./system.3a7c8b22.js";import{a as g}from"./index.736f5816.js";import{M as T,c as w,s as D}from"./MenuDrawer.6010a6bf.js";import{au as _,a as S,aw as t,o as B,i as F,p as r,B as p,C as M,L as k}from"./index.4804300a.js";import"./index.aafc8171.js";import"./Checkbox.ed9ba07d.js";import"./index.b072982e.js";import"./useForm.9f5f06ba.js";import"./index.86f2dbf6.js";import"./index.699aa748.js";import"./index.1f68cb78.js";import"./useBreakpoint.3a1e9c1a.js";import"./responsiveObserve.dcad6fcd.js";import"./useSize.ea1bf5d1.js";import"./useWindowSizeFn.38c7676c.js";import"./useContentViewHeight.8fc9ee42.js";import"./index.583dbbd3.js";import"./transButton.342edbea.js";import"./ArrowLeftOutlined.0255904f.js";import"./index.4b18e1d8.js";import"./UpOutlined.7d204e9d.js";import"./index.f77551c2.js";import"./index.8d4032f7.js";import"./isEqual.d085b836.js";import"./_baseIsEqual.b58e8f82.js";import"./uuid.2b29000c.js";import"./index.ea8a2f75.js";import"./uniqBy.a37949c3.js";import"./_baseIteratee.fd601a92.js";import"./get.0b3d73ff.js";import"./findIndex.64769271.js";import"./toInteger.cb8f48a7.js";import"./util.911c028f.js";import"./warning.ca82f8e0.js";import"./index.bf15c0c1.js";import"./DeleteOutlined.8ae61e5f.js";import"./index.2fdf992b.js";import"./FullscreenOutlined.6182337b.js";import"./index.b31cd219.js";import"./useSortable.3f99009a.js";import"./RedoOutlined.f42eea3d.js";import"./CaretDownFilled.b2855526.js";import"./scrollTo.0eb69a3c.js";import"./index.5b9902c5.js";import"./index.419d1edd.js";import"./index.0c62ab03.js";import"./index.716c17fa.js";import"./useFlexGapSupport.80df3ddb.js";import"./index.9c7c8f45.js";import"./Tree.d17c098e.js";import"./index.7e49ec2b.js";import"./download.9c0a35ab.js";import"./base64Conver.08b9f4ec.js";import"./index.b8e933b2.js";import"./index.259bc711.js";import"./index.ade36860.js";const R=S({name:"MenuManagement",components:{BasicTable:f,MenuDrawer:T,TableAction:h},setup(){const[e,{openDrawer:i}]=g(),[c,{reload:l,expandAll:u}]=b({title:"\u83DC\u5355\u5217\u8868",api:C,columns:w,formConfig:{labelWidth:120,schemas:D},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function d(){i(!0,{isUpdate:!1})}function n(o){i(!0,{record:o,isUpdate:!0})}function a(o){console.log(o)}function m(){l()}function s(){k(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:n,handleDelete:a,handleSuccess:m,onFetchSuccess:s}}});function A(e,i,c,l,u,d){const n=t("a-button"),a=t("TableAction"),m=t("BasicTable"),s=t("MenuDrawer");return B(),F("div",null,[r(m,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:p(()=>[r(n,{type:"primary",onClick:e.handleCreate},{default:p(()=>[M(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),action:p(({record:o})=>[r(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])]),_:1},8,["onRegister","onFetchSuccess"]),r(s,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ie=_(R,[["render",A]]);export{Ie as default};
