import{L as k,S as h,b as N}from"./sweetalert2.esm.all-bmwRQBq0.js";import{l as m,C as B,D as P,o as f,g as _,a as o,w as v,e as x,t as d,b as e,f as S,u as l,n as V}from"./app-4qLkCMgE.js";import{_ as j,a as O,b as U}from"./TextInput-AKo3xJBr.js";import{_ as E}from"./Modal-wSH_fjON.js";import{P as b}from"./PrimaryButton-Bdnhur8m.js";const L={class:"space-y-6"},M={key:0},T={class:"text-lg font-medium text-gray-900"},F={class:"grid grid-cols-1 gap-4 mt-4"},q={class:"text-right mt-6"},A={key:1},K={__name:"PaymentCategoryForm",props:{userData:{type:Object,default:null}},setup(i,{emit:p}){const a=i,n=m(!1),c=m(!1),r=p;m([]),m(null);const t=B({name:""});P(()=>a.userData,s=>{s?t.name=s.name:t.reset()},{immediate:!0});const C=()=>{c.value=!1},g=()=>{c.value=!c.value},w=async()=>{n.value=!0;try{const s=new FormData;for(const[D,$]of Object.entries(t.data()))s.append(D,$);const u=a.userData?route("paymentCategory.update",a.userData.id):route("paymentCategory.create"),ae=await axios["post"](u,s);h.fire({title:"Success!",text:a.userData?"User updated successfully":"User created successfully",icon:"success",confirmButtonText:"OK"}),C(),t.reset(),r("createComplete",!0)}catch(s){s.response&&s.response.data.errors?t.errors=s.response.data.errors:h.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}finally{n.value=!1}};return(s,u)=>(f(),_("section",L,[o(b,{onClick:g},{default:v(()=>[x(d(a.userData?"Edit":"Create"),1)]),_:1}),o(E,{show:c.value,onClose:g},{default:v(()=>[e("form",{onSubmit:S(w,["prevent"]),class:"p-6 space-y-4"},[n.value?(f(),_("div",A,[o(k,{class:"mt-32 mb-32"})])):(f(),_("div",M,[e("h2",T,d(a.userData?"Edit Payment Category":"Create a New Payment Category"),1),e("div",F,[e("div",null,[o(j,{for:"name",value:"Name"}),o(O,{id:"name",modelValue:l(t).name,"onUpdate:modelValue":u[0]||(u[0]=y=>l(t).name=y),placeholder:"Full Name",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),o(U,{message:l(t).errors.name,class:"mt-2"},null,8,["message"])])]),e("div",q,[e("button",{type:"button",onClick:g,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),o(b,{type:"submit",class:V(["ms-3",{"opacity-25":l(t).processing}]),disabled:l(t).processing},{default:v(()=>[x(d(a.userData?"Update":"Submit"),1)]),_:1},8,["class","disabled"])])]))],32)]),_:1},8,["show"])]))}},z={class:"w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-3 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500"},G={class:"flex"},H={class:"flex-1"},I={class:"grid lg:grid-cols-2 grid-cols-2 gap-x-4 gap-y-4"},J={class:"col"},Q={class:"row"},R={class:"col"},W={class:""},X={class:"col"},Y={class:"row"},Z={class:"col"},ee={class:""},te={class:"flex justify-center items-center"},se={class:"cursor-pointer hover:text-violet-600 transition-all"},ce={__name:"PaymentCategoryListTemplate",props:{data:{type:Object,required:!0}},setup(i,{emit:p}){const a=p,n=()=>{a("createComplete",!0)};return(c,r)=>(f(),_("div",z,[e("div",G,[e("div",H,[e("div",I,[e("div",J,[r[0]||(r[0]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Name")])],-1)),e("div",Q,[e("div",R,[e("div",W,d(i.data.name),1)])])]),e("div",X,[r[1]||(r[1]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Created At")])],-1)),e("div",Y,[e("div",Z,[e("div",ee,d(l(N)(i.data.created_at)),1)])])])])]),e("div",te,[e("button",se,[o(K,{userData:i.data,onCreateComplete:n},null,8,["userData"])])])])]))}};export{K as _,ce as a};
