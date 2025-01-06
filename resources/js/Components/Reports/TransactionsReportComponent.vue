<template>
    <div>
        <div class="flex justify-between content-center pt-2 pb-3 border-b border-gray-300 mb-6">
            <p class="font-bold">Transactions Report</p>
        </div>
        <div v-if="isLoading">
            <LoadingComponent class="mt-20 mb-20" />
        </div>
        <div class="flex mb-5 flex-col" v-else>
            <div class="mb-5">
                <InputLabel for="receipt_date" value="Date" />
                <div class="flex justify-center items-center">
                    <div>
                        <TextInput id="date_from" v-model="date_from" type="date" class="mt-1" required />
                    </div>
                    <div class="p-2">
                        to
                    </div>
                    <div>
                        <TextInput id="date_to" v-model="date_to" type="date" class="mt-1" required />
                    </div>
                    <div class="flex-1">

                    </div>
                </div>
                <!-- Display error message here -->
                <p v-if="errorMessage" class="text-red-500 text-sm mt-2">{{ errorMessage }}</p>
            </div>
            <div class="mb-5">
                <InputLabel for="payment_to" value="Payment Receiver" />
                <select id="payment_to" v-model="payment_to" class="mt-1 border-gray-300 rounded-md shadow-sm" required>
                    <option value="" disabled selected>Please select Payment Receiver</option>
                    <option value="">All</option>
                    <option v-for="paymentReceiver in paymentReceiverData" :key="paymentReceiver.id"
                        :value="paymentReceiver.id" class="capitalize"
                        :data-attr-currency-id="paymentReceiver.currency_id">
                        {{ paymentReceiver.name }}
                    </option>
                </select>
            </div>
            <div class="mb-5">
                <InputLabel for="claim_ids_filters" value="Claim ID" />
                <select id="claim_ids_filters" v-model="claim_ids_filters"
                    class="mt-1 border-gray-300 rounded-md shadow-sm" required>
                    <option value="" disabled selected>Please select Claim ID</option>
                    <option value="">All</option>
                    <option v-for="id in claimids" :key="id" :value="id">
                        {{ formatId(id) }}
                    </option>
                </select>
            </div>
        </div>
        <PrimaryButton @click="generateReport">Download</PrimaryButton>
    </div>
</template>

<script setup>
import InputLabel from '@/Components/General/InputLabel.vue';
import TextInput from '@/Components/General/TextInput.vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { formatId } from '@/Helpers/helpers.js';
import LoadingComponent from '../General/LoadingComponent.vue';

const date_from = ref('');
const date_to = ref('');
const payment_to = ref('');
const claim_ids_filters = ref('');

const errorMessage = ref('');
const error = ref('');
const isLoading = ref(false);

const paymentReceiverData = ref([]);
const claimids = ref([]);

const generateReport = async () => {
    // Clear previous error message
    errorMessage.value = '';

    // Validation
    if (!date_from.value || !date_to.value) {
        errorMessage.value = "Both 'Date From' and 'Date To' fields are required.";
        return;
    }

    if (new Date(date_to.value) < new Date(date_from.value)) {
        errorMessage.value = "'Date To' cannot be earlier than 'Date From'.";
        return;
    }

    const summaryReportUrl = route('reports.transactionsReport', {
        dateFrom: date_from.value,
        dateTo: date_to.value,
    });

    // Check if `payment_to` and `claim_ids_filters` are not empty and add them to the URL
    const urlParams = new URLSearchParams();

    if (payment_to.value) {
        urlParams.append('payment_to', payment_to.value);
    }
    if (claim_ids_filters.value) {
        urlParams.append('claim_ids_filters', claim_ids_filters.value);
    }

    // Append the parameters to the URL
    const finalUrl = `${summaryReportUrl}?${urlParams.toString()}`;

    try {
        // API Call to fetch the report
        const response = await axios.post(finalUrl, {}, { responseType: 'blob' });

        // Create a Blob from the response data
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);

        // Set filename from headers or fallback
        const contentDisposition = response.headers['content-disposition'];
        const filename = contentDisposition
            ? contentDisposition.split('filename=')[1].replace(/"/g, '')
            : 'report.pdf';

        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        Swal.fire({
            title: "Success!",
            text: "The report has been successfully downloaded.",
            icon: "success",
            confirmButtonText: "OK",
        });
    } catch (err) {
        console.error(err);
        Swal.fire({
            title: "Error!",
            text: err.response?.data?.error || "An unexpected error occurred while generating the report.",
            icon: "error",
            confirmButtonText: "OK",
        });
    }
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
    const paymentToValue = payment_to.value; // Assuming payment_to is a reference to an input or similar

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
    if (newValue !== oldValue) {
        listClaimIds();
    }
});

onMounted(() => {
    listPaymentReceiverNameAndId();
    listClaimIds();
});
</script>
