<script setup>
import InputError from '@/Components/General/InputError.vue';
import InputLabel from '@/Components/General/InputLabel.vue';
import Modal from '@/Components/General/Modal.vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import TextInput from '@/Components/General/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { onMounted, ref, watch, nextTick } from 'vue';
import Swal from 'sweetalert2';
import LoadingComponent from '@/Components/General/LoadingComponent.vue';
import CustomSelectComponent from '../General/CustomSelectComponent.vue';
import { EditOutlined } from '@ant-design/icons-vue';

const props = defineProps({
    templateData: {
        type: Object,
        default: null
    }
});
const isLoading = ref(false);
const formIsLoading = ref(false);
const showingEmailTemplateModal = ref(false);
const form = useForm({
    receiver_email: '',
    template_name: '',
    subject: '',
    body: '',
});

const submit = async () => {
    formIsLoading.value = true;
    try {
        // Create FormData to handle file uploads
        const formData = new FormData();
        // Append other form data fields as necessary
        for (const [key, value] of Object.entries(form.data())) {
            formData.append(key, value);
        }

        // Make the API request using axios with FormData
        const url = props.templateData != null ? route('email_config.upsert_template', props.templateData.id) : route('email_config.upsert_template');
        console.debug(url)
        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'  // Important for file uploads
            }
        });

        // Show success message with SweetAlert
        Swal.fire({
            title: 'Success!',
            text: response.data.success, // Access success message from the response
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'w-32'
            },
            willClose: () => {
                location.reload()
            }
        });

        closeModal();
        form.reset();
        formIsLoading.value = false;
    } catch (err) {
        console.debug(err)
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
        formIsLoading.value = false;
    }
}

const closeModal = () => {
    showingEmailTemplateModal.value = false;
};

const toggleModal = () => {
    showingEmailTemplateModal.value = !showingEmailTemplateModal.value;
};

onMounted(() => {
    if (props.templateData != null) {
        form.receiver_email = props.templateData.receiver_emails;
        form.template_name = props.templateData.name;
        form.subject = props.templateData.subject;
        form.body = props.templateData.body;
    }
})
</script>

<template>
    <section>
        <PrimaryButton class="mr-2" @click="toggleModal">{{ templateData == null ? 'Create' : 'Edit' }}</PrimaryButton>

        <Modal :show="showingEmailTemplateModal" @close="toggleModal">
            <form @submit.prevent="submit" class="p-6 space-y-4">
                <div v-if="isLoading">
                    <LoadingComponent class="mt-32 mb-32 " />
                </div>
                <div v-else>
                    <div class="grid grid-cols-1 gap-4 mt-4">
                        <div>
                            <InputLabel for="receiver_email" value="Receiver Email (use ',' for multiple email)" />
                            <TextInput id="receiver_email" v-model="form.receiver_email" type="text"
                                class="mt-1 block w-full" required />
                            <InputError :message="form.errors.receiver_email" class="mt-2" />
                        </div>

                        <div>
                            <InputLabel for="template_name" value="Template Name" />
                            <TextInput id="template_name" v-model="form.template_name" type="text"
                                class="mt-1 block w-full" required />
                            <InputError :message="form.errors.template_name" class="mt-2" />
                        </div>

                        <div>
                            <InputLabel for="subject" value="Subject" />
                            <TextInput id="subject" v-model="form.subject" type="text" class="mt-1 block w-full"
                                required />
                            <InputError :message="form.errors.subject" class="mt-2" />
                        </div>

                        <div>
                            <InputLabel for="body" value="Body" />
                            <textarea id="body" v-model="form.body" rows="4"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required></textarea>
                            <InputError :message="form.errors.body" class="mt-2" />
                        </div>

                    </div>
                </div>

                <div class="text-right mt-6" v-if="!formIsLoading">
                    <PrimaryButton type="submit" class="ms-3" :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing">
                        Submit Template
                    </PrimaryButton>
                </div>
            </form>
        </Modal>
    </section>
</template>
