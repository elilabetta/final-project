<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user.js';
import { useRouter } from 'vue-router'
const router= useRouter();
const userStore = useUserStore();
const email = ref("")
const password = ref("")



</script>
<template>
    <form @submit.prevent="userStore.signIn(email, password)" id="form">
      <h1>Sign In</h1>
      <div class="style">
        <input v-model="email" type="email" placeholder="Email" />
      </div>
      <div class="style">
        <input v-model="password" type="password" placeholder="Password" />
      </div>
      <div class="style">
        <button type="submit">Sign In</button>
      </div>
  </form>
</template>
<style scoped>

#form{
  margin-left: 30vw;
  margin-right: 35vw;
  margin-top: 30vh;
  margin-bottom: 30vh;
  padding-left: 15vw;
  padding-top: 5vh;
  padding-bottom: 5vh;
  width: 40vw;
  height: 3pvh;
  background-color: #FFFFCC ;

}
 h1{
  color:grey;
 }
.style{

}
</style>