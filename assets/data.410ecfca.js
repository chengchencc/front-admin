import{o as a,b as C}from"./data.7a1fdcd7.js";import{x as d}from"./index.4804300a.js";const F=[{id:"1",code:"RG-01",ruleGroupType:"1",innerRuleRelation:"0",name:"\u7ECF\u8425\u5FEB\u8D37\u4EA7\u54C1\u89C4\u5219\u5305",description:"\u7528\u4E8E\u5BF9\u7ECF\u8425\u5FEB\u8D37\u4EA7\u54C1\u8FDB\u884C\u6821\u9A8C\uFF0C\u4E3B\u8981\u6821\u9A8C\u503A\u6743\u4EBA\u4E3A\u5DE5\u884C\u3001\u8D37\u6B3E\u5229\u7387\u5C0F\u4E8Exxx\u3001\u4E3B\u503A\u6743\u91D1\u989Dxxx\u4EE5\u5185",ruleTemplate:"RT-01",ruleCount:15},{id:"2",code:"RG-02",ruleGroupType:"1",innerRuleRelation:"0",name:"\u503A\u52A1\u4EBA\u6807\u51C6\u6821\u9A8C\u89C4\u5219\u5305",description:"\u7528\u4E8E\u8FDB\u884C\u503A\u52A1\u4EBA\u6807\u51C6\u6821\u9A8C\uFF0C\u4E3B\u8981\u5305\u62EC\uFF1Axxxxxxxxxxxxxxxxxxxxxxxxxx",ruleTemplate:"RT-02",ruleCount:8},{id:"3",code:"RG-03",ruleGroupType:"1",innerRuleRelation:"0",name:"\u503A\u6743\u4EBA\u6807\u51C6\u6821\u9A8C\u89C4\u5219\u5305",description:"\u7528\u4E8E\u673A\u6784\u6807\u51C6\u7684\u503A\u6743\u4EBA\u6821\u9A8C\uFF0C\u4E3B\u8981\u5305\u62EC\uFF1Axxxxxxxxxxxxxxxxxxxxxxxxxx",ruleTemplate:"RT-03",ruleCount:6},{id:"4",code:"RG-04",ruleGroupType:"1",innerRuleRelation:"0",name:"\u673A\u6784\u603B\u4F53\u89C4\u5219\u5305",description:"\u4E3B\u8981\u7528\u4E8E\u6821\u9A8C\u672C\u673A\u6784\u603B\u4F53\u89C4\u5219\uFF0C\u5355\u4E00\u503A\u52A1\u4EBA\u4E3B\u503A\u6743\u91D1\u989D\u5C0F\u4E8E1000\u4E07\uFF0Cxxxxxxxxxxxxxxxxxxxxxxxxxx",ruleTemplate:"RT-04",ruleCount:4}],c=d(F),s="\u89C4\u5219\u5305\u6E05\u5355",r=[{label:"\u7269\u7406\u6821\u9A8C",value:"0"},{label:"\u5408\u89C4\u6027\u6821\u9A8C",value:"1"}],i=[{label:"And\uFF08\u5E76\uFF09,\u89C4\u5219\u5305\u4E0B\u7684\u89C4\u5219\u5168\u90E8\u7B26\u5408\u624D\u80FD\u6821\u9A8C\u901A\u8FC7",value:"0"},{label:"Or\uFF08\u6216\uFF09\uFF0C\u89C4\u5219\u5305\u4E0B\u7684\u89C4\u5219\u4EFB\u610F\u4E00\u4E2A\u901A\u8FC7\u5373\u53EF\u6821\u9A8C\u901A\u8FC7",value:"1"}],x=(u,n)=>{var e;return((e=u.find(l=>l.value==n))==null?void 0:e.label)||"\u5176\u4ED6"},A=[{title:"\u89C4\u5219\u5305\u7F16\u53F7",dataIndex:"code",width:120},{title:"\u89C4\u5219\u5305\u540D\u79F0",dataIndex:"name",width:120},{title:"\u89C4\u5219\u5305\u63CF\u8FF0",dataIndex:"description",width:320},{title:"\u89C4\u5219\u5305\u7C7B\u578B",dataIndex:"ruleGroupType",customRender:({text:u})=>x(r,u),width:120},{title:"\u5185\u90E8\u89C4\u5219\u903B\u8F91",dataIndex:"innerRuleRelation",customRender:({text:u})=>x(i,u),width:120},{title:"\u89C4\u5219\u6570\u91CF",dataIndex:"ruleCount",width:120},...C],m=[{field:"name",label:"\u89C4\u5219\u5305\u540D\u79F0",component:"Input",colProps:{span:8}},{field:"code",label:"\u89C4\u5219\u5305\u7C7B\u578B",component:"Input",colProps:{span:8}}],B=[{field:"code",label:"\u89C4\u5219\u5305\u7F16\u53F7",component:"Input",required:!0},{field:"name",label:"\u89C4\u5219\u5305\u540D\u79F0",component:"Input",required:!0},{field:"description",label:"\u89C4\u5219\u5305\u63CF\u8FF0",component:"InputTextArea",required:!0},{field:"ruleGroupType",label:"\u89C4\u5219\u5305\u7C7B\u578B",component:"Select",defaultValue:"1",required:!0,componentProps:{options:r},colProps:{lg:24,md:24}},{field:"innerRuleRelation",label:"\u5185\u90E8\u89C4\u5219\u903B\u8F91",component:"Select",defaultValue:"0",required:!0,componentProps:{options:i},colProps:{lg:24,md:24}}],R=[{field:"code",label:"\u89C4\u5219\u7F16\u53F7"},{field:"name",label:"\u89C4\u5219\u540D\u79F0"},{field:"description",label:"\u89C4\u5219\u63CF\u8FF0",span:2},{field:"ruleTemplate",label:"\u89C4\u5219\u6A21\u677F",render(u,n){var e;return((e=a.find(l=>l.code==u))==null?void 0:e.name)||"\u672A\u77E5"}},{field:"ruleTemplate",label:"\u6A21\u677F\u7C7B\u578B",render(u,n){var l,o;const e=(l=a.find(t=>t.code==u))==null?void 0:l.ruleType;return((o=RuleType.find(t=>t.value==e))==null?void 0:o.label)||"\u672A\u77E5"}},{label:"\u4E3B\u503A\u6743\u91D1\u989D\u8303\u56F4",field:"amountMin",show:u=>(console.log("values::",u),u.ruleTemplate=="RT-04")}];export{R as a,A as c,c as d,B as f,s as l,m as s};
