<template>

    <Head title="Reports" />
    <AuthenticatedLayout>
        <template #header v-if="isAdmin().value || isFinance().value">
            <div class="flex justify-between content-center">
                <BreadcrumbComponent :breadcrumbs="[{ title: 'Reports' }]" />
            </div>
        </template>

        <div v-if="isAdmin().value || isFinance().value">
            <div v-if="isLoading">
                <LoadingComponent class="mt-32" />
            </div>
            <div v-else>
                <div class="max-w-8xl mx-auto sm:px-6 lg:px-8 p-5 mt-5">
                    <div class="flex flex-col md:flex-row m-h-10 bg-gray-100">
                        <div class="w-full md:w-1/4 mb-6 md:mb-0">
                            <div class="space-y-4">
                                <div class="tab-btn border-4 border-white" tab-name="summaryReport">
                                    <div class="flex items-center">
                                        <div class="flex-1 p-4">
                                            <p class="font-semibold">Summary Report</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div class="tab-btn border-4 border-white" tab-name="transactionsReport">
                                    <div class="flex items-center">
                                        <div class="flex-1 p-4">
                                            <p class="font-semibold">Transactions Report</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div class="tab-btn border-4 border-white" tab-name="paymentDetailReport">
                                    <div class="flex items-center">
                                        <div class="flex-1 p-4">
                                            <p class="font-semibold">Payment Detail Report</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-3/4 bg-white">
                            <div class="space-y-4">
                                <div class="tab-display" tab-name="summaryReport">
                                    <div class="flex items-center">
                                        <div class="flex-1 p-4">
                                            <SummaryReportComponent />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div class="tab-display" tab-name="transactionsReport">
                                    <div class="flex items-center">
                                        <div class="flex-1 p-4">
                                            <TransactionsReportComponent />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div class="tab-display" tab-name="paymentDetailReport">
                                    <div class="flex items-center">
                                        <div class="flex-1 p-4">
                                            <PaymentDetailReportComponent />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div style="min-height: 80vh;" class="flex flex-col justify-center items-center">
                <NotFound />
                <div class="flex justify-center">
                    <Link :href="route('dashboard')">
                    <PrimaryButton class="p-4">Back To Home Page</PrimaryButton>
                    </Link>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import LoadingComponent from '@/Components/General/LoadingComponent.vue';
import BreadcrumbComponent from '@/Components/General/BreadcrumbComponent.vue';
import { isAdmin, isFinance } from '@/Composables/GlobalFuntions.vue';
import NotFound from '@/Components/Icons/NotFound.vue';
import { Link } from '@inertiajs/vue3';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import $ from 'jquery';
import SummaryReportComponent from '@/Components/Reports/SummaryReportComponent.vue';
import TransactionsReportComponent from '@/Components/Reports/TransactionsReportComponent.vue';
import PaymentDetailReportComponent from '@/Components/Reports/PaymentDetailReportComponent.vue';

const isLoading = ref(false);

onMounted(() => {
    const $tabs = $('.tab-btn');
    const $displays = $('.tab-display');
    const activeClasses = 'active bg-violet-500 text-white';

    // Hide all tab displays initially
    $displays.hide();

    // Show the first tab display and mark the first tab as active
    $tabs.first().addClass(activeClasses);
    $displays.first().show();

    // Set up tab switching on click
    $('body').on('click', '.tab-btn', function () {
        $displays.hide();
        $tabs.removeClass(activeClasses);
        $(this).addClass(activeClasses);
        $displays.filter(`[tab-name="${$(this).attr('tab-name')}"]`).show();
    });
});
</script>

<style>
.tab-btn {
    cursor: pointer;
    user-select: none;
    /* Prevents text selection */
    -webkit-user-select: none;
    /* For Safari */
    -moz-user-select: none;
    /* For Firefox */
    -ms-user-select: none;
    /* For older versions of Internet Explorer */
}
</style>