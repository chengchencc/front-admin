import{B as u}from"./TableImg.f8fa414a.js";import{T as l}from"./BasicForm.f668fd01.js";import{u as s}from"./useTable.cd369e3c.js";import{d}from"./table.e155e7c3.js";import{au as c,a as F,aw as n,o as f,i as b,p,B}from"./index.3df4c6d5.js";import"./index.0e8be3c2.js";import"./Checkbox.57aa7240.js";import"./index.f3a9decb.js";import"./useForm.c7ecccd7.js";import"./index.0d0e5cf9.js";import"./index.cae7f521.js";import"./index.71fa93e3.js";import"./useBreakpoint.09615d2f.js";import"./responsiveObserve.b37a2a23.js";import"./useSize.803d2cab.js";import"./useWindowSizeFn.3ebe2a1d.js";import"./useContentViewHeight.07864056.js";import"./index.53e7084d.js";import"./transButton.06de8821.js";import"./ArrowLeftOutlined.48f8466d.js";import"./index.93d769ba.js";import"./UpOutlined.f0075db7.js";import"./index.364b86cb.js";import"./index.c39058cd.js";import"./isEqual.f415c100.js";import"./_baseIsEqual.f131e593.js";import"./uuid.2b29000c.js";import"./index.56436c07.js";import"./uniqBy.01e8947b.js";import"./_baseIteratee.f711d970.js";import"./get.856a19e0.js";import"./findIndex.b57f26a5.js";import"./toInteger.3fd123a6.js";import"./util.77194c1c.js";import"./warning.ca82f8e0.js";import"./index.4c0f5e2a.js";import"./DeleteOutlined.f07f76cc.js";import"./index.fde18210.js";import"./FullscreenOutlined.d446ad78.js";import"./index.a987c533.js";import"./useSortable.6b2b21c7.js";import"./RedoOutlined.8aecc604.js";import"./CaretDownFilled.4494f75d.js";import"./scrollTo.6d1293ab.js";import"./index.9c23565c.js";import"./index.1b1bf51f.js";import"./index.139bd604.js";import"./index.fe17dd2d.js";import"./useFlexGapSupport.07dfe529.js";import"./index.0a64092d.js";import"./Tree.d9a9ebe8.js";import"./index.0cb3d63a.js";import"./download.35ab208d.js";import"./base64Conver.08b9f4ec.js";import"./index.37f634df.js";import"./index.1a2847b9.js";const h=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"\u59D3\u540D",dataIndex:"name",width:260},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],T=F({components:{BasicTable:u,TableAction:l},setup(){const[t]=s({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:d,columns:h,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function i(o){console.log("\u70B9\u51FB\u4E86\u5220\u9664",o)}function e(o){console.log("\u70B9\u51FB\u4E86\u542F\u7528",o)}return{registerTable:t,handleDelete:i,handleOpen:e}}}),A={class:"p-4"};function _(t,i,e,o,w,x){const m=n("TableAction"),a=n("BasicTable");return f(),b("div",A,[p(a,{onRegister:t.registerTable},{action:B(({record:r})=>[p(m,{actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,r)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,r)}}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])])}var It=c(T,[["render",_]]);export{It as default};
