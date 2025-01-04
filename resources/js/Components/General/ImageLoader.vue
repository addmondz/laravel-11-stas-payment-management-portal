<template>
    <div class="flex justify-center items-center" style="min-width: 300px; min-height: 300px;">
        <!-- Loading Spinner -->
        <LoadingComponent v-if="isLoading" />
        <!-- Image -->
        <img v-else :src="src" :alt="alt" class="max-w-full max-h-screen" @load="isLoading = false" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LoadingComponent from './LoadingComponent.vue';

// Props
defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        default: 'Image',
    },
});

// Reactive state for loading
const isLoading = ref(true);
</script>

<style scoped>
.loading-spinner {
    font-size: 18px;
    color: gray;
    font-weight: bold;
}
</style>