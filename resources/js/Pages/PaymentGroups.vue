<template>

    <Head title="Payment Groups" />
    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between content-center">
                <BreadcrumbComponent :breadcrumbs="[{ title: 'Payment Groups' }]" />
            </div>
        </template>

        <div class="max-w-8xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mt-3">
            <ListComponent :apiUrl="route('paymentGroup.list')" :createCompleteSignal="createCompleteSignal"
                :sortAndFilters="sortAndFilters" :allowSorting="false">
                <template v-slot:list-view="{ data, apiResponse, fullApiResponse }">
                    <PaymentGroupListTemplate @createComplete="handleCreateComplete" v-for="product in data"
                        :key="product.id" :data="product" />
                </template>
            </ListComponent>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import { ref } from 'vue';
import ListComponent from '@/Components/General/ListComponent.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import BreadcrumbComponent from '@/Components/General/BreadcrumbComponent.vue';
import PaymentGroupListTemplate from '@/Components/List/PaymentGroupListTemplate.vue';

const createCompleteSignal = ref(2);

const handleCreateComplete = () => {
    createCompleteSignal.value = Math.floor(Math.random() * 100) + 132;
};

const sortAndFilters = ref([
    { display_name: "Payment Group ID", field_name: "id", field_type: "string" },
    { display_name: "Payment Voucher Number", field_name: "payment_voucher_number", field_type: "string" },
    { display_name: "Payment Date", field_name: "payment_date", field_type: "date_range" },
]);

// const sortAndFilters = ref([]);
</script>