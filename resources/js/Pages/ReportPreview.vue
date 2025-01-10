<template>
    <Head :title="pageTitle" />
    
    <div class="flex flex-col items-center justify-center m-auto pl-8 pr-8">
        <div v-if="isLoading || isApiLoading" class="flex flex-col items-center justify-center max-w-7xl m-auto min-h-screen">
            <LoadingComponent class="mt-32 mb-32" />
        </div>
        <NotFound v-else-if="notFound || error" class="min-h-screen" />
        <div v-else>
            <div class="max-w-7xl overflow-auto mt-4 pb-8 m-auto" v-html="apiResponse.html"></div>
        </div>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import LoadingComponent from '@/Components/General/LoadingComponent.vue';
import NotFound from '@/Components/Icons/NotFound.vue';

const decodedData = ref(null);
const isLoading = ref(true);
const isApiLoading = ref(true);
const notFound = ref(false);
const error = ref(null);
const pageTitle = ref('');
const apiResponse = ref(null); // To store API response data

onMounted(async () => {
    const encodedData = new URLSearchParams(window.location.search).get('data');

    if (!encodedData) {
        handleError('Not Found');
        return;
    }

    try {
        const decodedValue = JSON.parse(atob(encodedData));
        decodedData.value = decodedValue;
        pageTitle.value = decodedValue.reportName;

        await callApi(decodedValue);
    } catch (err) {
        handleError('Failed to decode data.');
    } finally {
        isLoading.value = false;
    }
});

const callApi = async (decodedValue) => {
    isApiLoading.value = true;
    try {
        const { reportType, ...payload } = decodedValue;
        const url = route('reports.generateReportPreview', reportType);
        const response = await axios.post(url, payload); // Get API response
        apiResponse.value = response.data; // Store API response data
    } catch (apiError) {
        handleError('API call failed.');
    } finally {
        isApiLoading.value = false;
    }
};

const handleError = (message) => {
    error.value = message;
    notFound.value = message === 'Not Found';
    isLoading.value = false;
};
</script>
