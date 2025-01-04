<template>
    <div>
        <ListComponent :apiUrl="route('claims.listPendingApproval')" :createCompleteSignal="createCompleteSignal">
            <template v-slot:list-view="{ data, apiResponse }">
                {{ emitPendingClaimsCount(apiResponse.total) }}
                <ClaimsListTemplate :createComplete="createCompleteSignal"
                    @update-selected-list="handleUpdateSelectedList" v-for="product in data" :key="product.id"
                    :data="product" />
            </template>
        </ListComponent>
    </div>
</template>

<script setup>
import { ref, computed, defineEmits } from 'vue';
import ClaimsListTemplate from '@/Components/List/ClaimsListTemplate.vue';
import ListComponent from '../General/ListComponent.vue';

const emit = defineEmits();
const props = defineProps({
    createCompleteSignal: {
        type: Number,
        default: false
    }
});

const emitPendingClaimsCount = (count) => {
    emit('pendingClaimsCount', count);
};

const selectedIds = ref([]);

const handleUpdateSelectedList = ({ isSelected, id }) => {
    selectedIds.value = isSelected
        ? [...new Set([...selectedIds.value, id])]
        : selectedIds.value.filter(item => item !== id);
};

</script>