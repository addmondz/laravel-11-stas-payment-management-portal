<template>
    <div>
        <div class="text-base cursor-pointer inline text-violet-700 font-bold" @click="openModal">
            Open
        </div>
        <Modal :show="isModalOpen" @close="closeModal">
            <div class="bg-white p-4 pt-2 rounded-lg img-modal">
                <div class="flex flex-col">
                    <div class="flex justify-between">
                        <PrimaryButton class="m-3 ml-0" @click="downloadImage">Download Receipt</PrimaryButton>
                        <CloseOutlined class="pb-2 mt-3" @click="closeModal" />
                    </div>
                    <div class="flex justify-center items-center img-loader-container">
                        <template v-if="!isImageError">
                            <img
                                v-show="isLoaded"
                                @load="onImgLoad"
                                @error="onImgError"
                                :src="src"
                                :alt="alt"
                                style="overflow: hidden;"
                            />
                            <LoadingComponent class="mt-32 mb-32" v-show="!isLoaded" />
                        </template>
                        <template v-else>
                            <NotFound />
                        </template>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LoadingComponent from '@/Components/General/LoadingComponent.vue';
import { CloseOutlined } from '@ant-design/icons-vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import { formatId } from '@/Helpers/helpers.js';
import Modal from '@/Components/General/Modal.vue';
import NotFound from '../Icons/NotFound.vue';

const props = defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        default: 'Image',
    },
    id: {
        type: Number,
        required: true,
    },
});

const isLoaded = ref(false);
const isImageError = ref(false); // Track if there's an error loading the image

const onImgLoad = () => {
    isLoaded.value = true;
};

const onImgError = () => {
    isImageError.value = true; // Set error flag
};

// State to manage modal visibility
const isModalOpen = ref(false);

// Methods to open and close the modal
const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

const downloadImage = async () => {
    try {
        const imageUrl = props.src;

        // Fetch the image as a Blob
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error("Failed to fetch the image");

        const blob = await response.blob();

        // Create a URL for the Blob
        const url = window.URL.createObjectURL(blob);

        // Create an <a> element and trigger download
        const a = document.createElement("a");
        a.href = url;
        a.download = "receipt-document-claim-" + formatId(props.id) + ".jpg"; // Specify the file name
        document.body.appendChild(a);
        a.click();
        a.remove(); // Clean up the DOM

        // Revoke the Blob URL after use
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Error downloading the image:", error);
    }
};
</script>
