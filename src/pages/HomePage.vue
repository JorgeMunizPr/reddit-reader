<template>
    <v-card class="mx-8 mb-2">
        <DataTable :headers="postStore.headers" :posts="postStore.posts" :loading="loadingPost"
            @read-author="readAuthor"></DataTable>
    </v-card>
    <Dialog :showDialog="showDialog" :dialogTitle="dialogTitle" @close-dialog="showDialog = false">
        <template v-slot:body>
            <v-list>
                <h3 class="mb-4">Other posts from the author:</h3>
                <v-list-item v-for="(item, i) in userStore.user?.latest_post" :key="i" class="my-4">
                    <div>
                        <a :href="item.link_url" target="_blank" class="d-flex mb-2 text-primary">
                            {{ item.link_title }}
                        </a>
                        <v-chip>
                            <v-icon icon="mdi-comment" start></v-icon>
                            {{ item.num_comments }}
                        </v-chip>
                        <v-chip class="ml-2">
                            <v-icon icon="mdi-arrow-up-bold" start></v-icon>
                            {{ item.ups }}
                        </v-chip>
                    </div>
                </v-list-item>
            </v-list>
        </template>
    </Dialog>
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
const showDialog = ref<Boolean>(false);
const dialogTitle = ref<string | null>('');
// Lyfecycle hook to load post when mounted
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
        showDialog.value = true;
        dialogTitle.value = item.author;
    } catch (error) {
        showDialog.value = false;
        messageSnack.value = userStore.error ? userStore.error : '';
        showSnack.value = true;
    }
}

</script>
