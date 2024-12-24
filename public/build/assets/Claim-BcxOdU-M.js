import{o as u,g as m,b as e,k as c,i as G,t as p,u as a,a as o,w as P,P as I,C as K,l as z,e as N,f as Y,j as k,m as j,F as S,p as q,q as L,s as H,n as D,x as J,d as Q,h as W,c as X}from"./app-D17gf7Xf.js";import{_ as Z}from"./AuthenticatedLayout-CDKja__0.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{f as te,a as M,b as se,S as R,L as ae,N as A}from"./sweetalert2.esm.all-DVnf6i9J.js";import{_ as oe}from"./StatusLabel-D5UksrWl.js";import{_ as x,b,a as B}from"./TextInput-CXlMQ__c.js";import{_ as le}from"./Modal-D2S9-Xsl.js";import{P as E}from"./PrimaryButton-BBHxQPUc.js";import{_ as re}from"./FilterDropdown-C_2HE4Km.js";import{_ as ne}from"./BreadcrumbComponent-m5PLBaYM.js";import"./ApplicationLogo-M_mRncSF.js";const ie={},de={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"};function ce(d,_){return u(),m("svg",de,_[0]||(_[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"},null,-1)]))}const ue=ee(ie,[["render",ce]]),me={class:"w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500"},pe={class:"flex"},ve={class:"flex-1"},ye={class:"grid lg:grid-cols-8 grid-cols-2 gap-x-4 gap-y-4"},ge={class:"col"},_e={class:"row"},fe={class:"col"},xe={class:""},be={class:"col"},we={class:"row"},he={class:"col"},Ce={class:""},$e={class:"col"},ke={class:"row"},Pe={class:"col"},Ve={class:"capitalize"},Se={class:"col"},Te={class:"row"},Ue={class:"col"},je={class:"whitespace-nowrap overflow-hidden text-ellipsis"},qe={class:"col"},De={class:"row"},Be={class:"col"},Fe={class:"whitespace-nowrap overflow-hidden text-ellipsis"},Ne={class:"col"},Le={class:"row"},Me={class:"col"},Re={class:""},Ae={class:"col"},Ee={class:"row"},ze={class:"col"},Oe={class:"col"},Ge={class:"row"},Ie={class:"col"},Ke={class:""},Ye={class:"flex justify-center items-center"},He={class:"cursor-pointer hover:text-violet-600 transition-all"},Je={__name:"ClaimsListTemplate",props:{data:{type:Object,required:!0}},setup(d){const _=d;return c(!1),G(()=>_.order.items.reduce((v,r)=>v+r.quantity,0)),(v,r)=>(u(),m("div",me,[e("div",pe,[e("div",ve,[e("div",ye,[e("div",ge,[r[0]||(r[0]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"ID")])],-1)),e("div",_e,[e("div",fe,[e("div",xe,p(d.data.id),1)])])]),e("div",be,[r[1]||(r[1]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Type")])],-1)),e("div",we,[e("div",he,[e("div",Ce,p(a(te)(d.data.payment_type)),1)])])]),e("div",$e,[r[2]||(r[2]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Category")])],-1)),e("div",ke,[e("div",Pe,[e("div",Ve,p(d.data.payment_category_name),1)])])]),e("div",Se,[r[3]||(r[3]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Total Amount")])],-1)),e("div",Te,[e("div",Ue,[e("div",je,p(d.data.currency)+" "+p(a(M)(d.data.amount)),1)])])]),e("div",qe,[r[4]||(r[4]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Tax Amount")])],-1)),e("div",De,[e("div",Be,[e("div",Fe,p(d.data.gst_amount==0?"-":d.data.currency+" "+a(M)(d.data.gst_amount)),1)])])]),e("div",Ne,[r[5]||(r[5]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Purpose")])],-1)),e("div",Le,[e("div",Me,[e("div",Re,p(d.data.purpose),1)])])]),e("div",Ae,[r[6]||(r[6]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Status")])],-1)),e("div",Ee,[e("div",ze,[o(oe,{class:"text-xs inline-block w-[120px]",status:d.data.status},null,8,["status"])])])]),e("div",Oe,[r[7]||(r[7]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Created At")])],-1)),e("div",Ge,[e("div",Ie,[e("div",Ke,p(a(se)(d.data.created_at)),1)])])])])]),e("div",Ye,[e("button",He,[o(a(I),{href:v.route("claim.details",d.data.id)},{default:P(()=>[o(ue,{class:"text-violet-700"})]),_:1},8,["href"])])])])]))}},Qe={class:"space-y-6"},We={class:"grid grid-cols-1 gap-4 mt-4"},Xe=["value"],Ze=["value"],et={class:"col-span-2"},tt={class:"flex items-center space-x-4 mt-1"},st={class:"inline-flex items-center"},at={class:"inline-flex items-center"},ot={class:"col-span-2"},lt={class:"col-span-2"},rt={class:"text-right mt-6"},nt={__name:"CreateClaimForm",setup(d,{emit:_}){const v=c(!1),r=_,w=c([]),V=c([]),C=c(null),s=K({payment_type:"",payment_category:"",currency:"",amount:"",gst:"",purpose:"",receipt_date:"",receipt:null}),T=()=>{v.value=!0},n=()=>{v.value=!1},$=async()=>{try{const i=new FormData;i.append("receipt",s.receipt);for(const[l,y]of Object.entries(s.data()))i.append(l,y);const t=await axios.post(route("claims.store"),i,{headers:{"Content-Type":"multipart/form-data"}});R.fire({title:"Success!",text:t.data.success,icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"w-32"}}),n(),s.reset(),r("createComplete",!0)}catch(i){i.response&&i.response.data.errors?s.errors=i.response.data.errors:R.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}},U=async()=>{try{const{data:i}=await axios.get(route("currency.listShortCode"));w.value=i}catch(i){C.value=i}},h=async()=>{try{const{data:i}=await axios.get(route("paymentCategory.listChoice"));V.value=i}catch(i){C.value=i}};return z(()=>{U(),h()}),(i,t)=>(u(),m("section",Qe,[o(E,{onClick:T},{default:P(()=>t[9]||(t[9]=[N("Create Claim")])),_:1}),o(le,{show:v.value,onClose:n},{default:P(()=>[e("form",{onSubmit:Y($,["prevent"]),class:"p-6"},[t[16]||(t[16]=e("h2",{class:"text-lg font-medium text-gray-900"},"Create a New Claim",-1)),e("div",We,[e("div",null,[o(x,{for:"payment_type",value:"Payment Type"}),k(e("select",{id:"payment_type","onUpdate:modelValue":t[0]||(t[0]=l=>a(s).payment_type=l),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},t[10]||(t[10]=[e("option",{value:"",disabled:"",selected:""},"Please select Payment Type",-1),e("option",{value:"reimbursement"},"Reimbursement",-1),e("option",{value:"external_payment"},"External Payment",-1)]),512),[[j,a(s).payment_type]]),o(b,{message:a(s).errors.payment_type,class:"mt-2"},null,8,["message"])]),e("div",null,[o(x,{for:"payment_category",value:"Payment Category"}),k(e("select",{id:"currency","onUpdate:modelValue":t[1]||(t[1]=l=>a(s).payment_category=l),class:"mt-1 payment_category w-full border-gray-300 rounded-md shadow-sm",required:""},[t[11]||(t[11]=e("option",{value:"",disabled:"",selected:""},"Please select Payment Category",-1)),(u(!0),m(S,null,q(V.value,(l,y)=>(u(),m("option",{key:y,value:y,class:"capitalize"},p(l),9,Xe))),128))],512),[[j,a(s).payment_category]]),o(b,{message:a(s).errors.payment_category,class:"mt-2"},null,8,["message"])]),e("div",null,[o(x,{for:"currency",value:"Currency"}),k(e("select",{id:"currency","onUpdate:modelValue":t[2]||(t[2]=l=>a(s).currency=l),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},[t[12]||(t[12]=e("option",{value:"",disabled:"",selected:""},"Please select Currency",-1)),(u(!0),m(S,null,q(w.value,(l,y)=>(u(),m("option",{key:y,value:y},p(l),9,Ze))),128))],512),[[j,a(s).currency]]),o(b,{message:a(s).errors.currency,class:"mt-2"},null,8,["message"])]),e("div",null,[o(x,{for:"amount",value:"Amount (incl. GST if any)"}),o(B,{id:"amount",modelValue:a(s).amount,"onUpdate:modelValue":t[3]||(t[3]=l=>a(s).amount=l),type:"number",step:"0.01",placeholder:"Enter amount",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),o(b,{message:a(s).errors.amount,class:"mt-2"},null,8,["message"])]),e("div",null,[e("div",et,[o(x,{value:"GST"}),e("div",tt,[e("label",st,[k(e("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=l=>a(s).gst=l),value:"1",class:"form-radio"},null,512),[[L,a(s).gst]]),t[13]||(t[13]=e("span",{class:"ml-2"},"Yes",-1))]),e("label",at,[k(e("input",{type:"radio","onUpdate:modelValue":t[5]||(t[5]=l=>a(s).gst=l),value:"0",class:"form-radio"},null,512),[[L,a(s).gst]]),t[14]||(t[14]=e("span",{class:"ml-2"},"No",-1))])]),o(b,{message:a(s).errors.gst,class:"mt-2"},null,8,["message"])])]),e("div",null,[e("div",ot,[o(x,{for:"purpose",value:"Purpose of Payment"}),k(e("textarea",{id:"purpose","onUpdate:modelValue":t[6]||(t[6]=l=>a(s).purpose=l),rows:"4",placeholder:"Enter purpose of payment",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},null,512),[[H,a(s).purpose]]),o(b,{message:a(s).errors.purpose,class:"mt-2"},null,8,["message"])])]),e("div",null,[o(x,{for:"receipt_date",value:"Date of Receipt / Invoice"}),o(B,{id:"receipt_date",modelValue:a(s).receipt_date,"onUpdate:modelValue":t[7]||(t[7]=l=>a(s).receipt_date=l),type:"date",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),o(b,{message:a(s).errors.receipt_date,class:"mt-2"},null,8,["message"])]),e("div",null,[e("div",lt,[o(x,{for:"receipt",value:"Upload Receipt"}),e("input",{id:"receipt",type:"file",onChange:t[8]||(t[8]=l=>a(s).receipt=l.target.files[0]),accept:".jpeg,.jpg,.pdf,.png",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 cursor-pointer",required:""},null,32),o(b,{message:a(s).errors.receipt,class:"mt-2"},null,8,["message"])])])]),e("div",rt,[e("button",{type:"button",onClick:n,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),o(E,{type:"submit",class:D(["ms-3",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:P(()=>t[15]||(t[15]=[N(" Submit Claim ")])),_:1},8,["class","disabled"])])],32)]),_:1},8,["show"])]))}},it={class:"flex justify-between content-center"},dt={key:0},ct={key:1},ut={key:0,class:"py-12"},mt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0"},pt={class:"grid md:grid-cols-4 gap-4 mb-5"},vt={class:"grid md:grid-cols gap-4 mb-5"},yt={key:0},gt={class:"flex justify-between w-full"},_t={class:"flex justify-end flex-1"},ft=["disabled"],xt=["disabled"],bt={key:1},qt={__name:"Claim",setup(d){const _=c(!0),v=c([]),r=c(null),w=c(null),V=c(null),C=c(""),s=c(null),T=c(9),n=c(1),$=c(0),U=route("claims.list"),h=async(F=1)=>{try{const f=new URLSearchParams({limit:T.value,page:F,searchValue:C.value??"",paymentType:w.value??"",category:V.value??""}).toString(),{data:g}=await J.get(`${U}?${f}`);v.value=g.data.data,s.value=g.data,$.value=g.data.last_page}catch(f){r.value=f}finally{_.value=!1}};z(()=>{h(n.value)});const i=()=>{n.value>=$.value||(n.value+=1,h(n.value))},t=()=>{h(n.value)},l=()=>{n.value<=1||(n.value-=1,h(n.value))},y=()=>{n.value=1,h(n.value)},O=()=>{w.value=null,V.value=null,y()};return(F,f)=>(u(),m(S,null,[o(a(Q),{title:"Claims"}),o(Z,null,{header:P(()=>[e("div",it,[o(ne,{breadcrumbs:[{title:"Claims"}]}),o(nt,{onCreateComplete:t})])]),default:P(()=>[_.value?(u(),m("div",dt,[o(ae,{class:"mt-32"})])):(u(),m("div",ct,[s.value?(u(),m("div",ut,[e("div",mt,[e("div",pt,[o(re,{class:"w-full mr-5",label:"a Payment Type",modelValue:w.value,"onUpdate:modelValue":f[0]||(f[0]=g=>w.value=g),options:["reimbursement","external_payment"]},null,8,["modelValue"]),o(B,{id:"search",modelValue:C.value,"onUpdate:modelValue":f[1]||(f[1]=g=>C.value=g),placeholder:"Search",class:"text-center"},null,8,["modelValue"]),e("button",{class:"bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded ml-2",onClick:O},"Reset Filters"),e("button",{class:"bg-violet-500 hover:bg-violet-700 text-white py-2 px-4 rounded ml-2",onClick:y},"Search")]),e("div",vt,[(u(!0),m(S,null,q(v.value,g=>(u(),X(Je,{key:g.id,data:g},null,8,["data"]))),128))]),v.value.length===0||v.value==[]?(u(),m("div",yt,[o(A)])):W("",!0),e("div",gt,[e("div",null,[e("p",null,"Showing "+p(s.value.from??0)+" to "+p(s.value.to??0)+" of "+p(s.value.total)+" entries ",1)]),e("div",_t,[e("button",{class:D(["bg-white hover:bg-gray-200 text-gray py-2 px-4 rounded ml-2",[{"cursor-not-allowed":n.value==1}]]),onClick:l,disabled:n.value==1},"Previous Page",10,ft),e("button",{class:D(["bg-black hover:bg-gray-700 text-white py-2 px-4 rounded ml-2",[{"cursor-not-allowed":n.value==$.value}]]),disabled:n.value==$.value,onClick:i},"Next Page",10,xt)])])])])):(u(),m("div",bt,[o(A)]))]))]),_:1})],64))}};export{qt as default};
