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
                <InputLabel for="payment_to" value="Payment Receiver" />
                <CustomSelectComponent :choices="paymentReceiverData" v-model="payment_to" :label="'Payment Receiver'"
                    :choicesIsObject="true" :allowAllChoice="true" />
            </div>
            <div class="mb-5">
                <InputLabel for="claim_ids_filters" value="Payment ID" />
                <CustomSelectComponent :choices="claimids" v-model="claim_ids_filters" :label="'Payment ID'"
                    :allowAllChoice="true" />
            </div>
            <PrimaryButton @click="generateReport">Preview</PrimaryButton>
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

const dateRange = ref([]);
const claim_ids_filters = ref([]);
const payment_to = ref([]);

const dateRangeErrorMsg = ref('');
const isLoading = ref(false);
const error = ref('');

const paymentReceiverData = ref([]);
const claimids = ref([]);

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
        reportName: 'Payment Detail Report Preview',
        reportType: 'paymentDetailReportReport',
        startDate: dateRange.value[0],
        endDate: dateRange.value[1],
        payment_to: payment_to.value.join(','),
        claim_ids_filters: claim_ids_filters.value.join(','),
    }));

    window.open(`${route('report.preview')}?data=${encodeURIComponent(data)}`, '_blank');
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
        claimids.value = data;
    } catch (err) {
        error.value = err;
    }
    finally {
        isLoading.value = false;
    }
};

watch(payment_to, (newValue, oldValue) => {
    if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        listClaimIds();
        claim_ids_filters.value = [];
    }
}, { deep: true });

onMounted(() => {
    listPaymentReceiverNameAndId();
    listClaimIds();
});
</script>
