import{s as w,m as y,E as f,i as h,o as v,c as p,a as t,w as o,j as l,p as n,b as c,T as m,n as b,r as g,h as k,I as B}from"./app-3VYeepW6.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C={class:"fixed inset-0 flex items-center justify-center px-4 py-6 sm:px-0 z-50"},_={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},showMaxHeight:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:d}){const s=e,x=d;w(()=>s.show,a=>{document.body.style.overflow=a?"hidden":""});const i=()=>s.closeable&&x("close"),r=a=>a.key==="Escape"&&s.show&&i();y(()=>document.addEventListener("keydown",r)),f(()=>{document.removeEventListener("keydown",r),document.body.style.overflow=""});const u=h(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl","3xl":"sm:max-w-3xl","4xl":"sm:max-w-4xl","5xl":"sm:max-w-5xl","6xl":"sm:max-w-6xl","7xl":"sm:max-w-7xl",max:"sm:max-w-7xl"})[s.maxWidth]);return(a,E)=>(v(),p(B,{to:"body"},[t(m,{"leave-active-class":"duration-200"},{default:o(()=>[l(c("div",C,[t(m,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:o(()=>[l(c("div",{class:"fixed inset-0 bg-gray-500 opacity-75",onClick:i},null,512),[[n,e.show]])]),_:1}),t(m,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:o(()=>[l(c("div",{class:b(["bg-white rounded-lg shadow-xl transform transition-all w-full mx-auto scrollbar-container",[u.value,{"max-h-screen":e.showMaxHeight}]])},[e.show?g(a.$slots,"default",{key:0},void 0,!0):k("",!0)],2),[[n,e.show]])]),_:3})],512),[[n,e.show]])]),_:3})]))}},T=M(_,[["__scopeId","data-v-e7934dcb"]]);export{T as M};
