import{S as V,t as F}from"./helpers-BS2wWqwY.js";import{l as g,C as j,m as A,p as O,o as p,g as v,a as o,w as k,e as U,t as n,b as e,f as T,u as t,h as D,j as y,q as w,F as L,s as z,n as K}from"./app-CvVXicgL.js";import{_ as u}from"./InputError-CtLgpGQJ.js";import{_ as m,a as x}from"./TextInput-D4iVQBg5.js";import{M as H}from"./Modal-DNuoFv2Q.js";import{P as $}from"./PrimaryButton-Der0I-y4.js";import{L as I}from"./NotFound-o_SyxQxF.js";const W={class:"space-y-6"},G={key:0},J={class:"text-lg font-medium text-gray-900"},Q={class:"grid grid-cols-1 gap-4 mt-4"},X={key:0,class:"text-gray-500 font-bold"},Y={key:0,class:"text-gray-500 font-bold"},Z=["value"],ee={class:"text-right mt-6"},se={key:1},te={__name:"UserForm",props:{userData:{type:Object,default:null}},setup(c,{emit:b}){const i=c,f=g(!1),P=b,d=g([]),R=g(null),_=g(!1),s=j({name:"",email:"",password:"",password_confirmation:"",status:"",role:"",approvalRole:"",can_delete_claim:0});A(()=>i.userData,l=>{l?(s.name=l.name,s.email=l.email,s.role=l.role,s.status=l.status,s.approvalRole=l.approval_role_id,s.can_delete_claim=l.can_delete_claim):s.reset()},{immediate:!0});const q=()=>{f.value=!1},h=()=>{f.value=!f.value},N=()=>s.password!==s.password_confirmation?(s.errors.password_confirmation="Passwords do not match",!1):(s.errors.password_confirmation="",!0),S=async()=>{if(_.value=!0,!N()){_.value=!1,V.fire({title:"Error!",text:"Passwords do not match.",icon:"error",confirmButtonText:"OK"});return}try{const l=new FormData;for(const[M,B]of Object.entries(s.data()))l.append(M,B);const a=i.userData?route("user.update",i.userData.id):route("user.create"),C=await axios["post"](a,l);V.fire({title:"Success!",text:i.userData?"User updated successfully":"User created successfully",icon:"success",confirmButtonText:"OK"}),q(),s.reset(),P("createComplete",!0)}catch(l){l.response&&l.response.data.errors?s.errors=l.response.data.errors:V.fire({title:"Error!",text:"An unexpected error occurred.",icon:"error",confirmButtonText:"OK"})}finally{_.value=!1}},E=async()=>{try{const{data:l}=await axios.get(route("approvalRoles.list"));d.value=l}catch(l){R.value=l}};return O(()=>{E()}),(l,a)=>(p(),v("section",W,[o($,{onClick:h},{default:k(()=>[U(n(i.userData?"Edit":"Create"),1)]),_:1}),o(H,{show:f.value,onClose:h},{default:k(()=>[e("form",{onSubmit:T(S,["prevent"]),class:"p-6 space-y-4"},[_.value?(p(),v("div",se,[o(I,{class:"mt-32 mb-32"})])):(p(),v("div",G,[e("h2",J,n(i.userData?"Edit User":"Create a New User"),1),e("div",Q,[e("div",null,[o(m,{for:"name",value:"Name"}),o(x,{id:"name",modelValue:t(s).name,"onUpdate:modelValue":a[0]||(a[0]=r=>t(s).name=r),placeholder:"Full Name",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),o(u,{message:t(s).errors.name,class:"mt-2"},null,8,["message"])]),e("div",null,[o(m,{for:"email",value:"Email"}),o(x,{id:"email",type:"email",modelValue:t(s).email,"onUpdate:modelValue":a[1]||(a[1]=r=>t(s).email=r),placeholder:"Email",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),o(u,{message:t(s).errors.email,class:"mt-2"},null,8,["message"])]),e("div",null,[o(m,{for:"password",value:"Password"}),o(x,{id:"password",type:"password",modelValue:t(s).password,"onUpdate:modelValue":a[2]||(a[2]=r=>t(s).password=r),placeholder:"Password",class:"mt-1 block w-full",required:!i.userData||t(s).password_confirmation!==""},null,8,["modelValue","required"]),o(u,{message:t(s).errors.password,class:"mt-2"},null,8,["message"]),i.userData?(p(),v("small",X,"Please leave empty if you are not chaing the password")):D("",!0)]),e("div",null,[o(m,{for:"password_confirmation",value:"Confirm Password"}),o(x,{id:"password_confirmation",type:"password",modelValue:t(s).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=r=>t(s).password_confirmation=r),placeholder:"Confirm Password",class:"mt-1 block w-full",required:!i.userData||t(s).password!==""},null,8,["modelValue","required"]),o(u,{message:t(s).errors.password_confirmation},null,8,["message"]),i.userData?(p(),v("small",Y,"Please leave empty if you are not chaing the password")):D("",!0)]),e("div",null,[o(m,{for:"role",value:"User Role"}),y(e("select",{id:"role","onUpdate:modelValue":a[4]||(a[4]=r=>t(s).role=r),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",required:""},a[8]||(a[8]=[e("option",{value:"",disabled:"",selected:""},"Please select User Role",-1),e("option",{value:"user"},"User",-1),e("option",{value:"finance"},"Finance",-1),e("option",{value:"admin"},"Admin",-1)]),512),[[w,t(s).role]]),o(u,{message:t(s).errors.payment_type,class:"mt-2"},null,8,["message"])]),e("div",null,[o(m,{for:"payment_category",value:"Approval Role"}),y(e("select",{id:"currency","onUpdate:modelValue":a[5]||(a[5]=r=>t(s).approvalRole=r),class:"mt-1 payment_category w-full border-gray-300 rounded-md shadow-sm"},[a[9]||(a[9]=e("option",{value:"",selected:""},"None",-1)),(p(!0),v(L,null,z(d.value,(r,C)=>(p(),v("option",{key:C,value:C,class:"capitalize"},n(r),9,Z))),128))],512),[[w,t(s).approvalRole]]),o(u,{message:t(s).errors.payment_category,class:"mt-2"},null,8,["message"])]),e("div",null,[o(m,{for:"can_delete_claim",value:"Has Privilege to Delete Payment"}),y(e("select",{id:"status","onUpdate:modelValue":a[6]||(a[6]=r=>t(s).can_delete_claim=r),class:"mt-1 payment_category w-full border-gray-300 rounded-md shadow-sm"},a[10]||(a[10]=[e("option",{value:"1"},"True",-1),e("option",{value:"0"},"False",-1)]),512),[[w,t(s).can_delete_claim]]),o(u,{message:t(s).errors.payment_category,class:"mt-2"},null,8,["message"])]),e("div",null,[o(m,{for:"status",value:"Status"}),y(e("select",{id:"status","onUpdate:modelValue":a[7]||(a[7]=r=>t(s).status=r),class:"mt-1 payment_category w-full border-gray-300 rounded-md shadow-sm"},a[11]||(a[11]=[e("option",{value:"active"},"Active",-1),e("option",{value:"inactive"},"Inactive",-1)]),512),[[w,t(s).status]]),o(u,{message:t(s).errors.payment_category,class:"mt-2"},null,8,["message"])])]),e("div",ee,[e("button",{type:"button",onClick:h,class:"bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}," Close "),o($,{type:"submit",class:K(["ms-3",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:k(()=>[U(n(i.userData?"Update":"Submit"),1)]),_:1},8,["class","disabled"])])]))],32)]),_:1},8,["show"])]))}},ae={class:"w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500"},oe={class:"flex"},le={class:"flex-1"},re={class:"grid lg:grid-cols-5 grid-cols-2 gap-x-4 gap-y-4"},ie={class:"col"},de={class:"row"},ne={class:"col"},ce={class:"text-[14px]"},ue={class:"col"},me={class:"row"},pe={class:"col"},ve={class:"text-[14px] truncate"},fe={class:"col"},_e={class:"row"},ge={class:"col"},ye={class:"text-[14px] capitalize"},we={class:"col"},xe={class:"row"},be={class:"col"},he={class:"text-[14px]"},Ce={class:"col"},Ve={class:"row"},ke={class:"col"},Pe={class:"text-[14px]"},Ue={class:"flex justify-center items-center"},De={class:"cursor-pointer hover:text-violet-600 transition-all"},Be={__name:"UsersListTemplate",props:{data:{type:Object,required:!0}},setup(c,{emit:b}){const i=b,f=()=>{i("createComplete",!0)};return(P,d)=>(p(),v("div",ae,[e("div",oe,[e("div",le,[e("div",re,[e("div",ie,[d[0]||(d[0]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Email")])],-1)),e("div",de,[e("div",ne,[e("div",ce,n(c.data.email),1)])])]),e("div",ue,[d[1]||(d[1]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Name")])],-1)),e("div",me,[e("div",pe,[e("div",ve,n(c.data.name),1)])])]),e("div",fe,[d[2]||(d[2]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Role")])],-1)),e("div",_e,[e("div",ge,[e("div",ye,n(c.data.role),1)])])]),e("div",we,[d[3]||(d[3]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Approval Privillage")])],-1)),e("div",xe,[e("div",be,[e("div",he,n(c.data.privilege_name??"-"),1)])])]),e("div",Ce,[d[4]||(d[4]=e("div",{class:"row"},[e("div",{class:"col-auto"},[e("div",{class:"mb-1 text-xs text-gray-500"},"Status")])],-1)),e("div",Ve,[e("div",ke,[e("div",Pe,n(t(F)(c.data.status)??"-"),1)])])])])]),e("div",Ue,[e("button",De,[o(te,{userData:c.data,onCreateComplete:f},null,8,["userData"])])])])]))}};export{te as _,Be as a};