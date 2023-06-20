var w=Object.defineProperty,C=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var D=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))I.call(t,a)&&D(e,a,t[a]);if(B)for(var a of B(t))E.call(t,a)&&D(e,a,t[a]);return e},y=(e,t)=>C(e,A(t));import{au as V,a as L,I as _,x as O,f7 as x,af as S,f as g,eb as N,bk as P,aw as r,o as h,k as W,B as u,n as s,p as l,C as d,t as c,i as F,F as $,az as M}from"./index.a4184510.js";import{T as R}from"./index.42ece229.js";import{P as U}from"./index.7f4f8797.js";import"./index.00036abf.js";import"./index.97a5ac83.js";import"./useBreakpoint.3d7302fa.js";import"./responsiveObserve.74da7233.js";import"./useSize.6d3e9c8f.js";import"./useWindowSizeFn.c1349caf.js";import"./useContentViewHeight.82e6d0cc.js";import"./index.cff0b8af.js";import"./transButton.5ba7ce35.js";import"./ArrowLeftOutlined.62eef3b2.js";const z=L({components:{PageWrapper:U,[_.name]:_,InputTextArea:_.TextArea,Tag:R},setup(){const e=O({server:"ws://localhost:3300/test",sendValue:"",recordList:[]}),{status:t,data:a,send:v,close:T,open:b}=x(e.server,{autoReconnect:!1,heartbeat:!0});S(()=>{if(a.value)try{const o=JSON.parse(a.value);e.recordList.push(o)}catch(o){e.recordList.push({res:a.value,id:Math.ceil(Math.random()*1e3),time:new Date().getTime()})}});const n=g(()=>t.value==="OPEN"),p=g(()=>n.value?"success":"red"),i=g(()=>[...e.recordList].reverse());function m(){v(e.sendValue),e.sendValue=""}function f(){n.value?T():b()}return y(k({status:t,formatToDateTime:N},P(e)),{handlerSend:m,getList:i,toggle:f,getIsOpen:n,getTagColor:p})}}),J={class:"flex"},j={class:"w-1/3 bg-white p-4"},q={class:"flex items-center"},G=s("span",{class:"text-lg font-medium mr-4"}," \u8FDE\u63A5\u72B6\u6001: ",-1),H=s("hr",{class:"my-4"},null,-1),K={class:"flex"},Q=s("p",{class:"text-lg font-medium mt-4"},"\u8BBE\u7F6E",-1),X=s("hr",{class:"my-4"},null,-1),Y={class:"w-2/3 bg-white ml-4 p-4"},Z=s("span",{class:"text-lg font-medium mr-4"}," \u6D88\u606F\u8BB0\u5F55: ",-1),ee=s("hr",{class:"my-4"},null,-1),te={class:"max-h-80 overflow-auto"},se={class:"flex items-center"},ae=s("span",{class:"mr-2 text-primary font-medium"},"\u6536\u5230\u6D88\u606F:",-1);function oe(e,t,a,v,T,b){const n=r("Tag"),p=r("a-input"),i=r("a-button"),m=r("InputTextArea"),f=r("PageWrapper");return h(),W(f,{title:"WebSocket \u793A\u4F8B"},{default:u(()=>[s("div",J,[s("div",j,[s("div",q,[G,l(n,{color:e.getTagColor},{default:u(()=>[d(c(e.status),1)]),_:1},8,["color"])]),H,s("div",K,[l(p,{value:e.server,"onUpdate:value":t[0]||(t[0]=o=>e.server=o),disabled:""},{addonBefore:u(()=>[d(" \u670D\u52A1\u5730\u5740 ")]),_:1},8,["value"]),l(i,{type:e.getIsOpen?"danger":"primary",onClick:e.toggle},{default:u(()=>[d(c(e.getIsOpen?"\u5173\u95ED\u8FDE\u63A5":"\u5F00\u542F\u8FDE\u63A5"),1)]),_:1},8,["type","onClick"])]),Q,X,l(m,{placeholder:"\u9700\u8981\u53D1\u9001\u5230\u670D\u52A1\u5668\u7684\u5185\u5BB9",disabled:!e.getIsOpen,value:e.sendValue,"onUpdate:value":t[1]||(t[1]=o=>e.sendValue=o),allowClear:""},null,8,["disabled","value"]),l(i,{type:"primary",block:"",class:"mt-4",disabled:!e.getIsOpen,onClick:e.handlerSend},{default:u(()=>[d(" \u53D1\u9001 ")]),_:1},8,["disabled","onClick"])]),s("div",Y,[Z,ee,s("div",te,[s("ul",null,[(h(!0),F($,null,M(e.getList,o=>(h(),F("li",{class:"mt-2",key:o.time},[s("div",se,[ae,s("span",null,c(e.formatToDateTime(o.time)),1)]),s("div",null,c(o.res),1)]))),128))])])])])]),_:1})}var Te=V(z,[["render",oe]]);export{Te as default};