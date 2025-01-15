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

const props = defineProps({
    claimData: {
        type: Object,
        default: null
    }
});
const showingCreateClaimModal = ref(false);
const formIsLoading = ref(false);
const showGSTValueField = ref(false);
const emit = defineEmits();
const currencyData = ref([]);
const paymentReceiverData = ref([]);
const paymentCategoryData = ref([]);
const payment_to = ref('');
const error = ref(null);
const form = useForm({
    payment_to: '',
    payment_type: '',
    payment_category: '',
    currency: '',
    amount: '',
    gst: '',
    gst_value: '',
    purpose: '',
    receipt_date: '',
    receipt: null,
});
const gst = ref(0);
const customSelect = ref()
const selectedReceiverName = ref();

const showGSTValue = () => {
    if (form.gst == 1) {
        calGSTValue()
        showGSTValueField.value = true;
    } else {
        showGSTValueField.value = false;
    }
};

const fetchGST = async (page = 1) => {
    try {
        const { data } = await axios.get(route('variables.fetchesGst'));
        gst.value = data;
    } catch (err) {
        error.value = err;
    }
};

const calGSTValue = () => {
    console.debug('123')
    form.gst_value = (form.amount * gst.value) / 100
};

const openCreateClaimModal = () => {
    showingCreateClaimModal.value = true;
};

const closeModal = () => {
    showingCreateClaimModal.value = false;
};

const submitClaim = async () => {
    formIsLoading.value = true;
    try {
        // Create FormData to handle file uploads
        const formData = new FormData();
        if (form.receipt != null) {
            formData.append('receipt', form.receipt);  // Attach file
        }
        // Append other form data fields as necessary
        for (const [key, value] of Object.entries(form.data())) {
            if (key == 'receipt') {
                continue
            }
            formData.append(key, value);
        }

        // Make the API request using axios with FormData
        const url = props.claimData ? route('claims.update', props.claimData.id) : route('claims.store');
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

        // Close modal and reset form after successful submission
        closeModal();
        form.reset();
        emit('createComplete', true);
        formIsLoading.value = false;
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
        formIsLoading.value = false;
    }
};

const fetchCurrencies = async () => {
    try {
        const { data } = await axios.get(route('currency.listShortCode'));
        currencyData.value = data;
    } catch (err) {
        error.value = err;
    }
};

const handlePaymentToChange = (event) => {
    const selectedCurrencyId = event.target.selectedOptions[0]?.getAttribute('data-attr-currency-id');
    form.currency = selectedCurrencyId;
};

const fetchPaymentCategory = async () => {
    try {
        const { data } = await axios.get(route('paymentCategory.listChoice'));
        paymentCategoryData.value = data;
    } catch (err) {
        error.value = err;
    }
};

const listPaymentReceiverNameAndId = async () => {
    try {
        const { data } = await axios.get(route('paymentReceiver.listNameAndId'));
        paymentReceiverData.value = data;

        for (let i = 0; i < paymentReceiverData.value.length; i++) {
            if (paymentReceiverData.value[i].id == form.payment_to) {
                selectedReceiverName.value = paymentReceiverData.value[i].name
                break
            }
        }
    } catch (err) {
        error.value = err;
    }
};

watch(
    () => payment_to.value,
    (newData, oldData) => {
        if (form && 'payment_to' in form) {
            form.payment_to = newData.toString();

            // Find the corresponding currency_id based on the payment_to id
            const selectedReceiver = paymentReceiverData.value.find(receiver => receiver.id === parseInt(newData));
            const currencyId = selectedReceiver ? selectedReceiver.currency_id : null;

            form.currency = currencyId;
        }
    },
    { immediate: true }
);
// populate form with userdata if editing
watch(() => props.claimData, (newData) => {
    if (newData) {
        nextTick(()=>{
            form.payment_to = newData.payment_receiver_id
        })
        form.payment_type = newData.payment_type
        form.payment_category = newData.payment_category_id
        form.currency = newData.currency_id
        form.amount = newData.amount
        form.gst = newData.gst_amount != 0 ? '1' : '0'
        form.gst_value = newData.gst_amount
        form.purpose = newData.purpose
        form.receipt_date = newData.receipt_date

        if (newData.gst_amount != 0) {
            showGSTValueField.value = true;
        }
    } else {
        form.reset(); // reset if no userdata
    }
}, { immediate: true });




// On component mount, load data
onMounted(() => {
    fetchGST();
    fetchCurrencies();
    fetchPaymentCategory();
    listPaymentReceiverNameAndId();
});
</script>

<template>
    <section class="space-y-6">
        <PrimaryButton @click="openCreateClaimModal">{{ props.claimData != null ? 'Edit' : 'Create Payment' }}</PrimaryButton>

        <Modal :show="showingCreateClaimModal" @close="closeModal">
            <form @submit.prevent="submitClaim" class="p-5">
                <div v-if="formIsLoading">
                    <LoadingComponent class="mt-32 mb-32 " />
                </div>
                <div v-else>
                    <h2 class="text-lg font-medium text-gray-900">{{ props.claimData != null ? 'Edit Payment' : 'Create New Payment' }}</h2>
                    <div class="grid grid-cols-1 gap-4 mt-4">
                        <div>
                            <InputLabel for="payment_to" value="Payment To" />
                            <CustomSelectComponent :choices="paymentReceiverData" v-model="payment_to" :isEdit="props.claimData != null"
                            :label="props.claimData != null ? selectedReceiverName : 'Payment Receiver'" :choicesIsObject="true" ref="customSelect" />
                            <InputError :message="form.errors.payment_to" class="mt-2" />
                        </div>

                        <div>
                            <InputLabel for="payment_type" value="Payment Type" />
                            <select id="payment_type" v-model="form.payment_type"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required>
                                <option value="" disabled selected>Please select Payment Type</option>
                                <option value="reimbursement">Reimbursement</option>
                                <option value="external_payment">External Payment</option>
                            </select>
                            <InputError :message="form.errors.payment_type" class="mt-2" />
                        </div>

                        <div>
                            <InputLabel for="payment_category" value="Payment Category" />
                            <select id="currency" v-model="form.payment_category"
                                class="mt-1 payment_category w-full border-gray-300 rounded-md shadow-sm" required>
                                <option value="" disabled selected>Please select Payment Category</option>
                                <option v-for="(name, code) in paymentCategoryData" :key="code" :value="code"
                                    class="capitalize">
                                    {{ name }}
                                </option>
                            </select>
                            <InputError :message="form.errors.payment_category" class="mt-2" />
                        </div>

                        <div>
                            <InputLabel for="currency" value="Currency" />
                            <select id="currency" v-model="form.currency"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required>
                                <option value="" disabled selected>Please select Currency</option>
                                <option v-for="(name, code) in currencyData" :key="code" :value="code">
                                    {{ name }}
                                </option>
                            </select>
                            <InputError :message="form.errors.currency" class="mt-2" />
                        </div>

                        <div>
                            <InputLabel for="amount" value="Amount (incl. GST if any)" />
                            <TextInput id="amount" v-model="form.amount" type="number" step="0.01"
                                placeholder="Enter amount" class="mt-1 block w-full" required @keyup="calGSTValue" />
                            <InputError :message="form.errors.amount" class="mt-2" />
                        </div>

                        <div>
                            <div class="col-span-2">
                                <InputLabel value="GST" />
                                <div class="flex items-center space-x-4 mt-1">
                                    <div class="flex space-x-4">
                                    <label class="inline-flex items-center">
                                        <input type="radio" v-model="form.gst" value="1" class="form-radio" @change="showGSTValue" />
                                        <span class="ml-2">Yes</span>
                                    </label>
                                    <label class="inline-flex items-center">
                                        <input type="radio" v-model="form.gst" value="0" class="form-radio" @change="showGSTValue" />
                                        <span class="ml-2">No</span>
                                    </label>
                                    </div>
                                    <div v-if="showGSTValueField">
                                        <TextInput id="gst_value" v-model="form.gst_value" type="number" step="0.01"
                                        placeholder="Enter GST amount" class="mt-1 block w-full" required />
                                    </div>
                                </div>
                                <InputError :message="form.errors.gst" class="mt-2" />
                            </div>
                        </div>
                        <div>
                            <div class="col-span-2">
                                <InputLabel for="purpose" value="Purpose of Payment" />
                                <textarea id="purpose" v-model="form.purpose" rows="4"
                                    placeholder="Enter purpose of payment"
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required></textarea>
                                <InputError :message="form.errors.purpose" class="mt-2" />
                            </div>
                        </div>

                        <div>
                            <InputLabel for="receipt_date" value="Date of Receipt / Invoice" />
                            <TextInput id="receipt_date" v-model="form.receipt_date" type="date"
                                class="mt-1 block w-full" required />
                            <InputError :message="form.errors.receipt_date" class="mt-2" />
                        </div>

                        <div>
                            <div class="col-span-2">
                                <InputLabel for="receipt" value="Upload Receipt" />
                                <input id="receipt" type="file" @change="(e) => (form.receipt = e.target.files[0])"
                                    accept=".jpeg,.jpg,.pdf,.png"
                                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 cursor-pointer"
                                     />
                                <InputError :message="form.errors.receipt" class="mt-2" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-right mt-6" v-if="!formIsLoading">
                    <button type="button" @click="closeModal"
                        class="bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                        Close
                    </button>
                    <PrimaryButton type="submit" class="ms-3" :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing">
                        Submit Payment
                    </PrimaryButton>
                </div>
            </form>
        </Modal>
    </section>
</template>