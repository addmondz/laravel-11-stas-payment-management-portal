import{m as N,E as j,i as c,k as M,o as d,g as h,b as t,r as p,j as L,p as P,a as l,w as a,n as g,T as E,c as x,u,P as $,D as w,e as i,h as b,t as C}from"./app-DXWRZbTu.js";const G={class:"relative"},z={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:String,default:"py-1 bg-white"}},setup(o){const s=o,n=y=>{e.value&&y.key==="Escape"&&(e.value=!1)};N(()=>document.addEventListener("keydown",n)),j(()=>document.removeEventListener("keydown",n));const f=c(()=>({48:"w-48"})[s.width.toString()]),r=c(()=>s.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":s.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top"),e=M(!1);return(y,m)=>(d(),h("div",G,[t("div",{onClick:m[0]||(m[0]=S=>e.value=!e.value)},[p(y.$slots,"trigger")]),L(t("div",{class:"fixed inset-0 z-40",onClick:m[1]||(m[1]=S=>e.value=!1)},null,512),[[P,e.value]]),l(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:a(()=>[L(t("div",{class:g(["absolute z-50 mt-2 rounded-md shadow-lg",[f.value,r.value]]),style:{display:"none"},onClick:m[2]||(m[2]=S=>e.value=!1)},[t("div",{class:g(["rounded-md ring-1 ring-black ring-opacity-5",o.contentClasses])},[p(y.$slots,"content")],2)],2),[[P,e.value]])]),_:3})]))}},B={__name:"DropdownLink",props:{href:{type:String,required:!0}},setup(o){return(s,n)=>(d(),x(u($),{href:o.href,class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:a(()=>[p(s.$slots,"default")]),_:3},8,["href"]))}},k={__name:"NavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(o){const s=o,n=c(()=>s.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(f,r)=>(d(),x(u($),{href:o.href,class:g(n.value)},{default:a(()=>[p(f.$slots,"default")]),_:3},8,["href","class"]))}},v={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(o){const s=o,n=c(()=>s.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(f,r)=>(d(),x(u($),{href:o.href,class:g(n.value)},{default:a(()=>[p(f.$slots,"default")]),_:3},8,["href","class"]))}};function _(){const{props:o}=w();return c(()=>{var s,n;return((n=(s=o==null?void 0:o.auth)==null?void 0:s.user)==null?void 0:n.role)==="admin"})}function D(){const{props:o}=w();return c(()=>{var s,n;return((n=(s=o==null?void 0:o.auth)==null?void 0:s.user)==null?void 0:n.role)==="finance"})}function ie(){const{props:o}=w();return c(()=>{var s,n;return((n=(s=o==null?void 0:o.auth)==null?void 0:s.user)==null?void 0:n.can_delete_claim)===1})}function le(){const{props:o}=w();return c(()=>{var n,f,r;const s=(f=(n=o==null?void 0:o.auth)==null?void 0:n.user)==null?void 0:f.privileges;return s&&s.length>0?(r=s[0])==null?void 0:r.approval_role_id:null})}const V={class:"min-h-screen bg-gray-100"},q={class:"bg-white border-b border-gray-100"},A={class:"max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16"},O={class:"flex"},R={class:"shrink-0 flex items-center"},T={class:"hidden sm:-my-px sm:flex"},U={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},F={key:0,class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},H={key:1,class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},I={class:"hidden sm:flex sm:items-center sm:ms-6"},J={class:"ms-3 relative"},K={class:"inline-flex rounded-md"},Q={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},W={class:"-me-2 flex items-center sm:hidden"},X={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Y={class:"pt-2 pb-3 space-y-1"},Z={class:"pt-4 pb-1 border-t border-gray-200"},ee={class:"px-4"},te={class:"font-medium text-base text-gray-800"},se={class:"font-medium text-sm text-gray-500"},re={class:"mt-3 space-y-1"},oe={key:0,class:"bg-white shadow"},ne={class:"max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ue={__name:"AuthenticatedLayout",setup(o){const s=M(!1),{props:n}=w(),f=()=>{sessionStorage.clear(),localStorage.clear()};return(r,e)=>(d(),h("div",null,[e[15]||(e[15]=t("div",{class:"bg-violet-400 text-white bg-yellow-500 text-gray-500 hidden"},null,-1)),t("div",V,[t("nav",q,[t("div",A,[t("div",O,[t("div",R,[l(u($),{href:r.route("dashboard")},{default:a(()=>e[1]||(e[1]=[t("img",{src:"/images/logo-new.jpg",alt:"Logo",style:{width:"210px",height:"50px","margin-right":"34px"}},null,-1)])),_:1},8,["href"])]),t("div",T,[l(k,{href:r.route("dashboard"),active:r.route().current("dashboard")},{default:a(()=>e[2]||(e[2]=[i(" Payments ")])),_:1},8,["href","active"])]),t("div",U,[l(k,{href:r.route("paymentGroups"),active:r.route().current("paymentGroups")},{default:a(()=>e[3]||(e[3]=[i(" Payment Groups ")])),_:1},8,["href","active"])]),u(_)().value?(d(),h("div",F,[l(k,{href:r.route("settings"),active:r.route().current("settings")},{default:a(()=>e[4]||(e[4]=[i(" Settings ")])),_:1},8,["href","active"])])):b("",!0),u(_)().value||u(D)().value?(d(),h("div",H,[l(k,{href:r.route("reports"),active:r.route().current("reports")},{default:a(()=>e[5]||(e[5]=[i(" Reports ")])),_:1},8,["href","active"])])):b("",!0)]),t("div",I,[t("div",J,[l(z,{align:"right",width:"48"},{trigger:a(()=>[t("span",K,[t("button",Q,[i(C(u(n).auth.user.name)+" ",1),e[6]||(e[6]=t("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1))])])]),content:a(()=>[l(B,{href:r.route("profile.edit")},{default:a(()=>e[7]||(e[7]=[i("Profile")])),_:1},8,["href"]),l(B,{onClick:f,href:r.route("logout"),method:"post",as:"button"},{default:a(()=>e[8]||(e[8]=[i("Log Out ")])),_:1},8,["href"])]),_:1})])]),t("div",W,[t("button",{onClick:e[0]||(e[0]=y=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(d(),h("svg",X,[t("path",{class:g({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:g({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])]),t("div",{class:g([{block:s.value,hidden:!s.value},"sm:hidden"])},[t("div",Y,[l(v,{href:r.route("dashboard"),active:r.route().current("dashboard")},{default:a(()=>e[9]||(e[9]=[i(" Payments ")])),_:1},8,["href","active"]),l(v,{href:r.route("paymentGroups"),active:r.route().current("paymentGroups")},{default:a(()=>e[10]||(e[10]=[i(" Payment Groups ")])),_:1},8,["href","active"]),u(_)().value?(d(),x(v,{key:0,href:r.route("settings"),active:r.route().current("settings")},{default:a(()=>e[11]||(e[11]=[i(" Settings ")])),_:1},8,["href","active"])):b("",!0),u(_)().value||u(D)().value?(d(),x(v,{key:1,href:r.route("reports"),active:r.route().current("reports")},{default:a(()=>e[12]||(e[12]=[i(" Reports ")])),_:1},8,["href","active"])):b("",!0)]),t("div",Z,[t("div",ee,[t("div",te,C(u(n).auth.user.name),1),t("div",se,C(u(n).auth.user.email),1)]),t("div",re,[l(v,{href:r.route("profile.edit")},{default:a(()=>e[13]||(e[13]=[i("Profile")])),_:1},8,["href"]),l(v,{href:r.route("logout"),method:"post",as:"button"},{default:a(()=>e[14]||(e[14]=[i("Log Out ")])),_:1},8,["href"])])])],2)]),r.$slots.header?(d(),h("header",oe,[t("div",ne,[p(r.$slots,"header")])])):b("",!0),t("main",null,[p(r.$slots,"default")])])]))}};export{ue as _,_ as a,ie as c,le as g,D as i};
