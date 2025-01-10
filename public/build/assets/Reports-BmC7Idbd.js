import{_ as j,a as S}from"./AuthenticatedLayout-DHmpJlYT.js";import{l as i,p as h,o as c,g as v,b as e,a as l,w as _,e as C,c as N,q as A,u as R,E as M,F as U,d as E,P as T}from"./app-DFQXayr2.js";import{L as $,N as O}from"./LoadingComponent-NXk_4mo6.js";import{_ as L}from"./BreadcrumbComponent-BTEbHm1D.js";import{P}from"./PrimaryButton-JMbRSZzN.js";import{$ as g}from"./jquery-Dhiul1Qe.js";import{_ as I}from"./DateRangeComponent-MrHNDyoO.js";import{_ as w}from"./TextInput-BddOhd3h.js";import{C as x}from"./CustomSelectComponent-BETb2BKl.js";import"./ApplicationLogo-M_mRncSF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const J={key:0},B={class:"flex mb-5"},F={__name:"SummaryReportComponent",setup(V){const a=i([]),r=i(""),s=i(!1),d=()=>{r.value=!Array.isArray(a.value)||!a.value.length?"Please select a date range.":""};h(a,()=>{d()});const m=async()=>{if(d(),r.value)return;const p=btoa(JSON.stringify({reportName:"Summary Report Preview",reportType:"summaryReport",startDate:a.value[0],endDate:a.value[1]}));window.open(`${route("report.preview")}?data=${encodeURIComponent(p)}`,"_blank")};return(p,u)=>(c(),v("div",null,[u[2]||(u[2]=e("div",{class:"flex justify-between content-center pt-2 pb-3 border-b border-gray-300 mb-6"},[e("p",{class:"font-bold"},"Summary Report")],-1)),s.value?(c(),N($,{key:1,class:"mt-32 mb-32"})):(c(),v("div",J,[e("div",B,[l(I,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=f=>a.value=f),label:"Date",additionalErrorMessage:r.value},null,8,["modelValue","additionalErrorMessage"])]),l(P,{onClick:m},{default:_(()=>u[1]||(u[1]=[C("Preview")])),_:1})]))]))}},q={key:0},H={class:"flex mb-5"},z={class:"mb-5"},G={class:"mb-5"},K={__name:"TransactionsReportComponent",setup(V){const a=i([]),r=i([]),s=i([]),d=i(""),m=i(!1),p=i(""),u=i([]),f=i([]),y=()=>{d.value=!Array.isArray(a.value)||!a.value.length?"Please select a date range.":""};h(a,()=>{y()});const D=async()=>{if(y(),d.value)return;const o=btoa(JSON.stringify({reportName:"Transactions Report Preview",reportType:"transactionReport",startDate:a.value[0],endDate:a.value[1],payment_to:s.value.join(","),claim_ids_filters:r.value.join(",")}));window.open(`${route("report.preview")}?data=${encodeURIComponent(o)}`,"_blank")},k=async()=>{m.value=!0;try{const{data:o}=await axios.get(route("paymentReceiver.listNameAndId"));u.value=o}catch(o){p.value=o}finally{m.value=!1}},b=async()=>{m.value=!0;let o=route("claims.listIds");const t=s.value=="All"?"":s.value;if(t!==""){const n=new URLSearchParams({payment_to:t});o+=`?${n.toString()}`}try{const{data:n}=await axios.get(o);f.value=n}catch(n){p.value=n}finally{m.value=!1}};return h(s,(o,t)=>{JSON.stringify(o)!==JSON.stringify(t)&&(b(),r.value=[])},{deep:!0}),A(()=>{k(),b()}),(o,t)=>(c(),v("div",null,[t[4]||(t[4]=e("div",{class:"flex justify-between content-center pt-2 pb-3 border-b border-gray-300 mb-6"},[e("p",{class:"font-bold"},"Transactions Report")],-1)),m.value?(c(),N($,{key:1,class:"mt-32 mb-32"})):(c(),v("div",q,[e("div",H,[l(I,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=n=>a.value=n),label:"Date",additionalErrorMessage:d.value},null,8,["modelValue","additionalErrorMessage"])]),e("div",z,[l(w,{for:"payment_to",value:"Payment Receivers"}),l(x,{choices:u.value,modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=n=>s.value=n),label:"Payment Receivers",choicesIsObject:!0,allowAllChoice:!0,allowMultiChoice:!0},null,8,["choices","modelValue"])]),e("div",G,[l(w,{for:"claim_ids_filters",value:"Claim IDs"}),l(x,{choices:f.value,allowMultiChoice:!0,modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=n=>r.value=n),label:"Claim IDs",allowAllChoice:!0},null,8,["choices","modelValue"])]),l(P,{onClick:D},{default:_(()=>t[3]||(t[3]=[C("Preview")])),_:1})]))]))}},Q={key:0},W={class:"flex mb-5"},X={class:"mb-5"},Y={class:"mb-5"},Z={__name:"PaymentDetailReportComponent",setup(V){const a=i([]),r=i([]),s=i([]),d=i(""),m=i(!1),p=i(""),u=i([]),f=i([]),y=()=>{d.value=!Array.isArray(a.value)||!a.value.length?"Please select a date range.":""};h(a,()=>{y()});const D=async()=>{if(y(),d.value)return;const o=btoa(JSON.stringify({reportName:"Payment Detail Report Preview",reportType:"paymentDetailReportReport",startDate:a.value[0],endDate:a.value[1],payment_to:s.value.join(","),claim_ids_filters:r.value.join(",")}));window.open(`${route("report.preview")}?data=${encodeURIComponent(o)}`,"_blank")},k=async()=>{m.value=!0;try{const{data:o}=await axios.get(route("paymentReceiver.listNameAndId"));u.value=o}catch(o){p.value=o}finally{m.value=!1}},b=async()=>{m.value=!0;let o=route("claims.listIds");const t=s.value=="All"?"":s.value;if(t!==""){const n=new URLSearchParams({payment_to:t});o+=`?${n.toString()}`}try{const{data:n}=await axios.get(o);f.value=n}catch(n){p.value=n}finally{m.value=!1}};return h(s,(o,t)=>{JSON.stringify(o)!==JSON.stringify(t)&&(b(),r.value=[])},{deep:!0}),A(()=>{k(),b()}),(o,t)=>(c(),v("div",null,[t[4]||(t[4]=e("div",{class:"flex justify-between content-center pt-2 pb-3 border-b border-gray-300 mb-6"},[e("p",{class:"font-bold"},"Payment Detail Report")],-1)),m.value?(c(),N($,{key:1,class:"mt-32 mb-32"})):(c(),v("div",Q,[e("div",W,[l(I,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=n=>a.value=n),label:"Date",additionalErrorMessage:d.value},null,8,["modelValue","additionalErrorMessage"])]),e("div",X,[l(w,{for:"payment_to",value:"Payment Receiver"}),l(x,{choices:u.value,modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=n=>s.value=n),label:"Payment Receiver",choicesIsObject:!0,allowAllChoice:!0},null,8,["choices","modelValue"])]),e("div",Y,[l(w,{for:"claim_ids_filters",value:"Claim ID"}),l(x,{choices:f.value,modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=n=>r.value=n),label:"Claim ID",allowAllChoice:!0},null,8,["choices","modelValue"])]),l(P,{onClick:D},{default:_(()=>t[3]||(t[3]=[C("Preview")])),_:1})]))]))}},ee={class:"flex justify-between content-center"},te={key:0},ae={key:0},se={key:1},le={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 mt-5"},oe={class:"flex flex-col md:flex-row m-h-10 bg-gray-100"},ne={class:"w-full md:w-3/4 bg-white"},ie={class:"space-y-4"},re={class:"tab-display","tab-name":"summaryReport"},de={class:"flex items-center"},ce={class:"flex-1 p-4"},me={class:"space-y-4"},ue={class:"tab-display","tab-name":"transactionsReport"},ve={class:"flex items-center"},pe={class:"flex-1 p-4"},fe={class:"space-y-4"},_e={class:"tab-display","tab-name":"paymentDetailReport"},ye={class:"flex items-center"},be={class:"flex-1 p-4"},ge={key:1},he={style:{"min-height":"80vh"},class:"flex flex-col justify-center items-center"},Re={class:"flex justify-center"},Se={__name:"Reports",setup(V){const a=i(!1);return A(()=>{const r=g(".tab-btn"),s=g(".tab-display"),d="active bg-violet-500 text-white";s.hide(),r.first().addClass(d),s.first().show(),g("body").on("click",".tab-btn",function(){s.hide(),r.removeClass(d),g(this).addClass(d),s.filter(`[tab-name="${g(this).attr("tab-name")}"]`).show()})}),(r,s)=>(c(),v(U,null,[l(R(E),{title:"Claims"}),l(j,null,M({default:_(()=>[R(S)().value?(c(),v("div",te,[a.value?(c(),v("div",ae,[l($,{class:"mt-32"})])):(c(),v("div",se,[e("div",le,[e("div",oe,[s[0]||(s[0]=e("div",{class:"w-full md:w-1/4 mb-6 md:mb-0"},[e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"summaryReport"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Summary Report")])])])]),e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"transactionsReport"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Transactions Report")])])])]),e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"paymentDetailReport"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Payment Detail Report")])])])])],-1)),e("div",ne,[e("div",ie,[e("div",re,[e("div",de,[e("div",ce,[l(F)])])])]),e("div",me,[e("div",ue,[e("div",ve,[e("div",pe,[l(K)])])])]),e("div",fe,[e("div",_e,[e("div",ye,[e("div",be,[l(Z)])])])])])])])]))])):(c(),v("div",ge,[e("div",he,[l(O),e("div",Re,[l(R(T),{href:r.route("dashboard")},{default:_(()=>[l(P,{class:"p-4"},{default:_(()=>s[1]||(s[1]=[C("Back To Home Page")])),_:1})]),_:1},8,["href"])])])]))]),_:2},[R(S)().value?{name:"header",fn:_(()=>[e("div",ee,[l(L,{breadcrumbs:[{title:"Reports"}]})])]),key:"0"}:void 0]),1024)],64))}};export{Se as default};
