import{B as l}from"./TableImg.3975ff3a.js";import{T as s}from"./BasicForm.33be6605.js";import{u as d}from"./useTable.6d2b5fcf.js";import{d as c}from"./table.603457c9.js";import{au as F,a as h,aw as r,o as b,i as f,p,B}from"./index.a4184510.js";import"./index.f9d35bfd.js";import"./Checkbox.341a0e84.js";import"./index.40118052.js";import"./useForm.e9f1e61e.js";import"./index.7f4f8797.js";import"./index.00036abf.js";import"./index.97a5ac83.js";import"./useBreakpoint.3d7302fa.js";import"./responsiveObserve.74da7233.js";import"./useSize.6d3e9c8f.js";import"./useWindowSizeFn.c1349caf.js";import"./useContentViewHeight.82e6d0cc.js";import"./index.cff0b8af.js";import"./transButton.5ba7ce35.js";import"./ArrowLeftOutlined.62eef3b2.js";import"./index.69d9b4a1.js";import"./UpOutlined.c620fc88.js";import"./index.e572ad54.js";import"./index.42ece229.js";import"./isEqual.297bdb1e.js";import"./_baseIsEqual.022cfbb5.js";import"./uuid.2b29000c.js";import"./index.761088f5.js";import"./uniqBy.634fce4d.js";import"./_baseIteratee.e5042e06.js";import"./get.e620704d.js";import"./findIndex.657e235c.js";import"./toInteger.58eec37d.js";import"./util.89eee439.js";import"./warning.ca82f8e0.js";import"./index.88fce616.js";import"./DeleteOutlined.36a39901.js";import"./index.380f5c41.js";import"./FullscreenOutlined.06198031.js";import"./index.b3c2b46d.js";import"./useSortable.a1985680.js";import"./RedoOutlined.59e0b862.js";import"./CaretDownFilled.075b8f9c.js";import"./scrollTo.9ef220d2.js";import"./index.8d369d29.js";import"./index.1ecd5574.js";import"./index.61947057.js";import"./index.5389ab9f.js";import"./useFlexGapSupport.22cad392.js";import"./index.453418bd.js";import"./Tree.4c3dc6e1.js";import"./index.61ad094d.js";import"./download.8dd6afc4.js";import"./base64Conver.08b9f4ec.js";import"./index.8b1a4278.js";import"./index.b2270280.js";const A=[{title:"\u7F16\u53F7",dataIndex:"no",width:100},{title:"\u59D3\u540D",dataIndex:"name",auth:"test"},{title:"\u72B6\u6001",dataIndex:"status"},{title:"\u5730\u5740",dataIndex:"address",auth:"super",ifShow:t=>!0},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],C=h({components:{BasicTable:l,TableAction:s},setup(){const[t]=d({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:A,bordered:!0,actionColumn:{width:250,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function e(i){console.log("\u70B9\u51FB\u4E86\u7F16\u8F91",i)}function u(i){console.log("\u70B9\u51FB\u4E86\u5220\u9664",i)}function n(i){console.log("\u70B9\u51FB\u4E86\u542F\u7528",i)}return{registerTable:t,handleEdit:e,handleDelete:u,handleOpen:n}}}),T={class:"p-4"};function w(t,e,u,n,i,_){const a=r("TableAction"),m=r("BasicTable");return b(),f("div",T,[p(m,{onRegister:t.registerTable},{action:B(({record:o})=>[p(a,{actions:[{label:"\u7F16\u8F91",onClick:t.handleEdit.bind(null,o),auth:"other"},{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,o),auth:"super"}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:E=>o.status!=="enable"},{label:"\u7981\u7528",popConfirm:{title:"\u662F\u5426\u7981\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:()=>o.status==="enable"},{label:"\u540C\u65F6\u63A7\u5236",popConfirm:{title:"\u662F\u5426\u52A8\u6001\u663E\u793A\uFF1F",confirm:t.handleOpen.bind(null,o)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])])}var It=F(C,[["render",w]]);export{It as default};
