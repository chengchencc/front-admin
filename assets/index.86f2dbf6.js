var me=Object.defineProperty,pe=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var ee=(e,t,r)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))Ce.call(t,r)&&ee(e,r,t[r]);if(K)for(var r of K(t))He.call(t,r)&&ee(e,r,t[r]);return e},te=(e,t)=>pe(e,be(t));var ae=(e,t,r)=>new Promise((m,n)=>{var C=v=>{try{g(r.next(v))}catch(H){n(H)}},d=v=>{try{g(r.throw(v))}catch(H){n(H)}},g=v=>v.done?m(v.value):Promise.resolve(v.value).then(C,d);g((r=r.apply(e,t)).next())});import{p as h,s as _e,ap as ye,H as y,a as G,a2 as $e,w as A,f as k,ah as Pe,R as Fe,S as X,ct as ke,ag as we,cu as Be,cv as Re,b as se,bg as Se,au as ce,o as z,i as Z,n as q,aA as T,r as V,bu as ue,ao as Te,L,cw as Ae,a3 as de,j as w,cx as Oe,cy as Ne,aF as Ie,cz as Ee,aE as $,$ as je,al as ne,aw as re,k as oe,ay as ze,az as Ve,B as W,aB as xe,aC as We,F as Le,C as De,t as Me,ax as Ue,l as ie,aD as fe}from"./index.4804300a.js";import{B as Xe}from"./index.699aa748.js";import{A as Ze}from"./index.1f68cb78.js";import{u as qe}from"./useWindowSizeFn.38c7676c.js";import{a as Ge}from"./useContentViewHeight.8fc9ee42.js";import"./index.583dbbd3.js";import{T as Je}from"./transButton.342edbea.js";import{A as Qe}from"./ArrowLeftOutlined.0255904f.js";var Ye={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ke=Ye;function le(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},m=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(m=m.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),m.forEach(function(n){et(e,n,r[n])})}return e}function et(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var J=function(t,r){var m=le({},t,r.attrs);return h(_e,le({},m,{icon:Ke}),null)};J.displayName="ArrowRightOutlined";J.inheritAttrs=!1;var tt=J,at={backIcon:y.VNodeChild,prefixCls:y.string,title:y.VNodeChild,subTitle:y.VNodeChild,breadcrumb:y.object,tags:y.any,footer:y.VNodeChild,extra:y.VNodeChild,avatar:y.object,ghost:y.looseBool,onBack:y.func},nt=G({name:"APageHeader",props:at,emits:["back"],slots:["backIcon","avatar","breadcrumb","title","subTitle","tags","extra","footer"],setup:function(t,r){var m=r.emit,n=r.slots,C=$e("page-header",t),d=C.prefixCls,g=C.direction,v=C.pageHeader,H=A(!1),I=function(a){var l=a.width;H.value=l<768},P=k(function(){var o,a,l;return(l=(o=t.ghost)!==null&&o!==void 0?o:(a=v.value)===null||a===void 0?void 0:a.ghost)!==null&&l!==void 0?l:!0}),B=function(){var a,l,s;return(s=(a=t.backIcon)!==null&&a!==void 0?a:(l=n.backIcon)===null||l===void 0?void 0:l.call(n))!==null&&s!==void 0?s:g.value==="rtl"?h(tt,null,null):h(Qe,null,null)},R=function(a){return!a||!t.onBack?null:h(Re,{componentName:"PageHeader",children:function(s){var b=s.back;return h("div",{class:"".concat(d.value,"-back")},[h(Je,{onClick:function(c){m("back",c)},class:"".concat(d.value,"-back-button"),"aria-label":b},{default:function(){return[a]}})])}},null)},f=function(){var a;return t.breadcrumb?h(Xe,t.breadcrumb,null):(a=n.breadcrumb)===null||a===void 0?void 0:a.call(n)},S=function(){var a,l,s,b,i,c,u,F,O,D=t.avatar,E=(a=t.title)!==null&&a!==void 0?a:(l=n.title)===null||l===void 0?void 0:l.call(n),j=(s=t.subTitle)!==null&&s!==void 0?s:(b=n.subTitle)===null||b===void 0?void 0:b.call(n),M=(i=t.tags)!==null&&i!==void 0?i:(c=n.tags)===null||c===void 0?void 0:c.call(n),U=(u=t.extra)!==null&&u!==void 0?u:(F=n.extra)===null||F===void 0?void 0:F.call(n),N="".concat(d.value,"-heading"),Q=E||j||M||U;if(!Q)return null;var ve=B(),Y=R(ve),he=Y||D||Q;return h("div",{class:N},[he&&h("div",{class:"".concat(N,"-left")},[Y,D?h(Ze,D,null):(O=n.avatar)===null||O===void 0?void 0:O.call(n),E&&h("span",{class:"".concat(N,"-title"),title:typeof E=="string"?E:void 0},[E]),j&&h("span",{class:"".concat(N,"-sub-title"),title:typeof j=="string"?j:void 0},[j]),M&&h("span",{class:"".concat(N,"-tags")},[M])]),U&&h("span",{class:"".concat(N,"-extra")},[U])])},_=function(){var a,l,s=(a=t.footer)!==null&&a!==void 0?a:we((l=n.footer)===null||l===void 0?void 0:l.call(n));return Be(s)?null:h("div",{class:"".concat(d.value,"-footer")},[s])},p=function(a){return h("div",{class:"".concat(d.value,"-content")},[a])};return function(){var o,a,l,s=((a=t.breadcrumb)===null||a===void 0?void 0:a.routes)||n.breadcrumb,b=t.footer||n.footer,i=Pe((l=n.default)===null||l===void 0?void 0:l.call(n)),c=Fe(d.value,(o={"has-breadcrumb":s,"has-footer":b},X(o,"".concat(d.value,"-ghost"),P.value),X(o,"".concat(d.value,"-rtl"),g.value==="rtl"),X(o,"".concat(d.value,"-compact"),H.value),o));return h(ke,{onResize:I},{default:function(){return[h("div",{class:c},[f(),S(),i.length?p(i):null,_()])]}})}}}),rt=ye(nt);const ot=G({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=se("page-footer"),{getCalcContentWidth:t}=Se();return{prefixCls:e,getCalcContentWidth:t}}});function it(e,t,r,m,n,C){return z(),Z("div",{class:V(e.prefixCls),style:ue({width:e.getCalcContentWidth})},[q("div",{class:V(`${e.prefixCls}__left`)},[T(e.$slots,"left",{},void 0,!0)],2),T(e.$slots,"default",{},void 0,!0),q("div",{class:V(`${e.prefixCls}__right`)},[T(e.$slots,"right",{},void 0,!0)],2)],6)}var ge=ce(ot,[["render",it],["__scopeId","data-v-2c113217"]]);function lt(e){let t;Te(()=>{e(),L(()=>{t=!0})}),Ae(()=>{t&&e()})}function st(e,t,r,m,n=0,C=A(0)){const d=A(null),{footerHeightRef:g}=Ge();let v={useLayoutFooter:!0};const H=f=>{v=f};function I(){L(()=>{R()})}function P(f,S="all"){var a,l,s,b;function _(i){return Number(i.replace(/[^\d]/g,""))}let p=0;const o="0px";if(f){const i=getComputedStyle(f),c=_((a=i==null?void 0:i.marginTop)!=null?a:o),u=_((l=i==null?void 0:i.marginBottom)!=null?l:o),F=_((s=i==null?void 0:i.paddingTop)!=null?s:o),O=_((b=i==null?void 0:i.paddingBottom)!=null?b:o);S==="all"?(p+=c,p+=u,p+=F,p+=O):S==="top"?(p+=c,p+=F):(p+=u,p+=O)}return p}function B(f){return f==null?null:f instanceof HTMLDivElement?f:f.$el}function R(){return ae(this,null,function*(){var b;if(!e.value)return;yield L();const f=B(w(t));if(!f)return;const{bottomIncludeBody:S}=Oe(f);let _=0;r.forEach(i=>{var c,u;_+=(u=(c=B(w(i)))==null?void 0:c.offsetHeight)!=null?u:0});let p=(b=P(f))!=null?b:0;m.forEach(i=>{p+=P(B(w(i)))});let o=0;function a(i,c){if(i&&c){const u=i.parentElement;u&&(Ie(c)?u.classList.contains(c)?o+=P(u,"bottom"):(o+=P(u,"bottom"),a(u,c)):Ee(c)&&c>0&&(o+=P(u,"bottom"),a(u,--c)))}}Ne(n)?a(f,w(n)):a(f,n);let l=S-w(g)-w(C)-_-p-o;const s=()=>{var i;(i=v.elements)==null||i.forEach(c=>{var u,F;l+=(F=(u=B(w(c)))==null?void 0:u.offsetHeight)!=null?F:0})};v.useLayoutFooter&&w(g)>0,s(),d.value=l})}return lt(()=>{L(()=>{R()})}),qe(()=>{R()},50,{immediate:!0}),de(()=>[g.value],()=>{R()},{flush:"post",immediate:!0}),{redoHeight:I,setCompensation:H,contentHeight:d}}const ct=G({name:"PageWrapper",components:{PageFooter:ge,PageHeader:rt},inheritAttrs:!1,props:{title:$.string,dense:$.bool,ghost:$.bool,content:$.string,contentStyle:{type:Object},contentBackground:$.bool,contentFullHeight:$.bool,contentClass:$.string,fixedHeight:$.bool,upwardSpace:$.oneOfType([$.number,$.string]).def(0)},setup(e,{slots:t,attrs:r}){const m=A(null),n=A(null),C=A(null),d=A(null),{prefixCls:g}=se("page-wrapper");je(ft,k(()=>e.fixedHeight));const v=k(()=>e.contentFullHeight),H=k(()=>e.upwardSpace),{redoHeight:I,setCompensation:P,contentHeight:B}=st(v,m,[n,d],[C],H);P({useLayoutFooter:!0,elements:[d]});const R=k(()=>{var o;return[g,{[`${g}--dense`]:e.dense},(o=r.class)!=null?o:{}]}),f=k(()=>(t==null?void 0:t.leftFooter)||(t==null?void 0:t.rightFooter)),S=k(()=>Object.keys(ne(t,"default","leftFooter","rightFooter","headerContent"))),_=k(()=>{const{contentFullHeight:o,contentStyle:a,fixedHeight:l}=e;if(!o)return x({},a);const s=`${w(B)}px`;return x(te(x({},a),{minHeight:s}),l?{height:s}:{})}),p=k(()=>{const{contentBackground:o,contentClass:a}=e;return[`${g}-content`,a,{[`${g}-content-bg`]:o}]});return de(()=>[f.value],()=>{I()},{flush:"post",immediate:!0}),{getContentStyle:_,wrapperRef:m,headerRef:n,contentRef:C,footerRef:d,getClass:R,getHeaderSlots:S,prefixCls:g,getShowFooter:f,omit:ne,getContentClass:p}}});function ut(e,t,r,m,n,C){const d=re("PageHeader"),g=re("PageFooter");return z(),Z("div",{class:V(e.getClass),ref:"wrapperRef"},[e.content||e.$slots.headerContent||e.title||e.getHeaderSlots.length?(z(),oe(d,Ue({key:0,ghost:e.ghost,title:e.title},e.omit(e.$attrs,"class"),{ref:"headerRef"}),ze({default:W(()=>[e.content?(z(),Z(Le,{key:0},[De(Me(e.content),1)],64)):T(e.$slots,"headerContent",{key:1})]),_:2},[Ve(e.getHeaderSlots,v=>({name:v,fn:W(H=>[T(e.$slots,v,xe(We(H||{})))])}))]),1040,["ghost","title"])):ie("",!0),q("div",{class:V(["overflow-hidden",e.getContentClass]),style:ue(e.getContentStyle),ref:"contentRef"},[T(e.$slots,"default")],6),e.getShowFooter?(z(),oe(g,{key:1,ref:"footerRef"},{left:W(()=>[T(e.$slots,"leftFooter")]),right:W(()=>[T(e.$slots,"rightFooter")]),_:3},512)):ie("",!0)],2)}var dt=ce(ct,[["render",ut]]);fe(ge);const yt=fe(dt),ft="PageWrapperFixedHeight";export{yt as P,ft as a,lt as o};
