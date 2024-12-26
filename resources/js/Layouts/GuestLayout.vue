<script setup>
import ApplicationLogo from '@/Components/General/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="min-h-screen flex flex-col justify-center items-center sm:pt-0 bg-gray-100 p-5 sm:p-0">
        <div>
            <Link href="/">
            <ApplicationLogo class="w-20 h-20 fill-current text-gray-500" />
            </Link>
        </div>

        <slot />

    </div>
</template>
