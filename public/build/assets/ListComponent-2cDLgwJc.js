import{a as v,l as i,D as q,p as J,o as a,g as s,w as P,e as E,b as o,F as $,m as U,j as B,t as S,q as j,c as T,A as L,h as C,y as W,u as X,r as Y,n as R}from"./app-PziVrzQt.js";import{L as Q,N as z}from"./sweetalert2.esm.all-BCc7K-uv.js";import{_ as Z}from"./Modal-C6Vs-fpi.js";import{P as I}from"./PrimaryButton-DcvYJi6c.js";import{_ as K}from"./InputError-1H9n2_oq.js";import{_ as G,a as N}from"./TextInput-yFK3Fd7U.js";import{I as ee}from"./BreadcrumbComponent-Bf2nQGg5.js";var te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"};function H(n){for(var u=1;u<arguments.length;u++){var d=arguments[u]!=null?Object(arguments[u]):{},f=Object.keys(d);typeof Object.getOwnPropertySymbols=="function"&&(f=f.concat(Object.getOwnPropertySymbols(d).filter(function(r){return Object.getOwnPropertyDescriptor(d,r).enumerable}))),f.forEach(function(r){ae(n,r,d[r])})}return n}function ae(n,u,d){return u in n?Object.defineProperty(n,u,{value:d,enumerable:!0,configurable:!0,writable:!0}):n[u]=d,n}var M=function(u,d){var f=H({},u,d.attrs);return v(ee,H({},f,{icon:te}),null)};M.displayName="SearchOutlined";M.inheritAttrs=!1;const le={class:"p-6"},se={key:0},oe={key:1},ne={class:"grid grid-cols-1 gap-4 mt-4"},re=["onUpdate:modelValue","id"],de={value:"",disabled:"",selected:""},ie=["value"],ue={key:0},ce={class:"flex"},me=["value"],ve=["disabled"],pe={class:"mt-6 flex justify-between"},fe={key:0,class:"text-right"},ye={__name:"SortAndFilterComponent",props:{sortAndFilters:{type:Array,default:()=>[]},allowSorting:{type:Boolean,default:!0},filters:{type:Object,default:()=>({})}},setup(n,{emit:u}){const d=i(!1),f=i(!1),r=i({}),g=i(""),m=i(""),O=i(null),c=u,_=n;q(()=>_.filters,l=>{r.value={...l}},{immediate:!0}),q(()=>g.value,l=>{l!=""&&m.value==""&&(m.value="asc"),l==""&&m.value!=""&&(m.value="")},{immediate:!0});const F=()=>{c("filtersUpdated",r.value)},b=async l=>{try{const{data:t}=await axios.get(l);return t}catch(t){O.value=t}},A=()=>{d.value=!0},w=()=>{d.value=!1},k=()=>{let l={...r.value,sort_by:g.value,sort_order:m.value};r.value=l,F(),w()},V=()=>{r.value={},g.value="",m.value="",F(),w()},p=l=>l.replace(/_/g," ").replace(/\b\w/g,t=>t.toUpperCase()),y=i({});return J(async()=>{r.value={..._.filters};for(const l of _.sortAndFilters)if(r.value[l.field_name]=r.value[l.field_name]||"",y.value[l.field_name]="",l.field_type==="select"&&l.api){const t=await b(l.api);l.options=t}}),(l,t)=>(a(),s("section",null,[v(I,{onClick:A},{default:P(()=>t[2]||(t[2]=[E("Sort And Filters")])),_:1}),v(Z,{show:d.value,onClose:w},{default:P(()=>[o("div",le,[f.value?(a(),s("div",se,[v(Q,{class:"mt-32 mb-32"})])):(a(),s("div",oe,[t[5]||(t[5]=o("h2",{class:"text-lg font-medium text-gray-900"},"Sort And Filters",-1)),o("div",ne,[(a(!0),s($,null,U(n.sortAndFilters,(e,x)=>(a(),s("div",{key:x},[v(G,{for:e.field_name,value:e.display_name??p(e.field_name)},null,8,["for","value"]),e.field_type==="select"?B((a(),s("select",{key:0,"onUpdate:modelValue":h=>r.value[e.field_name]=h,id:e.field_name,class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},[o("option",de,"Select "+S(e.display_name??p(e.field_name)),1),(a(!0),s($,null,U(e.options,(h,D)=>(a(),s("option",{key:D,value:D},S(p(h)),9,ie))),128))],8,re)),[[j,r.value[e.field_name]]]):e.field_type==="number"?(a(),T(N,{key:1,modelValue:r.value[e.field_name],"onUpdate:modelValue":h=>r.value[e.field_name]=h,id:e.field_name,type:"number",placeholder:"Enter value",class:"mt-1 block w-full",required:"",onKeydown:L(k,["enter"])},null,8,["modelValue","onUpdate:modelValue","id"])):(a(),T(N,{key:2,modelValue:r.value[e.field_name],"onUpdate:modelValue":h=>r.value[e.field_name]=h,id:e.field_name,type:"text",placeholder:"Search "+(e.display_name??p(e.field_name)),class:"mt-1 block w-full",required:"",onKeydown:L(k,["enter"])},null,8,["modelValue","onUpdate:modelValue","id","placeholder"])),v(K,{message:y.value[e.field_name],class:"mt-2"},null,8,["message"])]))),128)),_.allowSorting?(a(),s("div",ue,[v(G,{for:"sortOption",value:"Sort By"}),o("div",ce,[B(o("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>g.value=e),id:"sortOption",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},[t[3]||(t[3]=o("option",{value:"",selected:""},"-",-1)),(a(!0),s($,null,U(n.sortAndFilters,(e,x)=>(a(),s("option",{key:x,value:e.field_name},S(e.display_name??p(e.field_name)),9,me))),128))],512),[[j,g.value]]),B(o("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>m.value=e),id:"sortOrder",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",disabled:!g.value,required:""},t[4]||(t[4]=[o("option",{value:"",disabled:"",selected:""},"Select Sorting Order",-1),o("option",{value:"asc"},"Ascending",-1),o("option",{value:"desc"},"Descending",-1)]),8,ve),[[j,m.value]])]),v(K,{message:y.value.sortOption,class:"mt-2"},null,8,["message"])])):C("",!0)])])),o("div",pe,[o("button",{type:"button",onClick:V,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border border-black rounded-md font-semibold text-xs uppercase tracking-widest"}," Reset Filters "),f.value?C("",!0):(a(),s("div",fe,[o("button",{type:"button",onClick:w,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest"}," Close "),v(I,{onClick:k,class:"ms-3"},{default:P(()=>t[6]||(t[6]=[E(" Apply Filters ")])),_:1})]))])])]),_:1},8,["show"])]))}},ge={key:0},_e={key:1},be={key:0},he={key:0,class:"flex flex-wrap justify-between items-center mt-6 mb-6 space-y-4 md:space-y-0"},we={key:0,class:"w-full md:w-auto"},ke={key:1,class:"w-full md:w-auto block"},xe={key:2,class:"flex justify-end w-full md:w-auto"},Se={key:0,class:"block mt-12"},Fe={class:"grid md:grid-cols gap-4 mb-5"},Ce={key:2},$e={class:"flex justify-between w-full pt-6"},Oe={class:"flex justify-end flex-1"},Ae=["disabled"],Ve=["disabled"],Pe={key:1},De={__name:"ListComponent",props:{apiUrl:{type:String,required:!0},createCompleteSignal:{type:Number,default:!1},hasPaddingTop:{type:Boolean,default:!0},hasSearchBox:{type:Boolean,default:!1},sortAndFilters:{type:Array,required:!1},allowSorting:{type:Boolean,default:!0}},setup(n){const u=i(!0),d=i([]),f=i([]),r=i(null);i(null),i(null);const g=i(""),m=i(null),O=i(9),c=i(1),_=i(0),F=n;q(()=>F.createCompleteSignal,p=>{p&&b(c.value)});const b=async(p=1)=>{u.value=!0;try{const y=new URLSearchParams({limit:O.value,page:p});let l=f.value;l.search_value=g.value,Object.entries(l).forEach(([e,x])=>{x&&y.append(e,x)});const{data:t}=await W.get(`${F.apiUrl}?${y.toString()}`);d.value=t.data.data,m.value=t.data,_.value=t.data.last_page}catch(y){r.value=y}finally{u.value=!1}};J(()=>{b(c.value)});const A=()=>{c.value>=_.value||(c.value+=1,b(c.value))},w=()=>{c.value<=1||(c.value-=1,b(c.value))},k=()=>{c.value=1,b(c.value)},V=p=>{f.value=p,b()};return(p,y)=>(a(),s("div",null,[u.value?(a(),s("div",ge,[v(Q,{class:"mt-20 mb-20"})])):(a(),s("div",_e,[m.value?(a(),s("div",be,[n.sortAndFilters||n.hasSearchBox?(a(),s("div",he,[n.sortAndFilters?(a(),s("div",we,[v(ye,{sortAndFilters:n.sortAndFilters,onFiltersUpdated:V,allowSorting:n.allowSorting,filters:f.value},null,8,["sortAndFilters","allowSorting","filters"])])):(a(),s("div",ke)),n.hasSearchBox?(a(),s("div",xe,[v(N,{id:"searchText",type:"text",modelValue:g.value,"onUpdate:modelValue":y[0]||(y[0]=l=>g.value=l),placeholder:"Search",class:"border rounded-l-lg bg-gray-50",onKeydown:L(k,["enter"])},null,8,["modelValue"]),o("button",{class:"bg-gray-50 hover:bg-gray-200 text-gray py-2 px-4 rounded-r-lg",onClick:k},[v(X(M))])])):C("",!0)])):(a(),s($,{key:1},[n.hasPaddingTop?(a(),s("div",Se)):C("",!0)],64)),o("div",Fe,[Y(p.$slots,"list-view",{data:d.value,apiResponse:m.value})]),d.value.length===0||d.value==[]?(a(),s("div",Ce,[v(z)])):C("",!0),o("div",$e,[o("div",null,[o("p",null,"Showing "+S(m.value.from??0)+" to "+S(m.value.to??0)+" of "+S(m.value.total)+" entries",1)]),o("div",Oe,[o("button",{class:R(["bg-white hover:bg-gray-200 text-gray py-2 px-4 rounded ml-2",[{"cursor-not-allowed":c.value==1}]]),onClick:w,disabled:c.value==1},"Previous Page",10,Ae),o("button",{class:R(["bg-black hover:bg-gray-700 text-white py-2 px-4 rounded ml-2",[{"cursor-not-allowed":c.value==_.value}]]),disabled:c.value==_.value,onClick:A},"Next Page",10,Ve)])])])):(a(),s("div",Pe,[v(z)]))]))]))}};export{De as _};