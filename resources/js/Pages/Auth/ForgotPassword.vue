<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/General/InputError.vue';
import InputLabel from '@/Components/General/InputLabel.vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import TextInput from '@/Components/General/TextInput.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';

defineProps({
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <GuestLayout>
        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">

            <Head title="Forgot Password" />

            <div class="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset
                link that will allow you to choose a new one.
            </div>

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

                <div class="flex items-center justify-between mt-4">
                    <Link :href="route('login')" class="inline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
                    < Go Back
                    </Link>
                    <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Email Password Reset Link
                    </PrimaryButton>
                </div>
            </form>
        </div>
    </GuestLayout>
</template>
