<script setup>
import { useUserStore } from '../stores/user.js'
const userStore = useUserStore()
</script>

<template>
  <section>
    <nav>
        <ul class="navbar">
            <li >Home</li>
            <li >Tasks</li>
            <button @click="userStore.logOut"> Log Out</button>
        </ul>
    </nav>

  </section>
</template>

<style scoped>
nav{
  width: 100vw;
  height: 6vh;
  background-color:#FFFFCC ;
}
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  list-style-type: none;
  margin-left: 30% ;
  padding-top: 2vh;
  color: grey;
}

</style>