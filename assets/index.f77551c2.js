import{ap as F,aj as O,H as a,a as p,bx as I,M as y,w as m,f as w,a3 as K,a2 as j,ao as P,L as z,S as i,p as h,T as k,cd as A,ab as E,cE as g,cs as H,c8 as S}from"./index.4804300a.js";var L=O("small","default"),U={prefixCls:a.string,size:a.oneOf(L),disabled:a.looseBool,checkedChildren:a.VNodeChild,unCheckedChildren:a.VNodeChild,tabindex:a.oneOfType([a.string,a.number]),autofocus:a.looseBool,loading:a.looseBool,checked:a.oneOfType([a.string,a.number,a.looseBool]),checkedValue:a.oneOfType([a.string,a.number,a.looseBool]).def(!0),unCheckedValue:a.oneOfType([a.string,a.number,a.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function}},D=p({name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:U,slots:["checkedChildren","unCheckedChildren"],emits:["update:checked","mouseup","change","click","keydown"],setup:function(e,s){var o=s.attrs,C=s.slots,x=s.expose,d=s.emit;I(function(){y(!("defaultChecked"in o),"Switch","'defaultChecked' is deprecated, please use 'v-model:checked'"),y(!("value"in o),"Switch","`value` is not validate prop, do you mean `checked`?")});var r=m(e.checked!==void 0?e.checked:o.defaultChecked),f=w(function(){return r.value===e.checkedValue});K(function(){return e.checked},function(){r.value=e.checked});var V=j("switch",e),u=V.prefixCls,t=m(),b=function(){var n;(n=t.value)===null||n===void 0||n.focus()},T=function(){var n;(n=t.value)===null||n===void 0||n.blur()};x({focus:b,blur:T}),P(function(){z(function(){e.autofocus&&!e.disabled&&t.value.focus()})});var v=function(n,l){e.disabled||(d("update:checked",n),d("change",n,l))},_=function(n){b();var l=f.value?e.unCheckedValue:e.checkedValue;v(l,n),d("click",l,n)},B=function(n){n.keyCode===S.LEFT?v(e.unCheckedValue,n):n.keyCode===S.RIGHT&&v(e.checkedValue,n),d("keydown",n)},M=function(n){var l;(l=t.value)===null||l===void 0||l.blur(),d("mouseup",n)},N=w(function(){var c;return c={},i(c,"".concat(u.value,"-small"),e.size==="small"),i(c,"".concat(u.value,"-loading"),e.loading),i(c,"".concat(u.value,"-checked"),f.value),i(c,"".concat(u.value,"-disabled"),e.disabled),i(c,u.value,!0),c});return function(){return h(H,{insertExtraNode:!0},{default:function(){return[h("button",k(k(k({},A(e,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","defaultChecked","checkedValue","unCheckedValue"])),o),{},{onKeydown:B,onClick:_,onMouseup:M,type:"button",role:"switch","aria-checked":r.value,disabled:e.disabled||e.loading,class:[o.class,N.value],ref:t}),[e.loading?h(E,{class:"".concat(u.value,"-loading-icon")},null):null,h("span",{class:"".concat(u.value,"-inner")},[f.value?g(C,e,"checkedChildren"):g(C,e,"unCheckedChildren")])])]}})}}}),R=F(D);export{R as S};
