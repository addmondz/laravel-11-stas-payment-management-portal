<template>
    <div>
        <div class="flex justify-between content-center pt-2 pb-3 border-b border-gray-300 mb-6">
            <p class="font-bold">Summary Report</p>
        </div>
        <div v-if="!isLoading">
            <div class="flex mb-5">
                <DateRangeComponent v-model="dateRange" label="Date" :additionalErrorMessage="dateRangeErrorMsg" />
            </div>
            <PrimaryButton @click="generateReport">Preview</PrimaryButton>
        </div>
        <LoadingComponent v-else class="mt-32 mb-32" />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import LoadingComponent from '../General/LoadingComponent.vue';
import DateRangeComponent from '../General/DateRangeComponent.vue';

const dateRange = ref([]);
const dateRangeErrorMsg = ref('');
const isLoading = ref(false);

const validateDateRange = () => {
    dateRangeErrorMsg.value = !Array.isArray(dateRange.value) || !dateRange.value.length
        ? 'Please select a date range.'
        : '';
};

watch(dateRange, () => {
    validateDateRange();
});

const generateReport = async () => {
    validateDateRange();
    if (dateRangeErrorMsg.value) return;

    const data = btoa(JSON.stringify({
        reportName: 'Summary Report Preview',
        reportType: 'summaryReport',
        startDate: dateRange.value[0],
        endDate: dateRange.value[1],
    }));

    window.open(`${route('report.preview')}?data=${encodeURIComponent(data)}`, '_blank');
};
</script>
