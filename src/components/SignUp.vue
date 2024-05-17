<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user.js'
const userStore = useUserStore()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const alertVisible = ref(false)

//faccio qua la logica/funzione perchè chiamiamo il router.vue siamo in vue ed è più comodo, altrimenti tutta la logica va in user.js

function signUp(email, password, confirmPassword) {
  if (password === confirmPassword) {
    userStore.signUp(email, password)
    alertVisible.value = true
  } else alert('Password do not match')
}
</script>

<template>
  <section>
    <div class="custom-alert" v-if="alertVisible">
      <p>Account created successfully</p>
      <p>Check your inbox to make the access!</p>
      <button @click="() => (alertVisible = false)">✖️</button>
    </div>
  </section>
  <section>
    <div class="container">
      <img src="../assets/img/todo.webp" alt="" />
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
    </div>
  </section>
</template>

<style scoped>
.custom-alert {
  background-color: #f2e6e6db;
  color: #565656d9;
  border-radius: 10px;
  border: none;
  margin: 30px;
  padding: 15px;
  text-align: center;
}

.custom-alert button {
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.custom-alert button:hover {
  background-color: #565656d9;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30%, 0%;
}

img {
  width: 50%;
  max-width: 400px;
  margin-bottom: 20px;
  border-radius: 10px;
  margin-top: 10%;
}

#form-up {
  width: 80%;
  max-width: 400px;
  padding: 20px;
  background-color: #ffde82c8;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 20px;
  color: #565656d9;
  text-align: center;
  padding: 5px;
}

.stylish-input {
  margin-bottom: 15px; 
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin: 10px 5px 0 0;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3; 
}
</style>
