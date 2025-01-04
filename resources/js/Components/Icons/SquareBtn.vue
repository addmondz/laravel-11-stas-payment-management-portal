<template>
    <div class="square-btn border-4" :class="{
        'selected bg-violet-500 border-violet-700': isSelected,
        'border-gray-600': !isSelected
    }" @click="toggleSelected">
    </div>
</template>

<style>
.square-btn {
    width: 25px;
    height: 25px;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}
</style>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Define props
const props = defineProps({
    isSelected: {
        type: Boolean,
        default: false,
    },
});

// Define emits
const emit = defineEmits(['update-selected']);

// Function to toggle selected and emit event
const toggleSelected = () => {
    emit('update-selected', !props.isSelected);
};
</script>
