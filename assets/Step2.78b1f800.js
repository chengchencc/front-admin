var f=(a,s,i)=>new Promise((c,r)=>{var _=o=>{try{t(i.next(o))}catch(u){r(u)}},m=o=>{try{t(i.throw(o))}catch(u){r(u)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,m);t((i=i.apply(a,s)).next())});import{B as v}from"./BasicForm.33be6605.js";import{u as E}from"./useForm.e9f1e61e.js";import{step2Schemas as b}from"./data.2505cb7f.js";import{au as C,a as x,aw as p,o as g,i as h,p as e,B as n,C as l}from"./index.a4184510.js";import{A as B}from"./index.61ad094d.js";import{D}from"./index.b3c2b46d.js";import{D as d}from"./index.5a914d38.js";import"./index.61947057.js";import"./index.5389ab9f.js";import"./responsiveObserve.74da7233.js";import"./useFlexGapSupport.22cad392.js";import"./_baseIteratee.e5042e06.js";import"./_baseIsEqual.022cfbb5.js";import"./get.e620704d.js";import"./findIndex.657e235c.js";import"./toInteger.58eec37d.js";import"./isEqual.297bdb1e.js";import"./useSize.6d3e9c8f.js";import"./index.f9d35bfd.js";import"./Checkbox.341a0e84.js";import"./index.40118052.js";import"./index.42ece229.js";import"./index.69d9b4a1.js";import"./UpOutlined.c620fc88.js";import"./index.e572ad54.js";import"./index.453418bd.js";import"./warning.ca82f8e0.js";import"./util.89eee439.js";import"./Tree.4c3dc6e1.js";import"./RedoOutlined.59e0b862.js";import"./index.761088f5.js";import"./uniqBy.634fce4d.js";import"./index.88fce616.js";import"./DeleteOutlined.36a39901.js";import"./index.380f5c41.js";import"./useWindowSizeFn.c1349caf.js";import"./FullscreenOutlined.06198031.js";import"./index.8d369d29.js";import"./uuid.2b29000c.js";import"./download.8dd6afc4.js";import"./base64Conver.08b9f4ec.js";import"./index.8b1a4278.js";import"./index.b2270280.js";const A=x({components:{BasicForm:v,[B.name]:B,[D.name]:D,[d.name]:d,[d.Item.name]:d.Item},emits:["next","prev"],setup(a,{emit:s}){const[i,{validate:c,setProps:r}]=E({labelWidth:80,schemas:b,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:m});function _(){return f(this,null,function*(){s("prev")})}function m(){return f(this,null,function*(){try{const t=yield c();r({submitButtonOptions:{loading:!0}}),setTimeout(()=>{r({submitButtonOptions:{loading:!1}}),s("next",t)},1500)}catch(t){}})}return{register:i}}}),y={class:"step2"};function O(a,s,i,c,r,_){const m=p("a-alert"),t=p("a-descriptions-item"),o=p("a-descriptions"),u=p("a-divider"),F=p("BasicForm");return g(),h("div",y,[e(m,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),e(o,{column:1,class:"mt-5"},{default:n(()=>[e(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:n(()=>[l(" ant-design@alipay.com ")]),_:1}),e(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:n(()=>[l(" test@example.com ")]),_:1}),e(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:n(()=>[l(" Vben ")]),_:1}),e(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:n(()=>[l(" 500\u5143 ")]),_:1})]),_:1}),e(u),e(F,{onRegister:a.register},null,8,["onRegister"])])}var vt=C(A,[["render",O],["__scopeId","data-v-01481d2f"]]);export{vt as default};