<template>
    <div>
        <div class="flex justify-between content-center">
            <p>Team Accounts</p>
            <UserForm @createComplete="handleCreateComplete" />
        </div>

        <ListComponent :apiUrl="route('users.list')" :createCompleteSignal="createCompleteSignal"
            :sortAndFilters="sortAndFilters" :allowSorting="false">
            <template v-slot:list-view="{ data }">
                <UsersListTemplate @createComplete="handleCreateComplete" v-for="product in data" :key="product.id"
                    :data="product" />
            </template>
        </ListComponent>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import UsersListTemplate from '@/Components/List/UsersListTemplate.vue';
import UserForm from '@/Components/Form/UserForm.vue';
import ListComponent from '../General/ListComponent.vue';

const createCompleteSignal = ref(2);

const handleCreateComplete = () => {
    createCompleteSignal.value = Math.floor(Math.random() * 100) + 132;
};

const sortAndFilters = ref([
    { field_name: "email", field_type: "string" },
    { field_name: "name", field_type: "string" },
    {
        field_name: "role",
        field_type: "select",
        options: {
            user: 'user',
            finance: 'finance',
            admin: 'admin'
        }
    },
    {
        field_name: "approval_privillage",
        field_type: "select",
        options: {
            1: "L1 Approval Members",
            2: "L2 Approval Members",
            3: "L3 Approval Members",
        }
    },
]);
</script>