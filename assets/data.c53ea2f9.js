import{b_ as i,dm as X}from"./index.a4184510.js";import{T as n}from"./index.42ece229.js";const r="\u540D\u5355\u5206\u7C7B",t=[{label:"\u9EC4",value:"0"},{label:"\u7EA2",value:"1"}],o=[{label:"\u6709\u6548",value:"0"},{label:"\u5931\u6548",value:"1"}],c=[{title:"\u7F16\u53F7",dataIndex:"field1",width:120},{title:"\u540D\u79F0",dataIndex:"field2",width:120},{title:"\u6821\u9A8C\u6807\u7B7E",dataIndex:"tag",width:120,customRender({text:u}){var e;return console.log(u),((e=t.find(l=>l.value==u))==null?void 0:e.label)||"\u5176\u4ED6"}},{title:"\u5907\u6CE8",dataIndex:"field3"},{title:"\u72B6\u6001",dataIndex:"status",width:120,customRender({text:u}){var a;const e=((a=o.find(d=>d.value==u))==null?void 0:a.label)||"\u5176\u4ED6",l=u=="0"?"processing":"success";return i(n,{color:l},()=>e)}},{title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"creationTime",width:120,format:u=>X(u)},{title:"\u5931\u6548\u65F6\u95F4",dataIndex:"invalidTime",width:120,format:u=>X(u)}],p=[{field:"field1",label:"\u7F16\u53F7",component:"Input",colProps:{span:8}},{field:"field2",label:"\u540D\u79F0",component:"Input",colProps:{span:8}}],m=[{label:"\u7F16\u53F7",field:"field1",component:"Input",required:!0},{label:"\u540D\u79F0",field:"field2",component:"Input",required:!0},{field:"tag",label:"\u6821\u9A8C\u6807\u7B7E",component:"Select",defaultValue:"0",required:!0,componentProps:{options:t},colProps:{lg:24,md:24}},{label:"\u5907\u6CE8",field:"field3",component:"InputTextArea",required:!0}],F=[{field:"field1",label:"\u7F16\u53F7"},{field:"field2",label:"\u540D\u79F0"},{field:"tag",label:"\u6821\u9A8C\u6807\u7B7E",render:(u,e)=>{var l;return console.log(e),((l=t.find(a=>a.value==u))==null?void 0:l.label)||"\u5176\u4ED6"}},{field:"status",label:"\u72B6\u6001",span:1},{field:"field4",label:"\u521B\u5EFA\u65E5\u671F",span:1},{field:"field5",label:"\u521B\u5EFA\u4EBA",span:1},{field:"field5",label:"\u5931\u6548\u65E5\u671F",span:1},{field:"field3",label:"\u5907\u6CE8",span:2}],E=[{id:0,field1:"MD001",field2:"\u793E\u4FDD\u5C40\u9ED1\u540D\u5355",field3:"\u540D\u5355\u8BF4\u660EXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",tag:"0",status:"1"},{id:1,field1:"MD002",field2:"\u8D22\u653F\u90E8\u9ED1\u540D\u5355",field3:"\u540D\u5355\u8BF4\u660EXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",status:"0",tag:"1"}];export{F as a,c,E as d,m as f,r as l,p as s};