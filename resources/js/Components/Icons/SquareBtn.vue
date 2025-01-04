<template>
    <div class="square-btn border-4 flex justify-center items-center" :class="{
        'selected bg-violet-400 border-violet-400': isSelected,
        'border-gray-400': !isSelected
    }" @click="toggleSelected">
    <CheckOutlined class="font-extrabold text-white" v-show="isSelected" />
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
import { CheckOutlined } from '@ant-design/icons-vue';

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
