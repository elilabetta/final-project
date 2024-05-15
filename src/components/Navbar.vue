<script setup>
import { useUserStore } from '../stores/user.js'
const userStore = useUserStore()

const RadioPlayer = {
  data() {
    return {
      audio: null,
      isPlaying: false,
      radioUrl: '../img/audio.mp3'
    };
  },
  // Definisci la funzione per la riproduzione della radio
  togglePlayback() {
    if (!this.audio) {
      this.audio = new Audio(this.radioUrl);
      this.audio.play();
      this.isPlaying = true;
    } else {
      if (this.audio.paused) {
        this.audio.play();
        this.isPlaying = true;
      } else {
        this.audio.pause();
        this.isPlaying = false;
      }
    }
  }
};


</script>

<template>
    <div>
      <nav class="container">
        <div class="logo-title-container">
          <img class="container-logo" src="../assets/img/IronHacklogo.png" alt="IronHack Logo"> 
          <p>ToDo List</p>
        </div>
        <ul class="navbar">
          <li class="nav-item"><a href="../components/SignIn.vue"> Home </a></li>

          <button @click="togglePlayback">{{ isPlaying ? 'Pausa' : 'Ascolta' }}</button>
         
          <li class="nav-item"><a href="https://www.ironhack.com/es/contacto"> Contact Us</a></li>
          <button class="logout-button" @click="userStore.logOut">【⏻】</button>
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
  gap: 20px; 
  align-items: center;
}

.nav-item {
  margin-left: 20px; 
  font-weight: bold;
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
  color: #4bcffb;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #e85343; /* Darker shade of red on hover */
}
</style>
