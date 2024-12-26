<template>

    <Head title="Claims" />
    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between content-center">
                <BreadcrumbComponent :breadcrumbs="[{ title: 'Claims' }]" />
                <CreateClaimForm @createComplete="handleCreateComplete" />
            </div>
        </template>

        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mt-3">
            <div v-if="getUserApprovalPrivillage().value">
                <!-- Tab Headers -->
                <div class="flex mb-10">
                    <span v-for="tab in tabs" :key="tab.name"
                        :class="['tab-btn p-2 px-5 text-md text-black border-4 border-white', tabClasses(tab.name)]"
                        @click="activeTab = tab.name">
                        {{ tab.label }}
                    </span>
                </div>

                <!-- Tab Content -->
                <div class="w-full">
                    <div v-show="activeTab === 'pendingApproval'">
                        <PendingClaim :createCompleteSignal="createCompleteSignal" />
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
import { isAdmin, getUserApprovalPrivillage } from '@/Composables/GlobalFuntions.vue';

// Reactive data
const createCompleteSignal = ref(2);
const activeTab = ref('pendingApproval');
const tabs = ref([
    { name: 'pendingApproval', label: 'Pending Approval' },
    { name: 'allClaims', label: 'All Claims' }
]);

// Compute tab classes
const tabClasses = (tabName) => {
    return activeTab.value === tabName
        ? 'active bg-violet-500 text-white font-bold'
        : 'hover:bg-gray-200';
};

// Handle create completion
const handleCreateComplete = () => {
    createCompleteSignal.value = Math.floor(Math.random() * 100) + 132;
};
</script>

<style scoped>
.tab-btn {
    cursor: pointer;
    user-select: none;
    /* Prevent text selection */
    border-radius: 0.25rem;
    /* Small border radius */
    transition: background-color 0.3s ease;
    /* Smooth hover effect */
}

.tab-btn.active {
    border-radius: 0.5rem;
}
</style>
