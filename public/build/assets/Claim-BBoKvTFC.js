import{o as n,g as i,b as e,k as u,i as Q,t as g,u as l,a as s,w as P,P as W,l as X,m as O,F as S,p as T,c as G,h as K,n as N,q as Z,C as ee,e as B,f as te,j as w,s as A,x as M,y as ae,d as se,z as F}from"./app-BVB8ZTTQ.js";import{_ as le,g as oe}from"./AuthenticatedLayout-xRjP5lHJ.js";import{_ as re}from"./BreadcrumbComponent-B8bwEMEg.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{f as ne,a as ie,b as de,L as H,N as L,S as z}from"./sweetalert2.esm.all-Bg1kI5m_.js";import{_ as ue}from"./StatusLabel-CihPaT2T.js";import{_ as ce}from"./FilterDropdown-DEbhk78-.js";import{a as R,_ as C,b as h}from"./TextInput-f1QO_B2e.js";import{_ as me}from"./ListComponent-wn5tgF71.js";import{_ as pe}from"./Modal-Byh-Ua0V.js";import{P as I}from"./PrimaryButton-Cs2EhKZw.js";import"./ApplicationLogo-M_mRncSF.js";const ve={},ye={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"};function ge(m,v){return n(),i("svg",ye,v[0]||(v[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"},null,-1)]))}const fe=Y(ve,[["render",ge]]),_e={class:"w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500"},xe={class:"flex"},be={class:"flex-1"},Ce={class:"grid lg:grid-cols-7 grid-cols-2 gap-x-4 gap-y-4"},he={class:"col"},we={class:""},$e={class:"col"},ke={class:""},Pe={class:"col"},Se={class:"capitalize"},Ve={class:"col"},Te={class:"whitespace-nowrap overflow-hidden text-ellipsis"},Ue={class:"col"},Ae={class:"truncate"},Ne={class:"col"},qe={class:"col"},je={class:""},De={class:"flex justify-center items-center"},Re={class:"cursor-pointer hover:text-violet-600 transition-all"},J={__name:"ClaimsListTemplate",props:{data:{type:Object,required:!0}},setup(m){const v=m;return u(!1),Q(()=>v.order.items.reduce((p,r)=>p+r.quantity,0)),(p,r)=>{var y;return n(),i("div",_e,[e("div",xe,[e("div",be,[e("div",Ce,[e("div",he,[r[0]||(r[0]=e("div",{class:"mb-1 text-xs text-gray-500"},"ID",-1)),e("div",we,g(m.data.id),1)]),e("div",$e,[r[1]||(r[1]=e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Type",-1)),e("div",ke,g(l(ne)(m.data.payment_type)),1)]),e("div",Pe,[r[2]||(r[2]=e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Category",-1)),e("div",Se,g(m.data.payment_category_name),1)]),e("div",Ve,[r[3]||(r[3]=e("div",{class:"mb-1 text-xs text-gray-500"},"Total Amount",-1)),e("div",Te,g(m.data.currency)+" "+g(l(ie)(m.data.amount)),1)]),e("div",Ue,[r[4]||(r[4]=e("div",{class:"mb-1 text-xs text-gray-500"},"Created By",-1)),e("div",Ae,g((y=m.data.created_user)==null?void 0:y.name),1)]),e("div",Ne,[r[5]||(r[5]=e("div",{class:"mb-1 text-xs text-gray-500"},"Status",-1)),s(ue,{class:"overide-fs-11 inline-block w-[140px] rounded-xl",status:m.data.status},null,8,["status"])]),e("div",qe,[r[6]||(r[6]=e("div",{class:"mb-1 text-xs text-gray-500"},"Created At",-1)),e("div",je,g(l(de)(m.data.created_at)),1)])])]),e("div",De,[e("button",Re,[s(l(W),{href:p.route("claim.details",m.data.id)},{default:P(()=>[s(fe,{class:"text-violet-700"})]),_:1},8,["href"])])])])])}}},Be={key:0},Me={key:1},Fe={key:0,class:"mt-8"},Le={class:"grid md:grid-cols-4 gap-4 mb-5"},ze={class:"grid md:grid-cols gap-4 mb-5"},Ie={key:0},Ee={class:"flex justify-between w-full"},Oe={class:"flex justify-end flex-1"},Ge=["disabled"],Ke=["disabled"],Ye={key:1},E={__name:"AllClaim",props:{createCompleteSignal:{type:Number,default:!1}},setup(m){const v=u(!0),p=u([]),r=u(null),y=u(null),$=u(null),x=u(""),b=u(null),f=u(9),t=u(1),V=u(0),U=route("claims.list"),q=m;X(()=>q.createCompleteSignal,o=>{o&&k(t.value)});const k=async(o=1)=>{try{const c=new URLSearchParams({limit:f.value,page:o,searchValue:x.value??"",paymentType:y.value??"",category:$.value??""}).toString(),{data:_}=await Z.get(`${U}?${c}`);p.value=_.data.data,b.value=_.data,V.value=_.data.last_page}catch(c){r.value=c}finally{v.value=!1}};O(()=>{k(t.value)});const j=()=>{t.value>=V.value||(t.value+=1,k(t.value))},D=()=>{t.value<=1||(t.value-=1,k(t.value))},d=()=>{t.value=1,k(t.value)},a=()=>{y.value=null,$.value=null,d()};return(o,c)=>v.value?(n(),i("div",Be,[s(H,{class:"mt-32"})])):(n(),i("div",Me,[b.value?(n(),i("div",Fe,[e("div",Le,[s(ce,{class:"w-full mr-5",label:"a Payment Type",modelValue:y.value,"onUpdate:modelValue":c[0]||(c[0]=_=>y.value=_),options:["reimbursement","external_payment"]},null,8,["modelValue"]),s(R,{id:"search",modelValue:x.value,"onUpdate:modelValue":c[1]||(c[1]=_=>x.value=_),placeholder:"Search",class:"text-center"},null,8,["modelValue"]),e("button",{class:"bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded ml-2",onClick:a},"Reset Filters"),e("button",{class:"bg-violet-500 hover:bg-violet-700 text-white py-2 px-4 rounded ml-2",onClick:d},"Search")]),e("div",ze,[(n(!0),i(S,null,T(p.value,_=>(n(),G(J,{key:_.id,data:_},null,8,["data"]))),128))]),p.value.length===0||p.value==[]?(n(),i("div",Ie,[s(L)])):K("",!0),e("div",Ee,[e("div",null,[e("p",null,"Showing "+g(b.value.from??0)+" to "+g(b.value.to??0)+" of "+g(b.value.total),1)]),e("div",Oe,[e("button",{class:N(["bg-white hover:bg-gray-200 text-gray py-2 px-4 rounded ml-2",[{"cursor-not-allowed":t.value==1}]]),onClick:D,disabled:t.value==1},"Previous Page",10,Ge),e("button",{class:N(["bg-black hover:bg-gray-700 text-white py-2 px-4 rounded ml-2",[{"cursor-not-allowed":t.value==V.value}]]),disabled:t.value==V.value,onClick:j},"Next Page",10,Ke)])])])):(n(),i("div",Ye,[s(L)]))]))}},He={__name:"PendingClaim",props:{createCompleteSignal:{type:Number,default:!1}},setup(m){return(v,p)=>(n(),i("div",null,[s(me,{apiUrl:v.route("claims.listPendingApproval"),createCompleteSignal:m.createCompleteSignal},{"list-view":P(({data:r})=>[(n(!0),i(S,null,T(r,y=>(n(),G(J,{createComplete:m.createCompleteSignal,key:y.id,data:y},null,8,["createComplete","data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal"])]))}},Je={class:"space-y-6"},Qe={key:0},We={key:1},Xe={class:"grid grid-cols-1 gap-4 mt-4"},Ze=["value"],et=["value"],tt=["value"],at={class:"col-span-2"},st={class:"flex items-center space-x-4 mt-1"},lt={class:"inline-flex items-center"},ot={class:"inline-flex items-center"},rt={class:"col-span-2"},nt={class:"col-span-2"},it={key:2,class:"text-right mt-6"},dt={__name:"CreateClaimForm",setup(m,{emit:v}){const p=u(!1),r=u(!1),y=v,$=u([]),x=u([]),b=u([]),f=u(null),t=ee({payment_to:"",payment_type:"",payment_category:"",currency:"",amount:"",gst:"",purpose:"",receipt_date:"",receipt:null}),V=()=>{p.value=!0},U=()=>{p.value=!1},q=async()=>{r.value=!0;try{const d=new FormData;d.append("receipt",t.receipt);for(const[o,c]of Object.entries(t.data()))d.append(o,c);const a=await axios.post(route("claims.store"),d,{headers:{"Content-Type":"multipart/form-data"}});z.fire({title:"Success!",text:a.data.success,icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"w-32"}}),U(),t.reset(),y("createComplete",!0),r.value=!1}catch(d){d.response&&d.response.data.errors?t.errors=d.response.data.errors:z.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"}),r.value=!1}},k=async()=>{try{const{data:d}=await axios.get(route("currency.listShortCode"));$.value=d}catch(d){f.value=d}},j=async()=>{try{const{data:d}=await axios.get(route("paymentCategory.listChoice"));b.value=d}catch(d){f.value=d}},D=async()=>{try{const{data:d}=await axios.get(route("paymentReceiver.listNameAndId"));x.value=d}catch(d){f.value=d}};return O(()=>{k(),j(),D()}),(d,a)=>(n(),i("section",Je,[s(I,{onClick:V},{default:P(()=>a[10]||(a[10]=[B("Create Claim")])),_:1}),s(pe,{show:p.value,onClose:U},{default:P(()=>[e("form",{onSubmit:te(q,["prevent"]),class:"p-6"},[r.value?(n(),i("div",Qe,[s(H,{class:"mt-32 mb-32"})])):(n(),i("div",We,[a[17]||(a[17]=e("h2",{class:"text-lg font-medium text-gray-900"},"Create a New Claim",-1)),e("div",Xe,[e("div",null,[s(C,{for:"payment_to",value:"Payment To"}),w(e("select",{id:"payment_to","onUpdate:modelValue":a[0]||(a[0]=o=>l(t).payment_to=o),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},[a[11]||(a[11]=e("option",{value:"",disabled:"",selected:""},"Please select Payment Category",-1)),(n(!0),i(S,null,T(x.value,(o,c)=>(n(),i("option",{key:c,value:c,class:"capitalize"},g(o),9,Ze))),128))],512),[[A,l(t).payment_to]]),s(h,{message:l(t).errors.payment_to,class:"mt-2"},null,8,["message"])]),e("div",null,[s(C,{for:"payment_type",value:"Payment Type"}),w(e("select",{id:"payment_type","onUpdate:modelValue":a[1]||(a[1]=o=>l(t).payment_type=o),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},a[12]||(a[12]=[e("option",{value:"",disabled:"",selected:""},"Please select Payment Type",-1),e("option",{value:"reimbursement"},"Reimbursement",-1),e("option",{value:"external_payment"},"External Payment",-1)]),512),[[A,l(t).payment_type]]),s(h,{message:l(t).errors.payment_type,class:"mt-2"},null,8,["message"])]),e("div",null,[s(C,{for:"payment_category",value:"Payment Category"}),w(e("select",{id:"currency","onUpdate:modelValue":a[2]||(a[2]=o=>l(t).payment_category=o),class:"mt-1 payment_category w-full border-gray-300 rounded-md shadow-sm",required:""},[a[13]||(a[13]=e("option",{value:"",disabled:"",selected:""},"Please select Payment Category",-1)),(n(!0),i(S,null,T(b.value,(o,c)=>(n(),i("option",{key:c,value:c,class:"capitalize"},g(o),9,et))),128))],512),[[A,l(t).payment_category]]),s(h,{message:l(t).errors.payment_category,class:"mt-2"},null,8,["message"])]),e("div",null,[s(C,{for:"currency",value:"Currency"}),w(e("select",{id:"currency","onUpdate:modelValue":a[3]||(a[3]=o=>l(t).currency=o),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},[a[14]||(a[14]=e("option",{value:"",disabled:"",selected:""},"Please select Currency",-1)),(n(!0),i(S,null,T($.value,(o,c)=>(n(),i("option",{key:c,value:c},g(o),9,tt))),128))],512),[[A,l(t).currency]]),s(h,{message:l(t).errors.currency,class:"mt-2"},null,8,["message"])]),e("div",null,[s(C,{for:"amount",value:"Amount (incl. GST if any)"}),s(R,{id:"amount",modelValue:l(t).amount,"onUpdate:modelValue":a[4]||(a[4]=o=>l(t).amount=o),type:"number",step:"0.01",placeholder:"Enter amount",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),s(h,{message:l(t).errors.amount,class:"mt-2"},null,8,["message"])]),e("div",null,[e("div",at,[s(C,{value:"GST"}),e("div",st,[e("label",lt,[w(e("input",{type:"radio","onUpdate:modelValue":a[5]||(a[5]=o=>l(t).gst=o),value:"1",class:"form-radio"},null,512),[[M,l(t).gst]]),a[15]||(a[15]=e("span",{class:"ml-2"},"Yes",-1))]),e("label",ot,[w(e("input",{type:"radio","onUpdate:modelValue":a[6]||(a[6]=o=>l(t).gst=o),value:"0",class:"form-radio"},null,512),[[M,l(t).gst]]),a[16]||(a[16]=e("span",{class:"ml-2"},"No",-1))])]),s(h,{message:l(t).errors.gst,class:"mt-2"},null,8,["message"])])]),e("div",null,[e("div",rt,[s(C,{for:"purpose",value:"Purpose of Payment"}),w(e("textarea",{id:"purpose","onUpdate:modelValue":a[7]||(a[7]=o=>l(t).purpose=o),rows:"4",placeholder:"Enter purpose of payment",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},null,512),[[ae,l(t).purpose]]),s(h,{message:l(t).errors.purpose,class:"mt-2"},null,8,["message"])])]),e("div",null,[s(C,{for:"receipt_date",value:"Date of Receipt / Invoice"}),s(R,{id:"receipt_date",modelValue:l(t).receipt_date,"onUpdate:modelValue":a[8]||(a[8]=o=>l(t).receipt_date=o),type:"date",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),s(h,{message:l(t).errors.receipt_date,class:"mt-2"},null,8,["message"])]),e("div",null,[e("div",nt,[s(C,{for:"receipt",value:"Upload Receipt"}),e("input",{id:"receipt",type:"file",onChange:a[9]||(a[9]=o=>l(t).receipt=o.target.files[0]),accept:".jpeg,.jpg,.pdf,.png",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 cursor-pointer",required:""},null,32),s(h,{message:l(t).errors.receipt,class:"mt-2"},null,8,["message"])])])])])),r.value?K("",!0):(n(),i("div",it,[e("button",{type:"button",onClick:U,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),s(I,{type:"submit",class:N(["ms-3",{"opacity-25":l(t).processing}]),disabled:l(t).processing},{default:P(()=>a[18]||(a[18]=[B(" Submit Claim ")])),_:1},8,["class","disabled"])]))],32)]),_:1},8,["show"])]))}},ut={class:"flex justify-between content-center"},ct={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mt-3"},mt={key:0},pt={class:"flex"},vt=["onClick"],yt={class:"w-full"},gt={key:1},ft={__name:"Claim",setup(m){const v=u(2),p=u("pendingApproval"),r=u([{name:"pendingApproval",label:"Pending Approval"},{name:"allClaims",label:"All Claims"}]),y=x=>p.value===x?"active bg-violet-500 text-white font-bold":"hover:bg-gray-200",$=()=>{v.value=Math.floor(Math.random()*100)+1};return(x,b)=>(n(),i(S,null,[s(l(se),{title:"Claims"}),s(le,null,{header:P(()=>[e("div",ut,[s(re,{breadcrumbs:[{title:"Claims"}]}),s(dt,{onCreateComplete:$})])]),default:P(()=>[e("div",ct,[l(oe)().value?(n(),i("div",mt,[e("div",pt,[(n(!0),i(S,null,T(r.value,f=>(n(),i("span",{key:f.name,class:N(["tab-btn p-2 px-5 text-md text-black border-4 border-white",y(f.name)]),onClick:t=>p.value=f.name},g(f.label),11,vt))),128))]),e("div",yt,[w(e("div",null,[s(He,{createCompleteSignal:v.value},null,8,["createCompleteSignal"])],512),[[F,p.value==="pendingApproval"]]),w(e("div",null,[s(E,{createCompleteSignal:v.value},null,8,["createCompleteSignal"])],512),[[F,p.value==="allClaims"]])])])):(n(),i("div",gt,[s(E,{createCompleteSignal:v.value},null,8,["createCompleteSignal"])]))])]),_:1})],64))}},Ut=Y(ft,[["__scopeId","data-v-0d4b035e"]]);export{Ut as default};
