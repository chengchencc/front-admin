import{B as R}from"./TableImg.3906216b.js";import"./BasicForm.d765cc9c.js";import{getBasicColumns as p,getBasicShortColumns as D}from"./tableData.6b686000.js";import{au as E,a as _,w as S,aw as f,o as A,i as T,n as C,p as u,B as i,C as n,G as h,j as L}from"./index.0afb6b1a.js";import{d as y}from"./table.b4d13db3.js";import"./index.0c92bc5e.js";import"./Checkbox.b94383d9.js";import"./index.f188e1cd.js";import"./useForm.d0f78599.js";import"./index.f1bbd8b9.js";import"./index.0fb2ca65.js";import"./index.ab4596d9.js";import"./useBreakpoint.f66a95b4.js";import"./responsiveObserve.8bc71b85.js";import"./useSize.b98aa611.js";import"./useWindowSizeFn.b437c5f3.js";import"./useContentViewHeight.6667aea5.js";import"./index.97f64344.js";import"./ArrowLeftOutlined.8571d53f.js";import"./index.a38530f5.js";import"./UpOutlined.53f4e913.js";import"./index.a86fe11c.js";import"./index.f3dc3acc.js";import"./isEqual.c3167c03.js";import"./_baseIsEqual.b9ab726e.js";import"./uuid.2b29000c.js";import"./index.3608aaa4.js";import"./uniqBy.1231b8aa.js";import"./_baseIteratee.ccaeac66.js";import"./get.cbf01dd9.js";import"./findIndex.bebb7dcc.js";import"./toInteger.385c5e34.js";import"./util.5b402eb8.js";import"./warning.ca82f8e0.js";import"./index.b920e176.js";import"./DeleteOutlined.7747d063.js";import"./index.afe49db0.js";import"./FullscreenOutlined.f42c8b10.js";import"./index.b5e58356.js";import"./useSortable.04beedbd.js";import"./RedoOutlined.8a38e0cf.js";import"./CaretDownFilled.6c2b69f4.js";import"./scrollTo.b6090ae3.js";import"./index.9ecfb69b.js";import"./index.1916b734.js";import"./index.f9b7668c.js";import"./index.335339a9.js";import"./useFlexGapSupport.358e75d5.js";import"./index.752237d9.js";import"./Tree.c194a51d.js";import"./index.35e066f0.js";import"./download.8e655723.js";import"./base64Conver.08b9f4ec.js";import"./index.487b659d.js";import"./index.3fdd4c89.js";const K=_({components:{BasicTable:R},setup(){const o=S(null),{createMessage:a}=h();function e(){const m=L(o);if(!m)throw new Error("tableAction is null");return m}function s(){e().setLoading(!0),setTimeout(()=>{e().setLoading(!1)},1e3)}function r(){e().setColumns(D())}function c(){e().setColumns(p()),e().reload({page:1})}function t(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(e().getColumns())}function l(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(e().getDataSource())}function g(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(e().getRawDataSource())}function d(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(e().getPaginationRef())}function F(){e().setPagination({current:2}),e().reload()}function B(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(e().getSelectRows())}function k(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(e().getSelectRowKeys())}function b(){e().setSelectedRowKeys(["0","1","2"])}function w(){e().clearSelectedRowKeys()}return{tableRef:o,api:y,columns:p(),changeLoading:s,changeColumns:r,reloadTable:c,getColumn:t,getTableData:l,getTableRawData:g,getPagination:d,setPaginationInfo:F,getSelectRowList:B,getSelectRowKeyList:k,setSelectedRowKeyList:b,clearSelect:w}}}),P={class:"p-4"},v={class:"mb-4"},$={class:"mb-4"};function M(o,a,e,s,r,c){const t=f("a-button"),l=f("BasicTable");return A(),T("div",P,[C("div",v,[u(t,{class:"mr-2",onClick:o.reloadTable},{default:i(()=>[n(" \u8FD8\u539F ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.changeLoading},{default:i(()=>[n(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.changeColumns},{default:i(()=>[n(" \u66F4\u6539Columns ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getColumn},{default:i(()=>[n(" \u83B7\u53D6Columns ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getTableData},{default:i(()=>[n(" \u83B7\u53D6\u8868\u683C\u6570\u636E ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getTableRawData},{default:i(()=>[n(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.setPaginationInfo},{default:i(()=>[n(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 ")]),_:1},8,["onClick"])]),C("div",$,[u(t,{class:"mr-2",onClick:o.getSelectRowList},{default:i(()=>[n(" \u83B7\u53D6\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:i(()=>[n(" \u83B7\u53D6\u9009\u4E2D\u884CKey ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:i(()=>[n(" \u8BBE\u7F6E\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.clearSelect},{default:i(()=>[n(" \u6E05\u7A7A\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getPagination},{default:i(()=>[n(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ")]),_:1},8,["onClick"])]),u(l,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:o.api,columns:o.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var Io=E(K,[["render",M]]);export{Io as default};
