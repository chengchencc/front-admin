import{B as l}from"./TableImg.75b343b7.js";import{T as c}from"./BasicForm.a4ec12e5.js";import{u as F}from"./useTable.c49d980d.js";import{P as d}from"./index.4fc42462.js";import{getBasicColumns as B}from"./tableData.6b686000.js";import{d as E}from"./table.51c1d816.js";import{au as C,a as f,aw as e,o as b,k as g,B as r,p as n,n as T,t as _}from"./index.ac094c1a.js";import"./index.898d86e5.js";import"./Checkbox.a75103c0.js";import"./index.aa5ff920.js";import"./useForm.ba331bff.js";import"./index.1c127be3.js";import"./UpOutlined.288cc8f8.js";import"./index.b49e189c.js";import"./index.d3605325.js";import"./isEqual.8db4730b.js";import"./_baseIsEqual.0a6c69ba.js";import"./uuid.2b29000c.js";import"./index.39737088.js";import"./uniqBy.6c7f8abc.js";import"./_baseIteratee.ab0bd894.js";import"./get.77a8764f.js";import"./findIndex.ada0a456.js";import"./toInteger.3e4658ba.js";import"./util.92a724ca.js";import"./warning.ca82f8e0.js";import"./index.f7967e6e.js";import"./DeleteOutlined.35136336.js";import"./useWindowSizeFn.d402f620.js";import"./index.cf77662e.js";import"./FullscreenOutlined.e6b1e7b6.js";import"./index.c837e7c4.js";import"./useSortable.c4e403f1.js";import"./RedoOutlined.fc634378.js";import"./CaretDownFilled.ea5ee032.js";import"./scrollTo.a1dae8cc.js";import"./transButton.3b98ebc6.js";import"./index.3a7a10e8.js";import"./index.e8396954.js";import"./index.18ac8270.js";import"./index.f8ca73f1.js";import"./responsiveObserve.215173d9.js";import"./useFlexGapSupport.30ffab55.js";import"./useSize.8e66fcdc.js";import"./index.eceb37c5.js";import"./Tree.35762ca1.js";import"./index.f4f15c4e.js";import"./download.48cbdc0b.js";import"./base64Conver.08b9f4ec.js";import"./index.7a765935.js";import"./index.6dcbf63c.js";import"./index.eeb46555.js";import"./index.87d849bc.js";import"./useBreakpoint.1f3756ad.js";import"./useContentViewHeight.f40a2028.js";import"./index.631565e4.js";import"./ArrowLeftOutlined.2a151e97.js";const D=f({components:{BasicTable:l,TableAction:c,PageWrapper:d},setup(){const[o]=F({api:E,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",titleHelpMessage:["\u5DF2\u542F\u7528expandRowByClick","\u5DF2\u542F\u7528stopButtonPropagation"],columns:B(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",slots:{customRender:"action"}}});function p(t){console.log("\u70B9\u51FB\u4E86\u5220\u9664",t)}function u(t){console.log("\u70B9\u51FB\u4E86\u542F\u7528",t)}return{registerTable:o,handleDelete:p,handleOpen:u}}});function w(o,p,u,t,A,R){const a=e("TableAction"),m=e("BasicTable"),s=e("PageWrapper");return b(),g(s,{title:"\u53EF\u5C55\u5F00\u8868\u683C",content:"\u4E0D\u53EF\u4E0Escroll\u5171\u7528\u3002TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"},{default:r(()=>[n(m,{onRegister:o.registerTable},{expandedRowRender:r(({record:i})=>[T("span",null,"No: "+_(i.no),1)]),action:r(({record:i})=>[n(a,{stopButtonPropagation:"",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,i)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:o.handleOpen.bind(null,i)}}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])]),_:1})}var yo=C(D,[["render",w]]);export{yo as default};
