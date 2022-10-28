var d=(o,l,r)=>new Promise((m,n)=>{var c=t=>{try{e(r.next(t))}catch(a){n(a)}},u=t=>{try{e(r.throw(t))}catch(a){n(a)}},e=t=>t.done?m(t.value):Promise.resolve(t.value).then(c,u);e((r=r.apply(o,l)).next())});import{B as P}from"./BasicForm.d765cc9c.js";import{u as b}from"./useForm.d0f78599.js";import A from"./PersonTable.ed10282a.js";import{P as F}from"./index.f1bbd8b9.js";import{au as g,a as C,w as D,aw as s,o as v,k as h,B as i,p,C as k}from"./index.0afb6b1a.js";import{C as B}from"./index.293608e8.js";import"./index.3065bd8d.js";import"./index.335339a9.js";import"./index.45177917.js";import"./index.f9b7668c.js";import"./_baseIteratee.ccaeac66.js";import"./_baseIsEqual.b9ab726e.js";import"./get.cbf01dd9.js";import"./findIndex.bebb7dcc.js";import"./toInteger.385c5e34.js";import"./isEqual.c3167c03.js";import"./useSize.b98aa611.js";import"./index.b5e58356.js";import"./index.0c92bc5e.js";import"./Checkbox.b94383d9.js";import"./index.f188e1cd.js";import"./index.f3dc3acc.js";import"./index.a38530f5.js";import"./UpOutlined.53f4e913.js";import"./index.a86fe11c.js";import"./index.752237d9.js";import"./warning.ca82f8e0.js";import"./util.5b402eb8.js";import"./Tree.c194a51d.js";import"./RedoOutlined.8a38e0cf.js";import"./index.3608aaa4.js";import"./uniqBy.1231b8aa.js";import"./index.b920e176.js";import"./DeleteOutlined.7747d063.js";import"./index.35e066f0.js";import"./index.afe49db0.js";import"./useWindowSizeFn.b437c5f3.js";import"./FullscreenOutlined.f42c8b10.js";import"./index.9ecfb69b.js";import"./uuid.2b29000c.js";import"./download.8e655723.js";import"./base64Conver.08b9f4ec.js";import"./index.487b659d.js";import"./index.3fdd4c89.js";import"./TableImg.3906216b.js";import"./useSortable.04beedbd.js";import"./CaretDownFilled.6c2b69f4.js";import"./scrollTo.b6090ae3.js";import"./index.1916b734.js";import"./useTable.f02b5d26.js";import"./index.0fb2ca65.js";import"./index.ab4596d9.js";import"./useBreakpoint.f66a95b4.js";import"./responsiveObserve.8bc71b85.js";import"./useContentViewHeight.6667aea5.js";import"./index.97f64344.js";import"./ArrowLeftOutlined.8571d53f.js";import"./index.a69642cd.js";import"./PlusOutlined.d47e946e.js";import"./useFlexGapSupport.358e75d5.js";const f=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],_=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],q=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:_},required:!0,colProps:{offset:2}}],T=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:_},required:!0,colProps:{offset:2}}];const y=C({name:"FormHightPage",components:{BasicForm:P,PersonTable:A,PageWrapper:F,[B.name]:B},setup(){const o=D(null),[l,{validate:r}]=b({baseColProps:{span:6},schemas:q,showActionButtonGroup:!1}),[m,{validate:n}]=b({baseColProps:{span:6},schemas:T,showActionButtonGroup:!1});function c(){return d(this,null,function*(){try{o.value&&console.log("table data:",o.value.getDataSource());const[u,e]=yield Promise.all([r(),n()]);console.log("form data:",u,e)}catch(u){}})}return{register:l,registerTask:m,submitAll:c,tableRef:o}}});function S(o,l,r,m,n,c){const u=s("BasicForm"),e=s("a-card"),t=s("PersonTable"),a=s("a-button"),E=s("PageWrapper");return v(),h(E,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},{rightFooter:i(()=>[p(a,{type:"primary",onClick:o.submitAll},{default:i(()=>[k(" \u63D0\u4EA4 ")]),_:1},8,["onClick"])]),default:i(()=>[p(e,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:i(()=>[p(u,{onRegister:o.register},null,8,["onRegister"])]),_:1}),p(e,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:i(()=>[p(u,{onRegister:o.registerTask},null,8,["onRegister"])]),_:1}),p(e,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1},{default:i(()=>[p(t,{ref:"tableRef"},null,512)]),_:1})]),_:1})}var No=g(y,[["render",S],["__scopeId","data-v-b9f9a4d2"]]);export{No as default};
