import{M as C,a as _}from"./index.f6800181.js";import{P as g}from"./index.7f4f8797.js";import{au as h,a as D,w as m,aw as a,o as V,k as M,B as n,n as s,p as r,C as c,j as B}from"./index.a4184510.js";import{C as E}from"./index.2e9adb6e.js";import"./index.fa374a79.js";import"./index.5389ab9f.js";import"./index.380f5c41.js";import"./useWindowSizeFn.c1349caf.js";import"./FullscreenOutlined.06198031.js";import"./isEqual.297bdb1e.js";import"./_baseIsEqual.022cfbb5.js";import"./index.00036abf.js";import"./index.97a5ac83.js";import"./useBreakpoint.3d7302fa.js";import"./responsiveObserve.74da7233.js";import"./useSize.6d3e9c8f.js";import"./useContentViewHeight.82e6d0cc.js";import"./index.cff0b8af.js";import"./transButton.5ba7ce35.js";import"./ArrowLeftOutlined.62eef3b2.js";import"./index.47dc3e0f.js";import"./index.b2270280.js";import"./warning.ca82f8e0.js";import"./UpOutlined.c620fc88.js";import"./PlusOutlined.67581f3b.js";import"./useFlexGapSupport.22cad392.js";const F=D({components:{MarkDown:C,PageWrapper:g,MarkdownViewer:_,ACard:E},setup(){const e=m(null),o=m(`
# title

# content
`);function i(){const t=B(e);if(!t)return;t.getVditor().setTheme("dark")}function p(t){o.value=t}function l(){o.value=""}return{value:o,toggleTheme:i,markDownRef:e,handleChange:p,clearValue:l}}}),A={class:"mt-2"};function b(e,o,i,p,l,t){const u=a("a-button"),d=a("MarkDown"),f=a("MarkdownViewer"),k=a("a-card"),v=a("PageWrapper");return V(),M(v,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:n(()=>[s("div",null,[r(u,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:n(()=>[c(" \u9ED1\u6697\u4E3B\u9898 ")]),_:1},8,["onClick"]),r(u,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:n(()=>[c(" \u6E05\u7A7A\u5185\u5BB9 ")]),_:1},8,["onClick"]),r(d,{value:e.value,"onUpdate:value":o[0]||(o[0]=w=>e.value=w),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),s("div",A,[r(k,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:n(()=>[r(f,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var te=h(F,[["render",b]]);export{te as default};