<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import Modal from '@/Components/Modal.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { ref, defineProps, watch } from 'vue';
import Swal from 'sweetalert2';
import { onMounted } from 'vue';

// Accept userData prop for editing existing user
const props = defineProps({
    userData: {
        type: Object,
        default: null
    }
});

const showingCreateUserModal = ref(false);
const emit = defineEmits();
const approvalRolesData = ref([]);
const error = ref(null);

// Form setup with default values (used for create)
const form = useForm({
    name: '',
});

// Populate form with userData if editing
watch(() => props.userData, (newUserData) => {
    if (newUserData) {
        form.name = newUserData.name;
    } else {
        form.reset(); // Reset if no userData
    }
}, { immediate: true });

const closeModal = () => {
    showingCreateUserModal.value = false;
};

const toggleModal = () => {
    showingCreateUserModal.value = !showingCreateUserModal.value;
};

const submitUser = async () => {
    try {
        const formData = new FormData();
        for (const [key, value] of Object.entries(form.data())) {
            formData.append(key, value);
        }

        // Determine if we're editing or creating
        const url = props.userData ? route('paymentCategory.update', props.userData.id) : route('paymentCategory.create');
        // const method = props.userData ? 'put' : 'post';
        const method = 'post';

        // Make the API request
        const response = await axios[method](url, formData);

        // Show success message
        Swal.fire({
            title: 'Success!',
            text: props.userData ? 'User updated successfully' : 'User created successfully',
            icon: 'success',
            confirmButtonText: 'OK',
        });

        // Close modal and reset form after successful submission
        closeModal();
        form.reset();
        emit('createComplete', true);
    } catch (err) {
        console.log(err);
        if (err.response && err.response.data.errors) {
            form.errors = err.response.data.errors;
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'An unexpected error occurred.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    }
};
</script>

<template>
    <section class="space-y-6">
        <PrimaryButton @click="toggleModal">{{ props.userData ? 'Edit' : 'Create' }}</PrimaryButton>

        <Modal :show="showingCreateUserModal" @close="toggleModal">
            <form @submit.prevent="submitUser" class="p-6 space-y-4">
                <h2 class="text-lg font-medium text-gray-900">{{ props.userData ? 'Edit Payment Category' : 'Create a New Payment Category' }}
                </h2>

                <div class="grid grid-cols-1 gap-4 mt-4">
                    <div>
                        <InputLabel for="name" value="Name" />
                        <TextInput id="name" v-model="form.name" placeholder="Full Name" class="mt-1 block w-full"
                            required />
                        <InputError :message="form.errors.name" class="mt-2" />
                    </div>
                </div>

                <div class="text-right mt-6">
                    <button type="button" @click="toggleModal"
                        class="bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                        Close
                    </button>
                    <PrimaryButton type="submit" class="ms-3" :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing">
                        {{ props.userData ? 'Update' : 'Submit' }}
                    </PrimaryButton>
                </div>
            </form>
        </Modal>
    </section>
</template>
