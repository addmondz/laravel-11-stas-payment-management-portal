import{l as a,E as C,y as S,p as N,o as s,g as o,a as v,n as p,b as t,r as L,h as B,t as g}from"./app-kjEofN6q.js";import{L as F,N as _}from"./sweetalert2.esm.all-XKxolmLR.js";const R={key:0},U={key:1},V={class:"grid md:grid-cols gap-4 mb-5"},$={key:0},j={class:"flex justify-between w-full pt-6"},q={class:"flex justify-end flex-1"},D=["disabled"],E=["disabled"],T={key:1},A={__name:"ListComponent",props:{apiUrl:{type:String,required:!0},createCompleteSignal:{type:Number,default:!1},hasPaddingTop:{type:Boolean,default:!0}},setup(m){const h=a(!0),r=a([]),f=a(null),b=a(null),w=a(null),l=a(null),x=a(9),e=a(1),i=a(0),y=m;C(()=>y.createCompleteSignal,n=>{n&&u(e.value)});const u=async(n=1)=>{try{const d=new URLSearchParams({limit:x.value,page:n,brand:b.value??"",category:w.value??""}).toString(),{data:c}=await S.get(`${y.apiUrl}?${d}`);r.value=c.data.data,l.value=c.data,i.value=c.data.last_page}catch(d){f.value=d}finally{h.value=!1}};N(()=>{u(e.value)});const P=()=>{e.value>=i.value||(e.value+=1,u(e.value))},k=()=>{e.value<=1||(e.value-=1,u(e.value))};return(n,d)=>(s(),o("div",null,[h.value?(s(),o("div",R,[v(F,{class:"mt-20 mb-20"})])):(s(),o("div",U,[l.value?(s(),o("div",{key:0,class:p({"pt-12":m.hasPaddingTop})},[t("div",V,[L(n.$slots,"list-view",{data:r.value,apiResponse:l.value})]),r.value.length===0||r.value==[]?(s(),o("div",$,[v(_)])):B("",!0),t("div",j,[t("div",null,[t("p",null,"Showing "+g(l.value.from??0)+" to "+g(l.value.to??0)+" of "+g(l.value.total)+" entries",1)]),t("div",q,[t("button",{class:p(["bg-white hover:bg-gray-200 text-gray py-2 px-4 rounded ml-2",[{"cursor-not-allowed":e.value==1}]]),onClick:k,disabled:e.value==1},"Previous Page",10,D),t("button",{class:p(["bg-black hover:bg-gray-700 text-white py-2 px-4 rounded ml-2",[{"cursor-not-allowed":e.value==i.value}]]),disabled:e.value==i.value,onClick:P},"Next Page",10,E)])])],2)):(s(),o("div",T,[v(_)]))]))]))}};export{A as _};