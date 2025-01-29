<template>
    <div>
        <ListComponent :apiUrl="route('claims.listPendingApproval')" :createCompleteSignal="createCompleteSignal"
            :key="loadingKey" :allowSorting="true" :sortAndFilters="sortAndFilters"
            :allowSelectAll="true" :selectedIds="selectedIds"
            @update:wholeSelectedIds="handleUpdateWholeSelectedList"
            :showFiltersOutside="true">

            <template v-slot:list-view="{ data, apiResponse }">
                {{ emitPendingClaimsCount(apiResponse.total) }}

                <ClaimsListTemplate :createComplete="createCompleteSignal"
                    @createComplete="handleCreateComplete"
                    @update-selected-list="handleUpdateSelectedList"
                    v-for="product in data" 
                    :key="product.id" 
                    :showGroupActions="true"
                    :data="product" 
                    :isSelected="selectedIds.includes(product.id)" 
                />

            </template>
        </ListComponent>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ClaimsListTemplate from '@/Components/List/ClaimsListTemplate.vue';
import ListComponent from '../General/ListComponent.vue';
import Swal from 'sweetalert2';
const allIds = ref([]); // Initialize as an empty array

const emit = defineEmits(['pendingClaimsCount']);
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
const loadingKey = ref(1);
const selectAll = ref(0);

const emitPendingClaimsCount = (count) => {
    emit('pendingClaimsCount', count);
};

const handleUpdateWholeSelectedList = (updatedSelectedIds) => {
    selectedIds.value = updatedSelectedIds;
};

const handleUpdateSelectedList = ({ isSelected, id }) => {
    if (isSelected) {
        selectedIds.value = [...new Set([...selectedIds.value, id])];
    } else {
        selectedIds.value = selectedIds.value.filter(item => item !== id);
    }

    // Sort copies for comparison
    const sortedSelectedIds = [...selectedIds.value].sort();
    const sortedAllIds = [...allIds.value].sort();

    // Compare contents of the arrays
    selectAll.value = JSON.stringify(sortedSelectedIds) === JSON.stringify(sortedAllIds);
};

const reloadComponent = () => {
    loadingKey.value++;
    selectedIds.value = [];
    selectAll.value = false;
};

const handleCreateComplete = (value) => {
    emit('createComplete', true);
};
</script>