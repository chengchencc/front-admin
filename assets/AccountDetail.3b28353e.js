import{au as P,a as C,b4 as w,b5 as A,w as y,c2 as I,aw as s,o as c,k as N,B as t,p as r,C as b,n as i,i as f,F as k,az as _,t as g,l as v}from"./index.91c78518.js";import{P as V}from"./index.1e46fc07.js";import{T as B}from"./index.2f381582.js";import"./index.e9b45e79.js";import"./index.e3a1f424.js";import"./useBreakpoint.ebc6768a.js";import"./responsiveObserve.65e938a4.js";import"./useSize.495b1475.js";import"./useWindowSizeFn.2731919f.js";import"./useContentViewHeight.e0cb1840.js";import"./index.119cad3f.js";import"./transButton.6677a85d.js";import"./ArrowLeftOutlined.9a154523.js";import"./warning.ca82f8e0.js";import"./UpOutlined.e4286575.js";import"./PlusOutlined.19f392eb.js";const $=C({name:"AccountDetail",components:{PageWrapper:V,ATabs:B,ATabPane:B.TabPane},setup(){var a;const e=w(),n=A(),p=y((a=e.params)==null?void 0:a.id),u=y("detail"),{setTitle:m}=I();m("\u8BE6\u60C5\uFF1A\u7528\u6237"+p.value);function d(){n("/system/account")}return{userId:p,currentKey:u,goBack:d}}}),D={class:"pt-4 m-4 desc-wrap"};function W(e,n,p,u,m,d){const a=s("a-button"),l=s("a-tab-pane"),T=s("a-tabs"),K=s("PageWrapper");return c(),N(K,{title:"\u7528\u6237"+e.userId+"\u7684\u8D44\u6599",content:"\u8FD9\u662F\u7528\u6237\u8D44\u6599\u8BE6\u60C5\u9875\u9762\u3002\u672C\u9875\u9762\u4EC5\u7528\u4E8E\u6F14\u793A\u76F8\u540C\u8DEF\u7531\u5728tab\u4E2D\u6253\u5F00\u591A\u4E2A\u9875\u9762\u5E76\u4E14\u663E\u793A\u4E0D\u540C\u7684\u6570\u636E",contentBackground:"",onBack:e.goBack},{extra:t(()=>[r(a,{type:"primary",danger:""},{default:t(()=>[b(" \u7981\u7528\u8D26\u53F7 ")]),_:1}),r(a,{type:"primary"},{default:t(()=>[b(" \u4FEE\u6539\u5BC6\u7801 ")]),_:1})]),footer:t(()=>[r(T,{"default-active-key":"detail",activeKey:e.currentKey,"onUpdate:activeKey":n[0]||(n[0]=o=>e.currentKey=o)},{default:t(()=>[r(l,{key:"detail",tab:"\u7528\u6237\u8D44\u6599"}),r(l,{key:"logs",tab:"\u64CD\u4F5C\u65E5\u5FD7"})]),_:1},8,["activeKey"])]),default:t(()=>[i("div",D,[e.currentKey=="detail"?(c(),f(k,{key:0},_(10,o=>i("div",{key:o},"\u8FD9\u662F\u7528\u6237"+g(e.userId)+"\u8D44\u6599Tab",1)),64)):v("",!0),e.currentKey=="logs"?(c(),f(k,{key:1},_(10,o=>i("div",{key:o},"\u8FD9\u662F\u7528\u6237"+g(e.userId)+"\u64CD\u4F5C\u65E5\u5FD7Tab",1)),64)):v("",!0)])]),_:1},8,["title","onBack"])}var X=P($,[["render",W]]);export{X as default};