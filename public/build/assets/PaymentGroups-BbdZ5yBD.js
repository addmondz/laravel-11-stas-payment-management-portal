import{_ as D}from"./ListComponent-DN6Y-WBR.js";import{_ as S}from"./AuthenticatedLayout-BuqczPA4.js";import{a as n,k as x,o as i,g as u,b as t,t as v,u as b,c as f,h,F as w,l as k,w as g,d as $}from"./app-8qHOInRu.js";import{I as E,_ as j}from"./BreadcrumbComponent-CJooVs05.js";import{_ as A}from"./ClaimsListTemplate-DHJhJuME.js";import{_ as I,A as V,a as G}from"./DocumentViewer-CY4h3ygR.js";import{_ as L}from"./PaymentVoucherForm-DrSw4O96.js";import{d as N,h as F,b as M}from"./helpers-7ztThxD1.js";import"./NotFound-BeJXgkZ9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-C2Bh-08M.js";import"./PrimaryButton-RQ79ov32.js";import"./InputError-Be1d6Wxz.js";import"./TextInput-1HxUY7Mj.js";import"./DateRangeComponent-CBauHnrN.js";import"./StatusLabel-CUxJPX0A.js";import"./CustomSelectComponent-CICjJsDA.js";var R={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"};function O(e){for(var s=1;s<arguments.length;s++){var o=arguments[s]!=null?Object(arguments[s]):{},r=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable}))),r.forEach(function(l){U(e,l,o[l])})}return e}function U(e,s,o){return s in e?Object.defineProperty(e,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[s]=o,e}var C=function(s,o){var r=O({},s,o.attrs);return n(E,O({},r,{icon:R}),null)};C.displayName="ExportOutlined";C.inheritAttrs=!1;const B={class:"w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500"},T={class:"flex items-center justify-center"},z={class:"flex-1"},H={class:"grid grid-cols-6 gap-4"},q={class:"col"},J={class:"row"},Q={class:"col"},W={class:"text-[14px]"},X={class:"col"},Y={class:"row"},Z={class:"col"},K={class:"text-[14px] truncate"},tt={class:"col"},et={class:"row"},at={class:"col"},st={class:"text-[14px] truncate"},ot={class:"col"},rt={class:"row"},lt={class:"col"},it={class:"text-[14px] truncate"},nt={class:"col"},ct={class:"row"},dt={class:"col"},mt={class:"flex justify-end items-center space-x-4"},ut={key:0,class:"mt-5"},pt={__name:"PaymentGroupListTemplate",props:{data:{type:Object,required:!0}},setup(e,{emit:s}){const o=s,r=e,l=x(!0),c=x(!1),p=()=>{c.value=!c.value},y=()=>{o("createComplete",!0)},P=d=>{let a={reportName:"Claim Export",reportType:"claimExport",payment_group_id:r.data.id,for_pdf:!1};return a.for_pdf=!0,a},_=async d=>{l.value=!0;try{const a=P(d==="export"),m={export:route("reports.exportPaymentGroupPDF",a.reportType)};await F(d,a,m,"payment_group_report_"+M(r.data.id))}catch(a){console.error("Error generating report:",a)}finally{l.value=!1}};return(d,a)=>(i(),u("div",B,[t("div",T,[t("div",z,[t("div",H,[t("div",q,[a[1]||(a[1]=t("div",{class:"row"},[t("div",{class:"col-auto"},[t("div",{class:"mb-1 text-xs text-gray-500"},"ID")])],-1)),t("div",J,[t("div",Q,[t("div",W,v(e.data.id),1)])])]),t("div",X,[a[2]||(a[2]=t("div",{class:"row"},[t("div",{class:"col-auto"},[t("div",{class:"mb-1 text-xs text-gray-500"},"Payment Voucher Number")])],-1)),t("div",Y,[t("div",Z,[t("div",K,v(e.data.payment_voucher_number),1)])])]),t("div",tt,[a[3]||(a[3]=t("div",{class:"row"},[t("div",{class:"col-auto"},[t("div",{class:"mb-1 text-xs text-gray-500"},"Payment Date")])],-1)),t("div",et,[t("div",at,[t("div",st,v(b(N)(e.data.payment_date)),1)])])]),t("div",ot,[a[4]||(a[4]=t("div",{class:"row"},[t("div",{class:"col-auto"},[t("div",{class:"mb-1 text-xs text-gray-500"},"Payment Mode")])],-1)),t("div",rt,[t("div",lt,[t("div",it,v(e.data.payment_mode??"-"),1)])])]),t("div",nt,[a[5]||(a[5]=t("div",{class:"row"},[t("div",{class:"col-auto"},[t("div",{class:"mb-1 text-xs text-gray-500"},"Payment Voucher Receipt")])],-1)),t("div",ct,[t("div",dt,[n(I,{src:`/${e.data.payment_voucher_receipt_file}`,alt:"Receipt Image",id:e.data.id},null,8,["src","id"])])])]),t("div",mt,[n(L,{claimId:e.data.claimIds,data:e.data,onCreateComplete:y,isListComponent:!0},null,8,["claimId","data"]),n(b(C),{class:"cursor-pointer",onClick:a[0]||(a[0]=m=>_("export"))}),c.value?(i(),f(V,{key:0,class:"cursor-pointer",onClick:p})):h("",!0),c.value?h("",!0):(i(),f(G,{key:1,class:"cursor-pointer",onClick:p}))])]),c.value?(i(),u("div",ut,[(i(!0),u(w,null,k(e.data.claims,m=>(i(),f(A,{onCreateComplete:y,class:"mb-2",onUpdateSelectedList:d.handleUpdateSelectedList,key:m.id,data:m},null,8,["onUpdateSelectedList","data"]))),128))])):h("",!0)])])]))}},_t={class:"flex justify-between content-center"},vt={class:"max-w-8xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mt-3"},It={__name:"PaymentGroups",setup(e){const s=x(2),o=()=>{s.value=Math.floor(Math.random()*100)+132},r=x([{display_name:"Payment Group ID",field_name:"id",field_type:"string"},{display_name:"Payment Voucher Number",field_name:"payment_voucher_number",field_type:"string"},{display_name:"Payment Date",field_name:"payment_date",field_type:"date_range"}]);return(l,c)=>(i(),u(w,null,[n(b($),{title:"Payment Groups"}),n(S,null,{header:g(()=>[t("div",_t,[n(j,{breadcrumbs:[{title:"Payment Groups"}]})])]),default:g(()=>[t("div",vt,[n(D,{apiUrl:l.route("paymentGroup.list"),createCompleteSignal:s.value,sortAndFilters:r.value,allowSorting:!1},{"list-view":g(({data:p,apiResponse:y,fullApiResponse:P})=>[(i(!0),u(w,null,k(p,_=>(i(),f(pt,{onCreateComplete:o,key:_.id,data:_},null,8,["data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal","sortAndFilters"])])]),_:1})],64))}};export{It as default};
