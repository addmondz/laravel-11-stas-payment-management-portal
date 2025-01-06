<template>
    <div>
        <PrimaryButton class="mt-5 mb-3" :class="{ 'invisible': !selectedIds.length }" @click="groupApprovalConfirmation">Approve Selected Claim</PrimaryButton>

        <ListComponent :apiUrl="route('claims.listPendingApproval')"
            :createCompleteSignal="createCompleteSignal" :key="loadingKey" :allowSorting="true" :sortAndFilters="sortAndFilters" :hasPaddingTop="false">
            <template v-slot:list-view="{ data, apiResponse }">
                {{ emitPendingClaimsCount(apiResponse.total) }}
                <ClaimsListTemplate :showGroupActions="true" :createComplete="createCompleteSignal"
                    @update-selected-list="handleUpdateSelectedList" v-for="product in data" :key="product.id"
                    :data="product" />
            </template>
        </ListComponent>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ClaimsListTemplate from '@/Components/List/ClaimsListTemplate.vue';
import ListComponent from '../General/ListComponent.vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import Swal from 'sweetalert2';

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

const emitPendingClaimsCount = (count) => {
    emit('pendingClaimsCount', count);
};

const selectedIds = ref([]);
const loadingKey = ref(1);

const handleUpdateSelectedList = ({ isSelected, id }) => {
    selectedIds.value = isSelected
        ? [...new Set([...selectedIds.value, id])]
        : selectedIds.value.filter(item => item !== id);
};

const groupApprovalConfirmation = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "Are you sure you want to approve these Claims?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        allowOutsideClick: false,
        stopKeydownPropagation: true,
        preConfirm: () => {
            // This ensures that the modal doesn't close until the API call is complete
            return new Promise((resolve, reject) => {
                callApiToGroupApproveClaim(resolve, reject); // Call API and resolve/reject based on the response
            });
        }
    });
};

const reloadComponent = ()  => {
    loadingKey.value ++;
    selectedIds.value = [];
};

const callApiToGroupApproveClaim = async () => {
    try {
        const response = await axios.post(route('claims.groupApprove', selectedIds.value.toString()));
        reloadComponent();
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

</script>