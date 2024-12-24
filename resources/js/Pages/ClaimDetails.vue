<template>

    <Head title="Claim Details" />
    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between content-center">
                <BreadcrumbComponent :breadcrumbs="breadcrumbs" />
                <StatusLabel v-if="apiResponse" class="text-sm inline-block" :status="fetchedData.status" />
            </div>
        </template>

        <div v-if="isLoading">
            <LoadingComponent class="mt-32" />
        </div>
        <div v-else>
            <div class="py-12 m-5 mt-0 pt-5" v-if="apiResponse">
                <div class="bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 mb-5">
                    <div class="px-5 py-3 border-b border-gray-300 flex justify-between items-center">
                        <div class="flex justify-between content-center w-full">
                            <h2>Details</h2>
                            <AngleUp class="cursor-pointer" v-if="showSection.details"
                                @click="toggleShowSection('details')" />
                            <AngleDown class="cursor-pointer" v-if="!showSection.details"
                                @click="toggleShowSection('details')" />
                        </div>
                    </div>
                    <div class="grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2" v-if="showSection.details">
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Created By</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">{{ fetchedData.created_user ? (fetchedData.created_user.name ?? '-') :
                                '-' }}
                            </p>
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Payment To</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">{{ fetchedData.payment_to_user ? (fetchedData.payment_to_user.name ??
                                '-') : '-'
                                }}</p>
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Payment Type</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">{{ fetchedData.payment_type ?? '-' }}</p>
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Payment Category</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">{{ fetchedData.payment_category ?? '-' }}</p>
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Purpose</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">{{ fetchedData.purpose ?? '-' }}</p>
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Creatd At</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">{{ formatDate(fetchedData.created_at) ?? '-' }}</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5">
                    <div class="px-5 py-3 border-b border-gray-300 flex justify-between items-center">
                        <div class="flex justify-between content-center w-full">
                            <h2>Amount</h2>
                            <AngleUp class="cursor-pointer" v-if="showSection.amount"
                                @click="toggleShowSection('amount')" />
                            <AngleDown class="cursor-pointer" v-if="!showSection.amount"
                                @click="toggleShowSection('amount')" />
                        </div>
                    </div>
                    <div class="grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2" v-if="showSection.amount">
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Total Amount</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">{{ fetchedData.currency_object.short_code }} {{
                                formatPrice(fetchedData.amount)
                            }}</p>
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">With GST</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">
                                {{ Number(fetchedData.gst_amount) === 0 ? 'No' : 'Yes' }}
                            </p>
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">GST Amount</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">
                                {{ Number(fetchedData.gst_amount) === 0 ? '-' : fetchedData.currency_object.short_code +
                                    ' ' +
                                    formatPrice(fetchedData.gst_amount) }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5">
                    <div class="px-5 py-3 border-b border-gray-300 flex justify-between items-center">
                        <div class="flex justify-between content-center w-full">
                            <h2>Receipt</h2>
                            <AngleUp class="cursor-pointer" v-if="showSection.receipt"
                                @click="toggleShowSection('receipt')" />
                            <AngleDown class="cursor-pointer" v-if="!showSection.receipt"
                                @click="toggleShowSection('receipt')" />
                        </div>
                    </div>
                    <div class="grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2" v-if="showSection.receipt">
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Receipt Document</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <div>
                                <div class="text-base cursor-pointer inline text-violet-700 font-bold"
                                    @click="openModal">Open
                                </div>
                                <div v-if="isModalOpen"
                                    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div class="bg-white p-4 pt-2 rounded-lg max-w-lg">
                                        <div class="flex flex-col">
                                            <div class="text-right">
                                                <CloseOutlined class="pb-2" @click="closeModal" />
                                            </div>
                                            <img :src="`/public/${fetchedData.receipt_file}`" alt="Receipt Image"
                                                class="max-w-full max-h-screen" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Receipt Date</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">{{ formatDate(fetchedData.receipt_date) ?? '-' }}</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5">
                    <div class="px-5 py-3 border-b border-gray-300 flex justify-between items-center">
                        <div class="flex justify-between content-center w-full">
                            <h2>Approval History</h2>
                            <AngleUp class="cursor-pointer" v-if="showSection.approvalHistory"
                                @click="toggleShowSection('approvalHistory')" />
                            <AngleDown class="cursor-pointer" v-if="!showSection.approvalHistory"
                                @click="toggleShowSection('approvalHistory')" />
                        </div>
                    </div>
                    <div class="p-6 border-gray-300 mb-4 w-full" v-if="showSection.approvalHistory">
                        <p v-for="(log) in fetchedData.status_log" :key="log.id" :value="log">
                            {{ formatDateWithTime(log.created_at) }} - {{ log.name }} - {{ log.status }}
                        </p>
                    </div>
                </div>

                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5 text-right">
                    <PrimaryButton @click="handleConfirmation">Approve Claim</PrimaryButton>
                </div>
            </div>
            <div v-else>
                <NotFound />
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import NotFound from '@/Components/Icons/NotFound.vue';
import LoadingComponent from '@/Components/LoadingComponent.vue';
import StatusLabel from '@/Components/StatusLabel.vue';
import BreadcrumbComponent from '@/Components/BreadcrumbComponent.vue';
import { formatId } from '@/Helpers/helpers.js';
import { InfoCircleOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { formatPrice, formatDate } from '@/Helpers/helpers.js';
import AngleUp from '@/Components/Icons/AngleUp.vue';
import AngleDown from '@/Components/Icons/AngleDown.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import Swal from 'sweetalert2';
import moment from 'moment';

const isLoading = ref(true);
const fetchedData = ref([]);
const error = ref(null);
const apiResponse = ref(null);
const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});
const apiUrl = route('claims.fetchData', props.id);
const schemaId = ref('0');
const returnData = ref({});
const breadcrumbs = [
    { title: 'Claims', link: route('claims') },
    { title: '#' + formatId(props.id), },
];
const showSection = ref({
    details: true,
    amount: true,
    receipt: true,
    approvalHistory: true,
});

const toggleShowSection = (name) => {
    showSection.value[name] = !showSection.value[name];
};

const handleConfirmation = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "Are you sure you want to approve this Claim?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        allowOutsideClick: false,
        stopKeydownPropagation: true,
        preConfirm: () => {
            // This ensures that the modal doesn't close until the API call is complete
            return new Promise((resolve, reject) => {
                callApiToApproveClaim(resolve, reject); // Call API and resolve/reject based on the response
            });
        }
    });
};

const callApiToApproveClaim = async () => {
    try {
        const response = await axios.post(route('claims.approveClaim', props.id));
        console.log(response.data.response); // Assuming this is the success response data
        fetchData();
        Swal.fire({
            title: "Success!",
            text: "The claim has been successfully approved.",
            icon: "success",
            confirmButtonText: "OK"
        });
    } catch (err) {
        Swal.fire({
            title: "Error!",
            text: err.response ? err.response.data.error || "There was an error while approving the claim. Please try again." : "An unexpected error occurred.",
            icon: "error",
            confirmButtonText: "OK"
        });
    }
};

// Fetch data
const fetchData = async () => {
    try {
        const { data } = await axios.get(apiUrl);
        fetchedData.value = data.data;
        apiResponse.value = data;
    } catch (err) {
        error.value = err;
    }
    finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    fetchData();
});


// State to manage modal visibility
const isModalOpen = ref(false);

// Methods to open and close the modal
const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

const formatDateWithTime = (date) => {
    return moment(date).format('DD-MM-YYYY hh:mm:ss A');
};
</script>
