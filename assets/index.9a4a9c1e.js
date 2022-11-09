import{B as f}from"./TableImg.e1a597ea.js";import{i as b}from"./BasicForm.2aa30c4a.js";import{u as h}from"./useTable.68324abd.js";import{a as g}from"./system.ed65256e.js";import{b as C}from"./index.9a63394d.js";import{D as _,c as T,s as B}from"./DeptModal.ba103ba3.js";import{au as D,a as E,aw as e,o as M,i as S,p as i,B as p,C as R}from"./index.da4313ed.js";import"./index.06ee136a.js";import"./Checkbox.6a81adb3.js";import"./index.e014ecd5.js";import"./useForm.c10ea13b.js";import"./index.c7387940.js";import"./index.bb490040.js";import"./index.95fd586b.js";import"./useBreakpoint.57cbd8f9.js";import"./responsiveObserve.72a48b47.js";import"./useSize.d957ad9d.js";import"./useWindowSizeFn.eb5b2cc5.js";import"./useContentViewHeight.f1980a07.js";import"./index.6ae9f6a4.js";import"./ArrowLeftOutlined.58c817d8.js";import"./index.e5dd25bf.js";import"./UpOutlined.7122e7b5.js";import"./index.a6dc2ca3.js";import"./index.34185b62.js";import"./isEqual.13863e21.js";import"./_baseIsEqual.c5abd7f9.js";import"./uuid.2b29000c.js";import"./index.20906073.js";import"./uniqBy.21b015da.js";import"./_baseIteratee.c2a94fbf.js";import"./get.e2b72cba.js";import"./findIndex.77ae307c.js";import"./toInteger.92ea4f7e.js";import"./util.8ccb2a01.js";import"./warning.ca82f8e0.js";import"./index.cd0eb5c4.js";import"./DeleteOutlined.0282521a.js";import"./index.aeb8c0e3.js";import"./useSortable.5af56706.js";import"./RedoOutlined.2b242497.js";import"./FullscreenOutlined.2307bbef.js";import"./CaretDownFilled.eaa9a8bc.js";import"./scrollTo.79118071.js";import"./index.dc7d82a6.js";import"./index.d75aa541.js";import"./index.caf27347.js";import"./index.ebcfc250.js";import"./useFlexGapSupport.81b3a88e.js";import"./index.e753562d.js";import"./Tree.8435820f.js";import"./index.8424fa42.js";import"./download.c05e4497.js";import"./base64Conver.08b9f4ec.js";import"./index.86f02a74.js";import"./index.83f5641e.js";const k=E({name:"DeptManagement",components:{BasicTable:f,DeptModal:_,TableAction:b},setup(){const[o,{openModal:r}]=C(),[m,{reload:s}]=h({title:"\u90E8\u95E8\u5217\u8868",api:g,columns:T,formConfig:{labelWidth:120,schemas:B},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function n(t){console.log(t)}function a(){s()}return{registerTable:m,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:a}}});function w(o,r,m,s,l,c){const n=e("a-button"),a=e("TableAction"),t=e("BasicTable"),d=e("DeptModal");return M(),S("div",null,[i(t,{onRegister:o.registerTable},{toolbar:p(()=>[i(n,{type:"primary",onClick:o.handleCreate},{default:p(()=>[R(" \u65B0\u589E\u90E8\u95E8 ")]),_:1},8,["onClick"])]),action:p(({record:u})=>[i(a,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),i(d,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var $o=D(k,[["render",w]]);export{$o as default};
