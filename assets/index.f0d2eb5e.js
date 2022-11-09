import{B as f}from"./TableImg.e1a597ea.js";import{i as h}from"./BasicForm.2aa30c4a.js";import{u as b}from"./useTable.68324abd.js";import{c as g}from"./system.ed65256e.js";import{u as C}from"./index.e5a16177.js";import{R as _,c as w,s as D}from"./RoleDrawer.6ab3cb99.js";import{au as R,a as T,aw as e,o as B,i as S,p as r,B as a,C as k}from"./index.da4313ed.js";import"./index.06ee136a.js";import"./Checkbox.6a81adb3.js";import"./index.e014ecd5.js";import"./useForm.c10ea13b.js";import"./index.c7387940.js";import"./index.bb490040.js";import"./index.95fd586b.js";import"./useBreakpoint.57cbd8f9.js";import"./responsiveObserve.72a48b47.js";import"./useSize.d957ad9d.js";import"./useWindowSizeFn.eb5b2cc5.js";import"./useContentViewHeight.f1980a07.js";import"./index.6ae9f6a4.js";import"./ArrowLeftOutlined.58c817d8.js";import"./index.e5dd25bf.js";import"./UpOutlined.7122e7b5.js";import"./index.a6dc2ca3.js";import"./index.34185b62.js";import"./isEqual.13863e21.js";import"./_baseIsEqual.c5abd7f9.js";import"./uuid.2b29000c.js";import"./index.20906073.js";import"./uniqBy.21b015da.js";import"./_baseIteratee.c2a94fbf.js";import"./get.e2b72cba.js";import"./findIndex.77ae307c.js";import"./toInteger.92ea4f7e.js";import"./util.8ccb2a01.js";import"./warning.ca82f8e0.js";import"./index.cd0eb5c4.js";import"./DeleteOutlined.0282521a.js";import"./index.9a63394d.js";import"./FullscreenOutlined.2307bbef.js";import"./index.aeb8c0e3.js";import"./useSortable.5af56706.js";import"./RedoOutlined.2b242497.js";import"./CaretDownFilled.eaa9a8bc.js";import"./scrollTo.79118071.js";import"./index.dc7d82a6.js";import"./index.d75aa541.js";import"./index.caf27347.js";import"./index.ebcfc250.js";import"./useFlexGapSupport.81b3a88e.js";import"./index.e753562d.js";import"./Tree.8435820f.js";import"./index.8424fa42.js";import"./download.c05e4497.js";import"./base64Conver.08b9f4ec.js";import"./index.86f02a74.js";import"./index.83f5641e.js";import"./index.9d425117.js";import"./Tree.vue_vue_type_style_index_0_lang.23cf8262.js";import"./useContextMenu.dad0ac4d.js";const E=T({name:"RoleManagement",components:{BasicTable:f,RoleDrawer:_,TableAction:h},setup(){const[o,{openDrawer:i}]=C(),[p,{reload:s}]=b({title:"\u89D2\u8272\u5217\u8868",api:g,columns:w,formConfig:{labelWidth:120,schemas:D},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function n(t){console.log(t)}function m(){s()}return{registerTable:p,registerDrawer:o,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:m}}});function v(o,i,p,s,l,c){const n=e("a-button"),m=e("TableAction"),t=e("BasicTable"),d=e("RoleDrawer");return B(),S("div",null,[r(t,{onRegister:o.registerTable},{toolbar:a(()=>[r(n,{type:"primary",onClick:o.handleCreate},{default:a(()=>[k(" \u65B0\u589E\u89D2\u8272 ")]),_:1},8,["onClick"])]),action:a(({record:u})=>[r(m,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),r(d,{onRegister:o.registerDrawer,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Uo=R(E,[["render",v]]);export{Uo as default};
