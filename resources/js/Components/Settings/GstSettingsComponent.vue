<template>
    <div class="flex justify-between content-center">
        <p>GST Configuration</p>
    </div>

    <div v-if="isLoading">
        <LoadingComponent class="mt-20 mb-20" />
    </div>
    <div v-else>
        <div class="pt-12" v-if="gstAmount">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 p-5 sm:p-0">
                <div class="grid md:grid-cols gap-4 mb-5">
                    <div
                        class="w-full flex flex-col justify-center order-last lg:order-none max-lg:mx-auto border p-3 rounded overflow-hidden bg-white transition-all duration-500">
                        <div class="flex">
                            <div class="flex-1">
                                <p class="text-2xl">{{ gstAmount.toFixed(2) }} %</p>
                            </div>
                            <div class="flex">
                                <GstConfigurationForm :gstPercentage="gstAmount.toFixed(2)" @createComplete="handleCreateComplete" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <NotFound />
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, watch } from 'vue';
import NotFound from '@/Components/Icons/NotFound.vue';
import LoadingComponent from '@/Components/General/LoadingComponent.vue';
import GstConfigurationForm from '../Form/GstConfigurationForm.vue';

const isLoading = ref(true);
const error = ref(null);
const gstAmount = ref(1);
const apiUrl = route('variables.fetchesGst');

// Fetch products with filters applied
const fetchList = async (page = 1) => {
    try {
        const { data } = await axios.get(`${apiUrl}`);
        gstAmount.value = data;
    } catch (err) {
        error.value = err;
    }
    finally {
        isLoading.value = false;
    }
};


// On component mount, load data
onMounted(() => {
    fetchList();
});

const handleCreateComplete = () => {
    fetchList();
};
</script>
