var E=Object.defineProperty;var S=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var _=(t,e,o)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,f=(t,e)=>{for(var o in e||(e={}))k.call(e,o)&&_(t,o,e[o]);if(S)for(var o of S(e))A.call(e,o)&&_(t,o,e[o]);return t};import{au as x,a as w,w as y,x as R,bk as D,aw as r,o as u,k as m,B as v,n as h,p as n,y as a,z as s,l as B}from"./index.4804300a.js";import $ from"./Step1.521984dd.js";import V from"./Step2.cb156a64.js";import W from"./Step3.8280cbbc.js";import{P as b}from"./index.86f2dbf6.js";import{S as i}from"./index.a767e70b.js";import"./BasicForm.6a80a3ef.js";import"./index.0c62ab03.js";import"./index.716c17fa.js";import"./responsiveObserve.dcad6fcd.js";import"./useFlexGapSupport.80df3ddb.js";import"./_baseIteratee.fd601a92.js";import"./_baseIsEqual.b58e8f82.js";import"./get.0b3d73ff.js";import"./findIndex.64769271.js";import"./toInteger.cb8f48a7.js";import"./isEqual.d085b836.js";import"./useSize.ea1bf5d1.js";import"./index.b31cd219.js";import"./index.aafc8171.js";import"./Checkbox.ed9ba07d.js";import"./index.b072982e.js";import"./index.8d4032f7.js";import"./index.4b18e1d8.js";import"./UpOutlined.7d204e9d.js";import"./index.f77551c2.js";import"./index.9c7c8f45.js";import"./warning.ca82f8e0.js";import"./util.911c028f.js";import"./Tree.d17c098e.js";import"./RedoOutlined.f42eea3d.js";import"./index.ea8a2f75.js";import"./uniqBy.a37949c3.js";import"./index.bf15c0c1.js";import"./DeleteOutlined.8ae61e5f.js";import"./index.7e49ec2b.js";import"./index.2fdf992b.js";import"./useWindowSizeFn.38c7676c.js";import"./FullscreenOutlined.6182337b.js";import"./index.5b9902c5.js";import"./uuid.2b29000c.js";import"./download.9c0a35ab.js";import"./base64Conver.08b9f4ec.js";import"./index.b8e933b2.js";import"./index.259bc711.js";import"./useForm.9f5f06ba.js";import"./data.2505cb7f.js";import"./index.bb84701f.js";import"./index.574bc28d.js";import"./index.699aa748.js";import"./index.1f68cb78.js";import"./useBreakpoint.3a1e9c1a.js";import"./useContentViewHeight.8fc9ee42.js";import"./index.583dbbd3.js";import"./transButton.342edbea.js";import"./ArrowLeftOutlined.0255904f.js";const z=w({name:"FormStepPage",components:{Step1:$,Step2:V,Step3:W,PageWrapper:b,[i.name]:i,[i.Step.name]:i.Step},setup(){const t=y(0),e=R({initSetp2:!1,initSetp3:!1});function o(p){t.value++,e.initSetp2=!0,console.log(p)}function c(){t.value--}function l(p){t.value++,e.initSetp3=!0,console.log(p)}function d(){t.value=0,e.initSetp2=!1,e.initSetp3=!1}return f({current:t,handleStep1Next:o,handleStep2Next:l,handleRedo:d,handleStepPrev:c},D(e))}}),I={class:"step-form-form"},j={class:"mt-5"};function q(t,e,o,c,l,d){const p=r("a-step"),F=r("a-steps"),C=r("Step1"),N=r("Step2"),P=r("Step3"),g=r("PageWrapper");return u(),m(g,{title:"\u5206\u6B65\u8868\u5355",contentBackground:"",content:" \u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",contentClass:"p-4"},{default:v(()=>[h("div",I,[n(F,{current:t.current},{default:v(()=>[n(p,{title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F"}),n(p,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"}),n(p,{title:"\u5B8C\u6210"})]),_:1},8,["current"])]),h("div",j,[a(n(C,{onNext:t.handleStep1Next},null,8,["onNext"]),[[s,t.current===0]]),t.initSetp2?a((u(),m(N,{key:0,onPrev:t.handleStepPrev,onNext:t.handleStep2Next},null,8,["onPrev","onNext"])),[[s,t.current===1]]):B("",!0),t.initSetp3?a((u(),m(P,{key:1,onRedo:t.handleRedo},null,8,["onRedo"])),[[s,t.current===2]]):B("",!0)])]),_:1})}var Kt=x(z,[["render",q],["__scopeId","data-v-46d6ddea"]]);export{Kt as default};
