<template>
    <div>
        <ListComponent :apiUrl="route('claims.listPendingApproval')" :createCompleteSignal="createCompleteSignal">
            <template v-slot:list-view="{ data }">
                <ClaimsListTemplate :createComplete="createCompleteSignal" v-for="product in data" :key="product.id" :data="product" />
            </template>
        </ListComponent>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ClaimsListTemplate from '@/Components/List/ClaimsListTemplate.vue';
import ListComponent from '../General/ListComponent.vue';

const props = defineProps({
    createCompleteSignal: {
        type: Number,
        default: false
    }
});
</script>