var d=(r,u,o)=>new Promise((p,e)=>{var m=t=>{try{i(o.next(t))}catch(a){e(a)}},s=t=>{try{i(o.throw(t))}catch(a){e(a)}},i=t=>t.done?p(t.value):Promise.resolve(t.value).then(m,s);i((o=o.apply(r,u)).next())});import{P as F}from"./index.7f4f8797.js";import{B as _}from"./BasicForm.33be6605.js";import{u as w}from"./useForm.e9f1e61e.js";import{au as C,a as h,aw as n,o as E,k as g,B as c,n as f,p as l,C as B}from"./index.a4184510.js";import"./index.00036abf.js";import"./index.97a5ac83.js";import"./useBreakpoint.3d7302fa.js";import"./responsiveObserve.74da7233.js";import"./useSize.6d3e9c8f.js";import"./useWindowSizeFn.c1349caf.js";import"./useContentViewHeight.82e6d0cc.js";import"./index.cff0b8af.js";import"./transButton.5ba7ce35.js";import"./ArrowLeftOutlined.62eef3b2.js";import"./index.61947057.js";import"./index.5389ab9f.js";import"./useFlexGapSupport.22cad392.js";import"./_baseIteratee.e5042e06.js";import"./_baseIsEqual.022cfbb5.js";import"./get.e620704d.js";import"./findIndex.657e235c.js";import"./toInteger.58eec37d.js";import"./isEqual.297bdb1e.js";import"./index.b3c2b46d.js";import"./index.f9d35bfd.js";import"./Checkbox.341a0e84.js";import"./index.40118052.js";import"./index.42ece229.js";import"./index.69d9b4a1.js";import"./UpOutlined.c620fc88.js";import"./index.e572ad54.js";import"./index.453418bd.js";import"./warning.ca82f8e0.js";import"./util.89eee439.js";import"./Tree.4c3dc6e1.js";import"./RedoOutlined.59e0b862.js";import"./index.761088f5.js";import"./uniqBy.634fce4d.js";import"./index.88fce616.js";import"./DeleteOutlined.36a39901.js";import"./index.61ad094d.js";import"./index.380f5c41.js";import"./FullscreenOutlined.06198031.js";import"./index.8d369d29.js";import"./uuid.2b29000c.js";import"./download.8dd6afc4.js";import"./base64Conver.08b9f4ec.js";import"./index.8b1a4278.js";import"./index.b2270280.js";const P=[{field:"passwordOld",label:"\u5F53\u524D\u5BC6\u7801",component:"InputPassword",required:!0},{field:"passwordNew",label:"\u65B0\u5BC6\u7801",component:"StrengthMeter",componentProps:{placeholder:"\u65B0\u5BC6\u7801"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"}]},{field:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",component:"InputPassword",dynamicRules:({values:r})=>[{required:!0,validator:(u,o)=>o?o!==r.passwordNew?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u4E0D\u80FD\u4E3A\u7A7A")}]}],A=h({name:"ChangePassword",components:{BasicForm:_,PageWrapper:F},setup(){const[r,{validate:u,resetFields:o}]=w({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:P});function p(){return d(this,null,function*(){try{const e=yield u(),{passwordOld:m,passwordNew:s}=e;console.log(m,s)}catch(e){}})}return{register:r,resetFields:o,handleSubmit:p}}}),b={class:"py-8 bg-white flex flex-col justify-center items-center"},y={class:"flex justify-center"};function k(r,u,o,p,e,m){const s=n("BasicForm"),i=n("a-button"),t=n("PageWrapper");return E(),g(t,{title:"\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801",content:"\u4FEE\u6539\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u9000\u51FA\u5F53\u524D\u767B\u5F55\uFF01"},{default:c(()=>[f("div",b,[l(s,{onRegister:r.register},null,8,["onRegister"]),f("div",y,[l(i,{onClick:r.resetFields},{default:c(()=>[B(" \u91CD\u7F6E ")]),_:1},8,["onClick"]),l(i,{class:"!ml-4",type:"primary",onClick:r.handleSubmit},{default:c(()=>[B(" \u786E\u8BA4 ")]),_:1},8,["onClick"])])])]),_:1})}var bo=C(A,[["render",k]]);export{bo as default};