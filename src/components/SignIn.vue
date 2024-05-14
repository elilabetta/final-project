<script setup>

import { ref } from 'vue'
import { useUserStore } from '../stores/user.js';
import { useTaskStore } from '../stores/task.js';

const userStore = useUserStore();
const taskStore = useTaskStore();
const email = ref("")
const password = ref("")

async function signIn(email, password){
  await userStore.signIn(email, password)
  await taskStore.fetchTasks();
}

</script>

<template>

  <div class="container">
    <img src="../assets/ToDoList.webp" alt=""/>
    <form @submit.prevent="signIn(email, password)" id="form">
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
  </div>
    
</template>


<style scoped>

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40%;
}

img{
  width: 70%;
  height: 400px;
  margin-bottom: 20px;
  border-radius: 10px;
  margin-top: 20%;
}

#form{
  width: 80%;
  max-width: 400px;
  padding: 20px;
  background-color: #ffde82c8;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

 h1{
  font-size: 20px;
  color:grey;
  text-align: center;
  padding: 5px;
 }

 .stylish-input{
  margin-bottom: 15px; /* Spazio tra gli input */
}

input{
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px; /* Bordi arrotondati per gli input */
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
  background-color: #0056b3; /* Cambio colore al hover */
}


</style>