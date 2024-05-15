<script setup>
import { ref } from 'vue'
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import { useUserStore } from '../stores/user.js'
const userStore = useUserStore()
const hasUser = ref(true)
function toggleUser() {
  hasUser.value = !hasUser.value
}
</script>

<template>
  <section>
    <div v-if="hasUser">
      <SignIn></SignIn>
      <article class="account-reg">
        <img src="../assets/img/urlo.jpeg" alt=""/>
        <p @click="toggleUser">I don't have an account</p>
      </article>
    </div>
    <div v-else>
      <SignUp></SignUp>
      <article class="account-reg">
       <p @click="toggleUser">I already have an account</p>
       <img src="../assets/img/user.png" alt=""/>
      </article>
    </div>
  
  </section>
</template>

<style scoped>

.container{
  display: flex;
  flex-direction: column;
  margin:auto;
}
p{
  padding-left: 15px;
  font-weight: bold;
  color: #565656d9;
  font-size: 20px;
}
.account-reg{
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: fit-content;
}

.account-reg img{
  width: 30px;
  height:auto ;
}

</style>
