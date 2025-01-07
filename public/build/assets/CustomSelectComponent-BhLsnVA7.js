import{o,g as i,b as n,t as c,j as f,y,F as u,m as a,n as h,f as m,h as C}from"./app-BTM8O_fb.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g={props:{choices:{type:Array,default:()=>[]},modelValue:{type:[Array,String],default:()=>[]},allowMultiChoice:{type:Boolean,default:!1},label:{type:String,default:""},choicesIsObject:{type:Boolean,default:!1}},data(){return{selectedFruits:[...this.modelValue],searchQuery:"",showDropdown:!1}},computed:{filteredChoices(){return!Array.isArray(this.choices)||this.choices.length===0?[]:this.choices.filter(s=>String(s).toLowerCase().includes(this.searchQuery.toLowerCase()))}},methods:{handleClickOutside(s){this.$refs.dropdown&&!this.$refs.dropdown.contains(s.target)&&this.$refs.dropdown.querySelector("input")&&!this.$refs.dropdown.querySelector("input").contains(s.target)&&(this.closeDropDown(),document.removeEventListener("mousedown",this.handleClickOutside))},selectFruit(s){if(this.allowMultiChoice){const t=this.selectedFruits.indexOf(s);t>-1?this.selectedFruits.splice(t,1):this.selectedFruits.push(s)}else this.selectedFruits=[s],this.closeDropDown()},closeDropDown(){this.showDropdown=!1,this.$emit("update:modelValue",this.selectedFruits)},openDropDown(){this.showDropdown=!0,this.showDropdown?document.addEventListener("mousedown",this.handleClickOutside):document.removeEventListener("mousedown",this.handleClickOutside)},getFruitName(s){const t=this.choices.find(d=>d.id===s);return t?t.name:s}}},D={class:"p-2"},F={key:0,class:"absolute w-full bg-white border border-black rounded mt-1 z-10 rounded-md shadow-2xl"},_={class:"p-2"},v={key:0,class:"max-h-40 overflow-y-auto"},k=["onClick"],x={key:1,class:"max-h-40 overflow-y-auto"},S=["onClick"];function O(s,t,d,L,r,l){return o(),i("div",null,[n("div",{ref:"dropdown",onClick:t[1]||(t[1]=(...e)=>l.openDropDown&&l.openDropDown(...e)),class:"mt-1 border-gray-300 border rounded-md shadow-sm w-72 relative cursor-pointer w-full"},[n("div",D,c(r.selectedFruits.length?r.selectedFruits.map(e=>l.getFruitName(e)).join(", "):"Select "+d.label),1),r.showDropdown?(o(),i("div",F,[n("div",_,[f(n("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>r.searchQuery=e),placeholder:"Search...",class:"w-full p-2 border-b outline-none rounded-md"},null,512),[[y,r.searchQuery]])]),d.choicesIsObject?(o(),i("ul",v,[(o(!0),i(u,null,a(l.filteredChoices,(e,p)=>(o(),i("li",{key:e.id,class:h(["p-2 px-4 cursor-pointer",{"bg-blue-200":r.selectedFruits.includes(e.id),"hover:bg-gray-100":!r.selectedFruits.includes(e.id)}]),onClick:m(w=>l.selectFruit(e.id),["stop"])},c(e.name),11,k))),128))])):(o(),i("ul",x,[(o(!0),i(u,null,a(l.filteredChoices,(e,p)=>(o(),i("li",{key:e,class:h(["p-2 px-4 cursor-pointer",{"bg-blue-200":r.selectedFruits.includes(e),"hover:bg-gray-100":!r.selectedFruits.includes(e)}]),onClick:m(w=>l.selectFruit(e),["stop"])},c(e),11,S))),128))]))])):C("",!0)],512)])}const j=b(g,[["render",O]]);export{j as C};