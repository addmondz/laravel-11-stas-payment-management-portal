import{o as c,g as f,r as g,k as m,C as x,b as t,a as o,w as d,A as b,e as u,u as n,B as v,n as k}from"./app-3VYeepW6.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as $}from"./InputError-BV9oqgCr.js";import{_ as C,a as B}from"./TextInput-CWO73tas.js";import{M as D}from"./Modal-Crf0SCZT.js";const V=["type"],A={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(a){return(r,l)=>(c(),f("button",{type:a.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"},[g(r.$slots,"default")],8,V))}},S={},U={class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"};function M(a,r){return c(),f("button",U,[g(a.$slots,"default")])}const y=h(S,[["render",M]]),N={class:"space-y-6"},P={class:"p-6"},E={class:"mt-6"},F={class:"mt-6 flex justify-end"},q={__name:"DeleteUserForm",setup(a){const r=m(!1),l=m(null),s=x({password:""}),_=()=>{r.value=!0,b(()=>l.value.focus())},p=()=>{s.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>i(),onError:()=>l.value.focus(),onFinish:()=>s.reset()})},i=()=>{r.value=!1,s.reset()};return(I,e)=>(c(),f("section",N,[e[6]||(e[6]=t("header",null,[t("h2",{class:"text-lg font-medium text-gray-900"},"Delete Account"),t("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1)),o(y,{onClick:_},{default:d(()=>e[1]||(e[1]=[u("Delete Account")])),_:1}),o(D,{show:r.value,onClose:i},{default:d(()=>[t("div",P,[e[4]||(e[4]=t("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete your account? ",-1)),e[5]||(e[5]=t("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1)),t("div",E,[o(C,{for:"password",value:"Password",class:"sr-only"}),o(B,{id:"password",ref_key:"passwordInput",ref:l,modelValue:n(s).password,"onUpdate:modelValue":e[0]||(e[0]=w=>n(s).password=w),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:v(p,["enter"])},null,8,["modelValue"]),o($,{message:n(s).errors.password,class:"mt-2"},null,8,["message"])]),t("div",F,[o(A,{onClick:i},{default:d(()=>e[2]||(e[2]=[u(" Cancel ")])),_:1}),o(y,{class:k(["ms-3",{"opacity-25":n(s).processing}]),disabled:n(s).processing,onClick:p},{default:d(()=>e[3]||(e[3]=[u(" Delete Account ")])),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{q as default};
