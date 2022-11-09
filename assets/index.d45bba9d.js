import{au as M,a as $,cG as b,bg as C,bB as D,aE as U,b as N,c as O,v as S,f as A,aw as t,o as n,i as B,p as r,B as d,k as f,l as _,n as a,r as s,t as E,F as x,aX as P}from"./index.da4313ed.js";import{D as R}from"./siteSetting.c485f07c.js";import{c as y,u as V}from"./index.0ef3efbf.js";import{b as T}from"./index.9a63394d.js";import{h as F}from"./header.d801b988.js";import"./FullscreenOutlined.2307bbef.js";import"./index.2a7383a5.js";import"./useWindowSizeFn.eb5b2cc5.js";import"./useContentViewHeight.f1980a07.js";import"./uniqBy.21b015da.js";import"./_baseIteratee.c2a94fbf.js";import"./_baseIsEqual.c5abd7f9.js";import"./get.e2b72cba.js";import"./index.9d425117.js";import"./index.7d197985.js";import"./warning.ca82f8e0.js";import"./UpOutlined.7122e7b5.js";import"./PlusOutlined.762749ef.js";import"./RedoOutlined.2b242497.js";import"./useSortable.5af56706.js";import"./index.b5cb0259.js";import"./lock.f7b7a519.js";import"./isEqual.13863e21.js";const z=$({name:"UserDropdown",components:{Dropdown:b,Menu:C,MenuItem:y(()=>D(()=>import("./DropMenuItem.9d774b5d.js"),["assets/DropMenuItem.9d774b5d.js","assets/index.da4313ed.js","assets/index.798fa944.css"])),MenuDivider:C.Divider,LockAction:y(()=>D(()=>import("./LockModal.54e5dd13.js"),["assets/LockModal.54e5dd13.js","assets/LockModal.0068f88c.css","assets/index.da4313ed.js","assets/index.798fa944.css","assets/index.9a63394d.js","assets/index.f6def211.css","assets/useWindowSizeFn.eb5b2cc5.js","assets/FullscreenOutlined.2307bbef.js","assets/isEqual.13863e21.js","assets/_baseIsEqual.c5abd7f9.js","assets/BasicForm.2aa30c4a.js","assets/BasicForm.6e70db93.css","assets/index.caf27347.js","assets/index.421e7265.css","assets/index.ebcfc250.js","assets/index.ccc15a38.css","assets/responsiveObserve.72a48b47.js","assets/useFlexGapSupport.81b3a88e.js","assets/_baseIteratee.c2a94fbf.js","assets/get.e2b72cba.js","assets/findIndex.77ae307c.js","assets/toInteger.92ea4f7e.js","assets/useSize.d957ad9d.js","assets/index.aeb8c0e3.js","assets/index.17eb4c41.css","assets/index.06ee136a.js","assets/index.db675fd8.css","assets/Checkbox.6a81adb3.js","assets/index.e014ecd5.js","assets/index.0267bd07.css","assets/index.34185b62.js","assets/index.c4896195.css","assets/index.e5dd25bf.js","assets/index.e0a015a1.css","assets/UpOutlined.7122e7b5.js","assets/index.a6dc2ca3.js","assets/index.9604f5a2.css","assets/index.e753562d.js","assets/index.7b8b5e30.css","assets/warning.ca82f8e0.js","assets/util.8ccb2a01.js","assets/Tree.8435820f.js","assets/RedoOutlined.2b242497.js","assets/index.20906073.js","assets/index.23ef50df.css","assets/uniqBy.21b015da.js","assets/index.cd0eb5c4.js","assets/index.592e9aed.css","assets/DeleteOutlined.0282521a.js","assets/index.8424fa42.js","assets/index.06de4903.css","assets/index.dc7d82a6.js","assets/index.3c104d60.css","assets/uuid.2b29000c.js","assets/download.c05e4497.js","assets/base64Conver.08b9f4ec.js","assets/index.86f02a74.js","assets/index.cb030764.css","assets/index.83f5641e.js","assets/useForm.c10ea13b.js","assets/lock.f7b7a519.js","assets/header.d801b988.js"]))},props:{theme:U.oneOf(["dark","light"])},setup(){const{prefixCls:e}=N("header-user-dropdown"),{t:g}=O(),{getShowDoc:k,getUseLockPage:h}=V(),i=S(),v=A(()=>{const{realName:u="",avatar:L,desc:I}=i.getUserInfo||{};return{realName:u,avatar:L||F,desc:I}}),[o,{openModal:p}]=T();function l(){p(!0)}function c(){i.confirmLoginOut()}function m(){P(R)}function w(u){switch(u.key){case"logout":c();break;case"doc":m();break;case"lock":l();break}}return{prefixCls:e,t:g,getUserInfo:v,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}}),G=["src"];function H(e,g,k,h,i,v){const o=t("MenuItem"),p=t("MenuDivider"),l=t("Menu"),c=t("Dropdown"),m=t("LockAction");return n(),B(x,null,[r(c,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:d(()=>[r(l,{onClick:e.handleMenuClick},{default:d(()=>[e.getShowDoc?(n(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(n(),f(p,{key:1})):_("",!0),e.getUseLockPage?(n(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:d(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,G),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},E(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),r(m,{onRegister:e.register},null,8,["onRegister"])],64)}var fe=M(z,[["render",H]]);export{fe as default};
