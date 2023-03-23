import{B as f}from"./TableImg.53df1dc5.js";import{T as h}from"./BasicForm.21229692.js";import{u as b}from"./useTable.6326bf5c.js";import{a as g}from"./system.34f50d4d.js";import{u as C}from"./index.4279af1e.js";import{D as _,c as T,s as B}from"./DeptModal.2c5598ea.js";import{au as D,a as E,aw as e,o as M,i as S,p as i,B as p,C as R}from"./index.c91dbcec.js";import"./index.324e0bcd.js";import"./Checkbox.7535713c.js";import"./index.b29d788f.js";import"./useForm.eea043dd.js";import"./index.2ab7bca8.js";import"./index.af8b2f58.js";import"./index.162e232c.js";import"./useBreakpoint.5dabd1ad.js";import"./responsiveObserve.1e13a42e.js";import"./useSize.a91c39e3.js";import"./useWindowSizeFn.376791fd.js";import"./useContentViewHeight.2a6efe35.js";import"./index.78b421cb.js";import"./transButton.0623b7ab.js";import"./ArrowLeftOutlined.28ca7458.js";import"./index.4f81e2b6.js";import"./UpOutlined.92785f4e.js";import"./index.e6c27f98.js";import"./index.9d1d2221.js";import"./isEqual.42a6bd5c.js";import"./_baseIsEqual.fcde5103.js";import"./uuid.2b29000c.js";import"./index.254c34ba.js";import"./uniqBy.150970a6.js";import"./_baseIteratee.8cb7c9ed.js";import"./get.bbb96c60.js";import"./findIndex.777e7d04.js";import"./toInteger.2d455e8f.js";import"./util.56f66dda.js";import"./warning.ca82f8e0.js";import"./index.0be175c3.js";import"./DeleteOutlined.81d21cfc.js";import"./index.b4d9efcc.js";import"./useSortable.d151bc8b.js";import"./RedoOutlined.d361df85.js";import"./FullscreenOutlined.38c1b585.js";import"./CaretDownFilled.73c524a0.js";import"./scrollTo.e3ce627a.js";import"./index.15908e68.js";import"./index.d8f116fb.js";import"./index.51d90944.js";import"./index.5d896dbf.js";import"./useFlexGapSupport.5a90694b.js";import"./index.c1b1c8e6.js";import"./Tree.852136df.js";import"./index.9001e380.js";import"./download.47122d16.js";import"./base64Conver.08b9f4ec.js";import"./index.e652fa4b.js";import"./index.028eafae.js";const k=E({name:"DeptManagement",components:{BasicTable:f,DeptModal:_,TableAction:h},setup(){const[o,{openModal:r}]=C(),[m,{reload:s}]=b({title:"\u90E8\u95E8\u5217\u8868",api:g,columns:T,formConfig:{labelWidth:120,schemas:B},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function n(t){console.log(t)}function a(){s()}return{registerTable:m,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:a}}});function w(o,r,m,s,l,c){const n=e("a-button"),a=e("TableAction"),t=e("BasicTable"),d=e("DeptModal");return M(),S("div",null,[i(t,{onRegister:o.registerTable},{toolbar:p(()=>[i(n,{type:"primary",onClick:o.handleCreate},{default:p(()=>[R(" \u65B0\u589E\u90E8\u95E8 ")]),_:1},8,["onClick"])]),action:p(({record:u})=>[i(a,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),i(d,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var xo=D(k,[["render",w]]);export{xo as default};
