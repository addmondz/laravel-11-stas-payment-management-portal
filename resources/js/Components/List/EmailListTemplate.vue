<template>
    <div
        class="w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-5 rounded-xl overflow-hidden bg-white hover:border-violet-600 transition-all duration-500">
        <div class="flex items-center justify-center">
            <div class="flex-1">
                <div class="grid grid-cols-5 gap-4">
                    <div class="col-span-1">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Name</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px]">{{ data.name }}</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-1">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Subject</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px] truncate">{{ data.subject }}</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-1">
                        <div class="row">
                            <div class="col-auto">
                                <div class="mb-1 text-xs text-gray-500">Receivers</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="text-[14px] truncate">{{ data.receiver_emails }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <button type="button" @click="sendMail(data.id)"
                    class="bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border border-gray-300 rounded-md font-semibold text-xs uppercase tracking-widest mr-2">
                    {{ mailIsLoading ? 'Sending Mail' : 'Test Mail' }}
                </button>

                <button class="cursor-pointer hover:text-violet-600 transition-all">
                    <EmailConfigTemplateForm :templateData="data" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { formatDate } from '@/Helpers/helpers.js';
import Swal from 'sweetalert2';
import EmailConfigTemplateForm from '@/Components/Form/EmailConfigTemplateForm.vue';
import { ref } from 'vue';

const emit = defineEmits();
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
const mailIsLoading = ref(false);

const sendMail = async (id) => {
    if (mailIsLoading.value == true) return;

    try {
        mailIsLoading.value = true;

        const { data } = await axios.get(route('email_config.template_send_mail', id));
        // Show success message with SweetAlert
        Swal.fire({
            title: 'Success!',
            text: data.success, // Access success message from the response
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'w-32'
            },
        });

        mailIsLoading.value = false;
    } catch (err) {
        // Capture the API error and update form.errors
        if (err.response && err.response.data.errors) {
            form.errors = err.response.data.errors;  // Set the error response to form.errors
        } else {
            // Optionally handle other types of errors
            Swal.fire({
                title: 'Error!',
                text: 'An unexpected error occurred.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }

        mailIsLoading.value = false;
    }
}
</script>
