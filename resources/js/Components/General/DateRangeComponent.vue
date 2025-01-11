<template>
    <div class="w-full">
        <InputLabel for="receipt_date" :value="label" v-if="showLabel" />
        <div class="flex flex-col md:flex-row justify-center items-center w-full gap-2">
            <!-- First Input -->
            <div class="w-full md:flex-1">
                <TextInput id="date_from" v-model="date_from" type="date" class="mt-1 block w-full"
                    @change="validateDates" required />
            </div>
            <!-- "To" Divider -->
            <div class="w-full md:w-auto text-center">to</div>
            <!-- Second Input -->
            <div class="w-full md:flex-1">
                <TextInput id="date_to" v-model="date_to" type="date" class="mt-1 block w-full" @change="validateDates"
                    required />
            </div>
        </div>
        <!-- Error Message -->
        <p v-if="errorMessage || additionalErrorMessage" class="text-red-500 text-sm mt-2"
            v-html="errorMessage + ' ' + additionalErrorMessage"></p>
    </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import InputLabel from '@/Components/General/InputLabel.vue';
import TextInput from '@/Components/General/TextInput.vue';

const props = defineProps({
    label: {
        type: String,
        default: 'Date',
    },
    showLabel: {
        type: Boolean,
        default: true,
    },
    additionalErrorMessage: {
        type: String,
        default: '',
    },
    modelValue: {
        type: Array,
        default: () => ['', ''],
    },
});

const emit = defineEmits(['update:modelValue']);

const date_from = ref(props.modelValue[0]); // Set initial value to the passed v-model value
const date_to = ref(props.modelValue[1]); // Set initial value to the passed v-model value

const errorMessage = ref('');

const validateDates = () => {
    errorMessage.value = '';

    if (!date_from.value || !date_to.value) {
        errorMessage.value = 'Both date fields are required.';
        return;
    }

    if (new Date(date_to.value) < new Date(date_from.value)) {
        errorMessage.value = "The <strong>end date</strong> must be the same as or later than the <strong>start date.</strong>";
        return;
    }

    // Emit the validated date range to update v-model
    emit('update:modelValue', [date_from.value, date_to.value]);
};

// Watch for changes to automatically validate dates
watch([date_from, date_to], validateDates);
</script>