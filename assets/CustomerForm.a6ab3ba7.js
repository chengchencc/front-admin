import{B as C}from"./BasicForm.21229692.js";import{u as B}from"./useForm.eea043dd.js";import{au as g,a as E,cC as F,I as n,aw as e,o as h,k as b,B as p,p as i,b_ as v,G as A}from"./index.c91dbcec.js";import{P}from"./index.2ab7bca8.js";import"./index.51d90944.js";import"./index.5d896dbf.js";import"./responsiveObserve.1e13a42e.js";import"./useFlexGapSupport.5a90694b.js";import"./_baseIteratee.8cb7c9ed.js";import"./_baseIsEqual.fcde5103.js";import"./get.bbb96c60.js";import"./findIndex.777e7d04.js";import"./toInteger.2d455e8f.js";import"./isEqual.42a6bd5c.js";import"./useSize.a91c39e3.js";import"./index.b4d9efcc.js";import"./index.324e0bcd.js";import"./Checkbox.7535713c.js";import"./index.b29d788f.js";import"./index.9d1d2221.js";import"./index.4f81e2b6.js";import"./UpOutlined.92785f4e.js";import"./index.e6c27f98.js";import"./index.c1b1c8e6.js";import"./warning.ca82f8e0.js";import"./util.56f66dda.js";import"./Tree.852136df.js";import"./RedoOutlined.d361df85.js";import"./index.254c34ba.js";import"./uniqBy.150970a6.js";import"./index.0be175c3.js";import"./DeleteOutlined.81d21cfc.js";import"./index.9001e380.js";import"./index.4279af1e.js";import"./useWindowSizeFn.376791fd.js";import"./FullscreenOutlined.38c1b585.js";import"./index.15908e68.js";import"./uuid.2b29000c.js";import"./download.47122d16.js";import"./base64Conver.08b9f4ec.js";import"./index.e652fa4b.js";import"./index.028eafae.js";import"./index.af8b2f58.js";import"./index.162e232c.js";import"./useBreakpoint.5dabd1ad.js";import"./useContentViewHeight.2a6efe35.js";import"./index.78b421cb.js";import"./transButton.0623b7ab.js";import"./ArrowLeftOutlined.28ca7458.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>v(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=E({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:a=>{o.success("click search,values:"+JSON.stringify(a))},setProps:r}}});function I(o,t,r,a,k,x){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:m,field:s})=>[i(l,{value:m[s],"onUpdate:value":_=>m[s]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var So=g(S,[["render",I]]);export{So as default};
