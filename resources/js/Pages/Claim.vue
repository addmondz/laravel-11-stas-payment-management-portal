<template>

    <Head title="Claims" />
    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between content-center">
                <BreadcrumbComponent :breadcrumbs="[{ title: 'Claims' }]" />
                <CreateClaimForm @createComplete="handleCreateComplete" />
            </div>
        </template>

        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mt-3" style="padding-top: 20px; padding-bottom: 40px;">
            <div v-if="getUserApprovalPrivillage().value || isFinance().value">
                <!-- Tab Headers -->
                <div class="inline-flex bg-white rounded">
                    <span v-for="tab in tabs" :key="tab.name" :class="['tab-btn p-2 px-5 text-md rounded', tabClasses(tab.name)]" @click="activeTab = tab.name">
                        {{ tab.label }}
                        <span class="bg-gray-500 px-2 py-1 ml-2 text-white text-xs notification-circle rounded" v-if="tab.name == 'pendingApproval' && pendingClaimCount != 0 && pendingClaimCount != null">{{ formatNumberToString(pendingClaimCount) }}</span>
                    </span>
                </div>

                <!-- Tab Content -->
                <div class="w-full">
                    <div v-show="activeTab === 'pendingApproval'">
                        <PendingClaim :createCompleteSignal="createCompleteSignal" @pendingClaimsCount="handlePendingClaimsCount" />
                    </div>
                    <div v-show="activeTab === 'allClaims'">
                        <AllClaim :createCompleteSignal="createCompleteSignal" />
                    </div>
                </div>
            </div>
            <div v-else>
                <AllClaim :createCompleteSignal="createCompleteSignal" />
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import BreadcrumbComponent from '@/Components/General/BreadcrumbComponent.vue';
import AllClaim from '@/Components/Claims/AllClaim.vue';
import PendingClaim from '@/Components/Claims/PendingClaim.vue';
import CreateClaimForm from '@/Components/Form/CreateClaimForm.vue';
import { ref } from 'vue';
import { isAdmin, getUserApprovalPrivillage, isFinance } from '@/Composables/GlobalFuntions.vue';
import { formatNumberToString } from '@/Helpers/helpers.js';

// Reactive data
const createCompleteSignal = ref(2);
const pendingClaimCount = ref(0);
const activeTab = ref('allClaims');
const tabs = ref([
    { name: 'allClaims', label: 'All Claims' },
    { name: 'pendingApproval', label: 'Pending Approval' },
]);

// Compute tab classes
const tabClasses = (tabName) => {
    return activeTab.value === tabName
        ? 'active bg-violet-500 text-white font-bold'
        : 'hover:bg-gray-200 text-black bg-white';
};

// Handle create completion
const handleCreateComplete = () => {
    createCompleteSignal.value = Math.floor(Math.random() * 100) + 1;
};

const handlePendingClaimsCount = (value) => {
    pendingClaimCount.value = value;
};
</script>

<style scoped>
.tab-btn {
    cursor: pointer;
    user-select: none;
    /* Prevent text selection */
    /* Small border radius */
    transition: background-color 0.3s ease;
    /* Smooth hover effect */
    margin: 3px;
}

.tab-btn.active .notification-circle{
    background-color: white;
    color: purple;
}
</style>
