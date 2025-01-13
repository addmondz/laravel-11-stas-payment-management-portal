<template>
    <!-- Preview Button -->
    <PrimaryButton class="mr-5" @click="$emit('action', 'test')">
        Preview
    </PrimaryButton>

    <!-- Export Dropdown -->
    <div class="relative inline-block" ref="dropdownRef">
        <PrimaryButton 
            class="inline-flex items-center bg-violet-500 hover:bg-violet-700 active:bg-violet-700 focus:bg-violet-700 font-bold" 
            @click="showExportOptions = !showExportOptions"
        >
            Export
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </PrimaryButton>

        <!-- Dropdown Menu -->
        <div v-show="showExportOptions" 
            class="absolute z-10 mt-2 bg-white rounded-md shadow-lg"
            style="min-width: 120px;"
        >
            <div class="py-1">
                <button 
                    class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                    @click="handleAction('export')"
                >
                    PDF
                </button>
                <button 
                    class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                    @click="handleAction('exportExcel')"
                >
                    Excel
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';

const showExportOptions = ref(false);
const dropdownRef = ref(null);

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        showExportOptions.value = false;
    }
};

const handleAction = (action) => {
    showExportOptions.value = false;
    emit('action', action);
};

const emit = defineEmits(['action']);

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.relative {
    position: relative;
}

.absolute {
    position: absolute;
}

.z-10 {
    z-index: 10;
}
</style> 