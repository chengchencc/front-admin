var w=(h,n,t)=>new Promise((e,p)=>{var u=r=>{try{a(t.next(r))}catch(s){p(s)}},f=r=>{try{a(t.throw(r))}catch(s){p(s)}},a=r=>r.done?e(r.value):Promise.resolve(r.value).then(u,f);a((t=t.apply(h,n)).next())});import{dr as x,a as k,w as E,c as T,f2 as D,a3 as R,K as A,ae as B,aw as I,o as g,i as _,F as S,az as V,y as j,z as M,p as i,j as o,B as m,C as y,t as b}from"./index.0afb6b1a.js";import z from"./DetailModal.06c79cba.js";import{B as F}from"./TableImg.3906216b.js";import{i as N}from"./BasicForm.d765cc9c.js";import{u as $}from"./useTable.f02b5d26.js";import{b as H}from"./index.afe49db0.js";import{getColumns as K}from"./data.73f7a9fa.js";import"./index.33411a54.js";import"./index.d79d3420.js";import"./responsiveObserve.8bc71b85.js";import"./get.cbf01dd9.js";import"./useDescription.07acbd2c.js";import"./index.0c92bc5e.js";import"./Checkbox.b94383d9.js";import"./index.f188e1cd.js";import"./useForm.d0f78599.js";import"./index.f1bbd8b9.js";import"./index.0fb2ca65.js";import"./index.ab4596d9.js";import"./useBreakpoint.f66a95b4.js";import"./useSize.b98aa611.js";import"./useWindowSizeFn.b437c5f3.js";import"./useContentViewHeight.6667aea5.js";import"./index.97f64344.js";import"./ArrowLeftOutlined.8571d53f.js";import"./index.a38530f5.js";import"./UpOutlined.53f4e913.js";import"./index.a86fe11c.js";import"./index.f3dc3acc.js";import"./isEqual.c3167c03.js";import"./_baseIsEqual.b9ab726e.js";import"./uuid.2b29000c.js";import"./index.3608aaa4.js";import"./uniqBy.1231b8aa.js";import"./_baseIteratee.ccaeac66.js";import"./findIndex.bebb7dcc.js";import"./toInteger.385c5e34.js";import"./util.5b402eb8.js";import"./warning.ca82f8e0.js";import"./index.b920e176.js";import"./DeleteOutlined.7747d063.js";import"./index.b5e58356.js";import"./useSortable.04beedbd.js";import"./RedoOutlined.8a38e0cf.js";import"./FullscreenOutlined.f42c8b10.js";import"./CaretDownFilled.6c2b69f4.js";import"./scrollTo.b6090ae3.js";import"./index.9ecfb69b.js";import"./index.1916b734.js";import"./index.f9b7668c.js";import"./index.335339a9.js";import"./useFlexGapSupport.358e75d5.js";import"./index.752237d9.js";import"./Tree.c194a51d.js";import"./index.35e066f0.js";import"./download.8e655723.js";import"./base64Conver.08b9f4ec.js";import"./index.487b659d.js";import"./index.3fdd4c89.js";const q=()=>x.get({url:"/error"}),G={class:"p-4"},J=["src"],Zr=k({__name:"index",setup(h){const n=E(),t=E([]),{t:e}=T(),p=D(),[u,{setTableData:f}]=$({title:e("sys.errorLog.tableTitle"),columns:K(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[a,{openModal:r}]=H();R(()=>p.getErrorLogInfoList,l=>{A(()=>{f(B(l))})},{immediate:!0});function s(l){n.value=l,r(!0)}function L(){throw new Error("fire vue error!")}function C(){t.value.push(`${new Date().getTime()}.png`)}function v(){return w(this,null,function*(){yield q()})}return(l,O)=>{const d=I("a-button");return g(),_("div",G,[(g(!0),_(S,null,V(t.value,c=>j((g(),_("img",{key:c,src:c},null,8,J)),[[M,!1]])),128)),i(z,{info:n.value,onRegister:o(a)},null,8,["info","onRegister"]),i(o(F),{onRegister:o(u),class:"error-handle-table"},{toolbar:m(()=>[i(d,{onClick:L,type:"primary"},{default:m(()=>[y(b(o(e)("sys.errorLog.fireVueError")),1)]),_:1}),i(d,{onClick:C,type:"primary"},{default:m(()=>[y(b(o(e)("sys.errorLog.fireResourceError")),1)]),_:1}),i(d,{onClick:v,type:"primary"},{default:m(()=>[y(b(o(e)("sys.errorLog.fireAjaxError")),1)]),_:1})]),action:m(({record:c})=>[i(o(N),{actions:[{label:o(e)("sys.errorLog.tableActionDesc"),onClick:s.bind(null,c)}]},null,8,["actions"])]),_:1},8,["onRegister"])])}}});export{Zr as default};
