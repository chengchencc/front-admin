import{au as s,a as p,b as m,c as d,f as l,aw as c,o as u,i as h,n as f,t as C,p as g,ax as _,r as v}from"./index.382fc83e.js";import{S as y}from"./index.ff31cd23.js";import{b as S}from"./index.f885a6d9.js";import"./index.a90e9403.js";import"./index.09c8ed3d.js";import"./ArrowLeftOutlined.adfd60c1.js";import"./isEqual.a078e6bd.js";import"./_baseIsEqual.cdc22aaf.js";import"./index.d14f017e.js";import"./index.88a96b17.js";import"./FullscreenOutlined.b8bf3642.js";import"./index.7f69e7bd.js";import"./useWindowSizeFn.435c6f18.js";import"./useContentViewHeight.7dcda93a.js";import"./uniqBy.093644f1.js";import"./_baseIteratee.54e5789e.js";import"./get.e5e78019.js";import"./index.09af3e8b.js";import"./warning.ca82f8e0.js";import"./UpOutlined.97c9d97c.js";import"./PlusOutlined.5c214451.js";import"./RedoOutlined.db466b1c.js";import"./useSortable.7edae39b.js";import"./index.84b329f5.js";import"./lock.9d372ec6.js";const b=p({name:"SwitchItem",components:{Switch:y},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=m("setting-switch-item"),{t:o}=d(),n=l(()=>e.def?{checked:e.def}:{});function i(r){e.event&&S(e.event,r)}return{prefixCls:t,t:o,handleChange:i,getBindValue:n}}});function w(e,t,o,n,i,r){const a=c("Switch");return u(),h("div",{class:v(e.prefixCls)},[f("span",null,C(e.title),1),g(a,_(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var U=s(b,[["render",w],["__scopeId","data-v-440e72fd"]]);export{U as default};
