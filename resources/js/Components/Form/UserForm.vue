<script setup>
import InputError from '@/Components/General/InputError.vue';
import InputLabel from '@/Components/General/InputLabel.vue';
import Modal from '@/Components/General/Modal.vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import TextInput from '@/Components/General/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { ref, watch } from 'vue';
import Swal from 'sweetalert2';
import { onMounted } from 'vue';
import LoadingComponent from '@/Components/General/LoadingComponent.vue';

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
const isLoading = ref(false);

// Form setup with default values (used for create)
const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    isAdmin: '0',
    approvalRole: '',
});

// Populate form with userData if editing
watch(() => props.userData, (newUserData) => {
    if (newUserData) {
        form.name = newUserData.name;
        form.email = newUserData.email;
        form.isAdmin = newUserData.role === 'admin' ? '1' : '0';
        form.approvalRole = newUserData.approval_role_id;
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

const validatePassword = () => {
    if (form.password !== form.password_confirmation) {
        form.errors.password_confirmation = 'Passwords do not match';
        return false;
    } else {
        form.errors.password_confirmation = '';
    }
    return true;
};

const submitUser = async () => {
    isLoading.value = true;

    if (!validatePassword()) {
        isLoading.value = false;

        Swal.fire({
            title: 'Error!',
            text: 'Passwords do not match.',
            icon: 'error',
            confirmButtonText: 'OK',
        });
        return;
    }

    try {
        const formData = new FormData();
        for (const [key, value] of Object.entries(form.data())) {
            formData.append(key, value);
        }

        // Determine if we're editing or creating
        const url = props.userData ? route('user.update', props.userData.id) : route('user.create');
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
    } finally {
        isLoading.value = false;
    }
};


const fetchApprovalRoles = async () => {
    try {
        const { data } = await axios.get(route('approvalRoles.list'));
        approvalRolesData.value = data;
    } catch (err) {
        error.value = err;
    }
};

onMounted(() => {
    fetchApprovalRoles();
});
</script>

<template>
    <section class="space-y-6">
        <PrimaryButton @click="toggleModal">{{ props.userData ? 'Edit' : 'Create' }}</PrimaryButton>

        <Modal :show="showingCreateUserModal" @close="toggleModal">
            <form @submit.prevent="submitUser" class="p-6 space-y-4">
                <div v-if="!isLoading">
                    <h2 class="text-lg font-medium text-gray-900">{{ props.userData ? 'Edit User' : 'Create a New User'
                        }}
                    </h2>

                    <div class="grid grid-cols-1 gap-4 mt-4">
                        <div>
                            <InputLabel for="name" value="Name" />
                            <TextInput id="name" v-model="form.name" placeholder="Full Name" class="mt-1 block w-full"
                                required />
                            <InputError :message="form.errors.name" class="mt-2" />
                        </div>

                        <div>
                            <InputLabel for="email" value="Email" />
                            <TextInput id="email" type="email" v-model="form.email" placeholder="Email"
                                class="mt-1 block w-full" required />
                            <InputError :message="form.errors.email" class="mt-2" />
                        </div>

                        <div>
                            <InputLabel for="password" value="Password" />
                            <TextInput id="password" type="password" v-model="form.password" placeholder="Password"
                                class="mt-1 block w-full"
                                :required="!props.userData || (form.password_confirmation !== '')" />
                            <InputError :message="form.errors.password" class="mt-2" />
                            <small class="text-gray-500 font-bold" v-if="props.userData">Please leave empty if you are
                                not
                                chaing the password</small>
                        </div>

                        <div>
                            <InputLabel for="password_confirmation" value="Confirm Password" />
                            <TextInput id="password_confirmation" type="password" v-model="form.password_confirmation"
                                placeholder="Confirm Password" class="mt-1 block w-full"
                                :required="!props.userData || (form.password !== '')" />
                            <InputError :message="form.errors.password_confirmation" />
                            <small class="text-gray-500 font-bold" v-if="props.userData">Please leave empty if you are
                                not
                                chaing the password</small>
                        </div>

                        <div>
                            <div class="col-span-2">
                                <InputLabel value="Is Admin" />
                                <div class="flex items-center space-x-4 mt-1">
                                    <label class="inline-flex items-center">
                                        <input type="radio" v-model="form.isAdmin" value="1" class="form-radio" />
                                        <span class="ml-2">Yes</span>
                                    </label>
                                    <label class="inline-flex items-center">
                                        <input type="radio" v-model="form.isAdmin" value="0" class="form-radio" />
                                        <span class="ml-2">No</span>
                                    </label>
                                </div>
                                <InputError :message="form.errors.isAdmin" class="mt-2" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <InputLabel for="payment_category" value="Approval Role" />
                        <select id="currency" v-model="form.approvalRole"
                            class="mt-1 payment_category w-full border-gray-300 rounded-md shadow-sm">
                            <option value="">None</option>
                            <option v-for="(name, code) in approvalRolesData" :key="code" :value="code"
                                class="capitalize">
                                {{ name }}
                            </option>
                        </select>
                        <InputError :message="form.errors.payment_category" class="mt-2" />
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
                </div>
                <div v-else>
                    <LoadingComponent class="mt-32 mb-32 " />
                </div>
            </form>
        </Modal>
    </section>
</template>
