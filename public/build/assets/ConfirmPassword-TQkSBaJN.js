import{C as n,c as l,o as d,w as t,a as r,u as a,d as p,b as e,e as f,n as u,f as c}from"./app-BO-iAwN0.js";import{_ as w}from"./GuestLayout-C3WNtZfd.js";import{_}from"./InputError-VSG9Md0o.js";import{_ as b,a as x}from"./TextInput-BRN9kaBJ.js";import{P as g}from"./PrimaryButton-DhK2kd3z.js";import"./ApplicationLogo-M_mRncSF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={class:"flex justify-end mt-4"},h={__name:"ConfirmPassword",setup(C){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(P,o)=>(d(),l(w,null,{default:t(()=>[r(a(p),{title:"Confirm Password"}),o[2]||(o[2]=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1)),e("form",{onSubmit:c(i,["prevent"])},[e("div",null,[r(b,{for:"password",value:"Password"}),r(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":o[0]||(o[0]=m=>a(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),r(_,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",y,[r(g,{class:u(["ms-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>o[1]||(o[1]=[f(" Confirm ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{h as default};
