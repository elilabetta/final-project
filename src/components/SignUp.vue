<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user.js'
const userStore = useUserStore()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

//faccio qua la logica/funzione perchè chiamiamo il router.vue siamo in vue ed è più comodo, altrimenti tutta la logica va in user.js

function signUp(email, password, confirmPassword) {
  if (password === confirmPassword) userStore.signUp(email, password)
  else console.error('Las passwords no son iguales')
}
</script>
<template>
  <form @submit.prevent="signUp(email, password, confirmPassword)" id="form-up">
    <article class="form">
      <h1>Sign Up</h1>
      <div class="style">
        <input v-model="email" type="email" id="email" placeholder="Email" />
      </div>
      <div class="style">
        <input v-model="password" type="password" id="password" placeholder="Password" />
      </div>
      <div class="style">
        <input
          v-model="confirmPassword"
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
        />
      </div>
      <div class="style">
        <button type="submit">Sign Up</button>
      </div>
    </article>
  </form>
</template>
<style scoped>
#form-up{
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
  padding-bottom: 3vh;
  font-weight: bold;
  font-size: xx-large;
 }
.style{
 padding: 1%;

}
</style>
