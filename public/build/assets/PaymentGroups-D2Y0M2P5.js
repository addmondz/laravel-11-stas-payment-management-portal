import{_ as E}from"./ListComponent-CBkn1zgb.js";import{_ as $}from"./AuthenticatedLayout-0XCOdFI5.js";import{a as d,k as h,o as c,g as _,b as e,t as p,u as f,c as x,h as w,F as b,l as k,w as C,d as T}from"./app-Bgh2H_c3.js";import{I as j,_ as G}from"./BreadcrumbComponent-BucC8zL3.js";import{_ as I}from"./ClaimsListTemplate-DC3bweUU.js";import{_ as L,A as N,a as V}from"./DocumentViewer-BCO6wjEQ.js";import{_ as F}from"./PaymentVoucherForm-B_kf8-6O.js";import{d as M,f as R,S as u,h as U,b as z}from"./helpers-B7kPguWM.js";import{D as H}from"./CreateClaimForm-Dcr5gCKf.js";import"./NotFound-DfcRi_6a.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-DrG1dRLu.js";import"./PrimaryButton-DRWWXiNl.js";import"./InputError-D-zIJYTf.js";import"./TextInput-CVTzxnEt.js";import"./DateRangeComponent-CaIBAQrB.js";import"./CustomSelectComponent-Ag0gfKtW.js";var Y={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"};function D(t){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?Object(arguments[s]):{},i=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),i.forEach(function(l){q(t,l,a[l])})}return t}function q(t,s,a){return s in t?Object.defineProperty(t,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[s]=a,t}var P=function(s,a){var i=D({},s,a.attrs);return d(j,D({},i,{icon:Y}),null)};P.displayName="ExportOutlined";P.inheritAttrs=!1;const K={class:"w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500"},J={class:"flex items-center justify-center"},Q={class:"flex-1"},W={class:"grid grid-cols-7 gap-4"},X={class:"col"},Z={class:"row"},ee={class:"col"},te={class:"text-[14px]"},oe={class:"col"},se={class:"row"},ae={class:"col"},re={class:"text-[14px] truncate"},ie={class:"col"},le={class:"row"},ne={class:"col"},ce={class:"text-[14px] truncate"},de={class:"col"},ue={class:"row"},me={class:"col"},pe={class:"text-[14px] truncate"},fe={class:"col"},_e={class:"row"},ve={class:"col"},ye={class:"whitespace-nowrap overflow-hidden text-ellipsis"},xe={class:"col"},he={class:"row"},ge={class:"col"},we={class:"flex justify-end items-center space-x-4"},Ce={key:0,class:"mt-5"},be={__name:"PaymentGroupListTemplate",props:{data:{type:Object,required:!0}},setup(t,{emit:s}){const a=s,i=t,l=h(!0),m=h(!1),v=()=>{m.value=!m.value},g=()=>{a("createComplete",!0)},O=n=>{let o={reportName:"Claim Export",reportType:"claimExport",payment_group_id:i.data.id,for_pdf:!1};return o.for_pdf=!0,o},y=async n=>{if((await u.fire({title:"Are you sure?",text:"Do you want to export this report?",icon:"info",showCancelButton:!0,confirmButtonText:"Yes"})).isConfirmed){u.fire({title:"Processing...",text:"Please wait while we generate your report.",allowOutsideClick:!1,didOpen:()=>{u.showLoading()}}),l.value=!0;try{const r=O(n==="export"),B={export:route("reports.exportPaymentGroupPDF",r.reportType)};await U(n,r,B,"payment_group_report_"+z(i.data.id)),u.close()}catch(r){console.error("Error generating report:",r),u.fire("Error","Failed to generate the report. Please try again.","error")}finally{l.value=!1}}},A=()=>{u.fire({title:"Are you sure?",text:"Are you sure you want to delete this payment group?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",confirmButtonColor:"#d33",cancelButtonText:"No",allowOutsideClick:!1,stopKeydownPropagation:!0,preConfirm:()=>new Promise((n,o)=>{S()})})},S=async()=>{var n,o;try{const r=await axios.post(route("paymentGroup.delete",i.data.id));a("createComplete",!0),u.fire({title:"Success!",text:"The Payment Group has been successfully deleted.",icon:"success",confirmButtonText:"OK"})}catch(r){console.log(r),u.fire({title:"Error!",text:((o=(n=r.response)==null?void 0:n.data)==null?void 0:o.error)||"An unexpected error occurred while deleting the payment group.",icon:"error",confirmButtonText:"OK"})}};return(n,o)=>(c(),_("div",K,[e("div",J,[e("div",Q,[e("div",W,[e("div",X,[o[1]||(o[1]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"ID")])],-1)),e("div",Z,[e("div",ee,[e("div",te,p(t.data.id),1)])])]),e("div",oe,[o[2]||(o[2]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Voucher Number")])],-1)),e("div",se,[e("div",ae,[e("div",re,p(t.data.payment_voucher_number),1)])])]),e("div",ie,[o[3]||(o[3]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Date")])],-1)),e("div",le,[e("div",ne,[e("div",ce,p(f(M)(t.data.payment_date)),1)])])]),e("div",de,[o[4]||(o[4]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Mode")])],-1)),e("div",ue,[e("div",me,[e("div",pe,p(t.data.payment_mode??"-"),1)])])]),e("div",fe,[o[5]||(o[5]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Total Amount")])],-1)),e("div",_e,[e("div",ve,[e("div",ye,p(t.data.currency)+" "+p(f(R)(t.data.sum_claims)),1)])])]),e("div",xe,[o[6]||(o[6]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Voucher Receipt")])],-1)),e("div",he,[e("div",ge,[d(L,{src:`/${t.data.payment_voucher_receipt_file}`,alt:"Receipt Image",id:t.data.id},null,8,["src","id"])])])]),e("div",we,[d(F,{claimId:t.data.claimIds,data:t.data,onCreateComplete:g,isListComponent:!0},null,8,["claimId","data"]),d(f(P),{class:"cursor-pointer",onClick:o[0]||(o[0]=r=>y("export"))}),d(f(H),{class:"cursor-pointer",onClick:A}),m.value?(c(),x(N,{key:0,class:"cursor-pointer",onClick:v})):w("",!0),m.value?w("",!0):(c(),x(V,{key:1,class:"cursor-pointer",onClick:v}))])]),m.value?(c(),_("div",Ce,[(c(!0),_(b,null,k(t.data.claims,r=>(c(),x(I,{onCreateComplete:g,class:"mb-2",onUpdateSelectedList:n.handleUpdateSelectedList,key:r.id,data:r},null,8,["onUpdateSelectedList","data"]))),128))])):w("",!0)])])]))}},Pe={class:"flex justify-between content-center"},Oe={class:"max-w-8xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mt-3"},Ue={__name:"PaymentGroups",setup(t){const s=h(2),a=()=>{s.value=Math.floor(Math.random()*100)+132},i=h([{display_name:"Payment Group ID",field_name:"id",field_type:"string"},{display_name:"Payment Voucher Number",field_name:"payment_voucher_number",field_type:"string"},{display_name:"Payment Date",field_name:"payment_date",field_type:"date_range"}]);return(l,m)=>(c(),_(b,null,[d(f(T),{title:"Completed Payments"}),d($,null,{header:C(()=>[e("div",Pe,[d(G,{breadcrumbs:[{title:"Completed Payments"}]})])]),default:C(()=>[e("div",Oe,[d(E,{apiUrl:l.route("paymentGroup.list"),createCompleteSignal:s.value,sortAndFilters:i.value,allowSorting:!1},{"list-view":C(({data:v,apiResponse:g,fullApiResponse:O})=>[(c(!0),_(b,null,k(v,y=>(c(),x(be,{onCreateComplete:a,key:y.id,data:y},null,8,["data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal","sortAndFilters"])])]),_:1})],64))}};export{Ue as default};
