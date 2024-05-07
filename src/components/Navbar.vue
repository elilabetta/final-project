<script setup>
import { ref } from 'vue'
const navbarTab = ref (['Home', 'Tasks', 'Contact Us'])
</script>

<template>
  <section>
    <nav>
        <ul class="navbar">
            <li v-for="element in navbarTab" :key="element">{{ element }}</li>
        </ul>
    </nav>

  </section>
</template>

<style scoped>

.navbar {
  display: flex;
  flex-direction: row;
  align-content: space-between;
  gap: 50px;
  list-style-type: none;
  padding-left: 200px;
  padding-top: 50px;
}

</style>