import{B as l}from"./TableImg.75b343b7.js";import{T as s}from"./BasicForm.a4ec12e5.js";import{u as d}from"./useTable.c49d980d.js";import{d as c}from"./table.51c1d816.js";import{au as F,a as h,aw as r,o as b,i as f,p,B}from"./index.ac094c1a.js";import"./index.898d86e5.js";import"./Checkbox.a75103c0.js";import"./index.aa5ff920.js";import"./useForm.ba331bff.js";import"./index.4fc42462.js";import"./index.eeb46555.js";import"./index.87d849bc.js";import"./useBreakpoint.1f3756ad.js";import"./responsiveObserve.215173d9.js";import"./useSize.8e66fcdc.js";import"./useWindowSizeFn.d402f620.js";import"./useContentViewHeight.f40a2028.js";import"./index.631565e4.js";import"./transButton.3b98ebc6.js";import"./ArrowLeftOutlined.2a151e97.js";import"./index.1c127be3.js";import"./UpOutlined.288cc8f8.js";import"./index.b49e189c.js";import"./index.d3605325.js";import"./isEqual.8db4730b.js";import"./_baseIsEqual.0a6c69ba.js";import"./uuid.2b29000c.js";import"./index.39737088.js";import"./uniqBy.6c7f8abc.js";import"./_baseIteratee.ab0bd894.js";import"./get.77a8764f.js";import"./findIndex.ada0a456.js";import"./toInteger.3e4658ba.js";import"./util.92a724ca.js";import"./warning.ca82f8e0.js";import"./index.f7967e6e.js";import"./DeleteOutlined.35136336.js";import"./index.cf77662e.js";import"./FullscreenOutlined.e6b1e7b6.js";import"./index.c837e7c4.js";import"./useSortable.c4e403f1.js";import"./RedoOutlined.fc634378.js";import"./CaretDownFilled.ea5ee032.js";import"./scrollTo.a1dae8cc.js";import"./index.3a7a10e8.js";import"./index.e8396954.js";import"./index.18ac8270.js";import"./index.f8ca73f1.js";import"./useFlexGapSupport.30ffab55.js";import"./index.eceb37c5.js";import"./Tree.35762ca1.js";import"./index.f4f15c4e.js";import"./download.48cbdc0b.js";import"./base64Conver.08b9f4ec.js";import"./index.7a765935.js";import"./index.6dcbf63c.js";const A=[{title:"\u7F16\u53F7",dataIndex:"no",width:100},{title:"\u59D3\u540D",dataIndex:"name",auth:"test"},{title:"\u72B6\u6001",dataIndex:"status"},{title:"\u5730\u5740",dataIndex:"address",auth:"super",ifShow:t=>!0},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],C=h({components:{BasicTable:l,TableAction:s},setup(){const[t]=d({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:A,bordered:!0,actionColumn:{width:250,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function e(i){console.log("\u70B9\u51FB\u4E86\u7F16\u8F91",i)}function u(i){console.log("\u70B9\u51FB\u4E86\u5220\u9664",i)}function n(i){console.log("\u70B9\u51FB\u4E86\u542F\u7528",i)}return{registerTable:t,handleEdit:e,handleDelete:u,handleOpen:n}}}),T={class:"p-4"};function w(t,e,u,n,i,_){const a=r("TableAction"),m=r("BasicTable");return b(),f("div",T,[p(m,{onRegister:t.registerTable},{action:B(({record:o})=>[p(a,{actions:[{label:"\u7F16\u8F91",onClick:t.handleEdit.bind(null,o),auth:"other"},{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,o),auth:"super"}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:E=>o.status!=="enable"},{label:"\u7981\u7528",popConfirm:{title:"\u662F\u5426\u7981\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:()=>o.status==="enable"},{label:"\u540C\u65F6\u63A7\u5236",popConfirm:{title:"\u662F\u5426\u52A8\u6001\u663E\u793A\uFF1F",confirm:t.handleOpen.bind(null,o)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])])}var It=F(C,[["render",w]]);export{It as default};
