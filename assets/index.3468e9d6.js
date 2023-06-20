import{B as f}from"./TableImg.3975ff3a.js";import{T as h}from"./BasicForm.33be6605.js";import{u as b}from"./useTable.6d2b5fcf.js";import{d as g}from"./system.77f5808c.js";import{a as C}from"./index.738107b2.js";import{R as _,c as w,s as D}from"./RoleDrawer.f9d753a1.js";import{au as T,a as R,aw as e,o as B,i as S,p as r,B as a,C as k}from"./index.a4184510.js";import"./index.f9d35bfd.js";import"./Checkbox.341a0e84.js";import"./index.40118052.js";import"./useForm.e9f1e61e.js";import"./index.7f4f8797.js";import"./index.00036abf.js";import"./index.97a5ac83.js";import"./useBreakpoint.3d7302fa.js";import"./responsiveObserve.74da7233.js";import"./useSize.6d3e9c8f.js";import"./useWindowSizeFn.c1349caf.js";import"./useContentViewHeight.82e6d0cc.js";import"./index.cff0b8af.js";import"./transButton.5ba7ce35.js";import"./ArrowLeftOutlined.62eef3b2.js";import"./index.69d9b4a1.js";import"./UpOutlined.c620fc88.js";import"./index.e572ad54.js";import"./index.42ece229.js";import"./isEqual.297bdb1e.js";import"./_baseIsEqual.022cfbb5.js";import"./uuid.2b29000c.js";import"./index.761088f5.js";import"./uniqBy.634fce4d.js";import"./_baseIteratee.e5042e06.js";import"./get.e620704d.js";import"./findIndex.657e235c.js";import"./toInteger.58eec37d.js";import"./util.89eee439.js";import"./warning.ca82f8e0.js";import"./index.88fce616.js";import"./DeleteOutlined.36a39901.js";import"./index.380f5c41.js";import"./FullscreenOutlined.06198031.js";import"./index.b3c2b46d.js";import"./useSortable.a1985680.js";import"./RedoOutlined.59e0b862.js";import"./CaretDownFilled.075b8f9c.js";import"./scrollTo.9ef220d2.js";import"./index.8d369d29.js";import"./index.1ecd5574.js";import"./index.61947057.js";import"./index.5389ab9f.js";import"./useFlexGapSupport.22cad392.js";import"./index.453418bd.js";import"./Tree.4c3dc6e1.js";import"./index.61ad094d.js";import"./download.8dd6afc4.js";import"./base64Conver.08b9f4ec.js";import"./index.8b1a4278.js";import"./index.b2270280.js";import"./index.de400229.js";import"./Tree.vue_vue_type_style_index_0_lang.609df90f.js";import"./useContextMenu.d894461f.js";import"./PlusSquareOutlined.138b86de.js";const E=R({name:"RoleManagement",components:{BasicTable:f,RoleDrawer:_,TableAction:h},setup(){const[o,{openDrawer:i}]=C(),[p,{reload:s}]=b({title:"\u89D2\u8272\u5217\u8868",api:g,columns:w,formConfig:{labelWidth:120,schemas:D},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function n(t){console.log(t)}function m(){s()}return{registerTable:p,registerDrawer:o,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:m}}});function v(o,i,p,s,l,c){const n=e("a-button"),m=e("TableAction"),t=e("BasicTable"),d=e("RoleDrawer");return B(),S("div",null,[r(t,{onRegister:o.registerTable},{toolbar:a(()=>[r(n,{type:"primary",onClick:o.handleCreate},{default:a(()=>[k(" \u65B0\u589E\u89D2\u8272 ")]),_:1},8,["onClick"])]),action:a(({record:u})=>[r(m,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),r(d,{onRegister:o.registerDrawer,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Lo=T(E,[["render",v]]);export{Lo as default};