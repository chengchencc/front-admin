var m=(o,c,t)=>new Promise((a,s)=>{var i=e=>{try{r(t.next(e))}catch(p){s(p)}},n=e=>{try{r(t.throw(e))}catch(p){s(p)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(i,n);r((t=t.apply(o,c)).next())});import{B as u,b as f}from"./index.9784102a.js";import{D as g}from"./index.ec52e5cc.js";import{a as d}from"./data.b176e7ae.js";import{a as M,x as _,f as B,au as h,aw as l,o as D,k as R,B as k,p as w,ax as $}from"./index.91c78518.js";import{u as b}from"./useDescription.af0c6658.js";import"./useWindowSizeFn.2731919f.js";import"./FullscreenOutlined.afbc26d0.js";import"./isEqual.6a61b02c.js";import"./_baseIsEqual.816e480b.js";import"./index.01a64973.js";import"./responsiveObserve.65e938a4.js";import"./get.2c776a61.js";import"./data.88db1061.js";const v=M({name:"ViewModal",components:{BasicModal:u,Description:g},setup(o,{emit:c}){let t=_({});const[a]=b({data:t,schema:d}),[s,{setModalProps:i,closeModal:n}]=f(e=>m(this,null,function*(){i({confirmLoading:!1,width:"800px"}),console.log("data.record",e.record),Object.assign(t,e.record)})),r=B(()=>"\u67E5\u770B");return{registerModal:s,descriptionRegister:a,detailSchema:d,getTitle:r}}});function C(o,c,t,a,s,i){const n=l("Description"),r=l("BasicModal");return D(),R(r,$(o.$attrs,{onRegister:o.registerModal,title:o.getTitle,onOk:o.handleSubmit}),{default:k(()=>[w(n,{onRegister:o.descriptionRegister,size:"middle",column:2},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var A=h(v,[["render",C]]);export{A as default};