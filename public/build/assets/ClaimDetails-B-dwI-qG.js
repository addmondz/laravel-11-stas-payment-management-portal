import{a as o,o as l,g as i,b as e,k as h,C as J,w as k,e as D,f as Q,u as a,n as X,m as Z,F as z,q as M,d as ee,c as g,h as c,t as p,p as te,P as se}from"./app-D3wxWcDe.js";import{_ as oe,g as ae,i as re}from"./AuthenticatedLayout-mefH43hr.js";import{L as R,S as V,d as le,f as ne,b as B,a as L,N as ie,e as ce}from"./sweetalert2.esm.all-BBtUs681.js";import{_ as ue}from"./StatusLabel-DzCz7buO.js";import{I as G,_ as de}from"./BreadcrumbComponent-DN2ZMB6i.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{P as S}from"./PrimaryButton-DD1i1uYw.js";import{_ as H,a as q,b as E}from"./TextInput-aNO9Ssik.js";import{_ as me}from"./Modal-BSUPLnB0.js";import"./ApplicationLogo-M_mRncSF.js";var pe={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};function F(n){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?Object(arguments[r]):{},f=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(f=f.concat(Object.getOwnPropertySymbols(s).filter(function(m){return Object.getOwnPropertyDescriptor(s,m).enumerable}))),f.forEach(function(m){fe(n,m,s[m])})}return n}function fe(n,r,s){return r in n?Object.defineProperty(n,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[r]=s,n}var T=function(r,s){var f=F({},r,s.attrs);return o(G,F({},f,{icon:pe}),null)};T.displayName="CloseOutlined";T.inheritAttrs=!1;var ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};function U(n){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?Object(arguments[r]):{},f=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(f=f.concat(Object.getOwnPropertySymbols(s).filter(function(m){return Object.getOwnPropertyDescriptor(s,m).enumerable}))),f.forEach(function(m){ye(n,m,s[m])})}return n}function ye(n,r,s){return r in n?Object.defineProperty(n,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[r]=s,n}var y=function(r,s){var f=U({},r,s.attrs);return o(G,U({},f,{icon:ve}),null)};y.displayName="InfoCircleOutlined";y.inheritAttrs=!1;const be={},xe={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"};function _e(n,r){return l(),i("svg",xe,r[0]||(r[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"},null,-1)]))}const O=K(be,[["render",_e]]),ge={},he={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"};function we(n,r){return l(),i("svg",he,r[0]||(r[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"},null,-1)]))}const $=K(ge,[["render",we]]),ke={key:0},Ce={key:1},je={class:"grid grid-cols-1 gap-4 mt-4"},Pe={class:"text-right mt-6"},Oe={__name:"PaymentVoucherForm",props:{claimId:{type:String,required:!0}},setup(n,{emit:r}){const s=n,f=r,m=h(!1),w=h(!1),C=()=>w.value=!w.value,_=J({paymentVoucherNumber:"",paymentDate:""}),u=async()=>{m.value=!0;try{const d=new FormData;for(const[P,N]of Object.entries(_.data()))d.append(P,N);const b=route("claims.paymentCompleted",s.claimId);await axios["post"](b,d),V.fire({title:"Success!",text:"Payment details updated successfully",icon:"success",confirmButtonText:"OK"}),C(),_.reset(),f("createComplete",!0)}catch(d){d.response&&d.response.data.errors?_.errors=d.response.data.errors:V.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}finally{m.value=!1}};return(d,b)=>(l(),i("section",null,[o(S,{onClick:C},{default:k(()=>b[2]||(b[2]=[D("Payment Completed")])),_:1}),o(me,{show:w.value,onClose:C},{default:k(()=>[e("form",{onSubmit:Q(u,["prevent"]),class:"p-6 space-y-4"},[m.value?(l(),i("div",ke,[o(R,{class:"mt-32 mb-32"})])):(l(),i("div",Ce,[b[4]||(b[4]=e("h2",{class:"text-lg font-medium"},"Payment Voucher Details",-1)),e("div",je,[e("div",null,[o(H,{for:"paymentVoucherNumber",value:"Payment Voucher Number"}),o(q,{id:"paymentVoucherNumber",modelValue:a(_).paymentVoucherNumber,"onUpdate:modelValue":b[0]||(b[0]=j=>a(_).paymentVoucherNumber=j),class:"mt-1 block w-full",required:"",placeholder:"Enter Voucher Number"},null,8,["modelValue"]),o(E,{message:a(_).errors.paymentVoucherNumber,class:"mt-2"},null,8,["message"])]),e("div",null,[o(H,{for:"paymentDate",value:"Payment Date"}),o(q,{id:"paymentDate",type:"date",modelValue:a(_).paymentDate,"onUpdate:modelValue":b[1]||(b[1]=j=>a(_).paymentDate=j),class:"mt-1 block w-full",required:""},null,8,["modelValue"]),o(E,{message:a(_).errors.paymentDate,class:"mt-2"},null,8,["message"])])]),e("div",Pe,[e("button",{type:"button",onClick:C,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),o(S,{type:"submit",class:X(["ms-3",{"opacity-25":a(_).processing}]),disabled:a(_).processing},{default:k(()=>b[3]||(b[3]=[D(" Submit ")])),_:1},8,["class","disabled"])])]))],32)]),_:1},8,["show"])]))}},$e={class:"flex justify-between content-center"},Ve={key:0},De={key:1},Se={key:0,class:"py-12 m-5 mt-0 mb-0 pt-5"},Ne={class:"bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 mb-5"},Ae={class:"px-5 py-3 border-b border-gray-300 flex justify-between items-center"},Be={class:"flex justify-between content-center w-full"},Te={key:0,class:"grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2"},Ie={class:"mb-4"},ze={class:"flex justify-between"},Me={class:"text-base"},Le={class:"mb-4"},He={class:"flex justify-between"},qe={class:"text-base"},Ee={class:"mb-4"},Fe={class:"flex justify-between"},Ue={class:"text-base"},Re={class:"mb-4"},Ge={class:"flex justify-between"},Ke={class:"text-base capitalize"},We={class:"mb-4"},Ye={class:"flex justify-between"},Je={class:"text-base"},Qe={class:"mb-4"},Xe={class:"flex justify-between"},Ze={class:"text-base"},et={class:"bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5"},tt={class:"px-5 py-3 border-b border-gray-300 flex justify-between items-center"},st={class:"flex justify-between content-center w-full"},ot={key:0,class:"grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2"},at={class:"mb-4"},rt={class:"flex justify-between"},lt={class:"text-base"},nt={class:"mb-4"},it={class:"flex justify-between"},ct={class:"text-base"},ut={class:"mb-4"},dt={class:"flex justify-between"},mt={class:"text-base"},pt={class:"bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5"},ft={class:"px-5 py-3 border-b border-gray-300 flex justify-between items-center"},vt={class:"flex justify-between content-center w-full"},yt={key:0,class:"grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2"},bt={class:"mb-4"},xt={class:"flex justify-between"},_t={key:0,class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"},gt={class:"bg-white p-4 pt-2 rounded-lg max-w-lg"},ht={class:"flex flex-col"},wt={class:"text-right"},kt=["src"],Ct={class:"mb-4"},jt={class:"flex justify-between"},Pt={class:"text-base"},Ot={class:"bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5"},$t={class:"px-5 py-3 border-b border-gray-300 flex justify-between items-center"},Vt={class:"flex justify-between content-center w-full"},Dt={key:0,class:"p-6 border-gray-300 mb-4 w-full"},St={class:"relative list-none"},Nt=["value"],At={class:"flex justify-between flex-col sm:flex-row"},Bt={class:"font-bold"},Tt={class:"text-gray-500"},It={key:0,class:"bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5"},zt={class:"px-5 py-3 border-b border-gray-300 flex justify-between items-center"},Mt={class:"flex justify-between content-center w-full"},Lt={key:0,class:"grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2"},Ht={class:"mb-4"},qt={class:"flex justify-between"},Et={class:"text-base"},Ft={class:"mb-4"},Ut={class:"flex justify-between"},Rt={class:"text-base"},Gt={key:1,class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5 text-right"},Kt={key:2,class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5 text-right"},Wt={key:1},Yt={style:{"min-height":"80vh"},class:"flex flex-col justify-center items-center"},Jt={class:"flex justify-center"},ns={__name:"ClaimDetails",props:{id:{type:String,required:!0}},setup(n){const r=h(!0),s=h([]),f=h(null),m=h(null),w=n,C=route("claims.fetchData",w.id);h("0"),h({});const _=[{title:"Claims",link:route("dashboard")},{title:"#"+le(w.id)}],u=h({details:!0,amount:!0,receipt:!0,approvalHistory:!0,paymentVoucher:!0}),d=x=>{u.value[x]=!u.value[x]},b=()=>{V.fire({title:"Are you sure?",text:"Are you sure you want to approve this Claim?",icon:"question",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",allowOutsideClick:!1,stopKeydownPropagation:!0,preConfirm:()=>new Promise((x,t)=>{j()})})},j=async()=>{try{const x=await M.post(route("claims.approveClaim",w.id));P(),V.fire({title:"Success!",text:"The claim has been successfully approved.",icon:"success",confirmButtonText:"OK"})}catch(x){V.fire({title:"Error!",text:x.response?x.response.data.error||"There was an error while approving the claim. Please try again.":"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}},P=async()=>{try{const{data:x}=await M.get(C);s.value=x.data,m.value=x}catch(x){f.value=x}finally{r.value=!1}};Z(()=>{P()});const N=()=>{P()},A=h(!1),W=()=>{A.value=!0},Y=()=>{A.value=!1};return(x,t)=>(l(),i(z,null,[o(a(ee),{title:"Claim Details"}),o(oe,null,{header:k(()=>[e("div",$e,[o(de,{breadcrumbs:_}),m.value?(l(),g(ue,{key:0,class:"text-sm inline-block",status:s.value.status},null,8,["status"])):c("",!0)])]),default:k(()=>{var I;return[r.value?(l(),i("div",Ve,[o(R,{class:"mt-32"})])):(l(),i("div",De,[m.value?(l(),i("div",Se,[e("div",Ne,[e("div",Ae,[e("div",Be,[t[10]||(t[10]=e("h2",null,"Details",-1)),u.value.details?(l(),g(O,{key:0,class:"cursor-pointer",onClick:t[0]||(t[0]=v=>d("details"))})):c("",!0),u.value.details?c("",!0):(l(),g($,{key:1,class:"cursor-pointer",onClick:t[1]||(t[1]=v=>d("details"))}))])]),u.value.details?(l(),i("div",Te,[e("div",Ie,[e("div",ze,[t[11]||(t[11]=e("p",{class:"mb-1 text-sm text-gray-500"},"Created By",-1)),o(a(y),{class:"text-gray-400"})]),e("p",Me,p(s.value.created_user?s.value.created_user.name??"-":"-"),1)]),e("div",Le,[e("div",He,[t[12]||(t[12]=e("p",{class:"mb-1 text-sm text-gray-500"},"Payment To",-1)),o(a(y),{class:"text-gray-400"})]),e("p",qe,p(s.value.payment_to_user?s.value.payment_to_user.name??"-":"-"),1)]),e("div",Ee,[e("div",Fe,[t[13]||(t[13]=e("p",{class:"mb-1 text-sm text-gray-500"},"Payment Type",-1)),o(a(y),{class:"text-gray-400"})]),e("p",Ue,p(a(ne)(s.value.payment_type)??"-"),1)]),e("div",Re,[e("div",Ge,[t[14]||(t[14]=e("p",{class:"mb-1 text-sm text-gray-500"},"Payment Category",-1)),o(a(y),{class:"text-gray-400"})]),e("p",Ke,p(((I=s.value.payment_category)==null?void 0:I.name)||"-"),1)]),e("div",We,[e("div",Ye,[t[15]||(t[15]=e("p",{class:"mb-1 text-sm text-gray-500"},"Purpose",-1)),o(a(y),{class:"text-gray-400"})]),e("p",Je,p(s.value.purpose??"-"),1)]),e("div",Qe,[e("div",Xe,[t[16]||(t[16]=e("p",{class:"mb-1 text-sm text-gray-500"},"Creatd At",-1)),o(a(y),{class:"text-gray-400"})]),e("p",Ze,p(a(B)(s.value.created_at)??"-"),1)])])):c("",!0)]),e("div",et,[e("div",tt,[e("div",st,[t[17]||(t[17]=e("h2",null,"Amount",-1)),u.value.amount?(l(),g(O,{key:0,class:"cursor-pointer",onClick:t[2]||(t[2]=v=>d("amount"))})):c("",!0),u.value.amount?c("",!0):(l(),g($,{key:1,class:"cursor-pointer",onClick:t[3]||(t[3]=v=>d("amount"))}))])]),u.value.amount?(l(),i("div",ot,[e("div",at,[e("div",rt,[t[18]||(t[18]=e("p",{class:"mb-1 text-sm text-gray-500"},"Total Amount",-1)),o(a(y),{class:"text-gray-400"})]),e("p",lt,p(s.value.currency_object.short_code)+" "+p(a(L)(s.value.amount)),1)]),e("div",nt,[e("div",it,[t[19]||(t[19]=e("p",{class:"mb-1 text-sm text-gray-500"},"GST Percent",-1)),o(a(y),{class:"text-gray-400"})]),e("p",ct,p(Number(s.value.gst_amount)===0?"-":s.value.gst_percent+" %"),1)]),e("div",ut,[e("div",dt,[t[20]||(t[20]=e("p",{class:"mb-1 text-sm text-gray-500"},"GST Amount",-1)),o(a(y),{class:"text-gray-400"})]),e("p",mt,p(Number(s.value.gst_amount)===0?"-":s.value.currency_object.short_code+" "+a(L)(s.value.gst_amount)),1)])])):c("",!0)]),e("div",pt,[e("div",ft,[e("div",vt,[t[21]||(t[21]=e("h2",null,"Receipt",-1)),u.value.receipt?(l(),g(O,{key:0,class:"cursor-pointer",onClick:t[4]||(t[4]=v=>d("receipt"))})):c("",!0),u.value.receipt?c("",!0):(l(),g($,{key:1,class:"cursor-pointer",onClick:t[5]||(t[5]=v=>d("receipt"))}))])]),u.value.receipt?(l(),i("div",yt,[e("div",bt,[e("div",xt,[t[22]||(t[22]=e("p",{class:"mb-1 text-sm text-gray-500"},"Receipt Document",-1)),o(a(y),{class:"text-gray-400"})]),e("div",null,[e("div",{class:"text-base cursor-pointer inline text-violet-700 font-bold",onClick:W},"Open "),A.value?(l(),i("div",_t,[e("div",gt,[e("div",ht,[e("div",wt,[o(a(T),{class:"pb-2",onClick:Y})]),e("img",{src:`/public/${s.value.receipt_file}`,alt:"Receipt Image",class:"max-w-full max-h-screen"},null,8,kt)])])])):c("",!0)])]),e("div",Ct,[e("div",jt,[t[23]||(t[23]=e("p",{class:"mb-1 text-sm text-gray-500"},"Receipt Date",-1)),o(a(y),{class:"text-gray-400"})]),e("p",Pt,p(a(B)(s.value.receipt_date)??"-"),1)])])):c("",!0)]),e("div",Ot,[e("div",$t,[e("div",Vt,[t[24]||(t[24]=e("h2",null,"Approval History",-1)),u.value.approvalHistory?(l(),g(O,{key:0,class:"cursor-pointer",onClick:t[6]||(t[6]=v=>d("approvalHistory"))})):c("",!0),u.value.approvalHistory?c("",!0):(l(),g($,{key:1,class:"cursor-pointer",onClick:t[7]||(t[7]=v=>d("approvalHistory"))}))])]),u.value.approvalHistory?(l(),i("div",Dt,[e("ul",St,[t[26]||(t[26]=e("div",{class:"absolute top-3 left-[21px] w-[2px] bg-gray-300 h-full z-1"},null,-1)),(l(!0),i(z,null,te(s.value.status_log,v=>(l(),i("li",{class:"relative pl-10 mb-4",key:v.id,value:v},[t[25]||(t[25]=e("div",{class:"absolute left-[12px] top-1 w-5 h-5 rounded-full",style:{"background-color":"#d4d9df"}},[e("div",{class:"absolute left-[4px] top-1 w-3 h-3 rounded-full",style:{"background-color":"#7367F0"}})],-1)),e("div",At,[e("p",Bt,p(v.status),1),e("p",Tt,p(a(ce)(v.created_at)),1)]),e("p",null,p(v.name),1)],8,Nt))),128))])])):c("",!0)]),s.value.status_id>=3?(l(),i("div",It,[e("div",zt,[e("div",Mt,[t[27]||(t[27]=e("h2",null,"Payment Voucher",-1)),u.value.paymentVoucher?(l(),g(O,{key:0,class:"cursor-pointer",onClick:t[8]||(t[8]=v=>d("paymentVoucher"))})):c("",!0),u.value.paymentVoucher?c("",!0):(l(),g($,{key:1,class:"cursor-pointer",onClick:t[9]||(t[9]=v=>d("paymentVoucher"))}))])]),u.value.paymentVoucher?(l(),i("div",Lt,[e("div",Ht,[e("div",qt,[t[28]||(t[28]=e("p",{class:"mb-1 text-sm text-gray-500"},"Payment Voucher Number",-1)),o(a(y),{class:"text-gray-400"})]),e("p",Et,p(s.value.payment_voucher_number??"-"),1)]),e("div",Ft,[e("div",Ut,[t[29]||(t[29]=e("p",{class:"mb-1 text-sm text-gray-500"},"Payment Date",-1)),o(a(y),{class:"text-gray-400"})]),e("p",Rt,p(a(B)(s.value.payment_date)??"-"),1)])])):c("",!0)])):c("",!0),s.value.status_id<2&&a(ae)().value==s.value.next_approval_level?(l(),i("div",Gt,[o(S,{onClick:b},{default:k(()=>t[30]||(t[30]=[D("Approve Claim")])),_:1})])):c("",!0),s.value.status_id==2&&a(re)().value?(l(),i("div",Kt,[o(Oe,{claimId:w.id,onCreateComplete:N},null,8,["claimId"])])):c("",!0)])):(l(),i("div",Wt,[e("div",Yt,[o(ie),e("div",Jt,[o(a(se),{href:x.route("dashboard")},{default:k(()=>[o(S,{class:"p-4"},{default:k(()=>t[31]||(t[31]=[D("Back To Home Page")])),_:1})]),_:1},8,["href"])])])]))]))]}),_:1})],64))}};export{ns as default};