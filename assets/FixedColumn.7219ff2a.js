import{B as u}from"./TableImg.46a22623.js";import{i as l}from"./BasicForm.4ec4a520.js";import{u as s}from"./useTable.32fc52a8.js";import{d}from"./table.6b4f3f41.js";import{au as c,a as F,aw as n,o as f,i as b,p,B}from"./index.382fc83e.js";import"./index.0b211a8b.js";import"./Checkbox.d7b0098f.js";import"./index.0b4a170c.js";import"./useForm.43a8256f.js";import"./index.72a98002.js";import"./index.e6ceb7ae.js";import"./index.da069d2c.js";import"./useBreakpoint.74963e9e.js";import"./responsiveObserve.ea75b784.js";import"./useSize.4c41a328.js";import"./useWindowSizeFn.435c6f18.js";import"./useContentViewHeight.7dcda93a.js";import"./index.f4d88da9.js";import"./ArrowLeftOutlined.adfd60c1.js";import"./index.3f97a02a.js";import"./UpOutlined.97c9d97c.js";import"./index.ff31cd23.js";import"./index.4828a7ce.js";import"./isEqual.a078e6bd.js";import"./_baseIsEqual.cdc22aaf.js";import"./uuid.2b29000c.js";import"./index.e1d199ff.js";import"./uniqBy.093644f1.js";import"./_baseIteratee.54e5789e.js";import"./get.e5e78019.js";import"./findIndex.2c6a2366.js";import"./toInteger.aa53cd67.js";import"./util.f28e2161.js";import"./warning.ca82f8e0.js";import"./index.3199418a.js";import"./DeleteOutlined.65f410d2.js";import"./index.41c42497.js";import"./FullscreenOutlined.b8bf3642.js";import"./index.d14f017e.js";import"./useSortable.7edae39b.js";import"./RedoOutlined.db466b1c.js";import"./CaretDownFilled.1876b8d6.js";import"./scrollTo.a4bf3623.js";import"./index.d5ce8522.js";import"./index.05e1b6ac.js";import"./index.cb317af3.js";import"./index.3fc2d770.js";import"./useFlexGapSupport.6c12f438.js";import"./index.c4f44adf.js";import"./Tree.8453a007.js";import"./index.ea1996b2.js";import"./download.5d149050.js";import"./base64Conver.08b9f4ec.js";import"./index.4bfc3713.js";import"./index.edafa899.js";const h=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"\u59D3\u540D",dataIndex:"name",width:260},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],A=F({components:{BasicTable:u,TableAction:l},setup(){const[t]=s({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:d,columns:h,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function i(o){console.log("\u70B9\u51FB\u4E86\u5220\u9664",o)}function e(o){console.log("\u70B9\u51FB\u4E86\u542F\u7528",o)}return{registerTable:t,handleDelete:i,handleOpen:e}}}),T={class:"p-4"};function _(t,i,e,o,w,x){const m=n("TableAction"),a=n("BasicTable");return f(),b("div",T,[p(a,{onRegister:t.registerTable},{action:B(({record:r})=>[p(m,{actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,r)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,r)}}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])])}var Dt=c(A,[["render",_]]);export{Dt as default};
