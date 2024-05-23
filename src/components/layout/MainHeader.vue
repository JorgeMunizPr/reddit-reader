<template>
    <v-row class="mx-8 my-4" align="center" justify="space-around">
        <v-col>
            <h1>Popular Posts</h1>
            <h4 class="text-subtitle-1">Computer Science</h4>
        </v-col>
        <v-spacer></v-spacer>
        <v-btn :redonly="postStore.posts.length === 0" @click="exportPostToCsv" variant="flat" color="primary">
            Export to Csv
        </v-btn>
    </v-row>
</template>

<script setup lang="ts">
import { usePostStore } from '../../store/postStore';
import { exportToCsv } from '../../utils/exportToCsv';
const postStore = usePostStore();

// Funtion to export to csv
const exportPostToCsv = () => {
    //Call the function with the post data and filename
    exportToCsv(postStore.posts, 'reddit_posts');
}
</script>