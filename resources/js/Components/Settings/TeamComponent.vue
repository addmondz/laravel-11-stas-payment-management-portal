<template>
    <div>
        <div class="flex justify-between content-center">
            <p>Team Accounts</p>
            <UserForm @createComplete="handleCreateComplete" />
        </div>

        <ListComponent :apiUrl="route('users.list')" :createCompleteSignal="createCompleteSignal">
            <template v-slot:list-view="{ data }">
                <UsersListTemplate @createComplete="handleCreateComplete" v-for="product in data" :key="product.id" :data="product" />
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
</script>