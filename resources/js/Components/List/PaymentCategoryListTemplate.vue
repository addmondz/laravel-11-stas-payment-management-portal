<template>
    <div
        class="w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-3 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500">
        <div class="flex">
            <div class="flex-1">
                <div class="grid lg:grid-cols-2 grid-cols-2 gap-x-4 gap-y-4">
                    <!-- <div class="col">
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
                    </div> -->
                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Name</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="">{{ data.name }}</div>
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
                    <!-- <AngleRight /> -->
                     <PaymentCategoryForm :userData="data" @createComplete="handleCreateComplete" />
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import { formatDate } from '@/Helpers/helpers.js';
import PaymentCategoryForm from '@/Components/Form/PaymentCategoryForm.vue';
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
