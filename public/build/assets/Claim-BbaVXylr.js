import{a,o as d,g as v,b as e,j as k,k as q,u as l,n as B,l as f,h as R,t as x,w as A,P as W,F as P,m as O,c as I,e as U,C as X,p as Z,q as ee,f as te,s as F,x as M,y as se,d as ae}from"./app-Ccn2jf6i.js";import{_ as le,g as oe,i as re}from"./AuthenticatedLayout-BMg2-UwZ.js";import{I as ne,_ as ie}from"./BreadcrumbComponent-JNEqzYIe.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{f as ce,a as de,b as ue,S as T,L as me,c as pe}from"./sweetalert2.esm.all-bGDZ_3QO.js";import{_ as ve}from"./StatusLabel-kjGoAq2N.js";import{_ as K}from"./ListComponent-r8GEmG-d.js";import{P as N}from"./PrimaryButton-CG5eb43m.js";import{_ as w}from"./InputError-CNYqwPEg.js";import{_ as S,a as D}from"./TextInput-vE6kFgiu.js";import{_ as ye}from"./Modal-Y0xct5CO.js";import{C as fe}from"./CustomSelectComponent-ahjNonIs.js";import"./ApplicationLogo-M_mRncSF.js";var ge={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};function E(o){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?Object(arguments[i]):{},u=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),u.forEach(function(c){_e(o,c,r[c])})}return o}function _e(o,i,r){return i in o?Object.defineProperty(o,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[i]=r,o}var L=function(i,r){var u=E({},i,r.attrs);return a(ne,E({},u,{icon:ge}),null)};L.displayName="CheckOutlined";L.inheritAttrs=!1;const Ce={},xe={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"};function be(o,i){return d(),v("svg",xe,i[0]||(i[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"},null,-1)]))}const he=z(Ce,[["render",be]]),we={__name:"SquareBtn",props:{isSelected:{type:Boolean,default:!1}},emits:["update-selected"],setup(o,{emit:i}){const r=o,u=i,c=()=>{u("update-selected",!r.isSelected)};return(g,y)=>(d(),v("div",{class:B(["square-btn border-4 flex justify-center items-center",{"selected bg-violet-400 border-violet-400":o.isSelected,"border-gray-400":!o.isSelected}]),onClick:c},[k(a(l(L),{class:"font-extrabold text-white"},null,512),[[q,o.isSelected]])],2))}},Se={class:"flex"},ke={key:0,class:"flex justify-center items-center"},Ae={class:"flex-1"},$e={class:"grid lg:grid-cols-7 grid-cols-2 gap-x-4 gap-y-4"},Pe={class:"col"},Te={class:""},Oe={class:"col"},Ue={class:""},Be={class:"col"},Ve={class:"capitalize"},je={class:"col"},Fe={class:"whitespace-nowrap overflow-hidden text-ellipsis"},qe={class:"col"},Ie={class:"truncate"},Ne={class:"col"},Re={class:"col"},Le={class:""},Me={class:"flex justify-center items-center"},De={class:"cursor-pointer hover:text-violet-600 transition-all"},Y={__name:"ClaimsListTemplate",props:{data:{type:Object,required:!0},showGroupActions:{type:Boolean,required:!1}},setup(o,{emit:i}){const r=i,u=o,c=f(!1),g=y=>{c.value=y,r("update-selected-list",{isSelected:y,id:u.data.id})};return(y,p)=>{var _;return d(),v("div",{class:B(["w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500",{"bg-violet-50 border-violet-900":c.value}])},[e("div",Se,[o.showGroupActions?(d(),v("div",ke,[a(we,{onUpdateSelected:g,isSelected:c.value,class:"block mr-5"},null,8,["isSelected"])])):R("",!0),e("div",Ae,[e("div",$e,[e("div",Pe,[p[0]||(p[0]=e("div",{class:"mb-1 text-xs text-gray-500"},"ID",-1)),e("div",Te,x(o.data.id),1)]),e("div",Oe,[p[1]||(p[1]=e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Type",-1)),e("div",Ue,x(l(ce)(o.data.payment_type)),1)]),e("div",Be,[p[2]||(p[2]=e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Category",-1)),e("div",Ve,x(o.data.payment_category_name),1)]),e("div",je,[p[3]||(p[3]=e("div",{class:"mb-1 text-xs text-gray-500"},"Total Amount",-1)),e("div",Fe,x(o.data.currency)+" "+x(l(de)(o.data.amount)),1)]),e("div",qe,[p[4]||(p[4]=e("div",{class:"mb-1 text-xs text-gray-500"},"Created By",-1)),e("div",Ie,x((_=o.data.created_user)==null?void 0:_.name),1)]),e("div",Ne,[p[5]||(p[5]=e("div",{class:"mb-1 text-xs text-gray-500"},"Status",-1)),a(ve,{class:"overide-fs-11 inline-block w-[140px] rounded-xl",status:o.data.status},null,8,["status"])]),e("div",Re,[p[6]||(p[6]=e("div",{class:"mb-1 text-xs text-gray-500"},"Created At",-1)),e("div",Le,x(l(ue)(o.data.created_at)),1)])])]),e("div",Me,[e("button",De,[a(l(W),{href:y.route("claim.details",o.data.id)},{default:A(()=>[a(he,{class:"text-violet-700"})]),_:1},8,["href"])])])])],2)}}},G={__name:"AllClaim",props:{createCompleteSignal:{type:Number,default:!1},sortAndFilters:{type:Array,required:!1}},setup(o,{emit:i}){const r=f([]),u=({isSelected:c,id:g})=>{r.value=c?[...new Set([...r.value,g])]:r.value.filter(y=>y!==g)};return(c,g)=>(d(),v("div",null,[a(K,{apiUrl:c.route("claims.list"),createCompleteSignal:o.createCompleteSignal,sortAndFilters:o.sortAndFilters,allowSorting:!0},{"list-view":A(({data:y,apiResponse:p})=>[(d(!0),v(P,null,O(y,_=>(d(),I(Y,{createComplete:o.createCompleteSignal,onUpdateSelectedList:u,key:_.id,data:_},null,8,["createComplete","data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal","sortAndFilters"])]))}},Ee={__name:"PendingClaim",props:{createCompleteSignal:{type:Number,default:!1},sortAndFilters:{type:Array,required:!1}},setup(o,{emit:i}){const r=i,u=t=>{r("pendingClaimsCount",t)},c=f([]),g=f(1),y=({isSelected:t,id:C})=>{c.value=t?[...new Set([...c.value,C])]:c.value.filter($=>$!==C)},p=()=>{T.fire({title:"Are you sure?",text:"Are you sure you want to approve these Claims?",icon:"question",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",allowOutsideClick:!1,stopKeydownPropagation:!0,preConfirm:()=>new Promise((t,C)=>{b()})})},_=()=>{g.value++,c.value=[]},b=async()=>{try{const t=await axios.post(route("claims.groupApprove",c.value.toString()));_(),T.fire({title:"Success!",text:"The claim has been successfully approved.",icon:"success",confirmButtonText:"OK"})}catch(t){T.fire({title:"Error!",text:t.response?t.response.data.error||"There was an error while approving the claim. Please try again.":"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}};return(t,C)=>(d(),v("div",null,[a(N,{class:B(["mt-5 mb-3",{invisible:!c.value.length}]),onClick:p},{default:A(()=>C[0]||(C[0]=[U("Approve Selected Claim")])),_:1},8,["class"]),(d(),I(K,{apiUrl:t.route("claims.listPendingApproval"),createCompleteSignal:o.createCompleteSignal,key:g.value,allowSorting:!0,sortAndFilters:o.sortAndFilters,hasPaddingTop:!1},{"list-view":A(({data:$,apiResponse:j})=>[U(x(u(j.total))+" ",1),(d(!0),v(P,null,O($,V=>(d(),I(Y,{showGroupActions:!0,createComplete:o.createCompleteSignal,onUpdateSelectedList:y,key:V.id,data:V},null,8,["createComplete","data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal","sortAndFilters"]))]))}},Ge={class:"space-y-6"},ze={key:0},Ke={key:1},Ye={class:"grid grid-cols-1 gap-4 mt-4"},He=["value"],Je=["value"],Qe={class:"col-span-2"},We={class:"flex items-center space-x-4 mt-1"},Xe={class:"inline-flex items-center"},Ze={class:"inline-flex items-center"},et={class:"col-span-2"},tt={class:"col-span-2"},st={key:2,class:"text-right mt-6"},at={__name:"CreateClaimForm",setup(o,{emit:i}){const r=f(!1),u=f(!1),c=i,g=f([]),y=f([]),p=f([]),_=f(""),b=f(null),t=X({payment_to:"",payment_type:"",payment_category:"",currency:"",amount:"",gst:"",purpose:"",receipt_date:"",receipt:null}),C=()=>{r.value=!0},$=()=>{r.value=!1},j=async()=>{u.value=!0;try{const m=new FormData;m.append("receipt",t.receipt);for(const[n,h]of Object.entries(t.data()))m.append(n,h);const s=await axios.post(route("claims.store"),m,{headers:{"Content-Type":"multipart/form-data"}});T.fire({title:"Success!",text:s.data.success,icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"w-32"}}),$(),t.reset(),c("createComplete",!0),u.value=!1}catch(m){m.response&&m.response.data.errors?t.errors=m.response.data.errors:T.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"}),u.value=!1}},V=async()=>{try{const{data:m}=await axios.get(route("currency.listShortCode"));g.value=m}catch(m){b.value=m}},H=async()=>{try{const{data:m}=await axios.get(route("paymentCategory.listChoice"));p.value=m}catch(m){b.value=m}},J=async()=>{try{const{data:m}=await axios.get(route("paymentReceiver.listNameAndId"));y.value=m}catch(m){b.value=m}};return Z(()=>_.value,(m,s)=>{if(console.log(`payment_to changed from ${s} to ${m}`),t&&"payment_to"in t){t.payment_to=m.toString();const n=y.value.find(Q=>Q.id===parseInt(m)),h=n?n.currency_id:null;t.currency=h}},{immediate:!0}),ee(()=>{V(),H(),J()}),(m,s)=>(d(),v("section",Ge,[a(N,{onClick:C},{default:A(()=>s[10]||(s[10]=[U("Create Claim")])),_:1}),a(ye,{show:r.value,onClose:$},{default:A(()=>[e("form",{onSubmit:te(j,["prevent"]),class:"p-6"},[u.value?(d(),v("div",ze,[a(me,{class:"mt-32 mb-32"})])):(d(),v("div",Ke,[s[16]||(s[16]=e("h2",{class:"text-lg font-medium text-gray-900"},"Create a New Claim",-1)),e("div",Ye,[e("div",null,[a(S,{for:"payment_to",value:"Payment To"}),a(fe,{choices:y.value,modelValue:_.value,"onUpdate:modelValue":s[0]||(s[0]=n=>_.value=n),label:"Payment Receiver",choicesIsObject:!0},null,8,["choices","modelValue"]),a(w,{message:l(t).errors.payment_to,class:"mt-2"},null,8,["message"])]),e("div",null,[a(S,{for:"payment_type",value:"Payment Type"}),k(e("select",{id:"payment_type","onUpdate:modelValue":s[1]||(s[1]=n=>l(t).payment_type=n),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},s[11]||(s[11]=[e("option",{value:"",disabled:"",selected:""},"Please select Payment Type",-1),e("option",{value:"reimbursement"},"Reimbursement",-1),e("option",{value:"external_payment"},"External Payment",-1)]),512),[[F,l(t).payment_type]]),a(w,{message:l(t).errors.payment_type,class:"mt-2"},null,8,["message"])]),e("div",null,[a(S,{for:"payment_category",value:"Payment Category"}),k(e("select",{id:"currency","onUpdate:modelValue":s[2]||(s[2]=n=>l(t).payment_category=n),class:"mt-1 payment_category w-full border-gray-300 rounded-md shadow-sm",required:""},[s[12]||(s[12]=e("option",{value:"",disabled:"",selected:""},"Please select Payment Category",-1)),(d(!0),v(P,null,O(p.value,(n,h)=>(d(),v("option",{key:h,value:h,class:"capitalize"},x(n),9,He))),128))],512),[[F,l(t).payment_category]]),a(w,{message:l(t).errors.payment_category,class:"mt-2"},null,8,["message"])]),e("div",null,[a(S,{for:"currency",value:"Currency"}),k(e("select",{id:"currency","onUpdate:modelValue":s[3]||(s[3]=n=>l(t).currency=n),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},[s[13]||(s[13]=e("option",{value:"",disabled:"",selected:""},"Please select Currency",-1)),(d(!0),v(P,null,O(g.value,(n,h)=>(d(),v("option",{key:h,value:h},x(n),9,Je))),128))],512),[[F,l(t).currency]]),a(w,{message:l(t).errors.currency,class:"mt-2"},null,8,["message"])]),e("div",null,[a(S,{for:"amount",value:"Amount (incl. GST if any)"}),a(D,{id:"amount",modelValue:l(t).amount,"onUpdate:modelValue":s[4]||(s[4]=n=>l(t).amount=n),type:"number",step:"0.01",placeholder:"Enter amount",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(w,{message:l(t).errors.amount,class:"mt-2"},null,8,["message"])]),e("div",null,[e("div",Qe,[a(S,{value:"GST"}),e("div",We,[e("label",Xe,[k(e("input",{type:"radio","onUpdate:modelValue":s[5]||(s[5]=n=>l(t).gst=n),value:"1",class:"form-radio"},null,512),[[M,l(t).gst]]),s[14]||(s[14]=e("span",{class:"ml-2"},"Yes",-1))]),e("label",Ze,[k(e("input",{type:"radio","onUpdate:modelValue":s[6]||(s[6]=n=>l(t).gst=n),value:"0",class:"form-radio"},null,512),[[M,l(t).gst]]),s[15]||(s[15]=e("span",{class:"ml-2"},"No",-1))])]),a(w,{message:l(t).errors.gst,class:"mt-2"},null,8,["message"])])]),e("div",null,[e("div",et,[a(S,{for:"purpose",value:"Purpose of Payment"}),k(e("textarea",{id:"purpose","onUpdate:modelValue":s[7]||(s[7]=n=>l(t).purpose=n),rows:"4",placeholder:"Enter purpose of payment",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},null,512),[[se,l(t).purpose]]),a(w,{message:l(t).errors.purpose,class:"mt-2"},null,8,["message"])])]),e("div",null,[a(S,{for:"receipt_date",value:"Date of Receipt / Invoice"}),a(D,{id:"receipt_date",modelValue:l(t).receipt_date,"onUpdate:modelValue":s[8]||(s[8]=n=>l(t).receipt_date=n),type:"date",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(w,{message:l(t).errors.receipt_date,class:"mt-2"},null,8,["message"])]),e("div",null,[e("div",tt,[a(S,{for:"receipt",value:"Upload Receipt"}),e("input",{id:"receipt",type:"file",onChange:s[9]||(s[9]=n=>l(t).receipt=n.target.files[0]),accept:".jpeg,.jpg,.pdf,.png",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 cursor-pointer",required:""},null,32),a(w,{message:l(t).errors.receipt,class:"mt-2"},null,8,["message"])])])])])),u.value?R("",!0):(d(),v("div",st,[e("button",{type:"button",onClick:$,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),a(N,{type:"submit",class:B(["ms-3",{"opacity-25":l(t).processing}]),disabled:l(t).processing},{default:A(()=>s[17]||(s[17]=[U(" Submit Claim ")])),_:1},8,["class","disabled"])]))],32)]),_:1},8,["show"])]))}},lt={class:"flex justify-between content-center"},ot={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mt-3",style:{"padding-top":"20px","padding-bottom":"40px"}},rt={key:0},nt={class:"inline-flex bg-white rounded"},it=["onClick"],ct={key:0,class:"bg-gray-500 px-2 py-1 ml-3 text-white text-xs notification-circle rounded"},dt={class:"w-full"},ut={key:1},mt={__name:"Claim",setup(o){const i=f(2),r=f(0),u=f("allClaims"),c=f([{name:"allClaims",label:"All Claims"},{name:"pendingApproval",label:"Pending Approval"}]),g=b=>u.value===b?"active bg-violet-500 text-white font-bold":"hover:bg-gray-200 text-black bg-white",y=()=>{i.value=Math.floor(Math.random()*100)+1},p=b=>{r.value=b},_=f([{display_name:"Claim ID",field_name:"id",field_type:"string"},{field_name:"payment_type",field_type:"select",options:{reimbursement:"Reimbursement",external_payment:"External Payment"}},{display_name:"Payment Category",field_name:"payment_category_id",field_type:"select",api:route("paymentCategory.listChoice")},{display_name:"Currency",field_name:"currency_id",field_type:"select",api:route("currency.listShortCode")},{field_name:"status",field_type:"select",api:route("approvalStatus.list")}]);return(b,t)=>(d(),v(P,null,[a(l(ae),{title:"Claims"}),a(le,null,{header:A(()=>[e("div",lt,[a(ie,{breadcrumbs:[{title:"Claims"}]}),a(at,{onCreateComplete:y})])]),default:A(()=>[e("div",ot,[l(oe)().value||l(re)().value?(d(),v("div",rt,[e("div",nt,[(d(!0),v(P,null,O(c.value,C=>(d(),v("span",{key:C.name,class:B(["tab-btn p-2 px-5 text-md rounded flex justify-center items-center",g(C.name)]),onClick:$=>u.value=C.name},[U(x(C.label)+" ",1),C.name=="pendingApproval"&&r.value!=0&&r.value!=null?(d(),v("span",ct,x(l(pe)(r.value)),1)):R("",!0)],10,it))),128))]),e("div",dt,[k(e("div",null,[a(Ee,{createCompleteSignal:i.value,onPendingClaimsCount:p},null,8,["createCompleteSignal"])],512),[[q,u.value==="pendingApproval"]]),k(e("div",null,[a(G,{createCompleteSignal:i.value,sortAndFilters:_.value},null,8,["createCompleteSignal","sortAndFilters"])],512),[[q,u.value==="allClaims"]])])])):(d(),v("div",ut,[a(G,{createCompleteSignal:i.value,sortAndFilters:_.value},null,8,["createCompleteSignal","sortAndFilters"])]))])]),_:1})],64))}},At=z(mt,[["__scopeId","data-v-4e71205e"]]);export{At as default};