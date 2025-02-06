import{_ as $}from"./ListComponent-DAiiboOr.js";import{_ as E}from"./AuthenticatedLayout-CIFV8MK0.js";import{a as c,k as y,o as l,g as p,b as t,t as v,u as b,c as x,h as g,F as C,l as k,w,d as A}from"./app-D1ejxDuq.js";import{I as j,_ as I}from"./BreadcrumbComponent-Cpqzt-XB.js";import{_ as L}from"./ClaimsListTemplate-D83bFblX.js";import{_ as V,A as B,a as F}from"./DocumentViewer-Bb5xOZHW.js";import{_ as G}from"./PaymentVoucherForm-PZsmQvpr.js";import{d as N,S as u,h as M,b as R}from"./helpers-BTGhDNsH.js";import"./NotFound-B4DZTV5N.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-84s13LJh.js";import"./PrimaryButton-CpBMaALl.js";import"./InputError-D-z9cZES.js";import"./TextInput-C2ZNW0L0.js";import"./DateRangeComponent-Cmtye5Ln.js";import"./StatusLabel-DqIPM_M7.js";import"./CustomSelectComponent-DAXDxS8c.js";var U={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"};function S(e){for(var s=1;s<arguments.length;s++){var o=arguments[s]!=null?Object(arguments[s]):{},r=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(i){return Object.getOwnPropertyDescriptor(o,i).enumerable}))),r.forEach(function(i){T(e,i,o[i])})}return e}function T(e,s,o){return s in e?Object.defineProperty(e,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[s]=o,e}var P=function(s,o){var r=S({},s,o.attrs);return c(j,S({},r,{icon:U}),null)};P.displayName="ExportOutlined";P.inheritAttrs=!1;const z={class:"w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500"},H={class:"flex items-center justify-center"},q={class:"flex-1"},Y={class:"grid grid-cols-6 gap-4"},J={class:"col"},Q={class:"row"},W={class:"col"},X={class:"text-[14px]"},Z={class:"col"},K={class:"row"},tt={class:"col"},et={class:"text-[14px] truncate"},at={class:"col"},st={class:"row"},ot={class:"col"},rt={class:"text-[14px] truncate"},it={class:"col"},lt={class:"row"},nt={class:"col"},ct={class:"text-[14px] truncate"},dt={class:"col"},mt={class:"row"},ut={class:"col"},pt={class:"flex justify-end items-center space-x-4"},_t={key:0,class:"mt-5"},ft={__name:"PaymentGroupListTemplate",props:{data:{type:Object,required:!0}},setup(e,{emit:s}){const o=s,r=e,i=y(!0),d=y(!1),_=()=>{d.value=!d.value},h=()=>{o("createComplete",!0)},O=m=>{let a={reportName:"Claim Export",reportType:"claimExport",payment_group_id:r.data.id,for_pdf:!1};return a.for_pdf=!0,a},f=async m=>{if((await u.fire({title:"Are you sure?",text:"Do you want to export this report?",icon:"info",showCancelButton:!0,confirmButtonText:"Yes"})).isConfirmed){u.fire({title:"Processing...",text:"Please wait while we generate your report.",allowOutsideClick:!1,didOpen:()=>{u.showLoading()}}),i.value=!0;try{const n=O(m==="export"),D={export:route("reports.exportPaymentGroupPDF",n.reportType)};await M(m,n,D,"payment_group_report_"+R(r.data.id)),u.close()}catch(n){console.error("Error generating report:",n),u.fire("Error","Failed to generate the report. Please try again.","error")}finally{i.value=!1}}};return(m,a)=>(l(),p("div",z,[t("div",H,[t("div",q,[t("div",Y,[t("div",J,[a[1]||(a[1]=t("div",{class:"row"},[t("div",{class:"col-auto"},[t("div",{class:"mb-1 text-xs text-gray-500"},"ID")])],-1)),t("div",Q,[t("div",W,[t("div",X,v(e.data.id),1)])])]),t("div",Z,[a[2]||(a[2]=t("div",{class:"row"},[t("div",{class:"col-auto"},[t("div",{class:"mb-1 text-xs text-gray-500"},"Payment Voucher Number")])],-1)),t("div",K,[t("div",tt,[t("div",et,v(e.data.payment_voucher_number),1)])])]),t("div",at,[a[3]||(a[3]=t("div",{class:"row"},[t("div",{class:"col-auto"},[t("div",{class:"mb-1 text-xs text-gray-500"},"Payment Date")])],-1)),t("div",st,[t("div",ot,[t("div",rt,v(b(N)(e.data.payment_date)),1)])])]),t("div",it,[a[4]||(a[4]=t("div",{class:"row"},[t("div",{class:"col-auto"},[t("div",{class:"mb-1 text-xs text-gray-500"},"Payment Mode")])],-1)),t("div",lt,[t("div",nt,[t("div",ct,v(e.data.payment_mode??"-"),1)])])]),t("div",dt,[a[5]||(a[5]=t("div",{class:"row"},[t("div",{class:"col-auto"},[t("div",{class:"mb-1 text-xs text-gray-500"},"Payment Voucher Receipt")])],-1)),t("div",mt,[t("div",ut,[c(V,{src:`/${e.data.payment_voucher_receipt_file}`,alt:"Receipt Image",id:e.data.id},null,8,["src","id"])])])]),t("div",pt,[c(G,{claimId:e.data.claimIds,data:e.data,onCreateComplete:h,isListComponent:!0},null,8,["claimId","data"]),c(b(P),{class:"cursor-pointer",onClick:a[0]||(a[0]=n=>f("export"))}),d.value?(l(),x(B,{key:0,class:"cursor-pointer",onClick:_})):g("",!0),d.value?g("",!0):(l(),x(F,{key:1,class:"cursor-pointer",onClick:_}))])]),d.value?(l(),p("div",_t,[(l(!0),p(C,null,k(e.data.claims,n=>(l(),x(L,{onCreateComplete:h,class:"mb-2",onUpdateSelectedList:m.handleUpdateSelectedList,key:n.id,data:n},null,8,["onUpdateSelectedList","data"]))),128))])):g("",!0)])])]))}},vt={class:"flex justify-between content-center"},xt={class:"max-w-8xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mt-3"},Vt={__name:"PaymentGroups",setup(e){const s=y(2),o=()=>{s.value=Math.floor(Math.random()*100)+132},r=y([{display_name:"Payment Group ID",field_name:"id",field_type:"string"},{display_name:"Payment Voucher Number",field_name:"payment_voucher_number",field_type:"string"},{display_name:"Payment Date",field_name:"payment_date",field_type:"date_range"}]);return(i,d)=>(l(),p(C,null,[c(b(A),{title:"Payment Groups"}),c(E,null,{header:w(()=>[t("div",vt,[c(I,{breadcrumbs:[{title:"Payment Groups"}]})])]),default:w(()=>[t("div",xt,[c($,{apiUrl:i.route("paymentGroup.list"),createCompleteSignal:s.value,sortAndFilters:r.value,allowSorting:!1},{"list-view":w(({data:_,apiResponse:h,fullApiResponse:O})=>[(l(!0),p(C,null,k(_,f=>(l(),x(ft,{onCreateComplete:o,key:f.id,data:f},null,8,["data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal","sortAndFilters"])])]),_:1})],64))}};export{Vt as default};
