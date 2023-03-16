import{au as w,a as _,eG as R,w as g,aw as a,o as y,k,B as r,p as u,C as n,aG as $,L as T}from"./index.4804300a.js";import{A as V}from"./index.7e49ec2b.js";import{S as P}from"./index.1c37f2cf.js";import{u as d}from"./index.2fdf992b.js";import D from"./Modal1.93f064f8.js";import v from"./Modal2.20f62a7a.js";import b from"./Modal3.6e380fee.js";import B from"./Modal4.c51cad28.js";import{P as L}from"./index.86f2dbf6.js";import"./useFlexGapSupport.80df3ddb.js";import"./useWindowSizeFn.38c7676c.js";import"./FullscreenOutlined.6182337b.js";import"./isEqual.d085b836.js";import"./_baseIsEqual.b58e8f82.js";import"./BasicForm.6a80a3ef.js";import"./index.0c62ab03.js";import"./index.716c17fa.js";import"./responsiveObserve.dcad6fcd.js";import"./_baseIteratee.fd601a92.js";import"./get.0b3d73ff.js";import"./findIndex.64769271.js";import"./toInteger.cb8f48a7.js";import"./useSize.ea1bf5d1.js";import"./index.b31cd219.js";import"./index.aafc8171.js";import"./Checkbox.ed9ba07d.js";import"./index.b072982e.js";import"./index.8d4032f7.js";import"./index.4b18e1d8.js";import"./UpOutlined.7d204e9d.js";import"./index.f77551c2.js";import"./index.9c7c8f45.js";import"./warning.ca82f8e0.js";import"./util.911c028f.js";import"./Tree.d17c098e.js";import"./RedoOutlined.f42eea3d.js";import"./index.ea8a2f75.js";import"./uniqBy.a37949c3.js";import"./index.bf15c0c1.js";import"./DeleteOutlined.8ae61e5f.js";import"./index.5b9902c5.js";import"./uuid.2b29000c.js";import"./download.9c0a35ab.js";import"./base64Conver.08b9f4ec.js";import"./index.b8e933b2.js";import"./index.259bc711.js";import"./useForm.9f5f06ba.js";import"./index.699aa748.js";import"./index.1f68cb78.js";import"./useBreakpoint.3a1e9c1a.js";import"./useContentViewHeight.8fc9ee42.js";import"./index.583dbbd3.js";import"./transButton.342edbea.js";import"./ArrowLeftOutlined.0255904f.js";const S=_({components:{Alert:V,Modal1:D,Modal2:v,Modal3:b,Modal4:B,PageWrapper:L,ASpace:P},setup(){const o=R(null),[e,{openModal:F}]=d(),[f,{openModal:C}]=d(),[M,{openModal:i}]=d(),[t,{openModal:s}]=d(),l=g(!1),m=g(null);function A(){s(!0,{data:"content",info:"Info"})}function c(){F(!0)}function E(p){switch(p){case 1:o.value=D;break;case 2:o.value=v;break;case 3:o.value=b;break;default:o.value=B;break}T(()=>{m.value={data:Math.random(),info:"Info222"},l.value=!0})}return{register1:e,openModal1:F,register2:f,openModal2:C,register3:M,openModal3:i,register4:t,openModal4:s,modalVisible:l,userData:m,openTargetModal:E,send:A,currentModal:o,openModalLoading:c}}});function W(o,e,F,f,C,M){const i=a("Alert"),t=a("a-button"),s=a("a-space"),l=a("Modal1"),m=a("Modal2"),A=a("Modal3"),c=a("Modal4"),E=a("PageWrapper");return y(),k(E,{title:"modal\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:r(()=>[u(i,{message:`\u4F7F\u7528 useModal \u8FDB\u884C\u5F39\u7A97\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8\uFF0C\u53EF\u4EE5\u901A\u8FC7 draggable
    \u53C2\u6570\u8FDB\u884C\u63A7\u5236\u662F\u5426\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F\uFF0C\u5E76\u6F14\u793A\u4E86\u5728Modal\u5185\u52A8\u6001\u52A0\u8F7D\u5185\u5BB9\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6`,"show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97,\u52A0\u8F7D\u52A8\u6001\u6570\u636E\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6(\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F) ")]),_:1},8,["onClick"]),u(i,{message:"\u5185\u5916\u540C\u65F6\u540C\u65F6\u663E\u793A\u9690\u85CF","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal2},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97 ")]),_:1},8,["onClick"]),u(i,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal3},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97 ")]),_:1},8,["onClick"]),u(i,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.send},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97\u5E76\u4F20\u9012\u6570\u636E ")]),_:1},8,["onClick"]),u(i,{message:"\u4F7F\u7528\u52A8\u6001\u7EC4\u4EF6\u7684\u65B9\u5F0F\u5728\u9875\u9762\u5185\u4F7F\u7528\u591A\u4E2A\u5F39\u7A97","show-icon":""}),u(s,null,{default:r(()=>[u(t,{type:"primary",class:"my-4",onClick:e[0]||(e[0]=p=>o.openTargetModal(1))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A971 ")]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[1]||(e[1]=p=>o.openTargetModal(2))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A972 ")]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[2]||(e[2]=p=>o.openTargetModal(3))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A973 ")]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[3]||(e[3]=p=>o.openTargetModal(4))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A974 ")]),_:1})]),_:1}),(y(),k($(o.currentModal),{visible:o.modalVisible,"onUpdate:visible":e[4]||(e[4]=p=>o.modalVisible=p),userData:o.userData},null,40,["visible","userData"])),u(l,{onRegister:o.register1,minHeight:100},null,8,["onRegister"]),u(m,{onRegister:o.register2},null,8,["onRegister"]),u(A,{onRegister:o.register3},null,8,["onRegister"]),u(c,{onRegister:o.register4},null,8,["onRegister"])]),_:1})}var Io=w(S,[["render",W]]);export{Io as default};
