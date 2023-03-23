import{B as f}from"./TableImg.831ea4f5.js";import{T as h}from"./BasicForm.98ef7450.js";import{u as b}from"./useTable.a75fc128.js";import{a as g}from"./system.23c3930d.js";import{u as C}from"./index.9784102a.js";import{D as _,c as T,s as B}from"./DeptModal.71e33853.js";import{au as D,a as E,aw as e,o as M,i as S,p as i,B as p,C as R}from"./index.91c78518.js";import"./index.88f1e948.js";import"./Checkbox.9cabff11.js";import"./index.4492b02f.js";import"./useForm.2169bbec.js";import"./index.1e46fc07.js";import"./index.e9b45e79.js";import"./index.e3a1f424.js";import"./useBreakpoint.ebc6768a.js";import"./responsiveObserve.65e938a4.js";import"./useSize.495b1475.js";import"./useWindowSizeFn.2731919f.js";import"./useContentViewHeight.e0cb1840.js";import"./index.119cad3f.js";import"./transButton.6677a85d.js";import"./ArrowLeftOutlined.9a154523.js";import"./index.4240517a.js";import"./UpOutlined.e4286575.js";import"./index.88fb2e9b.js";import"./index.7de12fa0.js";import"./isEqual.6a61b02c.js";import"./_baseIsEqual.816e480b.js";import"./uuid.2b29000c.js";import"./index.5a21fcd9.js";import"./uniqBy.c07792ae.js";import"./_baseIteratee.c981f53f.js";import"./get.2c776a61.js";import"./findIndex.0570347c.js";import"./toInteger.078e120d.js";import"./util.3aa28320.js";import"./warning.ca82f8e0.js";import"./index.bd985330.js";import"./DeleteOutlined.b9c6996f.js";import"./index.989cc525.js";import"./useSortable.67718d45.js";import"./RedoOutlined.55ab8ef7.js";import"./FullscreenOutlined.afbc26d0.js";import"./CaretDownFilled.0ff9844c.js";import"./scrollTo.fec0171b.js";import"./index.d7154bf4.js";import"./index.0172d1a0.js";import"./index.41e94487.js";import"./index.f1d72b26.js";import"./useFlexGapSupport.33a77d25.js";import"./index.495ffb40.js";import"./Tree.155e87a6.js";import"./index.7cd6cb50.js";import"./download.ae181d08.js";import"./base64Conver.08b9f4ec.js";import"./index.2eaf87ac.js";import"./index.38e5c16b.js";const k=E({name:"DeptManagement",components:{BasicTable:f,DeptModal:_,TableAction:h},setup(){const[o,{openModal:r}]=C(),[m,{reload:s}]=b({title:"\u90E8\u95E8\u5217\u8868",api:g,columns:T,formConfig:{labelWidth:120,schemas:B},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function n(t){console.log(t)}function a(){s()}return{registerTable:m,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:a}}});function w(o,r,m,s,l,c){const n=e("a-button"),a=e("TableAction"),t=e("BasicTable"),d=e("DeptModal");return M(),S("div",null,[i(t,{onRegister:o.registerTable},{toolbar:p(()=>[i(n,{type:"primary",onClick:o.handleCreate},{default:p(()=>[R(" \u65B0\u589E\u90E8\u95E8 ")]),_:1},8,["onClick"])]),action:p(({record:u})=>[i(a,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),i(d,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var xo=D(k,[["render",w]]);export{xo as default};