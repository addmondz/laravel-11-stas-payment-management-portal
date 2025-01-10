import{a,o as c,g as p,b as e,j as S,k as I,u as o,n as F,h as q,t as f,w as O,P as Z,l as _,F as T,m as j,c as M,e as V,C as ee,p as te,q as se,f as ae,s as D,x as E,y as le,d as oe}from"./app-CURcQ8zS.js";import{_ as ne,g as re,i as ie}from"./AuthenticatedLayout-2n838A0E.js";import{I as de,_ as ce}from"./BreadcrumbComponent-WoJfor_D.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{f as ue,a as Y,b as me,S as B,c as pe}from"./sweetalert2.esm.all-MrQZAUHb.js";import{_ as ve}from"./StatusLabel-V4Ue9oTH.js";import{_ as H}from"./ListComponent-CGRwUR_k.js";import{P as L}from"./PrimaryButton-BChGZyQ-.js";import{_ as P}from"./InputError-C-9fhUwI.js";import{_ as $,a as G}from"./TextInput-QjUUnHz2.js";import{M as ye}from"./Modal-CfJs9cqa.js";import{L as fe}from"./LoadingComponent-B849Irwk.js";import{C as ge}from"./CustomSelectComponent-DDEiwoTE.js";import"./ApplicationLogo-M_mRncSF.js";import"./DateRangeComponent-Tws0QoUu.js";var _e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};function z(l){for(var u=1;u<arguments.length;u++){var i=arguments[u]!=null?Object(arguments[u]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(y){return Object.getOwnPropertyDescriptor(i,y).enumerable}))),n.forEach(function(y){xe(l,y,i[y])})}return l}function xe(l,u,i){return u in l?Object.defineProperty(l,u,{value:i,enumerable:!0,configurable:!0,writable:!0}):l[u]=i,l}var R=function(u,i){var n=z({},u,i.attrs);return a(de,z({},n,{icon:_e}),null)};R.displayName="CheckOutlined";R.inheritAttrs=!1;const Ce={},be={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"};function he(l,u){return c(),p("svg",be,u[0]||(u[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"},null,-1)]))}const we=J(Ce,[["render",he]]),Q={__name:"SquareBtn",props:{isSelected:{type:Boolean,default:!1}},emits:["update-selected"],setup(l,{emit:u}){const i=l,n=u,y=()=>{n("update-selected",!i.isSelected)};return(v,r)=>(c(),p("div",{class:F(["square-btn border-4 flex justify-center items-center",{"selected bg-violet-400 border-violet-400":l.isSelected,"border-gray-400":!l.isSelected}]),onClick:y},[S(a(o(R),{class:"font-extrabold text-white"},null,512),[[I,l.isSelected]])],2))}},Se={class:"flex"},ke={key:0,class:"flex justify-center items-center"},Ae={class:"flex-1"},Pe={class:"grid lg:grid-cols-7 grid-cols-2 gap-x-4 gap-y-4"},$e={class:"col"},Oe={class:""},Te={class:"col"},Ue={class:""},je={class:"col"},Be={class:"capitalize"},Ve={class:"col"},Fe={class:"whitespace-nowrap overflow-hidden text-ellipsis"},Ie={class:"col"},qe={class:"truncate"},Ne={class:"col"},De={class:"col"},Me={class:""},Le={class:"flex justify-center items-center"},Re={class:"cursor-pointer hover:text-violet-600 transition-all"},W={__name:"ClaimsListTemplate",props:{data:{type:Object,required:!0},showGroupActions:{type:Boolean,required:!1},isSelected:{type:Boolean,required:!1,default:!1}},emits:["update-selected-list"],setup(l,{emit:u}){const i=u,n=l,y=v=>{i("update-selected-list",{isSelected:v,id:n.data.id})};return(v,r)=>{var h;return c(),p("div",{class:F(["w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500",{"bg-violet-50 border-violet-900":l.isSelected}])},[e("div",Se,[l.showGroupActions?(c(),p("div",ke,[a(Q,{onUpdateSelected:y,isSelected:l.isSelected,class:"block mr-5"},null,8,["isSelected"])])):q("",!0),e("div",Ae,[e("div",Pe,[e("div",$e,[r[0]||(r[0]=e("div",{class:"mb-1 text-xs text-gray-500"},"ID",-1)),e("div",Oe,f(l.data.id),1)]),e("div",Te,[r[1]||(r[1]=e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Type",-1)),e("div",Ue,f(o(ue)(l.data.payment_type)),1)]),e("div",je,[r[2]||(r[2]=e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Category",-1)),e("div",Be,f(l.data.payment_category_name),1)]),e("div",Ve,[r[3]||(r[3]=e("div",{class:"mb-1 text-xs text-gray-500"},"Total Amount",-1)),e("div",Fe,f(l.data.currency)+" "+f(o(Y)(l.data.amount)),1)]),e("div",Ie,[r[4]||(r[4]=e("div",{class:"mb-1 text-xs text-gray-500"},"Created By",-1)),e("div",qe,f((h=l.data.created_user)==null?void 0:h.name),1)]),e("div",Ne,[r[5]||(r[5]=e("div",{class:"mb-1 text-xs text-gray-500"},"Status",-1)),a(ve,{class:"overide-fs-11 inline-block w-[140px] rounded-xl",status:l.data.status},null,8,["status"])]),e("div",De,[r[6]||(r[6]=e("div",{class:"mb-1 text-xs text-gray-500"},"Created At",-1)),e("div",Me,f(o(me)(l.data.created_at)),1)])])]),e("div",Le,[e("button",Re,[a(o(Z),{href:v.route("claim.details",l.data.id)},{default:O(()=>[a(we,{class:"text-violet-700"})]),_:1},8,["href"])])])])],2)}}},Ee={key:0,class:"bg-white p-5 rounded-xl"},Ge={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"},ze={class:"mb-2"},Ke={class:"flex justify-between"},Je={class:"font-bold"},K={__name:"AllClaim",props:{createCompleteSignal:{type:Number,default:!1},sortAndFilters:{type:Array,required:!1}},setup(l,{emit:u}){const i=_([]),n=({isSelected:y,id:v})=>{i.value=y?[...new Set([...i.value,v])]:i.value.filter(r=>r!==v)};return(y,v)=>(c(),p("div",null,[a(H,{apiUrl:y.route("claims.list"),createCompleteSignal:l.createCompleteSignal,sortAndFilters:l.sortAndFilters,allowSorting:!0},{"list-view":O(({data:r,apiResponse:h,fullApiResponse:b})=>[Object.keys(b.sum).length?(c(),p("div",Ee,[v[1]||(v[1]=e("h2",{class:"mb-4"},"Total Amount",-1)),e("div",Ge,[(c(!0),p(T,null,j(b.sum,(g,s)=>(c(),p("div",{key:s,class:"bg-gray-100 p-6 rounded-xl shadow-md transition-all duration-500 border"},[e("p",ze,f(g.country_name)+" ("+f(s)+")",1),e("div",Ke,[v[0]||(v[0]=e("span",null,"Amount:",-1)),e("span",null,[e("span",Je,f(g.currency)+" "+f(o(Y)(g.amount)),1)])])]))),128))])])):q("",!0),(c(!0),p(T,null,j(r,g=>(c(),M(W,{createComplete:l.createCompleteSignal,onUpdateSelectedList:n,key:g.id,data:g},null,8,["createComplete","data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal","sortAndFilters"])]))}},Ye={class:"flex items-center w-full order-last lg:order-none max-lg:mx-auto p-5 rounded-xl overflow-hidden transition-all duration-500"},He={__name:"PendingClaim",props:{createCompleteSignal:{type:Number,default:!1},sortAndFilters:{type:Array,required:!1}},emits:["pendingClaimsCount"],setup(l,{emit:u}){const i=u,n=_([]),y=_(1),v=_(!1),r=_([]),h=x=>{i("pendingClaimsCount",x)},b=({isSelected:x,id:C})=>{x?n.value=[...new Set([...n.value,C])]:n.value=n.value.filter(t=>t!==C);const w=[...n.value].sort(),m=[...r.value].sort();v.value=JSON.stringify(w)===JSON.stringify(m)},g=x=>{v.value=!v.value,v.value?n.value=[...new Set([...n.value,...r.value])]:n.value=[]},s=x=>{r.value=x.map(C=>C.id)},k=()=>{B.fire({title:"Are you sure?",text:"Are you sure you want to approve these Claims?",icon:"question",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",allowOutsideClick:!1,stopKeydownPropagation:!0,preConfirm:()=>new Promise((x,C)=>{N()})})},U=()=>{y.value++,n.value=[],v.value=!1},N=async()=>{var x,C;try{const w=await axios.post(route("claims.groupApprove",n.value.toString()));U(),B.fire({title:"Success!",text:"The claim has been successfully approved.",icon:"success",confirmButtonText:"OK"})}catch(w){B.fire({title:"Error!",text:((C=(x=w.response)==null?void 0:x.data)==null?void 0:C.error)||"An unexpected error occurred while approving the claim.",icon:"error",confirmButtonText:"OK"})}};return(x,C)=>(c(),p("div",null,[e("div",Ye,[S(a(Q,{onClick:C[0]||(C[0]=w=>g(x.data)),isSelected:v.value,class:"block mr-5"},null,8,["isSelected"]),[[I,r.value.length]]),a(L,{class:F(["select-none",{invisible:!n.value.length}]),onClick:k},{default:O(()=>[V(" Approve "+f(n.value.length)+" Payment(s) ",1)]),_:1},8,["class"])]),(c(),M(H,{apiUrl:x.route("claims.listPendingApproval"),createCompleteSignal:l.createCompleteSignal,key:y.value,allowSorting:!0,sortAndFilters:l.sortAndFilters,hasPaddingTop:!1},{"list-view":O(({data:w,apiResponse:m})=>[V(f(h(m.total))+" "+f(s(w))+" ",1),(c(!0),p(T,null,j(w,t=>(c(),M(W,{key:t.id,showGroupActions:!0,createComplete:l.createCompleteSignal,data:t,isSelected:n.value.includes(t.id),onUpdateSelectedList:b},null,8,["createComplete","data","isSelected"]))),128))]),_:1},8,["apiUrl","createCompleteSignal","sortAndFilters"]))]))}},Qe={class:"space-y-6"},We={key:0},Xe={key:1},Ze={class:"grid grid-cols-1 gap-4 mt-4"},et=["value"],tt=["value"],st={class:"col-span-2"},at={class:"flex items-center space-x-4 mt-1"},lt={class:"inline-flex items-center"},ot={class:"inline-flex items-center"},nt={class:"col-span-2"},rt={class:"col-span-2"},it={key:2,class:"text-right mt-6"},dt={__name:"CreateClaimForm",setup(l,{emit:u}){const i=_(!1),n=_(!1),y=u,v=_([]),r=_([]),h=_([]),b=_(""),g=_(null),s=ee({payment_to:"",payment_type:"",payment_category:"",currency:"",amount:"",gst:"",purpose:"",receipt_date:"",receipt:null}),k=()=>{i.value=!0},U=()=>{i.value=!1},N=async()=>{n.value=!0;try{const m=new FormData;m.append("receipt",s.receipt);for(const[d,A]of Object.entries(s.data()))m.append(d,A);const t=await axios.post(route("claims.store"),m,{headers:{"Content-Type":"multipart/form-data"}});B.fire({title:"Success!",text:t.data.success,icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"w-32"}}),U(),s.reset(),y("createComplete",!0),n.value=!1}catch(m){m.response&&m.response.data.errors?s.errors=m.response.data.errors:B.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"}),n.value=!1}},x=async()=>{try{const{data:m}=await axios.get(route("currency.listShortCode"));v.value=m}catch(m){g.value=m}},C=async()=>{try{const{data:m}=await axios.get(route("paymentCategory.listChoice"));h.value=m}catch(m){g.value=m}},w=async()=>{try{const{data:m}=await axios.get(route("paymentReceiver.listNameAndId"));r.value=m}catch(m){g.value=m}};return te(()=>b.value,(m,t)=>{if(s&&"payment_to"in s){s.payment_to=m.toString();const d=r.value.find(X=>X.id===parseInt(m)),A=d?d.currency_id:null;s.currency=A}},{immediate:!0}),se(()=>{x(),C(),w()}),(m,t)=>(c(),p("section",Qe,[a(L,{onClick:k},{default:O(()=>t[10]||(t[10]=[V("Create Payment")])),_:1}),a(ye,{show:i.value,onClose:U},{default:O(()=>[e("form",{onSubmit:ae(N,["prevent"]),class:"p-5"},[n.value?(c(),p("div",We,[a(fe,{class:"mt-32 mb-32"})])):(c(),p("div",Xe,[t[16]||(t[16]=e("h2",{class:"text-lg font-medium text-gray-900"},"Create a New Payment",-1)),e("div",Ze,[e("div",null,[a($,{for:"payment_to",value:"Payment To"}),a(ge,{choices:r.value,modelValue:b.value,"onUpdate:modelValue":t[0]||(t[0]=d=>b.value=d),label:"Payment Receiver",choicesIsObject:!0},null,8,["choices","modelValue"]),a(P,{message:o(s).errors.payment_to,class:"mt-2"},null,8,["message"])]),e("div",null,[a($,{for:"payment_type",value:"Payment Type"}),S(e("select",{id:"payment_type","onUpdate:modelValue":t[1]||(t[1]=d=>o(s).payment_type=d),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},t[11]||(t[11]=[e("option",{value:"",disabled:"",selected:""},"Please select Payment Type",-1),e("option",{value:"reimbursement"},"Reimbursement",-1),e("option",{value:"external_payment"},"External Payment",-1)]),512),[[D,o(s).payment_type]]),a(P,{message:o(s).errors.payment_type,class:"mt-2"},null,8,["message"])]),e("div",null,[a($,{for:"payment_category",value:"Payment Category"}),S(e("select",{id:"currency","onUpdate:modelValue":t[2]||(t[2]=d=>o(s).payment_category=d),class:"mt-1 payment_category w-full border-gray-300 rounded-md shadow-sm",required:""},[t[12]||(t[12]=e("option",{value:"",disabled:"",selected:""},"Please select Payment Category",-1)),(c(!0),p(T,null,j(h.value,(d,A)=>(c(),p("option",{key:A,value:A,class:"capitalize"},f(d),9,et))),128))],512),[[D,o(s).payment_category]]),a(P,{message:o(s).errors.payment_category,class:"mt-2"},null,8,["message"])]),e("div",null,[a($,{for:"currency",value:"Currency"}),S(e("select",{id:"currency","onUpdate:modelValue":t[3]||(t[3]=d=>o(s).currency=d),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},[t[13]||(t[13]=e("option",{value:"",disabled:"",selected:""},"Please select Currency",-1)),(c(!0),p(T,null,j(v.value,(d,A)=>(c(),p("option",{key:A,value:A},f(d),9,tt))),128))],512),[[D,o(s).currency]]),a(P,{message:o(s).errors.currency,class:"mt-2"},null,8,["message"])]),e("div",null,[a($,{for:"amount",value:"Amount (incl. GST if any)"}),a(G,{id:"amount",modelValue:o(s).amount,"onUpdate:modelValue":t[4]||(t[4]=d=>o(s).amount=d),type:"number",step:"0.01",placeholder:"Enter amount",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(P,{message:o(s).errors.amount,class:"mt-2"},null,8,["message"])]),e("div",null,[e("div",st,[a($,{value:"GST"}),e("div",at,[e("label",lt,[S(e("input",{type:"radio","onUpdate:modelValue":t[5]||(t[5]=d=>o(s).gst=d),value:"1",class:"form-radio"},null,512),[[E,o(s).gst]]),t[14]||(t[14]=e("span",{class:"ml-2"},"Yes",-1))]),e("label",ot,[S(e("input",{type:"radio","onUpdate:modelValue":t[6]||(t[6]=d=>o(s).gst=d),value:"0",class:"form-radio"},null,512),[[E,o(s).gst]]),t[15]||(t[15]=e("span",{class:"ml-2"},"No",-1))])]),a(P,{message:o(s).errors.gst,class:"mt-2"},null,8,["message"])])]),e("div",null,[e("div",nt,[a($,{for:"purpose",value:"Purpose of Payment"}),S(e("textarea",{id:"purpose","onUpdate:modelValue":t[7]||(t[7]=d=>o(s).purpose=d),rows:"4",placeholder:"Enter purpose of payment",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},null,512),[[le,o(s).purpose]]),a(P,{message:o(s).errors.purpose,class:"mt-2"},null,8,["message"])])]),e("div",null,[a($,{for:"receipt_date",value:"Date of Receipt / Invoice"}),a(G,{id:"receipt_date",modelValue:o(s).receipt_date,"onUpdate:modelValue":t[8]||(t[8]=d=>o(s).receipt_date=d),type:"date",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(P,{message:o(s).errors.receipt_date,class:"mt-2"},null,8,["message"])]),e("div",null,[e("div",rt,[a($,{for:"receipt",value:"Upload Receipt"}),e("input",{id:"receipt",type:"file",onChange:t[9]||(t[9]=d=>o(s).receipt=d.target.files[0]),accept:".jpeg,.jpg,.pdf,.png",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 cursor-pointer",required:""},null,32),a(P,{message:o(s).errors.receipt,class:"mt-2"},null,8,["message"])])])])])),n.value?q("",!0):(c(),p("div",it,[e("button",{type:"button",onClick:U,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),a(L,{type:"submit",class:F(["ms-3",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:O(()=>t[17]||(t[17]=[V(" Submit Payment ")])),_:1},8,["class","disabled"])]))],32)]),_:1},8,["show"])]))}},ct={class:"flex justify-between content-center"},ut={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mt-3",style:{"padding-top":"20px","padding-bottom":"40px"}},mt={key:0},pt={class:"inline-flex bg-white rounded"},vt=["onClick"],yt={key:0,class:"bg-gray-500 px-2 py-1 ml-3 text-white text-xs notification-circle rounded"},ft={class:"w-full"},gt={key:1},_t={__name:"Claim",setup(l){const u=_(2),i=_(0),n=_("allClaims"),y=_([{name:"allClaims",label:"All Payments"},{name:"pendingApproval",label:"Pending Approval"}]),v=g=>n.value===g?"active bg-violet-500 text-white font-bold":"hover:bg-gray-200 text-black bg-white",r=()=>{u.value=Math.floor(Math.random()*100)+1},h=g=>{i.value=g},b=_([{display_name:"Payment ID",field_name:"id",field_type:"string"},{field_name:"payment_type",field_type:"select",options:{reimbursement:"Reimbursement",external_payment:"External Payment"}},{display_name:"Payment Category",field_name:"payment_category_id",field_type:"select",api:route("paymentCategory.listChoice")},{display_name:"Currency",field_name:"currency_id",field_type:"select",api:route("currency.listShortCode")},{display_name:"Created Date",field_name:"created_at",field_type:"date_range"},{field_name:"status",field_type:"select",api:route("approvalStatus.list")}]);return(g,s)=>(c(),p(T,null,[a(o(oe),{title:"Payments"}),a(ne,null,{header:O(()=>[e("div",ct,[a(ce,{breadcrumbs:[{title:"Payments"}]}),a(dt,{onCreateComplete:r})])]),default:O(()=>[e("div",ut,[o(re)().value||o(ie)().value?(c(),p("div",mt,[e("div",pt,[(c(!0),p(T,null,j(y.value,k=>(c(),p("span",{key:k.name,class:F(["tab-btn p-2 px-5 text-md rounded flex justify-center items-center",v(k.name)]),onClick:U=>n.value=k.name},[V(f(k.label)+" ",1),k.name=="pendingApproval"&&i.value!=0&&i.value!=null?(c(),p("span",yt,f(o(pe)(i.value)),1)):q("",!0)],10,vt))),128))]),e("div",ft,[S(e("div",null,[a(He,{createCompleteSignal:u.value,onPendingClaimsCount:h},null,8,["createCompleteSignal"])],512),[[I,n.value==="pendingApproval"]]),S(e("div",null,[a(K,{createCompleteSignal:u.value,sortAndFilters:b.value},null,8,["createCompleteSignal","sortAndFilters"])],512),[[I,n.value==="allClaims"]])])])):(c(),p("div",gt,[a(K,{createCompleteSignal:u.value,sortAndFilters:b.value},null,8,["createCompleteSignal","sortAndFilters"])]))])]),_:1})],64))}},Vt=J(_t,[["__scopeId","data-v-3d82c2b1"]]);export{Vt as default};
