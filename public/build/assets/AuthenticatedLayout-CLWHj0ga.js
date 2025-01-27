import{m as N,E as j,i as c,k as M,o as d,g as h,b as s,r as v,j as L,z as B,a as u,w as a,n as g,T as E,c as x,u as i,P as k,D as w,e as l,h as y,t as $}from"./app-Bnn2BSzk.js";const z={class:"relative"},V={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:String,default:"py-1 bg-white"}},setup(r){const t=r,n=m=>{e.value&&m.key==="Escape"&&(e.value=!1)};N(()=>document.addEventListener("keydown",n)),j(()=>document.removeEventListener("keydown",n));const f=c(()=>({48:"w-48"})[t.width.toString()]),o=c(()=>t.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":t.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top"),e=M(!1);return(m,p)=>(d(),h("div",z,[s("div",{onClick:p[0]||(p[0]=S=>e.value=!e.value)},[v(m.$slots,"trigger")]),L(s("div",{class:"fixed inset-0 z-40",onClick:p[1]||(p[1]=S=>e.value=!1)},null,512),[[B,e.value]]),u(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:a(()=>[L(s("div",{class:g(["absolute z-50 mt-2 rounded-md shadow-lg",[f.value,o.value]]),style:{display:"none"},onClick:p[2]||(p[2]=S=>e.value=!1)},[s("div",{class:g(["rounded-md ring-1 ring-black ring-opacity-5",r.contentClasses])},[v(m.$slots,"content")],2)],2),[[B,e.value]])]),_:3})]))}},P={__name:"DropdownLink",props:{href:{type:String,required:!0}},setup(r){return(t,n)=>(d(),x(i(k),{href:r.href,class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:a(()=>[v(t.$slots,"default")]),_:3},8,["href"]))}},C={__name:"NavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(r){const t=r,n=c(()=>t.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(f,o)=>(d(),x(i(k),{href:r.href,class:g(n.value)},{default:a(()=>[v(f.$slots,"default")]),_:3},8,["href","class"]))}},b={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(r){const t=r,n=c(()=>t.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(f,o)=>(d(),x(i(k),{href:r.href,class:g(n.value)},{default:a(()=>[v(f.$slots,"default")]),_:3},8,["href","class"]))}};function _(){const{props:r}=w();return c(()=>{var t,n;return((n=(t=r==null?void 0:r.auth)==null?void 0:t.user)==null?void 0:n.role)==="admin"})}function D(){const{props:r}=w();return c(()=>{var t,n;return((n=(t=r==null?void 0:r.auth)==null?void 0:t.user)==null?void 0:n.role)==="finance"})}function ae(){const{props:r}=w();return c(()=>{var t,n;return((n=(t=r==null?void 0:r.auth)==null?void 0:t.user)==null?void 0:n.can_delete_claim)===1})}function ie(){const{props:r}=w();return c(()=>{var n,f,o;const t=(f=(n=r==null?void 0:r.auth)==null?void 0:n.user)==null?void 0:f.privileges;return t&&t.length>0?(o=t[0])==null?void 0:o.approval_role_id:null})}const q={class:"min-h-screen bg-gray-100"},A={class:"bg-white border-b border-gray-100"},O={class:"max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16"},R={class:"flex"},T={class:"shrink-0 flex items-center"},U={class:"hidden sm:-my-px sm:flex"},F={key:0,class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},G={key:1,class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},H={class:"hidden sm:flex sm:items-center sm:ms-6"},I={class:"ms-3 relative"},J={class:"inline-flex rounded-md"},K={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},Q={class:"-me-2 flex items-center sm:hidden"},W={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},X={class:"pt-2 pb-3 space-y-1"},Y={class:"pt-4 pb-1 border-t border-gray-200"},Z={class:"px-4"},ee={class:"font-medium text-base text-gray-800"},te={class:"font-medium text-sm text-gray-500"},se={class:"mt-3 space-y-1"},re={key:0,class:"bg-white shadow"},oe={class:"max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},le={__name:"AuthenticatedLayout",setup(r){const t=M(!1),{props:n}=w(),f=()=>{sessionStorage.clear(),localStorage.clear()};return(o,e)=>(d(),h("div",null,[e[13]||(e[13]=s("div",{class:"bg-violet-400 text-white bg-yellow-500 text-gray-500 hidden"},null,-1)),s("div",q,[s("nav",A,[s("div",O,[s("div",R,[s("div",T,[u(i(k),{href:o.route("dashboard")},{default:a(()=>e[1]||(e[1]=[s("img",{src:"/images/logo-new.jpg",alt:"Logo",style:{width:"210px",height:"50px","margin-right":"34px"}},null,-1)])),_:1},8,["href"])]),s("div",U,[u(C,{href:o.route("dashboard"),active:o.route().current("dashboard")},{default:a(()=>e[2]||(e[2]=[l(" Payments ")])),_:1},8,["href","active"])]),i(_)().value?(d(),h("div",F,[u(C,{href:o.route("settings"),active:o.route().current("settings")},{default:a(()=>e[3]||(e[3]=[l(" Settings ")])),_:1},8,["href","active"])])):y("",!0),i(_)().value||i(D)().value?(d(),h("div",G,[u(C,{href:o.route("reports"),active:o.route().current("reports")},{default:a(()=>e[4]||(e[4]=[l(" Reports ")])),_:1},8,["href","active"])])):y("",!0)]),s("div",H,[s("div",I,[u(V,{align:"right",width:"48"},{trigger:a(()=>[s("span",J,[s("button",K,[l($(i(n).auth.user.name)+" ",1),e[5]||(e[5]=s("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[s("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1))])])]),content:a(()=>[u(P,{href:o.route("profile.edit")},{default:a(()=>e[6]||(e[6]=[l("Profile")])),_:1},8,["href"]),u(P,{onClick:f,href:o.route("logout"),method:"post",as:"button"},{default:a(()=>e[7]||(e[7]=[l("Log Out ")])),_:1},8,["href"])]),_:1})])]),s("div",Q,[s("button",{onClick:e[0]||(e[0]=m=>t.value=!t.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(d(),h("svg",W,[s("path",{class:g({hidden:t.value,"inline-flex":!t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),s("path",{class:g({hidden:!t.value,"inline-flex":t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])]),s("div",{class:g([{block:t.value,hidden:!t.value},"sm:hidden"])},[s("div",X,[u(b,{href:o.route("dashboard"),active:o.route().current("dashboard")},{default:a(()=>e[8]||(e[8]=[l(" Payments ")])),_:1},8,["href","active"]),i(_)().value?(d(),x(b,{key:0,href:o.route("settings"),active:o.route().current("settings")},{default:a(()=>e[9]||(e[9]=[l(" Settings ")])),_:1},8,["href","active"])):y("",!0),i(_)().value||i(D)().value?(d(),x(b,{key:1,href:o.route("reports"),active:o.route().current("reports")},{default:a(()=>e[10]||(e[10]=[l(" Reports ")])),_:1},8,["href","active"])):y("",!0)]),s("div",Y,[s("div",Z,[s("div",ee,$(i(n).auth.user.name),1),s("div",te,$(i(n).auth.user.email),1)]),s("div",se,[u(b,{href:o.route("profile.edit")},{default:a(()=>e[11]||(e[11]=[l("Profile")])),_:1},8,["href"]),u(b,{href:o.route("logout"),method:"post",as:"button"},{default:a(()=>e[12]||(e[12]=[l("Log Out ")])),_:1},8,["href"])])])],2)]),o.$slots.header?(d(),h("header",re,[s("div",oe,[v(o.$slots,"header")])])):y("",!0),s("main",null,[v(o.$slots,"default")])])]))}};export{le as _,_ as a,ae as c,ie as g,D as i};
