<template>
    <div>
        <div class="flex items-center w-full order-last lg:order-none max-lg:mx-auto p-5 rounded-xl overflow-hidden transition-all duration-500" v-if="!isFinance().value">
            <SquareBtn @click="selectAllClicked(data)" :isSelected="selectAll" class="block mr-5" v-show="allIds.length" />
            <PrimaryButton class="select-none bg-violet-500 hover:bg-violet-700 active:bg-violet-700 focus:bg-violet-700 font-bold" :class="{ 'invisible': !selectedIds.length }"
                @click="groupApprovalConfirmation">
                Approve {{ selectedIds.length }} Payment(s)
            </PrimaryButton>
        </div>
        <div class="mb-3" v-else></div>

        <ListComponent :apiUrl="route('claims.listPendingApproval')" :createCompleteSignal="createCompleteSignal"
            :key="loadingKey" :allowSorting="true" :sortAndFilters="sortAndFilters" :hasPaddingTop="false">

            <template v-slot:list-view="{ data, apiResponse }">
                {{ emitPendingClaimsCount(apiResponse.total) }}
                {{ getListIds(data) }}

                <ClaimsListTemplate v-for="product in data" 
                    :key="product.id" 
                    :showGroupActions="true"
                    :createComplete="createCompleteSignal"
                    :data="product" 
                    :isSelected="selectedIds.includes(product.id)" 
                    @update-selected-list="handleUpdateSelectedList"
                    @createComplete="handleCreateComplete"
                />

            </template>
        </ListComponent>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import ClaimsListTemplate from '@/Components/List/ClaimsListTemplate.vue';
import ListComponent from '../General/ListComponent.vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import Swal from 'sweetalert2';
import SquareBtn from '../Icons/SquareBtn.vue';
import { isFinance } from '@/Composables/GlobalFuntions.vue';

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
const selectAll = ref(false);
const allIds = ref([]);

const emitPendingClaimsCount = (count) => {
    emit('pendingClaimsCount', count);
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

const selectAllClicked = (data) => {
    selectAll.value = !selectAll.value; // Toggle selectAll state
    if (selectAll.value) {
        // Select all items
        selectedIds.value = [...new Set([...selectedIds.value, ...allIds.value])];
    } else {
        // Deselect all items
        selectedIds.value = [];
    }
};

const getListIds = (list) => {
    allIds.value = list.map(item => item.id);
};

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

const reloadComponent = () => {
    loadingKey.value++;
    selectedIds.value = [];
    selectAll.value = false;
};

const callApiToGroupApproveClaim = async () => {
    try {
        const response = await axios.post(route('claims.groupApprove', selectedIds.value.toString()));
        reloadComponent();
        Swal.fire({
            title: "Success!",
            text: "The Payment has been successfully approved.",
            icon: "success",
            confirmButtonText: "OK"
        });
    } catch (err) {
        Swal.fire({
            title: "Error!",
            text: err.response?.data?.error || "An unexpected error occurred while approving the claim.",
            icon: "error",
            confirmButtonText: "OK"
        });
    }
};

const handleCreateComplete = (value) => {
    emit('createComplete', true);
};
</script>