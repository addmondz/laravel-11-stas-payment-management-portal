import{o as s,g as o,t as r,r as i,J as d,k as c,m,j as p,x as f}from"./app-JCI6V_in.js";const _={class:"block font-medium text-sm text-gray-700"},v={key:0},g={key:1},k={__name:"InputLabel",props:{value:{type:String}},setup(e){return(a,u)=>(s(),o("label",_,[e.value?(s(),o("span",v,r(e.value),1)):(s(),o("span",g,[i(a.$slots,"default")]))]))}},b={__name:"TextInput",props:{modelValue:{type:String,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(e,{expose:a}){const u=d(e,"modelValue"),t=c(null);return m(()=>{t.value.hasAttribute("autofocus")&&t.value.focus()}),a({focus:()=>t.value.focus()}),(x,n)=>p((s(),o("input",{class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm","onUpdate:modelValue":n[0]||(n[0]=l=>u.value=l),ref_key:"input",ref:t},null,512)),[[f,u.value]])}};export{k as _,b as a};