<template>
    <v-snackbar v-model="props.snackbar">
        {{ message }}
        <template v-slot:actions>
            <v-btn color="pink" variant="text" @click="emit('close-snack')">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script setup lang="ts">
// Define the props for the component
const props = defineProps({
    snackbar: {
        type: Boolean,
        required: true,
    },
    message: {
        type: String,
        required: true
    }
})
const emit = defineEmits(['close-snack']);
</script>
