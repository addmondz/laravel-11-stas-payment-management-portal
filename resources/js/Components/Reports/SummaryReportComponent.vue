<template>
    <div>
        <div class="flex justify-between content-center pt-2 pb-3 border-b border-gray-300 mb-6">
            <p class="font-bold">Summary Report</p>
        </div>
        <div v-if="!isLoading">
            <div class="flex mb-5">
                <DateRangeComponent v-model="dateRange" label="Date" :additionalErrorMessage="dateRangeErrorMsg" />
            </div>
            <PrimaryButton v-for="action in actionsWithLabels" :key="action.name" class="mr-5"
                @click="actionClicked(action.name)">
                {{ action.label }}
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
import { handleReportAction, downloadExcel } from '@/Helpers/helpers.js';

const dateRange = ref(['', '']);
const dateRangeErrorMsg = ref('');
const isLoading = ref(false);
const actionsWithLabels = [
    { name: 'preview', label: 'Preview' },
    { name: 'test', label: 'Test Display Pdf' },
    { name: 'export', label: 'Export PDF' },
    { name: 'exportExcel', label: 'Export Excel' },
];

const validateDateRange = () => {
    if (!Array.isArray(dateRange.value) || !dateRange.value.length) {
        dateRangeErrorMsg.value = 'Please select a date range.';
    } else if (dateRange.value[0] === '' && dateRange.value[1] === '') {
        dateRangeErrorMsg.value = 'Please select a date range.';
    } else {
        dateRangeErrorMsg.value = '';
    }
};

watch(dateRange, () => {
    validateDateRange();
});

const generateReportData = () => ({
    reportName: 'Summary Report Preview',
    reportType: 'summaryReport',
    startDate: dateRange.value[0],
    endDate: dateRange.value[1],
});

const actionClicked = async (action) => {
    validateDateRange();
    if (dateRangeErrorMsg.value) return;

    isLoading.value = true;

    const data = generateReportData();

    if (action == 'exportExcel') {
        const dateFrom = dateRange.value[0];
        const dateTo = dateRange.value[1];
        const apiUrl = route('reports.newSummaryReport', { dateFrom: dateFrom, dateTo: dateTo });

        await downloadExcel(apiUrl, data, 'summary_report', dateFrom, dateTo);

    } else {
        const urlMap = {
            preview: `${route('report.preview')}?data=${encodeURIComponent(btoa(JSON.stringify(data)))}`,
            test: route('reports.generateReportPreview', 'summaryReport'),
            export: route('reports.exportPDF', data.reportType),
        };
        await handleReportAction(action, data, urlMap, 'summary_report');
    }

    isLoading.value = false;
};
</script>
