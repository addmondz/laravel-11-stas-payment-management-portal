import{l as t,q as S,g as r,a as s,u as B,w as h,F as y,z as D,o as n,d as j,b as a,m as R,h as q,t as p,n as x,c as z}from"./app-BqojdvNn.js";import{_ as E}from"./AuthenticatedLayout-BEOPXMje.js";import{_ as M,a as A}from"./UsersListTemplate-DtP77fKI.js";import{L as G,N as w}from"./LoadingComponent-4Bn8wsTb.js";import{_ as k}from"./FilterDropdown-BaJMUheF.js";import{_ as H}from"./BreadcrumbComponent-CY7koJx2.js";import"./helpers-DihaDpdt.js";import"./InputError-wWrSstSA.js";import"./TextInput-B_u3O-cx.js";import"./Modal-BPT9WpuQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PrimaryButton-D5Wjtip7.js";const I={class:"flex justify-between content-center"},J={key:0},K={key:1},O={key:0,class:"py-12"},Q={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0"},T={class:"grid md:grid-cols-4 gap-4 mb-5 hidden"},W={class:"grid md:grid-cols gap-4 mb-5"},X={key:0},Y={class:"flex justify-between w-full"},Z={class:"flex justify-end flex-1"},ee=["disabled"],ae=["disabled"],te={key:1},ge={__name:"User",setup(le){const _=t(!0),d=t([]),C=t([]),P=t([]),V=t(null),c=t(null),m=t(null),i=t(null),F=t(9),e=t(1),v=t(0),U=route("users.list"),u=async(b=1)=>{try{const o=new URLSearchParams({limit:F.value,page:b,brand:c.value??"",category:m.value??""}).toString(),{data:l}=await D.get(`${U}?${o}`);d.value=l.data.data,i.value=l.data,v.value=l.data.last_page}catch(o){V.value=o}finally{_.value=!1}};S(()=>{u(e.value)});const $=()=>{e.value>=v.value||(e.value+=1,u(e.value))},L=()=>{e.value<=1||(e.value-=1,u(e.value))},g=()=>{e.value=1,u(e.value)},N=()=>{c.value=null,m.value=null,g()},f=()=>{u(e.value)};return(b,o)=>(n(),r(y,null,[s(B(j),{title:"Users"}),s(E,null,{header:h(()=>[a("div",I,[s(H,{breadcrumbs:[{title:"Users"}]}),s(M,{onCreateComplete:f})])]),default:h(()=>[_.value?(n(),r("div",J,[s(G,{class:"mt-32"})])):(n(),r("div",K,[i.value?(n(),r("div",O,[a("div",Q,[a("div",T,[s(k,{class:"w-full mr-5",label:"a brand",modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=l=>c.value=l),options:P.value},null,8,["modelValue","options"]),s(k,{class:"w-full mr-5",label:"a category",modelValue:m.value,"onUpdate:modelValue":o[1]||(o[1]=l=>m.value=l),options:C.value},null,8,["modelValue","options"]),a("button",{class:"bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded ml-2",onClick:N},"Reset Filters"),a("button",{class:"bg-violet-500 hover:bg-violet-700 text-white py-2 px-4 rounded ml-2",onClick:g},"Search")]),a("div",W,[(n(!0),r(y,null,R(d.value,l=>(n(),z(A,{onCreateComplete:f,key:l.id,data:l},null,8,["data"]))),128))]),d.value.length===0||d.value==[]?(n(),r("div",X,[s(w)])):q("",!0),a("div",Y,[a("div",null,[a("p",null,"Showing "+p(i.value.from??0)+" to "+p(i.value.to??0)+" of "+p(i.value.total)+" entries ",1)]),a("div",Z,[a("button",{class:x(["bg-white hover:bg-gray-200 text-gray py-2 px-4 rounded ml-2",[{"cursor-not-allowed":e.value==1}]]),onClick:L,disabled:e.value==1},"Previous Page",10,ee),a("button",{class:x(["bg-black hover:bg-gray-700 text-white py-2 px-4 rounded ml-2",[{"cursor-not-allowed":e.value==v.value}]]),disabled:e.value==v.value,onClick:$},"Next Page",10,ae)])])])])):(n(),r("div",te,[s(w)]))]))]),_:1})],64))}};export{ge as default};
