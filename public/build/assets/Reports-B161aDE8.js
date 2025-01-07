import{_ as M,a as E}from"./AuthenticatedLayout-Bd9INCbe.js";import{l as r,o as m,g as p,b as e,a as s,t as N,h as F,w,e as B,z as R,p as K,q,u as S,E as J,F as z,d as H,P as G}from"./app-BTM8O_fb.js";import{S as D,L as A,N as Q}from"./sweetalert2.esm.all-D3EUOiww.js";import{_ as W}from"./BreadcrumbComponent-CiKsqjD7.js";import{P as j}from"./PrimaryButton-QeEPN7vx.js";import{$ as U}from"./jquery-Dk08URyJ.js";import{_ as g,a as V}from"./TextInput-2rif22Kl.js";import{C as P}from"./CustomSelectComponent-BhLsnVA7.js";import"./ApplicationLogo-M_mRncSF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const X={class:"flex mb-5"},Y={class:"w-full"},Z={class:"flex justify-center items-center w-full"},ee={class:"flex-1"},te={class:"flex-1"},se={key:0,class:"text-red-500 text-sm mt-2"},ae={__name:"SummaryReportComponent",setup(L){const i=r(""),n=r(""),o=r(""),u=async()=>{var d,c;if(o.value="",!i.value||!n.value){o.value="Both 'Date From' and 'Date To' fields are required.";return}if(new Date(n.value)<new Date(i.value)){o.value="'Date To' cannot be earlier than 'Date From'.";return}const v=route("reports.newSummaryReport",{dateFrom:i.value,dateTo:n.value});try{const f=await R.post(v,{},{responseType:"blob"}),h=new Blob([f.data],{type:f.headers["content-type"]}),b=document.createElement("a");b.href=URL.createObjectURL(h);const $=f.headers["content-disposition"],x=$?$.split("filename=")[1].replace(/"/g,""):"report.pdf";b.download=x,document.body.appendChild(b),b.click(),document.body.removeChild(b),D.fire({title:"Success!",text:"The report has been successfully downloaded.",icon:"success",confirmButtonText:"OK"})}catch(f){D.fire({title:"Error!",text:((c=(d=f.response)==null?void 0:d.data)==null?void 0:c.error)||"An unexpected error occurred while generating the report.",icon:"error",confirmButtonText:"OK"})}};return(v,d)=>(m(),p("div",null,[d[4]||(d[4]=e("div",{class:"flex justify-between content-center pt-2 pb-3 border-b border-gray-300 mb-6"},[e("p",{class:"font-bold"},"Summary Report")],-1)),e("div",X,[e("div",Y,[s(g,{for:"receipt_date",value:"Date"}),e("div",Z,[e("div",ee,[s(V,{id:"date_from",modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=c=>i.value=c),type:"date",class:"mt-1 block w-full",required:""},null,8,["modelValue"])]),d[2]||(d[2]=e("div",{class:"p-2"}," to ",-1)),e("div",te,[s(V,{id:"date_to",modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=c=>n.value=c),type:"date",class:"mt-1 block w-full",required:""},null,8,["modelValue"])])]),o.value?(m(),p("p",se,N(o.value),1)):F("",!0)])]),s(j,{onClick:u},{default:w(()=>d[3]||(d[3]=[B("Download")])),_:1})]))}},oe={key:0},le={key:1,class:"flex mb-5 flex-col"},ne={class:"mb-5"},re={class:"flex justify-center items-center w-full"},ie={class:"flex-1"},de={class:"flex-1"},ce={key:0,class:"text-red-500 text-sm mt-2"},ue={class:"mb-5"},me={class:"mb-5"},pe={__name:"TransactionsReportComponent",setup(L){const i=r(""),n=r(""),o=r(""),u=r([]),v=r(""),d=r(""),c=r(!1),f=r([]),h=r([]),b=async()=>{var k,C;if(v.value="",!i.value||!n.value){v.value="Both 'Date From' and 'Date To' fields are required.";return}if(new Date(n.value)<new Date(i.value)){v.value="'Date To' cannot be earlier than 'Date From'.";return}const l=route("reports.transactionsReport",{dateFrom:i.value,dateTo:n.value}),t=new URLSearchParams;o.value&&t.append("payment_to",o.value),u.value.length&&t.append("claim_ids_filters",u.value.join(","));const a=`${l}?${t.toString()}`;try{const _=await R.post(a,{},{responseType:"blob"}),O=new Blob([_.data],{type:_.headers["content-type"]}),y=document.createElement("a");y.href=URL.createObjectURL(O);const T=_.headers["content-disposition"],I=T?T.split("filename=")[1].replace(/"/g,""):"report.pdf";y.download=I,document.body.appendChild(y),y.click(),document.body.removeChild(y),D.fire({title:"Success!",text:"The report has been successfully downloaded.",icon:"success",confirmButtonText:"OK"})}catch(_){D.fire({title:"Error!",text:((C=(k=_.response)==null?void 0:k.data)==null?void 0:C.error)||"An unexpected error occurred while generating the report.",icon:"error",confirmButtonText:"OK"})}},$=async()=>{c.value=!0;try{const{data:l}=await R.get(route("paymentReceiver.listNameAndId"));f.value=l}catch(l){d.value=l}finally{c.value=!1}},x=async()=>{c.value=!0;let l=route("claims.listIds");const t=o.value;if(t!==""){const a=new URLSearchParams({payment_to:t});l+=`?${a.toString()}`}try{const{data:a}=await R.get(l);h.value=a}catch(a){d.value=a}finally{c.value=!1}};return K(o,(l,t)=>{JSON.stringify(l)!==JSON.stringify(t)&&(x(),u.value=[])},{deep:!0}),q(()=>{$(),x()}),(l,t)=>(m(),p("div",null,[t[6]||(t[6]=e("div",{class:"flex justify-between content-center pt-2 pb-3 border-b border-gray-300 mb-6"},[e("p",{class:"font-bold"},"Transactions Report")],-1)),c.value?(m(),p("div",oe,[s(A,{class:"mt-20 mb-20"})])):(m(),p("div",le,[e("div",ne,[s(g,{for:"receipt_date",value:"Date"}),e("div",re,[e("div",ie,[s(V,{id:"date_from",modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=a=>i.value=a),type:"date",class:"mt-1 block w-full",required:""},null,8,["modelValue"])]),t[4]||(t[4]=e("div",{class:"p-2"}," to ",-1)),e("div",de,[s(V,{id:"date_to",modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=a=>n.value=a),type:"date",class:"mt-1 block w-full",required:""},null,8,["modelValue"])])]),v.value?(m(),p("p",ce,N(v.value),1)):F("",!0)]),e("div",ue,[s(g,{for:"payment_to",value:"Payment Receiver"}),s(P,{choices:f.value,modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=a=>o.value=a),label:"Payment Receiver",choicesIsObject:!0},null,8,["choices","modelValue"])]),e("div",me,[s(g,{for:"claim_ids_filters",value:"Claim ID"}),s(P,{choices:h.value,allowMultiChoice:!0,modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=a=>u.value=a),label:"Claim IDs"},null,8,["choices","modelValue"])])])),s(j,{onClick:b},{default:w(()=>t[5]||(t[5]=[B("Download")])),_:1})]))}},ve={key:0},fe={key:1,class:"flex mb-5 flex-col"},_e={class:"w-full mb-5"},ye={class:"flex justify-center items-center w-full"},be={class:"flex-1"},he={class:"flex-1"},xe={key:0,class:"text-red-500 text-sm mt-2"},we={class:"mb-5"},Re={class:"mb-5 w-full"},ge={__name:"PaymentDetailReportComponent",setup(L){const i=r(""),n=r(""),o=r(""),u=r(""),v=r(""),d=r(""),c=r(!1),f=r([]),h=r([]),b=async()=>{var k,C;if(v.value="",!i.value||!n.value){v.value="Both 'Date From' and 'Date To' fields are required.";return}if(new Date(n.value)<new Date(i.value)){v.value="'Date To' cannot be earlier than 'Date From'.";return}const l=route("reports.paymentDetailReport",{dateFrom:i.value,dateTo:n.value}),t=new URLSearchParams;o.value&&t.append("payment_to",o.value),u.value&&t.append("claim_ids_filters",u.value);const a=`${l}?${t.toString()}`;try{const _=await R.post(a,{},{responseType:"blob"}),O=new Blob([_.data],{type:_.headers["content-type"]}),y=document.createElement("a");y.href=URL.createObjectURL(O);const T=_.headers["content-disposition"],I=T?T.split("filename=")[1].replace(/"/g,""):"report.pdf";y.download=I,document.body.appendChild(y),y.click(),document.body.removeChild(y),D.fire({title:"Success!",text:"The report has been successfully downloaded.",icon:"success",confirmButtonText:"OK"})}catch(_){D.fire({title:"Error!",text:((C=(k=_.response)==null?void 0:k.data)==null?void 0:C.error)||"An unexpected error occurred while generating the report.",icon:"error",confirmButtonText:"OK"})}},$=async()=>{c.value=!0;try{const{data:l}=await R.get(route("paymentReceiver.listNameAndId"));f.value=l}catch(l){d.value=l}finally{c.value=!1}},x=async()=>{c.value=!0;let l=route("claims.listIds");const t=o.value;if(t!==""){const a=new URLSearchParams({payment_to:t});l+=`?${a.toString()}`}try{const{data:a}=await R.get(l);h.value=a}catch(a){d.value=a}finally{c.value=!1}};return K(o,(l,t)=>{JSON.stringify(l)!==JSON.stringify(t)&&(x(),u.value=[])},{deep:!0}),q(()=>{$(),x()}),(l,t)=>(m(),p("div",null,[t[6]||(t[6]=e("div",{class:"flex justify-between content-center pt-2 pb-3 border-b border-gray-300 mb-6"},[e("p",{class:"font-bold"},"Payment Detail Report")],-1)),c.value?(m(),p("div",ve,[s(A,{class:"mt-20 mb-20"})])):(m(),p("div",fe,[e("div",_e,[s(g,{for:"receipt_date",value:"Date"}),e("div",ye,[e("div",be,[s(V,{id:"date_from",modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=a=>i.value=a),type:"date",class:"mt-1 block w-full",required:""},null,8,["modelValue"])]),t[4]||(t[4]=e("div",{class:"p-2"}," to ",-1)),e("div",he,[s(V,{id:"date_to",modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=a=>n.value=a),type:"date",class:"mt-1 block w-full",required:""},null,8,["modelValue"])])]),v.value?(m(),p("p",xe,N(v.value),1)):F("",!0)]),e("div",we,[s(g,{for:"payment_to",value:"Payment Receiver"}),s(P,{choices:f.value,modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=a=>o.value=a),label:"Payment Receiver",choicesIsObject:!0},null,8,["choices","modelValue"])]),e("div",Re,[s(g,{for:"claim_ids_filters",value:"Claim ID"}),s(P,{choices:h.value,modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=a=>u.value=a),label:"Claim IDs"},null,8,["choices","modelValue"])])])),s(j,{onClick:b},{default:w(()=>t[5]||(t[5]=[B("Download")])),_:1})]))}},$e={class:"flex justify-between content-center"},De={key:0},Ve={key:0},ke={key:1},Ce={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 mt-5"},Te={class:"flex flex-col md:flex-row m-h-10 bg-gray-100"},Ue={class:"w-full md:w-3/4 bg-white"},Se={class:"space-y-4"},Pe={class:"tab-display","tab-name":"summaryReport"},Be={class:"flex items-center"},je={class:"flex-1 p-4"},Le={class:"space-y-4"},Oe={class:"tab-display","tab-name":"transactionsReport"},Ie={class:"flex items-center"},Ne={class:"flex-1 p-4"},Fe={class:"space-y-4"},qe={class:"tab-display","tab-name":"paymentDetailReport"},Ae={class:"flex items-center"},Ee={class:"flex-1 p-4"},Ke={key:1},Me={style:{"min-height":"80vh"},class:"flex flex-col justify-center items-center"},Je={class:"flex justify-center"},st={__name:"Reports",setup(L){const i=r(!1);return q(()=>{const n=U(".tab-btn"),o=U(".tab-display"),u="active bg-violet-500 text-white";o.hide(),n.first().addClass(u),o.first().show(),U("body").on("click",".tab-btn",function(){o.hide(),n.removeClass(u),U(this).addClass(u),o.filter(`[tab-name="${U(this).attr("tab-name")}"]`).show()})}),(n,o)=>(m(),p(z,null,[s(S(H),{title:"Claims"}),s(M,null,J({default:w(()=>[S(E)().value?(m(),p("div",De,[i.value?(m(),p("div",Ve,[s(A,{class:"mt-32"})])):(m(),p("div",ke,[e("div",Ce,[e("div",Te,[o[0]||(o[0]=e("div",{class:"w-full md:w-1/4 mb-6 md:mb-0"},[e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"summaryReport"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Summary Report")])])])]),e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"transactionsReport"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Transactions Report")])])])]),e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"paymentDetailReport"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Payment Detail Report")])])])])],-1)),e("div",Ue,[e("div",Se,[e("div",Pe,[e("div",Be,[e("div",je,[s(ae)])])])]),e("div",Le,[e("div",Oe,[e("div",Ie,[e("div",Ne,[s(pe)])])])]),e("div",Fe,[e("div",qe,[e("div",Ae,[e("div",Ee,[s(ge)])])])])])])])]))])):(m(),p("div",Ke,[e("div",Me,[s(Q),e("div",Je,[s(S(G),{href:n.route("dashboard")},{default:w(()=>[s(j,{class:"p-4"},{default:w(()=>o[1]||(o[1]=[B("Back To Home Page")])),_:1})]),_:1},8,["href"])])])]))]),_:2},[S(E)().value?{name:"header",fn:w(()=>[e("div",$e,[s(W,{breadcrumbs:[{title:"Reports"}]})])]),key:"0"}:void 0]),1024)],64))}};export{st as default};
