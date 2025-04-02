<template>
    <div>
        <div class="flex justify-between content-center">
            <p>Email Configurations</p>
            <EmailConfigTemplateForm v-show="showing == 'template'" />
        </div>
        <div class="pt-5">
            <PrimaryButton class="mr-2" @click="showing = 'smtp'">SMTP Config</PrimaryButton>
            <button type="button" @click="showing = 'template'"
                class="bg-white hover:bg-gray-100 text-black inline-flex items-center px-4 py-2 border border-gray-300 rounded-md font-semibold text-xs uppercase tracking-widest mr-2">
                Template Config
            </button>
        </div>
        <div class="pt-5">
            <EmailConfigSmtpForm v-show="showing == 'smtp'" />

            <ListComponent :apiUrl="route('email_config.get_templates')" v-show="showing == 'template'">
                <template v-slot:list-view="{ data }">
                    <EmailListTemplate v-for="product in data" :key="product.id" :data="product" />
                </template>
            </ListComponent>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PrimaryButton from '@/Components/General/PrimaryButton.vue';
import EmailConfigSmtpForm from '@/Components/Form/EmailConfigSmtpForm.vue';
import EmailConfigTemplateForm from '@/Components/Form/EmailConfigTemplateForm.vue';
import ListComponent from '../General/ListComponent.vue';
import EmailListTemplate from '../List/EmailListTemplate.vue';

const showing = ref('smtp')
</script>
