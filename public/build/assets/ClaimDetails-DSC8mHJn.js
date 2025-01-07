import{a as o,o as r,g as u,b as e,l as w,C as J,w as j,e as D,f as Q,u as l,n as X,j as I,k as z,h as m,p as Z,F as U,y as M,d as ee,c as h,t as v,m as te,P as se}from"./app-B3ou0PxL.js";import{_ as oe,g as ae,i as re}from"./AuthenticatedLayout-BxeUuz8f.js";import{L as A,S as V,d as K,f as le,b as B,a as R,N as ne,e as ie}from"./sweetalert2.esm.all-DUr8Sk9c.js";import{_ as ce}from"./StatusLabel-BDcIa2Qe.js";import{I as W,_ as ue}from"./BreadcrumbComponent-S4q9HzWy.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{P as S}from"./PrimaryButton-DGn-_LDZ.js";import{_ as E}from"./InputError-CbbjNe59.js";import{_ as F,a as H}from"./TextInput-oARU2lbz.js";import{_ as de}from"./Modal-UcU6Qfdc.js";import"./ApplicationLogo-M_mRncSF.js";var me={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};function q(n){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?Object(arguments[a]):{},p=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(p=p.concat(Object.getOwnPropertySymbols(s).filter(function(d){return Object.getOwnPropertyDescriptor(s,d).enumerable}))),p.forEach(function(d){pe(n,d,s[d])})}return n}function pe(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}var L=function(a,s){var p=q({},a,s.attrs);return o(W,q({},p,{icon:me}),null)};L.displayName="CloseOutlined";L.inheritAttrs=!1;var fe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};function G(n){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?Object(arguments[a]):{},p=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(p=p.concat(Object.getOwnPropertySymbols(s).filter(function(d){return Object.getOwnPropertyDescriptor(s,d).enumerable}))),p.forEach(function(d){ve(n,d,s[d])})}return n}function ve(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}var _=function(a,s){var p=G({},a,s.attrs);return o(W,G({},p,{icon:fe}),null)};_.displayName="InfoCircleOutlined";_.inheritAttrs=!1;const ye={},be={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"};function _e(n,a){return r(),u("svg",be,a[0]||(a[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"},null,-1)]))}const O=Y(ye,[["render",_e]]),xe={},ge={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"};function he(n,a){return r(),u("svg",ge,a[0]||(a[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"},null,-1)]))}const P=Y(xe,[["render",he]]),we={key:0},ke={key:1},Ce={class:"grid grid-cols-1 gap-4 mt-4"},je={class:"text-right mt-6"},$e={__name:"PaymentVoucherForm",props:{claimId:{type:String,required:!0}},setup(n,{emit:a}){const s=n,p=a,d=w(!1),k=w(!1),$=()=>k.value=!k.value,y=J({paymentVoucherNumber:"",paymentDate:""}),c=async()=>{d.value=!0;try{const i=new FormData;for(const[g,N]of Object.entries(y.data()))i.append(g,N);const f=route("claims.paymentCompleted",s.claimId);await axios["post"](f,i),V.fire({title:"Success!",text:"Payment details updated successfully",icon:"success",confirmButtonText:"OK"}),$(),y.reset(),p("createComplete",!0)}catch(i){i.response&&i.response.data.errors?y.errors=i.response.data.errors:V.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}finally{d.value=!1}};return(i,f)=>(r(),u("section",null,[o(S,{onClick:$},{default:j(()=>f[2]||(f[2]=[D("Payment Completed")])),_:1}),o(de,{show:k.value,onClose:$},{default:j(()=>[e("form",{onSubmit:Q(c,["prevent"]),class:"p-6 space-y-4"},[d.value?(r(),u("div",we,[o(A,{class:"mt-32 mb-32"})])):(r(),u("div",ke,[f[4]||(f[4]=e("h2",{class:"text-lg font-medium"},"Payment Voucher Details",-1)),e("div",Ce,[e("div",null,[o(F,{for:"paymentVoucherNumber",value:"Payment Voucher Number"}),o(H,{id:"paymentVoucherNumber",modelValue:l(y).paymentVoucherNumber,"onUpdate:modelValue":f[0]||(f[0]=C=>l(y).paymentVoucherNumber=C),class:"mt-1 block w-full",required:"",placeholder:"Enter Voucher Number"},null,8,["modelValue"]),o(E,{message:l(y).errors.paymentVoucherNumber,class:"mt-2"},null,8,["message"])]),e("div",null,[o(F,{for:"paymentDate",value:"Payment Date"}),o(H,{id:"paymentDate",type:"date",modelValue:l(y).paymentDate,"onUpdate:modelValue":f[1]||(f[1]=C=>l(y).paymentDate=C),class:"mt-1 block w-full",required:""},null,8,["modelValue"]),o(E,{message:l(y).errors.paymentDate,class:"mt-2"},null,8,["message"])])]),e("div",je,[e("button",{type:"button",onClick:$,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),o(S,{type:"submit",class:X(["ms-3",{"opacity-25":l(y).processing}]),disabled:l(y).processing},{default:j(()=>f[3]||(f[3]=[D(" Submit ")])),_:1},8,["class","disabled"])])]))],32)]),_:1},8,["show"])]))}},Oe={key:0,class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"},Pe={class:"bg-white p-4 pt-2 rounded-lg max-w-lg img-modal"},Ve={class:"flex flex-col"},De={class:"flex justify-between"},Se={class:"flex justify-center items-center img-loader-container"},Ne=["src","alt"],Be={__name:"ImageLoader",props:{src:{type:String,required:!0},alt:{type:String,default:"Image"},id:{type:Number,required:!0}},setup(n){const a=n,s=w(!1),p=()=>{s.value=!0},d=w(!1),k=()=>{d.value=!0},$=()=>{d.value=!1},y=async()=>{try{const c=a.src,i=await fetch(c);if(!i.ok)throw new Error("Failed to fetch the image");const f=await i.blob(),C=window.URL.createObjectURL(f),g=document.createElement("a");g.href=C,g.download="receipt-document-claim-"+K(a.id)+".jpg",document.body.appendChild(g),g.click(),g.remove(),window.URL.revokeObjectURL(C)}catch{}};return(c,i)=>(r(),u("div",null,[e("div",{class:"text-base cursor-pointer inline text-violet-700 font-bold",onClick:k}," Open "),d.value?(r(),u("div",Oe,[e("div",Pe,[e("div",Ve,[e("div",De,[o(S,{class:"m-3 ml-0",onClick:y},{default:j(()=>i[0]||(i[0]=[D("Download Receipt")])),_:1}),o(l(L),{class:"pb-2 mt-3",onClick:$})]),e("div",Se,[I(e("img",{onLoad:p,src:n.src,alt:n.alt,style:{overflow:"hidden"}},null,40,Ne),[[z,s.value]]),I(o(A,null,null,512),[[z,!s.value]])])])])])):m("",!0)]))}},Ae={class:"flex justify-between content-center"},Le={key:0},Te={key:1},Ie={key:0,class:"py-12 m-5 mt-0 mb-0 pt-5"},ze={class:"bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5"},Ue={class:"px-5 py-3 border-b border-gray-300 flex justify-between items-center"},Me={class:"flex justify-between content-center w-full"},Re={key:0,class:"grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2"},Ee={class:"mb-4"},Fe={class:"flex justify-between"},He={class:"text-base"},qe={class:"mb-4"},Ge={class:"flex justify-between"},Ke={class:"text-base"},We={class:"mb-4"},Ye={class:"flex justify-between"},Je={class:"text-base"},Qe={class:"mb-4"},Xe={class:"flex justify-between"},Ze={class:"text-base capitalize"},et={class:"mb-4"},tt={class:"flex justify-between"},st={class:"text-base"},ot={class:"mb-4"},at={class:"flex justify-between"},rt={class:"text-base"},lt={class:"bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5"},nt={class:"px-5 py-3 border-b border-gray-300 flex justify-between items-center"},it={class:"flex justify-between content-center w-full"},ct={key:0,class:"grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2"},ut={class:"mb-4"},dt={class:"flex justify-between"},mt={class:"text-base"},pt={class:"mb-4"},ft={class:"flex justify-between"},vt={class:"text-base"},yt={class:"mb-4"},bt={class:"flex justify-between"},_t={class:"text-base"},xt={class:"bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5"},gt={class:"px-5 py-3 border-b border-gray-300 flex justify-between items-center"},ht={class:"flex justify-between content-center w-full"},wt={key:0,class:"grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2"},kt={class:"mb-4"},Ct={class:"flex justify-between"},jt={class:"mb-4"},$t={class:"flex justify-between"},Ot={class:"text-base"},Pt={class:"bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5"},Vt={class:"px-5 py-3 border-b border-gray-300 flex justify-between items-center"},Dt={class:"flex justify-between content-center w-full"},St={key:0,class:"p-6 border-gray-300 mb-4 w-full"},Nt={class:"relative list-none"},Bt=["value"],At={class:"flex justify-between flex-col sm:flex-row"},Lt={class:"font-bold"},Tt={class:"text-gray-500"},It={key:0,class:"bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5"},zt={class:"px-5 py-3 border-b border-gray-300 flex justify-between items-center"},Ut={class:"flex justify-between content-center w-full"},Mt={key:0,class:"grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2"},Rt={class:"mb-4"},Et={class:"flex justify-between"},Ft={class:"text-base"},Ht={class:"mb-4"},qt={class:"flex justify-between"},Gt={class:"text-base"},Kt={key:1,class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5 text-right"},Wt={key:2,class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5 text-right"},Yt={key:1},Jt={style:{"min-height":"80vh"},class:"flex flex-col justify-center items-center"},Qt={class:"flex justify-center"},cs={__name:"ClaimDetails",props:{id:{type:String,required:!0}},setup(n){const a=w(!0),s=w([]),p=w(null),d=w(null),k=n,$=route("claims.fetchData",k.id);w("0"),w({});const y=[{title:"Claims",link:route("dashboard")},{title:"#"+K(k.id)}],c=w({details:!0,amount:!0,receipt:!0,approvalHistory:!0,paymentVoucher:!0}),i=x=>{c.value[x]=!c.value[x]},f=()=>{V.fire({title:"Are you sure?",text:"Are you sure you want to approve this Claim?",icon:"question",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",allowOutsideClick:!1,stopKeydownPropagation:!0,preConfirm:()=>new Promise((x,t)=>{C()})})},C=async()=>{try{const x=await M.post(route("claims.approveClaim",k.id));g(),V.fire({title:"Success!",text:"The claim has been successfully approved.",icon:"success",confirmButtonText:"OK"})}catch(x){V.fire({title:"Error!",text:x.response?x.response.data.error||"There was an error while approving the claim. Please try again.":"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}},g=async()=>{try{const{data:x}=await M.get($);s.value=x.data,d.value=x}catch(x){p.value=x}finally{a.value=!1}};Z(()=>{g()});const N=()=>{g()};return(x,t)=>(r(),u(U,null,[o(l(ee),{title:"Claim Details"}),o(oe,null,{header:j(()=>[e("div",Ae,[o(ue,{breadcrumbs:y}),d.value?(r(),h(ce,{key:0,class:"text-sm inline-block",status:s.value.status},null,8,["status"])):m("",!0)])]),default:j(()=>{var T;return[a.value?(r(),u("div",Le,[o(A,{class:"mt-32"})])):(r(),u("div",Te,[d.value?(r(),u("div",Ie,[e("div",ze,[e("div",Ue,[e("div",Me,[t[10]||(t[10]=e("h2",null,"Details",-1)),c.value.details?(r(),h(O,{key:0,class:"cursor-pointer",onClick:t[0]||(t[0]=b=>i("details"))})):m("",!0),c.value.details?m("",!0):(r(),h(P,{key:1,class:"cursor-pointer",onClick:t[1]||(t[1]=b=>i("details"))}))])]),c.value.details?(r(),u("div",Re,[e("div",Ee,[e("div",Fe,[t[11]||(t[11]=e("p",{class:"mb-1 text-sm text-gray-500"},"Created By",-1)),o(l(_),{class:"text-gray-400"})]),e("p",He,v(s.value.created_user?s.value.created_user.name??"-":"-"),1)]),e("div",qe,[e("div",Ge,[t[12]||(t[12]=e("p",{class:"mb-1 text-sm text-gray-500"},"Payment To",-1)),o(l(_),{class:"text-gray-400"})]),e("p",Ke,v(s.value.payment_to_user?s.value.payment_to_user.name??"-":"-"),1)]),e("div",We,[e("div",Ye,[t[13]||(t[13]=e("p",{class:"mb-1 text-sm text-gray-500"},"Payment Type",-1)),o(l(_),{class:"text-gray-400"})]),e("p",Je,v(l(le)(s.value.payment_type)??"-"),1)]),e("div",Qe,[e("div",Xe,[t[14]||(t[14]=e("p",{class:"mb-1 text-sm text-gray-500"},"Payment Category",-1)),o(l(_),{class:"text-gray-400"})]),e("p",Ze,v(((T=s.value.payment_category)==null?void 0:T.name)||"-"),1)]),e("div",et,[e("div",tt,[t[15]||(t[15]=e("p",{class:"mb-1 text-sm text-gray-500"},"Purpose",-1)),o(l(_),{class:"text-gray-400"})]),e("p",st,v(s.value.purpose??"-"),1)]),e("div",ot,[e("div",at,[t[16]||(t[16]=e("p",{class:"mb-1 text-sm text-gray-500"},"Creatd At",-1)),o(l(_),{class:"text-gray-400"})]),e("p",rt,v(l(B)(s.value.created_at)??"-"),1)])])):m("",!0)]),e("div",lt,[e("div",nt,[e("div",it,[t[17]||(t[17]=e("h2",null,"Amount",-1)),c.value.amount?(r(),h(O,{key:0,class:"cursor-pointer",onClick:t[2]||(t[2]=b=>i("amount"))})):m("",!0),c.value.amount?m("",!0):(r(),h(P,{key:1,class:"cursor-pointer",onClick:t[3]||(t[3]=b=>i("amount"))}))])]),c.value.amount?(r(),u("div",ct,[e("div",ut,[e("div",dt,[t[18]||(t[18]=e("p",{class:"mb-1 text-sm text-gray-500"},"Total Amount",-1)),o(l(_),{class:"text-gray-400"})]),e("p",mt,v(s.value.currency_object.short_code)+" "+v(l(R)(s.value.amount)),1)]),e("div",pt,[e("div",ft,[t[19]||(t[19]=e("p",{class:"mb-1 text-sm text-gray-500"},"GST Percent",-1)),o(l(_),{class:"text-gray-400"})]),e("p",vt,v(Number(s.value.gst_amount)===0?"-":s.value.gst_percent+" %"),1)]),e("div",yt,[e("div",bt,[t[20]||(t[20]=e("p",{class:"mb-1 text-sm text-gray-500"},"GST Amount",-1)),o(l(_),{class:"text-gray-400"})]),e("p",_t,v(Number(s.value.gst_amount)===0?"-":s.value.currency_object.short_code+" "+l(R)(s.value.gst_amount)),1)])])):m("",!0)]),e("div",xt,[e("div",gt,[e("div",ht,[t[21]||(t[21]=e("h2",null,"Receipt",-1)),c.value.receipt?(r(),h(O,{key:0,class:"cursor-pointer",onClick:t[4]||(t[4]=b=>i("receipt"))})):m("",!0),c.value.receipt?m("",!0):(r(),h(P,{key:1,class:"cursor-pointer",onClick:t[5]||(t[5]=b=>i("receipt"))}))])]),c.value.receipt?(r(),u("div",wt,[e("div",kt,[e("div",Ct,[t[22]||(t[22]=e("p",{class:"mb-1 text-sm text-gray-500"},"Receipt Document",-1)),o(l(_),{class:"text-gray-400"})]),e("div",null,[o(Be,{src:`/${s.value.receipt_file}`,alt:"Receipt Image",id:s.value.id},null,8,["src","id"])])]),e("div",jt,[e("div",$t,[t[23]||(t[23]=e("p",{class:"mb-1 text-sm text-gray-500"},"Receipt Date",-1)),o(l(_),{class:"text-gray-400"})]),e("p",Ot,v(l(B)(s.value.receipt_date)??"-"),1)])])):m("",!0)]),e("div",Pt,[e("div",Vt,[e("div",Dt,[t[24]||(t[24]=e("h2",null,"Approval History",-1)),c.value.approvalHistory?(r(),h(O,{key:0,class:"cursor-pointer",onClick:t[6]||(t[6]=b=>i("approvalHistory"))})):m("",!0),c.value.approvalHistory?m("",!0):(r(),h(P,{key:1,class:"cursor-pointer",onClick:t[7]||(t[7]=b=>i("approvalHistory"))}))])]),c.value.approvalHistory?(r(),u("div",St,[e("ul",Nt,[t[26]||(t[26]=e("div",{class:"absolute top-3 left-[21px] w-[2px] bg-gray-300 h-full z-1"},null,-1)),(r(!0),u(U,null,te(s.value.status_log,b=>(r(),u("li",{class:"relative pl-10 mb-4",key:b.id,value:b},[t[25]||(t[25]=e("div",{class:"absolute left-[12px] top-1 w-5 h-5 rounded-full",style:{"background-color":"#d4d9df"}},[e("div",{class:"absolute left-[4px] top-1 w-3 h-3 rounded-full",style:{"background-color":"#7367F0"}})],-1)),e("div",At,[e("p",Lt,v(b.status),1),e("p",Tt,v(l(ie)(b.created_at)),1)]),e("p",null,v(b.name),1)],8,Bt))),128))])])):m("",!0)]),s.value.status_id>=3?(r(),u("div",It,[e("div",zt,[e("div",Ut,[t[27]||(t[27]=e("h2",null,"Payment Voucher",-1)),c.value.paymentVoucher?(r(),h(O,{key:0,class:"cursor-pointer",onClick:t[8]||(t[8]=b=>i("paymentVoucher"))})):m("",!0),c.value.paymentVoucher?m("",!0):(r(),h(P,{key:1,class:"cursor-pointer",onClick:t[9]||(t[9]=b=>i("paymentVoucher"))}))])]),c.value.paymentVoucher?(r(),u("div",Mt,[e("div",Rt,[e("div",Et,[t[28]||(t[28]=e("p",{class:"mb-1 text-sm text-gray-500"},"Payment Voucher Number",-1)),o(l(_),{class:"text-gray-400"})]),e("p",Ft,v(s.value.payment_voucher_number??"-"),1)]),e("div",Ht,[e("div",qt,[t[29]||(t[29]=e("p",{class:"mb-1 text-sm text-gray-500"},"Payment Date",-1)),o(l(_),{class:"text-gray-400"})]),e("p",Gt,v(l(B)(s.value.payment_date)??"-"),1)])])):m("",!0)])):m("",!0),s.value.status_id<2&&l(ae)().value==s.value.next_approval_level?(r(),u("div",Kt,[o(S,{onClick:f},{default:j(()=>t[30]||(t[30]=[D("Approve Claim")])),_:1})])):m("",!0),s.value.status_id==2&&l(re)().value?(r(),u("div",Wt,[o($e,{claimId:k.id,onCreateComplete:N},null,8,["claimId"])])):m("",!0)])):(r(),u("div",Yt,[e("div",Jt,[o(ne),e("div",Qt,[o(l(se),{href:x.route("dashboard")},{default:j(()=>[o(S,{class:"p-4"},{default:j(()=>t[31]||(t[31]=[D("Back To Home Page")])),_:1})]),_:1},8,["href"])])])]))]))]}),_:1})],64))}};export{cs as default};