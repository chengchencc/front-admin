var f=(a,s,i)=>new Promise((c,r)=>{var _=o=>{try{t(i.next(o))}catch(u){r(u)}},m=o=>{try{t(i.throw(o))}catch(u){r(u)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,m);t((i=i.apply(a,s)).next())});import{B as v}from"./BasicForm.98ef7450.js";import{u as E}from"./useForm.2169bbec.js";import{step2Schemas as b}from"./data.2505cb7f.js";import{au as C,a as x,aw as p,o as g,i as h,p as e,B as n,C as l}from"./index.91c78518.js";import{A as B}from"./index.7cd6cb50.js";import{D}from"./index.989cc525.js";import{D as d}from"./index.01a64973.js";import"./index.41e94487.js";import"./index.f1d72b26.js";import"./responsiveObserve.65e938a4.js";import"./useFlexGapSupport.33a77d25.js";import"./_baseIteratee.c981f53f.js";import"./_baseIsEqual.816e480b.js";import"./get.2c776a61.js";import"./findIndex.0570347c.js";import"./toInteger.078e120d.js";import"./isEqual.6a61b02c.js";import"./useSize.495b1475.js";import"./index.88f1e948.js";import"./Checkbox.9cabff11.js";import"./index.4492b02f.js";import"./index.7de12fa0.js";import"./index.4240517a.js";import"./UpOutlined.e4286575.js";import"./index.88fb2e9b.js";import"./index.495ffb40.js";import"./warning.ca82f8e0.js";import"./util.3aa28320.js";import"./Tree.155e87a6.js";import"./RedoOutlined.55ab8ef7.js";import"./index.5a21fcd9.js";import"./uniqBy.c07792ae.js";import"./index.bd985330.js";import"./DeleteOutlined.b9c6996f.js";import"./index.9784102a.js";import"./useWindowSizeFn.2731919f.js";import"./FullscreenOutlined.afbc26d0.js";import"./index.d7154bf4.js";import"./uuid.2b29000c.js";import"./download.ae181d08.js";import"./base64Conver.08b9f4ec.js";import"./index.2eaf87ac.js";import"./index.38e5c16b.js";const A=x({components:{BasicForm:v,[B.name]:B,[D.name]:D,[d.name]:d,[d.Item.name]:d.Item},emits:["next","prev"],setup(a,{emit:s}){const[i,{validate:c,setProps:r}]=E({labelWidth:80,schemas:b,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:m});function _(){return f(this,null,function*(){s("prev")})}function m(){return f(this,null,function*(){try{const t=yield c();r({submitButtonOptions:{loading:!0}}),setTimeout(()=>{r({submitButtonOptions:{loading:!1}}),s("next",t)},1500)}catch(t){}})}return{register:i}}}),y={class:"step2"};function O(a,s,i,c,r,_){const m=p("a-alert"),t=p("a-descriptions-item"),o=p("a-descriptions"),u=p("a-divider"),F=p("BasicForm");return g(),h("div",y,[e(m,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),e(o,{column:1,class:"mt-5"},{default:n(()=>[e(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:n(()=>[l(" ant-design@alipay.com ")]),_:1}),e(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:n(()=>[l(" test@example.com ")]),_:1}),e(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:n(()=>[l(" Vben ")]),_:1}),e(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:n(()=>[l(" 500\u5143 ")]),_:1})]),_:1}),e(u),e(F,{onRegister:a.register},null,8,["onRegister"])])}var vt=C(A,[["render",O],["__scopeId","data-v-01481d2f"]]);export{vt as default};