<template>
    <div>
        <div class="flex justify-between content-center">
            <p>Payment Receiver</p>
            <PaymentReceiverForm @createComplete="handleCreateComplete" />
        </div>

        <ListComponent :apiUrl="route('paymentReceiver.list')" :createCompleteSignal="createCompleteSignal">
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
</script>