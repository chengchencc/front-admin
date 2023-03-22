import{au as M,a as $,cF as U,bf as C,bA as D,aE as b,b as A,c as N,v as O,f as S,aw as t,o as n,i as E,p as r,B as d,k as f,l as _,n as a,r as s,t as x,F as B,aW as P}from"./index.aba13b9e.js";import{D as R}from"./siteSetting.8d69761e.js";import{c as y,u as V}from"./index.c512fa6e.js";import{u as F}from"./index.52781a27.js";import{h as T}from"./header.d801b988.js";import"./FullscreenOutlined.580eb656.js";import"./index.ffc4cfcd.js";import"./useWindowSizeFn.3d69ec7c.js";import"./useContentViewHeight.326ea27e.js";import"./uniqBy.12eb99ec.js";import"./_baseIteratee.88cab0d3.js";import"./_baseIsEqual.8092e4b4.js";import"./get.a1c1c04a.js";import"./index.4a8d50ec.js";import"./index.a5d1ca12.js";import"./warning.ca82f8e0.js";import"./UpOutlined.c38880cf.js";import"./PlusOutlined.0abf66eb.js";import"./RedoOutlined.ed4e315b.js";import"./useSortable.b8093ebf.js";import"./index.063fc39b.js";import"./lock.51f2e2a2.js";import"./isEqual.0af20ba9.js";const W=$({name:"UserDropdown",components:{Dropdown:U,Menu:C,MenuItem:y(()=>D(()=>import("./DropMenuItem.4ef0283b.js"),["assets/DropMenuItem.4ef0283b.js","assets/index.aba13b9e.js","assets/index.798fa944.css"])),MenuDivider:C.Divider,LockAction:y(()=>D(()=>import("./LockModal.796bca21.js"),["assets/LockModal.796bca21.js","assets/LockModal.0068f88c.css","assets/index.aba13b9e.js","assets/index.798fa944.css","assets/index.52781a27.js","assets/index.f6def211.css","assets/useWindowSizeFn.3d69ec7c.js","assets/FullscreenOutlined.580eb656.js","assets/isEqual.0af20ba9.js","assets/_baseIsEqual.8092e4b4.js","assets/BasicForm.98f50938.js","assets/BasicForm.6e70db93.css","assets/index.18402e23.js","assets/index.421e7265.css","assets/index.a8ff5acb.js","assets/index.ccc15a38.css","assets/responsiveObserve.4ae63a96.js","assets/useFlexGapSupport.5aceff22.js","assets/_baseIteratee.88cab0d3.js","assets/get.a1c1c04a.js","assets/findIndex.56030645.js","assets/toInteger.25ef3694.js","assets/useSize.4701823f.js","assets/index.f835d4c3.js","assets/index.17eb4c41.css","assets/index.87c0c19d.js","assets/index.db675fd8.css","assets/Checkbox.91c0a7ae.js","assets/index.48a8bb18.js","assets/index.0267bd07.css","assets/index.3ee94c40.js","assets/index.c4896195.css","assets/index.da60eaf0.js","assets/index.e0a015a1.css","assets/UpOutlined.c38880cf.js","assets/index.f9713a9f.js","assets/index.9604f5a2.css","assets/index.6b8902f9.js","assets/index.7b8b5e30.css","assets/warning.ca82f8e0.js","assets/util.69498fc4.js","assets/Tree.fa4e64e2.js","assets/RedoOutlined.ed4e315b.js","assets/index.9cca30d8.js","assets/index.23ef50df.css","assets/uniqBy.12eb99ec.js","assets/index.2d5060d5.js","assets/index.592e9aed.css","assets/DeleteOutlined.1423e77c.js","assets/index.5c9c9354.js","assets/index.06de4903.css","assets/index.4f6a0420.js","assets/index.3c104d60.css","assets/uuid.2b29000c.js","assets/download.2a76f273.js","assets/base64Conver.08b9f4ec.js","assets/index.acfcda35.js","assets/index.cb030764.css","assets/index.7e09e114.js","assets/useForm.bfe01fc7.js","assets/lock.51f2e2a2.js","assets/header.d801b988.js"]))},props:{theme:b.oneOf(["dark","light"])},setup(){const{prefixCls:e}=A("header-user-dropdown"),{t:g}=N(),{getShowDoc:k,getUseLockPage:h}=V(),i=O(),v=S(()=>{const{realName:u="",avatar:L,desc:I}=i.getUserInfo||{};return{realName:u,avatar:L||T,desc:I}}),[o,{openModal:p}]=F();function l(){p(!0)}function c(){i.confirmLoginOut()}function m(){P(R)}function w(u){switch(u.key){case"logout":c();break;case"doc":m();break;case"lock":l();break}}return{prefixCls:e,t:g,getUserInfo:v,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}}),z=["src"];function H(e,g,k,h,i,v){const o=t("MenuItem"),p=t("MenuDivider"),l=t("Menu"),c=t("Dropdown"),m=t("LockAction");return n(),E(B,null,[r(c,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:d(()=>[r(l,{onClick:e.handleMenuClick},{default:d(()=>[e.getShowDoc?(n(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(n(),f(p,{key:1})):_("",!0),e.getUseLockPage?(n(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:d(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,z),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},x(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),r(m,{onRegister:e.register},null,8,["onRegister"])],64)}var fe=M(W,[["render",H]]);export{fe as default};
