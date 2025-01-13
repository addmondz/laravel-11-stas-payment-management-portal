import{q as P,H as j,i as g,l as N,o as f,g as h,b as t,r as p,j as S,k as L,a,w as i,n as c,T as D,c as $,u,P as b,D as x,e as l,h as w,t as _}from"./app-BqojdvNn.js";const E={class:"relative"},q={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:String,default:"py-1 bg-white"}},setup(r){const s=r,n=m=>{e.value&&m.key==="Escape"&&(e.value=!1)};P(()=>document.addEventListener("keydown",n)),j(()=>document.removeEventListener("keydown",n));const d=g(()=>({48:"w-48"})[s.width.toString()]),o=g(()=>s.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":s.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top"),e=N(!1);return(m,v)=>(f(),h("div",E,[t("div",{onClick:v[0]||(v[0]=C=>e.value=!e.value)},[p(m.$slots,"trigger")]),S(t("div",{class:"fixed inset-0 z-40",onClick:v[1]||(v[1]=C=>e.value=!1)},null,512),[[L,e.value]]),a(D,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:i(()=>[S(t("div",{class:c(["absolute z-50 mt-2 rounded-md shadow-lg",[d.value,o.value]]),style:{display:"none"},onClick:v[2]||(v[2]=C=>e.value=!1)},[t("div",{class:c(["rounded-md ring-1 ring-black ring-opacity-5",r.contentClasses])},[p(m.$slots,"content")],2)],2),[[L,e.value]])]),_:3})]))}},B={__name:"DropdownLink",props:{href:{type:String,required:!0}},setup(r){return(s,n)=>(f(),$(u(b),{href:r.href,class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:i(()=>[p(s.$slots,"default")]),_:3},8,["href"]))}},k={__name:"NavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(r){const s=r,n=g(()=>s.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(d,o)=>(f(),$(u(b),{href:r.href,class:c(n.value)},{default:i(()=>[p(d.$slots,"default")]),_:3},8,["href","class"]))}},y={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(r){const s=r,n=g(()=>s.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(d,o)=>(f(),$(u(b),{href:r.href,class:c(n.value)},{default:i(()=>[p(d.$slots,"default")]),_:3},8,["href","class"]))}};function M(){const{props:r}=x();return g(()=>{var s,n;return((n=(s=r==null?void 0:r.auth)==null?void 0:s.user)==null?void 0:n.role)==="admin"})}function ne(){const{props:r}=x();return g(()=>{var s,n;return((n=(s=r==null?void 0:r.auth)==null?void 0:s.user)==null?void 0:n.role)==="finance"})}function ie(){const{props:r}=x();return g(()=>{var n,d,o;const s=(d=(n=r==null?void 0:r.auth)==null?void 0:n.user)==null?void 0:d.privileges;return s&&s.length>0?(o=s[0])==null?void 0:o.approval_role_id:null})}const z={class:"min-h-screen bg-gray-100"},V={class:"bg-white border-b border-gray-100"},A={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16"},O={class:"flex"},R={class:"shrink-0 flex items-center"},T={class:"hidden sm:-my-px sm:flex"},U={key:0,class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},F={key:1,class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},H={class:"hidden sm:flex sm:items-center sm:ms-6"},G={class:"ms-3 relative"},I={class:"inline-flex rounded-md"},J={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},K={class:"-me-2 flex items-center sm:hidden"},Q={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},W={class:"pt-2 pb-3 space-y-1"},X={class:"pt-4 pb-1 border-t border-gray-200"},Y={class:"px-4"},Z={class:"font-medium text-base text-gray-800"},ee={class:"font-medium text-sm text-gray-500"},te={class:"mt-3 space-y-1"},se={key:0,class:"bg-white shadow"},oe={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ae={__name:"AuthenticatedLayout",setup(r){const s=N(!1),{props:n}=x(),d=()=>{sessionStorage.clear(),localStorage.clear()};return(o,e)=>(f(),h("div",null,[e[13]||(e[13]=t("div",{class:"bg-violet-400 text-white bg-yellow-500 text-gray-500 hidden"},null,-1)),t("div",z,[t("nav",V,[t("div",A,[t("div",O,[t("div",R,[a(u(b),{href:o.route("dashboard")},{default:i(()=>e[1]||(e[1]=[t("img",{src:"/images/logo-new.jpg",alt:"Logo",style:{width:"210px",height:"50px","margin-right":"35px"}},null,-1)])),_:1},8,["href"])]),t("div",T,[a(k,{href:o.route("dashboard"),active:o.route().current("dashboard")},{default:i(()=>e[2]||(e[2]=[l(" Payments ")])),_:1},8,["href","active"])]),u(M)().value?(f(),h("div",U,[a(k,{href:o.route("settings"),active:o.route().current("settings")},{default:i(()=>e[3]||(e[3]=[l(" Settings ")])),_:1},8,["href","active"])])):w("",!0),u(M)().value?(f(),h("div",F,[a(k,{href:o.route("reports"),active:o.route().current("reports")},{default:i(()=>e[4]||(e[4]=[l(" Reports ")])),_:1},8,["href","active"])])):w("",!0)]),t("div",H,[t("div",G,[a(q,{align:"right",width:"48"},{trigger:i(()=>[t("span",I,[t("button",J,[l(_(u(n).auth.user.name)+" ",1),e[5]||(e[5]=t("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1))])])]),content:i(()=>[a(B,{href:o.route("profile.edit")},{default:i(()=>e[6]||(e[6]=[l("Profile")])),_:1},8,["href"]),a(B,{onClick:d,href:o.route("logout"),method:"post",as:"button"},{default:i(()=>e[7]||(e[7]=[l("Log Out ")])),_:1},8,["href"])]),_:1})])]),t("div",K,[t("button",{onClick:e[0]||(e[0]=m=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(f(),h("svg",Q,[t("path",{class:c({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:c({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])]),t("div",{class:c([{block:s.value,hidden:!s.value},"sm:hidden"])},[t("div",W,[a(y,{href:o.route("dashboard"),active:o.route().current("dashboard")},{default:i(()=>e[8]||(e[8]=[l(" Payments ")])),_:1},8,["href","active"]),a(y,{href:o.route("settings"),active:o.route().current("settings")},{default:i(()=>e[9]||(e[9]=[l(" Settings ")])),_:1},8,["href","active"]),a(y,{href:o.route("reports"),active:o.route().current("reports")},{default:i(()=>e[10]||(e[10]=[l(" Reports ")])),_:1},8,["href","active"])]),t("div",X,[t("div",Y,[t("div",Z,_(u(n).auth.user.name),1),t("div",ee,_(u(n).auth.user.email),1)]),t("div",te,[a(y,{href:o.route("profile.edit")},{default:i(()=>e[11]||(e[11]=[l("Profile")])),_:1},8,["href"]),a(y,{href:o.route("logout"),method:"post",as:"button"},{default:i(()=>e[12]||(e[12]=[l("Log Out ")])),_:1},8,["href"])])])],2)]),o.$slots.header?(f(),h("header",se,[t("div",oe,[p(o.$slots,"header")])])):w("",!0),t("main",null,[p(o.$slots,"default")])])]))}};export{ae as _,M as a,ie as g,ne as i};
