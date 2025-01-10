<template>
    <div
        class="w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500" :class="{ 'bg-violet-50 border-violet-900': isSelected }">
        <div class="flex">
            <div class="flex justify-center items-center" v-if="showGroupActions">
                <SquareBtn @update-selected="handleUpdateSelected" :isSelected="isSelected" class="block mr-5"/>
            </div>
            <div class="flex-1">
                <div class="grid lg:grid-cols-7 grid-cols-2 gap-x-4 gap-y-4">
                    <div class="col">
                        <div class="mb-1 text-xs text-gray-500">ID</div>
                        <div class="">{{ data.id }}</div>
                    </div>
                    <div class="col">
                        <div class="mb-1 text-xs text-gray-500">Payment Type</div>
                        <div class="">{{ formatString(data.payment_type) }}</div>
                    </div>
                    <div class="col">
                        <div class="mb-1 text-xs text-gray-500">Payment Category</div>
                        <div class="capitalize">{{ data.payment_category_name }}
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-1 text-xs text-gray-500">Total Amount</div>
                        <div class="whitespace-nowrap overflow-hidden text-ellipsis">{{ data.currency }} {{
                            formatPrice(data.amount) }}</div>
                    </div>
                    <!-- <div class="col">
                        <div class="mb-1 text-xs text-gray-500">Purpose</div>
                        <div class="">{{ data.purpose }}</div>
                    </div> -->
                    <div class="col">
                        <div class="mb-1 text-xs text-gray-500">Created By</div>
                        <div class="truncate">{{ data.created_user?.name }}</div>
                    </div>
                    <div class="col">
                        <div class="mb-1 text-xs text-gray-500">Status</div>
                        <!-- <StatusLabel class="text-2xs inline-block w-[140px]" :status="data.status" /> -->
                        <StatusLabel class="overide-fs-11 inline-block w-[140px] rounded-xl" :status="data.status" />
                    </div>
                    <div class="col">
                        <div class="mb-1 text-xs text-gray-500">Created At</div>
                        <div class="">{{ formatDate(data.created_at) }}</div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <button class="cursor-pointer hover:text-violet-600 transition-all">
                    <Link :href="route('claim.details', data.id)">
                    <AngleRight class="text-violet-700" />
                    </Link>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AngleRight from '@/Components/Icons/AngleRight.vue';
import { formatPrice } from '@/Helpers/helpers.js';
import { Link } from '@inertiajs/vue3';
import StatusLabel from '@/Components/General/StatusLabel.vue';
import { formatDate, formatString } from '@/Helpers/helpers.js';
import SquareBtn from '../Icons/SquareBtn.vue';

const emit = defineEmits(['update-selected-list']);
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    showGroupActions: {
        type: Boolean,
        required: false,
    },
    isSelected: {
        type: Boolean,
        required: false,
        default: false,
    },
});

const handleUpdateSelected = (value) => {
    emit('update-selected-list', { isSelected: value, id: props.data.id });
};
</script>

<style>
.overide-fs-11 {
    font-size: 11px !important;
}

.bg-violet-50 {
    background-color: #F5F3FF; /* bg-violet-50 */
}
</style>
