import{a as c,o as s,g as a,j as A,p as de,u as Q,n as z,k as f,s as G,m as ie,w as j,e as L,b as o,h as F,c as S,F as P,l as B,t as k,x as I,B as E,i as ye,r as ge,q as le}from"./app-CnqBuGYj.js";import{L as W,N as se}from"./NotFound-Bj_nHcSj.js";import{M as be}from"./Modal-C8Y5im8H.js";import{P as N}from"./PrimaryButton-yAnmGp7w.js";import{_ as D}from"./InputError-B9sv3Ep1.js";import{_ as K,a as T}from"./TextInput-HP_9QdKv.js";import{_ as ae}from"./DateRangeComponent-CAXbfccF.js";import{I as ue}from"./BreadcrumbComponent-CU2Ikwqb.js";import{i as he}from"./AuthenticatedLayout-D40DijIM.js";import{S as J,h as _e}from"./helpers-Cuuican3.js";import{_ as we}from"./PaymentVoucherForm-D16oQwL4.js";var ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};function oe(l){for(var d=1;d<arguments.length;d++){var n=arguments[d]!=null?Object(arguments[d]):{},m=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(m=m.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),m.forEach(function(t){xe(l,t,n[t])})}return l}function xe(l,d,n){return d in l?Object.defineProperty(l,d,{value:n,enumerable:!0,configurable:!0,writable:!0}):l[d]=n,l}var X=function(d,n){var m=oe({},d,n.attrs);return c(ue,oe({},m,{icon:ke}),null)};X.displayName="CheckOutlined";X.inheritAttrs=!1;var Se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"};function re(l){for(var d=1;d<arguments.length;d++){var n=arguments[d]!=null?Object(arguments[d]):{},m=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(m=m.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),m.forEach(function(t){Ce(l,t,n[t])})}return l}function Ce(l,d,n){return d in l?Object.defineProperty(l,d,{value:n,enumerable:!0,configurable:!0,writable:!0}):l[d]=n,l}var Z=function(d,n){var m=re({},d,n.attrs);return c(ue,re({},m,{icon:Se}),null)};Z.displayName="SearchOutlined";Z.inheritAttrs=!1;const Fe={__name:"SquareBtn",props:{isSelected:{type:Boolean,default:!1}},emits:["update-selected"],setup(l,{emit:d}){const n=l,m=d,t=()=>{m("update-selected",!n.isSelected)};return(M,U)=>(s(),a("div",{class:z(["square-btn border-4 flex justify-center items-center",{"selected bg-violet-400 border-violet-400":l.isSelected,"border-gray-400":!l.isSelected}]),onClick:t},[A(c(Q(X),{class:"font-extrabold text-white"},null,512),[[de,l.isSelected]])],2))}},Ae={key:0},Oe={class:"p-6"},Ve={key:0},$e={key:1},Pe={class:"grid grid-cols-1 gap-4 mt-4"},Ue=["onUpdate:modelValue","id"],Be={value:"",disabled:"",selected:""},Ie=["value"],je={key:0},qe={class:"flex"},Ee=["value"],Te=["disabled"],Le={class:"mt-6 flex justify-between"},Ne={key:0,class:"text-right"},Me=["show"],Re={class:"border border-gray-300 rounded-2xl p-6 bg-white mt-5",style:{"margin-bottom":"-30px"}},De={key:0},Ke={key:1},ze={class:"grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3"},Ge=["onUpdate:modelValue","id"],He={value:"",disabled:"",selected:""},Ye=["value"],Je={key:0,class:"col-span-full space-y-2"},Qe={class:"grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3"},We=["value"],Xe=["disabled"],Ze={class:"mt-6 flex justify-between"},et={key:0,class:"grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3"},ne={__name:"SortAndFilterComponent",props:{sortAndFilters:{type:Array,default:()=>[]},allowSorting:{type:Boolean,default:!0},showFiltersOutside:{type:Boolean,default:!1},filters:{type:Object,default:()=>({})}},setup(l,{emit:d}){const n=f(!1),m=f(!1),t=f({}),M=f(null),U=d,h=l;G(()=>h.filters,i=>{t.value={...i}},{immediate:!0}),G(()=>t.value,i=>{i&&!i.sort_by&&(t.value.sort_by=""),i&&!i.sort_order&&(t.value.sort_order="")},{immediate:!0}),G(()=>t.value.sort_by,i=>{i!=""&&t.value.sort_order==""&&(t.value.sort_order="asc"),i==""&&t.value.sort_order!=""&&(t.value.sort_order="")},{immediate:!0});const q=()=>{U("filtersUpdated",t.value)},H=async i=>{try{const{data:r}=await axios.get(i);return r}catch(r){M.value=r}},g=()=>{n.value=!0},C=()=>{n.value=!1},_=()=>{q(),C()},O=()=>{t.value={},q(),C()},y=i=>i.replace(/_/g," ").replace(/\b\w/g,r=>r.toUpperCase()),w=f({});return ie(async()=>{t.value={...h.filters};for(const i of h.sortAndFilters)if(t.value[i.field_name]=t.value[i.field_name]||"",w.value[i.field_name]="",i.field_type==="select"&&i.api){const r=await H(i.api);i.options=r}}),(i,r)=>(s(),a("section",null,[l.showFiltersOutside?F("",!0):(s(),a("div",Ae,[c(N,{class:"mr-2",onClick:g},{default:j(()=>r[4]||(r[4]=[L("Sort And Filters")])),_:1}),o("button",{type:"button",onClick:O,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border border-gray-300 rounded-md font-semibold text-xs uppercase tracking-widest mr-2"}," Reset Filters ")])),l.showFiltersOutside?(s(),a("div",{key:2,show:n.value,onClose:C},[o("div",Re,[m.value?(s(),a("div",De,[c(W,{class:"mt-32 mb-32"})])):(s(),a("div",Ke,[r[11]||(r[11]=o("h2",{class:"text-lg font-medium text-gray-900"},"Sort And Filters",-1)),o("div",ze,[(s(!0),a(P,null,B(l.sortAndFilters,(e,x)=>(s(),a("div",{key:x,class:"space-y-2"},[c(K,{for:e.field_name,value:e.display_name??y(e.field_name)},null,8,["for","value"]),e.field_type==="select"?A((s(),a("select",{key:0,"onUpdate:modelValue":v=>t.value[e.field_name]=v,id:e.field_name,class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},[o("option",He,"Select "+k(e.display_name??y(e.field_name)),1),(s(!0),a(P,null,B(e.options,(v,V)=>(s(),a("option",{key:V,value:V},k(y(v)),9,Ye))),128))],8,Ge)),[[I,t.value[e.field_name]]]):e.field_type==="date_range"?(s(),S(ae,{key:1,modelValue:t.value[e.field_name],"onUpdate:modelValue":v=>t.value[e.field_name]=v,label:e.display_name??"",showLabel:!1},null,8,["modelValue","onUpdate:modelValue","label"])):e.field_type==="number"?(s(),S(T,{key:2,modelValue:t.value[e.field_name],"onUpdate:modelValue":v=>t.value[e.field_name]=v,id:e.field_name,type:"number",placeholder:"Enter value",class:"mt-1 block w-full",required:"",onKeydown:E(_,["enter"])},null,8,["modelValue","onUpdate:modelValue","id"])):(s(),S(T,{key:3,modelValue:t.value[e.field_name],"onUpdate:modelValue":v=>t.value[e.field_name]=v,id:e.field_name,type:"text",placeholder:"Search "+(e.display_name??y(e.field_name)),class:"mt-1 block w-full",required:"",onKeydown:E(_,["enter"])},null,8,["modelValue","onUpdate:modelValue","id","placeholder"])),c(D,{message:w.value[e.field_name],class:"mt-2"},null,8,["message"])]))),128)),h.allowSorting?(s(),a("div",Je,[c(K,{for:"sort_by",value:"Sort By"}),o("div",Qe,[A(o("select",{"onUpdate:modelValue":r[2]||(r[2]=e=>t.value.sort_by=e),id:"sort_by",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},[r[9]||(r[9]=o("option",{value:"",selected:""},"-",-1)),(s(!0),a(P,null,B(l.sortAndFilters,(e,x)=>(s(),a("option",{key:x,value:e.field_name},k(e.display_name??y(e.field_name)),9,We))),128))],512),[[I,t.value.sort_by]]),A(o("select",{"onUpdate:modelValue":r[3]||(r[3]=e=>t.value.sort_order=e),id:"sort_order",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",disabled:!t.value.sort_by,required:""},r[10]||(r[10]=[o("option",{value:"",disabled:"",selected:""},"Select Sorting Order",-1),o("option",{value:"asc"},"Ascending",-1),o("option",{value:"desc"},"Descending",-1)]),8,Xe),[[I,t.value.sort_order]])]),c(D,{message:w.value.sort_by,class:"mt-2"},null,8,["message"])])):F("",!0)])])),o("div",Ze,[m.value?F("",!0):(s(),a("div",et,[c(N,{onClick:_,class:"ms-3",style:{"margin-left":"0"}},{default:j(()=>r[12]||(r[12]=[L(" Apply Filters ")])),_:1}),o("button",{type:"button",onClick:O,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border border-black rounded-md font-semibold text-xs uppercase tracking-widest"}," Reset Filters ")]))])])],40,Me)):(s(),S(be,{key:1,show:n.value,onClose:C},{default:j(()=>[o("div",Oe,[m.value?(s(),a("div",Ve,[c(W,{class:"mt-32 mb-32"})])):(s(),a("div",$e,[r[7]||(r[7]=o("h2",{class:"text-lg font-medium text-gray-900"},"Sort And Filters",-1)),o("div",Pe,[(s(!0),a(P,null,B(l.sortAndFilters,(e,x)=>(s(),a("div",{key:x},[c(K,{for:e.field_name,value:e.display_name??y(e.field_name)},null,8,["for","value"]),e.field_type==="select"?A((s(),a("select",{key:0,"onUpdate:modelValue":v=>t.value[e.field_name]=v,id:e.field_name,class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},[o("option",Be,"Select "+k(e.display_name??y(e.field_name)),1),(s(!0),a(P,null,B(e.options,(v,V)=>(s(),a("option",{key:V,value:V},k(y(v)),9,Ie))),128))],8,Ue)),[[I,t.value[e.field_name]]]):e.field_type==="date_range"?(s(),S(ae,{key:1,modelValue:t.value[e.field_name],"onUpdate:modelValue":v=>t.value[e.field_name]=v,label:e.display_name??"",showLabel:!1},null,8,["modelValue","onUpdate:modelValue","label"])):e.field_type==="number"?(s(),S(T,{key:2,modelValue:t.value[e.field_name],"onUpdate:modelValue":v=>t.value[e.field_name]=v,id:e.field_name,type:"number",placeholder:"Enter value",class:"mt-1 block w-full",required:"",onKeydown:E(_,["enter"])},null,8,["modelValue","onUpdate:modelValue","id"])):(s(),S(T,{key:3,modelValue:t.value[e.field_name],"onUpdate:modelValue":v=>t.value[e.field_name]=v,id:e.field_name,type:"text",placeholder:"Search "+(e.display_name??y(e.field_name)),class:"mt-1 block w-full",required:"",onKeydown:E(_,["enter"])},null,8,["modelValue","onUpdate:modelValue","id","placeholder"])),c(D,{message:w.value[e.field_name],class:"mt-2"},null,8,["message"])]))),128)),h.allowSorting?(s(),a("div",je,[c(K,{for:"sort_by",value:"Sort By"}),o("div",qe,[A(o("select",{"onUpdate:modelValue":r[0]||(r[0]=e=>t.value.sort_by=e),id:"sort_by",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},[r[5]||(r[5]=o("option",{value:"",selected:""},"-",-1)),(s(!0),a(P,null,B(l.sortAndFilters,(e,x)=>(s(),a("option",{key:x,value:e.field_name},k(e.display_name??y(e.field_name)),9,Ee))),128))],512),[[I,t.value.sort_by]]),A(o("select",{"onUpdate:modelValue":r[1]||(r[1]=e=>t.value.sort_order=e),id:"sort_order",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",disabled:!t.value.sort_by,required:""},r[6]||(r[6]=[o("option",{value:"",disabled:"",selected:""},"Select Sorting Order",-1),o("option",{value:"asc"},"Ascending",-1),o("option",{value:"desc"},"Descending",-1)]),8,Te),[[I,t.value.sort_order]])]),c(D,{message:w.value.sort_by,class:"mt-2"},null,8,["message"])])):F("",!0)])])),o("div",Le,[o("button",{type:"button",onClick:O,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border border-black rounded-md font-semibold text-xs uppercase tracking-widest"}," Reset Filters "),m.value?F("",!0):(s(),a("div",Ne,[o("button",{type:"button",onClick:C,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest"}," Close "),c(N,{onClick:_,class:"ms-3"},{default:j(()=>r[8]||(r[8]=[L(" Apply Filters ")])),_:1})]))])])]),_:1},8,["show"]))]))}},tt={key:0},lt={key:1},st={key:0},at={key:0,class:"w-full md:w-auto"},ot={key:1,class:"w-full md:w-auto block"},rt={key:2,class:"flex flex-wrap justify-between items-center mt-6 mb-6 space-y-4 md:space-y-0"},nt={key:0,class:"w-full md:w-auto"},dt={key:1,class:"w-full md:w-auto block"},it={key:2,class:"flex justify-end w-full md:w-auto"},ut={key:0,class:"block mt-12"},ct={key:4},mt={class:"flex items-center w-full order-last lg:order-none max-lg:mx-auto p-5 pt-0 rounded-xl overflow-hidden transition-all duration-500"},vt={class:"grid md:grid-cols gap-4 mb-5"},pt={key:5},ft={class:"flex justify-between w-full pt-6 flex-col sm:flex-row"},yt={class:"mb-4 sm:mb-0"},gt={class:"text-center"},bt={class:"flex justify-end flex-1"},ht=["disabled"],_t=["disabled"],wt={key:1},Bt={__name:"ListComponent",props:{apiUrl:{type:String,required:!0},createCompleteSignal:{type:Number,default:!1},hasPaddingTop:{type:Boolean,default:!0},hasSearchBox:{type:Boolean,default:!1},sortAndFilters:{type:Array,default:()=>null},allowSorting:{type:Boolean,default:!0},allowSelectAll:{type:Boolean,default:!1},showFiltersOutside:{type:Boolean,default:!1},isAllClaims:{type:Boolean,default:!1},selectedIds:{type:Array,default:()=>[]}},emits:["update:wholeSelectedIds"],setup(l,{emit:d}){const n=f(!0),m=f([]),t=f([]),M=f(null),U=f(""),h=f(null),q=f(null),H=f(9),g=f(1),C=f(0),_=f(!1),O=f([]),y=l;G(()=>y.createCompleteSignal,p=>{p&&w(g.value)});const w=async(p=1)=>{var u;n.value=!0;try{const b=new URLSearchParams({limit:H.value,page:p});let ee=t.value;ee.search_value=U.value,Object.entries(ee).forEach(([Y,te])=>{te&&b.append(Y,te)});const{data:$}=await le.get(`${y.apiUrl}?${b.toString()}`);m.value=((u=$==null?void 0:$.data)==null?void 0:u.data)||[],h.value=$.data,q.value=$,C.value=$.data.last_page,O.value=$.data.data.map(Y=>Y.id)}catch(b){M.value=b}finally{n.value=!1}},i=ye(()=>[...y.selectedIds].sort((p,u)=>p-u).toString());ie(()=>{w(g.value)});const r=()=>{g.value>=C.value||(g.value+=1,w(g.value))},e=()=>{g.value<=1||(g.value-=1,w(g.value))},x=p=>{t.value=p,w()},v=d,V=p=>{_.value=!_.value;let u=_.value?[...new Set([...y.selectedIds,...O.value])]:[];v("update:wholeSelectedIds",u)},R=()=>{g.value=1,w(g.value),v("update:wholeSelectedIds",[]),_.value=!1};function ce(){R()}const me=()=>{J.fire({title:"Are you sure?",text:"Are you sure you want to approve these Payments?",icon:"question",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",allowOutsideClick:!1,stopKeydownPropagation:!0,preConfirm:()=>new Promise((p,u)=>{ve()})})},ve=async()=>{var p,u;try{const b=await le.post(route("claims.groupApprove",y.selectedIds.toString()));R(),J.fire({title:"Success!",text:"The Payment has been successfully approved.",icon:"success",confirmButtonText:"OK"})}catch(b){console.log(b),J.fire({title:"Error!",text:((u=(p=b.response)==null?void 0:p.data)==null?void 0:u.error)||"An unexpected error occurred while approving the claim.",icon:"error",confirmButtonText:"OK"})}},pe=p=>{let u={reportName:"Claim Export",reportType:"claimExport",claim_ids:i.value,for_pdf:!1};return u.for_pdf=!0,u},fe=async p=>{n.value=!0;try{const u=pe(p==="export"),b={test:route("reports.generateReportPreview","claimExport"),export:route("reports.exportPDF",u.reportType)};await _e(p,u,b,"claim_report_"+i.value)}catch(u){console.error("Error generating report:",u)}finally{n.value=!1}};return(p,u)=>(s(),a("div",null,[n.value?(s(),a("div",tt,[c(W,{class:"mt-20 mb-20"})])):(s(),a("div",lt,[h.value?(s(),a("div",st,[l.sortAndFilters&&l.showFiltersOutside?(s(),a("div",at,[c(ne,{sortAndFilters:l.sortAndFilters,onFiltersUpdated:x,allowSorting:l.allowSorting,filters:t.value,showFiltersOutside:l.showFiltersOutside},null,8,["sortAndFilters","allowSorting","filters","showFiltersOutside"])])):(s(),a("div",ot)),l.sortAndFilters||l.hasSearchBox?(s(),a("div",rt,[l.sortAndFilters&&!l.showFiltersOutside?(s(),a("div",nt,[c(ne,{sortAndFilters:l.sortAndFilters,onFiltersUpdated:x,allowSorting:l.allowSorting,filters:t.value,showFiltersOutside:l.showFiltersOutside},null,8,["sortAndFilters","allowSorting","filters","showFiltersOutside"])])):(s(),a("div",dt)),l.hasSearchBox?(s(),a("div",it,[c(T,{id:"searchText",type:"text",modelValue:U.value,"onUpdate:modelValue":u[0]||(u[0]=b=>U.value=b),placeholder:"Search",class:"border rounded-l-lg bg-gray-50",onKeydown:E(R,["enter"])},null,8,["modelValue"]),o("button",{class:"bg-gray-50 hover:bg-gray-200 text-gray py-2 px-4 rounded-r-lg",onClick:R},[c(Q(Z))])])):F("",!0)])):(s(),a(P,{key:3},[l.hasPaddingTop?(s(),a("div",ut)):F("",!0)],64)),l.allowSelectAll?(s(),a("div",ct,[o("div",mt,[A(c(Fe,{onClick:u[1]||(u[1]=b=>V(p.data)),isSelected:_.value,class:"block mr-5"},null,8,["isSelected"]),[[de,O.value.length]]),l.isAllClaims?(s(),S(N,{key:0,class:z(["select-none bg-violet-500 hover:bg-violet-700 active:bg-violet-700 focus:bg-violet-700 font-bold",{invisible:!l.selectedIds.length}]),onClick:u[2]||(u[2]=b=>fe("export"))},{default:j(()=>[L(" Export "+k(l.selectedIds.length)+" Payment(s) ",1)]),_:1},8,["class"])):Q(he)().value?(s(),S(we,{key:1,claimId:i.value,onCreateComplete:ce,class:z(["rounded-md",{invisible:!l.selectedIds.length}])},null,8,["claimId","class"])):(s(),S(N,{key:2,class:z(["select-none bg-violet-500 hover:bg-violet-700 active:bg-violet-700 focus:bg-violet-700 font-bold",{invisible:!l.selectedIds.length}]),onClick:me},{default:j(()=>[L(" Approve "+k(l.selectedIds.length)+" Payment(s) ",1)]),_:1},8,["class"]))])])):F("",!0),o("div",vt,[ge(p.$slots,"list-view",{data:m.value,apiResponse:h.value,fullApiResponse:q.value})]),m.value.length===0?(s(),a("div",pt,[c(se)])):F("",!0),o("div",ft,[o("div",yt,[o("p",gt,"Showing "+k(h.value.from??0)+" to "+k(h.value.to??0)+" of "+k(h.value.total)+" entries",1)]),o("div",bt,[o("button",{class:"bg-white hover:bg-gray-200 text-gray py-2 px-4 rounded ml-2",onClick:e,disabled:g.value===1},"Previous Page",8,ht),o("button",{class:"bg-black hover:bg-gray-700 text-white py-2 px-4 rounded ml-2",disabled:g.value===C.value,onClick:r},"Next Page",8,_t)])])])):(s(),a("div",wt,[c(se)]))]))]))}};export{Bt as _,Fe as a};
