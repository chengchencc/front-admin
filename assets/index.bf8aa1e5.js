import{M as C,a as _}from"./index.bffa4047.js";import{P as g}from"./index.f1bbd8b9.js";import{au as h,a as D,w as m,aw as a,o as V,k as M,B as n,n as s,p as r,C as c,j as B}from"./index.0afb6b1a.js";import{C as E}from"./index.293608e8.js";import"./index.3065bd8d.js";import"./index.335339a9.js";import"./index.afe49db0.js";import"./useWindowSizeFn.b437c5f3.js";import"./FullscreenOutlined.f42c8b10.js";import"./isEqual.c3167c03.js";import"./_baseIsEqual.b9ab726e.js";import"./index.0fb2ca65.js";import"./index.ab4596d9.js";import"./useBreakpoint.f66a95b4.js";import"./responsiveObserve.8bc71b85.js";import"./useSize.b98aa611.js";import"./useContentViewHeight.6667aea5.js";import"./index.97f64344.js";import"./ArrowLeftOutlined.8571d53f.js";import"./index.a69642cd.js";import"./index.3fdd4c89.js";import"./warning.ca82f8e0.js";import"./UpOutlined.53f4e913.js";import"./PlusOutlined.d47e946e.js";import"./useFlexGapSupport.358e75d5.js";const F=D({components:{MarkDown:C,PageWrapper:g,MarkdownViewer:_,ACard:E},setup(){const e=m(null),o=m(`
# title

# content
`);function i(){const t=B(e);if(!t)return;t.getVditor().setTheme("dark")}function p(t){o.value=t}function l(){o.value=""}return{value:o,toggleTheme:i,markDownRef:e,handleChange:p,clearValue:l}}}),A={class:"mt-2"};function b(e,o,i,p,l,t){const u=a("a-button"),d=a("MarkDown"),f=a("MarkdownViewer"),k=a("a-card"),v=a("PageWrapper");return V(),M(v,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:n(()=>[s("div",null,[r(u,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:n(()=>[c(" \u9ED1\u6697\u4E3B\u9898 ")]),_:1},8,["onClick"]),r(u,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:n(()=>[c(" \u6E05\u7A7A\u5185\u5BB9 ")]),_:1},8,["onClick"]),r(d,{value:e.value,"onUpdate:value":o[0]||(o[0]=w=>e.value=w),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),s("div",A,[r(k,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:n(()=>[r(f,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var oe=h(F,[["render",b]]);export{oe as default};
