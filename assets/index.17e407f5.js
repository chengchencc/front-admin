import{au as C,a as _,cC as v,w as y,f1 as F,aw as a,o as B,k as g,B as n,p,n as w,C as h,j as i,G as b}from"./index.91c78518.js";import{P as k}from"./index.1e46fc07.js";import"./index.e9b45e79.js";import"./index.e3a1f424.js";import"./useBreakpoint.ebc6768a.js";import"./responsiveObserve.65e938a4.js";import"./useSize.495b1475.js";import"./useWindowSizeFn.2731919f.js";import"./useContentViewHeight.e0cb1840.js";import"./index.119cad3f.js";import"./transButton.6677a85d.js";import"./ArrowLeftOutlined.9a154523.js";const x=_({name:"Copy",components:{CollapseContainer:v,PageWrapper:k},setup(){const e=y(""),{createMessage:o}=b(),{clipboardRef:r,copiedRef:s}=F();function u(){const t=i(e);if(!t){o.warning("\u8BF7\u8F93\u5165\u8981\u62F7\u8D1D\u7684\u5185\u5BB9\uFF01");return}r.value=t,i(s)&&o.warning("copy success\uFF01")}return{handleCopy:u,value:e}}}),P={class:"flex justify-center"};function $(e,o,r,s,u,t){const l=a("a-input"),c=a("a-button"),m=a("CollapseContainer"),d=a("PageWrapper");return B(),g(d,{title:"\u6587\u672C\u590D\u5236\u793A\u4F8B"},{default:n(()=>[p(m,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:n(()=>[w("div",P,[p(l,{placeholder:"\u8BF7\u8F93\u5165",value:e.value,"onUpdate:value":o[0]||(o[0]=f=>e.value=f)},null,8,["value"]),p(c,{type:"primary",onClick:e.handleCopy},{default:n(()=>[h(" Copy ")]),_:1},8,["onClick"])])]),_:1})]),_:1})}var q=C(x,[["render",$]]);export{q as default};