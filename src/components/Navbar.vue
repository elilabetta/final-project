<script setup>
import { useUserStore } from '../stores/user.js'
const userStore = useUserStore()

const urlRadio = 'https://emisora.org.es/'

function openRadioPlayer() {
  window.open(urlRadio, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <div>
    <nav class="container">
      <div class="logo-title-container">
        <img class="container-logo" src="../assets/img/ironH.jpeg" alt="IronHack Logo" />
        <p>ToDo List</p>
      </div>
      <ul class="navbar">
        <li class="nav-item"><a href="../components/SignIn.vue"> Home</a></li>

        <li class="nav-item">
          <a href="https://emisora.org.es/" target="_blank" rel="noopener noreferrer"
            >Music</a
          >
        </li>

        <li class="nav-item"><a href="https://www.ironhack.com/es/contacto"> Contact Us</a></li>
        <button class="logout-button" @click="userStore.logOut">【⏻】</button>
      </ul>
    </nav>
  </div>
</template>

<style scoped>

.container {
  width: 100%;
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
  height: 7vh;
  border-radius: 50%;
}

.container p {
  font-size: 20px;
  font-weight: bold;
  color: #7c7c7c;
}
.navbar {
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-item {
  margin-left: 20px;
  color: #7c7c7c;
}

.nav-item a {
  text-decoration: none;
  color: #7c7c7c;
}

.logout-button {
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  color: #7c7c7c;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #e85343; /* Darker shade of red on hover */
}
@media (max-width: 375px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
  }
}

</style>
