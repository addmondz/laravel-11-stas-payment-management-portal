import{C as c,i as g,c as p,w as i,o as a,b as t,a as n,u as s,d as y,g as v,h,f as w,e as r,n as x,P as b}from"./app-3VYeepW6.js";import{_}from"./GuestLayout-CZUiuXd5.js";import{P as k}from"./PrimaryButton-BxbnStsG.js";import"./ApplicationLogo-M_mRncSF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const V={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"},B={key:0,class:"mb-4 font-medium text-sm text-green-600"},C={class:"mt-4 flex items-center justify-between"},L={__name:"VerifyEmail",props:{status:{type:String}},setup(d){const l=d,o=c({}),m=()=>{o.post(route("verification.send"))},u=g(()=>l.status==="verification-link-sent");return(f,e)=>(a(),p(_,null,{default:i(()=>[t("div",V,[n(s(y),{title:"Email Verification"}),e[2]||(e[2]=t("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1)),u.value?(a(),v("div",B," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),t("form",{onSubmit:w(m,["prevent"])},[t("div",C,[n(k,{class:x({"opacity-25":s(o).processing}),disabled:s(o).processing},{default:i(()=>e[0]||(e[0]=[r(" Resend Verification Email ")])),_:1},8,["class","disabled"]),n(s(b),{href:f.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:i(()=>e[1]||(e[1]=[r(" Log Out")])),_:1},8,["href"])])],32)])]),_:1}))}};export{L as default};
