<template>

    <Head title="Payment Details" />
    <AuthenticatedLayout>
        <template #header>
            <div class="flex flex-wrap justify-between items-center gap-y-4 sm:flex-nowrap">
                <div class="flex ">
                    <BreadcrumbComponent :breadcrumbs="breadcrumbs" />
                </div>
                <div class="flex items-center justify-center">
                    <StatusLabel v-if="apiResponse" class="text-sm inline-block" :status="fetchedData.status"
                        :name="fetchedData.status_name" />
                    <PrimaryButton
                        v-if="fetchedData.status_id < 2 && (getUserApprovalPrivillage().value == fetchedData.next_approval_level)"
                        class="bg-violet-500 hover:bg-violet-700 active:bg-violet-700 focus:bg-violet-700 font-bold"
                        @click="approvalClaimConfirmation">Approve Payment</PrimaryButton>
                    <PaymentVoucherForm :claimId="props.id" @createComplete="handleCreateComplete" class="rounded-md"
                        v-if="fetchedData.status_id == 2 && isFinance().value" />

                </div>
            </div>
        </template>

        <div v-if="isLoading">
            <LoadingComponent class="mt-32" />
        </div>
        <div v-else>
            <div class="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8" v-if="apiResponse">
                <div class="mb-5">
                    <PrimaryButton v-if="false" class="mr-5" @click="actionClicked('test')">
                        Preview
                    </PrimaryButton>
                    <PrimaryButton class="mr-5" @click="actionClicked('export')">
                        Export PDF
                    </PrimaryButton>
                </div>
                <div class="bg-white max-w-8xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5">
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
                            <p class="text-base">{{ formatString(fetchedData.payment_type) ?? '-' }}</p>
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Payment Category</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base capitalize">{{ fetchedData.payment_category?.name || '-' }}</p>
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
                <div class="bg-white max-w-8xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5">
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
                        <!-- <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">GST Percent</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">
                                {{ Number(fetchedData.gst_amount) === 0 ? '-' : fetchedData.gst_percent + ' %' }}
                            </p>
                        </div> -->
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
                <div class="bg-white max-w-8xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5">
                    <div class="px-5 py-3 border-b border-gray-300 flex justify-between items-center">
                        <div class="flex justify-between content-center w-full">
                            <h2>Bank Details</h2>
                            <AngleUp class="cursor-pointer" v-if="showSection.bankDetails"
                                @click="toggleShowSection('bankDetails')" />
                            <AngleDown class="cursor-pointer" v-if="!showSection.bankDetails"
                                @click="toggleShowSection('bankDetails')" />
                        </div>
                    </div>
                    <div class="grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2"
                        v-if="showSection.bankDetails">
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Bank Name</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">{{ fetchedData.payment_to_user?.bank_name || '-' }}</p>
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Bank Number</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">{{ fetchedData.payment_to_user?.bank_account_no || '-' }}</p>
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Swift Code</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">{{ fetchedData.payment_to_user?.swift_code || '-' }}</p>
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Country</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">{{ fetchedData.payment_to_user?.currency?.country?.name || '-' }} ({{
                                fetchedData.payment_to_user?.currency?.country?.short_code || '-' }})</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white max-w-8xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5">
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
                                <DocumentViewer :src="`/${fetchedData.receipt_file}`" alt="Receipt Image"
                                    :id="fetchedData.id" />
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

                <div class="bg-white max-w-8xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5">
                    <div class="px-5 py-3 border-b border-gray-300 flex justify-between items-center">
                        <div class="flex justify-between content-center w-full">
                            <h2>Payment Voucher</h2>
                            <AngleUp class="cursor-pointer" v-if="showSection.paymentVoucher"
                                @click="toggleShowSection('paymentVoucher')" />
                            <AngleDown class="cursor-pointer" v-if="!showSection.paymentVoucher"
                                @click="toggleShowSection('paymentVoucher')" />
                        </div>
                    </div>
                    <div class="grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2"
                        v-if="showSection.paymentVoucher">
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Payment Voucher Number</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">{{ fetchedData.payment_voucher_number ?? '-' }}</p>
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Payment Date</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">{{ fetchedData.payment_date ? formatDate(fetchedData.payment_date) : '-' }}</p>
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Receipt Document</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <div>
                                <DocumentViewer :src="`/${fetchedData.payment_voucher_receipt_file}`"
                                    alt="Receipt Image" :id="fetchedData.id" v-if="fetchedData.payment_voucher_receipt_file" />
                                    <span v-else>-</span>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Payment Mode</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <p class="text-base">{{ fetchedData.payment_mode ?? '-' }}</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white max-w-8xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5">
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
                        <ul class="relative list-none">
                            <div class="absolute top-3 left-[21px] w-[2px] bg-gray-300 h-full z-1"></div>
                            <li class="relative pl-10 mb-4" v-for="(log) in fetchedData.status_log" :key="log.id"
                                :value="log">
                                <div class="absolute left-[12px] top-1 w-5 h-5 rounded-full"
                                    style="background-color: #d4d9df;">
                                    <div class="absolute left-[4px] top-1 w-3 h-3 rounded-full"
                                        style="background-color:  #7367F0;"></div>
                                </div>
                                <div class="flex justify-between flex-col sm:flex-row">
                                    <p class="font-bold">{{ log.status }}</p>
                                    <p class="text-gray-500">{{ formatDateWithTime(log.created_at) }}</p>
                                </div>
                                <p>{{ log.name }}</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <div class="max-w-8xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5 text-right"
                    v-if="fetchedData.status_id < 2 && (getUserApprovalPrivillage().value == fetchedData.next_approval_level)">
                    <PrimaryButton
                        class="bg-violet-500 hover:bg-violet-700 active:bg-violet-700 focus:bg-violet-700 font-bold"
                        @click="approvalClaimConfirmation">Approve Payment</PrimaryButton>
                </div>

                <!-- <div class="max-w-8xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5 text-right"
                    v-if="fetchedData.status_id == 2 && isAdmin().value">
                    <PrimaryButton @click="paymentCompletedConfirmation">Mark as Payment Completed</PrimaryButton>
                </div> -->

                <div class="max-w-8xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mb-5 text-right"
                    v-if="fetchedData.status_id == 2 && isFinance().value">
                    <PaymentVoucherForm :claimId="props.id" @createComplete="handleCreateComplete" />
                </div>
            </div>
            <div v-else>
                <!-- <NotFound /> -->
                <div style="min-height: 80vh;" class="flex flex-col justify-center items-center">
                    <NotFound />
                    <div class="flex justify-center">
                        <Link :href="route('dashboard')">
                        <PrimaryButton class="p-4">Back To Home Page</PrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import NotFound from '@/Components/Icons/NotFound.vue';
import LoadingComponent from '@/Components/General/LoadingComponent.vue';
import StatusLabel from '@/Components/General/StatusLabel.vue';
import BreadcrumbComponent from '@/Components/General/BreadcrumbComponent.vue';
import { InfoCircleOutlined } from '@ant-design/icons-vue';
import { formatPrice, formatDate, formatString, formatDateWithTime, handleReportAction, downloadExcel, formatId } from '@/Helpers/helpers.js';
import AngleUp from '@/Components/Icons/AngleUp.vue';
import AngleDown from '@/Components/Icons/AngleDown.vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import { getUserApprovalPrivillage, isFinance } from '@/Composables/GlobalFuntions.vue';
import PaymentVoucherForm from '@/Components/Form/PaymentVoucherForm.vue';
import { Link } from '@inertiajs/vue3';
import Swal from 'sweetalert2';
import DocumentViewer from '@/Components/General/DocumentViewer.vue';

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
    { title: 'Payments', link: route('dashboard') },
    { title: '#' + formatId(props.id), },
];
const showSection = ref({
    details: true,
    amount: true,
    receipt: true,
    approvalHistory: true,
    paymentVoucher: true,
    bankDetails: true,
});

const toggleShowSection = (name) => {
    showSection.value[name] = !showSection.value[name];
};

const approvalClaimConfirmation = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "Are you sure you want to approve this Payment?",
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
        fetchData();
        Swal.fire({
            title: "Success!",
            text: "The payment has been successfully approved.",
            icon: "success",
            confirmButtonText: "OK"
        });
    } catch (err) {
        Swal.fire({
            title: "Error!",
            text: err.response ? err.response.data.error || "There was an error while approving the payment. Please try again." : "An unexpected error occurred.",
            icon: "error",
            confirmButtonText: "OK"
        });
    }
};

const paymentCompletedConfirmation = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "Are you sure you want to approve this Payment?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        allowOutsideClick: false,
        stopKeydownPropagation: true,
        preConfirm: () => {
            return new Promise((resolve, reject) => {
                callApiToCompleteClaim(resolve, reject);
            });
        }
    });
};

const callApiToCompleteClaim = async () => {
    try {
        const response = await axios.post(route('claims.paymentCompleted', props.id));
        fetchData();
        Swal.fire({
            title: "Success!",
            text: "The payment has been successfully approved.",
            icon: "success",
            confirmButtonText: "OK"
        });
    } catch (err) {
        Swal.fire({
            title: "Error!",
            text: err.response ? err.response.data.error || "There was an error while approving the payment. Please try again." : "An unexpected error occurred.",
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

const handleCreateComplete = () => {
    fetchData();
};

const generateReportData = (isExport) => {
    let data = {
        reportName: 'Claim Export',
        reportType: 'claimExport',
        claim_id: fetchedData.value.id,
        for_pdf: false,
    };

    if (isExport) {
        data.for_pdf = true;
    }

    return data;
};

const actionClicked = async (action) => {
    isLoading.value = true;

    try {
        const data = generateReportData(action === 'export');

        const urlMap = {
            // preview: `${route('report.preview')}?data=${encodeURIComponent(btoa(JSON.stringify(data)))}`,
            test: route('reports.generateReportPreview', 'claimExport'),
            export: route('reports.exportPDF', data.reportType),
        };

        await handleReportAction(action, data, urlMap, 'payment_report_' + formatId(fetchedData.value.id));
    } catch (error) {
        console.error('Error generating report:', error);
        // Handle error appropriately (e.g., show a notification)
    } finally {
        isLoading.value = false;
    }
};
</script>
