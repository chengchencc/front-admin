import{au as m,a as l,dg as c,b as d,aw as u,o as r,i as o,F as C,az as _,r as p,bu as f,p as k}from"./index.91c78518.js";import{b as h}from"./index.3e886fbb.js";import"./index.a2f9d0fa.js";import"./index.c4e4faa7.js";import"./ArrowLeftOutlined.9a154523.js";import"./isEqual.6a61b02c.js";import"./_baseIsEqual.816e480b.js";import"./index.989cc525.js";import"./index.106c7eea.js";import"./FullscreenOutlined.afbc26d0.js";import"./index.283158f4.js";import"./useWindowSizeFn.2731919f.js";import"./useContentViewHeight.e0cb1840.js";import"./uniqBy.c07792ae.js";import"./_baseIteratee.c981f53f.js";import"./get.2c776a61.js";import"./index.2f381582.js";import"./warning.ca82f8e0.js";import"./UpOutlined.e4286575.js";import"./PlusOutlined.19f392eb.js";import"./RedoOutlined.55ab8ef7.js";import"./useSortable.67718d45.js";import"./index.9fda6e92.js";import"./lock.ef43b857.js";const v=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:i}=d("setting-theme-picker");function n(s){e.event&&h(e.event,s)}return{prefixCls:i,handleClick:n}}}),y=["onClick"];function g(e,i,n,s,$,b){const a=u("CheckOutlined");return r(),o("div",{class:p(e.prefixCls)},[(r(!0),o(C,null,_(e.colorList||[],t=>(r(),o("span",{key:t,onClick:z=>e.handleClick(t),class:p([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(a)],14,y))),128))],2)}var U=m(v,[["render",g]]);export{U as default};