import{B as d,T as l}from"./TableImg.3906216b.js";import"./BasicForm.d765cc9c.js";import{u as c}from"./useTable.f02b5d26.js";import{au as g,a as F,aw as i,o as _,i as E,p as e,B as o,C as u,t as m}from"./index.0afb6b1a.js";import{T}from"./index.f3dc3acc.js";import{A as f}from"./index.ab4596d9.js";import{d as A}from"./table.b4d13db3.js";import"./index.0c92bc5e.js";import"./Checkbox.b94383d9.js";import"./index.f188e1cd.js";import"./useForm.d0f78599.js";import"./index.f1bbd8b9.js";import"./index.0fb2ca65.js";import"./useWindowSizeFn.b437c5f3.js";import"./useContentViewHeight.6667aea5.js";import"./index.97f64344.js";import"./useSize.b98aa611.js";import"./ArrowLeftOutlined.8571d53f.js";import"./index.a38530f5.js";import"./UpOutlined.53f4e913.js";import"./index.a86fe11c.js";import"./isEqual.c3167c03.js";import"./_baseIsEqual.b9ab726e.js";import"./uuid.2b29000c.js";import"./index.3608aaa4.js";import"./uniqBy.1231b8aa.js";import"./_baseIteratee.ccaeac66.js";import"./get.cbf01dd9.js";import"./findIndex.bebb7dcc.js";import"./toInteger.385c5e34.js";import"./util.5b402eb8.js";import"./warning.ca82f8e0.js";import"./index.b920e176.js";import"./DeleteOutlined.7747d063.js";import"./index.afe49db0.js";import"./FullscreenOutlined.f42c8b10.js";import"./index.b5e58356.js";import"./useSortable.04beedbd.js";import"./RedoOutlined.8a38e0cf.js";import"./CaretDownFilled.6c2b69f4.js";import"./scrollTo.b6090ae3.js";import"./index.9ecfb69b.js";import"./index.1916b734.js";import"./index.f9b7668c.js";import"./index.335339a9.js";import"./responsiveObserve.8bc71b85.js";import"./useFlexGapSupport.358e75d5.js";import"./index.752237d9.js";import"./Tree.c194a51d.js";import"./index.35e066f0.js";import"./download.8e655723.js";import"./base64Conver.08b9f4ec.js";import"./index.487b659d.js";import"./index.3fdd4c89.js";import"./useBreakpoint.f66a95b4.js";const B=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"\u5934\u50CF",dataIndex:"avatar",width:100,slots:{customRender:"avatar"}},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u56FE\u7247\u5217\u88681",dataIndex:"imgArr",helpMessage:["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868","\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D","\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],width:140,slots:{customRender:"img"}},{title:"\u7167\u7247\u5217\u88682",dataIndex:"imgs",width:160,slots:{customRender:"imgs"}},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",slots:{customRender:"no"}},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}],C=F({components:{BasicTable:d,TableImg:l,Tag:T,Avatar:f},setup(){const[r]=c({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:A,columns:B,bordered:!0,showTableSetting:!0});return{registerTable:r}}}),I={class:"p-4"};function x(r,b,h,v,D,w){const a=i("Tag"),p=i("Avatar"),s=i("TableImg"),n=i("BasicTable");return _(),E("div",I,[e(n,{onRegister:r.registerTable},{id:o(({record:t})=>[u(" ID: "+m(t.id),1)]),no:o(({record:t})=>[e(a,{color:"green"},{default:o(()=>[u(m(t.no),1)]),_:2},1024)]),avatar:o(({record:t})=>[e(p,{size:60,src:t.avatar},null,8,["src"])]),img:o(({text:t})=>[e(s,{size:60,simpleShow:!0,imgList:t},null,8,["imgList"])]),imgs:o(({text:t})=>[e(s,{size:60,imgList:t},null,8,["imgList"])]),category:o(({record:t})=>[e(a,{color:"green"},{default:o(()=>[u(m(t.no),1)]),_:2},1024)]),_:1},8,["onRegister"])])}var Lt=g(C,[["render",x]]);export{Lt as default};
