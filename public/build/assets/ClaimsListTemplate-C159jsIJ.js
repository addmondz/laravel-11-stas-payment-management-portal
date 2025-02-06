import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as l,o as u,g as v,b as e,k as f,C as se,s as R,m as ae,c as E,w as T,e as z,u as o,f as oe,t as g,j as k,x as D,F,l as L,y as H,h as $,z as le,n as V,A as re,i as ne,P as ie}from"./app-Bq7Wg0nI.js";import{S as P,f as ce,d as de}from"./helpers-7IJGRKhZ.js";import{_ as ue}from"./StatusLabel-7kEVLN6_.js";import{a as me}from"./ListComponent-BCAEqgrm.js";import{_ as h}from"./InputError-CV6oh69h.js";import{_ as w,a as A}from"./TextInput-D504svKF.js";import{M as pe}from"./Modal-pLEzXfcN.js";import{P as K}from"./PrimaryButton-C0yGrSjv.js";import{L as ye}from"./NotFound-CTnch1Pi.js";import{C as fe}from"./CustomSelectComponent-CtMGDM2Q.js";import{E as ve}from"./PaymentVoucherForm-D58vkZOT.js";import{c as ge}from"./AuthenticatedLayout-CBc95hdQ.js";import{I as be}from"./BreadcrumbComponent-CdAaxYtL.js";var xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};function Y(n){for(var d=1;d<arguments.length;d++){var c=arguments[d]!=null?Object(arguments[d]):{},p=Object.keys(c);typeof Object.getOwnPropertySymbols=="function"&&(p=p.concat(Object.getOwnPropertySymbols(c).filter(function(y){return Object.getOwnPropertyDescriptor(c,y).enumerable}))),p.forEach(function(y){_e(n,y,c[y])})}return n}function _e(n,d,c){return d in n?Object.defineProperty(n,d,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[d]=c,n}var U=function(d,c){var p=Y({},d,c.attrs);return l(be,Y({},p,{icon:xe}),null)};U.displayName="DeleteOutlined";U.inheritAttrs=!1;const he={},we={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"};function Ce(n,d){return u(),v("svg",we,d[0]||(d[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"},null,-1)]))}const ke=te(he,[["render",Ce]]),Pe={class:"space-y-6"},Se={key:0},Te={key:1},Ve={class:"text-lg font-medium text-gray-900"},$e={class:"grid grid-cols-1 gap-4 mt-4"},Oe=["value"],Be=["value"],je={class:"col-span-2"},De={class:"flex items-center space-x-4 mt-1"},Ae={class:"flex space-x-4"},Ee={class:"inline-flex items-center"},Ue={class:"inline-flex items-center"},Me={key:0},Ne={class:"col-span-2"},qe={class:"col-span-2"},Ge={key:2,class:"text-right mt-6"},Ie={__name:"CreateClaimForm",props:{claimData:{type:Object,default:null}},setup(n,{emit:d}){const c=n,p=f(!1),y=f(!1),_=f(!1),O=d,S=f([]),m=f([]),i=f([]),b=f(""),C=f(null),t=se({payment_to:"",payment_type:"",payment_category:"",currency:"",amount:"",gst:"",gst_value:"",purpose:"",receipt_date:"",receipt:null}),M=f(0),J=f(),N=f(),q=()=>{t.gst==1?(G(),_.value=!0):_.value=!1},Q=async(a=1)=>{try{const{data:s}=await axios.get(route("variables.fetchesGst"));M.value=s}catch(s){C.value=s}},G=()=>{t.gst_value=(t.amount*M.value/100).toFixed(2)},I=()=>{p.value=!0},B=()=>{p.value=!1},W=async()=>{y.value=!0;try{const a=new FormData;t.receipt!=null&&a.append("receipt",t.receipt);for(const[x,j]of Object.entries(t.data()))x!="receipt"&&a.append(x,j);const s=c.claimData?route("claims.update",c.claimData.id):route("claims.store"),r=await axios.post(s,a,{headers:{"Content-Type":"multipart/form-data"}});P.fire({title:"Success!",text:r.data.success,icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"w-32"},willClose:()=>{location.reload()}}),B(),t.reset(),O("createComplete",!0),y.value=!1}catch(a){a.response&&a.response.data.errors?t.errors=a.response.data.errors:P.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"}),y.value=!1}},X=async()=>{try{const{data:a}=await axios.get(route("currency.listShortCode"));S.value=a}catch(a){C.value=a}},Z=async()=>{try{const{data:a}=await axios.get(route("paymentCategory.listChoice"));i.value=a}catch(a){C.value=a}},ee=async()=>{try{const{data:a}=await axios.get(route("paymentReceiver.listNameAndId"));m.value=a;for(let s=0;s<m.value.length;s++)if(m.value[s].id==t.payment_to){N.value=m.value[s].name;break}}catch(a){C.value=a}};return R(()=>b.value,(a,s)=>{if(t&&"payment_to"in t){t.payment_to=a.toString();const r=m.value.find(j=>j.id===parseInt(a)),x=r?r.currency_id:null;t.currency=x}},{immediate:!0}),R(()=>c.claimData,a=>{a?(re(()=>{t.payment_to=a.payment_receiver_id}),t.payment_type=a.payment_type,t.payment_category=a.payment_category_id,t.currency=a.currency_id,t.amount=a.amount,t.gst=a.gst_amount!=0?"1":"0",t.gst_value=a.gst_amount,t.purpose=a.purpose,t.receipt_date=a.receipt_date,a.gst_amount!=0&&(_.value=!0)):t.reset()},{immediate:!0}),ae(()=>{Q(),X(),Z(),ee()}),(a,s)=>(u(),v("section",Pe,[c.claimData==null?(u(),E(K,{key:0,onClick:I},{default:T(()=>s[11]||(s[11]=[z("Create Payment")])),_:1})):(u(),E(o(ve),{key:1,class:"mb-4 mr-2",onClick:I})),l(pe,{show:p.value,onClose:B},{default:T(()=>[e("form",{onSubmit:oe(W,["prevent"]),class:"p-5"},[y.value?(u(),v("div",Se,[l(ye,{class:"mt-32 mb-32"})])):(u(),v("div",Te,[e("h2",Ve,g(c.claimData!=null?"Edit Payment":"Create New Payment"),1),e("div",$e,[e("div",null,[l(w,{for:"payment_to",value:"Payment To"}),l(fe,{choices:m.value,modelValue:b.value,"onUpdate:modelValue":s[0]||(s[0]=r=>b.value=r),isEdit:c.claimData!=null,label:c.claimData!=null?N.value:"Payment To",choicesIsObject:!0,ref_key:"customSelect",ref:J},null,8,["choices","modelValue","isEdit","label"]),l(h,{message:o(t).errors.payment_to,class:"mt-2"},null,8,["message"])]),e("div",null,[l(w,{for:"payment_type",value:"Payment Type"}),k(e("select",{id:"payment_type","onUpdate:modelValue":s[1]||(s[1]=r=>o(t).payment_type=r),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},s[12]||(s[12]=[e("option",{value:"",disabled:"",selected:""},"Please select Payment Type",-1),e("option",{value:"reimbursement"},"Reimbursement",-1),e("option",{value:"external_payment"},"External Payment",-1)]),512),[[D,o(t).payment_type]]),l(h,{message:o(t).errors.payment_type,class:"mt-2"},null,8,["message"])]),e("div",null,[l(w,{for:"payment_category",value:"Payment Category"}),k(e("select",{id:"currency","onUpdate:modelValue":s[2]||(s[2]=r=>o(t).payment_category=r),class:"mt-1 payment_category w-full border-gray-300 rounded-md shadow-sm",required:""},[s[13]||(s[13]=e("option",{value:"",disabled:"",selected:""},"Please select Payment Category",-1)),(u(!0),v(F,null,L(i.value,(r,x)=>(u(),v("option",{key:x,value:x,class:"capitalize"},g(r),9,Oe))),128))],512),[[D,o(t).payment_category]]),l(h,{message:o(t).errors.payment_category,class:"mt-2"},null,8,["message"])]),e("div",null,[l(w,{for:"currency",value:"Currency"}),k(e("select",{id:"currency","onUpdate:modelValue":s[3]||(s[3]=r=>o(t).currency=r),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},[s[14]||(s[14]=e("option",{value:"",disabled:"",selected:""},"Please select Currency",-1)),(u(!0),v(F,null,L(S.value,(r,x)=>(u(),v("option",{key:x,value:x},g(r),9,Be))),128))],512),[[D,o(t).currency]]),l(h,{message:o(t).errors.currency,class:"mt-2"},null,8,["message"])]),e("div",null,[l(w,{for:"amount",value:"Amount (incl. GST if any)"}),l(A,{id:"amount",modelValue:o(t).amount,"onUpdate:modelValue":s[4]||(s[4]=r=>o(t).amount=r),type:"number",step:"0.01",placeholder:"Enter amount",class:"mt-1 block w-full",required:"",onKeyup:G},null,8,["modelValue"]),l(h,{message:o(t).errors.amount,class:"mt-2"},null,8,["message"])]),e("div",null,[e("div",je,[l(w,{value:"GST"}),e("div",De,[e("div",Ae,[e("label",Ee,[k(e("input",{type:"radio","onUpdate:modelValue":s[5]||(s[5]=r=>o(t).gst=r),value:"1",class:"form-radio",onChange:q},null,544),[[H,o(t).gst]]),s[15]||(s[15]=e("span",{class:"ml-2"},"Yes",-1))]),e("label",Ue,[k(e("input",{type:"radio","onUpdate:modelValue":s[6]||(s[6]=r=>o(t).gst=r),value:"0",class:"form-radio",onChange:q},null,544),[[H,o(t).gst]]),s[16]||(s[16]=e("span",{class:"ml-2"},"No",-1))])]),_.value?(u(),v("div",Me,[l(A,{id:"gst_value",modelValue:o(t).gst_value,"onUpdate:modelValue":s[7]||(s[7]=r=>o(t).gst_value=r),type:"number",step:"0.01",placeholder:"Enter GST amount",class:"mt-1 block w-full",required:""},null,8,["modelValue"])])):$("",!0)]),l(h,{message:o(t).errors.gst,class:"mt-2"},null,8,["message"])])]),e("div",null,[e("div",Ne,[l(w,{for:"purpose",value:"Purpose of Payment"}),k(e("textarea",{id:"purpose","onUpdate:modelValue":s[8]||(s[8]=r=>o(t).purpose=r),rows:"4",placeholder:"Enter purpose of payment",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},null,512),[[le,o(t).purpose]]),l(h,{message:o(t).errors.purpose,class:"mt-2"},null,8,["message"])])]),e("div",null,[l(w,{for:"receipt_date",value:"Date of Receipt / Invoice"}),l(A,{id:"receipt_date",modelValue:o(t).receipt_date,"onUpdate:modelValue":s[9]||(s[9]=r=>o(t).receipt_date=r),type:"date",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),l(h,{message:o(t).errors.receipt_date,class:"mt-2"},null,8,["message"])]),e("div",null,[e("div",qe,[l(w,{for:"receipt",value:"Upload Receipt"}),e("input",{id:"receipt",type:"file",onChange:s[10]||(s[10]=r=>o(t).receipt=r.target.files[0]),accept:".jpeg,.jpg,.pdf,.png",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 cursor-pointer"},null,32),l(h,{message:o(t).errors.receipt,class:"mt-2"},null,8,["message"])])])])])),y.value?$("",!0):(u(),v("div",Ge,[e("button",{type:"button",onClick:B,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),l(K,{type:"submit",class:V(["ms-3",{"opacity-25":o(t).processing}]),disabled:o(t).processing},{default:T(()=>s[17]||(s[17]=[z(" Submit Payment ")])),_:1},8,["class","disabled"])]))],32)]),_:1},8,["show"])]))}},Re={class:"flex"},ze={key:0,class:"flex justify-center items-center"},Fe={class:"flex-1"},Le={class:"grid lg:grid-cols-8 grid-cols-2 gap-x-4 gap-y-4 relative isolate"},He={class:"col"},Ke={class:""},Ye={class:"col"},Je={class:""},Qe={class:"col"},We={class:"capitalize"},Xe={class:"col"},Ze={class:"whitespace-nowrap overflow-hidden text-ellipsis"},et={class:"col"},tt={class:"relative group"},st={class:"truncate cursor-pointer"},at={class:"absolute invisible group-hover:visible left-0 -top-2 transform -translate-y-full w-max max-w-xs px-4 py-3 bg-gray-900/95 backdrop-blur-sm text-white text-sm font-medium rounded-lg shadow-xl transform-gpu scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out before:content-[''] before:absolute before:left-4 before:top-full before:border-8 before:border-x-transparent before:border-b-transparent before:border-t-gray-900/95 z-[9999]"},ot={class:"break-words"},lt={class:"col"},rt={class:"truncate"},nt={class:"col"},it={class:"col"},ct={class:""},dt={class:"flex justify-center items-center space-x-4"},ut=["disabled"],mt={class:"cursor-pointer hover:text-violet-600 transition-all"},Tt={__name:"ClaimsListTemplate",props:{data:{type:Object,required:!0},showGroupActions:{type:Boolean,required:!1},isSelected:{type:Boolean,required:!1,default:!1}},emits:["update-selected-list"],setup(n,{emit:d}){const c=d,p=n,y=m=>{c("update-selected-list",{isSelected:m,id:p.data.id})},_=ne(()=>p.data.status_id>=2),O=()=>{P.fire({title:"Are you sure?",text:"Are you sure you want to delete this Payment?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",allowOutsideClick:!1,stopKeydownPropagation:!0,preConfirm:()=>new Promise((m,i)=>{S()})})},S=async()=>{var m,i;try{const b=await axios.post(route("claims.delete",p.data.id));c("createComplete",!0),P.fire({title:"Success!",text:"The Payment has been successfully deleted.",icon:"success",confirmButtonText:"OK"})}catch(b){console.log(b),P.fire({title:"Error!",text:((i=(m=b.response)==null?void 0:m.data)==null?void 0:i.error)||"An unexpected error occurred while deleteing the payment.",icon:"error",confirmButtonText:"OK"})}};return f(!1),(m,i)=>{var b,C;return u(),v("div",{class:V(["w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-visible bg-white hover:border-violet-600 transition-all duration-500",{"bg-violet-50 border-violet-900":n.isSelected}])},[e("div",Re,[n.showGroupActions?(u(),v("div",ze,[l(me,{onUpdateSelected:y,isSelected:n.isSelected,class:"block mr-5"},null,8,["isSelected"])])):$("",!0),e("div",Fe,[e("div",Le,[e("div",He,[i[0]||(i[0]=e("div",{class:"mb-1 text-xs text-gray-500"},"ID",-1)),e("div",Ke,g(n.data.id),1)]),e("div",Ye,[i[1]||(i[1]=e("div",{class:"mb-1 text-xs text-gray-500"},"Payment To",-1)),e("div",Je,g((b=n.data.payment_receiver)==null?void 0:b.name),1)]),e("div",Qe,[i[2]||(i[2]=e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Category",-1)),e("div",We,g(n.data.payment_category_name),1)]),e("div",Xe,[i[3]||(i[3]=e("div",{class:"mb-1 text-xs text-gray-500"},"Total Amount",-1)),e("div",Ze,g(n.data.currency)+" "+g(o(ce)(n.data.amount)),1)]),e("div",et,[i[4]||(i[4]=e("div",{class:"mb-1 text-xs text-gray-500"},"Purpose",-1)),e("div",tt,[e("div",st,g(n.data.purpose),1),e("div",at,[e("div",ot,g(n.data.purpose),1)])])]),e("div",lt,[i[5]||(i[5]=e("div",{class:"mb-1 text-xs text-gray-500"},"Created By",-1)),e("div",rt,g((C=n.data.created_user)==null?void 0:C.name),1)]),e("div",nt,[i[6]||(i[6]=e("div",{class:"mb-1 text-xs text-gray-500"},"Status",-1)),l(ue,{class:"overide-fs-11 inline-block w-[140px] rounded-xl",status:n.data.status,name:n.data.status_name},null,8,["status","name"])]),e("div",it,[i[7]||(i[7]=e("div",{class:"mb-1 text-xs text-gray-500"},"Created At",-1)),e("div",ct,g(o(de)(n.data.created_at)),1)])])]),e("div",dt,[o(ge)().value?(u(),E(o(U),{key:0,onClick:O,class:V(["mb-3 mr-2",{invisible:_.value}]),disabled:_.value},null,8,["class","disabled"])):$("",!0),e("div",{class:V({invisible:_.value}),disabled:_.value},[l(Ie,{claimData:n.data},null,8,["claimData"])],10,ut),e("button",mt,[l(o(ie),{href:m.route("claim.details",n.data.id)},{default:T(()=>[l(ke,{class:"text-violet-700"})]),_:1},8,["href"])])])])],2)}}};export{Tt as _,Ie as a};
