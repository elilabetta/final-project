<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from './stores/user.js'
import { useTaskStore } from './stores/task.js'


 
const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const taskStore = useTaskStore()
const { tasks } = storeToRefs(taskStore)
 
onMounted(async () => {
  try {
    await userStore.fetchUser() 
    console.log(user.value);// here we call fetch user
    if (!user.value) {
      // redirect them to logout if the user is not there
      router.push({ path: '/auth' });
    } else {
      await taskStore.fetchTasks();
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