import{au as s,a as p,b as m,c as d,f as l,aw as c,o as u,i as h,n as f,t as C,p as g,ax as _,r as v}from"./index.aba13b9e.js";import{S as y}from"./index.f9713a9f.js";import{b as S}from"./index.e0e0f89d.js";import"./index.4509807f.js";import"./index.4a8d50ec.js";import"./ArrowLeftOutlined.c9d7e0af.js";import"./isEqual.0af20ba9.js";import"./_baseIsEqual.8092e4b4.js";import"./index.f835d4c3.js";import"./index.c512fa6e.js";import"./FullscreenOutlined.580eb656.js";import"./index.ffc4cfcd.js";import"./useWindowSizeFn.3d69ec7c.js";import"./useContentViewHeight.326ea27e.js";import"./uniqBy.12eb99ec.js";import"./_baseIteratee.88cab0d3.js";import"./get.a1c1c04a.js";import"./index.a5d1ca12.js";import"./warning.ca82f8e0.js";import"./UpOutlined.c38880cf.js";import"./PlusOutlined.0abf66eb.js";import"./RedoOutlined.ed4e315b.js";import"./useSortable.b8093ebf.js";import"./index.063fc39b.js";import"./lock.51f2e2a2.js";const b=p({name:"SwitchItem",components:{Switch:y},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=m("setting-switch-item"),{t:o}=d(),n=l(()=>e.def?{checked:e.def}:{});function i(r){e.event&&S(e.event,r)}return{prefixCls:t,t:o,handleChange:i,getBindValue:n}}});function w(e,t,o,n,i,r){const a=c("Switch");return u(),h("div",{class:v(e.prefixCls)},[f("span",null,C(e.title),1),g(a,_(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var U=s(b,[["render",w],["__scopeId","data-v-440e72fd"]]);export{U as default};
