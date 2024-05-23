<template>
    <v-data-table :items="props.posts" :headers="headers" show-select>
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
const props = defineProps({
    headers: {
        type: Array,
        required: true
    },
    posts: {
        type: Array,
        required: true
    }
})
</script>
<style>
th {
    background-color: #f0efef;
}
</style>