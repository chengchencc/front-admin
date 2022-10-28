import{B as l}from"./TableImg.48a48f29.js";import{i as c}from"./BasicForm.bfc748d5.js";import{u as F}from"./useTable.a08c963a.js";import{P as d}from"./index.bcb5cbac.js";import{getBasicColumns as B}from"./tableData.6b686000.js";import{d as E}from"./table.1301cd09.js";import{au as C,a as f,aw as e,o as b,k as g,B as r,p as n,n as _,t as T}from"./index.47e23b6d.js";import"./index.c65c4b9b.js";import"./Checkbox.7fecedb7.js";import"./index.ddba01e4.js";import"./useForm.e5ebb155.js";import"./index.b877419d.js";import"./UpOutlined.22b3801f.js";import"./index.b6cfac0f.js";import"./index.2025d1f0.js";import"./isEqual.266c78e9.js";import"./_baseIsEqual.2c011939.js";import"./uuid.2b29000c.js";import"./index.ceca6f94.js";import"./uniqBy.65385b37.js";import"./_baseIteratee.d1ed8bfb.js";import"./get.659c0466.js";import"./findIndex.2796655d.js";import"./toInteger.5c58eeae.js";import"./util.d91a6884.js";import"./warning.ca82f8e0.js";import"./index.dd40f929.js";import"./DeleteOutlined.00404b2f.js";import"./useWindowSizeFn.334d9012.js";import"./index.ba498438.js";import"./FullscreenOutlined.226be3a0.js";import"./index.b2f9b607.js";import"./useSortable.50f2c115.js";import"./RedoOutlined.8d00bf2a.js";import"./CaretDownFilled.d20d9f66.js";import"./scrollTo.35395ae4.js";import"./index.5475205d.js";import"./index.80de389f.js";import"./index.3f247607.js";import"./index.8df56aab.js";import"./responsiveObserve.e74128d1.js";import"./useFlexGapSupport.01bde4dc.js";import"./useSize.7d9c76f4.js";import"./index.f640b252.js";import"./Tree.300cec75.js";import"./index.7cf79cb3.js";import"./download.ae3ff163.js";import"./base64Conver.08b9f4ec.js";import"./index.089e934e.js";import"./index.47dcf74c.js";import"./index.59e7287a.js";import"./index.e0d3e890.js";import"./useBreakpoint.82e584b1.js";import"./useContentViewHeight.7871b0d4.js";import"./index.b7f548dc.js";import"./ArrowLeftOutlined.e5e1e96b.js";const D=f({components:{BasicTable:l,TableAction:c,PageWrapper:d},setup(){const[o]=F({api:E,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",titleHelpMessage:["\u5DF2\u542F\u7528expandRowByClick","\u5DF2\u542F\u7528stopButtonPropagation"],columns:B(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",slots:{customRender:"action"}}});function p(t){console.log("\u70B9\u51FB\u4E86\u5220\u9664",t)}function u(t){console.log("\u70B9\u51FB\u4E86\u542F\u7528",t)}return{registerTable:o,handleDelete:p,handleOpen:u}}});function w(o,p,u,t,A,R){const a=e("TableAction"),m=e("BasicTable"),s=e("PageWrapper");return b(),g(s,{title:"\u53EF\u5C55\u5F00\u8868\u683C",content:"\u4E0D\u53EF\u4E0Escroll\u5171\u7528\u3002TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"},{default:r(()=>[n(m,{onRegister:o.registerTable},{expandedRowRender:r(({record:i})=>[_("span",null,"No: "+T(i.no),1)]),action:r(({record:i})=>[n(a,{stopButtonPropagation:"",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,i)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:o.handleOpen.bind(null,i)}}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])]),_:1})}var xo=C(D,[["render",w]]);export{xo as default};
