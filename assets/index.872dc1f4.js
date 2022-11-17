import{B as f}from"./TableImg.46a22623.js";import{i as h}from"./BasicForm.4ec4a520.js";import{u as b}from"./useTable.32fc52a8.js";import{c as g}from"./system.0fa780f0.js";import{u as C}from"./index.a90e9403.js";import{R as _,c as w,s as D}from"./RoleDrawer.77b188b3.js";import{au as R,a as T,aw as e,o as B,i as S,p as r,B as a,C as k}from"./index.382fc83e.js";import"./index.0b211a8b.js";import"./Checkbox.d7b0098f.js";import"./index.0b4a170c.js";import"./useForm.43a8256f.js";import"./index.72a98002.js";import"./index.e6ceb7ae.js";import"./index.da069d2c.js";import"./useBreakpoint.74963e9e.js";import"./responsiveObserve.ea75b784.js";import"./useSize.4c41a328.js";import"./useWindowSizeFn.435c6f18.js";import"./useContentViewHeight.7dcda93a.js";import"./index.f4d88da9.js";import"./ArrowLeftOutlined.adfd60c1.js";import"./index.3f97a02a.js";import"./UpOutlined.97c9d97c.js";import"./index.ff31cd23.js";import"./index.4828a7ce.js";import"./isEqual.a078e6bd.js";import"./_baseIsEqual.cdc22aaf.js";import"./uuid.2b29000c.js";import"./index.e1d199ff.js";import"./uniqBy.093644f1.js";import"./_baseIteratee.54e5789e.js";import"./get.e5e78019.js";import"./findIndex.2c6a2366.js";import"./toInteger.aa53cd67.js";import"./util.f28e2161.js";import"./warning.ca82f8e0.js";import"./index.3199418a.js";import"./DeleteOutlined.65f410d2.js";import"./index.41c42497.js";import"./FullscreenOutlined.b8bf3642.js";import"./index.d14f017e.js";import"./useSortable.7edae39b.js";import"./RedoOutlined.db466b1c.js";import"./CaretDownFilled.1876b8d6.js";import"./scrollTo.a4bf3623.js";import"./index.d5ce8522.js";import"./index.05e1b6ac.js";import"./index.cb317af3.js";import"./index.3fc2d770.js";import"./useFlexGapSupport.6c12f438.js";import"./index.c4f44adf.js";import"./Tree.8453a007.js";import"./index.ea1996b2.js";import"./download.5d149050.js";import"./base64Conver.08b9f4ec.js";import"./index.4bfc3713.js";import"./index.edafa899.js";import"./index.09c8ed3d.js";import"./Tree.vue_vue_type_style_index_0_lang.0a8b688c.js";import"./useContextMenu.8a99458f.js";const E=T({name:"RoleManagement",components:{BasicTable:f,RoleDrawer:_,TableAction:h},setup(){const[o,{openDrawer:i}]=C(),[p,{reload:s}]=b({title:"\u89D2\u8272\u5217\u8868",api:g,columns:w,formConfig:{labelWidth:120,schemas:D},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function n(t){console.log(t)}function m(){s()}return{registerTable:p,registerDrawer:o,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:m}}});function v(o,i,p,s,l,c){const n=e("a-button"),m=e("TableAction"),t=e("BasicTable"),d=e("RoleDrawer");return B(),S("div",null,[r(t,{onRegister:o.registerTable},{toolbar:a(()=>[r(n,{type:"primary",onClick:o.handleCreate},{default:a(()=>[k(" \u65B0\u589E\u89D2\u8272 ")]),_:1},8,["onClick"])]),action:a(({record:u})=>[r(m,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),r(d,{onRegister:o.registerDrawer,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Uo=R(E,[["render",v]]);export{Uo as default};
