<template>
    <div
        class="w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500">
        <div class="flex">
            <div class="flex-1">
                <div class="grid lg:grid-cols-5 grid-cols-2 gap-x-4 gap-y-4">
                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Email</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px]">{{ data.email }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
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
                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Role</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px] capitalize">{{ data.role }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Approval Privillage</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px]">{{ data.privilege_name ?? '-' }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Status</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px]">{{ toUcWords(data.status) ?? '-' }}</div>
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
                                <div class="text-[14px]">{{ formatDate(data.created_at) }}</div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="flex justify-center items-center">
                <button class="cursor-pointer hover:text-violet-600 transition-all">
                    <!-- <EditOutlined /> -->
                    <UserForm :userData="data" @createComplete="handleCreateComplete" />
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import { formatDate, toUcWords } from '@/Helpers/helpers.js';
import UserForm from '@/Components/Form/UserForm.vue';

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
