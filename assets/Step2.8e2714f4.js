var f=(a,s,i)=>new Promise((c,r)=>{var _=o=>{try{t(i.next(o))}catch(u){r(u)}},m=o=>{try{t(i.throw(o))}catch(u){r(u)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,m);t((i=i.apply(a,s)).next())});import{B as v}from"./BasicForm.d765cc9c.js";import{u as E}from"./useForm.d0f78599.js";import{step2Schemas as b}from"./data.2505cb7f.js";import{a as C,au as x,aw as p,o as g,i as h,p as e,B as n,C as l}from"./index.0afb6b1a.js";import{A as B}from"./index.35e066f0.js";import{D}from"./index.b5e58356.js";import{D as d}from"./index.d79d3420.js";import"./index.f9b7668c.js";import"./index.335339a9.js";import"./responsiveObserve.8bc71b85.js";import"./useFlexGapSupport.358e75d5.js";import"./_baseIteratee.ccaeac66.js";import"./_baseIsEqual.b9ab726e.js";import"./get.cbf01dd9.js";import"./findIndex.bebb7dcc.js";import"./toInteger.385c5e34.js";import"./isEqual.c3167c03.js";import"./useSize.b98aa611.js";import"./index.0c92bc5e.js";import"./Checkbox.b94383d9.js";import"./index.f188e1cd.js";import"./index.f3dc3acc.js";import"./index.a38530f5.js";import"./UpOutlined.53f4e913.js";import"./index.a86fe11c.js";import"./index.752237d9.js";import"./warning.ca82f8e0.js";import"./util.5b402eb8.js";import"./Tree.c194a51d.js";import"./RedoOutlined.8a38e0cf.js";import"./index.3608aaa4.js";import"./uniqBy.1231b8aa.js";import"./index.b920e176.js";import"./DeleteOutlined.7747d063.js";import"./index.afe49db0.js";import"./useWindowSizeFn.b437c5f3.js";import"./FullscreenOutlined.f42c8b10.js";import"./index.9ecfb69b.js";import"./uuid.2b29000c.js";import"./download.8e655723.js";import"./base64Conver.08b9f4ec.js";import"./index.487b659d.js";import"./index.3fdd4c89.js";const A=C({components:{BasicForm:v,[B.name]:B,[D.name]:D,[d.name]:d,[d.Item.name]:d.Item},emits:["next","prev"],setup(a,{emit:s}){const[i,{validate:c,setProps:r}]=E({labelWidth:80,schemas:b,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:m});function _(){return f(this,null,function*(){s("prev")})}function m(){return f(this,null,function*(){try{const t=yield c();r({submitButtonOptions:{loading:!0}}),setTimeout(()=>{r({submitButtonOptions:{loading:!1}}),s("next",t)},1500)}catch(t){}})}return{register:i}}}),y={class:"step2"};function O(a,s,i,c,r,_){const m=p("a-alert"),t=p("a-descriptions-item"),o=p("a-descriptions"),u=p("a-divider"),F=p("BasicForm");return g(),h("div",y,[e(m,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),e(o,{column:1,class:"mt-5"},{default:n(()=>[e(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:n(()=>[l(" ant-design@alipay.com ")]),_:1}),e(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:n(()=>[l(" test@example.com ")]),_:1}),e(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:n(()=>[l(" Vben ")]),_:1}),e(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:n(()=>[l(" 500\u5143 ")]),_:1})]),_:1}),e(u),e(F,{onRegister:a.register},null,8,["onRegister"])])}var vt=x(A,[["render",O],["__scopeId","data-v-01481d2f"]]);export{vt as default};
