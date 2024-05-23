import { defineStore } from 'pinia';
import { fetchPosts, RedditPost } from '../services/apiServices';

export const usePostStore = defineStore('postStore', {
  state: () => ({
    //Define the headers
    headers: [
      { title: 'Title', key: 'title' },
      { title: 'Comments', key: 'num_comments' },
      { title: 'Ups', key: 'ups' },
      { title: 'Author', key: 'author' },
      { title: 'Created', key: 'created_utc' },
    ],
    // Define the post array to store Reddit posts
    post: [] as RedditPost[],
    // Define an error variable to store any erro messages
    error: null as string | null,
  }),
  actions: {
    async loadPosts(subreddit: string) {
      try {
        this.error = null;
        // Fetch posts from the subreddit
        this.posts = await fetchPosts(subreddit);
      } catch (error) {
        this.error = 'Failed to fetch posts';
        // throw the error to be handled
        throw error;
      }
    },
  },
});
