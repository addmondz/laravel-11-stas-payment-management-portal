<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/General/ApplicationLogo.vue';
import Dropdown from '@/Components/General/Dropdown.vue';
import DropdownLink from '@/Components/General/DropdownLink.vue';
import NavLink from '@/Components/General/NavLink.vue';
import ResponsiveNavLink from '@/Components/General/ResponsiveNavLink.vue';
import { Link, usePage } from '@inertiajs/vue3';
import { isAdmin, getUserApprovalPrivillage, isFinance } from '@/Composables/GlobalFuntions.vue';

const showingNavigationDropdown = ref(false);
const { props } = usePage();

const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
};

</script>

<template>
    <div>
        <div class="bg-violet-400 text-white bg-yellow-500 text-gray-500 hidden"></div>
        <div class="min-h-screen bg-gray-100">
            <nav class="bg-white border-b border-gray-100">
                <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16">
                    <div class="flex">
                        <!-- Logo -->
                        <div class="shrink-0 flex items-center">
                            <Link :href="route('dashboard')">
                                <img src="/images/logo-new.jpg" alt="Logo" style="width: 210px; height:50px; margin-right: 34px;" />
                            </Link>
                        </div>
                        <div class="hidden sm:-my-px sm:flex">
                            <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                Payments
                            </NavLink>
                        </div>
                        <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex" v-if="isAdmin().value">
                            <NavLink :href="route('settings')" :active="route().current('settings')">
                                Settings
                            </NavLink>
                        </div>
                        <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex" v-if="isAdmin().value || isFinance().value">
                            <NavLink :href="route('reports')" :active="route().current('reports')">
                                Reports
                            </NavLink>
                        </div>
                    </div>

                    <div class="hidden sm:flex sm:items-center sm:ms-6">
                        <div class="ms-3 relative">
                            <Dropdown align="right" width="48">
                                <template #trigger>
                                    <span class="inline-flex rounded-md">
                                        <button type="button"
                                            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                                            {{ props.auth.user.name }}
                                            <svg class="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </span>
                                </template>
                                <template #content>
                                    <DropdownLink :href="route('profile.edit')">Profile</DropdownLink>
                                    <DropdownLink @click="logout" :href="route('logout')" method="post" as="button">Log
                                        Out
                                    </DropdownLink>
                                </template>
                            </Dropdown>
                        </div>
                    </div>

                    <div class="-me-2 flex items-center sm:hidden">
                        <button @click="showingNavigationDropdown = !showingNavigationDropdown"
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    :class="{ 'hidden': showingNavigationDropdown, 'inline-flex': !showingNavigationDropdown }"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                                <path
                                    :class="{ 'hidden': !showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
                    class="sm:hidden">
                    <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Payments
                        </ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('settings')" :active="route().current('settings')" v-if="isAdmin().value">
                            Settings
                        </ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('reports')" :active="route().current('reports')" v-if="isAdmin().value || isFinance().value">
                            Reports
                        </ResponsiveNavLink>
                    </div>
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="px-4">
                            <div class="font-medium text-base text-gray-800">
                                {{ props.auth.user.name }}
                            </div>
                            <div class="font-medium text-sm text-gray-500">{{ props.auth.user.email }}</div>
                        </div>
                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="route('profile.edit')">Profile</ResponsiveNavLink>
                            <ResponsiveNavLink :href="route('logout')" method="post" as="button">Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <header class="bg-white shadow" v-if="$slots.header">
                <div class="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <main>
                <slot />
            </main>
        </div>
    </div>
</template>
