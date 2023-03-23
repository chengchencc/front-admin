import{au as S,a as v,dl as P,v as T,f as D,aw as r,bY as g,o as a,k as n,B as e,p as t,n as F,C as o,t as d,l as c,y as f}from"./index.91c78518.js";import{A as h}from"./index.7cd6cb50.js";import{D as U}from"./index.989cc525.js";import k from"./CurrentPermissionMode.e3c984b6.js";import{R as C}from"./roleEnum.e1f286eb.js";import{A as b}from"./index.d1e6fdd4.js";import{P as $}from"./index.1e46fc07.js";import"./index.e9b45e79.js";import"./index.e3a1f424.js";import"./useBreakpoint.ebc6768a.js";import"./responsiveObserve.65e938a4.js";import"./useSize.495b1475.js";import"./useWindowSizeFn.2731919f.js";import"./useContentViewHeight.e0cb1840.js";import"./index.119cad3f.js";import"./transButton.6677a85d.js";import"./ArrowLeftOutlined.9a154523.js";const w=v({components:{Alert:h,PageWrapper:$,CurrentPermissionMode:k,Divider:U,Authority:b},setup(){const{changeRole:u,hasPermission:l}=P(),E=T();return{userStore:E,RoleEnum:C,isSuper:D(()=>E.getRoleList.includes(C.SUPER)),isTest:D(()=>E.getRoleList.includes(C.TEST)),changeRole:u,hasPermission:l}}}),N={class:"mt-4"};function V(u,l,E,L,M,W){const R=r("CurrentPermissionMode"),_=r("Alert"),s=r("a-button"),A=r("a-button-group"),m=r("Divider"),i=r("Authority"),y=r("PageWrapper"),p=g("auth");return a(),n(y,{title:"\u524D\u7AEF\u6743\u9650\u6309\u94AE\u793A\u4F8B",contentBackground:"",contentClass:"p-4",content:"\u7531\u4E8E\u5237\u65B0\u7684\u65F6\u5019\u4F1A\u8BF7\u6C42\u7528\u6237\u4FE1\u606F\u63A5\u53E3\uFF0C\u4F1A\u6839\u636E\u63A5\u53E3\u91CD\u7F6E\u89D2\u8272\u4FE1\u606F\uFF0C\u6240\u4EE5\u5237\u65B0\u540E\u754C\u9762\u4F1A\u6062\u590D\u539F\u6837\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u6CE8\u91CA src/layout/default/index\u5185\u7684\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3"},{default:e(()=>[t(R),F("p",null,[o(" \u5F53\u524D\u89D2\u8272: "),F("a",null,d(u.userStore.getRoleList),1)]),t(_,{class:"mt-4",type:"info",message:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u6309\u94AE\u53D8\u5316","show-icon":""}),F("div",N,[o(" \u6743\u9650\u5207\u6362(\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F): "),t(A,null,{default:e(()=>[t(s,{onClick:l[0]||(l[0]=B=>u.changeRole(u.RoleEnum.SUPER)),type:u.isSuper?"primary":"default"},{default:e(()=>[o(d(u.RoleEnum.SUPER),1)]),_:1},8,["type"]),t(s,{onClick:l[1]||(l[1]=B=>u.changeRole(u.RoleEnum.TEST)),type:u.isTest?"primary":"default"},{default:e(()=>[o(d(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})]),t(m,null,{default:e(()=>[o("\u7EC4\u4EF6\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u6709\u9700\u8981\u53EF\u4EE5\u81EA\u884C\u5168\u5C40\u6CE8\u518C)")]),_:1}),t(i,{value:u.RoleEnum.SUPER},{default:e(()=>[t(s,{type:"primary",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})]),_:1},8,["value"]),t(i,{value:u.RoleEnum.TEST},{default:e(()=>[t(s,{color:"success",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})]),_:1},8,["value"]),t(i,{value:[u.RoleEnum.TEST,u.RoleEnum.SUPER]},{default:e(()=>[t(s,{color:"error",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})]),_:1},8,["value"]),t(m,null,{default:e(()=>[o("\u51FD\u6570\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u9002\u7528\u4E8E\u51FD\u6570\u5185\u90E8\u8FC7\u6EE4)")]),_:1}),u.hasPermission(u.RoleEnum.SUPER)?(a(),n(s,{key:0,type:"primary",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})):c("",!0),u.hasPermission(u.RoleEnum.TEST)?(a(),n(s,{key:1,color:"success",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})):c("",!0),u.hasPermission([u.RoleEnum.TEST,u.RoleEnum.SUPER])?(a(),n(s,{key:2,color:"error",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})):c("",!0),t(m,null,{default:e(()=>[o("\u6307\u4EE4\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u8BE5\u65B9\u5F0F\u4E0D\u80FD\u52A8\u6001\u4FEE\u6539\u6743\u9650.)")]),_:1}),f((a(),n(s,{type:"primary",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})),[[p,u.RoleEnum.SUPER]]),f((a(),n(s,{color:"success",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})),[[p,u.RoleEnum.TEST]]),f((a(),n(s,{color:"error",class:"mx-4"},{default:e(()=>[o(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})),[[p,[u.RoleEnum.TEST,u.RoleEnum.SUPER]]])]),_:1})}var tu=S(w,[["render",V],["__scopeId","data-v-2f0fdbe6"]]);export{tu as default};