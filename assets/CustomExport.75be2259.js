import{B as d}from"./TableImg.75b343b7.js";import"./BasicForm.a4ec12e5.js";import{E as f}from"./index.3d6440ed.js";import{c as _,d as s,j as C}from"./data.125c7481.js";import{u as E}from"./index.cf77662e.js";import{P as B}from"./index.4fc42462.js";import{au as F,a as x,aw as t,o as g,k as b,B as r,p,C as M}from"./index.ac094c1a.js";import"./index.898d86e5.js";import"./Checkbox.a75103c0.js";import"./index.aa5ff920.js";import"./useForm.ba331bff.js";import"./index.1c127be3.js";import"./UpOutlined.288cc8f8.js";import"./index.b49e189c.js";import"./index.d3605325.js";import"./isEqual.8db4730b.js";import"./_baseIsEqual.0a6c69ba.js";import"./uuid.2b29000c.js";import"./index.39737088.js";import"./uniqBy.6c7f8abc.js";import"./_baseIteratee.ab0bd894.js";import"./get.77a8764f.js";import"./findIndex.ada0a456.js";import"./toInteger.3e4658ba.js";import"./util.92a724ca.js";import"./warning.ca82f8e0.js";import"./index.f7967e6e.js";import"./DeleteOutlined.35136336.js";import"./useWindowSizeFn.d402f620.js";import"./index.c837e7c4.js";import"./useSortable.c4e403f1.js";import"./RedoOutlined.fc634378.js";import"./FullscreenOutlined.e6b1e7b6.js";import"./CaretDownFilled.ea5ee032.js";import"./scrollTo.a1dae8cc.js";import"./transButton.3b98ebc6.js";import"./index.3a7a10e8.js";import"./index.e8396954.js";import"./index.18ac8270.js";import"./index.f8ca73f1.js";import"./responsiveObserve.215173d9.js";import"./useFlexGapSupport.30ffab55.js";import"./useSize.8e66fcdc.js";import"./index.eceb37c5.js";import"./Tree.35762ca1.js";import"./index.f4f15c4e.js";import"./download.48cbdc0b.js";import"./base64Conver.08b9f4ec.js";import"./index.7a765935.js";import"./index.6dcbf63c.js";import"./index.eeb46555.js";import"./index.87d849bc.js";import"./useBreakpoint.1f3756ad.js";import"./useContentViewHeight.f40a2028.js";import"./index.631565e4.js";import"./ArrowLeftOutlined.2a151e97.js";const k=x({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:B},setup(){function o({filename:i,bookType:a}){C({data:s,filename:i,write2excelOpts:{bookType:a}})}const[e,{openModal:m}]=E();return{defaultHeader:o,columns:_,data:s,register:e,openModal:m}}});function A(o,e,m,i,a,S){const n=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return g(),b(l,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:r(()=>[p(u,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[p(n,{onClick:o.openModal},{default:r(()=>[M(" \u5BFC\u51FA ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),p(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var ho=F(k,[["render",A]]);export{ho as default};
