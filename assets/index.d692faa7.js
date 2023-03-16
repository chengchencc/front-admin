import{a as b,aE as Q,b as Z,f as L,aF as ee,au as T,aw as _,o as C,i as W,p as o,B as $,aA as te,F as ne,az as oe,k as G,aB as ae,ax as M,ay as re,r as se,x as ie,w as N,af as le,j as g,cc as ce,C as X,cm as ue,co as me,eu as de,ev as ge}from"./index.4804300a.js";import{I as R}from"./index.5b9902c5.js";import{P as fe}from"./index.86f2dbf6.js";import"./index.699aa748.js";import"./index.1f68cb78.js";import"./useBreakpoint.3a1e9c1a.js";import"./responsiveObserve.dcad6fcd.js";import"./useSize.ea1bf5d1.js";import"./useWindowSizeFn.38c7676c.js";import"./useContentViewHeight.8fc9ee42.js";import"./index.583dbbd3.js";import"./transButton.342edbea.js";import"./ArrowLeftOutlined.0255904f.js";const pe=b({name:"ImagePreview",components:{Image:R,PreviewGroup:R.PreviewGroup},props:{functional:Q.bool,imageList:{type:Array}},setup(n){const{prefixCls:u}=Z("image-preview"),i=L(()=>{const{imageList:s}=n;return s?s.map(t=>ee(t)?{src:t,placeholder:!1}:t):[]});return{prefixCls:u,getImageList:i}}});function ve(n,u,i,s,t,h){const d=_("Image"),p=_("PreviewGroup");return C(),W("div",{class:se(n.prefixCls)},[o(p,null,{default:$(()=>[!n.imageList||n.$slots.default?te(n.$slots,"default",{key:0}):(C(!0),W(ne,{key:1},oe(n.getImageList,l=>(C(),G(d,ae(M({key:l.src},l)),re({_:2},[l.placeholder?{name:"placeholder",fn:$(()=>[o(d,M(l,{src:l.placeholder,preview:!1}),null,16,["src"])]),key:"0"}:void 0]),1040))),128))]),_:3})],2)}var _e=T(pe,[["render",ve]]),he="/front-admin/assets/resume.8f27866b.svg",Ie="/front-admin/assets/p-rotate.cb8bbfc3.svg",we="/front-admin/assets/scale.44abde22.svg",Le="/front-admin/assets/unscale.c552f416.svg",Ce="/front-admin/assets/unrotate.ef6a2daf.svg",f=function(n){return n[n.LOADING=0]="LOADING",n[n.DONE=1]="DONE",n[n.FAIL=2]="FAIL",n}(f||{});const $e={show:{type:Boolean,default:!1},imageList:{type:[Array],default:null},index:{type:Number,default:0},scaleStep:{type:Number},defaultWidth:{type:Number},maskClosable:{type:Boolean},rememberState:{type:Boolean}},r="img-preview";var xe=b({name:"ImagePreview",props:$e,emits:["img-load","img-error"],setup(n,{expose:u,emit:i}){const s=new Map,t=ie({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:f.LOADING,currentIndex:0,moveX:0,moveY:0,show:n.show}),h=N(null),d=N(null);function p(){Y();const{index:e,imageList:a}=n;if(!a||!a.length)throw new Error("imageList is undefined");t.currentIndex=e,F(a[e])}function l(){t.imgScale=1,t.imgRotate=0,t.imgTop=0,t.imgLeft=0}function Y(){const e=g(h);!e||(e.onmousewheel=x,document.body.addEventListener("DOMMouseScroll",x),document.ondragstart=function(){return!1})}const I=L(()=>{var a;const e=(a=n==null?void 0:n.scaleStep)!=null?a:0;return(e!=null?e:0>0)?e/100:t.imgScale/10});function x(e){e=e||window.event,e.delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&w(I.value),e.delta<0&&w(-I.value)}function w(e){t.imgScale<=.2&&e<0||(t.imgScale+=e)}function k(e){t.imgRotate+=e}function U(){const e=g(d);!e||(e.onmousemove=null)}function F(e){t.status=f.LOADING;const a=new Image;a.src=e,a.onload=c=>{if(t.currentUrl!==e){const m=c.composedPath();if(n.rememberState){s.set(t.currentUrl,{scale:t.imgScale,top:t.imgTop,left:t.imgLeft,rotate:t.imgRotate});const v=s.get(e);v?(t.imgScale=v.scale,t.imgTop=v.top,t.imgRotate=v.rotate,t.imgLeft=v.left):(l(),n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth))}else n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth);m&&i("img-load",{index:t.currentIndex,dom:m[0],url:e})}t.currentUrl=e,t.status=f.DONE},a.onerror=c=>{const m=c.composedPath();m&&i("img-error",{index:t.currentIndex,dom:m[0],url:e}),t.status=f.FAIL}}function P(e){e&&e.stopPropagation(),D()}function D(){t.show=!1,document.body.removeEventListener("DOMMouseScroll",x),document.ondragstart=null}function A(){l()}u({resume:A,close:D,prev:S.bind(null,"left"),next:S.bind(null,"right"),setScale:e=>{e>0&&e<=10&&(t.imgScale=e)},setRotate:e=>{t.imgRotate=e}});function S(e){const{currentIndex:a}=t,{imageList:c}=n;e==="left"&&(t.currentIndex--,a<=0&&(t.currentIndex=c.length-1)),e==="right"&&(t.currentIndex++,a>=c.length-1&&(t.currentIndex=0)),F(c[t.currentIndex])}function z(e){e=e||window.event,t.moveX=e.clientX,t.moveY=e.clientY;const a=g(d);a&&(a.onmousemove=j)}function j(e){e=e||window.event,e.preventDefault();const a=e.clientX-t.moveX,c=e.clientY-t.moveY;t.imgLeft+=a,t.imgTop+=c,t.moveX=e.clientX,t.moveY=e.clientY}const V=L(()=>{const{imgScale:e,imgRotate:a,imgTop:c,imgLeft:m}=t;return{transform:`scale(${e}) rotate(${a}deg)`,marginTop:`${c}px`,marginLeft:`${m}px`,maxWidth:n.defaultWidth?"unset":"100%"}}),E=L(()=>{const{imageList:e}=n;return e.length>1});le(()=>{n.show&&p(),n.imageList&&l()});const q=e=>{n.maskClosable&&e.target&&e.target.classList.contains(`${r}-content`)&&P(e)},H=()=>o("div",{class:`${r}__close`,onClick:P},[o(ce,{class:`${r}__close-icon`},null)]),J=()=>{if(!g(E))return null;const{currentIndex:e}=t,{imageList:a}=n;return o("div",{class:`${r}__index`},[e+1,X(" / "),a.length])},K=()=>o("div",{class:`${r}__controller`},[o("div",{class:`${r}__controller-item`,onClick:()=>w(-I.value)},[o("img",{src:Le},null)]),o("div",{class:`${r}__controller-item`,onClick:()=>w(I.value)},[o("img",{src:we},null)]),o("div",{class:`${r}__controller-item`,onClick:A},[o("img",{src:he},null)]),o("div",{class:`${r}__controller-item`,onClick:()=>k(-90)},[o("img",{src:Ce},null)]),o("div",{class:`${r}__controller-item`,onClick:()=>k(90)},[o("img",{src:Ie},null)])]),O=e=>g(E)?o("div",{class:[`${r}__arrow`,e],onClick:()=>S(e)},[e==="left"?o(ue,null,null):o(me,null,null)]):null;return()=>t.show&&o("div",{class:r,ref:h,onMouseup:U,onClick:q},[o("div",{class:`${r}-content`},[o("img",{style:g(V),class:[`${r}-image`,t.status===f.DONE?"":"hidden"],ref:d,src:t.currentUrl,onMousedown:z},null),H(),J(),K(),O("left"),O("right")])])}});let y=null;function Se(n){var s;if(!de)return;const u={},i=document.createElement("div");return Object.assign(u,{show:!0,index:0,scaleStep:100},n),y=o(xe,u),ge(y,i),document.body.appendChild(i),(s=y.component)==null?void 0:s.exposed}const B=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"],ye=b({components:{PageWrapper:fe,ImagePreview:_e},setup(){function n(){Se({imageList:B,defaultWidth:700,rememberState:!0,onImgLoad:({index:i,url:s,dom:t})=>{console.log(`\u7B2C${i+1}\u5F20\u56FE\u7247\u5DF2\u52A0\u8F7D\uFF0CURL\u4E3A\uFF1A${s}`,t)}})}return{imgList:B,openImg:n}}});function be(n,u,i,s,t,h){const d=_("ImagePreview"),p=_("a-button"),l=_("PageWrapper");return C(),G(l,{title:"\u56FE\u7247\u9884\u89C8\u793A\u4F8B"},{default:$(()=>[o(d,{imageList:n.imgList},null,8,["imageList"]),o(p,{onClick:n.openImg,type:"primary"},{default:$(()=>[X("\u65E0\u9884\u89C8\u56FE")]),_:1},8,["onClick"])]),_:1})}var Ge=T(ye,[["render",be]]);export{Ge as default};
