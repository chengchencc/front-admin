import{eJ as y,w as W,j as c,f3 as v,f4 as x,a4 as _,f5 as b,as as $,f6 as g,au as B,a as R,cC as I,aw as C,o as P,k as M,B as m,p as d,C as k}from"./index.a4184510.js";import{P as S}from"./index.7f4f8797.js";import"./index.00036abf.js";import"./index.97a5ac83.js";import"./useBreakpoint.3d7302fa.js";import"./responsiveObserve.74da7233.js";import"./useSize.6d3e9c8f.js";import"./useWindowSizeFn.c1349caf.js";import"./useContentViewHeight.82e6d0cc.js";import"./index.cff0b8af.js";import"./transButton.5ba7ce35.js";import"./ArrowLeftOutlined.62eef3b2.js";const z=Symbol("watermark-dom");function E(n=W(document.body)){const r=b(function(){const t=c(n);if(!t)return;const{clientHeight:e,clientWidth:o}=t;i({height:e,width:o})}),s=z.toString(),l=y(),f=()=>{const t=c(l);l.value=void 0;const e=c(n);!e||(t&&e.removeChild(t),v(e,r))};function w(t){const e=document.createElement("canvas"),o=300,u=240;Object.assign(e,{width:o,height:u});const a=e.getContext("2d");return a&&(a.rotate(-20*Math.PI/120),a.font="15px Vedana",a.fillStyle="rgba(0, 0, 0, 0.15)",a.textAlign="left",a.textBaseline="middle",a.fillText(t,o/20,u)),e.toDataURL("image/png")}function i(t={}){const e=c(l);!e||(g(t.width)&&(e.style.width=`${t.width}px`),g(t.height)&&(e.style.height=`${t.height}px`),g(t.str)&&(e.style.background=`url(${w(t.str)}) left top repeat`))}const p=t=>{if(c(l))return i({str:t}),s;const e=document.createElement("div");l.value=e,e.id=s,e.style.pointerEvents="none",e.style.top="0px",e.style.left="0px",e.style.position="absolute",e.style.zIndex="100000";const o=c(n);if(!o)return s;const{clientHeight:u,clientWidth:a}=o;return i({str:t,width:a,height:u}),o.appendChild(e),s};function h(t){p(t),x(document.documentElement,r),$()&&_(()=>{f()})}return{setWatermark:h,clear:f}}const L=R({components:{CollapseContainer:I,PageWrapper:S},setup(){const n=W(null),{setWatermark:r,clear:s}=E();return{setWatermark:r,clear:s,areaRef:n}}});function N(n,r,s,l,f,w){const i=C("a-button"),p=C("CollapseContainer"),h=C("PageWrapper");return P(),M(h,{title:"\u6C34\u5370\u793A\u4F8B"},{default:m(()=>[d(p,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:m(()=>[d(i,{type:"primary",class:"mr-2",onClick:r[0]||(r[0]=t=>n.setWatermark("WaterMark Info"))},{default:m(()=>[k(" Create ")]),_:1}),d(i,{color:"error",class:"mr-2",onClick:n.clear},{default:m(()=>[k(" Clear ")]),_:1},8,["onClick"]),d(i,{color:"warning",class:"mr-2",onClick:r[1]||(r[1]=t=>n.setWatermark("WaterMark Info New"))},{default:m(()=>[k(" Reset ")]),_:1})]),_:1})]),_:1})}var K=B(L,[["render",N]]);export{K as default};