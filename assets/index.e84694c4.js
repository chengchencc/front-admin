import{C as g,M as i,J as F}from"./index.c23dd612.js";import{P as x}from"./index.7f4f8797.js";import{au as R,a as B,w as c,aw as n,o as b,k as S,B as o,p as a,C as r,j as k,dV as h,b_ as P}from"./index.a4184510.js";import{R as f}from"./index.f9d35bfd.js";import{S as j}from"./index.d33be269.js";import"./useWindowSizeFn.c1349caf.js";import"./index.00036abf.js";import"./index.97a5ac83.js";import"./useBreakpoint.3d7302fa.js";import"./responsiveObserve.74da7233.js";import"./useSize.6d3e9c8f.js";import"./useContentViewHeight.82e6d0cc.js";import"./index.cff0b8af.js";import"./transButton.5ba7ce35.js";import"./ArrowLeftOutlined.62eef3b2.js";import"./Checkbox.341a0e84.js";import"./useFlexGapSupport.22cad392.js";const v='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"\u79D1\u6280\u56ED\u8DEF.","city":"\u6C5F\u82CF\u82CF\u5DDE","country":"\u4E2D\u56FD"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}',y=`
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
  `,M=B({components:{CodeEditor:g,PageWrapper:x,RadioButton:f.Button,RadioGroup:f.Group,ASpace:j},setup(){const e=c(i.JSON),t=c(v);function s(p){const u=p.target.value;if(u===i.JSON){t.value=v;return}if(u===i.HTML){t.value=J;return}if(u===i.JS){t.value=y;return}}function d(){k(e)==="application/json"?h.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:P(F,{data:JSON.parse(t.value)})}):h.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:t.value})}return{value:t,modeValue:e,handleModeChange:s,showData:d}}});function V(e,t,s,d,p,u){const _=n("a-button"),l=n("RadioButton"),w=n("RadioGroup"),C=n("a-space"),E=n("CodeEditor"),D=n("PageWrapper");return b(),S(D,{title:"\u4EE3\u7801\u7F16\u8F91\u5668\u7EC4\u4EF6\u793A\u4F8B",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:o(()=>[a(C,{size:"middle"},{default:o(()=>[a(_,{onClick:e.showData,type:"primary"},{default:o(()=>[r("\u83B7\u53D6\u6570\u636E")]),_:1},8,["onClick"]),a(w,{"button-style":"solid",value:e.modeValue,"onUpdate:value":t[0]||(t[0]=m=>e.modeValue=m),onChange:e.handleModeChange},{default:o(()=>[a(l,{value:"application/json"},{default:o(()=>[r(" json\u6570\u636E ")]),_:1}),a(l,{value:"htmlmixed"},{default:o(()=>[r(" html\u4EE3\u7801 ")]),_:1}),a(l,{value:"javascript"},{default:o(()=>[r(" javascript\u4EE3\u7801 ")]),_:1})]),_:1},8,["value","onChange"])]),_:1})]),default:o(()=>[a(E,{value:e.value,"onUpdate:value":t[1]||(t[1]=m=>e.value=m),mode:e.modeValue},null,8,["value","mode"])]),_:1})}var Z=R(M,[["render",V]]);export{Z as default};
