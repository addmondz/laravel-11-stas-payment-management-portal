<script setup>
import InputError from '@/Components/General/InputError.vue';
import InputLabel from '@/Components/General/InputLabel.vue';
import Modal from '@/Components/General/Modal.vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import TextInput from '@/Components/General/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import Swal from 'sweetalert2';
const emit = defineEmits();

// Accept userData and percentage props
const props = defineProps({
    gstPercentage: {
        type: [Number, String],
        default: null
    },
});

// Form setup with initial values
const form = useForm({ value: props.gstPercentage || 0.00 });

// Close modal function
const toggleModal = () => (showingCreateUserModal.value = !showingCreateUserModal.value);
const showingCreateUserModal = ref(false);

// Submit form function
const submitUser = async () => {
    try {
        const formData = new FormData();
        for (const [key, value] of Object.entries(form.data())) {
            formData.append(key, value);
        }

        const url = route('variables.updateGst');
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
        toggleModal();
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

// Handle keyup event to format input as decimal with 2 decimal places
const formatDecimalInput = (event) => {
    let value = event.target.value;

    // Remove non-numeric characters except for the decimal point
    value = value.replace(/[^0-9]/g, '');

    // Remove leading zeros if the value is more than 1 character long
    if (value.length > 1) {
        value = value.replace(/^0+/, ''); // Remove leading zeros
    }

    // If there's any value, insert a decimal point 2 digits from the right
    if (value) {
        // If the length of the number is 2 or less, insert it before two decimal places
        if (value.length <= 2) {
            value = `0.${value.padStart(2, '0')}`;
        } else {
            // Otherwise, split the string into two parts and insert the decimal point
            value = value.slice(0, -2) + '.' + value.slice(-2);
        }
    }

    form.value = value;
};
</script>

<template>
    <section>
        <PrimaryButton @click="toggleModal">Edit</PrimaryButton>
        <Modal :show="showingCreateUserModal" @close="toggleModal">
            <form @submit.prevent="submitUser" class="p-6 space-y-4">
                <h2 class="text-lg font-medium">Edit GST Percentage</h2>
                <div class="grid grid-cols-1 gap-4 mt-4">
                    <div>
                        <InputLabel for="gst" value="Gst Amount" />
                        <TextInput id="gst" v-model="form.value" class="mt-1 block w-full" required
                            @keyup="formatDecimalInput" />
                        <InputError :message="form.errors.gst" class="mt-2" />
                    </div>
                </div>
                <div class="text-right mt-6">
                    <button type="button" @click="toggleModal"
                        class="bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                        Close
                    </button>
                    <PrimaryButton type="submit" class="ms-3" :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing">
                        Submit
                    </PrimaryButton>
                </div>
            </form>
        </Modal>
    </section>
</template>