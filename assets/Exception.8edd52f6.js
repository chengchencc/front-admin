import{a as N,b4 as e,w as O,b5 as R,b6 as S,b7 as A,b as v,f as _,j as s,b8 as d,p as r,D as G,c as k}from"./index.0afb6b1a.js";import{R as D}from"./index.cefdbef6.js";var P="/front-admin/assets/no-data.f7e550cc.svg",C="/front-admin/assets/net-error.61b7e6df.svg",w=N({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=O(new Map),{query:m}=R(),o=S(),c=A(),{t}=k(),{prefixCls:p}=v("app-exception-page"),x=_(()=>{const{status:l}=m,{status:i}=n;return Number(l)||i}),E=_(()=>s(a).get(s(x))),b=t("sys.exception.backLogin"),u=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?b:u,handler:()=>n.full?o(d.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?b:u,handler:()=>n.full?o(d.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:u,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:P}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:C}),()=>{const{title:l,subTitle:i,btnText:T,icon:f,handler:g,status:y}=s(E)||{};return r(D,{class:p,status:y,title:n.title||l,"sub-title":n.subTitle||i},{extra:()=>T&&r(G,{type:"primary",onClick:g},{default:()=>T}),icon:()=>f?r("img",{src:f},null):null})}}});export{w as default};
