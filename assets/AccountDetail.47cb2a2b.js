import{au as P,a as C,b5 as w,b6 as A,w as y,c3 as I,aw as s,o as c,k as N,B as t,p as r,C as b,n as i,i as f,F as k,az as _,t as g,l as v}from"./index.0afb6b1a.js";import{P as V}from"./index.f1bbd8b9.js";import{T as B}from"./index.3065bd8d.js";import"./index.0fb2ca65.js";import"./index.ab4596d9.js";import"./useBreakpoint.f66a95b4.js";import"./responsiveObserve.8bc71b85.js";import"./useSize.b98aa611.js";import"./useWindowSizeFn.b437c5f3.js";import"./useContentViewHeight.6667aea5.js";import"./index.97f64344.js";import"./ArrowLeftOutlined.8571d53f.js";import"./warning.ca82f8e0.js";import"./UpOutlined.53f4e913.js";import"./PlusOutlined.d47e946e.js";const $=C({name:"AccountDetail",components:{PageWrapper:V,ATabs:B,ATabPane:B.TabPane},setup(){var a;const e=w(),n=A(),p=y((a=e.params)==null?void 0:a.id),u=y("detail"),{setTitle:m}=I();m("\u8BE6\u60C5\uFF1A\u7528\u6237"+p.value);function d(){n("/system/account")}return{userId:p,currentKey:u,goBack:d}}}),D={class:"pt-4 m-4 desc-wrap"};function W(e,n,p,u,m,d){const a=s("a-button"),l=s("a-tab-pane"),T=s("a-tabs"),K=s("PageWrapper");return c(),N(K,{title:"\u7528\u6237"+e.userId+"\u7684\u8D44\u6599",content:"\u8FD9\u662F\u7528\u6237\u8D44\u6599\u8BE6\u60C5\u9875\u9762\u3002\u672C\u9875\u9762\u4EC5\u7528\u4E8E\u6F14\u793A\u76F8\u540C\u8DEF\u7531\u5728tab\u4E2D\u6253\u5F00\u591A\u4E2A\u9875\u9762\u5E76\u4E14\u663E\u793A\u4E0D\u540C\u7684\u6570\u636E",contentBackground:"",onBack:e.goBack},{extra:t(()=>[r(a,{type:"primary",danger:""},{default:t(()=>[b(" \u7981\u7528\u8D26\u53F7 ")]),_:1}),r(a,{type:"primary"},{default:t(()=>[b(" \u4FEE\u6539\u5BC6\u7801 ")]),_:1})]),footer:t(()=>[r(T,{"default-active-key":"detail",activeKey:e.currentKey,"onUpdate:activeKey":n[0]||(n[0]=o=>e.currentKey=o)},{default:t(()=>[r(l,{key:"detail",tab:"\u7528\u6237\u8D44\u6599"}),r(l,{key:"logs",tab:"\u64CD\u4F5C\u65E5\u5FD7"})]),_:1},8,["activeKey"])]),default:t(()=>[i("div",D,[e.currentKey=="detail"?(c(),f(k,{key:0},_(10,o=>i("div",{key:o},"\u8FD9\u662F\u7528\u6237"+g(e.userId)+"\u8D44\u6599Tab",1)),64)):v("",!0),e.currentKey=="logs"?(c(),f(k,{key:1},_(10,o=>i("div",{key:o},"\u8FD9\u662F\u7528\u6237"+g(e.userId)+"\u64CD\u4F5C\u65E5\u5FD7Tab",1)),64)):v("",!0)])]),_:1},8,["title","onBack"])}var Q=P($,[["render",W]]);export{Q as default};
