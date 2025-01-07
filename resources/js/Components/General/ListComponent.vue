<template>
    <div>
        <div v-if="isLoading">
            <LoadingComponent class="mt-20 mb-20" />
        </div>
        <div v-else>
            <div v-if="apiResponse">
                <div v-if="sortAndFilters || hasSearchBox" class="flex flex-wrap justify-between items-center mt-6 mb-6 space-y-4 md:space-y-0">
                    <div class="w-full md:w-auto" v-if="sortAndFilters">
                        <SortAndFilterComponent :sortAndFilters="sortAndFilters" @filtersUpdated="handleFiltersUpdated" :allowSorting="allowSorting" :filters="filters" />
                    </div>
                    <div v-else class="w-full md:w-auto block"></div>

                    <div class="flex justify-end w-full md:w-auto" v-if="hasSearchBox">
                        <TextInput id="searchText" type="text" v-model="searchText" placeholder="Search" class="border rounded-l-lg bg-gray-50" @keydown.enter="triggerSearch" />
                        <button class="bg-gray-50 hover:bg-gray-200 text-gray py-2 px-4 rounded-r-lg" @click="triggerSearch">
                            <SearchOutlined />
                        </button>
                    </div>
                </div>
                <div class="block mt-12" v-else v-if="hasPaddingTop"></div>

                <div class="grid md:grid-cols gap-4 mb-5">
                    <slot name="list-view" :data="listData" :apiResponse="apiResponse" />
                </div>
                <div v-if="listData.length === 0 || listData == []">
                    <NotFound />
                </div>
                <div class="flex justify-between w-full pt-6 flex-col sm:flex-row">
                    <div class="mb-4 sm:mb-0">
                        <p class="text-center">Showing {{ apiResponse.from ?? 0 }} to {{ apiResponse.to ?? 0 }} of {{ apiResponse.total }} entries</p>
                    </div>
                    <div class="flex justify-end flex-1">
                        <button class="bg-white hover:bg-gray-200 text-gray py-2 px-4 rounded ml-2" @click="prevPage"
                            :disabled="currentPage == 1" :class="[{ 'cursor-not-allowed': currentPage == 1 }]">Previous
                            Page</button>
                        <button class="bg-black hover:bg-gray-700 text-white py-2 px-4 rounded ml-2"
                            :disabled="currentPage == lastPage"
                            :class="[{ 'cursor-not-allowed': currentPage == lastPage }]" @click="nextPage">Next
                            Page</button>
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
import { ref, onMounted, watch } from 'vue';
import NotFound from '@/Components/Icons/NotFound.vue';
import LoadingComponent from '@/Components/General/LoadingComponent.vue';
import SortAndFilterComponent from '@/Components/General/SortAndFilterComponent.vue';
import TextInput from '@/Components/General/TextInput.vue';
import { SearchOutlined } from '@ant-design/icons-vue';

const isLoading = ref(true);
const listData = ref([]);
const filters = ref([]);
const error = ref(null);
const brandFilter = ref(null);
const categoryFilter = ref(null);
const searchText = ref('');
const apiResponse = ref(null);
const limit = ref(9);
const currentPage = ref(1);
const lastPage = ref(0);
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
        required: false,
    },
    allowSorting: {
        type: Boolean,
        default: true,
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
            // Only add filters if they have a value (non-empty or non-null)
            if (value) {
                queryParams.append(key, value);
            }
        });

        const { data } = await axios.get(`${props.apiUrl}?${queryParams.toString()}`);
        listData.value = data.data.data;
        apiResponse.value = data.data;
        lastPage.value = data.data.last_page;
    } catch (err) {
        error.value = err;
    } finally {
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

const prevPage = () => {
    if (currentPage.value <= 1) return;
    currentPage.value -= 1;
    fetchList(currentPage.value);
};

const triggerSearch = () => {
    currentPage.value = 1;
    fetchList(currentPage.value);
};

const handleFiltersUpdated = (value) => {
    filters.value = value;
    fetchList();
};
</script>
