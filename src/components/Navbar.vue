<script setup>
import { useUserStore } from '../stores/user.js'
const userStore = useUserStore()
</script>

<template>
    <div>
      <nav class="container">
        <img class="container-logo" src="../assets/IronHacklogo.png" alt= "ToDo List" />
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
  background-color: #a0a7af; /* A dark, modest blue */
  padding: 10px 20px;
}

.container-logo {
  height: 50px;
  border-radius: 5px;
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

.nav-link {
  text-decoration: none;
  color: #ecf0f1; /* A soft, almost white color */
  transition: color 0.3s ease; /* Smooth transition for hover effect */
}

.nav-link:hover {
  color: #3498db; /* Lighter blue on hover */
}

.logout-button {
  padding: 5px 10px;
  background-color: #e74c3c; /* A moderate red */
  border: none;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #c0392b; /* Darker shade of red on hover */
}
</style>
