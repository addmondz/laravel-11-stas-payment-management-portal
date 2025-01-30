<template>
    <div
        class="w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500">
        <div class="flex items-center justify-center">
            <div class="flex-1">
                <div class="grid grid-cols-5 gap-4 mb-2">
                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">ID</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px]">{{ data.id }}</div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Payment Voucher Number</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px] truncate">{{ data.payment_voucher_number }}</div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Payment Date</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px] truncate">{{ formatDate(data.payment_date) }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Payment Voucher Receipt</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <DocumentViewer :src="`/${data.payment_voucher_receipt_file}`" alt="Receipt Image" :id="data.id" />
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end items-center space-x-4">
                        <AngleUp class="cursor-pointer" @click="clickShowDetails" v-if="showDetails" />
                        <AngleDown class="cursor-pointer" @click="clickShowDetails" v-if="!showDetails" />
                    </div>

                </div>
                <div v-if="showDetails" class="mt-5">
                    <ClaimsListTemplate @createComplete="handleCreateComplete" class="mb-2"
                        @update-selected-list="handleUpdateSelectedList" v-for="product in data.claims"
                        :key="product.id" :data="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ClaimsListTemplate from '@/Components/List/ClaimsListTemplate.vue';
import DocumentViewer from '@/Components/General/DocumentViewer.vue';
import { ref } from 'vue';
import AngleUp from '@/Components/Icons/AngleUp.vue';
import AngleDown from '@/Components/Icons/AngleDown.vue';
import { formatDate, formatString } from '@/Helpers/helpers.js';

const emit = defineEmits();
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
const showDetails = ref(false);
const clickShowDetails = () => {
    showDetails.value = !showDetails.value;
}
const handleCreateComplete = () => {
    emit('createComplete', true);
};
</script>
