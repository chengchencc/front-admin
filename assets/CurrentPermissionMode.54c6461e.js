import{au as m,a as p,bO as c,f as d,dl as l,eh as _,aw as i,o as F,i as f,C as o,p as s,B as r,t as C}from"./index.4804300a.js";import{D as M}from"./index.b31cd219.js";const A=p({name:"CurrentPermissionMode",components:{Divider:M},setup(){const e=c(),t=d(()=>e.getProjectConfig.permissionMode),{togglePermissionMode:n}=l();return{permissionMode:t,PermissionModeEnum:_,togglePermissionMode:n}}}),D={class:"mt-2"};function P(e,t,n,g,v,k){const u=i("a-button"),a=i("Divider");return F(),f("div",D,[o(" \u5F53\u524D\u6743\u9650\u6A21\u5F0F\uFF1A "),s(u,{type:"link"},{default:r(()=>[o(C(e.permissionMode===e.PermissionModeEnum.BACK?"\u540E\u53F0\u6743\u9650\u6A21\u5F0F":"\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F"),1)]),_:1}),s(u,{class:"ml-4",onClick:e.togglePermissionMode,type:"primary"},{default:r(()=>[o(" \u5207\u6362\u6743\u9650\u6A21\u5F0F ")]),_:1},8,["onClick"]),s(a)])}var y=m(A,[["render",P]]);export{y as default};
