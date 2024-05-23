<template>
    <v-dialog v-model="dialogState" max-width="600px" @click:outside="emit('close-dialog')">
        <v-card :title="dialogTitle">
            <v-card-text>
                <slot name="body"> </slot>
            </v-card-text>
        </v-card>
        <v-btn text="Close" size="x-large" @click="emit('close-dialog')" variant="flat"></v-btn>
    </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

// Define the props excpected to receive
const props = defineProps({
    showDialog: {
        type: Boolean,
        required: true
    },
    dialogTitle: {
        type: String,
        required: true
    }
})
const emit = defineEmits(['close-dialog']);
//Create reference for dialog
const dialogState = ref(props.showDialog);

// Watch showDialog value for changes
watch(() => props.showDialog, (newValue) => {
    dialogState.value = newValue
})
</script>

<style>
.v-card-item {
    background-color: #f0efef;
}
</style>