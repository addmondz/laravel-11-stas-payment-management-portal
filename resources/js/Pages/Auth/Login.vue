<script setup>
import ApplicationLogo from '@/Components/General/ApplicationLogo.vue';
import Checkbox from '@/Components/General/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/General/InputError.vue';
import InputLabel from '@/Components/General/InputLabel.vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import SecondaryButton from '@/Components/General/SecondaryButton.vue';
import TextInput from '@/Components/General/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <div class="min-h-screen flex flex-col justify-center items-center sm:pt-0 bg-gray-100 p-5 sm:p-0">

        <!-- Logo and Title Section -->
        <div class="w-full flex flex-col items-center mb-8">
            <img 
                src="/images/logo-new.jpg" 
                alt="Logo" 
                class="w-[280px] h-auto mb-8" 
            />
            <h1 class="text-2xl sm:text-3xl text-gray-900 text-center">
                STAS Payment Management Portal
            </h1>
        </div>
        
        <div>
            <Link href="/">
            <ApplicationLogo class="w-20 h-20 fill-current text-gray-500" />
            </Link>
        </div>

        <div class="w-full sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">

        <Head title="Log in" />
        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email" />

                <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus
                    autocomplete="username" />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />

                <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required
                    autocomplete="current-password" />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="flex mt-4 justify-between">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ms-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link v-if="canResetPassword" :href="route('password.request')"
                    class="text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Forgot your password?
                </Link>
            </div>

            <div class="flex items-center justify-end mt-4">
                <PrimaryButton class="w-full justify-center" :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing">
                    Log in
                </PrimaryButton>
            </div>

        </form>
</div>
    <!-- <div class="w-full sm:max-w-md mt-5 overflow-hidden sm:rounded-lg flex items-center justify-center">
    <div class="flex-grow border-t border-gray-500"></div>
    <span class="px-4 text-gray-500">or</span>
    <div class="flex-grow border-t border-gray-500"></div>
    </div>

    <div class="w-full sm:max-w-md mt-5 overflow-hidden sm:rounded-lg items-end flex px-6">
    <Link :href="route('register')" class="w-full">
    <SecondaryButton class="w-full justify-center" :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing">
        Register
    </SecondaryButton>
    </Link>
    </div> -->

    </div>
</template>