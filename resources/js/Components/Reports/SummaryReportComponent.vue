<template>
    <div>
        <div class="flex justify-between content-center pt-2 pb-3 border-b border-gray-300 mb-6">
            <p class="font-bold">Summary Report</p>
        </div>
        <div v-if="!isLoading">
            <div class="flex mb-5">
                <DateRangeComponent v-model="dateRange" label="Date" :additionalErrorMessage="dateRangeErrorMsg" />
            </div>
            <PrimaryButton v-for="action in actions" :key="action" class="mr-5" @click="actionClicked(action)">
                {{ actionLabels[action] }}
            </PrimaryButton>
        </div>
        <LoadingComponent v-else class="mt-32 mb-32" />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import LoadingComponent from '../General/LoadingComponent.vue';
import DateRangeComponent from '../General/DateRangeComponent.vue';
import { handleReportAction } from '@/Helpers/helpers.js';
import axios from 'axios';

const dateRange = ref([]);
const dateRangeErrorMsg = ref('');
const isLoading = ref(false);
const actions = ['preview', 'test', 'export'];
const actionLabels = { preview: 'Preview', test: 'Test Display Pdf', export: 'Export PDF' };

watch(dateRange, () => {
    dateRangeErrorMsg.value = !dateRange.value.length ? 'Please select a date range.' : '';
});

const generateReportData = () => ({
    reportName: 'Summary Report Preview',
    reportType: 'summaryReport',
    startDate: dateRange.value[0],
    endDate: dateRange.value[1],
});

const actionClicked = async (action) => {
    if (dateRangeErrorMsg.value) return;

    isLoading.value = true;

    const data = generateReportData(); // Call the function here
    const urlMap = {
        preview: `${route('report.preview')}?data=${encodeURIComponent(btoa(JSON.stringify(data)))}`,
        test: route('reports.generateReportPreview', 'summaryReport'),
        export: route('reports.exportPDF', 'summaryReport'),
    };

    await handleReportAction(action, data, urlMap);

    isLoading.value = false;
};
</script>
