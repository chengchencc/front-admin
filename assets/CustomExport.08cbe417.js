import{B as d}from"./TableImg.30884f21.js";import"./BasicForm.11d2168e.js";import{E as f}from"./index.5e21592d.js";import{c as _,d as s,j as C}from"./data.aeb9dac4.js";import{b as E}from"./index.1454835c.js";import{P as B}from"./index.8b66a92a.js";import{au as F,a as x,aw as t,o as b,k as g,B as r,p,C as M}from"./index.7b1e5fc9.js";import"./index.ab41b802.js";import"./Checkbox.4904982c.js";import"./index.513077c3.js";import"./useForm.18e1f5bf.js";import"./index.305f1f80.js";import"./UpOutlined.db756a99.js";import"./index.bd088635.js";import"./index.053c40a9.js";import"./isEqual.4ae419fa.js";import"./_baseIsEqual.54c27c7e.js";import"./uuid.2b29000c.js";import"./index.19028502.js";import"./uniqBy.c8a5160e.js";import"./_baseIteratee.7060e85a.js";import"./get.0ab54a31.js";import"./findIndex.27e98ef8.js";import"./toInteger.7a7fb8cc.js";import"./util.f212547d.js";import"./warning.ca82f8e0.js";import"./index.d98d380c.js";import"./DeleteOutlined.5daebfc6.js";import"./useWindowSizeFn.f095e4df.js";import"./index.bf917f2e.js";import"./useSortable.8d313cde.js";import"./RedoOutlined.9fdd7178.js";import"./FullscreenOutlined.0e699843.js";import"./CaretDownFilled.4103650a.js";import"./scrollTo.eca98175.js";import"./index.66e2481e.js";import"./index.5095bc23.js";import"./index.a6d6afc3.js";import"./index.78938988.js";import"./responsiveObserve.6d19c0fe.js";import"./useFlexGapSupport.4094887b.js";import"./useSize.740572dc.js";import"./index.74193284.js";import"./Tree.92e3e4bf.js";import"./index.dfa26d89.js";import"./download.5fa85e56.js";import"./base64Conver.08b9f4ec.js";import"./index.6440cd5b.js";import"./index.b05a4ede.js";import"./index.a24b83e2.js";import"./index.ddfe03a6.js";import"./useBreakpoint.90b6ad37.js";import"./useContentViewHeight.640d93af.js";import"./index.edc8e0a4.js";import"./ArrowLeftOutlined.9182bb4c.js";const k=x({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:B},setup(){function o({filename:i,bookType:a}){C({data:s,filename:i,write2excelOpts:{bookType:a}})}const[e,{openModal:m}]=E();return{defaultHeader:o,columns:_,data:s,register:e,openModal:m}}});function A(o,e,m,i,a,S){const n=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return b(),g(l,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:r(()=>[p(u,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[p(n,{onClick:o.openModal},{default:r(()=>[M(" \u5BFC\u51FA ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),p(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var $o=F(k,[["render",A]]);export{$o as default};
