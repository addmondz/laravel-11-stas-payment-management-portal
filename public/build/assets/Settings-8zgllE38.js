import{_ as W,a as L}from"./AuthenticatedLayout-Bd9INCbe.js";import{l as v,o as l,g as c,b as e,a as t,w as y,F as w,m as B,c as N,C as R,e as A,f as G,u as i,n as E,q as U,t as x,z as H,p as J,j as Q,s as X,E as Y,d as Z,P as ee}from"./app-BTM8O_fb.js";import{L as M,S as P,N as O,b as te}from"./sweetalert2.esm.all-D3EUOiww.js";import{_ as se,a as ae}from"./PaymentCategoryListTemplate-mSf4TQ0b.js";import{_ as D}from"./ListComponent-j5SRr5p3.js";import{_ as C}from"./InputError-D-sKlGXo.js";import{_ as $,a as S}from"./TextInput-2rif22Kl.js";import{_ as q}from"./Modal-CzPkb-Zj.js";import{P as V}from"./PrimaryButton-QeEPN7vx.js";import{_ as oe}from"./BreadcrumbComponent-CiKsqjD7.js";import{_ as le,a as ne}from"./UsersListTemplate-kMHSN1Ba.js";import{$ as k}from"./jquery-Dk08URyJ.js";import"./ApplicationLogo-M_mRncSF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ie={class:"flex justify-between content-center"},re={__name:"PaymentCategoryComponent",setup(f){const m=v(2),n=()=>{m.value=Math.floor(Math.random()*100)+132};return(o,d)=>(l(),c("div",null,[e("div",ie,[d[0]||(d[0]=e("p",null,"Payment Category",-1)),t(se,{onCreateComplete:n})]),t(D,{apiUrl:o.route("paymentCategory.list"),createCompleteSignal:m.value,hasSearchBox:!0},{"list-view":y(({data:s})=>[(l(!0),c(w,null,B(s,_=>(l(),N(ae,{onCreateComplete:n,key:_.id,data:_},null,8,["data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal"])]))}},ce={key:0},de={key:1},ue={class:"grid grid-cols-1 gap-4 mt-4"},me={class:"text-right mt-6"},_e={__name:"GstConfigurationForm",props:{gstPercentage:{type:[Number,String],default:null}},setup(f,{emit:m}){const n=m,o=v(!1),s=R({value:f.gstPercentage||0}),_=v(!1),g=()=>_.value=!_.value,a=async()=>{o.value=!0;try{const b=new FormData;for(const[u,p]of Object.entries(s.data()))b.append(u,p);const r=route("variables.updateGst");await axios["post"](r,b),P.fire({title:"Success!",text:"GST updated successfully",icon:"success",confirmButtonText:"OK"}),g(),s.reset(),n("createComplete",!0)}catch(b){b.response&&b.response.data.errors?s.errors=b.response.data.errors:P.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}finally{o.value=!1}},T=b=>{let r=b.target.value;r=r.replace(/[^0-9]/g,""),r.length>1&&(r=r.replace(/^0+/,"")),r&&(r=r.length<=2?`0.${r.padStart(2,"0")}`:`${r.slice(0,-2)}.${r.slice(-2)}`),s.value=r};return(b,r)=>(l(),c("section",null,[t(V,{onClick:g},{default:y(()=>r[1]||(r[1]=[A("Edit")])),_:1}),t(q,{show:_.value,onClose:g},{default:y(()=>[e("form",{onSubmit:G(a,["prevent"]),class:"p-6 space-y-4"},[o.value?(l(),c("div",ce,[t(M,{class:"mt-32 mb-32"})])):(l(),c("div",de,[r[3]||(r[3]=e("h2",{class:"text-lg font-medium"},"Edit GST Percentage",-1)),e("div",ue,[e("div",null,[t($,{for:"gst",value:"Gst Amount"}),t(S,{id:"gst",modelValue:i(s).value,"onUpdate:modelValue":r[0]||(r[0]=F=>i(s).value=F),class:"mt-1 block w-full",required:"",onKeyup:T},null,8,["modelValue"]),t(C,{message:i(s).errors.gst,class:"mt-2"},null,8,["message"])])]),e("div",me,[e("button",{type:"button",onClick:g,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),t(V,{type:"submit",class:E(["ms-3",{"opacity-25":i(s).processing}]),disabled:i(s).processing},{default:y(()=>r[2]||(r[2]=[A(" Submit ")])),_:1},8,["class","disabled"])])]))],32)]),_:1},8,["show"])]))}},fe={key:0},pe={key:1},ve={key:0,class:"pt-12"},ge={class:"grid md:grid-cols gap-4 mb-5"},be={class:"w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-3 rounded overflow-hidden bg-white transition-all duration-500"},ye={class:"flex"},he={class:"flex-1"},xe={class:"text-2xl"},Ce={class:"flex"},$e={key:1},we={__name:"GstSettingsComponent",setup(f){const m=v(!0),n=v(null),o=v(1),d=route("variables.fetchesGst"),s=async(g=1)=>{try{const{data:a}=await H.get(`${d}`);o.value=a}catch(a){n.value=a}finally{m.value=!1}};U(()=>{s()});const _=()=>{s()};return(g,a)=>(l(),c(w,null,[a[0]||(a[0]=e("div",{class:"flex justify-between content-center"},[e("p",null,"GST Configuration")],-1)),m.value?(l(),c("div",fe,[t(M,{class:"mt-20 mb-20"})])):(l(),c("div",pe,[o.value?(l(),c("div",ve,[e("div",ge,[e("div",be,[e("div",ye,[e("div",he,[e("p",xe,x(o.value.toFixed(2))+" %",1)]),e("div",Ce,[t(_e,{gstPercentage:o.value.toFixed(2),onCreateComplete:_},null,8,["gstPercentage"])])])])])])):(l(),c("div",$e,[t(O)]))]))],64))}},ke={class:"flex justify-between content-center"},Se={__name:"TeamComponent",setup(f){const m=v(2),n=()=>{m.value=Math.floor(Math.random()*100)+132},o=v([{field_name:"email",field_type:"string"},{field_name:"name",field_type:"string"},{field_name:"role",field_type:"select",options:{user:"user",finance:"finance",admin:"admin"}},{field_name:"approval_privillage",field_type:"select",options:{1:"L1 Approval Members",2:"L2 Approval Members",3:"L3 Approval Members"}}]);return(d,s)=>(l(),c("div",null,[e("div",ke,[s[0]||(s[0]=e("p",null,"Team Accounts",-1)),t(le,{onCreateComplete:n})]),t(D,{apiUrl:d.route("users.list"),createCompleteSignal:m.value,sortAndFilters:o.value,allowSorting:!1},{"list-view":y(({data:_})=>[(l(!0),c(w,null,B(_,g=>(l(),N(ne,{onCreateComplete:n,key:g.id,data:g},null,8,["data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal","sortAndFilters"])]))}},Ae={class:"space-y-6"},Ve={key:0},Fe={class:"text-lg font-medium text-gray-900"},Pe={class:"grid grid-cols-1 gap-4 mt-4"},Be=["value"],Me={class:"text-right mt-6"},Te={key:1},K={__name:"PaymentReceiverForm",props:{userData:{type:Object,default:null}},setup(f,{emit:m}){const n=f,o=v(!1),d=v(!1),s=m,_=v([]),g=v(null),a=R({name:"",bank_name:"",bank_account_no:"",swift_code:"",currency_id:""});J(()=>n.userData,u=>{u?(a.name=u.name,a.bank_name=u.bank_name,a.bank_account_no=u.bank_account_no,a.swift_code=u.swift_code,a.currency_id=u.currency_id):a.reset()},{immediate:!0});const T=()=>{d.value=!1},b=()=>{d.value=!d.value},r=async()=>{o.value=!0;try{const u=new FormData;for(const[z,I]of Object.entries(a.data()))u.append(z,I);const p=n.userData?route("paymentReceiver.update",n.userData.id):route("paymentReceiver.create"),j=await axios["post"](p,u);P.fire({title:"Success!",text:n.userData?"User updated successfully":"User created successfully",icon:"success",confirmButtonText:"OK"}),T(),a.reset(),s("createComplete",!0)}catch(u){u.response&&u.response.data.errors?a.errors=u.response.data.errors:P.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}finally{o.value=!1}},F=async()=>{try{const{data:u}=await axios.get(route("currency.listShortCode"));_.value=u}catch(u){g.value=u}};return U(()=>{F()}),(u,p)=>(l(),c("section",Ae,[t(V,{onClick:b},{default:y(()=>[A(x(n.userData?"Edit":"Create"),1)]),_:1}),t(q,{show:d.value,onClose:b},{default:y(()=>[e("form",{onSubmit:G(r,["prevent"]),class:"p-6 space-y-4"},[o.value?(l(),c("div",Te,[t(M,{class:"mt-32 mb-32"})])):(l(),c("div",Ve,[e("h2",Fe,x(n.userData?"Edit":"Create")+" Bank Details ",1),e("div",Pe,[e("div",null,[t($,{for:"name",value:"Name"}),t(S,{id:"name",modelValue:i(a).name,"onUpdate:modelValue":p[0]||(p[0]=h=>i(a).name=h),placeholder:"Full Name",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(C,{message:i(a).errors.name,class:"mt-2"},null,8,["message"])]),e("div",null,[t($,{for:"bank_name",value:"Bank Name"}),t(S,{id:"bank_name",modelValue:i(a).bank_name,"onUpdate:modelValue":p[1]||(p[1]=h=>i(a).bank_name=h),placeholder:"Bank Name",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(C,{message:i(a).errors.bank_name,class:"mt-2"},null,8,["message"])]),e("div",null,[t($,{for:"bank_account_no",value:"Bank Account Number"}),t(S,{id:"bank_account_no",modelValue:i(a).bank_account_no,"onUpdate:modelValue":p[2]||(p[2]=h=>i(a).bank_account_no=h),placeholder:"Account Number",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(C,{message:i(a).errors.bank_account_no,class:"mt-2"},null,8,["message"])]),e("div",null,[t($,{for:"swift_code",value:"SWIFT Code"}),t(S,{id:"swift_code",modelValue:i(a).swift_code,"onUpdate:modelValue":p[3]||(p[3]=h=>i(a).swift_code=h),placeholder:"SWIFT Code",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),t(C,{message:i(a).errors.swift_code,class:"mt-2"},null,8,["message"])]),e("div",null,[t($,{for:"currency_id",value:"Currency"}),Q(e("select",{id:"currency_id","onUpdate:modelValue":p[4]||(p[4]=h=>i(a).currency_id=h),class:"mt-1 w-full border-gray-300 rounded-md shadow-sm"},[p[5]||(p[5]=e("option",{value:""},"Select Currency",-1)),(l(!0),c(w,null,B(_.value,(h,j)=>(l(),c("option",{key:j,value:j},x(h),9,Be))),128))],512),[[X,i(a).currency_id]]),t(C,{message:i(a).errors.currency_id,class:"mt-2"},null,8,["message"])])]),e("div",Me,[e("button",{type:"button",onClick:b,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),t(V,{type:"submit",class:E(["ms-3",{"opacity-25":i(a).processing}]),disabled:i(a).processing},{default:y(()=>[A(x(n.userData?"Update":"Submit"),1)]),_:1},8,["class","disabled"])])]))],32)]),_:1},8,["show"])]))}},je={class:"w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500"},Ne={class:"flex"},Ue={class:"flex-1"},De={class:"grid lg:grid-cols-6 grid-cols-2 gap-x-4 gap-y-4"},Le={class:"col"},Re={class:"row"},Ge={class:"col"},Ee={class:"text-[14px] truncate"},Oe={class:"col"},qe={class:"row"},Ke={class:"col"},ze={class:"text-[14px] truncate"},Ie={class:"col"},We={class:"row"},He={class:"col"},Je={class:"text-[14px] capitalize truncate"},Qe={class:"col"},Xe={class:"row"},Ye={class:"col"},Ze={class:"text-[14px] truncate"},et={class:"col"},tt={class:"row"},st={class:"col"},at={class:"text-[14px] truncate"},ot={class:"col"},lt={class:"row"},nt={class:"col"},it={class:"text-[14px] truncate"},rt={class:"flex justify-center items-center"},ct={class:"cursor-pointer hover:text-violet-600 transition-all"},dt={__name:"PaymentReceiverListTemplate",props:{data:{type:Object,required:!0}},setup(f,{emit:m}){const n=m,o=()=>{n("createComplete",!0)};return(d,s)=>{var _;return l(),c("div",je,[e("div",Ne,[e("div",Ue,[e("div",De,[e("div",Le,[s[0]||(s[0]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Name")])],-1)),e("div",Re,[e("div",Ge,[e("div",Ee,x(f.data.name),1)])])]),e("div",Oe,[s[1]||(s[1]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Bank Name")])],-1)),e("div",qe,[e("div",Ke,[e("div",ze,x(f.data.bank_name),1)])])]),e("div",Ie,[s[2]||(s[2]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Bank Account No")])],-1)),e("div",We,[e("div",He,[e("div",Je,x(f.data.bank_account_no),1)])])]),e("div",Qe,[s[3]||(s[3]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Swift Code")])],-1)),e("div",Xe,[e("div",Ye,[e("div",Ze,x(f.data.swift_code??"-"),1)])])]),e("div",et,[s[4]||(s[4]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Currency")])],-1)),e("div",tt,[e("div",st,[e("div",at,x(((_=f.data.currency)==null?void 0:_.short_code)??"-"),1)])])]),e("div",ot,[s[5]||(s[5]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Created At")])],-1)),e("div",lt,[e("div",nt,[e("div",it,x(i(te)(f.data.created_at)),1)])])])])]),e("div",rt,[e("button",ct,[t(K,{userData:f.data,onCreateComplete:o},null,8,["userData"])])])])])}}},ut={class:"flex justify-between content-center"},mt={__name:"PaymentReceverComponent",setup(f){const m=v(2),n=()=>{m.value=Math.floor(Math.random()*100)+132},o=v([{field_name:"name",field_type:"string"},{field_name:"bank_name",field_type:"string"},{display_name:"Currency",field_name:"currency_id",field_type:"select",api:route("currency.listShortCode")}]);return(d,s)=>(l(),c("div",null,[e("div",ut,[s[0]||(s[0]=e("p",null,"Payment Receiver",-1)),t(K,{onCreateComplete:n})]),t(D,{apiUrl:d.route("paymentReceiver.list"),createCompleteSignal:d.createCompleteSigna,sortAndFilters:o.value,allowSorting:!1},{"list-view":y(({data:_})=>[(l(!0),c(w,null,B(_,g=>(l(),N(dt,{onCreateComplete:n,key:g.id,data:g},null,8,["data"]))),128))]),_:1},8,["apiUrl","createCompleteSignal","sortAndFilters"])]))}},_t={class:"flex justify-between content-center"},ft={key:0},pt={key:0},vt={key:1},gt={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 mt-5"},bt={class:"flex flex-col md:flex-row m-h-10 bg-gray-100"},yt={class:"w-full md:w-3/4 bg-white"},ht={class:"space-y-4"},xt={class:"tab-display","tab-name":"paymentCategory"},Ct={class:"flex items-center"},$t={class:"flex-1 p-4"},wt={class:"space-y-4"},kt={class:"tab-display","tab-name":"gstConfiguration"},St={class:"flex items-center"},At={class:"flex-1 p-4"},Vt={class:"space-y-4"},Ft={class:"tab-display","tab-name":"team"},Pt={class:"flex items-center"},Bt={class:"flex-1 p-4"},Mt={class:"space-y-4"},Tt={class:"tab-display","tab-name":"paymentReceiver"},jt={class:"flex items-center"},Nt={class:"flex-1 p-4"},Ut={key:1},Dt={style:{"min-height":"80vh"},class:"flex flex-col justify-center items-center"},Lt={class:"flex justify-center"},Zt={__name:"Settings",setup(f){const m=v(!1);return U(()=>{const n=k(".tab-btn"),o=k(".tab-display"),d="active bg-violet-500 text-white";o.hide(),n.first().addClass(d),o.first().show(),k("body").on("click",".tab-btn",function(){o.hide(),n.removeClass(d),k(this).addClass(d),o.filter(`[tab-name="${k(this).attr("tab-name")}"]`).show()})}),(n,o)=>(l(),c(w,null,[t(i(Z),{title:"Claims"}),t(W,null,Y({default:y(()=>[i(L)().value?(l(),c("div",ft,[m.value?(l(),c("div",pt,[t(M,{class:"mt-32"})])):(l(),c("div",vt,[e("div",gt,[e("div",bt,[o[0]||(o[0]=e("div",{class:"w-full md:w-1/4 mb-6 md:mb-0"},[e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"paymentCategory"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Payment Category")])])])]),e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"gstConfiguration"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"GST Configuration")])])])]),e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"team"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Team")])])])]),e("div",{class:"space-y-4"},[e("div",{class:"tab-btn border-4 border-white","tab-name":"paymentReceiver"},[e("div",{class:"flex items-center"},[e("div",{class:"flex-1 p-4"},[e("p",{class:"font-semibold"},"Payment Receiver")])])])])],-1)),e("div",yt,[e("div",ht,[e("div",xt,[e("div",Ct,[e("div",$t,[t(re)])])])]),e("div",wt,[e("div",kt,[e("div",St,[e("div",At,[t(we)])])])]),e("div",Vt,[e("div",Ft,[e("div",Pt,[e("div",Bt,[t(Se)])])])]),e("div",Mt,[e("div",Tt,[e("div",jt,[e("div",Nt,[t(mt)])])])])])])])]))])):(l(),c("div",Ut,[e("div",Dt,[t(O),e("div",Lt,[t(i(ee),{href:n.route("dashboard")},{default:y(()=>[t(V,{class:"p-4"},{default:y(()=>o[1]||(o[1]=[A("Back To Home Page")])),_:1})]),_:1},8,["href"])])])]))]),_:2},[i(L)().value?{name:"header",fn:y(()=>[e("div",_t,[t(oe,{breadcrumbs:[{title:"Settings"}]})])]),key:"0"}:void 0]),1024)],64))}};export{Zt as default};