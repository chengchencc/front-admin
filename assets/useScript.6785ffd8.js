import{w as a,ao as i,a7 as f}from"./index.a4184510.js";function p(r){const o=a(!1),s=a(!1),t=a(!1);let e;const n=new Promise((u,c)=>{i(()=>{e=document.createElement("script"),e.type="text/javascript",e.onload=function(){o.value=!1,t.value=!0,s.value=!1,u("")},e.onerror=function(l){o.value=!1,t.value=!1,s.value=!0,c(l)},e.src=r.src,document.head.appendChild(e)})});return f(()=>{e&&e.remove()}),{isLoading:o,error:s,success:t,toPromise:()=>n}}export{p as u};