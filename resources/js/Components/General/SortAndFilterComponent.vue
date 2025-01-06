<script setup>
import { ref, onMounted, watch } from 'vue';
import Modal from '@/Components/General/Modal.vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import InputError from '@/Components/General/InputError.vue';
import InputLabel from '@/Components/General/InputLabel.vue';
import TextInput from '@/Components/General/TextInput.vue';
import LoadingComponent from '@/Components/General/LoadingComponent.vue';

const showingModal = ref(false);
const formIsLoading = ref(false);
const filters = ref([]);
const sortOption = ref('');
const sortOrder = ref(''); // Added for sorting order
const error = ref(null);
const emit = defineEmits();

const props = defineProps({
    sortAndFilters: {
        type: Array,
        default: [],
    },
    allowSorting: {
        type: Boolean,
        default: true,
    },
});

// Placeholder for dynamic data (you can replace it with API calls)
const fetchData = async (api) => {
    try {
        const { data } = await axios.get(api);
        return data;
    } catch (err) {
        error.value = err;
    }
};

// This function will handle the modal opening and closing
const openModal = () => {
    showingModal.value = true;
};

const closeModal = () => {
    showingModal.value = false;
};

const submitFilters = () => {
    // const combinedFilters = [...filters.value, sortOption.value, sortOrder.value, 2]; // Combine filters, sort, order, and 2
    let combinedFilters = filters.value;
    combinedFilters['sort_by'] = sortOption.value;
    combinedFilters['sort_order'] = sortOrder.value;

    emit('filtersUpdated', combinedFilters);
    closeModal();
};

const resetFilters = () => {
    // Reset filters to an empty array or default values
    filters.value = [];

    // Reset sorting options to their default states
    sortOption.value = '';
    sortOrder.value = '';

    // Emit the reset state to the parent component
    emit('filtersUpdated', {
        filters: filters.value,
        sort_by: sortOption.value,
        sort_order: sortOrder.value,
    });

    // Close the modal after resetting
    closeModal();
};

const replaceUnderscoreAndUppercase = (str) => {
    return str
        .replace(/_/g, ' ') // Replace underscores with spaces
        .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize each word's first letter
}

const formData = ref([]);
const formErrors = ref([]);

watch(sortOption, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        sortOrder.value = 'asc'
    }

    if (newValue == '') {
        sortOrder.value = ''
    }
});

// Initialize the filters
onMounted(async () => {
    for (const filter of props.sortAndFilters) {
        formData.value[filter.name] = '';
        formErrors.value[filter.name] = '';
        if (filter.field_type === 'select' && filter.api) {
            const data = await fetchData(filter.api);
            filter.options = data;
        }
    }
});
</script>

<template>
    <section>
        <PrimaryButton @click="openModal">Sort And Filters</PrimaryButton>

        <Modal :show="showingModal" @close="closeModal">
            <div class="p-6">
                <div v-if="formIsLoading">
                    <LoadingComponent class="mt-32 mb-32" />
                </div>
                <div v-else>
                    <h2 class="text-lg font-medium text-gray-900">Sort And Filters</h2>
                    <div class="grid grid-cols-1 gap-4 mt-4">
                        <div v-for="(filter, index) in sortAndFilters" :key="index">
                            <InputLabel :for="filter.field_name"
                                :value="filter.display_name ?? replaceUnderscoreAndUppercase(filter.field_name)" />
                            <template v-if="filter.field_type === 'select'">
                                <select v-model="filters[filter.field_name]" :id="filter.field_name"
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required>
                                    <option value="" disabled selected>Select {{ filter.field_name }}</option>
                                    <option v-for="(option, idx) in filter.options" :key="idx" :value="idx">
                                        {{ option }}
                                    </option>
                                </select>
                            </template>
                            <template v-else-if="filter.field_type === 'number'">
                                <TextInput v-model="filters[filter.field_name]" :id="filter.field_name" type="number"
                                    placeholder="Enter value" class="mt-1 block w-full" required
                                    @keydown.enter="submitFilters" />
                            </template>
                            <template v-else>
                                <TextInput v-model="filters[filter.field_name]" :id="filter.field_name" type="text"
                                    placeholder="Enter value" class="mt-1 block w-full" required
                                    @keydown.enter="submitFilters" />
                            </template>
                            <InputError :message="formErrors[filter.field_name]" class="mt-2" />
                        </div>

                        <!-- Add Sort option if allowed -->
                        <div v-if="props.allowSorting">
                            <InputLabel for="sortOption" value="Sort By" />
                            <div class="flex">
                                <select v-model="sortOption" id="sortOption"
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required>
                                    <option value="" selected>-</option>
                                    <option v-for="(filter, idx) in sortAndFilters" :key="idx"
                                        :value="filter.field_name">
                                        {{ filter.display_name ?? replaceUnderscoreAndUppercase(filter.field_name) }}
                                    </option>
                                </select>
                                <!-- Enable the second dropdown only if a sort option is selected -->
                                <select v-model="sortOrder" id="sortOrder"
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    :disabled="!sortOption" required>
                                    <option value="" disabled selected>Select Sorting Order</option>
                                    <option value="asc">Ascending</option>
                                    <option value="desc">Descending</option>
                                </select>
                            </div>
                            <InputError :message="formErrors['sortOption']" class="mt-2" />
                        </div>
                    </div>
                </div>

                <div class="mt-6 flex justify-between">
                    <button type="button" @click="resetFilters"
                        class="bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest">
                        Reset Filters
                    </button>
                    <div class="text-right" v-if="!formIsLoading">
                        <button type="button" @click="closeModal"
                            class="bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest">
                            Close
                        </button>
                        <PrimaryButton @click="submitFilters" class="ms-3">
                            Apply Filters
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </Modal>
    </section>
</template>
