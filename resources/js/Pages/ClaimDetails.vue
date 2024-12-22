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
                        <div>
                            <h2>Details</h2>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2">
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
                        <div>
                            <h2>Amount</h2>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2">
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
                        <div>
                            <h2>Receipt</h2>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-3 gap-9 p-6 border-gray-300 col-span-2">
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <p class="mb-1 text-sm text-gray-500">Receipt Document</p>
                                <InfoCircleOutlined class="text-gray-400" />
                            </div>
                            <div>
                                <div class="text-base cursor-pointer inline text-violet-700 font-bold" @click="openModal">Open</div>
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
                        <div>
                            <h2>Bank Account Details</h2>
                        </div>
                    </div>
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

const formatString = str => str
    .toLowerCase()
    .split('_')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

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
</script>
