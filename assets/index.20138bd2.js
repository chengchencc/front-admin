import{C as g,M as i,J as F}from"./index.0f7c0606.js";import{P as x}from"./index.c7387940.js";import{au as R,a as B,w as c,aw as n,o as b,k as S,B as o,p as a,C as r,j as k,dt as h,b$ as P}from"./index.da4313ed.js";import{R as f}from"./index.06ee136a.js";import{S as j}from"./index.cbe53f8d.js";import"./useWindowSizeFn.eb5b2cc5.js";import"./index.bb490040.js";import"./index.95fd586b.js";import"./useBreakpoint.57cbd8f9.js";import"./responsiveObserve.72a48b47.js";import"./useSize.d957ad9d.js";import"./useContentViewHeight.f1980a07.js";import"./index.6ae9f6a4.js";import"./ArrowLeftOutlined.58c817d8.js";import"./Checkbox.6a81adb3.js";import"./useFlexGapSupport.81b3a88e.js";const v='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"\u79D1\u6280\u56ED\u8DEF.","city":"\u6C5F\u82CF\u82CF\u5DDE","country":"\u4E2D\u56FD"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}',y=`
      (() => {
        var htmlRoot = document.getElementById('htmlRoot');
        var theme = window.localStorage.getItem('__APP__DARK__MODE__');
        if (htmlRoot && theme) {
          htmlRoot.setAttribute('data-theme', theme);
          theme = htmlRoot = null;
        }
      })();
  `,J=`
     <!DOCTYPE html>
<html lang="en" id="htmlRoot">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <title><%= title %></title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
  `,M=B({components:{CodeEditor:g,PageWrapper:x,RadioButton:f.Button,RadioGroup:f.Group,ASpace:j},setup(){const e=c(i.JSON),t=c(v);function s(p){const u=p.target.value;if(u===i.JSON){t.value=v;return}if(u===i.HTML){t.value=J;return}if(u===i.JS){t.value=y;return}}function d(){k(e)==="application/json"?h.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:P(F,{data:JSON.parse(t.value)})}):h.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:t.value})}return{value:t,modeValue:e,handleModeChange:s,showData:d}}});function A(e,t,s,d,p,u){const _=n("a-button"),l=n("RadioButton"),w=n("RadioGroup"),C=n("a-space"),E=n("CodeEditor"),D=n("PageWrapper");return b(),S(D,{title:"\u4EE3\u7801\u7F16\u8F91\u5668\u7EC4\u4EF6\u793A\u4F8B",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:o(()=>[a(C,{size:"middle"},{default:o(()=>[a(_,{onClick:e.showData,type:"primary"},{default:o(()=>[r("\u83B7\u53D6\u6570\u636E")]),_:1},8,["onClick"]),a(w,{"button-style":"solid",value:e.modeValue,"onUpdate:value":t[0]||(t[0]=m=>e.modeValue=m),onChange:e.handleModeChange},{default:o(()=>[a(l,{value:"application/json"},{default:o(()=>[r(" json\u6570\u636E ")]),_:1}),a(l,{value:"htmlmixed"},{default:o(()=>[r(" html\u4EE3\u7801 ")]),_:1}),a(l,{value:"javascript"},{default:o(()=>[r(" javascript\u4EE3\u7801 ")]),_:1})]),_:1},8,["value","onChange"])]),_:1})]),default:o(()=>[a(E,{value:e.value,"onUpdate:value":t[1]||(t[1]=m=>e.value=m),mode:e.modeValue},null,8,["value","mode"])]),_:1})}var Q=R(M,[["render",A]]);export{Q as default};
