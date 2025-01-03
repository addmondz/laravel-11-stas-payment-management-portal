<template>
    <div class="square-btn" :class="{ selected: isSelected }" @click="toggleSelected"></div>
</template>

<style>
.square-btn {
    width: 20px;
    height: 20px;
    border: 3px solid black;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.square-btn.selected {
    background-color: lightblue;
    border-color: blue;
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
const emit = defineEmits(['update:selected']);

// Function to toggle selected and emit event
const toggleSelected = () => {
    emit('update:selected', !props.isSelected);
};
</script>