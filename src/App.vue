<template>
  <v-app>
    <component v-bind:is="DefaultLayout"></component>
  </v-app>
</template>

<script setup lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue';
</script>
