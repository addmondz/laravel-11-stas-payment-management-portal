import{k as n,C as T,D as q,l as E,o as c,g as m,a as l,w as b,e as U,t as d,b as e,f as A,u as _,n as N,i as K,F as j,x as z,d as I,p as G,h as H,c as J}from"./app-4V7fhS2R.js";import{_ as Q}from"./AuthenticatedLayout-EaXkpAy8.js";import{b as B,L as W,N as L}from"./LoadingComponent-C5eB2J9M.js";import{_ as X,a as Y,b as Z}from"./TextInput-BaQ0Qvo5.js";import{_ as ee}from"./Modal-D75FtwiL.js";import{P as O}from"./PrimaryButton-BOrugIjy.js";import{S as F,_ as R}from"./FilterDropdown-DUmnTFsk.js";import{_ as te}from"./BreadcrumbComponent-BVxckR1E.js";import"./ApplicationLogo-M_mRncSF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const se={class:"space-y-6"},ae={class:"text-lg font-medium text-gray-900"},oe={class:"grid grid-cols-1 gap-4 mt-4"},le={class:"text-right mt-6"},M={__name:"PaymmentCategoryForm",props:{userData:{type:Object,default:null}},setup(u,{emit:f}){const r=u,a=n(!1),C=f,$=n([]),g=n(null),s=T({name:""});q(()=>r.userData,t=>{t?s.name=t.name:s.reset()},{immediate:!0});const p=()=>{a.value=!1},x=()=>{a.value=!a.value},o=()=>s.password!==s.password_confirmation?(s.errors.password_confirmation="Passwords do not match",!1):(s.errors.password_confirmation="",!0),y=async()=>{if(!o()){F.fire({title:"Error!",text:"Passwords do not match.",icon:"error",confirmButtonText:"OK"});return}try{const t=new FormData;for(const[D,V]of Object.entries(s.data()))t.append(D,V);const h=r.userData?route("paymentCategory.update",r.userData.id):route("paymentCategory.create"),P=await axios["post"](h,t);F.fire({title:"Success!",text:r.userData?"User updated successfully":"User created successfully",icon:"success",confirmButtonText:"OK"}),p(),s.reset(),C("createComplete",!0)}catch(t){console.log(t),t.response&&t.response.data.errors?s.errors=t.response.data.errors:F.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}},k=async()=>{try{const{data:t}=await axios.get(route("approvalRoles.list"));$.value=t}catch(t){g.value=t}};return E(()=>{k()}),(t,h)=>(c(),m("section",se,[l(O,{onClick:x},{default:b(()=>[U(d(r.userData?"Edit":"Create"),1)]),_:1}),l(ee,{show:a.value,onClose:x},{default:b(()=>[e("form",{onSubmit:A(y,["prevent"]),class:"p-6 space-y-4"},[e("h2",ae,d(r.userData?"Edit Payment Category":"Create a New Payment Category"),1),e("div",oe,[e("div",null,[l(X,{for:"name",value:"Name"}),l(Y,{id:"name",modelValue:_(s).name,"onUpdate:modelValue":h[0]||(h[0]=w=>_(s).name=w),placeholder:"Full Name",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),l(Z,{message:_(s).errors.name,class:"mt-2"},null,8,["message"])])]),e("div",le,[e("button",{type:"button",onClick:x,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),l(O,{type:"submit",class:N(["ms-3",{"opacity-25":_(s).processing}]),disabled:_(s).processing},{default:b(()=>[U(d(r.userData?"Update":"Submit"),1)]),_:1},8,["class","disabled"])])],32)]),_:1},8,["show"])]))}},re={class:"w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500"},ne={class:"flex"},ie={class:"flex-1"},ce={class:"grid lg:grid-cols-4 grid-cols-2 gap-x-4 gap-y-4"},de={class:"col"},ue={class:"row"},me={class:"col"},ve={class:""},_e={class:"col"},pe={class:"row"},fe={class:"col"},ge={class:""},ye={class:"col"},he={class:"row"},xe={class:"col"},be={class:""},we={class:"col"},Ce={class:"row"},$e={class:"col"},ke={class:""},Pe={class:"flex justify-center items-center"},De={class:"cursor-pointer hover:text-violet-600 transition-all"},Ve={__name:"PaymentCategoryListTemplate",props:{data:{type:Object,required:!0}},setup(u){const f=u;return n(!1),K(()=>f.order.items.reduce((r,a)=>r+a.quantity,0)),(r,a)=>(c(),m("div",re,[e("div",ne,[e("div",ie,[e("div",ce,[e("div",de,[a[0]||(a[0]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"ID")])],-1)),e("div",ue,[e("div",me,[e("div",ve,d(u.data.id),1)])])]),e("div",_e,[a[1]||(a[1]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Name")])],-1)),e("div",pe,[e("div",fe,[e("div",ge,d(u.data.name),1)])])]),e("div",ye,[a[2]||(a[2]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Created At")])],-1)),e("div",he,[e("div",xe,[e("div",be,d(_(B)(u.data.created_at)),1)])])]),e("div",we,[a[3]||(a[3]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Created At")])],-1)),e("div",Ce,[e("div",$e,[e("div",ke,d(_(B)(u.data.created_at)),1)])])])])]),e("div",Pe,[e("button",De,[l(M,{userData:u.data},null,8,["userData"])])])])]))}},Fe={class:"flex justify-between content-center"},Ne={key:0},Se={key:1},Ue={key:0,class:"py-12"},je={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0"},Be={class:"grid md:grid-cols-4 gap-4 mb-5 hidden"},Le={class:"grid md:grid-cols gap-4 mb-5"},Oe={key:0},Re={class:"flex justify-between w-full"},Ee={class:"flex justify-end flex-1"},Me=["disabled"],Te=["disabled"],qe={key:1},Ye={__name:"PaymentCategory",setup(u){const f=n(!0),r=n([]),a=n([]),C=n([]),$=n(null),g=n(null),s=n(null),p=n(null),x=n(9),o=n(1),y=n(0),k=route("paymentCategory.list"),t=async(S=1)=>{try{const v=new URLSearchParams({limit:x.value,page:S,brand:g.value??"",category:s.value??""}).toString(),{data:i}=await z.get(`${k}?${v}`);r.value=i.data.data,p.value=i.data,y.value=i.data.last_page}catch(v){$.value=v}finally{f.value=!1}};E(()=>{t(o.value)});const h=()=>{o.value>=y.value||(o.value+=1,t(o.value))},w=()=>{o.value<=1||(o.value-=1,t(o.value))},P=()=>{o.value=1,t(o.value)},D=()=>{g.value=null,s.value=null,P()},V=()=>{t(o.value)};return(S,v)=>(c(),m(j,null,[l(_(I),{title:"Users"}),l(Q,null,{header:b(()=>[e("div",Fe,[l(te,{breadcrumbs:[{title:"Settings"},{title:"Payment Category"}]}),l(M,{onCreateComplete:V})])]),default:b(()=>[f.value?(c(),m("div",Ne,[l(W,{class:"mt-32"})])):(c(),m("div",Se,[p.value?(c(),m("div",Ue,[e("div",je,[e("div",Be,[l(R,{class:"w-full mr-5",label:"a brand",modelValue:g.value,"onUpdate:modelValue":v[0]||(v[0]=i=>g.value=i),options:C.value},null,8,["modelValue","options"]),l(R,{class:"w-full mr-5",label:"a category",modelValue:s.value,"onUpdate:modelValue":v[1]||(v[1]=i=>s.value=i),options:a.value},null,8,["modelValue","options"]),e("button",{class:"bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded ml-2",onClick:D},"Reset Filters"),e("button",{class:"bg-violet-500 hover:bg-violet-700 text-white py-2 px-4 rounded ml-2",onClick:P},"Search")]),e("div",Le,[(c(!0),m(j,null,G(r.value,i=>(c(),J(Ve,{key:i.id,data:i},null,8,["data"]))),128))]),r.value.length===0||r.value==[]?(c(),m("div",Oe,[l(L)])):H("",!0),e("div",Re,[e("div",null,[e("p",null,"Showing "+d(p.value.from??0)+" to "+d(p.value.to??0)+" of "+d(p.value.total)+" entries ",1)]),e("div",Ee,[e("button",{class:N(["bg-white hover:bg-gray-200 text-gray py-2 px-4 rounded ml-2",[{"cursor-not-allowed":o.value==1}]]),onClick:w,disabled:o.value==1},"Previous Page",10,Me),e("button",{class:N(["bg-black hover:bg-gray-700 text-white py-2 px-4 rounded ml-2",[{"cursor-not-allowed":o.value==y.value}]]),disabled:o.value==y.value,onClick:h},"Next Page",10,Te)])])])])):(c(),m("div",qe,[l(L)]))]))]),_:1})],64))}};export{Ye as default};
