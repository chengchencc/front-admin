import{B as f}from"./TableImg.30884f21.js";import{i as h}from"./BasicForm.11d2168e.js";import{u as b}from"./useTable.2da092e2.js";import{c as g}from"./system.1005b62e.js";import{u as C}from"./index.78e8d883.js";import{R as _,c as w,s as D}from"./RoleDrawer.3d1b8fab.js";import{au as R,a as T,aw as e,o as B,i as S,p as r,B as a,C as k}from"./index.7b1e5fc9.js";import"./index.ab41b802.js";import"./Checkbox.4904982c.js";import"./index.513077c3.js";import"./useForm.18e1f5bf.js";import"./index.8b66a92a.js";import"./index.a24b83e2.js";import"./index.ddfe03a6.js";import"./useBreakpoint.90b6ad37.js";import"./responsiveObserve.6d19c0fe.js";import"./useSize.740572dc.js";import"./useWindowSizeFn.f095e4df.js";import"./useContentViewHeight.640d93af.js";import"./index.edc8e0a4.js";import"./ArrowLeftOutlined.9182bb4c.js";import"./index.305f1f80.js";import"./UpOutlined.db756a99.js";import"./index.bd088635.js";import"./index.053c40a9.js";import"./isEqual.4ae419fa.js";import"./_baseIsEqual.54c27c7e.js";import"./uuid.2b29000c.js";import"./index.19028502.js";import"./uniqBy.c8a5160e.js";import"./_baseIteratee.7060e85a.js";import"./get.0ab54a31.js";import"./findIndex.27e98ef8.js";import"./toInteger.7a7fb8cc.js";import"./util.f212547d.js";import"./warning.ca82f8e0.js";import"./index.d98d380c.js";import"./DeleteOutlined.5daebfc6.js";import"./index.1454835c.js";import"./FullscreenOutlined.0e699843.js";import"./index.bf917f2e.js";import"./useSortable.8d313cde.js";import"./RedoOutlined.9fdd7178.js";import"./CaretDownFilled.4103650a.js";import"./scrollTo.eca98175.js";import"./index.66e2481e.js";import"./index.5095bc23.js";import"./index.a6d6afc3.js";import"./index.78938988.js";import"./useFlexGapSupport.4094887b.js";import"./index.74193284.js";import"./Tree.92e3e4bf.js";import"./index.dfa26d89.js";import"./download.5fa85e56.js";import"./base64Conver.08b9f4ec.js";import"./index.6440cd5b.js";import"./index.b05a4ede.js";import"./index.d1b6fdaa.js";import"./Tree.vue_vue_type_style_index_0_lang.265dd662.js";import"./useContextMenu.473936f3.js";const E=T({name:"RoleManagement",components:{BasicTable:f,RoleDrawer:_,TableAction:h},setup(){const[o,{openDrawer:i}]=C(),[p,{reload:s}]=b({title:"\u89D2\u8272\u5217\u8868",api:g,columns:w,formConfig:{labelWidth:120,schemas:D},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function n(t){console.log(t)}function m(){s()}return{registerTable:p,registerDrawer:o,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:m}}});function v(o,i,p,s,l,c){const n=e("a-button"),m=e("TableAction"),t=e("BasicTable"),d=e("RoleDrawer");return B(),S("div",null,[r(t,{onRegister:o.registerTable},{toolbar:a(()=>[r(n,{type:"primary",onClick:o.handleCreate},{default:a(()=>[k(" \u65B0\u589E\u89D2\u8272 ")]),_:1},8,["onClick"])]),action:a(({record:u})=>[r(m,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),r(d,{onRegister:o.registerDrawer,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Uo=R(E,[["render",v]]);export{Uo as default};
