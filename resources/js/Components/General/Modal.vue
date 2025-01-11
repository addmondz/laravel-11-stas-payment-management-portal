<script setup>
import { computed, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
    show: { type: Boolean, default: false },
    maxWidth: { type: String, default: '2xl' },
    closeable: { type: Boolean, default: true },
    showMaxHeight: { type: Boolean, default: false },
});

const emit = defineEmits(['close']);

// Handle overflow state of the document body
watch(() => props.show, (isShown) => {
    document.body.style.overflow = isShown ? 'hidden' : '';
});

const close = () => props.closeable && emit('close');

const handleKeydown = (e) => e.key === 'Escape' && props.show && close();

onMounted(() => document.addEventListener('keydown', handleKeydown));
onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
});

const maxWidthClass = computed(() =>
({
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl',
    '3xl': 'sm:max-w-3xl',
    '4xl': 'sm:max-w-4xl',
    '5xl': 'sm:max-w-5xl',
    '6xl': 'sm:max-w-6xl',
    '7xl': 'sm:max-w-7xl',
    max: 'sm:max-w-7xl',
}[props.maxWidth])
);
</script>

<template>
    <Teleport to="body">
        <Transition leave-active-class="duration-200">
            <div v-show="show" class="fixed inset-0 flex items-center justify-center px-4 py-6 sm:px-0 z-50">
                <!-- Overlay -->
                <Transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0"
                    enter-to-class="opacity-100" leave-active-class="ease-in duration-200"
                    leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <div v-show="show" class="fixed inset-0 bg-gray-500 opacity-75" @click="close" />
                </Transition>

                <!-- Modal Content -->
                <Transition enter-active-class="ease-out duration-300"
                    enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200"
                    leave-from-class="opacity-100 translate-y-0 sm:scale-100"
                    leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <div v-show="show"
                        class="bg-white rounded-lg shadow-xl transform transition-all w-full mx-auto scrollbar-container"
                        :class="[maxWidthClass, { 'max-h-screen': showMaxHeight }]">
                        <slot v-if="show" />
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.scrollbar-container {
    max-height: 99%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-left: 8px;
}

/* Scrollbar styles */
.scrollbar-container::-webkit-scrollbar {
    width: 8px;
}

.scrollbar-container::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 12px;
    border: 2px solid transparent;
    background-clip: content-box;
}

.scrollbar-container::-webkit-scrollbar-track {
    background: #f5f5f5;
    border-radius: 12px;
}

.scrollbar-container {
    scrollbar-width: thin;
    scrollbar-color: #cccccc transparent;
}

.max-h-screen {
    height: 100%;
}

@media only screen and (min-width: 640px) and (max-width: 1300px) {
    .scrollbar-container.max-h-screen {
        max-width: 96%;
        margin: auto;
    }
}
</style>
