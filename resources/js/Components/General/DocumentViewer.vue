<template>
    <div>
        <div class="text-base cursor-pointer inline text-violet-700 font-bold" @click="openModal">Open</div>
        <Modal :show="isModalOpen" @close="closeModal" :maxWidth="isPDF ? '7xl' : '2xl'">
            <div class="bg-white p-4 pt-2 rounded-lg img-modal">
                <div class="flex justify-between">
                    <PrimaryButton class="m-3 ml-0" @click="downloadFile">Download Receipt</PrimaryButton>
                    <CloseOutlined class="pb-2 mt-3" @click="closeModal" />
                </div>
                <div class="flex justify-center items-center img-loader-container">
                    <template v-if="!isFileError">
                        <template v-if="isImage">
                            <img v-show="isLoaded" @load="onFileLoad" @error="onFileError" :src="src" :alt="alt" />
                            <LoadingComponent v-show="!isLoaded" class="mt-32 mb-32" />
                        </template>
                        <template v-if="isPDF">
                            <iframe v-show="isLoaded" :src="src" width="100%" :height="pdfHeight" @load="onFileLoad"
                                @error="onFileError" />
                            <LoadingComponent v-show="!isLoaded" class="mt-32 mb-32" />
                        </template>
                    </template>
                    <NotFound v-else />
                </div>
            </div>
        </Modal>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import LoadingComponent from '@/Components/General/LoadingComponent.vue';
import { CloseOutlined } from '@ant-design/icons-vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import Modal from '@/Components/General/Modal.vue';
import NotFound from '../Icons/NotFound.vue';
import { formatId } from '@/Helpers/helpers.js';

const props = defineProps({
    src: { type: String, required: true },
    alt: { type: String, default: 'File' },
    id: { type: Number, required: true }
});

const isLoaded = ref(false);
const isFileError = ref(false);
const isModalOpen = ref(false);
const pdfHeight = ref('500px');

const isImage = computed(() => props.src?.match(/\.(jpg|jpeg|png)$/));
const isPDF = computed(() => props.src?.endsWith('.pdf'));

const onFileLoad = () => { isLoaded.value = true; if (isPDF.value) pdfHeight.value = '800px'; };
const onFileError = () => { isFileError.value = true; console.error("Error loading the file"); };

const openModal = () => { isModalOpen.value = true; };
const closeModal = () => { isModalOpen.value = false; };

const downloadFile = async () => {
    try {
        const response = await fetch(props.src);
        if (!response.ok) throw new Error("Failed to fetch the file");

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `receipt-document-payment-${formatId(props.id)}.${isPDF.value ? 'pdf' : 'jpg'}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Error downloading the file:", error);
    }
};
</script>