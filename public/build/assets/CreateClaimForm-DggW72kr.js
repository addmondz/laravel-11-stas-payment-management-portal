import{I as ae}from"./BreadcrumbComponent-DrNXk13Y.js";import{a as o,i as L,o as m,g,t as h,n as K,k as p,C as se,s as N,m as re,c as q,w as S,e as B,u as r,b as s,f as le,j as x,x as V,F as I,l as R,y as G,h as z,z as oe,A as ne}from"./app-CNr8R3FR.js";import{_ as v}from"./InputError-CAjkgiDj.js";import{_ as b,a as O}from"./TextInput-FhWj68LQ.js";import{M as ue}from"./Modal-DCR-aqMG.js";import{P as F}from"./PrimaryButton-DjmDgy5q.js";import{S as $}from"./helpers-CM2QrBNG.js";import{L as ie}from"./NotFound-D8MkJcfE.js";import{C as ce}from"./CustomSelectComponent-DF4g705M.js";import{E as me}from"./PaymentVoucherForm-CoYwRg5X.js";var de={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};function H(i){for(var u=1;u<arguments.length;u++){var n=arguments[u]!=null?Object(arguments[u]):{},d=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(d=d.concat(Object.getOwnPropertySymbols(n).filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable}))),d.forEach(function(c){pe(i,c,n[c])})}return i}function pe(i,u,n){return u in i?Object.defineProperty(i,u,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[u]=n,i}var Y=function(u,n){var d=H({},u,n.attrs);return o(ae,H({},d,{icon:de}),null)};Y.displayName="DeleteOutlined";Y.inheritAttrs=!1;const Ie={__name:"StatusLabel",props:{status:{type:String,required:!0},name:{type:String,required:!0}},setup(i){const u=i,n=L(()=>{const c=u.status.toLowerCase(),f=u.name;if(c==="pending approval"){if(f==="Pending Approval • L1")return"text-red-800 bg-red-100";if(f==="Pending Approval • L2")return"text-red-800 bg-orange-100";if(f==="Pending Approval • L3")return"text-red-800 bg-yellow-100"}switch(c){case"completed":case"payment completed":case"success":return"text-green-800 bg-green-100";case"approved":return"text-blue-800 bg-blue-100";case"pending submission":return"text-blue-800 bg-cyan-100";case"rejected":case"payment failed":return"text-red-800 bg-red-100";case"pending approval":return"text-yellow-800 bg-yellow-100";case"cancelled":default:return"text-gray-800 bg-gray-100"}}),d=L(()=>u.status.charAt(0).toUpperCase()+u.status.slice(1).toLowerCase());return(c,f)=>(m(),g("span",{class:K([n.value,"block text-center capitalize px-3 py-1 me-2 text-sm font-medium rounded"])},h(i.name?i.name:d.value),3))}},ye={class:"space-y-6"},ge={key:0},fe={key:1},ve={class:"text-lg font-medium text-gray-900"},be={class:"grid grid-cols-1 gap-4 mt-4"},_e=["value"],xe=["value"],Ce={class:"col-span-2"},he={class:"flex items-center space-x-4 mt-1"},we={class:"flex space-x-4"},Pe={class:"inline-flex items-center"},ke={class:"inline-flex items-center"},Se={key:0},Ve={class:"col-span-2"},Oe={class:"col-span-2"},Te={key:2,class:"text-right mt-6"},Re={__name:"CreateClaimForm",props:{claimData:{type:Object,default:null}},setup(i,{emit:u}){const n=i,d=p(!1),c=p(!1),f=p(!1),J=u,T=p([]),_=p([]),D=p([]),w=p(""),C=p(null),e=se({payment_to:"",payment_type:"",payment_category:"",currency:"",amount:"",gst:"",gst_value:"",purpose:"",receipt_date:"",receipt:null}),E=p(0),Q=p(),M=p(),U=()=>{e.gst==1?(j(),f.value=!0):f.value=!1},W=async(a=1)=>{try{const{data:t}=await axios.get(route("variables.fetchesGst"));E.value=t}catch(t){C.value=t}},j=()=>{e.gst_value=(e.amount*E.value/100).toFixed(2)},A=()=>{d.value=!0},P=()=>{d.value=!1},X=async()=>{c.value=!0;try{const a=new FormData;e.receipt!=null&&a.append("receipt",e.receipt);for(const[y,k]of Object.entries(e.data()))y!="receipt"&&a.append(y,k);const t=n.claimData?route("claims.update",n.claimData.id):route("claims.store"),l=await axios.post(t,a,{headers:{"Content-Type":"multipart/form-data"}});$.fire({title:"Success!",text:l.data.success,icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"w-32"},willClose:()=>{location.reload()}}),P(),e.reset(),J("createComplete",!0),c.value=!1}catch(a){a.response&&a.response.data.errors?e.errors=a.response.data.errors:$.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"}),c.value=!1}},Z=async()=>{try{const{data:a}=await axios.get(route("currency.listShortCode"));T.value=a}catch(a){C.value=a}},ee=async()=>{try{const{data:a}=await axios.get(route("paymentCategory.listChoice"));D.value=a}catch(a){C.value=a}},te=async()=>{try{const{data:a}=await axios.get(route("paymentReceiver.listNameAndId"));_.value=a;for(let t=0;t<_.value.length;t++)if(_.value[t].id==e.payment_to){M.value=_.value[t].name;break}}catch(a){C.value=a}};return N(()=>w.value,(a,t)=>{if(e&&"payment_to"in e){e.payment_to=a.toString();const l=_.value.find(k=>k.id===parseInt(a)),y=l?l.currency_id:null;e.currency=y}},{immediate:!0}),N(()=>n.claimData,a=>{a?(ne(()=>{e.payment_to=a.payment_receiver_id}),e.payment_type=a.payment_type,e.payment_category=a.payment_category_id,e.currency=a.currency_id,e.amount=a.amount,e.gst=a.gst_amount!=0?"1":"0",e.gst_value=a.gst_amount,e.purpose=a.purpose,e.receipt_date=a.receipt_date,a.gst_amount!=0&&(f.value=!0)):e.reset()},{immediate:!0}),re(()=>{W(),Z(),ee(),te()}),(a,t)=>(m(),g("section",ye,[n.claimData==null?(m(),q(F,{key:0,onClick:A},{default:S(()=>t[11]||(t[11]=[B("Create Payment")])),_:1})):(m(),q(r(me),{key:1,class:"mb-4 mr-2",onClick:A})),o(ue,{show:d.value,onClose:P},{default:S(()=>[s("form",{onSubmit:le(X,["prevent"]),class:"p-5"},[c.value?(m(),g("div",ge,[o(ie,{class:"mt-32 mb-32"})])):(m(),g("div",fe,[s("h2",ve,h(n.claimData!=null?"Edit Payment":"Create New Payment"),1),s("div",be,[s("div",null,[o(b,{for:"payment_to",value:"Payment To"}),o(ce,{choices:_.value,modelValue:w.value,"onUpdate:modelValue":t[0]||(t[0]=l=>w.value=l),isEdit:n.claimData!=null,label:n.claimData!=null?M.value:"Payment To",choicesIsObject:!0,ref_key:"customSelect",ref:Q},null,8,["choices","modelValue","isEdit","label"]),o(v,{message:r(e).errors.payment_to,class:"mt-2"},null,8,["message"])]),s("div",null,[o(b,{for:"payment_type",value:"Payment Type"}),x(s("select",{id:"payment_type","onUpdate:modelValue":t[1]||(t[1]=l=>r(e).payment_type=l),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},t[12]||(t[12]=[s("option",{value:"",disabled:"",selected:""},"Please select Payment Type",-1),s("option",{value:"reimbursement"},"Reimbursement",-1),s("option",{value:"external_payment"},"External Payment",-1)]),512),[[V,r(e).payment_type]]),o(v,{message:r(e).errors.payment_type,class:"mt-2"},null,8,["message"])]),s("div",null,[o(b,{for:"payment_category",value:"Payment Category"}),x(s("select",{id:"currency","onUpdate:modelValue":t[2]||(t[2]=l=>r(e).payment_category=l),class:"mt-1 payment_category w-full border-gray-300 rounded-md shadow-sm",required:""},[t[13]||(t[13]=s("option",{value:"",disabled:"",selected:""},"Please select Payment Category",-1)),(m(!0),g(I,null,R(D.value,(l,y)=>(m(),g("option",{key:y,value:y,class:"capitalize"},h(l),9,_e))),128))],512),[[V,r(e).payment_category]]),o(v,{message:r(e).errors.payment_category,class:"mt-2"},null,8,["message"])]),s("div",null,[o(b,{for:"currency",value:"Currency"}),x(s("select",{id:"currency","onUpdate:modelValue":t[3]||(t[3]=l=>r(e).currency=l),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},[t[14]||(t[14]=s("option",{value:"",disabled:"",selected:""},"Please select Currency",-1)),(m(!0),g(I,null,R(T.value,(l,y)=>(m(),g("option",{key:y,value:y},h(l),9,xe))),128))],512),[[V,r(e).currency]]),o(v,{message:r(e).errors.currency,class:"mt-2"},null,8,["message"])]),s("div",null,[o(b,{for:"amount",value:"Amount (incl. GST if any)"}),o(O,{id:"amount",modelValue:r(e).amount,"onUpdate:modelValue":t[4]||(t[4]=l=>r(e).amount=l),type:"number",step:"0.01",placeholder:"Enter amount",class:"mt-1 block w-full",required:"",onKeyup:j},null,8,["modelValue"]),o(v,{message:r(e).errors.amount,class:"mt-2"},null,8,["message"])]),s("div",null,[s("div",Ce,[o(b,{value:"GST"}),s("div",he,[s("div",we,[s("label",Pe,[x(s("input",{type:"radio","onUpdate:modelValue":t[5]||(t[5]=l=>r(e).gst=l),value:"1",class:"form-radio",onChange:U},null,544),[[G,r(e).gst]]),t[15]||(t[15]=s("span",{class:"ml-2"},"Yes",-1))]),s("label",ke,[x(s("input",{type:"radio","onUpdate:modelValue":t[6]||(t[6]=l=>r(e).gst=l),value:"0",class:"form-radio",onChange:U},null,544),[[G,r(e).gst]]),t[16]||(t[16]=s("span",{class:"ml-2"},"No",-1))])]),f.value?(m(),g("div",Se,[o(O,{id:"gst_value",modelValue:r(e).gst_value,"onUpdate:modelValue":t[7]||(t[7]=l=>r(e).gst_value=l),type:"number",step:"0.01",placeholder:"Enter GST amount",class:"mt-1 block w-full",required:""},null,8,["modelValue"])])):z("",!0)]),o(v,{message:r(e).errors.gst,class:"mt-2"},null,8,["message"])])]),s("div",null,[s("div",Ve,[o(b,{for:"purpose",value:"Purpose of Payment"}),x(s("textarea",{id:"purpose","onUpdate:modelValue":t[8]||(t[8]=l=>r(e).purpose=l),rows:"4",placeholder:"Enter purpose of payment",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},null,512),[[oe,r(e).purpose]]),o(v,{message:r(e).errors.purpose,class:"mt-2"},null,8,["message"])])]),s("div",null,[o(b,{for:"receipt_date",value:"Date of Receipt / Invoice"}),o(O,{id:"receipt_date",modelValue:r(e).receipt_date,"onUpdate:modelValue":t[9]||(t[9]=l=>r(e).receipt_date=l),type:"date",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),o(v,{message:r(e).errors.receipt_date,class:"mt-2"},null,8,["message"])]),s("div",null,[s("div",Oe,[o(b,{for:"receipt",value:"Upload Receipt"}),s("input",{id:"receipt",type:"file",onChange:t[10]||(t[10]=l=>r(e).receipt=l.target.files[0]),accept:".jpeg,.jpg,.pdf,.png",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 cursor-pointer"},null,32),o(v,{message:r(e).errors.receipt,class:"mt-2"},null,8,["message"])])])])])),c.value?z("",!0):(m(),g("div",Te,[s("button",{type:"button",onClick:P,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),o(F,{type:"submit",class:K(["ms-3",{"opacity-25":r(e).processing}]),disabled:r(e).processing},{default:S(()=>t[17]||(t[17]=[B(" Submit Payment ")])),_:1},8,["class","disabled"])]))],32)]),_:1},8,["show"])]))}};export{Y as D,Re as _,Ie as a};
