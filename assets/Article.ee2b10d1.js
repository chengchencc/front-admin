import{au as $,a as k,be as y,aw as n,o as s,k as c,B as r,i as p,F as _,az as m,p as x,n as l,r as o,t as i,C as d,l as g}from"./index.a4184510.js";import{L as u}from"./index.cd3e74be.js";import"./index.5389ab9f.js";import{T as B}from"./index.42ece229.js";import{articleList as T,actions as M}from"./data.6c258519.js";import"./useBreakpoint.3d7302fa.js";import"./responsiveObserve.74da7233.js";import"./useFlexGapSupport.22cad392.js";const N=k({components:{List:u,ListItem:u.Item,ListItemMeta:u.Item.Meta,Tag:B,Icon:y},setup(){return{prefixCls:"account-center-article",list:T,actions:M}}});function V(e,b,h,w,z,A){const f=n("Tag"),C=n("ListItemMeta"),I=n("Icon"),L=n("ListItem"),v=n("List");return s(),c(v,{"item-layout":"vertical",class:o(e.prefixCls)},{default:r(()=>[(s(!0),p(_,null,m(e.list,a=>(s(),c(L,{key:a.title},{default:r(()=>[x(C,null,{description:r(()=>[l("div",{class:o(`${e.prefixCls}__content`)},i(a.content),3)]),title:r(()=>[l("p",{class:o(`${e.prefixCls}__title`)},i(a.title),3),l("div",null,[(s(!0),p(_,null,m(a.description,t=>(s(),c(f,{key:t,class:"mb-2"},{default:r(()=>[d(i(t),1)]),_:2},1024))),128))])]),_:2},1024),l("div",null,[(s(!0),p(_,null,m(e.actions,t=>(s(),p("div",{key:t.text,class:o(`${e.prefixCls}__action`)},[t.icon?(s(),c(I,{key:0,class:o(`${e.prefixCls}__action-icon`),icon:t.icon,color:t.color},null,8,["class","icon","color"])):g("",!0),d(" "+i(t.text),1)],2))),128)),l("span",{class:o(`${e.prefixCls}__time`)},i(a.time),3)])]),_:2},1024))),128))]),_:1},8,["class"])}var J=$(N,[["render",V],["__scopeId","data-v-67062fde"]]);export{J as default};