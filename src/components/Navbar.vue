<script setup>
import { useUserStore } from '../stores/user.js'
const userStore = useUserStore()
</script>

<template>
    <div>
      <nav>
        <img src="./src/assets/IronHacklogo.png" alt="ToDo List" />
        <ul class="navbar">
          <li><a ref="../components/SignIn.vue"> Home </a></li>
          <li><a ref="../components/Tasks.vue">Tasks</a></li>
          <li>Profile</li>
          <li><a ref="https://www.ironhack.com/es/contacto"> Contact Us</a></li>
          <button @click="userStore.logOut">Log Out</button>
        </ul>
      </nav>
    </div>
</template>

<style scoped>
nav {
  width: 100vw;
  height: 6vh;
  background-color: #ffffcc;
}
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  list-style-type: none;
  margin-left: 30%;
  padding-top: 2vh;
  color: grey;
}
</style>
