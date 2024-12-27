<template>
    <div>
        <ListComponent :apiUrl="route('claims.listPendingApproval')" :createCompleteSignal="createCompleteSignal">
            <template v-slot:list-view="{ data, apiResponse }" >
                {{ emitPendingClaimsCount(apiResponse.total) }}
                <ClaimsListTemplate :createComplete="createCompleteSignal" v-for="product in data" :key="product.id"
                    :data="product" />
            </template>
        </ListComponent>
    </div>
</template>

<script setup>
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

</script>