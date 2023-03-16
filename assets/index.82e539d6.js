var b=(t,u,i)=>new Promise((a,s)=>{var p=e=>{try{n(i.next(e))}catch(r){s(r)}},l=e=>{try{n(i.throw(e))}catch(r){s(r)}},n=e=>e.done?a(e.value):Promise.resolve(e.value).then(p,l);n((i=i.apply(t,u)).next())});import{B}from"./TableImg.8ea7a7be.js";import{T as S}from"./BasicForm.6a80a3ef.js";import{u as E}from"./useTable.d0292164.js";import{P as F}from"./index.86f2dbf6.js";import{u as w}from"./index.2fdf992b.js";import{E as y,l as I,a as C,c as M,s as k}from"./edit-modal.322c3c4c.js";import{au as R,a as D,b5 as A,x as P,aw as c,o as V,k as W,B as d,p as f,C as $}from"./index.4804300a.js";import"./index.aafc8171.js";import"./Checkbox.ed9ba07d.js";import"./index.b072982e.js";import"./useForm.9f5f06ba.js";import"./index.4b18e1d8.js";import"./UpOutlined.7d204e9d.js";import"./index.f77551c2.js";import"./index.8d4032f7.js";import"./isEqual.d085b836.js";import"./_baseIsEqual.b58e8f82.js";import"./uuid.2b29000c.js";import"./index.ea8a2f75.js";import"./uniqBy.a37949c3.js";import"./_baseIteratee.fd601a92.js";import"./get.0b3d73ff.js";import"./findIndex.64769271.js";import"./toInteger.cb8f48a7.js";import"./util.911c028f.js";import"./warning.ca82f8e0.js";import"./index.bf15c0c1.js";import"./DeleteOutlined.8ae61e5f.js";import"./useWindowSizeFn.38c7676c.js";import"./index.b31cd219.js";import"./useSortable.3f99009a.js";import"./RedoOutlined.f42eea3d.js";import"./FullscreenOutlined.6182337b.js";import"./CaretDownFilled.b2855526.js";import"./scrollTo.0eb69a3c.js";import"./transButton.342edbea.js";import"./index.5b9902c5.js";import"./index.419d1edd.js";import"./index.0c62ab03.js";import"./index.716c17fa.js";import"./responsiveObserve.dcad6fcd.js";import"./useFlexGapSupport.80df3ddb.js";import"./useSize.ea1bf5d1.js";import"./index.9c7c8f45.js";import"./Tree.d17c098e.js";import"./index.7e49ec2b.js";import"./download.9c0a35ab.js";import"./base64Conver.08b9f4ec.js";import"./index.b8e933b2.js";import"./index.259bc711.js";import"./index.699aa748.js";import"./index.1f68cb78.js";import"./useBreakpoint.3a1e9c1a.js";import"./useContentViewHeight.8fc9ee42.js";import"./index.583dbbd3.js";import"./ArrowLeftOutlined.0255904f.js";const N=D({name:"DictionaryManagement",components:{BasicTable:B,PageWrapper:F,EditModal:y,TableAction:S},setup(){const t=A(),[u,{openModal:i}]=w(),a=P({}),[s,{reload:p,updateTableDataRecord:l}]=E({title:I,api:C.page,rowKey:"id",columns:M,formConfig:{labelWidth:120,schemas:k,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(o){return console.log("handleSearchInfoFn",o),o},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function n(){i(!0,{isUpdate:!1})}function e(o){console.log(o),i(!0,{record:o,isUpdate:!0})}function r(o){return b(this,null,function*(){console.log(o),yield C.del(o.id)})}function h({isUpdate:o,values:g}){if(o){const T=l(g.id,g);console.log(T)}else p()}function m(o=""){a.deptId=o,p()}function _(o){t("/system/account_detail/"+o.id)}return{registerTable:s,registerModal:u,handleCreate:n,handleEdit:e,handleDelete:r,handleSuccess:h,handleSelect:m,handleView:_,searchInfo:a}}});function v(t,u,i,a,s,p){const l=c("a-button"),n=c("TableAction"),e=c("BasicTable"),r=c("EditModal"),h=c("PageWrapper");return V(),W(h,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:d(()=>[f(e,{onRegister:t.registerTable,class:"",searchInfo:t.searchInfo},{toolbar:d(()=>[f(l,{type:"primary",onClick:t.handleCreate},{default:d(()=>[$("\u65B0\u589E\u5206\u7C7B")]),_:1},8,["onClick"])]),action:d(({record:m})=>[f(n,{actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B",onClick:t.handleView.bind(null,m)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91",onClick:t.handleEdit.bind(null,m)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:t.handleDelete.bind(null,m)}}]},null,8,["actions"])]),_:1},8,["onRegister","searchInfo"]),f(r,{onRegister:t.registerModal,onSuccess:t.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Ko=R(N,[["render",v]]);export{Ko as default};
