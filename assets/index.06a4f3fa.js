import{Q as v}from"./index.d8acb744.js";import{au as E,a as _,cC as D,w as p,eH as B,aw as r,o as b,k as q,B as t,n as s,p as o,C as F,j as g,eI as w,eJ as A}from"./index.4804300a.js";import{P as y}from"./index.86f2dbf6.js";import"./download.9c0a35ab.js";import"./base64Conver.08b9f4ec.js";import"./index.699aa748.js";import"./index.1f68cb78.js";import"./useBreakpoint.3a1e9c1a.js";import"./responsiveObserve.dcad6fcd.js";import"./useSize.ea1bf5d1.js";import"./useWindowSizeFn.38c7676c.js";import"./useContentViewHeight.8fc9ee42.js";import"./index.583dbbd3.js";import"./transButton.342edbea.js";import"./ArrowLeftOutlined.0255904f.js";const h="https://www.vvbin.cn",k=_({components:{CollapseContainer:D,QrCode:v,PageWrapper:y},setup(){const e=p(null),a=p(null);function d(){const u=g(e);!u||u.download("\u6587\u4EF6\u540D")}function i(){const u=g(a);!u||u.download("Qrcode")}function c({ctx:u}){u instanceof CanvasRenderingContext2D&&(u.fillStyle="black",u.font='16px "\u5FAE\u8F6F\u96C5\u9ED1"',u.textBaseline="bottom",u.textAlign="center",u.fillText("\u4F60\u5E05\u4F60\u5148\u626B",100,195,200))}return{onQrcodeDone:c,qrCodeUrl:h,LogoImg:B,download:d,downloadDiy:i,qrRef:e,qrDiyRef:a}}}),C=e=>(w("data-v-31db1ad4"),e=e(),A(),e),U={class:"flex flex-wrap"},I=C(()=>s("div",{class:"msg"},"(\u5728\u7EBFlogo\u4F1A\u5BFC\u81F4\u56FE\u7247\u8DE8\u57DF\uFF0C\u9700\u8981\u4E0B\u8F7D\u56FE\u7247\u9700\u8981\u81EA\u884C\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898)",-1)),Q=C(()=>s("div",{class:"msg"},"\u8981\u8FDB\u884C\u6269\u5C55\u7ED8\u5236\u5219\u4E0D\u80FD\u5C06tag\u8BBE\u4E3Aimg",-1));function R(e,a,d,i,c,u){const l=r("QrCode"),n=r("CollapseContainer"),m=r("a-button"),f=r("PageWrapper");return b(),q(f,{title:"\u4E8C\u7EF4\u7801\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:t(()=>[s("div",U,[o(n,{title:"\u57FA\u7840\u793A\u4F8B",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl},null,8,["value"])]),_:1}),o(n,{title:"\u6E32\u67D3\u6210img\u6807\u7B7E\u793A\u4F8B",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])]),_:1}),o(n,{title:"\u914D\u7F6E\u6837\u5F0F\u793A\u4F8B",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])]),_:1}),o(n,{title:"\u672C\u5730logo\u793A\u4F8B",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])]),_:1}),o(n,{title:"\u5728\u7EBFlogo\u793A\u4F8B",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])]),_:1}),o(n,{title:"logo\u914D\u7F6E\u793A\u4F8B",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])]),_:1}),o(n,{title:"\u4E0B\u8F7D\u793A\u4F8B",class:"text-center qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),o(m,{class:"mb-2",type:"primary",onClick:e.download},{default:t(()=>[F(" \u4E0B\u8F7D ")]),_:1},8,["onClick"]),I]),_:1}),o(n,{title:"\u914D\u7F6E\u5927\u5C0F\u793A\u4F8B",class:"text-center qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,width:300},null,8,["value"])]),_:1}),o(n,{title:"\u6269\u5C55\u7ED8\u5236\u793A\u4F8B",class:"text-center qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,width:200,options:{margin:5},ref:"qrDiyRef",logo:e.LogoImg,onDone:e.onQrcodeDone},null,8,["value","logo","onDone"]),o(m,{class:"mb-2",type:"primary",onClick:e.downloadDiy},{default:t(()=>[F(" \u4E0B\u8F7D ")]),_:1},8,["onClick"]),Q]),_:1})])]),_:1})}var M=E(k,[["render",R],["__scopeId","data-v-31db1ad4"]]);export{M as default};
