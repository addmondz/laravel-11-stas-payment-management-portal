<template>
    <div class="relative inline-block text-left">
        <button @click="toggleOpen"
            class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            {{ formatString(modelValue || selectedOption) }}
            <svg class="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        <div v-if="open" class="fixed inset-0 z-40" @click.self="closeDropdown"></div>

        <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <div v-show="open"
                class="absolute right-0 z-50 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div class="p-1">
                    <button v-for="option in options" :key="option" @click="selectOption(option)"
                        class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {{ formatString(option) }}
                    </button>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { formatString } from '@/Helpers/helpers.js';

const props = defineProps({
    modelValue: String,
    options: {
        type: Array,
        default: () => []
    },
    label: {
        type: String,
        default: 'an option'
    },
});
const emit = defineEmits(['update:modelValue']);

const open = ref(false);
const selectedOption = ref('Select ' + props.label);

const toggleOpen = () => open.value = !open.value;
const selectOption = option => {
    emit('update:modelValue', option);
    selectedOption.value = option;
    open.value = false;
};
const closeDropdown = () => open.value = false;

const handleClickOutside = e => {
    if (open.value && !e.target.closest('.relative')) closeDropdown();
};

watch(() => props.modelValue, (newValue) => {
    selectedOption.value = newValue || 'Select ' + props.label;
});

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', e => {
        if (open.value && e.key === 'Escape') closeDropdown();
    });
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', e => {
        if (open.value && e.key === 'Escape') closeDropdown();
    });
});
</script>
