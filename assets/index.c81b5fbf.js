import{au as _,a as C,bQ as y,c as F,bK as g,bl as v,b as w,w as h,f as L,j as n,aW as S,aw as c,o as R,k as $,B as b,n as a,r as u,t as m,p as I,l as k,ec as U,ed as G}from"./index.c91dbcec.js";import{D as B,G as D,S as H}from"./siteSetting.8d69761e.js";import{a as W}from"./useContentViewHeight.2a6efe35.js";import{G as T}from"./GithubFilled.005d1bb6.js";import"./useWindowSizeFn.376791fd.js";const V=C({name:"LayoutFooter",components:{Footer:y.Footer,GithubFilled:T},setup(){const{t:o}=F(),{getShowFooter:e}=g(),{currentRoute:p}=v(),{prefixCls:d}=w("layout-footer"),r=h(null),{setFooterHeight:i}=W();return{getShowLayoutFooter:L(()=>{var s,t;if(n(e)){const l=(s=n(r))==null?void 0:s.$el;i((l==null?void 0:l.offsetHeight)||0)}else i(0);return n(e)&&!((t=n(p).meta)!=null&&t.hiddenFooter)}),prefixCls:d,t:o,DOC_URL:B,GITHUB_URL:D,SITE_URL:H,openWindow:S,footerRef:r}}}),N=o=>(U("data-v-62583d60"),o=o(),G(),o),A=N(()=>a("div",null,"Copyright \xA92020 Vben Admin",-1));function O(o,e,p,d,r,i){const f=c("GithubFilled"),s=c("Footer");return o.getShowLayoutFooter?(R(),$(s,{key:0,class:u(o.prefixCls),ref:"footerRef"},{default:b(()=>[a("div",{class:u(`${o.prefixCls}__links`)},[a("a",{onClick:e[0]||(e[0]=t=>o.openWindow(o.SITE_URL))},m(o.t("layout.footer.onlinePreview")),1),I(f,{onClick:e[1]||(e[1]=t=>o.openWindow(o.GITHUB_URL)),class:u(`${o.prefixCls}__github`)},null,8,["class"]),a("a",{onClick:e[2]||(e[2]=t=>o.openWindow(o.DOC_URL))},m(o.t("layout.footer.onlineDocument")),1)],2),A]),_:1},8,["class"])):k("",!0)}var Q=_(V,[["render",O],["__scopeId","data-v-62583d60"]]);export{Q as default};
