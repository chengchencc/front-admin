import{B as f}from"./TableImg.f8f464f6.js";import{T as h}from"./BasicForm.8adc6160.js";import{u as b}from"./useTable.3a9b64ed.js";import{a as g}from"./system.11393505.js";import{u as C}from"./index.606fd3a9.js";import{D as _,c as T,s as B}from"./DeptModal.f9643280.js";import{au as D,a as E,aw as e,o as M,i as S,p as i,B as p,C as R}from"./index.47c27fa3.js";import"./index.9c8b9277.js";import"./Checkbox.219512c3.js";import"./index.a96ef7b3.js";import"./useForm.bcc724a8.js";import"./index.47205108.js";import"./index.1633ee86.js";import"./index.1c791828.js";import"./useBreakpoint.d5131304.js";import"./responsiveObserve.82bd8af1.js";import"./useSize.1a235d89.js";import"./useWindowSizeFn.ba3fdbd9.js";import"./useContentViewHeight.e747bcb3.js";import"./index.20b3f9c9.js";import"./transButton.7bf1790b.js";import"./ArrowLeftOutlined.a0bf86a2.js";import"./index.03bd4258.js";import"./UpOutlined.ecf31566.js";import"./index.b595ff2d.js";import"./index.97c978d6.js";import"./isEqual.4dbc08e5.js";import"./_baseIsEqual.651d1c09.js";import"./uuid.2b29000c.js";import"./index.057d6705.js";import"./uniqBy.00178e4f.js";import"./_baseIteratee.c3bb2e53.js";import"./get.ec27449e.js";import"./findIndex.0ae9d528.js";import"./toInteger.50699d26.js";import"./util.6c5479ad.js";import"./warning.ca82f8e0.js";import"./index.42be32d5.js";import"./DeleteOutlined.bea6872a.js";import"./index.7f26bd4c.js";import"./useSortable.e2ab9d6a.js";import"./RedoOutlined.4f553d73.js";import"./FullscreenOutlined.7b4a2790.js";import"./CaretDownFilled.32c8e3c1.js";import"./scrollTo.6da6b0c0.js";import"./index.0c916bfb.js";import"./index.a5d2cec4.js";import"./index.db035426.js";import"./index.43ecb289.js";import"./useFlexGapSupport.10110a3a.js";import"./index.60c3c61a.js";import"./Tree.63d3056b.js";import"./index.d1ee7f75.js";import"./download.c04f444b.js";import"./base64Conver.08b9f4ec.js";import"./index.d1814024.js";import"./index.ad473bbd.js";const k=E({name:"DeptManagement",components:{BasicTable:f,DeptModal:_,TableAction:h},setup(){const[o,{openModal:r}]=C(),[m,{reload:s}]=b({title:"\u90E8\u95E8\u5217\u8868",api:g,columns:T,formConfig:{labelWidth:120,schemas:B},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function n(t){console.log(t)}function a(){s()}return{registerTable:m,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:a}}});function w(o,r,m,s,l,c){const n=e("a-button"),a=e("TableAction"),t=e("BasicTable"),d=e("DeptModal");return M(),S("div",null,[i(t,{onRegister:o.registerTable},{toolbar:p(()=>[i(n,{type:"primary",onClick:o.handleCreate},{default:p(()=>[R(" \u65B0\u589E\u90E8\u95E8 ")]),_:1},8,["onClick"])]),action:p(({record:u})=>[i(a,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),i(d,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var xo=D(k,[["render",w]]);export{xo as default};
