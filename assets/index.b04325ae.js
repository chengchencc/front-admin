import{B as _}from"./TableImg.3906216b.js";import{i as T}from"./BasicForm.d765cc9c.js";import{u as S}from"./useTable.f02b5d26.js";import{g as B}from"./system.6c36fbcc.js";import{P as F}from"./index.f1bbd8b9.js";import w from"./DeptTree.820aebde.js";import{b as D}from"./index.afe49db0.js";import{A,c as I,s as M}from"./AccountModal.047a6947.js";import{au as k,a as E,b6 as y,x as R,aw as e,o as P,k as V,B as i,p as r,C as W}from"./index.0afb6b1a.js";import"./index.0c92bc5e.js";import"./Checkbox.b94383d9.js";import"./index.f188e1cd.js";import"./useForm.d0f78599.js";import"./index.a38530f5.js";import"./UpOutlined.53f4e913.js";import"./index.a86fe11c.js";import"./index.f3dc3acc.js";import"./isEqual.c3167c03.js";import"./_baseIsEqual.b9ab726e.js";import"./uuid.2b29000c.js";import"./index.3608aaa4.js";import"./uniqBy.1231b8aa.js";import"./_baseIteratee.ccaeac66.js";import"./get.cbf01dd9.js";import"./findIndex.bebb7dcc.js";import"./toInteger.385c5e34.js";import"./util.5b402eb8.js";import"./warning.ca82f8e0.js";import"./index.b920e176.js";import"./DeleteOutlined.7747d063.js";import"./useWindowSizeFn.b437c5f3.js";import"./index.b5e58356.js";import"./useSortable.04beedbd.js";import"./RedoOutlined.8a38e0cf.js";import"./FullscreenOutlined.f42c8b10.js";import"./CaretDownFilled.6c2b69f4.js";import"./scrollTo.b6090ae3.js";import"./index.9ecfb69b.js";import"./index.1916b734.js";import"./index.f9b7668c.js";import"./index.335339a9.js";import"./responsiveObserve.8bc71b85.js";import"./useFlexGapSupport.358e75d5.js";import"./useSize.b98aa611.js";import"./index.752237d9.js";import"./Tree.c194a51d.js";import"./index.35e066f0.js";import"./download.8e655723.js";import"./base64Conver.08b9f4ec.js";import"./index.487b659d.js";import"./index.3fdd4c89.js";import"./index.0fb2ca65.js";import"./index.ab4596d9.js";import"./useBreakpoint.f66a95b4.js";import"./useContentViewHeight.6667aea5.js";import"./index.97f64344.js";import"./ArrowLeftOutlined.8571d53f.js";import"./Tree.vue_vue_type_style_index_0_lang.ae3b8bd0.js";import"./useContextMenu.849c19a1.js";const $=E({name:"AccountManagement",components:{BasicTable:_,PageWrapper:F,DeptTree:w,AccountModal:A,TableAction:T},setup(){const t=y(),[h,{openModal:a}]=D(),l=R({}),[g,{reload:p,updateTableDataRecord:s}]=S({title:"\u8D26\u53F7\u5217\u8868",api:B,rowKey:"id",columns:I,formConfig:{labelWidth:120,schemas:M,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(o){return console.log("handleSearchInfoFn",o),o},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function c(){a(!0,{isUpdate:!1})}function m(o){console.log(o),a(!0,{record:o,isUpdate:!0})}function u(o){console.log(o)}function d({isUpdate:o,values:b}){if(o){const C=s(b.id,b);console.log(C)}else p()}function f(o=""){l.deptId=o,p()}function n(o){t("/system/account_detail/"+o.id)}return{registerTable:g,registerModal:h,handleCreate:c,handleEdit:m,handleDelete:u,handleSuccess:d,handleSelect:f,handleView:n,searchInfo:l}}});function x(t,h,a,l,g,p){const s=e("DeptTree"),c=e("a-button"),m=e("TableAction"),u=e("BasicTable"),d=e("AccountModal"),f=e("PageWrapper");return P(),V(f,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:i(()=>[r(s,{class:"w-1/4 xl:w-1/5",onSelect:t.handleSelect},null,8,["onSelect"]),r(u,{onRegister:t.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:t.searchInfo},{toolbar:i(()=>[r(c,{type:"primary",onClick:t.handleCreate},{default:i(()=>[W("\u65B0\u589E\u8D26\u53F7")]),_:1},8,["onClick"])]),action:i(({record:n})=>[r(m,{actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:t.handleView.bind(null,n)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:t.handleEdit.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:t.handleDelete.bind(null,n)}}]},null,8,["actions"])]),_:1},8,["onRegister","searchInfo"]),r(d,{onRegister:t.registerModal,onSuccess:t.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Lo=k($,[["render",x]]);export{Lo as default};
