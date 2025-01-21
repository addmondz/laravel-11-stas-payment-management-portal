<template>
    <div>
        <div class="flex justify-between content-center pt-2 pb-3 border-b border-gray-300 mb-6">
            <p class="font-bold">Payment Detail Report</p>
        </div>
        <div v-if="!isLoading">
            <div class="flex mb-5">
                <DateRangeComponent v-model="dateRange" label="Date" :additionalErrorMessage="dateRangeErrorMsg" />
            </div>
            <div class="mb-5">
                <InputLabel for="payment_to" value="Payment To" />
                <CustomSelectComponent :choices="paymentReceiverData" v-model="payment_to" :label="'Payment To'"
                    :choicesIsObject="true" :allowAllChoice="true" />
            </div>
            <div class="mb-5">
                <InputLabel for="claim_ids_filters" value="Payment ID" />
                <CustomSelectComponent :choices="claimids" v-model="claim_ids_filters" :label="'Payment ID'"
                    :allowAllChoice="true" />
            </div>

            <ExportButtons @action="actionClicked" />
        </div>
        <LoadingComponent v-else class="mt-32 mb-32" />
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import LoadingComponent from '../General/LoadingComponent.vue';
import DateRangeComponent from '../General/DateRangeComponent.vue';
import InputLabel from '@/Components/General/InputLabel.vue';
import CustomSelectComponent from '../General/CustomSelectComponent.vue';
import ExportButtons from './ExportButtons.vue';
import { handleReportAction, downloadExcel } from '@/Helpers/helpers.js';

const dateRange = ref(['', '']);
const claim_ids_filters = ref([]);
const payment_to = ref([]);

const dateRangeErrorMsg = ref('');
const isLoading = ref(false);
const error = ref('');

const paymentReceiverData = ref([]);
const claimidsArray = ref([]);
const claimids = ref([]);

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
    reportName: 'Payment Detail Report',
    reportType: 'paymentDetailReport',
    startDate: dateRange.value[0],
    endDate: dateRange.value[1],
    payment_to: payment_to.value.join(','),
    claim_ids_filters: claim_ids_filters.value.join(','),
});

const actionClicked = async (action) => {
    validateDateRange();
    if (dateRangeErrorMsg.value) return;

    isLoading.value = true;

    const data = generateReportData();

    if (action == 'exportExcel') {
        const dateFrom = dateRange.value[0];
        const dateTo = dateRange.value[1];
        const apiUrl = route('reports.paymentDetailReport', { dateFrom: dateFrom, dateTo: dateTo });

        await downloadExcel(apiUrl, data, 'payment_detail', dateFrom, dateTo);

    } else {
        const urlMap = {
            preview: `${route('report.preview')}?data=${encodeURIComponent(btoa(JSON.stringify(data)))}`,
            test: route('reports.generateReportPreview', data.reportType),
            export: route('reports.exportPDF', data.reportType),
        };
        await handleReportAction(action, data, urlMap, 'payment_detail');
    }

    isLoading.value = false;
};

const listPaymentReceiverNameAndId = async () => {
    isLoading.value = true;
    try {
        const { data } = await axios.get(route('paymentReceiver.listNameAndId'));
        paymentReceiverData.value = data;
    } catch (err) {
        error.value = err;
    }
    finally {
        isLoading.value = false;
    }
};

const listClaimIds = async () => {
    isLoading.value = true;
    let url = route('claims.listIds'); // Base URL
    const paymentToValue = payment_to.value == 'All' ? '' : payment_to.value; // Assuming payment_to is a reference to an input or similar

    if (paymentToValue !== '') {
        // Append the query parameter if payment_to has a value
        const params = new URLSearchParams({ payment_to: paymentToValue });
        url += `?${params.toString()}`;
    }

    try {
        const { data } = await axios.get(url);
        claimidsArray.value = data;
        updateClaimIdList();
    } catch (err) {
        error.value = err;
    }
    finally {
        isLoading.value = false;
    }
};

const updateClaimIdList = async () => {
    isLoading.value = true;
    let selectedPaymentReceiver = payment_to.value.length === 0 ? ['All'] : payment_to.value;
    const returnList = selectedPaymentReceiver.flatMap(data => claimidsArray.value[data] || []);
    // console.log(returnList.length);
    claimids.value = returnList;
    isLoading.value = false;
};

watch(payment_to, (newValue, oldValue) => {
    updateClaimIdList();
    claim_ids_filters.value = [];
}, { deep: true });

onMounted(() => {
    listPaymentReceiverNameAndId();
    listClaimIds();
});
</script>
