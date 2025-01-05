<template>
    <div>
        <div class="flex justify-between content-center pt-2 pb-3 border-b border-gray-300 mb-6">
            <p class="font-bold">Payment Detail Report</p>
        </div>
        <div class="flex mb-5">
            <div>
                <InputLabel for="receipt_date" value="Date" />
                <div class="flex justify-center items-center">
                    <div>
                        <TextInput id="date_from" v-model="date_from" type="date" class="mt-1 block w-full" required />
                    </div>
                    <div class="p-2">
                        to
                    </div>
                    <div>
                        <TextInput id="date_to" v-model="date_to" type="date" class="mt-1 block w-full" required />
                    </div>
                </div>
                <!-- Display error message here -->
                <p v-if="errorMessage" class="text-red-500 text-sm mt-2">{{ errorMessage }}</p>
            </div>
        </div>
        <PrimaryButton @click="generateReport">Download</PrimaryButton>
    </div>
</template>

<script setup>
import InputLabel from '@/Components/General/InputLabel.vue';
import TextInput from '@/Components/General/TextInput.vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const date_from = ref('');
const date_to = ref('');
const errorMessage = ref('');

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

    // API Call
    try {
        const response = await axios.post('/api/report/download', {
            date_from: date_from.value,
            date_to: date_to.value
        });
        Swal.fire({
            title: "Success!",
            text: "The report has been successfully downloaded.",
            icon: "success",
            confirmButtonText: "OK",
        });
    } catch (err) {
        Swal.fire({
            title: "Error!",
            text: err.response?.data?.error || "An unexpected error occurred while generating the report.",
            icon: "error",
            confirmButtonText: "OK",
        });
    }
};
</script>
