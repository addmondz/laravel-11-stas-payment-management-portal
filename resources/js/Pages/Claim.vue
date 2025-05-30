<template>

    <Head title="Payments" />
    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between content-center">
                <BreadcrumbComponent :breadcrumbs="[{ title: 'Payments' }]" />
                <CreateClaimForm @createComplete="handleCreateComplete" />
            </div>
        </template>

        <div class="max-w-8xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0 mt-3" style="padding-top: 20px; padding-bottom: 40px;">
            <div v-if="getUserApprovalPrivillage().value || isFinance().value">
                <!-- Tab Headers -->
                <div class="inline-flex max-w-full">
                    <span v-for="tab in tabs" :key="tab.name"
                        :class="['tab-btn p-2 px-5 text-md flex justify-center items-center', tabClasses(tab.name)]"
                        class="flex-1 pt-5 pb-5 border border-violet-500 flex flex-col sm:min-w-60"
                        @click="setActiveTab(tab.name)">
                        <div class="flex">
                            {{ tab.label }}

                            <!-- Notification Circle -->
                            <div class="flex justify-center items-center">
                                <span class="bg-gray-500 px-2 py-1 ml-3 text-white text-xs notification-circle rounded"
                                    v-if="tab.name == 'pendingApproval' && pendingClaimCount != 0 && pendingClaimCount != null">
                                    {{ formatNumberToString(pendingClaimCount) }}
                                </span>
                            </div>
                        </div>
                    </span>
                </div>

                <!-- Tab Content -->
                <div class="w-full bg-black-50 p-1 rounded-xl">
                    <div v-show="activeTab === 'pendingApproval'">
                        <PendingClaim 
                            :createCompleteSignal="createCompleteSignal" 
                            @pendingClaimsCount="handlePendingClaimsCount" 
                            @createComplete="handleCreateComplete"
                            :sortAndFilters="sortAndFilters"
                         />
                    </div>
                    <div v-show="activeTab === 'allClaims'">
                        <AllClaim 
                            :createCompleteSignal="createCompleteSignal" 
                            @createComplete="handleCreateComplete"
                            :sortAndFilters="sortAndFilters"
                         />
                    </div>
                </div>
            </div>
            <div v-else>
                <AllClaim :createCompleteSignal="createCompleteSignal" :sortAndFilters="sortAndFilters" @createComplete="handleCreateComplete" />
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
import { ref, onMounted } from 'vue';
import { getUserApprovalPrivillage, isFinance } from '@/Composables/GlobalFuntions.vue';
import { formatNumberToString } from '@/Helpers/helpers.js';
import { FieldTimeOutlined, SwitcherOutlined } from '@ant-design/icons-vue';

// Reactive data
const createCompleteSignal = ref(2);
const pendingClaimCount = ref(0);
const activeTab = ref(localStorage.getItem('activeTab') || 'allClaims'); // Default to 'allClaims' if not set
const tabs = ref([
    { name: 'allClaims', label: 'All Payments', icon: SwitcherOutlined },
    { name: 'pendingApproval', label: isFinance().value ? 'Pending Action' : 'Pending Approval', icon: FieldTimeOutlined },
]);

// Compute tab classes
const tabClasses = (tabName) => {
    return activeTab.value === tabName
        ? 'active bg-violet-400 text-white font-bold'
        : 'hover:bg-gray-200 text-black bg-white';
};

// Handle tab change
const setActiveTab = (tabName) => {
    activeTab.value = tabName;
    localStorage.setItem('activeTab', tabName); // Save the active tab to localStorage
};

// Handle create completion
const handleCreateComplete = () => {
    createCompleteSignal.value = Math.floor(Math.random() * 100) + 1;
};

const handlePendingClaimsCount = (value) => {
    pendingClaimCount.value = value;
};

// Sort and filter options
const sortAndFilters = ref([
    { display_name: "Payment ID", field_name: "id", field_type: "string" },
    {
        field_name: "payment_type",
        field_type: "select",
        options: {
            reimbursement: 'Reimbursement',
            external_payment: 'External Payment'
        }
    },
    {
        field_name: "approval_level",
        field_type: "select",
        options: {
            0: 'L1',
            1: 'L2',
            2: 'L3'
        }
    },
    { display_name: "Payment Category", field_name: "payment_category_id", field_type: "select", api: route('paymentCategory.listChoice') },
    { display_name: "Payment To", field_name: "payment_receiver_id", field_type: "select", api: route('paymentReceiver.listIdToName') },
    { display_name: "Currency", field_name: "currency_id", field_type: "select", api: route('currency.listShortCode') },
    // { field_name: "total_amount", field_type: "string" },
    { display_name: "Created Date", field_name: "created_at", field_type: "date_range" },
    { field_name: "status", field_type: "select", api: route('approvalStatus.list') },
]);

onMounted(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
        activeTab.value = savedTab;
    }
});
</script>

<style scoped>
.tab-btn {
    cursor: pointer;
    user-select: none;
    /* Prevent text selection */
    /* Small border radius */
    transition: background-color 0.3s ease;
    /* Smooth hover effect */
    /* margin: 3px; */
}

.tab-btn.active .notification-circle {
    background-color: white;
    color: black;
}
</style>
