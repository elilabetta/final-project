<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from './stores/user.js'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
 
const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
 
onMounted(async () => {
  try {
    await userStore.fetchUser() 
    console.log(user.value);// here we call fetch user
    if (!user.value.data.user) {
      // redirect them to logout if the user is not there
      router.push({ path: '/auth' });
    } else {
      // continue to dashboard
      router.push({ path: '/' });
    }
  } catch (e) {
    console.log(e)
  }
})

</script>

<template>
  <section>
   
    <router-view/> <!-- your routes will load inside of these tags -->
   
  </section>
</template>

<style scoped>

</style>
