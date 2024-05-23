<template>
    <v-card class="mx-8 mb-2">
        <DataTable></DataTable>
    </v-card>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { usePostStore } from '../store/postStore';
//Initialize store
const postStore = usePostStore();

onMounted(() => {
    loadPosts()
})

const loadPosts = async () => {
    try {
        await postStore.loadPosts('computerscience');
    } catch (error) {

    }
}

</script>
