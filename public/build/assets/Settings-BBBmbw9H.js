import{_ as W,a as L}from"./AuthenticatedLayout-BcUvgg9F.js";import{l as v,o as l,g as c,b as e,a as t,w as y,F as $,s as P,c as N,C as G,e as A,f as R,u as i,n as O,p as U,t as x,A as H,m as J,j as Q,q as X,G as Y,d as Z,P as ee}from"./app-BO-iAwN0.js";import{L as B,N as q}from"./NotFound-BhHfzR3u.js";import{_ as te,a as se}from"./PaymentCategoryListTemplate-TpdTo6n_.js";import{_ as D}from"./ListComponent-D4bZFfGO.js";import{_ as C}from"./InputError-VSG9Md0o.js";import{_ as w,a as S}from"./TextInput-BRN9kaBJ.js";import{M as E}from"./Modal-Y894GtZV.js";import{P as M}from"./PrimaryButton-DhK2kd3z.js";import{S as F,b as ae}from"./helpers-DIC7V3ee.js";import{_ as oe}from"./BreadcrumbComponent-BDgHYgwK.js";import{_ as le,a as ne}from"./UsersListTemplate-DdISFF0k.js";import{$ as k}from"./jquery-CXgzWLe7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DateRangeComponent-BfYWX09B.js";const ie={class:"flex justify-between content-center"},re={__name:"PaymentCategoryComponent",setup(f){const u=v(2),n=()=>{u.value=Math.floor(Math.random()*100)+132};return(o,m)=>(l(),c("div",null,[e("div",ie,[m[0]||(m[0]=e("p",null,"Payment Category",-1)),t(te,{onCreateComplete:n})]),t(D,{apiUrl:o.route("paymentCategory.list"),createCompleteSignal:u.value,hasSearchBox:!0},{"list-view":y(({data:s})=>[(l(!0),c($,null,P(s,_=>(l(),N(se,{onCreateComplete:n,key:_.id,data:_},null,8,["data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal"])]))}},ce={key:0},de={key:1},ue={class:"grid grid-cols-1 gap-4 mt-4"},me={class:"text-right mt-6"},_e={__name:"GstConfigurationForm",props:{gstPercentage:{type:[Number,String],default:null}},setup(f,{emit:u}){const n=u,o=v(!1),s=G({value:f.gstPercentage||0}),_=v(!1),g=()=>_.value=!_.value,a=async()=>{o.value=!0;try{const b=new FormData;for(const[d,p]of Object.entries(s.data()))b.append(d,p);const r=route("variables.updateGst");await axios["post"](r,b),F.fire({title:"Success!",text:"GST updated successfully",icon:"success",confirmButtonText:"OK"}),g(),s.reset(),n("createComplete",!0)}catch(b){b.response&&b.response.data.errors?s.errors=b.response.data.errors:F.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}finally{o.value=!1}},T=b=>{let r=b.target.value;r=r.replace(/[^0-9]/g,""),r.length>1&&(r=r.replace(/^0+/,"")),r&&(r=r.length<=2?`0.${r.padStart(2,"0")}`:`${r.slice(0,-2)}.${r.slice(-2)}`),s.value=r};return(b,r)=>(l(),c("section",null,[t(M,{onClick:g},{default:y(()=>r[1]||(r[1]=[A("Edit")])),_:1}),t(E,{show:_.value,onClose:g},{default:y(()=>[e("form",{onSubmit:R(a,["prevent"]),class:"p-6 space-y-4"},[o.value?(l(),c("div",ce,[t(B,{class:"mt-32 mb-32"})])):(l(),c("div",de,[r[3]||(r[3]=e("h2",{class:"text-lg font-medium"},"Edit GST Percentage",-1)),e("div",ue,[e("div",null,[t(w,{for:"gst",value:"Gst Amount"}),t(S,{id:"gst",modelValue:i(s).value,"onUpdate:modelValue":r[0]||(r[0]=V=>i(s).value=V),class:"mt-1 block w-full",required:"",onKeyup:T},null,8,["modelValue"]),t(C,{message:i(s).errors.gst,class:"mt-2"},null,8,["message"])])]),e("div",me,[e("button",{type:"button",onClick:g,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),t(M,{type:"submit",class:O(["ms-3",{"opacity-25":i(s).processing}]),disabled:i(s).processing},{default:y(()=>r[2]||(r[2]=[A(" Submit ")])),_:1},8,["class","disabled"])])]))],32)]),_:1},8,["show"])]))}},fe={key:0},pe={key:1},ve={key:0,class:"pt-12"},ge={class:"grid md:grid-cols gap-4 mb-5"},be={class:"w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-3 rounded overflow-hidden bg-white transition-all duration-500"},ye={class:"flex"},he={class:"flex-1"},xe={class:"text-2xl"},Ce={class:"flex"},we={key:1},$e={__name:"GstSettingsComponent",setup(f){const u=v(!0),n=v(null),o=v(1),m=route("variables.fetchesGst"),s=async(g=1)=>{try{const{data:a}=await H.get(`${m}`);o.value=a}catch(a){n.value=a}finally{u.value=!1}};U(()=>{s()});const _=()=>{s()};return(g,a)=>(l(),c($,null,[a[0]||(a[0]=e("div",{class:"flex justify-between content-center"},[e("p",null,"GST Configuration")],-1)),u.value?(l(),c("div",fe,[t(B,{class:"mt-20 mb-20"})])):(l(),c("div",pe,[o.value?(l(),c("div",ve,[e("div",ge,[e("div",be,[e("div",ye,[e("div",he,[e("p",xe,x(o.value.toFixed(2))+" %",1)]),e("div",Ce,[t(_e,{gstPercentage:o.value.toFixed(2),onCreateComplete:_},null,8,["gstPercentage"])])])])])])):(l(),c("div",we,[t(q)]))]))],64))}},ke={class:"flex justify-between content-center"},Se={__name:"TeamComponent",setup(f){const u=v(2),n=()=>{u.value=Math.floor(Math.random()*100)+132},o=v([{field_name:"email",field_type:"string"},{field_name:"name",field_type:"string"},{field_name:"role",field_type:"select",options:{user:"user",finance:"finance",admin:"admin"}},{field_name:"approval_privillage",field_type:"select",options:{1:"L1 Approval Members",2:"L2 Approval Members",3:"L3 Approval Members"}},{field_name:"status",field_type:"select",options:{active:"Active",inactive:"Inactive"}}]);return(m,s)=>(l(),c("div",null,[e("div",ke,[s[0]||(s[0]=e("p",null,"Team Accounts",-1)),t(le,{onCreateComplete:n})]),t(D,{apiUrl:m.route("users.list"),createCompleteSignal:u.value,sortAndFilters:o.value,allowSorting:!1},{"list-view":y(({data:_})=>[(l(!0),c($,null,P(_,g=>(l(),N(ne,{onCreateComplete:n,key:g.id,data:g},null,8,["data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal","sortAndFilters"])]))}},Ae={class:"space-y-6"},Me={key:0},Ve={class:"text-lg font-medium text-gray-900"},Fe={class:"grid grid-cols-1 gap-4 mt-4"},Pe=["value"],Be={class:"text-right mt-6"},Te={key:1},K={__name:"PaymentReceiverForm",props:{userData:{type:Object,default:null}},setup(f,{emit:u}){const n=f,o=v(!1),m=v(!1),s=u,_=v([]),g=v(null),a=G({name:"",bank_name:"",bank_account_no:"",swift_code:"",currency_id:""});J(()=>n.userData,d=>{d?(a.name=d.name,a.bank_name=d.bank_name,a.bank_account_no=d.bank_account_no,a.swift_code=d.swift_code,a.currency_id=d.currency_id):a.reset()},{immediate:!0});const T=()=>{m.value=!1},b=()=>{m.value=!m.value},r=async()=>{o.value=!0;try{const d=new FormData;for(const[I,z]of Object.entries(a.data()))d.append(I,z);const p=n.userData?route("paymentReceiver.update",n.userData.id):route("paymentReceiver.create"),j=await axios["post"](p,d);F.fire({title:"Success!",text:n.userData?"User updated successfully":"User created successfully",icon:"success",confirmButtonText:"OK"}),T(),a.reset(),s("createComplete",!0)}catch(d){d.response&&d.response.data.errors?a.errors=d.response.data.errors:F.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}finally{o.value=!1}},V=async()=>{try{const{data:d}=await axios.get(route("currency.listShortCode"));_.value=d}catch(d){g.value=d}};return U(()=>{V()}),(d,p)=>(l(),c("section",Ae,[t(M,{onClick:b},{default:y(()=>[A(x(n.userData?"Edit":"Create"),1)]),_:1}),t(E,{show:m.value,onClose:b},{default:y(()=>[e("form",{onSubmit:R(r,["prevent"]),class:"p-6 space-y-4"},[o.value?(l(),c("div",Te,[t(B,{class:"mt-32 mb-32"})])):(l(),c("div",Me,[e("h2",Ve,x(n.userData?"Edit":"Create")+" Bank Details ",1),e("div",Fe,[e("div",null,[t(w,{for:"name",value:"Name"}),t(S,{id:"name",modelValue:i(a).name,"onUpdate:modelValue":p[0]||(p[0]=h=>i(a).name=h),placeholder:"Full Name",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(C,{message:i(a).errors.name,class:"mt-2"},null,8,["message"])]),e("div",null,[t(w,{for:"bank_name",value:"Bank Name"}),t(S,{id:"bank_name",modelValue:i(a).bank_name,"onUpdate:modelValue":p[1]||(p[1]=h=>i(a).bank_name=h),placeholder:"Bank Name",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(C,{message:i(a).errors.bank_name,class:"mt-2"},null,8,["message"])]),e("div",null,[t(w,{for:"bank_account_no",value:"Bank Account Number"}),t(S,{id:"bank_account_no",modelValue:i(a).bank_account_no,"onUpdate:modelValue":p[2]||(p[2]=h=>i(a).bank_account_no=h),placeholder:"Account Number",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(C,{message:i(a).errors.bank_account_no,class:"mt-2"},null,8,["message"])]),e("div",null,[t(w,{for:"swift_code",value:"SWIFT Code"}),t(S,{id:"swift_code",modelValue:i(a).swift_code,"onUpdate:modelValue":p[3]||(p[3]=h=>i(a).swift_code=h),placeholder:"SWIFT Code",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(C,{message:i(a).errors.swift_code,class:"mt-2"},null,8,["message"])]),e("div",null,[t(w,{for:"currency_id",value:"Currency"}),Q(e("select",{id:"currency_id","onUpdate:modelValue":p[4]||(p[4]=h=>i(a).currency_id=h),class:"mt-1 w-full border-gray-300 rounded-md shadow-sm"},[p[5]||(p[5]=e("option",{value:""},"Select Currency",-1)),(l(!0),c($,null,P(_.value,(h,j)=>(l(),c("option",{key:j,value:j},x(h),9,Pe))),128))],512),[[X,i(a).currency_id]]),t(C,{message:i(a).errors.currency_id,class:"mt-2"},null,8,["message"])])]),e("div",Be,[e("button",{type:"button",onClick:b,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),t(M,{type:"submit",class:O(["ms-3",{"opacity-25":i(a).processing}]),disabled:i(a).processing},{default:y(()=>[A(x(n.userData?"Update":"Submit"),1)]),_:1},8,["class","disabled"])])]))],32)]),_:1},8,["show"])]))}},je={class:"w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500"},Ne={class:"flex"},Ue={class:"flex-1"},De={class:"grid lg:grid-cols-6 grid-cols-2 gap-x-4 gap-y-4"},Le={class:"col"},Ge={class:"row"},Re={class:"col"},Oe={class:"text-[14px] truncate"},qe={class:"col"},Ee={class:"row"},Ke={class:"col"},Ie={class:"text-[14px] truncate"},ze={class:"col"},We={class:"row"},He={class:"col"},Je={class:"text-[14px] capitalize truncate"},Qe={class:"col"},Xe={class:"row"},Ye={class:"col"},Ze={class:"text-[14px] truncate"},et={class:"col"},tt={class:"row"},st={class:"col"},at={class:"text-[14px] truncate"},ot={class:"col"},lt={class:"row"},nt={class:"col"},it={class:"text-[14px] truncate"},rt={class:"flex justify-center items-center"},ct={class:"cursor-pointer hover:text-violet-600 transition-all"},dt={__name:"PaymentReceiverListTemplate",props:{data:{type:Object,required:!0}},setup(f,{emit:u}){const n=u,o=()=>{n("createComplete",!0)};return(m,s)=>{var _;return l(),c("div",je,[e("div",Ne,[e("div",Ue,[e("div",De,[e("div",Le,[s[0]||(s[0]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Name")])],-1)),e("div",Ge,[e("div",Re,[e("div",Oe,x(f.data.name),1)])])]),e("div",qe,[s[1]||(s[1]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Bank Name")])],-1)),e("div",Ee,[e("div",Ke,[e("div",Ie,x(f.data.bank_name),1)])])]),e("div",ze,[s[2]||(s[2]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Bank Account No")])],-1)),e("div",We,[e("div",He,[e("div",Je,x(f.data.bank_account_no),1)])])]),e("div",Qe,[s[3]||(s[3]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Swift Code")])],-1)),e("div",Xe,[e("div",Ye,[e("div",Ze,x(f.data.swift_code??"-"),1)])])]),e("div",et,[s[4]||(s[4]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Currency")])],-1)),e("div",tt,[e("div",st,[e("div",at,x(((_=f.data.currency)==null?void 0:_.short_code)??"-"),1)])])]),e("div",ot,[s[5]||(s[5]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Created At")])],-1)),e("div",lt,[e("div",nt,[e("div",it,x(i(ae)(f.data.created_at)),1)])])])])]),e("div",rt,[e("button",ct,[t(K,{userData:f.data,onCreateComplete:o},null,8,["userData"])])])])])}}},ut={class:"flex justify-between content-center"},mt={__name:"PaymentReceverComponent",setup(f){const u=v(2),n=()=>{u.value=Math.floor(Math.random()*100)+132},o=v([{field_name:"name",field_type:"string"},{field_name:"bank_name",field_type:"string"},{display_name:"Currency",field_name:"currency_id",field_type:"select",api:route("currency.listShortCode")}]);return(m,s)=>(l(),c("div",null,[e("div",ut,[s[0]||(s[0]=e("p",null,"Payment Receiver",-1)),t(K,{onCreateComplete:n})]),t(D,{apiUrl:m.route("paymentReceiver.list"),createCompleteSignal:u.value,sortAndFilters:o.value,allowSorting:!1},{"list-view":y(({data:_})=>[(l(!0),c($,null,P(_,g=>(l(),N(dt,{onCreateComplete:n,key:g.id,data:g},null,8,["data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal","sortAndFilters"])]))}},_t={class:"flex justify-between content-center"},ft={key:0},pt={key:0},vt={key:1},gt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 mt-5"},bt={class:"flex flex-col md:flex-row m-h-10 bg-gray-100"},yt={class:"w-full md:w-3/4 bg-white"},ht={class:"space-y-4"},xt={class:"tab-display","tab-name":"paymentCategory"},Ct={class:"flex items-center"},wt={class:"flex-1 p-4"},$t={class:"space-y-4"},kt={class:"tab-display","tab-name":"gstConfiguration"},St={class:"flex items-center"},At={class:"flex-1 p-4"},Mt={class:"space-y-4"},Vt={class:"tab-display","tab-name":"team"},Ft={class:"flex items-center"},Pt={class:"flex-1 p-4"},Bt={class:"space-y-4"},Tt={class:"tab-display","tab-name":"paymentReceiver"},jt={class:"flex items-center"},Nt={class:"flex-1 p-4"},Ut={key:1},Dt={style:{"min-height":"80vh"},class:"flex flex-col justify-center items-center"},Lt={class:"flex justify-center"},es={__name:"Settings",setup(f){const u=v(!1);return U(()=>{const n=k(".tab-btn"),o=k(".tab-display"),m="active bg-violet-500 text-white";o.hide(),n.first().addClass(m),o.first().show(),k("body").on("click",".tab-btn",function(){o.hide(),n.removeClass(m),k(this).addClass(m),o.filter(`[tab-name="${k(this).attr("tab-name")}"]`).show()})}),(n,o)=>(l(),c($,null,[t(i(Z),{title:"Settings"}),t(W,null,Y({default:y(()=>[i(L)().value?(l(),c("div",ft,[u.value?(l(),c("div",pt,[t(B,{class:"mt-32"})])):(l(),c("div",vt,[e("div",gt,[e("div",bt,[o[0]||(o[0]=e("div",{class:"w-full md:w-1/4 mb-6 md:mb-0"},[e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"paymentCategory"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Payment Category")])])])]),e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"gstConfiguration"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"GST Configuration")])])])]),e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"team"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Team")])])])]),e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"paymentReceiver"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Payment Receiver")])])])])],-1)),e("div",yt,[e("div",ht,[e("div",xt,[e("div",Ct,[e("div",wt,[t(re)])])])]),e("div",$t,[e("div",kt,[e("div",St,[e("div",At,[t($e)])])])]),e("div",Mt,[e("div",Vt,[e("div",Ft,[e("div",Pt,[t(Se)])])])]),e("div",Bt,[e("div",Tt,[e("div",jt,[e("div",Nt,[t(mt)])])])])])])])]))])):(l(),c("div",Ut,[e("div",Dt,[t(q),e("div",Lt,[t(i(ee),{href:n.route("dashboard")},{default:y(()=>[t(M,{class:"p-4"},{default:y(()=>o[1]||(o[1]=[A("Back To Home Page")])),_:1})]),_:1},8,["href"])])])]))]),_:2},[i(L)().value?{name:"header",fn:y(()=>[e("div",_t,[t(oe,{breadcrumbs:[{title:"Settings"}]})])]),key:"0"}:void 0]),1024)],64))}};export{es as default};
