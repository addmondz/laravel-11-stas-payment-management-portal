<template>
    <div>
        <ListComponent :apiUrl="route('claims.list')" :createCompleteSignal="createCompleteSignal"
            :sortAndFilters="sortAndFilters" :allowSorting="true">
            <template v-slot:list-view="{ data, apiResponse, fullApiResponse }">

                <!-- Total Amount -->
                <div class="bg-white p-5 rounded-xl" v-if="Object.keys(fullApiResponse.total_sum_by_country).length">
                    <h2 class="mb-4">Total Amount</h2>
                    <!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                        <div v-for="(data, countryCode) in fullApiResponse.total_sum_by_country" :key="countryCode"
                            class="bg-gray-100 p-6 rounded-xl shadow-md transition-all duration-500 border">
                            <p class="mb-2">{{ data.country_name }} ({{ countryCode }})</p>
                            <div class="flex justify-between">
                                <span>Amount:</span>
                                <span>
                                    <!-- <span class="font-bold">{{ formatPrice(data.amount) }}</span> {{ data.currency }} -->
                                    <span class="font-bold">{{ data.currency }} {{ formatPrice(data.amount) }}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <ClaimsListTemplate :createComplete="createCompleteSignal"
                    @createComplete="handleCreateComplete"
                    @update-selected-list="handleUpdateSelectedList"
                    v-for="product in data"
                    :key="product.id"
                    :data="product"
                />
            </template>
        </ListComponent>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ClaimsListTemplate from '@/Components/List/ClaimsListTemplate.vue';
import ListComponent from '../General/ListComponent.vue';
import { formatPrice } from '@/Helpers/helpers.js';

const emit = defineEmits();
const props = defineProps({
    createCompleteSignal: {
        type: Number,
        default: false
    },
    sortAndFilters: {
        type: Array,
        required: false,
    },
});

const selectedIds = ref([]);
const handleUpdateSelectedList = ({ isSelected, id }) => {
    selectedIds.value = isSelected
        ? [...new Set([...selectedIds.value, id])]
        : selectedIds.value.filter(item => item !== id);
};

const handleCreateComplete = (value) => {
    emit('createComplete', true);
};
</script>