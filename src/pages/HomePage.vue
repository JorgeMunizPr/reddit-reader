<template>
    <v-card class="mx-8 mb-2">
        <DataTable :headers="postStore.headers" :posts="postStore.posts" :loading="loadingPost"
            @read-author="readAuthor"></DataTable>
    </v-card>
    <Snack :snackbar="showSnack" :message="messageSnack" @close-snack="showSnack = false"></Snack>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { usePostStore } from '../store/postStore';
import { useUserStore } from '../store/userStore';
//Initialize store
const postStore = usePostStore();
const userStore = useUserStore();
// Define reactive references fron loading states
const loadingPost = ref<Boolean>(false);
const showSnack = ref<Boolean>(false);
const messageSnack = ref<String | null>('')
onMounted(() => {
    loadPosts()
})
// Function to load post from the store
const loadPosts = async () => {
    loadingPost.value = true;
    try {
        await postStore.loadPosts('computerscience');
    } catch (error) {
        // Handle any error that occur during post loading
        messageSnack.value = postStore.error ? postStore.error : '';
        showSnack.value = true;
    }
    loadingPost.value = false;
}

// Function to load user data for dialog
const readAuthor = async (item: any) => {
    try {
        await userStore.loadUser(item.author);
    } catch (error) {
        messageSnack.value = userStore.error ? userStore.error : '';
        showSnack.value = true;
    }
}

</script>
