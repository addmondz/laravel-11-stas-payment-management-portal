<template>
    <div
        class="w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white">
        <div class="flex">
            <div class="flex-1">
                <div class="grid lg:grid-cols-8 grid-cols-2 gap-x-4 gap-y-4">
                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">ID</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="">{{ data.id }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Payment Type</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="">{{ data.payment_type }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Payment Category</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="">{{ data.payment_category }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Total Amount</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="">{{ data.currency }} {{ formatPrice(data.amount) }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Tax Amount</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="">{{ data.gst_amount == 0 ? '-' : data.currency + ' '
                                    + formatPrice(data.gst_amount) }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Purpose</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="">{{ data.purpose }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Receipt Sate</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="">{{ formatDate(data.receipt_date) }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Created At</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="">{{ formatDate(data.created_at) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <button class="cursor-pointer hover:text-violet-600 transition-all">
                    <Eye />
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import moment from 'moment';
import Eye from '@/Components/Icons/Eye.vue';
import { formatPrice } from '@/Helpers/helpers.js';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});

const showDetails = ref(false);

const formatDate = (date) => {
    return moment(date).format('DD-MM-YYYY');
};

const itemTotalQuantity = computed(() => {
    return props.order.items.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return 0;
});
</script>
