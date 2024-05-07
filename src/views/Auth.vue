<script setup>
import { ref } from 'vue'
import { supabase } from './supabase.js'
import router from './router/index.js'

//declaro variables
const email = ref("")
const password = ref("")
const confirmPassword = ref("")

const auth = async () => {
    try{
    const {error} = await supabase.auth.submit ({
        email: email.value,
        password: password.value,
        confirmPassword:  confirmPassword.value
    })
    if (error) throw error;
} catch(error) {
    alert.error.message
}
}


</script>

<template>
    <h1>Componente Auth</h1>
    Formulario del sign up
    <form>
        <label for="email">email</label>
        <input type="email" id="email">
       
        <label for="password">password</label>
        <input type="password" id="password">

        <label for="confirm password"> confirm password </label>
        <input type="confirm password" id="confirm-password">

        <button type="submit">Sing Up</button>
    </form>

</template>

<style scoped></style>