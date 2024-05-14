<script setup>
import { useUserStore } from '../stores/user.js'
const userStore = useUserStore()
</script>

<template>
    <div>
      <nav class="container">
        <div class="logo-title-container">
          <img class="container-logo" src="../assets/IronHacklogo.png" alt="IronHack Logo"> 
          <p>ToDo List</p>
        </div>
        <ul class="navbar">
          <li class="nav-item"><a ref="../components/SignIn.vue"> Home </a></li>
          <li class="nav-item"><a ref="../components/Tasks.vue">Tasks</a></li>
          <li class="nav-item">Profile</li>
          <li class="nav-item"><a ref="https://www.ironhack.com/es/contacto"> Contact Us</a></li>
          <button class="logout-button" @click="userStore.logOut">Log Out</button>
        </ul>
      </nav>
    </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffde82c8; 
  padding: 10px 20px;
}

.logo-title-container {
  display: flex;
  align-items: center; 
  gap: 10px; 
}

.container-logo {
  height: 50px;
  border-radius: 5px;
}
.container p {
  font-size: 20px;
  font-weight: bold;
  color:#4bcffb;
}
.navbar {
  list-style: none;
  display: flex;
  gap: 20px; /* Spacing between nav items */
}

.nav-item {
  margin-left: 20px; /* Spacing between nav items */
  font-weight: bold;
  color: grey;
}

.logout-button {
  padding: 5px 10px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #c0392b; /* Darker shade of red on hover */
}
</style>
