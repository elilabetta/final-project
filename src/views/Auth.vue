<script setup>
import { ref } from 'vue'
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import { useUserStore } from '../stores/user.js'
const userStore = useUserStore()
const hasUser = ref(true)
function toggleUser() {
  hasUser.value = !hasUser.value
}
</script>

<template>
  <section>
    <article v-if="hasUser">
      <SignIn></SignIn>
      <p @click="toggleUser">I don't have an account</p>
    </article>
    <article v-else>
      <SignUp></SignUp>
      <p @click="toggleUser"> I already have an account!</p>
    </article>
  
  </section>
</template>

<style scoped>
p{
 
  padding-left: 45%;
  font-weight: bold;
  color:blue;
}
</style>
