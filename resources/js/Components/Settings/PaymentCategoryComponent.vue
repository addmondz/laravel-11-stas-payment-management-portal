<template>
    <div>
        <div class="flex justify-between content-center">
            <p>Payment Category</p>
            <PaymmentCategoryForm @createComplete="handleCreateComplete" />
        </div>

        <ListComponent :apiUrl="route('paymentCategory.list')" :createCompleteSignal="createCompleteSignal">
            <template v-slot:list-view="{ data }">
                <PaymentCategoryListTemplate @createComplete="handleCreateComplete" v-for="product in data" :key="product.id" :data="product" />
            </template>
        </ListComponent>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PaymentCategoryListTemplate from '@/Components/List/PaymentCategoryListTemplate.vue';
import PaymmentCategoryForm from '@/Components/Form/PaymmentCategoryForm.vue';
import ListComponent from '../General/ListComponent.vue';

const createCompleteSignal = ref(2);

const handleCreateComplete = () => {
    createCompleteSignal.value = Math.floor(Math.random() * 100) + 132;
};
</script>