import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as c,o as s,g as i,b as a,k as m,i as k,w as y,n as P,e as D,u as S,c as O,F as v,j as p,p as h,h as j}from"./app-Budi_Wd7.js";import{N as C,L}from"./NotFound-yFWb-_SP.js";import{P as R}from"./PrimaryButton-BR_AJea9.js";import{M as U}from"./Modal-CkjpLLWw.js";import{b as V}from"./helpers-VxbUbXBp.js";import{I as z}from"./BreadcrumbComponent-BdzP4INr.js";var A={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};function E(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(o).filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),l.forEach(function(n){I(t,n,o[n])})}return t}function I(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var w=function(e,o){var l=E({},e,o.attrs);return c(z,E({},l,{icon:A}),null)};w.displayName="CloseOutlined";w.inheritAttrs=!1;const H={},W={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"};function q(t,e){return s(),i("svg",W,e[0]||(e[0]=[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"},null,-1)]))}const ae=F(H,[["render",q]]),T={},G={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"};function J(t,e){return s(),i("svg",G,e[0]||(e[0]=[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"},null,-1)]))}const ce=F(T,[["render",J]]),Q={class:"bg-white p-4 pt-2 rounded-lg img-modal h-full flex flex-col w-full mx-auto"},X={class:"flex justify-between"},Y={class:"flex-grow overflow-hidden flex justify-center items-center img-loader-container"},Z=["src","alt"],K=["src"],ie={__name:"DocumentViewer",props:{src:{type:String,required:!0},alt:{type:String,default:"File"},id:{type:Number,required:!0}},setup(t){const e=t,o=m(!1),l=m(!1),n=m(!1),$=m("500px"),B=k(()=>{var r;return(r=e.src)==null?void 0:r.match(/\.(jpg|jpeg|png)$/)}),u=k(()=>{var r;return(r=e.src)==null?void 0:r.endsWith(".pdf")}),g=()=>{o.value=!0,u.value&&($.value="800px")},b=()=>{l.value=!0,console.error("Error loading the file")},M=()=>{n.value=!0},x=()=>{n.value=!1},N=async()=>{try{const r=await fetch(e.src);if(!r.ok)throw new Error("Failed to fetch the file");const f=await r.blob(),_=window.URL.createObjectURL(f),d=document.createElement("a");d.href=_,d.download=`receipt-document-payment-${V(e.id)}.${u.value?"pdf":"jpg"}`,document.body.appendChild(d),d.click(),d.remove(),window.URL.revokeObjectURL(_)}catch(r){console.error("Error downloading the file:",r)}};return(r,f)=>(s(),i("div",null,[a("div",{class:"text-base cursor-pointer inline text-violet-700 font-bold",onClick:M},"Open"),c(U,{show:n.value,onClose:x,maxWidth:u.value?"7xl":"2xl",showMaxHeight:u.value},{default:y(()=>[a("div",Q,[a("div",X,[c(R,{class:P(["m-3 ml-0",{invisible:t.src=="/null"||l.value}]),onClick:N},{default:y(()=>f[0]||(f[0]=[D(" Download Receipt ")])),_:1},8,["class"]),c(S(w),{class:"pb-2 mt-3",onClick:x})]),a("div",Y,[t.src=="/null"?(s(),O(C,{key:0})):l.value?(s(),O(C,{key:2})):(s(),i(v,{key:1},[B.value?(s(),i(v,{key:0},[p(a("img",{onLoad:g,onError:b,src:t.src,alt:t.alt,class:"max-h-full max-w-full object-contain"},null,40,Z),[[h,o.value]]),p(c(L,{class:"mt-32 mb-32"},null,512),[[h,!o.value]])],64)):j("",!0),u.value?(s(),i(v,{key:1},[p(a("iframe",{src:t.src,class:"w-full h-full",onLoad:g,onError:b},null,40,K),[[h,o.value]]),p(c(L,{class:"mt-32 mb-32"},null,512),[[h,!o.value]])],64)):j("",!0)],64))])])]),_:1},8,["show","maxWidth","showMaxHeight"])]))}};export{ae as A,ie as _,ce as a};
