<template>
    <div>
        <img v-show="isLoaded" @load="onImgLoad" :src="src" :alt="alt" />
        <LoadingComponent v-show="!isLoaded" />
    </div>
</template>

<script
 setup>
import { ref } from 'vue';
import LoadingComponent from '@/Components/General/LoadingComponent.vue';

const props = defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        default: 'Image',
    },
});

const isLoaded = ref(false);

const onImgLoad = () => {
    console.log('Image loaded');
    isLoaded.value = true;
};
</script>
