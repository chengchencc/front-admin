var g=Object.defineProperty;var f=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var _=(t,o,e)=>o in t?g(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,v=(t,o)=>{for(var e in o||(o={}))k.call(o,e)&&_(t,e,o[e]);if(f)for(var e of f(o))R.call(o,e)&&_(t,e,o[e]);return t};import{au as x,a as w,w as C,x as y,bk as $,aw as r,o as s,k as l,B as h,n as F,p,y as i,z as m,l as E}from"./index.aba13b9e.js";import{R as V,S as W}from"./Step1.cdb17fc8.js";import T from"./Step2.aabcbc81.js";import b from"./Step3.30c5a4a9.js";import z from"./Step4.3ce8051c.js";import{P as I}from"./index.0bb76a94.js";import{S as a}from"./index.629ec4a5.js";import{r as j}from"./data.5b92a16a.js";import"./TableImg.1e3cabd6.js";import"./index.87c0c19d.js";import"./Checkbox.91c0a7ae.js";import"./index.48a8bb18.js";import"./BasicForm.98f50938.js";import"./index.18402e23.js";import"./index.a8ff5acb.js";import"./responsiveObserve.4ae63a96.js";import"./useFlexGapSupport.5aceff22.js";import"./_baseIteratee.88cab0d3.js";import"./_baseIsEqual.8092e4b4.js";import"./get.a1c1c04a.js";import"./findIndex.56030645.js";import"./toInteger.25ef3694.js";import"./isEqual.0af20ba9.js";import"./useSize.4701823f.js";import"./index.f835d4c3.js";import"./index.3ee94c40.js";import"./index.da60eaf0.js";import"./UpOutlined.c38880cf.js";import"./index.f9713a9f.js";import"./index.6b8902f9.js";import"./warning.ca82f8e0.js";import"./util.69498fc4.js";import"./Tree.fa4e64e2.js";import"./RedoOutlined.ed4e315b.js";import"./index.9cca30d8.js";import"./uniqBy.12eb99ec.js";import"./index.2d5060d5.js";import"./DeleteOutlined.1423e77c.js";import"./index.5c9c9354.js";import"./index.52781a27.js";import"./useWindowSizeFn.3d69ec7c.js";import"./FullscreenOutlined.580eb656.js";import"./index.4f6a0420.js";import"./uuid.2b29000c.js";import"./download.2a76f273.js";import"./base64Conver.08b9f4ec.js";import"./index.acfcda35.js";import"./index.7e09e114.js";import"./useForm.bfe01fc7.js";import"./useSortable.b8093ebf.js";import"./CaretDownFilled.b1507738.js";import"./scrollTo.f30cc5ed.js";import"./transButton.f6cbaf75.js";import"./index.cd0e794a.js";import"./useTable.e3d2cd99.js";import"./PlusSquareOutlined.4ba204d1.js";import"./index.87084691.js";import"./index.8de2e249.js";import"./index.679e1b34.js";import"./index.1abd4b99.js";import"./useBreakpoint.aa8c2b35.js";import"./useContentViewHeight.326ea27e.js";import"./index.0c2f3665.js";import"./ArrowLeftOutlined.c9d7e0af.js";const q=w({name:"FormStepPage",components:{RuleTree:V,Step1:W,Step2:T,Step3:b,Step4:z,PageWrapper:I,[a.name]:a,[a.Step.name]:a.Step},setup(){const t=C(0),o=C(j),e=y({initSetp2:!1,initSetp3:!1});function c(u){t.value++,e.initSetp2=!0,console.log(u)}function d(){t.value--}function S(u){t.value++,e.initSetp3=!0,console.log(u)}function n(){t.value=0,e.initSetp2=!1,e.initSetp3=!1}return v({treeData:o,current:t,handleStep1Next:c,handleStep2Next:S,handleRedo:n,handleStepPrev:d},$(e))}}),G={class:"step-form-form"},H={class:"mt-5"};function J(t,o,e,c,d,S){const n=r("a-step"),u=r("a-steps"),N=r("Step1"),D=r("Step2"),P=r("Step3"),A=r("Step4"),B=r("PageWrapper");return s(),l(B,{title:"\u5907\u6848\u89C4\u5219\u7F16\u6392",contentBackground:"",content:" \u901A\u8FC7\u8FD9\u4E2A\u529F\u80FD\u53EF\u4EE5\u5C06\u81EA\u52A8\u5907\u6848\u6240\u8FDB\u884C\u7684\u5404\u7C7B\u6821\u9A8C\u89C4\u5219\u8FDB\u884C\u7EDF\u4E00\u7F16\u6392\u3002",contentClass:"p-4"},{default:h(()=>[F("div",G,[p(u,{current:t.current},{default:h(()=>[p(n,{title:"\u914D\u7F6E\u6570\u636E\u5F55\u5165\u6821\u9A8C\u89C4\u5219"}),p(n,{title:"\u914D\u7F6E\u5408\u89C4\u6027\u6821\u9A8C\u89C4\u5219"}),p(n,{title:"\u914D\u7F6E\u5907\u6848\u4E1A\u52A1\u63D0\u4EA4\u89C4\u5219"}),p(n,{title:"\u5B8C\u6210\u914D\u7F6E"})]),_:1},8,["current"])]),F("div",H,[i(p(N,{onNext:t.handleStep1Next},null,8,["onNext"]),[[m,t.current===0]]),t.initSetp2?i((s(),l(D,{key:0,onPrev:t.handleStepPrev,onNext:t.handleStep2Next},null,8,["onPrev","onNext"])),[[m,t.current===1]]):E("",!0),i(p(P,{onPrev:t.handleStepPrev,onNext:t.handleStep2Next},null,8,["onPrev","onNext"]),[[m,t.current===2]]),t.initSetp3?i((s(),l(A,{key:1,onRedo:t.handleRedo},null,8,["onRedo"])),[[m,t.current===3]]):E("",!0)])]),_:1})}var oe=x(q,[["render",J],["__scopeId","data-v-aca36958"]]);export{oe as default};
