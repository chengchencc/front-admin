import{dr as s}from"./index.0afb6b1a.js";const a=t=>s.get({url:"/system/getAccountList",params:t}),g=t=>s.get({url:"/system/getDeptList",params:t}),l=t=>s.get({url:"/system/getMenuList",params:t}),c=t=>s.get({url:"/system/getRoleListByPage",params:t}),r=t=>s.get({url:"/system/getAllRoleList",params:t}),i=(t,e)=>s.post({url:"/system/setRoleStatus",params:{id:t,status:e}}),n=t=>s.post({url:"/system/accountExist",params:{account:t}},{errorMessageMode:"none"});export{g as a,r as b,c,l as d,a as g,n as i,i as s};
