<template>
    <div class="document-file-viewer">
        <div class="requestModal pointer h-100" @click="openModal" data-type="filePreview">
            <slot name="button"></slot>
        </div>

        <!-- Modal -->
        <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content">
                <button @click="closeModal" class="close-btn">X</button>
                <div v-if="isLoading" class="loading">Loading...</div>
                <div v-else-if="isImage">
                    <img :src="props.url" alt="Image Preview" class="image-preview" />
                </div>
                <div v-else>
                    <p>No preview available for this file.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    url: {
        type: String,
        required: true,
    },
});

const isLoading = ref(true);
const isImage = ref(false);
const isModalOpen = ref(false);

// Set loading to false and check if the file is an image on component mount
isLoading.value = false;
isImage.value = props.url && props.url.match(/\.(jpeg|jpg|gif|png)$/i) !== null;

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};
</script>

<style scoped>
.document-file-viewer {
    position: relative;
    text-align: center;
}

.loading {
    font-size: 1.5em;
    color: gray;
}

.image-preview {
    max-width: 100%;
    height: auto;
    border: 1px solid #ddd;
    margin-top: 20px;
}

.error-message {
    color: red;
    font-size: 1.2em;
    margin-top: 20px;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    max-width: 80%;
    max-height: 80%;
    overflow-y: auto;
    position: relative;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: red;
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
}

.close-btn:hover {
    background: darkred;
}
</style>
