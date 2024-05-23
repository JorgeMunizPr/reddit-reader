<template>
    <v-dialog v-model="dialogState" max-width="600px" @click:outside="emit('close-dialog')">
        <v-card :title="dialogTitle" v-if="!loading">
            <v-card-text>
                <slot name="body"> </slot>
            </v-card-text>
            <v-divider></v-divider>
            <v-btn text="Close" size="x-large" @click="emit('close-dialog')" variant="flat"></v-btn>
        </v-card>
        <v-card v-else>
            <v-list-item title="Loading information...">
                <template v-slot:prepend>
                    <div class="ma-4 pe-4">
                        <v-icon color="primary" size="x-large"></v-icon>
                    </div>
                </template>
                <template v-slot:append>
                    <v-progress-circular color="primary" indeterminate="disable-shrink" size="32"
                        width="2"></v-progress-circular>
                </template>
            </v-list-item>
        </v-card>
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
    },
    loading: {
        type: Boolean,
        requied: true
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