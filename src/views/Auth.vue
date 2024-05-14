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
      <div class="container">
        <img src="../assets/Scream.jpeg" alt=""/>
        <p @click="toggleUser">I don't have an account</p>
      </div>
    </article>
    <article v-else>
      <SignUp></SignUp>
      <p @click="toggleUser"> I already have an account!</p>
    </article>
  
  </section>
</template>

<style scoped>

.container {
  display: flex; 
  align-items: center; 
  margin-left: 20%;
  width: 80%;
  height: 300px;
  margin-top: 60px;
}

p{
  margin-top: 200px;
  padding-left: 15px;
  font-weight: bold;
  color:#777777e1;
  font-size: 20px;
  margin-bottom: 20%;
}
img{
  margin-top:30px;
  width: 60px;
  height:auto ;
  margin-left: 150px;
  border-radius: 100%;
}
</style>
