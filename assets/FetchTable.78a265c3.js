import{B as l}from"./TableImg.831ea4f5.js";import"./BasicForm.98ef7450.js";import{u as c}from"./useTable.a75fc128.js";import{getBasicColumns as d}from"./tableData.6b686000.js";import{P as f}from"./index.1e46fc07.js";import{d as _}from"./table.da527ea8.js";import{au as g,a as B,aw as i,o as C,k as b,B as t,p,C as n}from"./index.91c78518.js";import"./index.88f1e948.js";import"./Checkbox.9cabff11.js";import"./index.4492b02f.js";import"./useForm.2169bbec.js";import"./index.4240517a.js";import"./UpOutlined.e4286575.js";import"./index.88fb2e9b.js";import"./index.7de12fa0.js";import"./isEqual.6a61b02c.js";import"./_baseIsEqual.816e480b.js";import"./uuid.2b29000c.js";import"./index.5a21fcd9.js";import"./uniqBy.c07792ae.js";import"./_baseIteratee.c981f53f.js";import"./get.2c776a61.js";import"./findIndex.0570347c.js";import"./toInteger.078e120d.js";import"./util.3aa28320.js";import"./warning.ca82f8e0.js";import"./index.bd985330.js";import"./DeleteOutlined.b9c6996f.js";import"./useWindowSizeFn.2731919f.js";import"./index.9784102a.js";import"./FullscreenOutlined.afbc26d0.js";import"./index.989cc525.js";import"./useSortable.67718d45.js";import"./RedoOutlined.55ab8ef7.js";import"./CaretDownFilled.0ff9844c.js";import"./scrollTo.fec0171b.js";import"./transButton.6677a85d.js";import"./index.d7154bf4.js";import"./index.0172d1a0.js";import"./index.41e94487.js";import"./index.f1d72b26.js";import"./responsiveObserve.65e938a4.js";import"./useFlexGapSupport.33a77d25.js";import"./useSize.495b1475.js";import"./index.495ffb40.js";import"./Tree.155e87a6.js";import"./index.7cd6cb50.js";import"./download.ae181d08.js";import"./base64Conver.08b9f4ec.js";import"./index.2eaf87ac.js";import"./index.38e5c16b.js";import"./index.e9b45e79.js";import"./index.e3a1f424.js";import"./useBreakpoint.ebc6768a.js";import"./useContentViewHeight.e0cb1840.js";import"./index.119cad3f.js";import"./ArrowLeftOutlined.9a154523.js";const h=B({components:{BasicTable:l,PageWrapper:f},setup(){const[o,{reload:r}]=c({title:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",api:_,columns:d(),pagination:{pageSize:10}});function e(){r()}function m(){r({page:1})}return{registerTable:o,handleReloadCurrent:e,handleReload:m}}});function k(o,r,e,m,T,F){const a=i("a-button"),s=i("BasicTable"),u=i("PageWrapper");return C(),b(u,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[p(s,{onRegister:o.registerTable},{toolbar:t(()=>[p(a,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[n(" \u5237\u65B0\u5F53\u524D\u9875 ")]),_:1},8,["onClick"]),p(a,{type:"primary",onClick:o.handleReload},{default:t(()=>[n(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}var Ao=g(h,[["render",k]]);export{Ao as default};