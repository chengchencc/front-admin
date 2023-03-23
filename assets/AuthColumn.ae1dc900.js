import{B as l}from"./TableImg.831ea4f5.js";import{T as s}from"./BasicForm.98ef7450.js";import{u as d}from"./useTable.a75fc128.js";import{d as c}from"./table.da527ea8.js";import{au as F,a as h,aw as r,o as b,i as f,p,B}from"./index.91c78518.js";import"./index.88f1e948.js";import"./Checkbox.9cabff11.js";import"./index.4492b02f.js";import"./useForm.2169bbec.js";import"./index.1e46fc07.js";import"./index.e9b45e79.js";import"./index.e3a1f424.js";import"./useBreakpoint.ebc6768a.js";import"./responsiveObserve.65e938a4.js";import"./useSize.495b1475.js";import"./useWindowSizeFn.2731919f.js";import"./useContentViewHeight.e0cb1840.js";import"./index.119cad3f.js";import"./transButton.6677a85d.js";import"./ArrowLeftOutlined.9a154523.js";import"./index.4240517a.js";import"./UpOutlined.e4286575.js";import"./index.88fb2e9b.js";import"./index.7de12fa0.js";import"./isEqual.6a61b02c.js";import"./_baseIsEqual.816e480b.js";import"./uuid.2b29000c.js";import"./index.5a21fcd9.js";import"./uniqBy.c07792ae.js";import"./_baseIteratee.c981f53f.js";import"./get.2c776a61.js";import"./findIndex.0570347c.js";import"./toInteger.078e120d.js";import"./util.3aa28320.js";import"./warning.ca82f8e0.js";import"./index.bd985330.js";import"./DeleteOutlined.b9c6996f.js";import"./index.9784102a.js";import"./FullscreenOutlined.afbc26d0.js";import"./index.989cc525.js";import"./useSortable.67718d45.js";import"./RedoOutlined.55ab8ef7.js";import"./CaretDownFilled.0ff9844c.js";import"./scrollTo.fec0171b.js";import"./index.d7154bf4.js";import"./index.0172d1a0.js";import"./index.41e94487.js";import"./index.f1d72b26.js";import"./useFlexGapSupport.33a77d25.js";import"./index.495ffb40.js";import"./Tree.155e87a6.js";import"./index.7cd6cb50.js";import"./download.ae181d08.js";import"./base64Conver.08b9f4ec.js";import"./index.2eaf87ac.js";import"./index.38e5c16b.js";const A=[{title:"\u7F16\u53F7",dataIndex:"no",width:100},{title:"\u59D3\u540D",dataIndex:"name",auth:"test"},{title:"\u72B6\u6001",dataIndex:"status"},{title:"\u5730\u5740",dataIndex:"address",auth:"super",ifShow:t=>!0},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],C=h({components:{BasicTable:l,TableAction:s},setup(){const[t]=d({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:A,bordered:!0,actionColumn:{width:250,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function e(i){console.log("\u70B9\u51FB\u4E86\u7F16\u8F91",i)}function u(i){console.log("\u70B9\u51FB\u4E86\u5220\u9664",i)}function n(i){console.log("\u70B9\u51FB\u4E86\u542F\u7528",i)}return{registerTable:t,handleEdit:e,handleDelete:u,handleOpen:n}}}),T={class:"p-4"};function w(t,e,u,n,i,_){const a=r("TableAction"),m=r("BasicTable");return b(),f("div",T,[p(m,{onRegister:t.registerTable},{action:B(({record:o})=>[p(a,{actions:[{label:"\u7F16\u8F91",onClick:t.handleEdit.bind(null,o),auth:"other"},{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,o),auth:"super"}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:E=>o.status!=="enable"},{label:"\u7981\u7528",popConfirm:{title:"\u662F\u5426\u7981\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:()=>o.status==="enable"},{label:"\u540C\u65F6\u63A7\u5236",popConfirm:{title:"\u662F\u5426\u52A8\u6001\u663E\u793A\uFF1F",confirm:t.handleOpen.bind(null,o)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])])}var It=F(C,[["render",w]]);export{It as default};
