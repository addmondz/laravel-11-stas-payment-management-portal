<script setup>
import InputError from '@/Components/General/InputError.vue';
import InputLabel from '@/Components/General/InputLabel.vue';
import Modal from '@/Components/General/Modal.vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import TextInput from '@/Components/General/TextInput.vue';
import LoadingComponent from '@/Components/General/LoadingComponent.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import Swal from 'sweetalert2';

const props = defineProps({
    claimId: {
        type: String,
        required: true,
    },
});

const emit = defineEmits();
const isLoading = ref(false);
const showingCreateUserModal = ref(false);

const toggleModal = () => (showingCreateUserModal.value = !showingCreateUserModal.value);

const form = useForm({
    paymentVoucherNumber: '',
    paymentDate: '',
});

const submitPayment = async () => {
    isLoading.value = true;
    try {
        const formData = new FormData();
        for (const [key, value] of Object.entries(form.data())) {
            formData.append(key, value);
        }

        const url = route('claims.paymentCompleted', props.claimId);
        const method = 'post';

        await axios[method](url, formData);

        Swal.fire({
            title: 'Success!',
            text: 'Payment details updated successfully',
            icon: 'success',
            confirmButtonText: 'OK',
        });

        toggleModal();
        form.reset();
        emit('updateComplete', true);
    } catch (err) {
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
</script>

<template>
    <section>
        <PrimaryButton @click="toggleModal">Payment Completed</PrimaryButton>

        <Modal :show="showingCreateUserModal" @close="toggleModal">
            <form @submit.prevent="submitPayment" class="p-6 space-y-4">
                <div v-if="isLoading">
                    <LoadingComponent class="mt-32 mb-32" />
                </div>
                <div v-else>
                    <h2 class="text-lg font-medium">Payment Voucher Details</h2>
                    <div class="grid grid-cols-1 gap-4 mt-4">
                        <div>
                            <InputLabel for="paymentVoucherNumber" value="Payment Voucher Number" />
                            <TextInput id="paymentVoucherNumber" v-model="form.paymentVoucherNumber" class="mt-1 block w-full" required placeholder="Enter Voucher Number" />
                            <InputError :message="form.errors.paymentVoucherNumber" class="mt-2" />
                        </div>
                        <div>
                            <InputLabel for="paymentDate" value="Payment Date" />
                            <TextInput id="paymentDate" type="date" v-model="form.paymentDate" class="mt-1 block w-full" required />
                            <InputError :message="form.errors.paymentDate" class="mt-2" />
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
                </div>
            </form>
        </Modal>
    </section>
</template>
