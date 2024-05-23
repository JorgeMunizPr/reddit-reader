<template>
    <v-data-table :items="items" :headers="headers" show-select>
        <template v-slot:top>
            <SearchTableBar></SearchTableBar>
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
const headers = [{ "title": "Title", "key": "title" }, { "title": "Comments", "key": "num_comments" }, { "title": "Ups", "key": "ups" }, { "title": "Author", "key": "author" }, { "title": "Created", "key": "created_utc" }]
const items = [{ "id": "10d016l", "title": "Looking for books, videos, or other resources on specific or general topics? Ask here!", "author": "mobotsar", "num_comments": 181, "ups": 136, "url": "https://www.reddit.com/r/computerscience/comments/10d016l/looking_for_books_videos_or_other_resources_on/", "created_utc": "Jan 15, 2023" }, { "id": "1cy9nrn", "title": "How fileless malware was used to hack a government entity", "author": "colmmc98", "num_comments": 1, "ups": 3, "url": "https://www.reddit.com/r/computerscience/comments/1cy9nrn/how_fileless_malware_was_used_to_hack_a/", "created_utc": "May 22, 2024" }, { "id": "1cxy52t", "title": "Books on CS", "author": "mclmarcel", "num_comments": 18, "ups": 9, "url": "https://www.reddit.com/r/computerscience/comments/1cxy52t/books_on_cs/", "created_utc": "May 22, 2024" }]
</script>

<style>
th {
    background-color: #f0efef;
}
</style>