import { defineStore } from 'pinia';
import { supabase } from '../supabase.js';
 
export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
 
  actions: {
    async fetchUser () {
      const user = await supabase.auth.getUser();
      this.user = user
    },
    async signUpNewUser(email, password) {
      const { user, error } = await supabase.auth.signUpNewUser({
        email: email,
        password: password
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    persist: {
      enabled: true,
      strategies: [
        {
          key: 'user',
          storage: localStorage
        }
      ]
    },
 }
});