import{p as e,s as C,a as b,aw as v,o as u,i as d,F as I,az as R,r as g,B as o,j as l,be as y,bs as h,n as c,t as _,l as i,C as f,df as P,ee as T,au as x,ec as H,ed as j,aD as N}from"./index.a4184510.js";import{D as B}from"./DeleteOutlined.36a39901.js";import{P as D}from"./PlusSquareOutlined.138b86de.js";var $={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"}}]},name:"holder",theme:"outlined"},G=$;function O(a){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?Object(arguments[r]):{},s=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(p){return Object.getOwnPropertyDescriptor(n,p).enumerable}))),s.forEach(function(p){M(a,p,n[p])})}return a}function M(a,r,n){return r in a?Object.defineProperty(a,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[r]=n,a}var m=function(r,n){var s=O({},r,n.attrs);return e(C,O({},s,{icon:G}),null)};m.displayName="HolderOutlined";m.inheritAttrs=!1;var V=m;const k=a=>(H("data-v-7dd5c5cf"),a=a(),j(),a),A={key:0,class:"rule-tree-node-name type-pkg"},E={class:"rule-tree-node-opName"},F=k(()=>c("div",{class:"oper-rule-line"},null,-1)),q={key:1,class:"rule-tree-node-name type-op"},L={class:"rule-tree-node-opName"},J=k(()=>c("div",{class:"oper-rule-line"},null,-1)),Q={key:2,class:"rule-tree-op-box"},U={key:3,class:"rule-tree-node-name type-rg"},W={class:"com-rule-icon rule-group-icon"},X={style:{padding:"0 10px"}},Y={key:4,class:"rule-tree-node-name type-r"},Z={key:0},K=b({__name:"RuleTreeNode",props:{value:{}},setup(a){return console.log("aa"),(r,n)=>{const s=v("a-button"),p=v("a-input-group"),S=v("RuleTreeNode",!0);return u(),d("div",null,[(u(!0),d(I,null,R(r.value,(t,w)=>(u(),d("div",{class:g(t.nodeType==="operation"||t.nodeType==="pkg"?"rule-tree-node":t.nodeType==="ruleGroup"?"rule-tree-node rule-tree-group":"rule-tree-node rule-tree-item"),key:w},[t.nodeType==="pkg"?(u(),d("div",A,[e(p,{compact:""},{default:o(()=>[e(s,{type:"primary",style:{padding:"5px"}},{default:o(()=>[e(l(y),{class:"oper-rule-icon",icon:"material-symbols:step-rounded",size:22})]),_:1}),e(l(h),{title:t.desc||t.name},{default:o(()=>[c("span",E,_(t.name),1)]),_:2},1032,["title"]),F]),_:2},1024)])):i("",!0),t.nodeType==="operation"?(u(),d("div",q,[e(p,{compact:""},{default:o(()=>[e(s,{type:"primary",style:{padding:"5px"}},{default:o(()=>[e(l(y),{class:"oper-rule-icon",icon:"ic:round-rule",size:22})]),_:1}),c("span",L,_(t.name),1),J]),_:2},1024)])):i("",!0),t.nodeType==="operation"||t.nodeType==="pkg"?(u(),d("div",Q)):i("",!0),t.nodeType==="ruleGroup"?(u(),d("div",U,[e(l(h),{title:t.desc||t.name},{default:o(()=>[c("span",W,[e(l(y),{class:"oper-rule-icon",icon:"ic:outline-rule-folder",size:22})]),c("span",X,_(t.name),1)]),_:2},1032,["title"])])):i("",!0),t.nodeType==="rule"?(u(),d("div",Y,[c("div",null,[e(l(V)),f(_(t.name),1)])])):i("",!0),e(S,{class:g(t.nodeType==="ruleGroup"&&"rule-tree-node-children"),value:t.children},null,8,["class","value"]),e(s,{class:"group-delete",shape:"circle",danger:"",type:"primary"},{default:o(()=>[e(l(B))]),_:1})],2))),128)),r.value&&r.value[0].nodeType==="ruleGroup"?(u(),d("div",Z,[e(p,{compact:""},{default:o(()=>[e(s,{type:"default",style:{padding:"4px 8px","margin-left":"10px"}},{default:o(()=>[e(l(D),{style:{color:"#aaa"}})]),_:1}),e(l(P),{style:{width:"300px"}},{default:o(()=>[e(l(T),{value:"and"},{default:o(()=>[f("\u89C4\u5219\u53051")]),_:1}),e(l(T),{value:"or"},{default:o(()=>[f("\u89C4\u5219\u53052")]),_:1})]),_:1})]),_:1})])):i("",!0)])}}});var z=x(K,[["__scopeId","data-v-7dd5c5cf"]]);const ee={class:"rule-tree"},te={class:"rule-tree-title"},re=b({__name:"RuleTree",props:{name:{},nodes:{}},setup(a){return(r,n)=>(u(),d("div",ee,[c("div",te,_(r.name),1),e(z,{value:r.nodes,class:"content"},null,8,["value"])]))}});var ae=x(re,[["__scopeId","data-v-509a2530"]]);const se=N(ae);N(z);export{se as R};
