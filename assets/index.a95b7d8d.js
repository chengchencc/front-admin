import{P as W}from"./index.f1bbd8b9.js";import{au as M,a as X,aw as Y,bZ as A,o as C,k as D,B as S,y as q,i as F,C as H}from"./index.0afb6b1a.js";import"./index.0fb2ca65.js";import"./index.ab4596d9.js";import"./useBreakpoint.f66a95b4.js";import"./responsiveObserve.8bc71b85.js";import"./useSize.b98aa611.js";import"./useWindowSizeFn.b437c5f3.js";import"./useContentViewHeight.6667aea5.js";import"./index.97f64344.js";import"./ArrowLeftOutlined.8571d53f.js";const l={event:"mousedown",transition:400},x={beforeMount:(e,t)=>{if(t.value===!1)return;const o=e.getAttribute("ripple-background");V(Object.keys(t.modifiers),l);const s=o||x.background,r=x.zIndex;e.addEventListener(l.event,d=>{I({event:d,el:e,background:s,zIndex:r})})},updated(e,t){var s,r;if(!t.value){(s=e==null?void 0:e.clearRipple)==null||s.call(e);return}const o=e.getAttribute("ripple-background");(r=e==null?void 0:e.setBackground)==null||r.call(e,o)}};function I({event:e,el:t,zIndex:o,background:s}){var E,R;const r=parseInt(getComputedStyle(t).borderWidth.replace("px","")),d=e.clientX||e.touches[0].clientX,f=e.clientY||e.touches[0].clientY,g=t.getBoundingClientRect(),{left:L,top:B}=g,{offsetWidth:b,offsetHeight:_}=t,{transition:T}=l,u=d-L,m=f-B,y=Math.max(u,b-u),$=Math.max(m,_-m),k=window.getComputedStyle(t),h=Math.sqrt(y*y+$*$),w=r>0?r:0,a=document.createElement("div"),n=document.createElement("div");a.className="ripple",Object.assign((E=a.style)!=null?E:{},{marginTop:"0px",marginLeft:"0px",width:"1px",height:"1px",transition:`all ${T}ms cubic-bezier(0.4, 0, 0.2, 1)`,borderRadius:"50%",pointerEvents:"none",position:"relative",zIndex:o!=null?o:"9999",backgroundColor:s!=null?s:"rgba(0, 0, 0, 0.12)"}),n.className="ripple-container",Object.assign((R=n.style)!=null?R:{},{position:"absolute",left:`${0-w}px`,top:`${0-w}px`,height:"0",width:"0",pointerEvents:"none",overflow:"hidden"});const v=t.style.position.length>0?t.style.position:getComputedStyle(t).position;v!=="relative"&&(t.style.position="relative"),n.appendChild(a),t.appendChild(n),Object.assign(a.style,{marginTop:`${m}px`,marginLeft:`${u}px`});const{borderTopLeftRadius:N,borderTopRightRadius:P,borderBottomLeftRadius:j,borderBottomRightRadius:O}=k;Object.assign(n.style,{width:`${b}px`,height:`${_}px`,direction:"ltr",borderTopLeftRadius:N,borderTopRightRadius:P,borderBottomLeftRadius:j,borderBottomRightRadius:O}),setTimeout(()=>{var c;const i=`${h*2}px`;Object.assign((c=a.style)!=null?c:{},{width:i,height:i,marginLeft:`${u-h}px`,marginTop:`${m-h}px`})},0);function p(){setTimeout(()=>{a.style.backgroundColor="rgba(0, 0, 0, 0)"},250),setTimeout(()=>{var i;(i=n==null?void 0:n.parentNode)==null||i.removeChild(n)},850),t.removeEventListener("mouseup",p,!1),t.removeEventListener("mouseleave",p,!1),t.removeEventListener("dragstart",p,!1),setTimeout(()=>{let i=!0;for(let c=0;c<t.childNodes.length;c++)t.childNodes[c].className==="ripple-container"&&(i=!1);i&&(t.style.position=v!=="static"?v:"")},l.transition+260)}e.type==="mousedown"?(t.addEventListener("mouseup",p,!1),t.addEventListener("mouseleave",p,!1),t.addEventListener("dragstart",p,!1)):p(),t.setBackground=i=>{!i||(a.style.backgroundColor=i)}}function V(e,t){e.forEach(o=>{isNaN(Number(o))?t.event=o:t.transition=o})}const Z=X({components:{PageWrapper:W},directives:{Ripple:x}}),z={class:"demo-box"};function G(e,t,o,s,r,d){const f=Y("PageWrapper"),g=A("ripple");return C(),D(f,{title:"Ripple\u793A\u4F8B"},{default:S(()=>[q((C(),F("div",z,[H("content")])),[[g]])]),_:1})}var at=M(Z,[["render",G],["__scopeId","data-v-42c234a1"]]);export{at as default};
