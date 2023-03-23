import{B as d,T as l}from"./TableImg.831ea4f5.js";import"./BasicForm.98ef7450.js";import{u as c}from"./useTable.a75fc128.js";import{au as g,a as F,aw as i,o as _,i as E,p as e,B as o,C as u,t as m}from"./index.91c78518.js";import{T}from"./index.7de12fa0.js";import{A as f}from"./index.e3a1f424.js";import{d as A}from"./table.da527ea8.js";import"./index.88f1e948.js";import"./Checkbox.9cabff11.js";import"./index.4492b02f.js";import"./useForm.2169bbec.js";import"./index.1e46fc07.js";import"./index.e9b45e79.js";import"./useWindowSizeFn.2731919f.js";import"./useContentViewHeight.e0cb1840.js";import"./index.119cad3f.js";import"./useSize.495b1475.js";import"./transButton.6677a85d.js";import"./ArrowLeftOutlined.9a154523.js";import"./index.4240517a.js";import"./UpOutlined.e4286575.js";import"./index.88fb2e9b.js";import"./isEqual.6a61b02c.js";import"./_baseIsEqual.816e480b.js";import"./uuid.2b29000c.js";import"./index.5a21fcd9.js";import"./uniqBy.c07792ae.js";import"./_baseIteratee.c981f53f.js";import"./get.2c776a61.js";import"./findIndex.0570347c.js";import"./toInteger.078e120d.js";import"./util.3aa28320.js";import"./warning.ca82f8e0.js";import"./index.bd985330.js";import"./DeleteOutlined.b9c6996f.js";import"./index.9784102a.js";import"./FullscreenOutlined.afbc26d0.js";import"./index.989cc525.js";import"./useSortable.67718d45.js";import"./RedoOutlined.55ab8ef7.js";import"./CaretDownFilled.0ff9844c.js";import"./scrollTo.fec0171b.js";import"./index.d7154bf4.js";import"./index.0172d1a0.js";import"./index.41e94487.js";import"./index.f1d72b26.js";import"./responsiveObserve.65e938a4.js";import"./useFlexGapSupport.33a77d25.js";import"./index.495ffb40.js";import"./Tree.155e87a6.js";import"./index.7cd6cb50.js";import"./download.ae181d08.js";import"./base64Conver.08b9f4ec.js";import"./index.2eaf87ac.js";import"./index.38e5c16b.js";import"./useBreakpoint.ebc6768a.js";const B=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"\u5934\u50CF",dataIndex:"avatar",width:100,slots:{customRender:"avatar"}},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u56FE\u7247\u5217\u88681",dataIndex:"imgArr",helpMessage:["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868","\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D","\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],width:140,slots:{customRender:"img"}},{title:"\u7167\u7247\u5217\u88682",dataIndex:"imgs",width:160,slots:{customRender:"imgs"}},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",slots:{customRender:"no"}},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}],C=F({components:{BasicTable:d,TableImg:l,Tag:T,Avatar:f},setup(){const[r]=c({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:A,columns:B,bordered:!0,showTableSetting:!0});return{registerTable:r}}}),I={class:"p-4"};function x(r,b,h,v,D,w){const a=i("Tag"),p=i("Avatar"),s=i("TableImg"),n=i("BasicTable");return _(),E("div",I,[e(n,{onRegister:r.registerTable},{id:o(({record:t})=>[u(" ID: "+m(t.id),1)]),no:o(({record:t})=>[e(a,{color:"green"},{default:o(()=>[u(m(t.no),1)]),_:2},1024)]),avatar:o(({record:t})=>[e(p,{size:60,src:t.avatar},null,8,["src"])]),img:o(({text:t})=>[e(s,{size:60,simpleShow:!0,imgList:t},null,8,["imgList"])]),imgs:o(({text:t})=>[e(s,{size:60,imgList:t},null,8,["imgList"])]),category:o(({record:t})=>[e(a,{color:"green"},{default:o(()=>[u(m(t.no),1)]),_:2},1024)]),_:1},8,["onRegister"])])}var yt=g(C,[["render",x]]);export{yt as default};