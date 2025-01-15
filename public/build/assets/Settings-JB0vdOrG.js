import{_ as X,a as W}from"./AuthenticatedLayout-DlRDxjZ9.js";import{l as p,o as l,g as c,b as e,a as t,w as y,F as N,s as P,c as j,C as z,e as V,f as H,u as r,n as R,p as q,t as h,A as Y,m as Z,h as ee,j as te,q as se,G as ae,d as oe,P as le}from"./app-CsVATCKY.js";import{L as U,N as J}from"./NotFound-zAxn5ysd.js";import{_ as ne,a as ie}from"./PaymentCategoryListTemplate-BsTV5HHL.js";import{_ as E}from"./ListComponent-D1zPS9qj.js";import{_ as S}from"./InputError-CuEhy80E.js";import{_ as w,a as M}from"./TextInput-Dg0vxjDD.js";import{M as O}from"./Modal-BpUQR7FS.js";import{P as A}from"./PrimaryButton-o0QQ09Eh.js";import{S as T}from"./helpers-u5RPp1c0.js";import{_ as re}from"./BreadcrumbComponent-Bv_96Ibm.js";import{_ as ce,a as de}from"./UsersListTemplate-DKH0KYJE.js";import{$ as B}from"./jquery-pQ4M8kuk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DateRangeComponent-DSj9wXNo.js";const ue={class:"flex justify-between content-center"},me={__name:"PaymentCategoryComponent",setup(v){const d=p(2),s=()=>{d.value=Math.floor(Math.random()*100)+132};return(o,u)=>(l(),c("div",null,[e("div",ue,[u[0]||(u[0]=e("p",null,"Payment Category",-1)),t(ne,{onCreateComplete:s})]),t(E,{apiUrl:o.route("paymentCategory.list"),createCompleteSignal:d.value,hasSearchBox:!0},{"list-view":y(({data:a})=>[(l(!0),c(N,null,P(a,f=>(l(),j(ie,{onCreateComplete:s,key:f.id,data:f},null,8,["data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal"])]))}},_e={key:0},fe={key:1},pe={class:"grid grid-cols-1 gap-4 mt-4"},ve={class:"text-right mt-6"},ge={__name:"GstConfigurationForm",props:{gstPercentage:{type:[Number,String],default:null}},setup(v,{emit:d}){const s=d,o=p(!1),a=z({value:v.gstPercentage||0}),f=p(!1),g=()=>f.value=!f.value,C=async()=>{o.value=!0;try{const x=new FormData;for(const[L,G]of Object.entries(a.data()))x.append(L,G);const i=route("variables.updateGst");await axios["post"](i,x),T.fire({title:"Success!",text:"GST updated successfully",icon:"success",confirmButtonText:"OK"}),g(),a.reset(),s("createComplete",!0)}catch(x){x.response&&x.response.data.errors?a.errors=x.response.data.errors:T.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}finally{o.value=!1}},n=x=>{let i=x.target.value;i=i.replace(/[^0-9]/g,""),i.length>1&&(i=i.replace(/^0+/,"")),i&&(i=i.length<=2?`0.${i.padStart(2,"0")}`:`${i.slice(0,-2)}.${i.slice(-2)}`),a.value=i};return(x,i)=>(l(),c("section",null,[t(A,{onClick:g},{default:y(()=>i[1]||(i[1]=[V("Edit")])),_:1}),t(O,{show:f.value,onClose:g},{default:y(()=>[e("form",{onSubmit:H(C,["prevent"]),class:"p-6 space-y-4"},[o.value?(l(),c("div",_e,[t(U,{class:"mt-32 mb-32"})])):(l(),c("div",fe,[i[3]||(i[3]=e("h2",{class:"text-lg font-medium"},"Edit GST Percentage",-1)),e("div",pe,[e("div",null,[t(w,{for:"gst",value:"Gst Amount"}),t(M,{id:"gst",modelValue:r(a).value,"onUpdate:modelValue":i[0]||(i[0]=k=>r(a).value=k),class:"mt-1 block w-full",required:"",onKeyup:n},null,8,["modelValue"]),t(S,{message:r(a).errors.gst,class:"mt-2"},null,8,["message"])])]),e("div",ve,[e("button",{type:"button",onClick:g,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),t(A,{type:"submit",class:R(["ms-3",{"opacity-25":r(a).processing}]),disabled:r(a).processing},{default:y(()=>i[2]||(i[2]=[V(" Submit ")])),_:1},8,["class","disabled"])])]))],32)]),_:1},8,["show"])]))}},be={key:0},ye={key:1},he={key:0,class:"pt-12"},xe={class:"grid md:grid-cols gap-4 mb-5"},we={class:"w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-3 rounded overflow-hidden bg-white transition-all duration-500"},Ce={class:"flex"},ke={class:"flex-1"},$e={class:"text-2xl"},Se={class:"flex"},Ve={key:1},Ae={__name:"GstSettingsComponent",setup(v){const d=p(!0),s=p(null),o=p(1),u=route("variables.fetchesGst"),a=async(g=1)=>{try{const{data:C}=await Y.get(`${u}`);o.value=C}catch(C){s.value=C}finally{d.value=!1}};q(()=>{a()});const f=()=>{a()};return(g,C)=>(l(),c(N,null,[C[0]||(C[0]=e("div",{class:"flex justify-between content-center"},[e("p",null,"GST Configuration")],-1)),d.value?(l(),c("div",be,[t(U,{class:"mt-20 mb-20"})])):(l(),c("div",ye,[o.value?(l(),c("div",he,[e("div",xe,[e("div",we,[e("div",Ce,[e("div",ke,[e("p",$e,h(o.value.toFixed(2))+" %",1)]),e("div",Se,[t(ge,{gstPercentage:o.value.toFixed(2),onCreateComplete:f},null,8,["gstPercentage"])])])])])])):(l(),c("div",Ve,[t(J)]))]))],64))}},Ne={class:"flex justify-between content-center"},Be={__name:"TeamComponent",setup(v){const d=p(2),s=()=>{d.value=Math.floor(Math.random()*100)+132},o=p([{field_name:"email",field_type:"string"},{field_name:"name",field_type:"string"},{field_name:"role",field_type:"select",options:{user:"user",finance:"finance",admin:"admin"}},{field_name:"approval_privillage",field_type:"select",options:{1:"L1 Approval Members",2:"L2 Approval Members",3:"L3 Approval Members"}},{field_name:"status",field_type:"select",options:{active:"Active",inactive:"Inactive"}}]);return(u,a)=>(l(),c("div",null,[e("div",Ne,[a[0]||(a[0]=e("p",null,"Team Accounts",-1)),t(ce,{onCreateComplete:s})]),t(E,{apiUrl:u.route("users.list"),createCompleteSignal:d.value,sortAndFilters:o.value,allowSorting:!1},{"list-view":y(({data:f})=>[(l(!0),c(N,null,P(f,g=>(l(),j(de,{onCreateComplete:s,key:g.id,data:g},null,8,["data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal","sortAndFilters"])]))}},Me={key:0},De={class:"text-lg font-medium text-gray-900"},Fe={class:"grid grid-cols-1 gap-4 mt-4"},Te=["value"],Pe={class:"text-right mt-6"},je={key:1},Ue={class:"p-6 space-y-4"},Le={class:"grid grid-cols-1 gap-4"},Ge={id:"name",class:"mt-1 block w-full border-gray-300 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full p-2 border-1px-solid"},Re={id:"bank_name",class:"mt-1 block w-full border-gray-300 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full p-2 border-1px-solid"},Oe={id:"bank_account_no",class:"mt-1 block w-full border-gray-300 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full p-2 border-1px-solid"},qe={id:"swift_code",class:"mt-1 block w-full border-gray-300 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full p-2 border-1px-solid"},Ee={id:"currency_id",class:"mt-1 block w-full border-gray-300 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full p-2 border-1px-solid"},Q={__name:"PaymentReceiverForm",props:{userData:{type:Object,default:null},canView:{type:Boolean,default:!1},hasTopSpacing:{type:Boolean,default:!1}},setup(v,{emit:d}){const s=v,o=p(!1),u=p(!1),a=p(!1),f=d,g=p([]),C=p(null),n=z({name:"",bank_name:"",bank_account_no:"",swift_code:"",currency_id:""});Z(()=>s.userData,m=>{m?(n.name=m.name,n.bank_name=m.bank_name,n.bank_account_no=m.bank_account_no,n.swift_code=m.swift_code,n.currency_id=m.currency_id):n.reset()},{immediate:!0});const x=()=>{u.value=!1},i=()=>{u.value=!u.value},k=()=>{a.value=!a.value},L=async()=>{o.value=!0;try{const m=new FormData;for(const[D,F]of Object.entries(n.data()))m.append(D,F);const _=s.userData?route("paymentReceiver.update",s.userData.id):route("paymentReceiver.create"),$=await axios["post"](_,m);T.fire({title:"Success!",text:s.userData?"User updated successfully":"User created successfully",icon:"success",confirmButtonText:"OK"}),x(),n.reset(),f("createComplete",!0)}catch(m){m.response&&m.response.data.errors?n.errors=m.response.data.errors:T.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}finally{o.value=!1}},G=async()=>{try{const{data:m}=await axios.get(route("currency.listShortCode"));g.value=m}catch(m){C.value=m}};return q(()=>{G()}),(m,_)=>(l(),c("section",{class:R({"space-y-6":v.hasTopSpacing})},[v.canView?(l(),j(A,{key:0,class:"mr-2",onClick:k},{default:y(()=>_[5]||(_[5]=[V("View")])),_:1})):ee("",!0),t(A,{class:"mr-2",onClick:i},{default:y(()=>[V(h(s.userData?"Edit":"Create"),1)]),_:1}),t(O,{show:u.value,onClose:i},{default:y(()=>[e("form",{onSubmit:H(L,["prevent"]),class:"p-6 space-y-4"},[o.value?(l(),c("div",je,[t(U,{class:"mt-32 mb-32"})])):(l(),c("div",Me,[e("h2",De,h(s.userData?"Edit":"Create")+" Bank Details ",1),e("div",Fe,[e("div",null,[t(w,{for:"name",value:"Name"}),t(M,{id:"name",modelValue:r(n).name,"onUpdate:modelValue":_[0]||(_[0]=b=>r(n).name=b),placeholder:"Full Name",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(S,{message:r(n).errors.name,class:"mt-2"},null,8,["message"])]),e("div",null,[t(w,{for:"bank_name",value:"Bank Name"}),t(M,{id:"bank_name",modelValue:r(n).bank_name,"onUpdate:modelValue":_[1]||(_[1]=b=>r(n).bank_name=b),placeholder:"Bank Name",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(S,{message:r(n).errors.bank_name,class:"mt-2"},null,8,["message"])]),e("div",null,[t(w,{for:"bank_account_no",value:"Bank Account Number"}),t(M,{id:"bank_account_no",modelValue:r(n).bank_account_no,"onUpdate:modelValue":_[2]||(_[2]=b=>r(n).bank_account_no=b),placeholder:"Account Number",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(S,{message:r(n).errors.bank_account_no,class:"mt-2"},null,8,["message"])]),e("div",null,[t(w,{for:"swift_code",value:"SWIFT Code"}),t(M,{id:"swift_code",modelValue:r(n).swift_code,"onUpdate:modelValue":_[3]||(_[3]=b=>r(n).swift_code=b),placeholder:"SWIFT Code",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(S,{message:r(n).errors.swift_code,class:"mt-2"},null,8,["message"])]),e("div",null,[t(w,{for:"currency_id",value:"Currency"}),te(e("select",{id:"currency_id","onUpdate:modelValue":_[4]||(_[4]=b=>r(n).currency_id=b),class:"mt-1 w-full border-gray-300 rounded-md shadow-sm"},[_[6]||(_[6]=e("option",{value:""},"Select Currency",-1)),(l(!0),c(N,null,P(g.value,(b,$)=>(l(),c("option",{key:$,value:$},h(b),9,Te))),128))],512),[[se,r(n).currency_id]]),t(S,{message:r(n).errors.currency_id,class:"mt-2"},null,8,["message"])])]),e("div",Pe,[e("button",{type:"button",onClick:i,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),t(A,{type:"submit",class:R(["ms-3",{"opacity-25":r(n).processing}]),disabled:r(n).processing},{default:y(()=>[V(h(s.userData?"Update":"Submit"),1)]),_:1},8,["class","disabled"])])]))],32)]),_:1},8,["show"]),t(O,{show:a.value,onClose:k},{default:y(()=>{var b,$,D,F,I,K;return[e("div",Ue,[_[7]||(_[7]=e("h2",{class:"text-lg font-medium text-gray-900"},"View Bank Details",-1)),e("div",Le,[e("div",null,[t(w,{for:"name",value:"Name"}),e("p",Ge,h(((b=s.userData)==null?void 0:b.name)||"N/A"),1)]),e("div",null,[t(w,{for:"bank_name",value:"Bank Name"}),e("p",Re,h((($=s.userData)==null?void 0:$.bank_name)||"N/A"),1)]),e("div",null,[t(w,{for:"bank_account_no",value:"Bank Account Number"}),e("p",Oe,h(((D=s.userData)==null?void 0:D.bank_account_no)||"N/A"),1)]),e("div",null,[t(w,{for:"swift_code",value:"SWIFT Code"}),e("p",qe,h(((F=s.userData)==null?void 0:F.swift_code)||"N/A"),1)]),e("div",null,[t(w,{for:"currency_id",value:"Currency"}),e("p",Ee,h(((K=(I=s.userData)==null?void 0:I.currency)==null?void 0:K.short_code)||"N/A"),1)])]),e("div",{class:"text-right mt-6"},[e("button",{type:"button",onClick:k,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close ")])])]}),_:1},8,["show"])],2))}},Ie={class:"w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500"},Ke={class:"flex items-center justify-center"},We={class:"flex-1"},ze={class:"flex"},He={class:"flex-1 col"},Je={class:"row"},Qe={class:"col"},Xe={class:"text-[14px] truncate"},Ye={class:"flex-1 col"},Ze={class:"row"},et={class:"col"},tt={class:"text-[14px] truncate"},st={class:"flex-1 col"},at={class:"row"},ot={class:"col"},lt={class:"text-[14px] truncate"},nt={class:"flex justify-center items-center"},it={class:"cursor-pointer hover:text-violet-600 transition-all"},rt={__name:"PaymentReceiverListTemplate",props:{data:{type:Object,required:!0}},setup(v,{emit:d}){const s=d,o=()=>{s("createComplete",!0)};return(u,a)=>{var f;return l(),c("div",Ie,[e("div",Ke,[e("div",We,[e("div",ze,[e("div",He,[a[0]||(a[0]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Name")])],-1)),e("div",Je,[e("div",Qe,[e("div",Xe,h(v.data.name),1)])])]),e("div",Ye,[a[1]||(a[1]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Bank Name")])],-1)),e("div",Ze,[e("div",et,[e("div",tt,h(v.data.bank_name),1)])])]),e("div",st,[a[2]||(a[2]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Currency")])],-1)),e("div",at,[e("div",ot,[e("div",lt,h(((f=v.data.currency)==null?void 0:f.short_code)??"-"),1)])])])])]),e("div",nt,[e("button",it,[t(Q,{userData:v.data,onCreateComplete:o,canView:!0},null,8,["userData"])])])])])}}},ct={class:"flex justify-between content-center"},dt={__name:"PaymentReceverComponent",setup(v){const d=p(2),s=()=>{d.value=Math.floor(Math.random()*100)+132},o=p([{field_name:"name",field_type:"string"},{field_name:"bank_name",field_type:"string"},{display_name:"Currency",field_name:"currency_id",field_type:"select",api:route("currency.listShortCode")}]);return(u,a)=>(l(),c("div",null,[e("div",ct,[a[0]||(a[0]=e("p",null,"Payment Receiver",-1)),t(Q,{onCreateComplete:s})]),t(E,{apiUrl:u.route("paymentReceiver.list"),createCompleteSignal:d.value,sortAndFilters:o.value,allowSorting:!1},{"list-view":y(({data:f})=>[(l(!0),c(N,null,P(f,g=>(l(),j(rt,{onCreateComplete:s,key:g.id,data:g},null,8,["data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal","sortAndFilters"])]))}},ut={class:"flex justify-between content-center"},mt={key:0},_t={key:0},ft={key:1},pt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 mt-5"},vt={class:"flex flex-col md:flex-row m-h-10 bg-gray-100"},gt={class:"w-full md:w-3/4 bg-white"},bt={class:"space-y-4"},yt={class:"tab-display","tab-name":"paymentReceiver"},ht={class:"flex items-center"},xt={class:"flex-1 p-4"},wt={class:"space-y-4"},Ct={class:"tab-display","tab-name":"paymentCategory"},kt={class:"flex items-center"},$t={class:"flex-1 p-4"},St={class:"space-y-4"},Vt={class:"tab-display","tab-name":"gstConfiguration"},At={class:"flex items-center"},Nt={class:"flex-1 p-4"},Bt={class:"space-y-4"},Mt={class:"tab-display","tab-name":"team"},Dt={class:"flex items-center"},Ft={class:"flex-1 p-4"},Tt={key:1},Pt={style:{"min-height":"80vh"},class:"flex flex-col justify-center items-center"},jt={class:"flex justify-center"},Yt={__name:"Settings",setup(v){const d=p(!1);return q(()=>{const s=B(".tab-btn"),o=B(".tab-display"),u="active bg-violet-500 text-white";o.hide(),s.first().addClass(u),o.first().show(),B("body").on("click",".tab-btn",function(){o.hide(),s.removeClass(u),B(this).addClass(u),o.filter(`[tab-name="${B(this).attr("tab-name")}"]`).show()})}),(s,o)=>(l(),c(N,null,[t(r(oe),{title:"Settings"}),t(X,null,ae({default:y(()=>[r(W)().value?(l(),c("div",mt,[d.value?(l(),c("div",_t,[t(U,{class:"mt-32"})])):(l(),c("div",ft,[e("div",pt,[e("div",vt,[o[0]||(o[0]=e("div",{class:"w-full md:w-1/4 mb-6 md:mb-0"},[e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"paymentReceiver"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Payment Receiver")])])])]),e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"paymentCategory"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Payment Category")])])])]),e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"gstConfiguration"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"GST Configuration")])])])]),e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"team"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Team")])])])])],-1)),e("div",gt,[e("div",bt,[e("div",yt,[e("div",ht,[e("div",xt,[t(dt)])])])]),e("div",wt,[e("div",Ct,[e("div",kt,[e("div",$t,[t(me)])])])]),e("div",St,[e("div",Vt,[e("div",At,[e("div",Nt,[t(Ae)])])])]),e("div",Bt,[e("div",Mt,[e("div",Dt,[e("div",Ft,[t(Be)])])])])])])])]))])):(l(),c("div",Tt,[e("div",Pt,[t(J),e("div",jt,[t(r(le),{href:s.route("dashboard")},{default:y(()=>[t(A,{class:"p-4"},{default:y(()=>o[1]||(o[1]=[V("Back To Home Page")])),_:1})]),_:1},8,["href"])])])]))]),_:2},[r(W)().value?{name:"header",fn:y(()=>[e("div",ut,[t(re,{breadcrumbs:[{title:"Settings"}]})])]),key:"0"}:void 0]),1024)],64))}};export{Yt as default};
