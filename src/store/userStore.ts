import { defineStore } from 'pinia';
import { fetchUser, RedditUser } from '../services/apiServices';

export const useUserStore = defineStore('useStore', {
  state: () => ({
    // Define variable to store Reddit user data
    user: null as RedditUser | null,
    // Define an error variable to store any error messages
    error: null as string | null,
  }),
  actions: {
    async loadUser(username: string) {
      try {
        this.error = null;
        // Fetch user data
        this.user = await fetchUser(username);
      } catch (error) {
        this.error = 'Failed to fetch user';
        // Throw error to be handled
        throw error;
      }
    },
  },
});
