import{k as t,l as U,g as r,a as s,u as B,w as b,F as h,x as D,o as n,d as j,b as a,p as R,h as q,t as p,n as x,c as z}from"./app-CwwXav3q.js";import{_ as E}from"./AuthenticatedLayout-DLUv3BQl.js";import{_ as M,a as A}from"./PaymentCategoryListTemplate-DYNHIXat.js";import{L as G,N as w}from"./sweetalert2.esm.all-DYkTciXP.js";import{_ as C}from"./FilterDropdown-C8f08SI8.js";import{_ as H}from"./BreadcrumbComponent-YKbycUjX.js";import"./ApplicationLogo-M_mRncSF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./TextInput-Dtmf303C.js";import"./Modal-emUKOP2C.js";import"./PrimaryButton-A7_S8K17.js";const I={class:"flex justify-between content-center"},J={key:0},K={key:1},O={key:0,class:"py-12"},Q={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0"},T={class:"grid md:grid-cols-4 gap-4 mb-5 hidden"},W={class:"grid md:grid-cols gap-4 mb-5"},X={key:0},Y={class:"flex justify-between w-full"},Z={class:"flex justify-end flex-1"},ee=["disabled"],ae=["disabled"],te={key:1},ge={__name:"PaymentCategoryPage",setup(le){const g=t(!0),d=t([]),k=t([]),P=t([]),V=t(null),c=t(null),m=t(null),i=t(null),F=t(9),e=t(1),v=t(0),$=route("paymentCategory.list"),u=async(f=1)=>{try{const o=new URLSearchParams({limit:F.value,page:f,brand:c.value??"",category:m.value??""}).toString(),{data:l}=await D.get(`${$}?${o}`);d.value=l.data.data,i.value=l.data,v.value=l.data.last_page}catch(o){V.value=o}finally{g.value=!1}};U(()=>{u(e.value)});const L=()=>{e.value>=v.value||(e.value+=1,u(e.value))},N=()=>{e.value<=1||(e.value-=1,u(e.value))},_=()=>{e.value=1,u(e.value)},S=()=>{c.value=null,m.value=null,_()},y=()=>{u(e.value)};return(f,o)=>(n(),r(h,null,[s(B(j),{title:"Users"}),s(E,null,{header:b(()=>[a("div",I,[s(H,{breadcrumbs:[{title:"Settings"},{title:"Payment Category"}]}),s(M,{onCreateComplete:y})])]),default:b(()=>[g.value?(n(),r("div",J,[s(G,{class:"mt-32"})])):(n(),r("div",K,[i.value?(n(),r("div",O,[a("div",Q,[a("div",T,[s(C,{class:"w-full mr-5",label:"a brand",modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=l=>c.value=l),options:P.value},null,8,["modelValue","options"]),s(C,{class:"w-full mr-5",label:"a category",modelValue:m.value,"onUpdate:modelValue":o[1]||(o[1]=l=>m.value=l),options:k.value},null,8,["modelValue","options"]),a("button",{class:"bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded ml-2",onClick:S},"Reset Filters"),a("button",{class:"bg-violet-500 hover:bg-violet-700 text-white py-2 px-4 rounded ml-2",onClick:_},"Search")]),a("div",W,[(n(!0),r(h,null,R(d.value,l=>(n(),z(A,{onCreateComplete:y,key:l.id,data:l},null,8,["data"]))),128))]),d.value.length===0||d.value==[]?(n(),r("div",X,[s(w)])):q("",!0),a("div",Y,[a("div",null,[a("p",null,"Showing "+p(i.value.from??0)+" to "+p(i.value.to??0)+" of "+p(i.value.total)+" entries ",1)]),a("div",Z,[a("button",{class:x(["bg-white hover:bg-gray-200 text-gray py-2 px-4 rounded ml-2",[{"cursor-not-allowed":e.value==1}]]),onClick:N,disabled:e.value==1},"Previous Page",10,ee),a("button",{class:x(["bg-black hover:bg-gray-700 text-white py-2 px-4 rounded ml-2",[{"cursor-not-allowed":e.value==v.value}]]),disabled:e.value==v.value,onClick:L},"Next Page",10,ae)])])])])):(n(),r("div",te,[s(w)]))]))]),_:1})],64))}};export{ge as default};
