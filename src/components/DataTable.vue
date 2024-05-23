<template>
    <v-data-table :items="props.posts" :headers="headers" :loading="loading" :search="search" show-select>
        <template v-slot:top>
            <SearchTableBar :search="search" @update:search="updateSearchQuery"></SearchTableBar>
        </template>
        <template v-slot:item.title="{ item }">
            <a :href="item.url">{{ item.title }}</a>
        </template>
        <template v-slot:item.author="{ item }">
            <v-chip variant="flat">
                {{ item.author }}
            </v-chip>
        </template>
    </v-data-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
    headers: {
        type: Array,
        required: true
    },
    posts: {
        type: Array,
        required: true
    },
    loading: {
        type: Boolean,
        required: true
    }
})
//Define reference for search query
const search = ref<string>('');
// Function to update search value
const updateSearchQuery = (query) => {
    search.value = query;
}
</script>
<style>
th {
    background-color: #f0efef;
}
</style>