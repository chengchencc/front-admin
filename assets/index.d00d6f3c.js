var F=(t,s,e)=>new Promise((i,m)=>{var d=u=>{try{o(e.next(u))}catch(a){m(a)}},p=u=>{try{o(e.throw(u))}catch(a){m(a)}},o=u=>u.done?i(u.value):Promise.resolve(u.value).then(d,p);o((e=e.apply(t,s)).next())});import{P as _}from"./index.86f2dbf6.js";import{au as C,a as f,v as E,aw as c,o as D,k as A,B as r,p as n,C as l,n as k}from"./index.4804300a.js";import{t as g}from"./account.45d12be2.js";import{C as B}from"./index.c31e7b1d.js";import"./index.7d6ebdd6.js";import"./index.716c17fa.js";import"./index.699aa748.js";import"./index.1f68cb78.js";import"./useBreakpoint.3a1e9c1a.js";import"./responsiveObserve.dcad6fcd.js";import"./useSize.ea1bf5d1.js";import"./useWindowSizeFn.38c7676c.js";import"./useContentViewHeight.8fc9ee42.js";import"./index.583dbbd3.js";import"./transButton.342edbea.js";import"./ArrowLeftOutlined.0255904f.js";import"./index.7d915d6f.js";import"./index.259bc711.js";import"./warning.ca82f8e0.js";import"./UpOutlined.7d204e9d.js";import"./PlusOutlined.74f1ea02.js";import"./useFlexGapSupport.80df3ddb.js";const y=f({name:"TestSessionTimeout",components:{ACardGrid:B.Grid,ACard:B,PageWrapper:_},setup(){const t=E();function s(){return F(this,null,function*(){t.setToken(void 0),t.setSessionTimeout(!0)})}function e(){return F(this,null,function*(){try{yield g()}catch(i){console.log("\u63A5\u53E3\u8BBF\u95EE\u9519\u8BEF\uFF1A",i.message||"\u9519\u8BEF")}})}return{test1:s,test2:e}}}),x=k("span",null,null,-1);function h(t,s,e,i,m,d){const p=c("a-button"),o=c("a-card-grid"),u=c("a-card"),a=c("PageWrapper");return D(),A(a,{title:"\u767B\u5F55\u8FC7\u671F\u793A\u4F8B",content:"\u7528\u6237\u767B\u5F55\u8FC7\u671F\u793A\u4F8B\uFF0C\u4E0D\u518D\u8DF3\u8F6C\u767B\u5F55\u9875\uFF0C\u76F4\u63A5\u751F\u6210\u9875\u9762\u8986\u76D6\u5F53\u524D\u9875\u9762\uFF0C\u65B9\u4FBF\u4FDD\u6301\u8FC7\u671F\u524D\u7684\u7528\u6237\u72B6\u6001\uFF01"},{default:r(()=>[n(u,{title:"\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u8BBF\u95EE\u6D4B\u8BD5\u63A5\u53E3",extra:"\u6240\u8BBF\u95EE\u7684\u63A5\u53E3\u4F1A\u8FD4\u56DEToken\u8FC7\u671F\u54CD\u5E94"},{default:r(()=>[n(o,{style:{width:"50%","text-align":"center"}},{default:r(()=>[n(p,{type:"primary",onClick:t.test1},{default:r(()=>[l("HttpStatus == 401")]),_:1},8,["onClick"])]),_:1}),n(o,{style:{width:"50%","text-align":"center"}},{default:r(()=>[x,n(p,{class:"ml-4",type:"primary",onClick:t.test2},{default:r(()=>[l("Response.code == 401")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}var Q=C(y,[["render",h]]);export{Q as default};
