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

const isLoading = ref(true);
const formIsLoading = ref(false);
const mailIsLoading = ref(false);
const form = useForm({
    // mail_mailer: '',
    mail_host: '',
    mail_port: '',
    mail_username: '',
    mail_password: '',
    mail_encryption: '',
    mail_from_address: '',
    mail_from_name: '',
});

const testConfig = async () => {
    if (mailIsLoading.value == true) return;

    try {
        mailIsLoading.value = true;

        const { data } = await axios.get(route('email_config.test'));
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
        const url = route('email_config.upsert');
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
        });

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
}

const fetchSmptConfig = async (page = 1) => {
    try {
        const { data } = await axios.get(route('email_config.get'));

        if (data != null) {
            // form.mail_mailer = data.data.mail_mailer;
            form.mail_host = data.data.mail_host;
            form.mail_port = data.data.mail_port;
            form.mail_username = data.data.mail_username;
            form.mail_password = data.data.mail_password;
            form.mail_encryption = data.data.mail_encryption;
            form.mail_from_address = data.data.mail_from_address;
            form.mail_from_name = data.data.mail_from_name;
        }

        iLoading.value = false;
    } catch (err) {
        isLoading.value = false;
    }
};

// On component mount, load data
onMounted(() => {
    fetchSmptConfig();
});
</script>

<template>
    <form @submit.prevent="submit">
        <div v-if="isLoading">
            <LoadingComponent class="mt-32 mb-32 " />
        </div>
        <div v-else>
            <div class="grid grid-cols-1 gap-4 mt-4">
                <!-- <div>
                    <InputLabel for="mail_mailer" value="Mail Mailer" />
                    <select id="mail_mailer" v-model="form.mail_mailer"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required>
                        <option value="" disabled selected>Please select Mail Mailer</option>
                        <option value="smtp">SMTP</option>
                        <option value="sendmail">SendMail</option>
                        <option value="mailgun">Mailgun</option>
                        <option value="postmark">Postmark</option>
                        <option value="ses">Amazon SES</option>
                    </select>
                    <InputError :message="form.errors.mail_mailer" class="mt-2" />
                </div> -->

                <div>
                    <InputLabel for="mail_host" value="Mail Host" />
                    <TextInput id="mail_host" v-model="form.mail_host" type="text" class="mt-1 block w-full" required />
                    <InputError :message="form.errors.mail_host" class="mt-2" />
                </div>

                <div>
                    <InputLabel for="mail_port" value="Mail Port" />
                    <TextInput id="mail_port" v-model="form.mail_port" type="text" class="mt-1 block w-full" required />
                    <InputError :message="form.errors.mail_port" class="mt-2" />
                </div>

                <div>
                    <InputLabel for="mail_username" value="Mail Username" />
                    <TextInput id="mail_username" v-model="form.mail_username" type="text" class="mt-1 block w-full"
                        required />
                    <InputError :message="form.errors.mail_username" class="mt-2" />
                </div>

                <div>
                    <InputLabel for="mail_password" value="Mail Password" />
                    <TextInput id="mail_password" v-model="form.mail_password" type="password" class="mt-1 block w-full"
                        required />
                    <InputError :message="form.errors.mail_password" class="mt-2" />
                </div>

                <div>
                    <InputLabel for="mail_encryption" value="Mail Encryption" />
                    <TextInput id="mail_encryption" v-model="form.mail_encryption" type="text"
                        class="mt-1 block w-full" />
                    <InputError :message="form.errors.mail_encryption" class="mt-2" />
                </div>

                <div>
                    <InputLabel for="mail_from_address" value="Mail From Address" />
                    <TextInput id="mail_from_address" v-model="form.mail_from_address" type="text"
                        class="mt-1 block w-full" required />
                    <InputError :message="form.errors.mail_from_address" class="mt-2" />
                </div>

                <div>
                    <InputLabel for="mail_from_name" value="Mail From Name" />
                    <TextInput id="mail_from_name" v-model="form.mail_from_name" type="text" class="mt-1 block w-full"
                        required />
                    <InputError :message="form.errors.mail_from_name" class="mt-2" />
                </div>
            </div>
        </div>

        <div class="text-right mt-6" v-if="!formIsLoading">
            <button type="button" @click="testConfig"
                class="bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border border-gray-300 rounded-md font-semibold text-xs uppercase tracking-widest mr-2">
                {{ mailIsLoading ? 'Sending Mail' : 'Test Mail' }}
            </button>

            <PrimaryButton type="submit" class="ms-3" :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing">
                Submit Config
            </PrimaryButton>
        </div>
    </form>
</template>
