var _=(g,l,a)=>new Promise((c,i)=>{var p=o=>{try{n(a.next(o))}catch(r){i(r)}},m=o=>{try{n(a.throw(o))}catch(r){i(r)}},n=o=>o.done?c(o.value):Promise.resolve(o.value).then(p,m);n((a=a.apply(g,l)).next())});import{a as I,c as B,w as x,x as L,f as S,j as e,o as h,i as w,p as s,B as t,I as z,D as k,C as b,t as v,F as R,l as V}from"./index.a4184510.js";import{F as y}from"./index.61947057.js";import"./index.5389ab9f.js";import{C as D}from"./index.453418bd.js";import{u as E,a as N,L as M,_ as U,b as j}from"./LoginFormTitle.e756206d.js";import"./_baseIteratee.e5042e06.js";import"./_baseIsEqual.022cfbb5.js";import"./get.e620704d.js";import"./findIndex.657e235c.js";import"./toInteger.58eec37d.js";import"./isEqual.297bdb1e.js";import"./useSize.6d3e9c8f.js";import"./responsiveObserve.74da7233.js";import"./useFlexGapSupport.22cad392.js";const ee=I({__name:"MobileForm",setup(g){const l=y.Item,{t:a}=B(),{handleBackLogin:c,getLoginState:i}=E(),{getFormRules:p}=N(),m=x(),n=x(!1),o=L({mobile:"",sms:""}),{validForm:r}=j(m),C=S(()=>e(i)===M.MOBILE);function F(){return _(this,null,function*(){const f=yield r();!f||console.log(f)})}return(f,u)=>C.value?(h(),w(R,{key:0},[s(U,{class:"enter-x"}),s(e(y),{class:"p-4 enter-x",model:o,rules:e(p),ref_key:"formRef",ref:m},{default:t(()=>[s(e(l),{name:"mobile",class:"enter-x"},{default:t(()=>[s(e(z),{size:"large",value:o.mobile,"onUpdate:value":u[0]||(u[0]=d=>o.mobile=d),placeholder:e(a)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),s(e(l),{name:"sms",class:"enter-x"},{default:t(()=>[s(e(D),{size:"large",class:"fix-auto-fill",value:o.sms,"onUpdate:value":u[1]||(u[1]=d=>o.sms=d),placeholder:e(a)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),s(e(l),{class:"enter-x"},{default:t(()=>[s(e(k),{type:"primary",size:"large",block:"",onClick:F,loading:n.value},{default:t(()=>[b(v(e(a)("sys.login.loginButton")),1)]),_:1},8,["loading"]),s(e(k),{size:"large",block:"",class:"mt-4",onClick:e(c)},{default:t(()=>[b(v(e(a)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])],64)):V("",!0)}});export{ee as default};