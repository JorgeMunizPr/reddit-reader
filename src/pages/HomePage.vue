<template>
    <v-card class="mx-8 mb-2">
        <DataTable></DataTable>
    </v-card>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { fetchPosts } from '../services/apiServices';
onMounted(() => {
    loadPosts()
})

const loadPosts = async () => {
    try {
        const posts = await fetchPosts('computerscience');
        console.log(posts);
    } catch (error) {

    }
}

</script>
