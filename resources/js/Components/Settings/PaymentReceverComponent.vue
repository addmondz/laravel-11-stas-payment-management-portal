<template>
    <div>
        <div class="flex justify-between content-center">
            <p>Payment Receiver</p>
            <PaymentReceiverForm @createComplete="handleCreateComplete" />
        </div>

        <ListComponent :apiUrl="route('paymentReceiver.list')" :createCompleteSignal="createCompleteSignal" :sortAndFilters="sortAndFilters" :allowSorting="false">
            <template v-slot:list-view="{ data }">
                <PaymentReceiverListTemplate @createComplete="handleCreateComplete" v-for="product in data" :key="product.id" :data="product" />
            </template>
        </ListComponent>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PaymentReceiverForm from '../Form/PaymentReceiverForm.vue';
import PaymentReceiverListTemplate from '../List/PaymentReceiverListTemplate.vue';
import ListComponent from '../General/ListComponent.vue';

const createCompleteSignal = ref(2);

const handleCreateComplete = () => {
    createCompleteSignal.value = Math.floor(Math.random() * 100) + 132;
};

const sortAndFilters = ref([
    { field_name: "name", field_type: "string" },
    { field_name: "bank_name", field_type: "string" },
    { display_name: "Currency", field_name: "currency_id", field_type: "select", api: route('currency.listShortCode') },
]);
</script>