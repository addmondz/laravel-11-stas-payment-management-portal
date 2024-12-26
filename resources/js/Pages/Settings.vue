<template>

    <Head title="Claims" />
    <AuthenticatedLayout>
        <template #header v-if="isAdmin().value">
            <div class="flex justify-between content-center">
                <BreadcrumbComponent :breadcrumbs="[{ title: 'Settings' }]" />
            </div>
        </template>

        <div v-if="isAdmin().value">
            <div v-if="isLoading">
                <LoadingComponent class="mt-32" />
            </div>
            <div v-else>
                <!-- <div class="max-w-full mx-auto sm:px-6 lg:px-8 p-5 mt-5"> -->
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 mt-5">
                    <div class="flex flex-col md:flex-row m-h-10 bg-gray-100">
                        <div class="w-full md:w-1/4">
                            <div class="space-y-4">
                                <div class="tab-btn border-4 border-white" tab-name="paymentCategory">
                                    <div class="flex items-center">
                                        <!-- <div class="p-4 border-r border-gray-300">
                                        <div class="w-8 h-8 bg-gray-400"></div>
                                    </div> -->
                                        <div class="flex-1 p-4">
                                            <p class="font-semibold">Payment Category</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div class="tab-btn border-4 border-white" tab-name="gstConfiguration">
                                    <div class="flex items-center">
                                        <div class="flex-1 p-4">
                                            <p class="font-semibold">GST Configuration</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div class="tab-btn border-4 border-white" tab-name="team">
                                    <div class="flex items-center">
                                        <div class="flex-1 p-4">
                                            <p class="font-semibold">Team</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-3/4 bg-white">
                            <div class="space-y-4">
                                <div class="tab-display" tab-name="paymentCategory">
                                    <div class="flex items-center">
                                        <div class="flex-1 p-4">
                                            <PaymentCategoryComponent />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div class="tab-display" tab-name="gstConfiguration">
                                    <div class="flex items-center">
                                        <div class="flex-1 p-4">
                                            <GstSettingsComponent />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div class="tab-display" tab-name="team">
                                    <div class="flex items-center">
                                        <div class="flex-1 p-4">
                                            <TeamComponent />
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
            <NotFound />
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import LoadingComponent from '@/Components/General/LoadingComponent.vue';
import PaymentCategoryComponent from '@/Components/Settings/PaymentCategoryComponent.vue';
import GstSettingsComponent from '@/Components/Settings/GstSettingsComponent.vue';
import BreadcrumbComponent from '@/Components/General/BreadcrumbComponent.vue';
import TeamComponent from '@/Components/Settings/TeamComponent.vue';
import { isAdmin, getUserApprovalPrivillage } from '@/Composables/GlobalFuntions.vue';
import NotFound from '@/Components/Icons/NotFound.vue';
import $ from 'jquery';

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