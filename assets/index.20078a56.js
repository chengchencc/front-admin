import{P as A}from"./index.7f4f8797.js";import{au as h,a as I,cC as B,w as a,v as E,aw as s,o as n,k as y,B as u,p as r,n as i,i as c,l as m,t as F}from"./index.a4184510.js";import{C as D,a as k}from"./index.641d880d.js";import{u as w}from"./upload.3eccbdfd.js";import{h as P}from"./header.d801b988.js";import"./index.00036abf.js";import"./index.97a5ac83.js";import"./useBreakpoint.3d7302fa.js";import"./responsiveObserve.74da7233.js";import"./useSize.6d3e9c8f.js";import"./useWindowSizeFn.c1349caf.js";import"./useContentViewHeight.82e6d0cc.js";import"./index.cff0b8af.js";import"./transButton.5ba7ce35.js";import"./ArrowLeftOutlined.62eef3b2.js";import"./index.d33be269.js";import"./useFlexGapSupport.22cad392.js";import"./index.761088f5.js";import"./uniqBy.634fce4d.js";import"./_baseIteratee.e5042e06.js";import"./_baseIsEqual.022cfbb5.js";import"./get.e620704d.js";import"./findIndex.657e235c.js";import"./toInteger.58eec37d.js";import"./util.89eee439.js";import"./warning.ca82f8e0.js";import"./index.88fce616.js";import"./DeleteOutlined.36a39901.js";import"./index.380f5c41.js";import"./FullscreenOutlined.06198031.js";import"./isEqual.297bdb1e.js";import"./base64Conver.08b9f4ec.js";const $=I({components:{PageWrapper:A,CropperImage:D,CollapseContainer:B,CropperAvatar:k},setup(){var t;const e=a(""),l=a(""),d=a(""),C=a(""),v=E(),g=a(((t=v.getUserInfo)==null?void 0:t.avatar)||"");function _({imgBase64:p,imgInfo:f}){e.value=f,l.value=p}function o({imgBase64:p,imgInfo:f}){d.value=f,C.value=p}return{img:P,info:e,circleInfo:d,cropperImg:l,circleImg:C,handleCropend:_,handleCircleCropend:o,avatar:g,uploadApi:w}}}),N={class:"container p-4"},S={class:"cropper-container mr-10"},V=["src"],W={key:0},U={class:"container p-4"},b={class:"cropper-container mr-10"},j=["src"],q={key:0};function z(e,l,d,C,v,g){const _=s("CropperAvatar"),o=s("CollapseContainer"),t=s("CropperImage"),p=s("PageWrapper");return n(),y(p,{title:"\u56FE\u7247\u88C1\u526A\u793A\u4F8B",content:"\u9700\u8981\u5F00\u542F\u6D4B\u8BD5\u63A5\u53E3\u670D\u52A1\u624D\u80FD\u8FDB\u884C\u4E0A\u4F20\u6D4B\u8BD5\uFF01"},{default:u(()=>[r(o,{title:"\u5934\u50CF\u88C1\u526A"},{default:u(()=>[r(_,{uploadApi:e.uploadApi,value:e.avatar},null,8,["uploadApi","value"])]),_:1}),r(o,{title:"\u77E9\u5F62\u88C1\u526A",class:"my-4"},{default:u(()=>[i("div",N,[i("div",S,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCropend,style:{width:"40vw"}},null,8,["src","onCropend"])]),e.cropperImg?(n(),c("img",{key:0,src:e.cropperImg,class:"croppered",alt:""},null,8,V)):m("",!0)]),e.cropperImg?(n(),c("p",W,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+F(e.info),1)):m("",!0)]),_:1}),r(o,{title:"\u5706\u5F62\u88C1\u526A"},{default:u(()=>[i("div",U,[i("div",b,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCircleCropend,style:{width:"40vw"},circled:""},null,8,["src","onCropend"])]),e.circleImg?(n(),c("img",{key:0,src:e.circleImg,class:"croppered"},null,8,j)):m("",!0)]),e.circleImg?(n(),c("p",q,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+F(e.circleInfo),1)):m("",!0)]),_:1})]),_:1})}var ge=h($,[["render",z],["__scopeId","data-v-9d983438"]]);export{ge as default};