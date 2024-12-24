<template>

    <Head title="Claims" />
    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between content-center">
                <BreadcrumbComponent :breadcrumbs="[{ title: 'Claims' }]" />
                <CreateClaimForm @createComplete="handleCreateComplete" />
            </div>
        </template>

        <div v-if="isLoading">
            <LoadingComponent class="mt-32" />
        </div>
        <div v-else>
            <div class="py-12" v-if="apiResponse">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0">
                    <!-- to continue later -->
                    <div class="grid md:grid-cols-4 gap-4 mb-5">
                        <FilterDropdown class="w-full mr-5" label="a Payment Type" v-model="paymentType"
                            :options="['reimbursement', 'external_payment']" />
                        <TextInput id="search" v-model="searchValue" placeholder="Search" class="text-center" />

                        <button class="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded ml-2"
                            @click="resetFilters">Reset
                            Filters</button>
                        <button class="bg-violet-500 hover:bg-violet-700 text-white py-2 px-4 rounded ml-2"
                            @click="applyFilters">Search</button>
                    </div>
                    <div class="grid md:grid-cols gap-4 mb-5">
                        <ClaimsListTemplate v-for="product in listData" :key="product.id" :data="product" />
                    </div>
                    <div v-if="listData.length === 0 || listData == []">
                        <NotFound />
                    </div>
                    <div class="flex justify-between w-full">
                        <div>
                            <p>Showing {{ apiResponse.from ?? 0 }} to {{ apiResponse.to ?? 0 }} of {{ apiResponse.total
                                }}
                                entries
                            </p>
                        </div>
                        <div class="flex justify-end flex-1">
                            <button class="bg-white hover:bg-gray-200 text-gray py-2 px-4 rounded ml-2"
                                @click="prevPage" :disabled="currentPage == 1"
                                :class="[{ 'cursor-not-allowed': currentPage == 1 }]">Previous
                                Page</button>
                            <button class="bg-black hover:bg-gray-700 text-white py-2 px-4 rounded ml-2"
                                :disabled="currentPage == lastPage"
                                :class="[{ 'cursor-not-allowed': currentPage == lastPage }]" @click="nextPage">Next
                                Page</button>
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
import { ref, onMounted, watch } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import ClaimsListTemplate from '@/Components/ClaimsListTemplate.vue';
import NotFound from '@/Components/Icons/NotFound.vue';
import LoadingComponent from '@/Components/LoadingComponent.vue';
import CreateClaimForm from '@/Components/CreateClaimForm.vue';
import FilterDropdown from '@/Components/FilterDropdown.vue';
import BreadcrumbComponent from '@/Components/BreadcrumbComponent.vue';
import TextInput from '@/Components/TextInput.vue';

const isLoading = ref(true);
const listData = ref([]);
const error = ref(null);
const paymentType = ref(null);
const categoryFilter = ref(null);
const searchValue = ref('');
const apiResponse = ref(null);
const limit = ref(9);
const currentPage = ref(1);
const lastPage = ref(0);
const apiUrl = route('claims.list');

// Fetch data with filters applied
const fetchList = async (page = 1) => {
    try {
        const queryParams = new URLSearchParams({
            limit: limit.value,
            page: page,
            searchValue: searchValue.value ?? '',
            paymentType: paymentType.value ?? '',
            category: categoryFilter.value ?? '',
        }).toString();

        const { data } = await axios.get(`${apiUrl}?${queryParams}`);
        listData.value = data.data.data;
        apiResponse.value = data.data;
        lastPage.value = data.data.last_page;
    } catch (err) {
        error.value = err;
    }
    finally {
        isLoading.value = false;
    }
};

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

const handleCreateComplete = () => {
    fetchList(currentPage.value);
};

const prevPage = () => {
    if (currentPage.value <= 1) return;
    currentPage.value -= 1;
    fetchList(currentPage.value);
};

// Apply filters and reset filters
const applyFilters = () => {
    currentPage.value = 1;
    fetchList(currentPage.value);
};

const resetFilters = () => {
    paymentType.value = null;
    categoryFilter.value = null;
    applyFilters();
};
</script>
