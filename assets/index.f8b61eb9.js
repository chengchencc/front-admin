import{B as f}from"./TableImg.afe7defb.js";import{T as h}from"./BasicForm.02b7178d.js";import{u as b}from"./useTable.b69876df.js";import{d as g}from"./system.2b1947fc.js";import{a as C}from"./index.afe702d6.js";import{R as _,c as w,s as D}from"./RoleDrawer.ba632833.js";import{au as T,a as R,aw as e,o as B,i as S,p as r,B as a,C as k}from"./index.2d782bcc.js";import"./index.b2c7511a.js";import"./Checkbox.c7829bfd.js";import"./index.04e4f142.js";import"./useForm.e6dc2e4a.js";import"./index.45f647a3.js";import"./index.7e02ee39.js";import"./index.9f1926af.js";import"./useBreakpoint.d743f914.js";import"./responsiveObserve.37523389.js";import"./useSize.fc767944.js";import"./useWindowSizeFn.e290f54f.js";import"./useContentViewHeight.abce7e43.js";import"./index.439c9cc6.js";import"./transButton.d58a9aee.js";import"./ArrowLeftOutlined.9092f4c2.js";import"./index.aa016e5b.js";import"./UpOutlined.12a1e306.js";import"./index.373f6534.js";import"./index.051734d7.js";import"./isEqual.11901826.js";import"./_baseIsEqual.0de2b5d3.js";import"./uuid.2b29000c.js";import"./index.6e80a0ff.js";import"./uniqBy.50404865.js";import"./_baseIteratee.2ef5ad90.js";import"./get.043b0610.js";import"./findIndex.f47c946a.js";import"./toInteger.c204e16e.js";import"./util.d83e5a37.js";import"./warning.ca82f8e0.js";import"./index.ee10230f.js";import"./DeleteOutlined.0a0522fd.js";import"./index.2e551384.js";import"./FullscreenOutlined.53488658.js";import"./index.5af3f25b.js";import"./useSortable.ff34ba15.js";import"./RedoOutlined.7ded6882.js";import"./CaretDownFilled.16244581.js";import"./scrollTo.27274fd5.js";import"./index.e501c187.js";import"./index.55f8aa37.js";import"./index.6224a568.js";import"./index.bf60d517.js";import"./useFlexGapSupport.46b1d290.js";import"./index.d02ebe9a.js";import"./Tree.f27a6644.js";import"./index.ad66d854.js";import"./download.4b0b9b08.js";import"./base64Conver.08b9f4ec.js";import"./index.9ceea8c9.js";import"./index.bf916240.js";import"./index.bcddb666.js";import"./Tree.vue_vue_type_style_index_0_lang.109ca251.js";import"./useContextMenu.2637600d.js";import"./PlusSquareOutlined.798f0af4.js";const E=R({name:"RoleManagement",components:{BasicTable:f,RoleDrawer:_,TableAction:h},setup(){const[o,{openDrawer:i}]=C(),[p,{reload:s}]=b({title:"\u89D2\u8272\u5217\u8868",api:g,columns:w,formConfig:{labelWidth:120,schemas:D},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function n(t){console.log(t)}function m(){s()}return{registerTable:p,registerDrawer:o,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:m}}});function v(o,i,p,s,l,c){const n=e("a-button"),m=e("TableAction"),t=e("BasicTable"),d=e("RoleDrawer");return B(),S("div",null,[r(t,{onRegister:o.registerTable},{toolbar:a(()=>[r(n,{type:"primary",onClick:o.handleCreate},{default:a(()=>[k(" \u65B0\u589E\u89D2\u8272 ")]),_:1},8,["onClick"])]),action:a(({record:u})=>[r(m,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),r(d,{onRegister:o.registerDrawer,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Lo=T(E,[["render",v]]);export{Lo as default};
