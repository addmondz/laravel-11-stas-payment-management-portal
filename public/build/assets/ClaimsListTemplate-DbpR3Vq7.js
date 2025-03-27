<<<<<<<< HEAD:public/build/assets/ClaimsListTemplate-DbpR3Vq7.js
import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as c,g as v,b as e,i as w,k,a as l,h as y,t as a,u as r,c as C,n as m,w as B,P}from"./app-DdZDFx63.js";import{f as S,d as A,S as f}from"./helpers-7nY4r5ZM.js";import{a as D,D as T,_ as j}from"./CreateClaimForm-pp_Os7GJ.js";import{a as O}from"./ListComponent-B7o4GzyV.js";import{c as $}from"./AuthenticatedLayout-m1yI-08C.js";const z={},N={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"};function q(s,n){return c(),v("svg",N,n[0]||(n[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"},null,-1)]))}const K=_(z,[["render",q]]),V={class:"flex"},E={key:0,class:"flex justify-center items-center"},G={class:"flex-1"},L={class:"grid lg:grid-cols-8 grid-cols-2 gap-x-4 gap-y-4 relative isolate"},U={class:"col"},I={class:""},R={class:"col"},Y={class:""},F={class:"col"},H={class:"capitalize"},J={class:"col"},M={class:"whitespace-nowrap overflow-hidden text-ellipsis"},Q={class:"col"},W={class:"relative group"},X={class:"truncate cursor-pointer"},Z={class:"absolute invisible group-hover:visible left-0 -top-2 transform -translate-y-full w-max max-w-xs px-4 py-3 bg-gray-900/95 backdrop-blur-sm text-white text-sm font-medium rounded-lg shadow-xl transform-gpu scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out before:content-[''] before:absolute before:left-4 before:top-full before:border-8 before:border-x-transparent before:border-b-transparent before:border-t-gray-900/95 z-[9999]"},ee={class:"break-words"},te={class:"col"},se={class:"truncate"},ae={class:"col"},oe={class:"col"},ie={class:""},le={class:"flex justify-center items-center space-x-4"},re=["disabled"],ne={class:"cursor-pointer hover:text-violet-600 transition-all"},xe={__name:"ClaimsListTemplate",props:{data:{type:Object,required:!0},showGroupActions:{type:Boolean,required:!1},isSelected:{type:Boolean,required:!1,default:!1}},emits:["update-selected-list"],setup(s,{emit:n}){const x=n,u=s,g=o=>{x("update-selected-list",{isSelected:o,id:u.data.id})},d=w(()=>u.data.status_id>=2),p=()=>{f.fire({title:"Are you sure?",text:"Are you sure you want to delete this Payment?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",allowOutsideClick:!1,stopKeydownPropagation:!0,preConfirm:()=>new Promise((o,t)=>{h()})})},h=async()=>{var o,t;try{const i=await axios.post(route("claims.delete",u.data.id));x("createComplete",!0),f.fire({title:"Success!",text:"The Payment has been successfully deleted.",icon:"success",confirmButtonText:"OK"})}catch(i){console.log(i),f.fire({title:"Error!",text:((t=(o=i.response)==null?void 0:o.data)==null?void 0:t.error)||"An unexpected error occurred while deleteing the payment.",icon:"error",confirmButtonText:"OK"})}};return k(!1),(o,t)=>{var i,b;return c(),v("div",{class:m(["w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-visible bg-white hover:border-violet-600 transition-all duration-500",{"bg-violet-50 border-violet-900":s.isSelected}])},[e("div",V,[s.showGroupActions?(c(),v("div",E,[l(O,{onUpdateSelected:g,isSelected:s.isSelected,class:"block mr-5"},null,8,["isSelected"])])):y("",!0),e("div",G,[e("div",L,[e("div",U,[t[0]||(t[0]=e("div",{class:"mb-1 text-xs text-gray-500"},"ID",-1)),e("div",I,a(s.data.id),1)]),e("div",R,[t[1]||(t[1]=e("div",{class:"mb-1 text-xs text-gray-500"},"Payment To",-1)),e("div",Y,a((i=s.data.payment_receiver)==null?void 0:i.name),1)]),e("div",F,[t[2]||(t[2]=e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Category",-1)),e("div",H,a(s.data.payment_category_name),1)]),e("div",J,[t[3]||(t[3]=e("div",{class:"mb-1 text-xs text-gray-500"},"Total Amount",-1)),e("div",M,a(s.data.currency)+" "+a(r(S)(s.data.amount)),1)]),e("div",Q,[t[4]||(t[4]=e("div",{class:"mb-1 text-xs text-gray-500"},"Purpose",-1)),e("div",W,[e("div",X,a(s.data.purpose),1),e("div",Z,[e("div",ee,a(s.data.purpose),1)])])]),e("div",te,[t[5]||(t[5]=e("div",{class:"mb-1 text-xs text-gray-500"},"Created By",-1)),e("div",se,a((b=s.data.created_user)==null?void 0:b.name),1)]),e("div",ae,[t[6]||(t[6]=e("div",{class:"mb-1 text-xs text-gray-500"},"Status",-1)),l(D,{class:"overide-fs-11 inline-block w-[140px] rounded-xl",status:s.data.status,name:s.data.status_name},null,8,["status","name"])]),e("div",oe,[t[7]||(t[7]=e("div",{class:"mb-1 text-xs text-gray-500"},"Created At",-1)),e("div",ie,a(r(A)(s.data.created_at)),1)])])]),e("div",le,[r($)().value?(c(),C(r(T),{key:0,onClick:p,class:m(["mb-3 mr-2",{invisible:d.value}]),disabled:d.value},null,8,["class","disabled"])):y("",!0),e("div",{class:m({invisible:d.value}),disabled:d.value},[l(j,{claimData:s.data},null,8,["claimData"])],10,re),e("button",ne,[l(r(P),{href:o.route("claim.details",s.data.id)},{default:B(()=>[l(K,{class:"text-violet-700"})]),_:1},8,["href"])])])])],2)}}};export{xe as _};
========
import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as c,g as v,b as e,i as w,k,a as l,h as y,t as a,u as r,c as C,n as m,w as B,P}from"./app-C2z0eYgw.js";import{f as S,d as A,S as f}from"./helpers-tC_JrwF8.js";import{a as D,D as T,_ as j}from"./CreateClaimForm-BQ7eFmyG.js";import{a as O}from"./ListComponent-rtZiuGGD.js";import{c as $}from"./AuthenticatedLayout-DXRkPPvj.js";const z={},N={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"};function q(s,n){return c(),v("svg",N,n[0]||(n[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"},null,-1)]))}const K=_(z,[["render",q]]),V={class:"flex"},E={key:0,class:"flex justify-center items-center"},G={class:"flex-1"},L={class:"grid lg:grid-cols-8 grid-cols-2 gap-x-4 gap-y-4 relative isolate"},U={class:"col"},I={class:""},R={class:"col"},Y={class:""},F={class:"col"},H={class:"capitalize"},J={class:"col"},M={class:"whitespace-nowrap overflow-hidden text-ellipsis"},Q={class:"col"},W={class:"relative group"},X={class:"truncate cursor-pointer"},Z={class:"absolute invisible group-hover:visible left-0 -top-2 transform -translate-y-full w-max max-w-xs px-4 py-3 bg-gray-900/95 backdrop-blur-sm text-white text-sm font-medium rounded-lg shadow-xl transform-gpu scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out before:content-[''] before:absolute before:left-4 before:top-full before:border-8 before:border-x-transparent before:border-b-transparent before:border-t-gray-900/95 z-[9999]"},ee={class:"break-words"},te={class:"col"},se={class:"truncate"},ae={class:"col"},oe={class:"col"},ie={class:""},le={class:"flex justify-center items-center space-x-4"},re=["disabled"],ne={class:"cursor-pointer hover:text-violet-600 transition-all"},xe={__name:"ClaimsListTemplate",props:{data:{type:Object,required:!0},showGroupActions:{type:Boolean,required:!1},isSelected:{type:Boolean,required:!1,default:!1}},emits:["update-selected-list"],setup(s,{emit:n}){const x=n,u=s,g=o=>{x("update-selected-list",{isSelected:o,id:u.data.id})},d=w(()=>u.data.status_id>=2),p=()=>{f.fire({title:"Are you sure?",text:"Are you sure you want to delete this Payment?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",allowOutsideClick:!1,stopKeydownPropagation:!0,preConfirm:()=>new Promise((o,t)=>{h()})})},h=async()=>{var o,t;try{const i=await axios.post(route("claims.delete",u.data.id));x("createComplete",!0),f.fire({title:"Success!",text:"The Payment has been successfully deleted.",icon:"success",confirmButtonText:"OK"})}catch(i){console.log(i),f.fire({title:"Error!",text:((t=(o=i.response)==null?void 0:o.data)==null?void 0:t.error)||"An unexpected error occurred while deleteing the payment.",icon:"error",confirmButtonText:"OK"})}};return k(!1),(o,t)=>{var i,b;return c(),v("div",{class:m(["w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-visible bg-white hover:border-violet-600 transition-all duration-500",{"bg-violet-50 border-violet-900":s.isSelected}])},[e("div",V,[s.showGroupActions?(c(),v("div",E,[l(O,{onUpdateSelected:g,isSelected:s.isSelected,class:"block mr-5"},null,8,["isSelected"])])):y("",!0),e("div",G,[e("div",L,[e("div",U,[t[0]||(t[0]=e("div",{class:"mb-1 text-xs text-gray-500"},"ID",-1)),e("div",I,a(s.data.id),1)]),e("div",R,[t[1]||(t[1]=e("div",{class:"mb-1 text-xs text-gray-500"},"Payment To",-1)),e("div",Y,a((i=s.data.payment_receiver)==null?void 0:i.name),1)]),e("div",F,[t[2]||(t[2]=e("div",{class:"mb-1 text-xs text-gray-500"},"Payment Category",-1)),e("div",H,a(s.data.payment_category_name),1)]),e("div",J,[t[3]||(t[3]=e("div",{class:"mb-1 text-xs text-gray-500"},"Total Amount",-1)),e("div",M,a(s.data.currency)+" "+a(r(S)(s.data.amount)),1)]),e("div",Q,[t[4]||(t[4]=e("div",{class:"mb-1 text-xs text-gray-500"},"Purpose",-1)),e("div",W,[e("div",X,a(s.data.purpose),1),e("div",Z,[e("div",ee,a(s.data.purpose),1)])])]),e("div",te,[t[5]||(t[5]=e("div",{class:"mb-1 text-xs text-gray-500"},"Created By",-1)),e("div",se,a((b=s.data.created_user)==null?void 0:b.name),1)]),e("div",ae,[t[6]||(t[6]=e("div",{class:"mb-1 text-xs text-gray-500"},"Status",-1)),l(D,{class:"overide-fs-11 inline-block w-[140px] rounded-xl",status:s.data.status,name:s.data.status_name},null,8,["status","name"])]),e("div",oe,[t[7]||(t[7]=e("div",{class:"mb-1 text-xs text-gray-500"},"Created At",-1)),e("div",ie,a(r(A)(s.data.created_at)),1)])])]),e("div",le,[r($)().value?(c(),C(r(T),{key:0,onClick:p,class:m(["mb-3 mr-2",{invisible:d.value}]),disabled:d.value},null,8,["class","disabled"])):y("",!0),e("div",{class:m({invisible:d.value}),disabled:d.value},[l(j,{claimData:s.data},null,8,["claimData"])],10,re),e("button",ne,[l(r(P),{href:o.route("claim.details",s.data.id)},{default:B(()=>[l(K,{class:"text-violet-700"})]),_:1},8,["href"])])])])],2)}}};export{xe as _};
>>>>>>>> master:public/build/assets/ClaimsListTemplate-CqB60k3O.js
