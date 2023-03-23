import{B as c}from"./BasicForm.98ef7450.js";import{u as a}from"./useForm.2169bbec.js";import{au as B,a as d,cC as f,aw as r,o as b,k as C,B as n,p as t}from"./index.91c78518.js";import{P}from"./index.1e46fc07.js";import"./index.41e94487.js";import"./index.f1d72b26.js";import"./responsiveObserve.65e938a4.js";import"./useFlexGapSupport.33a77d25.js";import"./_baseIteratee.c981f53f.js";import"./_baseIsEqual.816e480b.js";import"./get.2c776a61.js";import"./findIndex.0570347c.js";import"./toInteger.078e120d.js";import"./isEqual.6a61b02c.js";import"./useSize.495b1475.js";import"./index.989cc525.js";import"./index.88f1e948.js";import"./Checkbox.9cabff11.js";import"./index.4492b02f.js";import"./index.7de12fa0.js";import"./index.4240517a.js";import"./UpOutlined.e4286575.js";import"./index.88fb2e9b.js";import"./index.495ffb40.js";import"./warning.ca82f8e0.js";import"./util.3aa28320.js";import"./Tree.155e87a6.js";import"./RedoOutlined.55ab8ef7.js";import"./index.5a21fcd9.js";import"./uniqBy.c07792ae.js";import"./index.bd985330.js";import"./DeleteOutlined.b9c6996f.js";import"./index.7cd6cb50.js";import"./index.9784102a.js";import"./useWindowSizeFn.2731919f.js";import"./FullscreenOutlined.afbc26d0.js";import"./index.d7154bf4.js";import"./uuid.2b29000c.js";import"./download.ae181d08.js";import"./base64Conver.08b9f4ec.js";import"./index.2eaf87ac.js";import"./index.38e5c16b.js";import"./index.e9b45e79.js";import"./index.e3a1f424.js";import"./useBreakpoint.ebc6768a.js";import"./useContentViewHeight.e0cb1840.js";import"./index.119cad3f.js";import"./transButton.6677a85d.js";import"./ArrowLeftOutlined.9a154523.js";const s=()=>[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:o=>{console.log(o)}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}];function h(){return[{field:"field10",component:"Input",label:"\u5B57\u6BB510",colProps:{span:8}},{field:"field11",component:"Input",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field12",component:"Input",label:"\u5B57\u6BB512",colProps:{span:8}},{field:"field13",component:"Input",label:"\u5B57\u6BB513",colProps:{span:8}}]}const F=d({components:{BasicForm:c,CollapseContainer:f,PageWrapper:P},setup(){const[o]=a({labelWidth:120,schemas:s(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),p=[];for(let e=14;e<30;e++)p.push({field:"field"+e,component:"Input",label:"\u5B57\u6BB5"+e,colProps:{span:8}});const[i]=a({labelWidth:120,schemas:[...s(),...h(),{field:"",component:"Divider",label:"\u66F4\u591A\u5B57\u6BB5"},...p],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});return{register:o,register1:i}}});function g(o,p,i,e,_,A){const l=r("BasicForm"),u=r("CollapseContainer"),m=r("PageWrapper");return b(),C(m,{title:"\u53EF\u6298\u53E0\u8868\u5355\u793A\u4F8B"},{default:n(()=>[t(u,{title:"\u57FA\u7840\u6536\u7F29\u793A\u4F8B"},{default:n(()=>[t(l,{onRegister:o.register},null,8,["onRegister"])]),_:1}),t(u,{title:"\u8D85\u8FC73\u884C\u81EA\u52A8\u6536\u8D77\uFF0C\u6298\u53E0\u65F6\u4FDD\u75592\u884C",class:"mt-4"},{default:n(()=>[t(l,{onRegister:o.register1},null,8,["onRegister"])]),_:1})]),_:1})}var Fo=B(F,[["render",g]]);export{Fo as default};