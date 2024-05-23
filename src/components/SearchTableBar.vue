<template>
    <v-sheet class="pa-8" width="300">
        <v-row align="center">
            <v-text-field v-model="localSearch" label="Search Post" prepend-inner-icon="mdi-magnify" variant="outlined"
                clearable single-line hide-details density="compact" @input="onSearchInput"
                @click:clear="clearSearch"></v-text-field>
        </v-row>
    </v-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
    search: {
        type: String,
        required: true
    }
});
const emit = defineEmits(['update:search']);
const localSearch = ref(props.search);
// Funtion for clearing the search reference value 
const clearSearch = () => {
    localSearch.value = '';
    onSearchInput();
}
const onSearchInput = () => {
    emit('update:search', localSearch.value)
}
</script>
