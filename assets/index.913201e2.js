import{ap as V,H as v,aj as B,a as $,a2 as D,f as l,w as F,a3 as E,a1 as H,R as L,S,_ as p,ag as W,p as f,F as k}from"./index.91c78518.js";import{u as q}from"./useFlexGapSupport.33a77d25.js";var J={small:8,middle:16,large:24},K={prefixCls:v.string,size:{type:[String,Number,Array]},direction:v.oneOf(B("horizontal","vertical")).def("horizontal"),align:v.oneOf(B("start","end","center","baseline")),wrap:v.looseBool};function M(i){return typeof i=="string"?J[i]:i||0}var Q=$({name:"ASpace",props:K,slots:["split"],setup:function(e,G){var o=G.slots,m=D("space",e),r=m.prefixCls,I=m.space,z=m.direction,_=q(),n=l(function(){var a;return e.size||((a=I.value)===null||a===void 0?void 0:a.size)||"small"}),d=F(),c=F();E(n,function(){var a=(Array.isArray(n.value)?n.value:[n.value,n.value]).map(function(g){return M(g)}),t=H(a,2);d.value=t[0],c.value=t[1]},{immediate:!0});var h=l(function(){return e.align===void 0&&e.direction==="horizontal"?"center":e.align}),j=l(function(){var a;return L(r.value,"".concat(r.value,"-").concat(e.direction),(a={},S(a,"".concat(r.value,"-rtl"),z.value==="rtl"),S(a,"".concat(r.value,"-align-").concat(h.value),h.value),a))}),P=l(function(){return z.value==="rtl"?"marginLeft":"marginRight"}),O=l(function(){var a={};return _.value&&(a.columnGap="".concat(d.value,"px"),a.rowGap="".concat(c.value,"px")),p(p({},a),e.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-c.value,"px")})});return function(){var a,t,g=e.wrap,w=e.direction,R=w===void 0?"horizontal":w,C=W((a=o.default)===null||a===void 0?void 0:a.call(o)),A=C.length;if(A===0)return null;var s=(t=o.split)===null||t===void 0?void 0:t.call(o),N="".concat(r.value,"-item"),b=d.value,y=A-1;return f("div",{class:j.value,style:O.value},[C.map(function(T,x){var u={};return _.value||(R==="vertical"?x<y&&(u={marginBottom:"".concat(b/(s?2:1),"px")}):u=p(p({},x<y&&S({},P.value,"".concat(b/(s?2:1),"px"))),g&&{paddingBottom:"".concat(c.value,"px")})),f(k,null,[f("div",{class:N,style:u},[T]),x<y&&s&&f("span",{class:"".concat(N,"-split"),style:u},[s])])})])}}}),Y=V(Q);export{Y as S};