<template>
    <div>
        <div ref="dropdown" @click="openDropDown" @keydown.esc="closeDropDown"
            class="mt-1 border-gray-300 border rounded-md shadow-sm w-72 relative cursor-pointer w-full">
            <div class="p-2">
                {{ selectedFruits.length
                    ? selectedFruits.map(fruitId => getFruitName(fruitId)).join(", ")
                    : isEdit ? label : ("Select " + label) }}
            </div>
            <div v-if="showDropdown"
                class="absolute w-full bg-white border border-black rounded mt-1 z-10 rounded-md shadow-2xl">
                <div class="p-2">
                    <input type="text" v-model="searchQuery" placeholder="Search..."
                        class="w-full p-2 border-b outline-none rounded-md" />
                </div>
                <div v-if="filteredChoices.length">
                    <ul class="max-h-40 overflow-y-auto" v-if="choicesIsObject">
                        <li v-if="allowAllChoice" v-for="(option, idx) in [allOptions]" :key="option.id"
                            class="p-2 px-4 cursor-pointer"
                            :class="{ 'bg-blue-200': selectedFruits.includes(option.id), 'hover:bg-gray-100': !selectedFruits.includes(option.id) }"
                            @click.stop="selectFruit(option.id)">
                            {{ option.name }}
                        </li>
                        <li v-for="(option, idx) in filteredChoices" :key="option.id" class="p-2 px-4 cursor-pointer"
                            :class="{ 'bg-blue-200': selectedFruits.includes(option.id), 'hover:bg-gray-100': !selectedFruits.includes(option.id) }"
                            @click.stop="selectFruit(option.id)">
                            {{ option.name }}
                        </li>
                    </ul>
                    <ul class="max-h-40 overflow-y-auto" v-else>
                        <li v-for="(option, idx) in ['All']" :key="option" class="p-2 px-4 cursor-pointer"
                            :class="{ 'bg-blue-200': selectedFruits.includes(option), 'hover:bg-gray-100': !selectedFruits.includes(option) }"
                            @click.stop="selectFruit(option)">
                            {{ option }}
                        </li>
                        <li v-for="(option, idx) in filteredChoices" :key="option" class="p-2 px-4 cursor-pointer"
                            :class="{ 'bg-blue-200': selectedFruits.includes(option), 'hover:bg-gray-100': !selectedFruits.includes(option) }"
                            @click.stop="selectFruit(option)">
                            {{ option }}
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <p class="px-4 py-2 cursor-default" style="color: #36344d; font-size: 14px;">No matching options</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        choices: { type: Array, default: () => [] },
        modelValue: { type: [Array, String], default: () => [] },  // v-model prop
        allowMultiChoice: { type: Boolean, default: false },
        label: { type: String, default: '' },
        choicesIsObject: { type: Boolean, default: false },
        allowAllChoice: { type: Boolean, default: false },
        isEdit: { type: Boolean, default: false },
    },
    data() {
        return {
            selectedFruits: [...this.modelValue],  // Initialize with modelValue
            searchQuery: "",
            showDropdown: false,
            allOptions: { id: 'All', name: 'All' },
        };
    },
    computed: {
        filteredChoices() {
            if (!this.choices?.length) return [];
            return this.choices.filter(option =>
                String(this.choicesIsObject && typeof option === 'object' ? option.name : option)
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
            );
        }
    },
    watch: {
        choices(newValue, oldValue) {
            this.selectedFruits = [];
        }
    },
    methods: {
        handleClickOutside(event) {
            // Check if the dropdown element and input element are present
            if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target) &&
                this.$refs.dropdown.querySelector("input") && !this.$refs.dropdown.querySelector("input").contains(event.target)) {
                this.closeDropDown();
                document.removeEventListener("mousedown", this.handleClickOutside);
            }
        },
        selectFruit(fruit) {
            if (fruit === 'All') {
                // If "All" is selected, clear other selections
                this.selectedFruits = ['All'];
            } else {
                if (this.allowMultiChoice) {
                    const index = this.selectedFruits.indexOf(fruit);
                    if (index > -1) {
                        // Deselect the fruit
                        this.selectedFruits.splice(index, 1);
                    } else {
                        // Select the fruit
                        this.selectedFruits.push(fruit);

                        // Remove "All" if it is selected
                        const allIndex = this.selectedFruits.indexOf('All');
                        if (allIndex > -1) {
                            this.selectedFruits.splice(allIndex, 1);
                        }
                    }
                } else {
                    this.selectedFruits = [fruit];
                }
            }

            // Close dropdown if multi-select is not allowed
            if (!this.allowMultiChoice) {
                this.closeDropDown();
            }
        },
        closeDropDown() {
            this.showDropdown = false;
            // Emit the updated value using 'update:modelValue'
            this.$emit('update:modelValue', this.selectedFruits);
        },
        openDropDown() {
            this.showDropdown = true;
            if (this.showDropdown) {
                document.addEventListener("mousedown", this.handleClickOutside);
            } else {
                document.removeEventListener("mousedown", this.handleClickOutside);
            }
        },
        // Method to get the name of the selected fruit by its ID
        getFruitName(fruitId) {
            const fruit = this.choices.find(choice => choice.id === fruitId);
            return fruit ? fruit.name : fruitId;
        }
    }
};
</script>