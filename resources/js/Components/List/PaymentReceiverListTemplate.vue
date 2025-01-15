<template>
    <div
        class="w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500">
        <div class="flex items-center justify-center">
            <div class="flex-1">
                <div class="flex">
                    <div class="flex-1 col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Name</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px] truncate">{{ data.name }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Bank Name</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px] truncate">{{ data.bank_name }}</div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Bank Account No</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px] capitalize truncate">{{ data.bank_account_no }}</div>
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Swift Code</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px] truncate">{{ data.swift_code ?? '-' }}</div>
                            </div>
                        </div>
                    </div> -->
                    <div class="flex-1 col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Currency</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px] truncate">{{ data.currency?.short_code ?? '-' }}</div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Created At</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px] truncate">{{ formatDate(data.created_at) }}</div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="flex justify-center items-center">
                <button class="cursor-pointer hover:text-violet-600 transition-all">
                    <PaymentReceiverForm :userData="data" @createComplete="handleCreateComplete" :canView="true" />
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { formatDate } from '@/Helpers/helpers.js';
import PaymentReceiverForm from '../Form/PaymentReceiverForm.vue';

const emit = defineEmits();
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
const handleCreateComplete = () => {
    emit('createComplete', true);
};
</script>
