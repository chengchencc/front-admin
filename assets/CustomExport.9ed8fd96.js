import{B as d}from"./TableImg.60cacf2c.js";import"./BasicForm.f7f8905e.js";import{E as f}from"./index.0ead7c33.js";import{c as _,d as s,j as C}from"./data.952e5191.js";import{b as E}from"./index.1555b7e0.js";import{P as B}from"./index.d5074f42.js";import{au as F,a as x,aw as t,o as b,k as g,B as r,p,C as M}from"./index.ad6ac5fb.js";import"./index.58e3fd90.js";import"./Checkbox.a1cb9eec.js";import"./index.57a2ab29.js";import"./useForm.b92ab3ef.js";import"./index.169482b0.js";import"./UpOutlined.b745c53d.js";import"./index.b88b6b33.js";import"./index.0e203ac2.js";import"./isEqual.40f1f832.js";import"./_baseIsEqual.b3ba234b.js";import"./uuid.2b29000c.js";import"./index.ae4575ad.js";import"./uniqBy.ddc3bad0.js";import"./_baseIteratee.c550d843.js";import"./get.ebcb9447.js";import"./findIndex.b3576692.js";import"./toInteger.3c27efae.js";import"./util.906615f8.js";import"./warning.ca82f8e0.js";import"./index.3e48ae68.js";import"./DeleteOutlined.35423e67.js";import"./useWindowSizeFn.6bdec598.js";import"./index.08b88b45.js";import"./useSortable.b7d15d3b.js";import"./RedoOutlined.f839ba46.js";import"./FullscreenOutlined.39fa5eb7.js";import"./CaretDownFilled.bf097aa7.js";import"./scrollTo.3c22c0e9.js";import"./index.c1cc5858.js";import"./index.c733f737.js";import"./index.7cfc9302.js";import"./index.2c74e50b.js";import"./responsiveObserve.0422b7f9.js";import"./useFlexGapSupport.73ea3784.js";import"./useSize.44d2f99f.js";import"./index.f4e24e46.js";import"./Tree.ed2b8699.js";import"./index.89d05e2d.js";import"./download.e7abefc8.js";import"./base64Conver.08b9f4ec.js";import"./index.f3d5407a.js";import"./index.3a2b67e8.js";import"./index.a09bd6da.js";import"./index.cd9f2d75.js";import"./useBreakpoint.48fee185.js";import"./useContentViewHeight.d7fa3bb5.js";import"./index.bb2f2a63.js";import"./ArrowLeftOutlined.b747bd72.js";const k=x({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:B},setup(){function o({filename:i,bookType:a}){C({data:s,filename:i,write2excelOpts:{bookType:a}})}const[e,{openModal:m}]=E();return{defaultHeader:o,columns:_,data:s,register:e,openModal:m}}});function A(o,e,m,i,a,S){const n=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return b(),g(l,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:r(()=>[p(u,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[p(n,{onClick:o.openModal},{default:r(()=>[M(" \u5BFC\u51FA ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),p(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var $o=F(k,[["render",A]]);export{$o as default};
