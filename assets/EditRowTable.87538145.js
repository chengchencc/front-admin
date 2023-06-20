var r=(i,u,o)=>new Promise((a,l)=>{var s=t=>{try{n(o.next(t))}catch(e){l(e)}},p=t=>{try{n(o.throw(t))}catch(e){l(e)}},n=t=>t.done?a(t.value):Promise.resolve(t.value).then(s,p);n((o=o.apply(i,u)).next())});import{B as f}from"./TableImg.3975ff3a.js";import{T as w}from"./BasicForm.33be6605.js";import{u as E}from"./useTable.6d2b5fcf.js";import{o as D,t as B}from"./tree.bcc20e66.js";import{d as h}from"./table.603457c9.js";import{au as b,a as g,w as R,aw as c,o as v,i as A,p as C,B as x,ae as I,G as T}from"./index.a4184510.js";import"./index.f9d35bfd.js";import"./Checkbox.341a0e84.js";import"./index.40118052.js";import"./useForm.e9f1e61e.js";import"./index.7f4f8797.js";import"./index.00036abf.js";import"./index.97a5ac83.js";import"./useBreakpoint.3d7302fa.js";import"./responsiveObserve.74da7233.js";import"./useSize.6d3e9c8f.js";import"./useWindowSizeFn.c1349caf.js";import"./useContentViewHeight.82e6d0cc.js";import"./index.cff0b8af.js";import"./transButton.5ba7ce35.js";import"./ArrowLeftOutlined.62eef3b2.js";import"./index.69d9b4a1.js";import"./UpOutlined.c620fc88.js";import"./index.e572ad54.js";import"./index.42ece229.js";import"./isEqual.297bdb1e.js";import"./_baseIsEqual.022cfbb5.js";import"./uuid.2b29000c.js";import"./index.761088f5.js";import"./uniqBy.634fce4d.js";import"./_baseIteratee.e5042e06.js";import"./get.e620704d.js";import"./findIndex.657e235c.js";import"./toInteger.58eec37d.js";import"./util.89eee439.js";import"./warning.ca82f8e0.js";import"./index.88fce616.js";import"./DeleteOutlined.36a39901.js";import"./index.380f5c41.js";import"./FullscreenOutlined.06198031.js";import"./index.b3c2b46d.js";import"./useSortable.a1985680.js";import"./RedoOutlined.59e0b862.js";import"./CaretDownFilled.075b8f9c.js";import"./scrollTo.9ef220d2.js";import"./index.8d369d29.js";import"./index.1ecd5574.js";import"./index.61947057.js";import"./index.5389ab9f.js";import"./useFlexGapSupport.22cad392.js";import"./index.453418bd.js";import"./Tree.4c3dc6e1.js";import"./index.61ad094d.js";import"./download.8dd6afc4.js";import"./base64Conver.08b9f4ec.js";import"./index.8b1a4278.js";import"./index.b2270280.js";const k=[{title:"\u8F93\u5165\u6846",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:150},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",editRow:!0,width:150},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",editRow:!0,align:"left",editRule:!0,width:150},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",editRow:!0,align:"right",editRule:i=>r(void 0,null,function*(){return i==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":""})},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:150},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"},{label:"Option3",value:"3"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:D,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",dataIndex:"name8",editRow:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:B,resultField:"list"},width:200},{title:"\u65E5\u671F\u9009\u62E9",dataIndex:"date",editRow:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:150},{title:"\u65F6\u95F4\u9009\u62E9",dataIndex:"time",editRow:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:100},{title:"\u52FE\u9009\u6846",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:i=>i?"\u662F":"\u5426",width:100},{title:"\u5F00\u5173",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:i=>i?"\u5F00":"\u5173",width:100}],_=g({components:{BasicTable:f,TableAction:w},setup(){const{createMessage:i}=T(),u=R(""),[o]=E({title:"\u53EF\u7F16\u8F91\u884C\u793A\u4F8B",titleHelpMessage:["\u672C\u4F8B\u4E2D\u4FEE\u6539[\u6570\u5B57\u8F93\u5165\u6846]\u8FD9\u4E00\u5217\u65F6\uFF0C\u540C\u4E00\u884C\u7684[\u8FDC\u7A0B\u4E0B\u62C9]\u5217\u7684\u5F53\u524D\u7F16\u8F91\u6570\u636E\u4E5F\u4F1A\u540C\u6B65\u53D1\u751F\u6539\u53D8"],api:h,columns:k,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function a(t){var e;u.value=t.key,(e=t.onEdit)==null||e.call(t,!0)}function l(t){var e;u.value="",(e=t.onEdit)==null||e.call(t,!1,!1)}function s(t){return r(this,null,function*(){var m,d;if(i.loading({content:"\u6B63\u5728\u4FDD\u5B58...",duration:0,key:"saving"}),yield(m=t.onValid)==null?void 0:m.call(t))try{const F=I(t.editValueRefs);console.log(F),(yield(d=t.onEdit)==null?void 0:d.call(t,!1,!0))&&(u.value=""),i.success({content:"\u6570\u636E\u5DF2\u4FDD\u5B58",key:"saving"})}catch(F){i.error({content:"\u4FDD\u5B58\u5931\u8D25",key:"saving"})}else i.error({content:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u6570\u636E",key:"saving"})})}function p(t,e){return t.editable?[{label:"\u4FDD\u5B58",onClick:s.bind(null,t,e)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:l.bind(null,t,e)}}]:[{label:"\u7F16\u8F91",disabled:u.value?u.value!==t.key:!1,onClick:a.bind(null,t)}]}function n({column:t,value:e,record:m}){t.dataIndex==="id"&&(m.editValueRefs.name4.value=`${e}`),console.log(t,e,m)}return{registerTable:o,handleEdit:a,createActions:p,onEditChange:n}}}),y={class:"p-4"};function M(i,u,o,a,l,s){const p=c("TableAction"),n=c("BasicTable");return v(),A("div",y,[C(n,{onRegister:i.registerTable,onEditChange:i.onEditChange},{action:x(({record:t,column:e})=>[C(p,{actions:i.createActions(t,e)},null,8,["actions"])]),_:1},8,["onRegister","onEditChange"])])}var Ht=b(_,[["render",M]]);export{Ht as default};