import{C as s}from"./index.742ddcce.js";import{a as h,H as a,J as P,K as x,S as f,cb as p,p as i,Q as $}from"./index.91c78518.js";var u=h({name:"ACardMeta",props:{prefixCls:a.string,title:a.VNodeChild,description:a.VNodeChild,avatar:a.VNodeChild},setup:function(){return{configProvider:P("configProvider",x)}},render:function(){var t=this.$props.prefixCls,n=this.configProvider.getPrefixCls,e=n("card",t),l=f({},"".concat(e,"-meta"),!0),c=p(this,"avatar"),d=p(this,"title"),o=p(this,"description"),v=c?i("div",{class:"".concat(e,"-meta-avatar")},[c]):null,C=d?i("div",{class:"".concat(e,"-meta-title")},[d]):null,g=o?i("div",{class:"".concat(e,"-meta-description")},[o]):null,_=C||g?i("div",{class:"".concat(e,"-meta-detail")},[C,g]):null;return i("div",{class:l},[v,_])}}),m=h({name:"ACardGrid",__ANT_CARD_GRID:!0,props:{prefixCls:a.string,hoverable:a.looseBool},setup:function(){return{configProvider:P("configProvider",x)}},render:function(){var t,n=this.$props,e=n.prefixCls,l=n.hoverable,c=l===void 0?!0:l,d=this.configProvider.getPrefixCls,o=d("card",e),v=(t={},f(t,"".concat(o,"-grid"),!0),f(t,"".concat(o,"-grid-hoverable"),c),t);return i("div",{class:v},[$(this)])}});s.Meta=u;s.Grid=m;s.install=function(r){return r.component(s.name,s),r.component(u.name,u),r.component(m.name,m),r};