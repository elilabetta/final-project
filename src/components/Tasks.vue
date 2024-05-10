<script setup>

import { ref, onMounted } from 'vue';
import { useTaskStore } from "@/stores/task"; 
import { useUserStore } from "@/stores/user";
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router';


const title = ref('');
const description = ref('');
const userStore = useUserStore();
const taskStore = useTaskStore();
const { tasks } = storeToRefs(taskStore);
const router = useRouter();

onMounted(()=>{taskStore.fetchTasks()});

const addNewTask = () => {
  taskStore.addTask(title.value, description.value);
  title.value = '';
  description.value = '';
};

const editTask = () => {
  taskStore.editTask(updateFields);
  title.value = '';
  description.value = '';
};

const deleteTask = (id) => {
  taskStore.deleteTask(id);
};

</script>


<template>
  <div>
    <form @submit.prevent="addNewTask">
      <h1> My Cool Task</h1>
      <input v-model="title" placeholder="Titolo Task" />
      <input v-model="description" placeholder="Descrizione Task" />
      <button type="submit">Add a Task</button>
    </form>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}: {{ task.description }}
        <!-- Aggiungi pulsanti o controlli per modificare ed eliminare qui -->
        <button @click="editTask(task.id)">Edit Task</button>
        <button @click="deleteTask(task.id)">Delete Task</button>
      </li>
    </ul>
  </div>

</template>



<style scoped>
</style>
