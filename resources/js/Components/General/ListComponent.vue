<template>
    <div>
        <div v-if="isLoading">
            <LoadingComponent class="mt-20 mb-20" />
        </div>
        <div v-else>
            <div v-if="apiResponse">
                <div class="w-full md:w-auto" v-if="sortAndFilters && showFiltersOutside">
                    <SortAndFilterComponent :sortAndFilters="sortAndFilters" @filtersUpdated="handleFiltersUpdated"
                        :allowSorting="allowSorting" :filters="filters" :showFiltersOutside="showFiltersOutside" />
                </div>
                <div v-else class="w-full md:w-auto block"></div>
                <div v-if="sortAndFilters || hasSearchBox"
                    class="flex flex-wrap justify-between items-center mt-6 mb-6 space-y-4 md:space-y-0">
                    <div class="w-full md:w-auto" v-if="sortAndFilters && !showFiltersOutside">
                        <SortAndFilterComponent :sortAndFilters="sortAndFilters" @filtersUpdated="handleFiltersUpdated"
                            :allowSorting="allowSorting" :filters="filters" :showFiltersOutside="showFiltersOutside" />
                    </div>
                    <div v-else class="w-full md:w-auto block"></div>

                    <div class="flex justify-end w-full md:w-auto" v-if="hasSearchBox">
                        <TextInput id="searchText" type="text" v-model="searchText" placeholder="Search"
                            class="border rounded-l-lg bg-gray-50" @keydown.enter="triggerSearch" />
                        <button class="bg-gray-50 hover:bg-gray-200 text-gray py-2 px-4 rounded-r-lg"
                            @click="triggerSearch">
                            <SearchOutlined />
                        </button>
                    </div>
                </div>
                <div class="block mt-12" v-else v-if="hasPaddingTop"></div>

                <div v-if="allowSelectAll">
                    <div class="flex items-center w-full order-last lg:order-none max-lg:mx-auto p-5 pt-0 rounded-xl overflow-hidden transition-all duration-500">
                        <SquareBtn @click="selectAllClicked(data)" :isSelected="selectAll" class="block mr-5"
                            v-show="allIds.length" />
                        <PrimaryButton v-if="isAllClaims"
                            class="select-none bg-violet-500 hover:bg-violet-700 active:bg-violet-700 focus:bg-violet-700 font-bold"
                            :class="{ 'invisible': !selectedIds.length }" @click="actionClicked('export')">
                            Export {{ selectedIds.length }} Payment(s)
                        </PrimaryButton>
                        <PaymentVoucherForm :claimId="selectedIdsToString" @createComplete="handleCreateComplete" class="rounded-md"
                            v-else-if="isFinance().value" :class="{ 'invisible': !selectedIds.length }" />
                        <PrimaryButton v-else
                            class="select-none bg-violet-500 hover:bg-violet-700 active:bg-violet-700 focus:bg-violet-700 font-bold"
                            :class="{ 'invisible': !selectedIds.length }" @click="groupApprovalConfirmation">
                            Approve {{ selectedIds.length }} Payment(s)
                        </PrimaryButton>
                    </div>
                </div>

                <div class="grid md:grid-cols gap-4 mb-5">
                    <slot name="list-view" :data="listData" :apiResponse="apiResponse"
                        :fullApiResponse="fullApiResponse" />
                </div>
                <div v-if="listData.length === 0">
                    <NotFound />
                </div>
                <div class="flex justify-between w-full pt-6 flex-col sm:flex-row">
                    <div class="mb-4 sm:mb-0">
                        <p class="text-center">Showing {{ apiResponse.from ?? 0 }} to {{ apiResponse.to ?? 0 }} of {{
                            apiResponse.total }} entries</p>
                    </div>
                    <div class="flex justify-end flex-1">
                        <button class="bg-white hover:bg-gray-200 text-gray py-2 px-4 rounded ml-2" @click="prevPage"
                            :disabled="currentPage === 1">Previous Page</button>
                        <button class="bg-black hover:bg-gray-700 text-white py-2 px-4 rounded ml-2"
                            :disabled="currentPage === lastPage" @click="nextPage">Next Page</button>
                    </div>
                </div>
            </div>
            <div v-else>
                <NotFound />
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, watch, computed } from 'vue';
import NotFound from '@/Components/Icons/NotFound.vue';
import LoadingComponent from '@/Components/General/LoadingComponent.vue';
import SortAndFilterComponent from '@/Components/General/SortAndFilterComponent.vue';
import TextInput from '@/Components/General/TextInput.vue';
import { SearchOutlined } from '@ant-design/icons-vue';
import SquareBtn from '../Icons/SquareBtn.vue';
import { isFinance } from '@/Composables/GlobalFuntions.vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import Swal from 'sweetalert2';
import PaymentVoucherForm from '@/Components/Form/PaymentVoucherForm.vue';
import { formatPrice, formatDate, formatString, formatDateWithTime, handleReportAction, downloadExcel, formatId } from '@/Helpers/helpers.js';

const isLoading = ref(true);
const listData = ref([]);
const filters = ref([]);
const error = ref(null);
const searchText = ref('');
const apiResponse = ref(null);
const fullApiResponse = ref(null);
const limit = ref(9);
const currentPage = ref(1);
const lastPage = ref(0);
const selectAll = ref(false);
const allIds = ref([]);
const props = defineProps({
    apiUrl: {
        type: String,
        required: true,
    },
    createCompleteSignal: {
        type: Number,
        default: false
    },
    hasPaddingTop: {
        type: Boolean,
        default: true
    },
    hasSearchBox: {
        type: Boolean,
        default: false
    },
    sortAndFilters: {
        type: Array,
        default: () => null,
    },
    allowSorting: {
        type: Boolean,
        default: true,
    },
    allowSelectAll: {
        type: Boolean,
        default: false,
    },
    showFiltersOutside: {
        type: Boolean,
        default: false,
    },
    isAllClaims: {
        type: Boolean,
        default: false,
    },
    selectedIds: {
        type: Array,
        default: () => [],
    },
});

// Watch the createCompleteSignal prop and fetch data if true
watch(() => props.createCompleteSignal, (newValue) => {
    if (newValue) {
        fetchList(currentPage.value);
    }
});

const fetchList = async (page = 1) => {
    isLoading.value = true;
    try {
        // Prepare the query parameters with limit, page, and filters
        const queryParams = new URLSearchParams({
            limit: limit.value,
            page: page,
        });

        let combinedFilters = filters.value;
        combinedFilters['search_value'] = searchText.value;

        // Dynamically add filters from filters.value as key-value pairs
        Object.entries(combinedFilters).forEach(([key, value]) => {
            if (value) {
                queryParams.append(key, value);
            }
        });

        const { data } = await axios.get(`${props.apiUrl}?${queryParams.toString()}`);
        listData.value = data?.data?.data || [];
        apiResponse.value = data.data;
        fullApiResponse.value = data;
        lastPage.value = data.data.last_page;
        allIds.value = data.data.data.map(item => item.id);
    } catch (err) {
        error.value = err;
    } finally {
        isLoading.value = false;
    }
};

const selectedIdsToString = computed(() => {
    return [...props.selectedIds].sort((a, b) => a - b).toString();
});

// On component mount, load data
onMounted(() => {
    fetchList(currentPage.value);
});

// Pagination functions
const nextPage = () => {
    if (currentPage.value >= lastPage.value) return;
    currentPage.value += 1;
    fetchList(currentPage.value);
};

const prevPage = () => {
    if (currentPage.value <= 1) return;
    currentPage.value -= 1;
    fetchList(currentPage.value);
};

const handleFiltersUpdated = (value) => {
    filters.value = value;
    fetchList();
};

const emit = defineEmits(['update:wholeSelectedIds']); // Declare the event
const selectAllClicked = (data) => {
    selectAll.value = !selectAll.value; // Toggle selectAll state

    // Get the updated selected IDs based on selectAll state
    let updatedSelectedIds = selectAll.value
        ? [...new Set([...props.selectedIds, ...allIds.value])] // Access selectedIds via props
        : [];

    // Emit the update to the parent component
    emit('update:wholeSelectedIds', updatedSelectedIds); // This will update selectedIds in the parent component
};

const triggerSearch = () => {
    currentPage.value = 1;
    fetchList(currentPage.value);
    emit('update:wholeSelectedIds', []);
    selectAll.value = false;
};

function handleCreateComplete () {
    triggerSearch();
}

const groupApprovalConfirmation = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "Are you sure you want to approve these Payments?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        allowOutsideClick: false,
        stopKeydownPropagation: true,
        preConfirm: () => {
            return new Promise((resolve, reject) => {
                callApiToGroupApproveClaim(resolve, reject);
            });
        }
    });
};

const groupUploadPaymentVoucehr = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "Are you sure you want to group upload Payment Vouchers?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        allowOutsideClick: false,
        stopKeydownPropagation: true,
        preConfirm: () => {
            return new Promise((resolve, reject) => {
                callApiToGroupApproveClaim(resolve, reject);
            });
        }
    });
};

const callApiToGroupApproveClaim = async () => {
    try {
        const response = await axios.post(route('claims.groupApprove', props.selectedIds.toString()));
        triggerSearch();
        Swal.fire({
            title: "Success!",
            text: "The Payment has been successfully approved.",
            icon: "success",
            confirmButtonText: "OK"
        });
    } catch (err) {
        console.log(err);
        Swal.fire({
            title: "Error!",
            text: err.response?.data?.error || "An unexpected error occurred while approving the claim.",
            icon: "error",
            confirmButtonText: "OK"
        });
    }
};

const generateReportData = (isExport) => {
    let data = {
        reportName: 'Claim Export',
        reportType: 'claimExport',
        claim_ids: selectedIdsToString.value,
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

        await handleReportAction(action, data, urlMap, 'payment_report_' + selectedIdsToString.value);
    } catch (error) {
        console.error('Error generating report:', error);
        // Handle error appropriately (e.g., show a notification)
    } finally {
        isLoading.value = false;
    }
};
</script>
