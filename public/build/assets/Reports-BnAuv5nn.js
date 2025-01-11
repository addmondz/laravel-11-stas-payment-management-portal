import{_ as j,a as A}from"./AuthenticatedLayout-Bw0QMz_6.js";import{l as n,p as R,o as d,g as p,b as e,a as o,F as M,m as E,w as b,e as D,t as T,c as N,q as S,u as x,E as U,d as L,P as O}from"./app-DTftdoFN.js";import{L as C,N as J}from"./LoadingComponent-DLW_xDKl.js";import{_ as B}from"./BreadcrumbComponent-BEBNq9ns.js";import{P as V}from"./PrimaryButton-CudFR0rQ.js";import{$ as h}from"./jquery-Bgl9Gq3K.js";import{_ as I}from"./DateRangeComponent-210uusFV.js";import{h as F}from"./helpers-DYJ7VAyX.js";import{_ as P}from"./TextInput-BTqNnG-A.js";import{C as $}from"./CustomSelectComponent-B3ppmRTe.js";import"./ApplicationLogo-M_mRncSF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={key:0},H={class:"flex mb-5"},z={__name:"SummaryReportComponent",setup(k){const s=n([]),i=n(""),a=n(!1),c=["preview","test","export"],m={preview:"Preview",test:"Test Display Pdf",export:"Export PDF"};R(s,()=>{i.value=s.value.length?"":"Please select a date range."});const y=()=>({reportName:"Summary Report Preview",reportType:"summaryReport",startDate:s.value[0],endDate:s.value[1]}),_=async f=>{if(i.value)return;a.value=!0;const u=y(),v={preview:`${route("report.preview")}?data=${encodeURIComponent(btoa(JSON.stringify(u)))}`,test:route("reports.generateReportPreview","summaryReport"),export:route("reports.exportPDF","summaryReport")};await F(f,u,v),a.value=!1};return(f,u)=>(d(),p("div",null,[u[1]||(u[1]=e("div",{class:"flex justify-between content-center pt-2 pb-3 border-b border-gray-300 mb-6"},[e("p",{class:"font-bold"},"Summary Report")],-1)),a.value?(d(),N(C,{key:1,class:"mt-32 mb-32"})):(d(),p("div",q,[e("div",H,[o(I,{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=v=>s.value=v),label:"Date",additionalErrorMessage:i.value},null,8,["modelValue","additionalErrorMessage"])]),(d(),p(M,null,E(c,v=>o(V,{key:v,class:"mr-5",onClick:w=>_(v)},{default:b(()=>[D(T(m[v]),1)]),_:2},1032,["onClick"])),64))]))]))}},G={key:0},K={class:"flex mb-5"},Q={class:"mb-5"},W={class:"mb-5"},X={__name:"TransactionsReportComponent",setup(k){const s=n([]),i=n([]),a=n([]),c=n(""),m=n(!1),y=n(""),_=n([]),f=n([]),u=()=>{c.value=!Array.isArray(s.value)||!s.value.length?"Please select a date range.":""};R(s,()=>{u()});const v=async()=>{if(u(),c.value)return;const l=btoa(JSON.stringify({reportName:"Transactions Report Preview",reportType:"transactionReport",startDate:s.value[0],endDate:s.value[1],payment_to:a.value.join(","),claim_ids_filters:i.value.join(",")}));window.open(`${route("report.preview")}?data=${encodeURIComponent(l)}`,"_blank")},w=async()=>{m.value=!0;try{const{data:l}=await axios.get(route("paymentReceiver.listNameAndId"));_.value=l}catch(l){y.value=l}finally{m.value=!1}},g=async()=>{m.value=!0;let l=route("claims.listIds");const t=a.value=="All"?"":a.value;if(t!==""){const r=new URLSearchParams({payment_to:t});l+=`?${r.toString()}`}try{const{data:r}=await axios.get(l);f.value=r}catch(r){y.value=r}finally{m.value=!1}};return R(a,(l,t)=>{JSON.stringify(l)!==JSON.stringify(t)&&(g(),i.value=[])},{deep:!0}),S(()=>{w(),g()}),(l,t)=>(d(),p("div",null,[t[4]||(t[4]=e("div",{class:"flex justify-between content-center pt-2 pb-3 border-b border-gray-300 mb-6"},[e("p",{class:"font-bold"},"Transactions Report")],-1)),m.value?(d(),N(C,{key:1,class:"mt-32 mb-32"})):(d(),p("div",G,[e("div",K,[o(I,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=r=>s.value=r),label:"Date",additionalErrorMessage:c.value},null,8,["modelValue","additionalErrorMessage"])]),e("div",Q,[o(P,{for:"payment_to",value:"Payment Receivers"}),o($,{choices:_.value,modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=r=>a.value=r),label:"Payment Receivers",choicesIsObject:!0,allowAllChoice:!0,allowMultiChoice:!0},null,8,["choices","modelValue"])]),e("div",W,[o(P,{for:"claim_ids_filters",value:"Payment IDs"}),o($,{choices:f.value,allowMultiChoice:!0,modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=r=>i.value=r),label:"Payment IDs",allowAllChoice:!0},null,8,["choices","modelValue"])]),o(V,{onClick:v},{default:b(()=>t[3]||(t[3]=[D("Preview")])),_:1})]))]))}},Y={key:0},Z={class:"flex mb-5"},ee={class:"mb-5"},te={class:"mb-5"},ae={__name:"PaymentDetailReportComponent",setup(k){const s=n([]),i=n([]),a=n([]),c=n(""),m=n(!1),y=n(""),_=n([]),f=n([]),u=()=>{c.value=!Array.isArray(s.value)||!s.value.length?"Please select a date range.":""};R(s,()=>{u()});const v=async()=>{if(u(),c.value)return;const l=btoa(JSON.stringify({reportName:"Payment Detail Report Preview",reportType:"paymentDetailReportReport",startDate:s.value[0],endDate:s.value[1],payment_to:a.value.join(","),claim_ids_filters:i.value.join(",")}));window.open(`${route("report.preview")}?data=${encodeURIComponent(l)}`,"_blank")},w=async()=>{m.value=!0;try{const{data:l}=await axios.get(route("paymentReceiver.listNameAndId"));_.value=l}catch(l){y.value=l}finally{m.value=!1}},g=async()=>{m.value=!0;let l=route("claims.listIds");const t=a.value=="All"?"":a.value;if(t!==""){const r=new URLSearchParams({payment_to:t});l+=`?${r.toString()}`}try{const{data:r}=await axios.get(l);f.value=r}catch(r){y.value=r}finally{m.value=!1}};return R(a,(l,t)=>{JSON.stringify(l)!==JSON.stringify(t)&&(g(),i.value=[])},{deep:!0}),S(()=>{w(),g()}),(l,t)=>(d(),p("div",null,[t[4]||(t[4]=e("div",{class:"flex justify-between content-center pt-2 pb-3 border-b border-gray-300 mb-6"},[e("p",{class:"font-bold"},"Payment Detail Report")],-1)),m.value?(d(),N(C,{key:1,class:"mt-32 mb-32"})):(d(),p("div",Y,[e("div",Z,[o(I,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=r=>s.value=r),label:"Date",additionalErrorMessage:c.value},null,8,["modelValue","additionalErrorMessage"])]),e("div",ee,[o(P,{for:"payment_to",value:"Payment Receiver"}),o($,{choices:_.value,modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=r=>a.value=r),label:"Payment Receiver",choicesIsObject:!0,allowAllChoice:!0},null,8,["choices","modelValue"])]),e("div",te,[o(P,{for:"claim_ids_filters",value:"Payment ID"}),o($,{choices:f.value,modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=r=>i.value=r),label:"Payment ID",allowAllChoice:!0},null,8,["choices","modelValue"])]),o(V,{onClick:v},{default:b(()=>t[3]||(t[3]=[D("Preview")])),_:1})]))]))}},se={class:"flex justify-between content-center"},oe={key:0},le={key:0},re={key:1},ne={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 mt-5"},ie={class:"flex flex-col md:flex-row m-h-10 bg-gray-100"},de={class:"w-full md:w-3/4 bg-white"},ce={class:"space-y-4"},me={class:"tab-display","tab-name":"summaryReport"},ue={class:"flex items-center"},pe={class:"flex-1 p-4"},ve={class:"space-y-4"},fe={class:"tab-display","tab-name":"transactionsReport"},ye={class:"flex items-center"},_e={class:"flex-1 p-4"},be={class:"space-y-4"},ge={class:"tab-display","tab-name":"paymentDetailReport"},he={class:"flex items-center"},Re={class:"flex-1 p-4"},we={key:1},xe={style:{"min-height":"80vh"},class:"flex flex-col justify-center items-center"},Pe={class:"flex justify-center"},Te={__name:"Reports",setup(k){const s=n(!1);return S(()=>{const i=h(".tab-btn"),a=h(".tab-display"),c="active bg-violet-500 text-white";a.hide(),i.first().addClass(c),a.first().show(),h("body").on("click",".tab-btn",function(){a.hide(),i.removeClass(c),h(this).addClass(c),a.filter(`[tab-name="${h(this).attr("tab-name")}"]`).show()})}),(i,a)=>(d(),p(M,null,[o(x(L),{title:"Reports"}),o(j,null,U({default:b(()=>[x(A)().value?(d(),p("div",oe,[s.value?(d(),p("div",le,[o(C,{class:"mt-32"})])):(d(),p("div",re,[e("div",ne,[e("div",ie,[a[0]||(a[0]=e("div",{class:"w-full md:w-1/4 mb-6 md:mb-0"},[e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"summaryReport"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Summary Report")])])])]),e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"transactionsReport"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Transactions Report")])])])]),e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"paymentDetailReport"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Payment Detail Report")])])])])],-1)),e("div",de,[e("div",ce,[e("div",me,[e("div",ue,[e("div",pe,[o(z)])])])]),e("div",ve,[e("div",fe,[e("div",ye,[e("div",_e,[o(X)])])])]),e("div",be,[e("div",ge,[e("div",he,[e("div",Re,[o(ae)])])])])])])])]))])):(d(),p("div",we,[e("div",xe,[o(J),e("div",Pe,[o(x(O),{href:i.route("dashboard")},{default:b(()=>[o(V,{class:"p-4"},{default:b(()=>a[1]||(a[1]=[D("Back To Home Page")])),_:1})]),_:1},8,["href"])])])]))]),_:2},[x(A)().value?{name:"header",fn:b(()=>[e("div",se,[o(B,{breadcrumbs:[{title:"Reports"}]})])]),key:"0"}:void 0]),1024)],64))}};export{Te as default};
