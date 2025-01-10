import{_ as p,a as i}from"./TextInput-CMM4onGQ.js";import{l as n,p as _,o as u,g as m,c as w,h as c,b as s,a as f}from"./app-D3_i5aJr.js";const h={class:"w-full"},V={class:"flex flex-col md:flex-row justify-center items-center w-full gap-2"},x={class:"w-full md:flex-1"},b={class:"w-full md:flex-1"},y=["innerHTML"],D={__name:"DateRangeComponent",props:{label:{type:String,default:"Date"},showLabel:{type:Boolean,default:!0},additionalErrorMessage:{type:String,default:""}},emits:["update:modelValue"],setup(o,{emit:v}){const g=v,e=n(""),t=n(""),l=n(""),r=()=>{if(l.value="",!e.value||!t.value){l.value="Both date fields are required.";return}if(new Date(t.value)<new Date(e.value)){l.value="The <strong>end date</strong> must be the same as or later than the <strong>start date.</strong>";return}g("update:modelValue",[e.value,t.value])};return _([e,t],r),(k,a)=>(u(),m("div",h,[o.showLabel?(u(),w(p,{key:0,for:"receipt_date",value:o.label},null,8,["value"])):c("",!0),s("div",V,[s("div",x,[f(i,{id:"date_from",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=d=>e.value=d),type:"date",class:"mt-1 block w-full",onChange:r,required:""},null,8,["modelValue"])]),a[2]||(a[2]=s("div",{class:"w-full md:w-auto text-center"}," to ",-1)),s("div",b,[f(i,{id:"date_to",modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=d=>t.value=d),type:"date",class:"mt-1 block w-full",onChange:r,required:""},null,8,["modelValue"])])]),l.value||o.additionalErrorMessage?(u(),m("p",{key:1,class:"text-red-500 text-sm mt-2",innerHTML:l.value+" "+o.additionalErrorMessage},null,8,y)):c("",!0)]))}};export{D as _};