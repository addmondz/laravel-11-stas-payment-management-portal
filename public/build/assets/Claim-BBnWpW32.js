import{a as s,o as c,g as m,b as e,j as h,k as N,u as a,n as B,l as C,h as L,t as x,w as k,P as Q,F as $,m as A,c as D,e as U,C as W,p as X,f as Z,q as V,s as E,x as ee,d as te}from"./app-kjEofN6q.js";import{_ as ae,g as se,i as le}from"./AuthenticatedLayout-TJA7kYzW.js";import{I as oe,_ as re}from"./BreadcrumbComponent-DvFHMqau.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{f as ne,a as ie,b as ce,c as de}from"./helpers-D6Y383fA.js";import{_ as ue}from"./StatusLabel-rWLlSrMF.js";import{_ as K}from"./ListComponent-BUeNcLoM.js";import{P as I}from"./PrimaryButton-DqHQqgy5.js";import{S as O,L as me}from"./sweetalert2.esm.all-XKxolmLR.js";import{_ as w}from"./InputError-CexqwnXL.js";import{_ as S,a as z}from"./TextInput-D7bikoV7.js";import{_ as pe}from"./Modal-5gFQKfDh.js";import"./ApplicationLogo-M_mRncSF.js";var ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};function G(o){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?Object(arguments[i]):{},u=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable}))),u.forEach(function(d){fe(o,d,n[d])})}return o}function fe(o,i,n){return i in o?Object.defineProperty(o,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[i]=n,o}var M=function(i,n){var u=G({},i,n.attrs);return s(oe,G({},u,{icon:ve}),null)};M.displayName="CheckOutlined";M.inheritAttrs=!1;const ge={},ye={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"};function _e(o,i){return c(),m("svg",ye,i[0]||(i[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"},null,-1)]))}const Ce=F(ge,[["render",_e]]),xe={__name:"SquareBtn",props:{isSelected:{type:Boolean,default:!1}},emits:["update-selected"],setup(o,{emit:i}){const n=o,u=i,d=()=>{u("update-selected",!n.isSelected)};return(_,g)=>(c(),m("div",{class:B(["square-btn border-4 flex justify-center items-center",{"selected bg-violet-400 border-violet-400":o.isSelected,"border-gray-400":!o.isSelected}]),onClick:d},[h(s(a(M),{class:"font-extrabold text-white"},null,512),[[N,o.isSelected]])],2))}},be={class:"flex"},he={key:0,class:"flex justify-center items-center"},we={class:"flex-1"},Se={class:"grid lg:grid-cols-7 grid-cols-2 gap-x-4 gap-y-4"},ke={class:"col"},Pe={class:""},$e={class:"col"},Ae={class:""},Te={class:"col"},Oe={class:"capitalize"},Ue={class:"col"},Be={class:"whitespace-nowrap overflow-hidden text-ellipsis"},je={class:"col"},Ve={class:"truncate"},qe={class:"col"},Ne={class:"col"},De={class:""},Ie={class:"flex justify-center items-center"},Le={class:"cursor-pointer hover:text-violet-600 transition-all"},Y={__name:"ClaimsListTemplate",props:{data:{type:Object,required:!0},showGroupActions:{type:Boolean,required:!1}},setup(o,{emit:i}){const n=i,u=o,d=C(!1),_=g=>{d.value=g,n("update-selected-list",{isSelected:g,id:u.data.id})};return(g,p)=>{var y;return c(),m("div",{class:B(["w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500",{"bg-violet-50 border-violet-900":d.value}])},[e("div",be,[o.showGroupActions?(c(),m("div",he,[s(xe,{onUpdateSelected:_,isSelected:d.value,class:"block mr-5"},null,8,["isSelected"])])):L("",!0),e("div",we,[e("div",Se,[e("div",ke,[p[0]||(p[0]=e("div",{class:"mb-1 text-xs text-gray-500"},"ID",-1)),e("div",Pe,x(o.data.id),1)]),e("div",$e,[p[1]||(p[1]=e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Type",-1)),e("div",Ae,x(a(ne)(o.data.payment_type)),1)]),e("div",Te,[p[2]||(p[2]=e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Category",-1)),e("div",Oe,x(o.data.payment_category_name),1)]),e("div",Ue,[p[3]||(p[3]=e("div",{class:"mb-1 text-xs text-gray-500"},"Total Amount",-1)),e("div",Be,x(o.data.currency)+" "+x(a(ie)(o.data.amount)),1)]),e("div",je,[p[4]||(p[4]=e("div",{class:"mb-1 text-xs text-gray-500"},"Created By",-1)),e("div",Ve,x((y=o.data.created_user)==null?void 0:y.name),1)]),e("div",qe,[p[5]||(p[5]=e("div",{class:"mb-1 text-xs text-gray-500"},"Status",-1)),s(ue,{class:"overide-fs-11 inline-block w-[140px] rounded-xl",status:o.data.status},null,8,["status"])]),e("div",Ne,[p[6]||(p[6]=e("div",{class:"mb-1 text-xs text-gray-500"},"Created At",-1)),e("div",De,x(a(ce)(o.data.created_at)),1)])])]),e("div",Ie,[e("button",Le,[s(a(Q),{href:g.route("claim.details",o.data.id)},{default:k(()=>[s(Ce,{class:"text-violet-700"})]),_:1},8,["href"])])])])],2)}}},R={__name:"AllClaim",props:{createCompleteSignal:{type:Number,default:!1}},setup(o,{emit:i}){const n=C([]),u=({isSelected:d,id:_})=>{n.value=d?[...new Set([...n.value,_])]:n.value.filter(g=>g!==_)};return(d,_)=>(c(),m("div",null,[s(K,{apiUrl:d.route("claims.list"),createCompleteSignal:o.createCompleteSignal},{"list-view":k(({data:g,apiResponse:p})=>[(c(!0),m($,null,A(g,y=>(c(),D(Y,{createComplete:o.createCompleteSignal,onUpdateSelectedList:u,key:y.id,data:y},null,8,["createComplete","data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal"])]))}},Me={__name:"PendingClaim",props:{createCompleteSignal:{type:Number,default:!1}},setup(o,{emit:i}){const n=i,u=f=>{n("pendingClaimsCount",f)},d=C([]),_=C(1),g=({isSelected:f,id:b})=>{d.value=f?[...new Set([...d.value,b])]:d.value.filter(T=>T!==b)},p=()=>{O.fire({title:"Are you sure?",text:"Are you sure you want to approve these Claims?",icon:"question",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",allowOutsideClick:!1,stopKeydownPropagation:!0,preConfirm:()=>new Promise((f,b)=>{l()})})},y=()=>{_.value++,d.value=[]},l=async()=>{try{const f=await axios.post(route("claims.groupApprove",d.value.toString()));y(),O.fire({title:"Success!",text:"The claim has been successfully approved.",icon:"success",confirmButtonText:"OK"})}catch(f){O.fire({title:"Error!",text:f.response?f.response.data.error||"There was an error while approving the claim. Please try again.":"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}};return(f,b)=>(c(),m("div",null,[s(I,{class:B(["mt-5 mb-3",{invisible:!d.value.length}]),onClick:p},{default:k(()=>b[0]||(b[0]=[U("Approve Selected Claim")])),_:1},8,["class"]),(c(),D(K,{hasPaddingTop:!1,apiUrl:f.route("claims.listPendingApproval"),createCompleteSignal:o.createCompleteSignal,key:_.value},{"list-view":k(({data:T,apiResponse:q})=>[U(x(u(q.total))+" ",1),(c(!0),m($,null,A(T,j=>(c(),D(Y,{showGroupActions:!0,createComplete:o.createCompleteSignal,onUpdateSelectedList:g,key:j.id,data:j},null,8,["createComplete","data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal"]))]))}},Ee={class:"space-y-6"},ze={key:0},Ge={key:1},Re={class:"grid grid-cols-1 gap-4 mt-4"},Fe=["value","data-attr-currency-id"],Ke=["value"],Ye=["value"],He={class:"col-span-2"},Je={class:"flex items-center space-x-4 mt-1"},Qe={class:"inline-flex items-center"},We={class:"inline-flex items-center"},Xe={class:"col-span-2"},Ze={class:"col-span-2"},et={key:2,class:"text-right mt-6"},tt={__name:"CreateClaimForm",setup(o,{emit:i}){const n=C(!1),u=C(!1),d=i,_=C([]),g=C([]),p=C([]),y=C(null),l=W({payment_to:"",payment_type:"",payment_category:"",currency:"",amount:"",gst:"",purpose:"",receipt_date:"",receipt:null}),f=()=>{n.value=!0},b=()=>{n.value=!1},T=async()=>{u.value=!0;try{const v=new FormData;v.append("receipt",l.receipt);for(const[r,P]of Object.entries(l.data()))v.append(r,P);const t=await axios.post(route("claims.store"),v,{headers:{"Content-Type":"multipart/form-data"}});O.fire({title:"Success!",text:t.data.success,icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"w-32"}}),b(),l.reset(),d("createComplete",!0),u.value=!1}catch(v){v.response&&v.response.data.errors?l.errors=v.response.data.errors:O.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"}),u.value=!1}},q=async()=>{try{const{data:v}=await axios.get(route("currency.listShortCode"));_.value=v}catch(v){y.value=v}},j=v=>{var r;const t=(r=v.target.selectedOptions[0])==null?void 0:r.getAttribute("data-attr-currency-id");l.currency=t},H=async()=>{try{const{data:v}=await axios.get(route("paymentCategory.listChoice"));p.value=v}catch(v){y.value=v}},J=async()=>{try{const{data:v}=await axios.get(route("paymentReceiver.listNameAndId"));g.value=v}catch(v){y.value=v}};return X(()=>{q(),H(),J()}),(v,t)=>(c(),m("section",Ee,[s(I,{onClick:f},{default:k(()=>t[10]||(t[10]=[U("Create Claim")])),_:1}),s(pe,{show:n.value,onClose:b},{default:k(()=>[e("form",{onSubmit:Z(T,["prevent"]),class:"p-6"},[u.value?(c(),m("div",ze,[s(me,{class:"mt-32 mb-32"})])):(c(),m("div",Ge,[t[17]||(t[17]=e("h2",{class:"text-lg font-medium text-gray-900"},"Create a New Claim",-1)),e("div",Re,[e("div",null,[s(S,{for:"payment_to",value:"Payment To"}),h(e("select",{id:"payment_to","onUpdate:modelValue":t[0]||(t[0]=r=>a(l).payment_to=r),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:"",onChange:j},[t[11]||(t[11]=e("option",{value:"",disabled:"",selected:""},"Please select Payment Category",-1)),(c(!0),m($,null,A(g.value,r=>(c(),m("option",{key:r.id,value:r.id,class:"capitalize","data-attr-currency-id":r.currency_id},x(r.name),9,Fe))),128))],544),[[V,a(l).payment_to]]),s(w,{message:a(l).errors.payment_to,class:"mt-2"},null,8,["message"])]),e("div",null,[s(S,{for:"payment_type",value:"Payment Type"}),h(e("select",{id:"payment_type","onUpdate:modelValue":t[1]||(t[1]=r=>a(l).payment_type=r),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},t[12]||(t[12]=[e("option",{value:"",disabled:"",selected:""},"Please select Payment Type",-1),e("option",{value:"reimbursement"},"Reimbursement",-1),e("option",{value:"external_payment"},"External Payment",-1)]),512),[[V,a(l).payment_type]]),s(w,{message:a(l).errors.payment_type,class:"mt-2"},null,8,["message"])]),e("div",null,[s(S,{for:"payment_category",value:"Payment Category"}),h(e("select",{id:"currency","onUpdate:modelValue":t[2]||(t[2]=r=>a(l).payment_category=r),class:"mt-1 payment_category w-full border-gray-300 rounded-md shadow-sm",required:""},[t[13]||(t[13]=e("option",{value:"",disabled:"",selected:""},"Please select Payment Category",-1)),(c(!0),m($,null,A(p.value,(r,P)=>(c(),m("option",{key:P,value:P,class:"capitalize"},x(r),9,Ke))),128))],512),[[V,a(l).payment_category]]),s(w,{message:a(l).errors.payment_category,class:"mt-2"},null,8,["message"])]),e("div",null,[s(S,{for:"currency",value:"Currency"}),h(e("select",{id:"currency","onUpdate:modelValue":t[3]||(t[3]=r=>a(l).currency=r),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},[t[14]||(t[14]=e("option",{value:"",disabled:"",selected:""},"Please select Currency",-1)),(c(!0),m($,null,A(_.value,(r,P)=>(c(),m("option",{key:P,value:P},x(r),9,Ye))),128))],512),[[V,a(l).currency]]),s(w,{message:a(l).errors.currency,class:"mt-2"},null,8,["message"])]),e("div",null,[s(S,{for:"amount",value:"Amount (incl. GST if any)"}),s(z,{id:"amount",modelValue:a(l).amount,"onUpdate:modelValue":t[4]||(t[4]=r=>a(l).amount=r),type:"number",step:"0.01",placeholder:"Enter amount",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),s(w,{message:a(l).errors.amount,class:"mt-2"},null,8,["message"])]),e("div",null,[e("div",He,[s(S,{value:"GST"}),e("div",Je,[e("label",Qe,[h(e("input",{type:"radio","onUpdate:modelValue":t[5]||(t[5]=r=>a(l).gst=r),value:"1",class:"form-radio"},null,512),[[E,a(l).gst]]),t[15]||(t[15]=e("span",{class:"ml-2"},"Yes",-1))]),e("label",We,[h(e("input",{type:"radio","onUpdate:modelValue":t[6]||(t[6]=r=>a(l).gst=r),value:"0",class:"form-radio"},null,512),[[E,a(l).gst]]),t[16]||(t[16]=e("span",{class:"ml-2"},"No",-1))])]),s(w,{message:a(l).errors.gst,class:"mt-2"},null,8,["message"])])]),e("div",null,[e("div",Xe,[s(S,{for:"purpose",value:"Purpose of Payment"}),h(e("textarea",{id:"purpose","onUpdate:modelValue":t[7]||(t[7]=r=>a(l).purpose=r),rows:"4",placeholder:"Enter purpose of payment",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},null,512),[[ee,a(l).purpose]]),s(w,{message:a(l).errors.purpose,class:"mt-2"},null,8,["message"])])]),e("div",null,[s(S,{for:"receipt_date",value:"Date of Receipt / Invoice"}),s(z,{id:"receipt_date",modelValue:a(l).receipt_date,"onUpdate:modelValue":t[8]||(t[8]=r=>a(l).receipt_date=r),type:"date",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),s(w,{message:a(l).errors.receipt_date,class:"mt-2"},null,8,["message"])]),e("div",null,[e("div",Ze,[s(S,{for:"receipt",value:"Upload Receipt"}),e("input",{id:"receipt",type:"file",onChange:t[9]||(t[9]=r=>a(l).receipt=r.target.files[0]),accept:".jpeg,.jpg,.pdf,.png",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 cursor-pointer",required:""},null,32),s(w,{message:a(l).errors.receipt,class:"mt-2"},null,8,["message"])])])])])),u.value?L("",!0):(c(),m("div",et,[e("button",{type:"button",onClick:b,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),s(I,{type:"submit",class:B(["ms-3",{"opacity-25":a(l).processing}]),disabled:a(l).processing},{default:k(()=>t[18]||(t[18]=[U(" Submit Claim ")])),_:1},8,["class","disabled"])]))],32)]),_:1},8,["show"])]))}},at={class:"flex justify-between content-center"},st={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mt-3",style:{"padding-top":"20px","padding-bottom":"40px"}},lt={key:0},ot={class:"inline-flex bg-white rounded"},rt=["onClick"],nt={key:0,class:"bg-gray-500 px-2 py-1 ml-3 text-white text-xs notification-circle rounded"},it={class:"w-full"},ct={key:1},dt={__name:"Claim",setup(o){const i=C(2),n=C(0),u=C("allClaims"),d=C([{name:"allClaims",label:"All Claims"},{name:"pendingApproval",label:"Pending Approval"}]),_=y=>u.value===y?"active bg-violet-500 text-white font-bold":"hover:bg-gray-200 text-black bg-white",g=()=>{i.value=Math.floor(Math.random()*100)+1},p=y=>{n.value=y};return(y,l)=>(c(),m($,null,[s(a(te),{title:"Claims"}),s(ae,null,{header:k(()=>[e("div",at,[s(re,{breadcrumbs:[{title:"Claims"}]}),s(tt,{onCreateComplete:g})])]),default:k(()=>[e("div",st,[a(se)().value||a(le)().value?(c(),m("div",lt,[e("div",ot,[(c(!0),m($,null,A(d.value,f=>(c(),m("span",{key:f.name,class:B(["tab-btn p-2 px-5 text-md rounded flex justify-center items-center",_(f.name)]),onClick:b=>u.value=f.name},[U(x(f.label)+" ",1),f.name=="pendingApproval"&&n.value!=0&&n.value!=null?(c(),m("span",nt,x(a(de)(n.value)),1)):L("",!0)],10,rt))),128))]),e("div",it,[h(e("div",null,[s(Me,{createCompleteSignal:i.value,onPendingClaimsCount:p},null,8,["createCompleteSignal"])],512),[[N,u.value==="pendingApproval"]]),h(e("div",null,[s(R,{createCompleteSignal:i.value},null,8,["createCompleteSignal"])],512),[[N,u.value==="allClaims"]])])])):(c(),m("div",ct,[s(R,{createCompleteSignal:i.value},null,8,["createCompleteSignal"])]))])]),_:1})],64))}},St=F(dt,[["__scopeId","data-v-fb3ff075"]]);export{St as default};