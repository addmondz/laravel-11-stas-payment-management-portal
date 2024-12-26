<template>

    <Head title="Welcome" />
    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between content-center">
                <BreadcrumbComponent :breadcrumbs="[{ title: 'Dashboard' }]" />
            </div>
        </template>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import BreadcrumbComponent from '@/Components/General/BreadcrumbComponent.vue';
</script>
