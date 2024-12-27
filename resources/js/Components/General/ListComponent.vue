<template>
    <div>
        <div v-if="isLoading">
            <LoadingComponent class="mt-20 mb-20" />
        </div>
        <div v-else>
            <div class="pt-12" v-if="apiResponse">
                <div class="grid md:grid-cols gap-4 mb-5">
                    <slot></slot>
                    <slot name="list-view" :data="listData" />
                </div>
                <div v-if="listData.length === 0 || listData == []">
                    <NotFound />
                </div>
                <div class="flex justify-between w-full pt-6">
                    <div>
                        <p>Showing {{ apiResponse.from ?? 0 }} to {{ apiResponse.to ?? 0 }} of {{ apiResponse.total }}
                            entries</p>
                    </div>
                    <div class="flex justify-end flex-1">
                        <button class="bg-white hover:bg-gray-200 text-gray py-2 px-4 rounded ml-2" @click="prevPage"
                            :disabled="currentPage == 1" :class="[{ 'cursor-not-allowed': currentPage == 1 }]">Previous Page</button>
                        <button class="bg-black hover:bg-gray-700 text-white py-2 px-4 rounded ml-2"
                            :disabled="currentPage == lastPage"
                            :class="[{ 'cursor-not-allowed': currentPage == lastPage }]" @click="nextPage">Next Page</button>
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

const isLoading = ref(true);
const listData = ref([]);
const error = ref(null);
const brandFilter = ref(null);
const categoryFilter = ref(null);
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
    }
});

// Watch the createCompleteSignal prop and fetch data if true
watch(() => props.createCompleteSignal, (newValue) => {
    if (newValue) {
        fetchList(currentPage.value);
    }
});

// Fetch products with filters applied
const fetchList = async (page = 1) => {
    try {
        const queryParams = new URLSearchParams({
            limit: limit.value,
            page: page,
            brand: brandFilter.value ?? '',
            category: categoryFilter.value ?? '',
        }).toString();

        const { data } = await axios.get(`${props.apiUrl}?${queryParams}`);
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
    brandFilter.value = null;
    categoryFilter.value = null;
    applyFilters();
};

const handleCreateComplete = () => {
    fetchList(currentPage.value);
};
</script>
