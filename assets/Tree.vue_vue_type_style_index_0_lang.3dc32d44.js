var At=Object.defineProperty,wt=Object.defineProperties;var Ct=Object.getOwnPropertyDescriptors;var Ce=Object.getOwnPropertySymbols;var Ft=Object.prototype.hasOwnProperty,$t=Object.prototype.propertyIsEnumerable;var Fe=(e,t,n)=>t in e?At(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))Ft.call(t,n)&&Fe(e,n,t[n]);if(Ce)for(var n of Ce(t))$t.call(t,n)&&Fe(e,n,t[n]);return e},X=(e,t)=>wt(e,Ct(t));var $e=(e,t,n)=>new Promise((r,a)=>{var s=m=>{try{y(n.next(m))}catch(p){a(p)}},i=m=>{try{y(n.throw(m))}catch(p){a(p)}},y=m=>m.done?r(m.value):Promise.resolve(m.value).then(s,i);y((n=n.apply(e,t)).next())});import{el as Y,V as Pt,em as tt,en as he,L as Nt,p as b,s as ge,a as re,an as nt,_ as E,J as rt,K as at,ab as Lt,ai as Dt,O as te,cb as st,R as ct,S as Pe,Q as ne,T as ye,H as l,U as q,ac as It,ak as Bt,cd as ie,eo as Mt,ep as jt,aJ as Ht,eq as Vt,er as zt,aK as Ut,d1 as qt,cV as Ne,es as Rt,aF as Gt,b_ as Jt,be as pe,dr as Wt,cF as Qt,bf as oe,I as Yt,aE as _,c as Zt,w as lt,f as z,a3 as U,au as Xt,bB as en,aw as M,o as D,i as G,aA as tn,l as V,k as de,B as J,C as Le,t as De,r as nn,F as ve,az as rn,aB as an,aC as sn,bt as cn,j as x,ae as Ie,et as Be,x as Me,b as ln,ar as W,dh as on,al as je,av as ue,eu as dn,dk as un,af as Q,ao as fn,dU as He,y as Ve,z as ze,bM as hn,ax as Ue,ev as qe,ci as yn,ew as pn,by as Re,cB as vn}from"./index.18956233.js";import{u as mn}from"./useContextMenu.67c68051.js";import{c as gn,C as bn}from"./CaretDownFilled.d85eb8bb.js";import{F as it,a as ot,n as kn,d as xn}from"./util.2f7864c0.js";import{P as Sn}from"./PlusSquareOutlined.e23e424e.js";import{T as dt}from"./Tree.719da42e.js";import{g as fe}from"./get.9b230a51.js";var ut=Y.endEvents.length!==0,Kn=["Webkit","Moz","O","ms"],Ge=["-webkit-","-moz-","-o-","ms-",""];function ee(e,t){for(var n=window.getComputedStyle(e,null),r="",a=0;a<Ge.length&&(r=n.getPropertyValue(Ge[a]+t),!r);a++);return r}function ft(e){if(ut){var t=parseFloat(ee(e,"transition-delay"))||0,n=parseFloat(ee(e,"transition-duration"))||0,r=parseFloat(ee(e,"animation-delay"))||0,a=parseFloat(ee(e,"animation-duration"))||0,s=Math.max(n+t,a+r);e.rcEndAnimTimeout=setTimeout(function(){e.rcEndAnimTimeout=null,e.rcEndListener&&e.rcEndListener()},s*1e3+200)}}function ht(e){e.rcEndAnimTimeout&&(clearTimeout(e.rcEndAnimTimeout),e.rcEndAnimTimeout=null)}var ae=function(t,n,r){var a=Pt(n)==="object",s=a?n.name:n,i=a?n.active:"".concat(n,"-active"),y=r,m,p,c=gn(t);return r&&Object.prototype.toString.call(r)==="[object Object]"&&(y=r.end,m=r.start,p=r.active),t.rcEndListener&&t.rcEndListener(),t.rcEndListener=function(o){o&&o.target!==t||(t.rcAnimTimeout&&(tt(t.rcAnimTimeout),t.rcAnimTimeout=null),ht(t),c.remove(s),c.remove(i),Y.removeEndEventListener(t,t.rcEndListener),t.rcEndListener=null,y&&y())},Y.addEndEventListener(t,t.rcEndListener),m&&m(),c.add(s),t.rcAnimTimeout=he(function(){t.rcAnimTimeout=null,c.add(s),c.add(i),p&&he(p,0),ft(t)},30),{stop:function(){t.rcEndListener&&t.rcEndListener()}}};ae.style=function(e,t,n){e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(r){r&&r.target!==e||(e.rcAnimTimeout&&(tt(e.rcAnimTimeout),e.rcAnimTimeout=null),ht(e),Y.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,n&&n())},Y.addEndEventListener(e,e.rcEndListener),e.rcAnimTimeout=he(function(){for(var r in t)t.hasOwnProperty(r)&&(e.style[r]=t[r]);e.rcAnimTimeout=null,ft(e)},0)};ae.setTransition=function(e,t,n){var r=t,a=n;n===void 0&&(a=r,r=""),r=r||"",Kn.forEach(function(s){e.style["".concat(s,"Transition").concat(r)]=a})};ae.isCssAnimationSupported=ut;var Tn=ae;function Je(e,t,n){var r,a,s;return Tn(e,"ant-motion-collapse-legacy",{start:function(){s&&cancelAnimationFrame(s),t?(r=e.offsetHeight,r===0?s=requestAnimationFrame(function(){r=e.offsetHeight,e.style.height="0px",e.style.opacity="0"}):(e.style.height="0px",e.style.opacity="0")):(e.style.height="".concat(e.offsetHeight,"px"),e.style.opacity="1")},active:function(){a&&cancelAnimationFrame(a),a=requestAnimationFrame(function(){e.style.height="".concat(t?r:0,"px"),e.style.opacity=t?"1":"0"})},end:function(){s&&cancelAnimationFrame(s),a&&cancelAnimationFrame(a),e.style.height="",e.style.opacity="",n&&n()}})}var On={onEnter:function(t,n){Nt(function(){Je(t,!0,n)})},onLeave:function(t,n){return Je(t,!1,n)}},En=On,_n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"minus-square",theme:"outlined"},An=_n;function We(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){wn(e,a,n[a])})}return e}function wn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var be=function(t,n){var r=We({},t,n.attrs);return b(ge,We({},r,{icon:An}),null)};be.displayName="MinusSquareOutlined";be.inheritAttrs=!1;var Cn=be,Qe=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Fn=dt.TreeNode;function yt(){return{showLine:l.looseBool,multiple:l.looseBool,autoExpandParent:l.looseBool,checkStrictly:l.looseBool,checkable:l.looseBool,disabled:l.looseBool,defaultExpandAll:l.looseBool,defaultExpandParent:l.looseBool,defaultExpandedKeys:l.arrayOf(l.oneOfType([l.string,l.number])),expandedKeys:l.arrayOf(l.oneOfType([l.string,l.number])),checkedKeys:l.oneOfType([l.arrayOf(l.oneOfType([l.string,l.number])),l.shape({checked:l.arrayOf(l.oneOfType([l.string,l.number])),halfChecked:l.arrayOf(l.oneOfType([l.string,l.number]))}).loose]),defaultCheckedKeys:l.arrayOf(l.oneOfType([l.string,l.number])),selectedKeys:l.arrayOf(l.oneOfType([l.string,l.number])),defaultSelectedKeys:l.arrayOf(l.oneOfType([l.string,l.number])),selectable:l.looseBool,filterAntTreeNode:l.func,loadData:l.func,loadedKeys:l.arrayOf(l.oneOfType([l.string,l.number])),draggable:l.looseBool,showIcon:l.looseBool,icon:l.func,switcherIcon:l.any,prefixCls:l.string,filterTreeNode:l.func,openAnimation:l.any,treeData:{type:Array},replaceFields:l.object,blockNode:l.looseBool,onExpand:l.func,onCheck:l.func,onSelect:l.func,onClick:l.func,onDoubleclick:l.func,onDblclick:l.func,"onUpdate:selectedKeys":l.func,"onUpdate:checkedKeys":l.func,"onUpdate:expandedKeys":l.func}}var F=re({name:"ATree",inheritAttrs:!1,props:nt(yt(),{checkable:!1,showIcon:!1,openAnimation:E(E({},En),{appear:null}),blockNode:!1}),setup:function(){return{tree:null,configProvider:rt("configProvider",at)}},TreeNode:Fn,methods:{renderSwitcherIcon:function(t,n,r){var a=r.isLeaf,s=r.loading,i=r.expanded,y=this.$props.showLine;if(s)return b(Lt,{class:"".concat(t,"-switcher-loading-icon")},null);if(a)return y?b(it,{class:"".concat(t,"-switcher-line-icon")},null):null;var m="".concat(t,"-switcher-icon");return n?Dt(n,{class:m}):y?i?b(Cn,{class:"".concat(t,"-switcher-line-icon")},null):b(Sn,{class:"".concat(t,"-switcher-line-icon")},null):b(bn,{class:m},null)},updateTreeData:function(t){var n=this,r=this.$slots,a={children:"children",title:"title",key:"key"},s=E(E({},a),this.$props.replaceFields);return t.map(function(i){var y=i[s.key],m=i[s.children],p=i.slots,c=p===void 0?{}:p,o=i.class,u=i.style,f=Qe(i,["slots","class","style"]),v=E(E({},f),{icon:r[c.icon]||f.icon,switcherIcon:r[c.switcherIcon]||f.switcherIcon,title:r[c.title]||r.title||f[s.title],dataRef:i,key:y,class:o,style:u});return m?E(E({},v),{children:n.updateTreeData(m)}):v})},setTreeRef:function(t){this.tree=t},handleCheck:function(t,n){this.$emit("update:checkedKeys",t),this.$emit("check",t,n)},handleExpand:function(t,n){this.$emit("update:expandedKeys",t),this.$emit("expand",t,n)},handleSelect:function(t,n){this.$emit("update:selectedKeys",t),this.$emit("select",t,n)}},render:function(){var t=this,n,r=te(this),a=r.prefixCls,s=r.showIcon,i=r.treeNodes,y=r.blockNode,m=this.configProvider.getPrefixCls,p=m("tree",a),c=st(this,"switcherIcon"),o=r.checkable,u=r.treeData||i;u&&(u=this.updateTreeData(u));var f=this.$attrs,v=f.class,h=Qe(f,["class"]),g=E(E(E(E({},r),{prefixCls:p,checkable:o&&b("span",{class:"".concat(p,"-checkbox-inner")},null),children:ne(this),switcherIcon:function(w){return t.renderSwitcherIcon(p,c,w)},ref:this.setTreeRef}),h),{class:ct(v,(n={},Pe(n,"".concat(p,"-icon-hide"),!s),Pe(n,"".concat(p,"-block-node"),y),n)),onCheck:this.handleCheck,onExpand:this.handleExpand,onSelect:this.handleSelect});return u&&(g.treeData=u),b(dt,ye(ye({},g),{},{__propsSymbol__:[]}),null)}}),$n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"},Pn=$n;function Ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){Nn(e,a,n[a])})}return e}function Nn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ke=function(t,n){var r=Ye({},t,n.attrs);return b(ge,Ye({},r,{icon:Pn}),null)};ke.displayName="FolderOpenOutlined";ke.inheritAttrs=!1;var Ln=ke,Dn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"},In=Dn;function Ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){Bn(e,a,n[a])})}return e}function Bn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var xe=function(t,n){var r=Ze({},t,n.attrs);return b(ge,Ze({},r,{icon:In}),null)};xe.displayName="FolderOutlined";xe.inheritAttrs=!1;var Mn=xe,L;(function(e){e[e.None=0]="None",e[e.Start=1]="Start",e[e.End=2]="End"})(L||(L={}));function Se(e,t){var n=kn(e)||[];function r(a){var s=a.key,i=ne(a);t(s,a)!==!1&&Se(i,t)}n.forEach(r)}function jn(e){var t=ot(e),n=t.keyEntities;return q(n.keys())}function Hn(e,t,n,r){var a=[],s=L.None;if(n&&n===r)return[n];if(!n||!r)return[];function i(y){return y===n||y===r}return Se(e,function(y){if(s===L.End)return!1;if(i(y)){if(a.push(y),s===L.None)s=L.Start;else if(s===L.Start)return s=L.End,!1}else s===L.Start&&a.push(y);return t.indexOf(y)!==-1}),a}function Xe(e,t){var n=q(t),r=[];return Se(e,function(a,s){var i=n.indexOf(a);return i!==-1&&(r.push(s),n.splice(i,1)),!!n.length}),r}function pt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],r=t.key,a=r===void 0?"key":r,s=t.children,i=s===void 0?"children":s;return(e||[]).forEach(function(y){n.push(y[a]),y[i]&&(n=[].concat(q(n),q(pt(y[i],t))))}),n}var et=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function Vn(e){var t=e.isLeaf,n=e.expanded;return t?b(it,null,null):n?b(Ln,null,null):b(Mn,null,null)}var me=re({name:"ADirectoryTree",mixins:[It],inheritAttrs:!1,props:nt(E(E({},yt()),{expandAction:l.oneOf([!1,"click","doubleclick","dblclick"])}),{showIcon:!0,expandAction:"click"}),setup:function(){return{children:null,onDebounceExpand:null,tree:null,lastSelectedKey:"",cachedSelectedKeys:[],configProvider:rt("configProvider",at)}},data:function(){var t=te(this),n=t.defaultExpandAll,r=t.defaultExpandParent,a=t.expandedKeys,s=t.defaultExpandedKeys,i=ne(this),y=ot(i),m=y.keyEntities,p={};return p._selectedKeys=t.selectedKeys||t.defaultSelectedKeys||[],n?t.treeData?p._expandedKeys=pt(t.treeData,t.replaceFields):p._expandedKeys=jn(i):r?p._expandedKeys=xn(a||s,m):p._expandedKeys=a||s,E({_selectedKeys:[],_expandedKeys:[]},p)},watch:{expandedKeys:function(t){this.setState({_expandedKeys:t})},selectedKeys:function(t){this.setState({_selectedKeys:t})}},created:function(){this.onDebounceExpand=Bt(this.expandFolderNode,200,{leading:!0})},methods:{handleExpand:function(t,n){this.setUncontrolledState({_expandedKeys:t}),this.$emit("update:expandedKeys",t),this.$emit("expand",t,n)},handleClick:function(t,n){var r=this.$props.expandAction;r==="click"&&this.onDebounceExpand(t,n),this.$emit("click",t,n)},handleDoubleClick:function(t,n){var r=this.$props.expandAction;(r==="dblclick"||r==="doubleclick")&&this.onDebounceExpand(t,n),this.$emit("doubleclick",t,n),this.$emit("dblclick",t,n)},hanldeSelect:function(t,n){var r=this.$props.multiple,a=this.children||[],s=this.$data._expandedKeys,i=s===void 0?[]:s,y=n.node,m=n.nativeEvent,p=y.eventKey,c=p===void 0?"":p,o={},u=E(E({},n),{selected:!0}),f=m.ctrlKey||m.metaKey,v=m.shiftKey,h;r&&f?(h=t,this.lastSelectedKey=c,this.cachedSelectedKeys=h,u.selectedNodes=Xe(a,h)):r&&v?(h=Array.from(new Set([].concat(q(this.cachedSelectedKeys||[]),q(Hn(a,i,c,this.lastSelectedKey))))),u.selectedNodes=Xe(a,h)):(h=[c],this.lastSelectedKey=c,this.cachedSelectedKeys=h,u.selectedNodes=[n.node]),o._selectedKeys=h,this.$emit("update:selectedKeys",h),this.$emit("select",h,u),this.setUncontrolledState(o)},setTreeRef:function(t){this.tree=t},expandFolderNode:function(t,n){var r=n.isLeaf;if(!(r||t.shiftKey||t.metaKey||t.ctrlKey)&&this.tree.tree){var a=this.tree.tree;a.onNodeExpand(t,n)}},setUncontrolledState:function(t){var n=ie(t,Object.keys(te(this)).map(function(r){return"_".concat(r)}));Object.keys(n).length&&this.setState(n)},handleCheck:function(t,n){this.$emit("update:checkedKeys",t),this.$emit("check",t,n)}},render:function(){var t=this;this.children=ne(this);var n=te(this),r=n.prefixCls,a=et(n,["prefixCls"]),s=this.configProvider.getPrefixCls,i=s("tree",r),y=this.$data,m=y._expandedKeys,p=y._selectedKeys,c=this.$attrs,o=c.class,u=et(c,["class"]),f=ct("".concat(i,"-directory"),o),v=E(E(E({icon:Vn},u),ie(a,["onUpdate:selectedKeys","onUpdate:checkedKeys","onUpdate:expandedKeys"])),{prefixCls:i,expandedKeys:m,selectedKeys:p,switcherIcon:st(this,"switcherIcon"),ref:this.setTreeRef,class:f,onSelect:this.hanldeSelect,onClick:this.handleClick,onDblclick:this.handleDoubleClick,onExpand:this.handleExpand,onCheck:this.handleCheck});return b(F,v,ye({default:function(){return[t.children]}},ie(this.$slots,["default"])))}});F.TreeNode.name="ATreeNode";F.DirectoryTree=me;F.install=function(e){return e.component(F.name,F),e.component(F.TreeNode.name,F.TreeNode),e.component(me.name,me),e};F.TreeNode;var zn=200;function Un(e,t,n,r){var a=-1,s=Vt,i=!0,y=e.length,m=[],p=t.length;if(!y)return m;n&&(t=Mt(t,jt(n))),r?(s=zt,i=!1):t.length>=zn&&(s=Ut,i=!1,t=new Ht(t));e:for(;++a<y;){var c=e[a],o=n==null?c:n(c);if(c=r||c!==0?c:0,i&&o===o){for(var u=p;u--;)if(t[u]===o)continue e;m.push(c)}else s(t,o,r)||m.push(c)}return m}var qn=qt(function(e,t){return Ne(e)?Un(e,Rt(t,1,Ne,!0)):[]}),Rn=qn;const Gn=({icon:e})=>e?Gt(e)?Jt(pe,{icon:e,class:"mr-1"}):pe:null;const Jn=re({name:"BasicTreeHeader",components:{BasicTitle:Wt,Icon:pe,Dropdown:Qt,Menu:oe,MenuItem:oe.Item,MenuDivider:oe.Divider,InputSearch:Yt.Search},props:{helpMessage:{type:[String,Array],default:""},title:_.string,toolbar:_.bool,checkable:_.bool,search:_.bool,checkAll:_.func,expandAll:_.func,searchText:_.string},emits:["strictly-change","search"],setup(e,{emit:t,slots:n}){const{t:r}=Zt(),a=lt(""),s=z(()=>{const c=n.headerTitle||e.title;return["mr-1","w-full",{["ml-5"]:c}]}),i=z(()=>{const{checkable:c}=e,o=[{label:r("component.tree.expandAll"),value:2},{label:r("component.tree.unExpandAll"),value:3,divider:c}];return c?[{label:r("component.tree.selectAll"),value:0},{label:r("component.tree.unSelectAll"),value:1,divider:c},...o,{label:r("component.tree.checkStrictly"),value:4},{label:r("component.tree.checkUnStrictly"),value:5}]:o});function y(c){var u,f,v,h;const{key:o}=c;switch(o){case 0:(u=e.checkAll)==null||u.call(e,!0);break;case 1:(f=e.checkAll)==null||f.call(e,!1);break;case 2:(v=e.expandAll)==null||v.call(e,!0);break;case 3:(h=e.expandAll)==null||h.call(e,!1);break;case 4:t("strictly-change",!1);break;case 5:t("strictly-change",!0);break}}function m(c){t("search",c)}const p=en(m,200);return U(()=>a.value,c=>{p(c)}),U(()=>e.searchText,c=>{c!==a.value&&(a.value=c)}),{t:r,toolbarList:i,handleMenuClick:y,searchValue:a,getInputSearchCls:s}}}),Wn={class:"flex px-2 py-1.5 items-center basic-tree-header"},Qn={key:2,class:"flex flex-1 justify-self-stretch items-center cursor-pointer"};function Yn(e,t,n,r,a,s){const i=M("BasicTitle"),y=M("InputSearch"),m=M("Icon"),p=M("MenuItem"),c=M("MenuDivider"),o=M("Menu"),u=M("Dropdown");return D(),G("div",Wn,[e.$slots.headerTitle?tn(e.$slots,"headerTitle",{key:0},void 0,!0):V("",!0),!e.$slots.headerTitle&&e.title?(D(),de(i,{key:1,helpMessage:e.helpMessage},{default:J(()=>[Le(De(e.title),1)]),_:1},8,["helpMessage"])):V("",!0),e.search||e.toolbar?(D(),G("div",Qn,[e.search?(D(),G("div",{key:0,class:nn(e.getInputSearchCls)},[b(y,{placeholder:e.t("common.searchText"),size:"small",allowClear:"",value:e.searchValue,"onUpdate:value":t[0]||(t[0]=f=>e.searchValue=f)},null,8,["placeholder","value"])],2)):V("",!0),e.toolbar?(D(),de(u,{key:1,onClick:t[1]||(t[1]=cn(()=>{},["prevent"]))},{overlay:J(()=>[b(o,{onClick:e.handleMenuClick},{default:J(()=>[(D(!0),G(ve,null,rn(e.toolbarList,f=>(D(),G(ve,{key:f.value},[b(p,an(sn({key:f.value})),{default:J(()=>[Le(De(f.label),1)]),_:2},1040),f.divider?(D(),de(c,{key:0})):V("",!0)],64))),128))]),_:1},8,["onClick"])]),default:J(()=>[b(m,{icon:"ion:ellipsis-vertical"})]),_:1})):V("",!0)])):V("",!0)])}var Zn=Xt(Jn,[["render",Yn],["__scopeId","data-v-05dbfd0e"]]);function Xn(e,t){function n(c){const o=[],u=c||x(e),{key:f,children:v}=x(t);if(!v||!f)return o;for(let h=0;h<u.length;h++){const g=u[h];o.push(g[f]);const S=g[v];S&&S.length&&o.push(...n(S))}return o}function r(c){const o=[],u=c||x(e),{key:f,children:v}=x(t);if(!v||!f)return o;for(let h=0;h<u.length;h++){const g=u[h];g.disabled!==!0&&g.selectable!==!1&&o.push(g[f]);const S=g[v];S&&S.length&&o.push(...r(S))}return o}function a(c,o){const u=[],f=o||x(e),{key:v,children:h}=x(t);if(!h||!v)return u;for(let g=0;g<f.length;g++){const S=f[g],w=S[h];c===S[v]?(u.push(S[v]),w&&w.length&&u.push(...n(w))):w&&w.length&&u.push(...a(c,w))}return u}function s(c,o,u){if(!c)return;const f=u||x(e),{key:v,children:h}=x(t);if(!(!h||!v))for(let g=0;g<f.length;g++){const S=f[g],w=S[h];if(S[v]===c){f[g]=N(N({},f[g]),o);break}else w&&w.length&&s(c,o,S[h])}}function i(c=1,o,u=1){if(!c)return[];const f=[],v=o||x(e)||[];for(let h=0;h<v.length;h++){const g=v[h],{key:S,children:w}=x(t),se=S?g[S]:"",R=w?g[w]:[];f.push(se),R&&R.length&&u<c&&(u+=1,f.push(...i(c,R,u)))}return f}function y({parentKey:c=null,node:o,push:u="push"}){const f=Ie(x(e));if(!c){f[u](o),e.value=f;return}const{key:v,children:h}=x(t);!h||!v||(Be(f,g=>{if(g[v]===c)return g[h]=g[h]||[],g[h][u](o),!0}),e.value=f)}function m({parentKey:c=null,list:o,push:u="push"}){const f=Ie(x(e));if(!(!o||o.length<1))if(c){const{key:v,children:h}=x(t);if(!h||!v)return;Be(f,g=>{if(g[v]===c){g[h]=g[h]||[];for(let S=0;S<o.length;S++)g[h][u](o[S]);return e.value=f,!0}})}else for(let v=0;v<o.length;v++)f[u](o[v])}function p(c,o){if(!c)return;const u=o||x(e),{key:f,children:v}=x(t);if(!(!v||!f))for(let h=0;h<u.length;h++){const g=u[h],S=g[v];if(g[f]===c){u.splice(h,1);break}else S&&S.length&&p(c,g[v])}}return{deleteNodeByKey:p,insertNodeByKey:y,insertNodesByKey:m,filterByLevel:i,updateNodeByKey:s,getAllKeys:n,getChildrenKeys:a,getEnabledKeys:r}}const er={value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:_.string,toolbar:_.bool,search:_.bool,searchValue:_.string,checkStrictly:_.bool,clickRowToExpand:_.bool.def(!0),checkable:_.bool.def(!1),defaultExpandLevel:{type:[String,Number],default:""},defaultExpandAll:_.bool.def(!1),replaceFields:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:null},rightMenuList:{type:Array},filterFn:{type:Function,default:null},highlight:{type:[Boolean,String],default:!1},expandOnSearch:_.bool.def(!1),checkOnSearch:_.bool.def(!1),selectedOnSearch:_.bool.def(!1)};function tr(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!yn(e)}var ur=re({name:"BasicTree",inheritAttrs:!1,props:er,emits:["update:expandedKeys","update:selectedKeys","update:value","change","check","update:searchValue"],setup(e,{attrs:t,slots:n,emit:r,expose:a}){const s=Me({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),i=Me({startSearch:!1,searchText:"",searchData:[]}),y=lt([]),[m]=mn(),{prefixCls:p}=ln("basic-tree"),c=z(()=>{const{replaceFields:d}=e;return N({children:"children",title:"title",key:"key"},d)}),o=z(()=>{let d=X(N(N({blockNode:!0},t),e),{expandedKeys:s.expandedKeys,selectedKeys:s.selectedKeys,checkedKeys:s.checkedKeys,checkStrictly:s.checkStrictly,replaceFields:x(c),"onUpdate:expandedKeys":K=>{s.expandedKeys=K,r("update:expandedKeys",K)},"onUpdate:selectedKeys":K=>{s.selectedKeys=K,r("update:selectedKeys",K)},onCheck:(K,T)=>{let O=W(s.checkedKeys);if(on(O)&&i.startSearch){const{key:A}=x(c);O=Rn(O,R(T.node.$attrs.node[A])),T.checked&&O.push(T.node.$attrs.node[A]),s.checkedKeys=O}else s.checkedKeys=K;const k=W(s.checkedKeys);r("update:value",k),r("check",k,T)},onRightClick:gt});return je(d,"treeData","class")}),u=z(()=>i.startSearch?i.searchData:x(y)),f=z(()=>!u.value||u.value.length===0),{deleteNodeByKey:v,insertNodeByKey:h,insertNodesByKey:g,filterByLevel:S,updateNodeByKey:w,getAllKeys:se,getChildrenKeys:R,getEnabledKeys:vt}=Xn(y,c);function mt(d,K){return!K&&e.renderIcon&&ue(e.renderIcon)?e.renderIcon(d):K}function gt(T){return $e(this,arguments,function*({event:d,node:K}){var P;const{rightMenuList:O=[],beforeRightClick:k}=e;let A={event:d,items:[]};if(k&&ue(k)){let C=yield k(K,d);Array.isArray(C)?A.items=C:Object.assign(A,C)}else A.items=O;!((P=A.items)!=null&&P.length)||m(A)})}function Z(d){s.expandedKeys=d}function bt(){return s.expandedKeys}function Ke(d){s.selectedKeys=d}function kt(){return s.selectedKeys}function Te(d){s.checkedKeys=d}function xt(){return s.checkedKeys}function Oe(d){s.checkedKeys=d?vt():[]}function ce(d){s.expandedKeys=d?se():[]}function St(d){s.checkStrictly=d}U(()=>e.searchValue,d=>{d!==i.searchText&&(i.searchText=d)},{immediate:!0}),U(()=>e.treeData,d=>{d&&le(i.searchText)});function le(d){if(d!==i.searchText&&(i.searchText=d),r("update:searchValue",d),!d){i.startSearch=!1;return}const{filterFn:K,checkable:T,expandOnSearch:O,checkOnSearch:k,selectedOnSearch:A}=x(e);i.startSearch=!0;const{title:P,key:C}=x(c),I=[];if(i.searchData=dn(x(y),$=>{var B,H;const j=K?K(d,$,x(c)):(H=(B=$[P])==null?void 0:B.includes(d))!=null?H:!1;return j&&I.push($[C]),j},x(c)),O){const $=un(i.searchData).map(j=>j[C]);$&&$.length&&Z($)}k&&T&&I.length&&Te(I),A&&I.length&&Ke(I)}function Kt(d,K){if(!(!e.clickRowToExpand||!K||K.length===0))if(!s.expandedKeys.includes(d))Z([...s.expandedKeys,d]);else{const T=[...s.expandedKeys],O=T.findIndex(k=>k===d);O!==-1&&T.splice(O,1),Z(T)}}Q(()=>{y.value=e.treeData}),fn(()=>{const d=parseInt(e.defaultExpandLevel);d>0?s.expandedKeys=S(d):e.defaultExpandAll&&ce(!0)}),Q(()=>{s.expandedKeys=e.expandedKeys}),Q(()=>{s.selectedKeys=e.selectedKeys}),Q(()=>{s.checkedKeys=e.checkedKeys}),U(()=>e.value,()=>{s.checkedKeys=W(e.value||[])}),U(()=>s.checkedKeys,()=>{const d=W(s.checkedKeys);r("update:value",d),r("change",d)}),Q(()=>{s.checkStrictly=e.checkStrictly}),a({setExpandedKeys:Z,getExpandedKeys:bt,setSelectedKeys:Ke,getSelectedKeys:kt,setCheckedKeys:Te,getCheckedKeys:xt,insertNodeByKey:h,insertNodesByKey:g,deleteNodeByKey:v,updateNodeByKey:w,checkAll:Oe,expandAll:ce,filterByLevel:d=>{s.expandedKeys=S(d)},setSearchValue:d=>{le(d)},getSearchValue:()=>i.searchText});function Tt(d){const{actionList:K}=e;if(!(!K||K.length===0))return K.map((T,O)=>{var A;let k=!0;return ue(T.show)?k=(A=T.show)==null?void 0:A.call(T,d):Re(T.show)&&(k=T.show),k?b("span",{key:O,class:`${p}__action`},[T.render(d)]):null})}function Ee({data:d,level:K}){if(!d)return null;const T=i.searchText,{highlight:O}=x(e);return d.map(k=>{var _e;const{title:A,key:P,children:C}=x(c),I=je(k,"title"),$=mt(X(N({},k),{level:K}),k.icon),j=fe(k,C)||[],B=fe(k,A),H=T?B.indexOf(T):-1,Ot=i.startSearch&&!pn(T)&&O&&H!==-1,Et=`color: ${Re(O)?"#f50":O}`,_t=Ot?b("span",{class:(_e=x(o))!=null&&_e.blockNode?`${p}__content`:""},[b("span",null,[B.substr(0,H)]),b("span",{style:Et},[T]),b("span",null,[B.substr(H+T.length)])]):B;return b(F.TreeNode,Ue(I,{node:W(k),key:fe(k,P)}),{title:()=>{var Ae,we;return b("span",{class:`${p}-title pl-2`,onClick:Kt.bind(null,k[P],k[C])},[(Ae=k.slots)!=null&&Ae.title?vn(n,(we=k.slots)==null?void 0:we.title,k):b(ve,null,[$&&b(Gn,{icon:$},null),_t,b("span",{class:`${p}__actions`},[Tt(X(N({},k),{level:K}))])])])},default:()=>Ee({data:j,level:K+1})})})}return()=>{let d;const{title:K,helpMessage:T,toolbar:O,search:k,checkable:A}=e,P=K||O||k||n.headerTitle,C={height:"calc(100% - 38px)"};return b("div",{class:[p,"h-full",t.class]},[P&&b(Zn,{checkable:A,checkAll:Oe,expandAll:ce,title:K,search:k,toolbar:O,helpMessage:T,onStrictlyChange:St,onSearch:le,searchText:i.searchText},tr(d=He(n))?d:{default:()=>[d]}),Ve(b(hn,{style:C},{default:()=>[b(F,Ue(x(o),{showIcon:!1}),N({default:()=>Ee({data:x(u),level:1})},He(n)))]}),[[ze,!x(f)]]),Ve(b(qe,{image:qe.PRESENTED_IMAGE_SIMPLE,class:"!mt-4"},null),[[ze,x(f)]])])}}});export{ur as _};
