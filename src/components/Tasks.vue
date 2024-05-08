<script setup>
import { ref, onMounted } from 'vue';
import { useTasksStore } from '../stores/task.js';
import { useRouter } from 'vue-router'
const router= useRouter();
const taskStore = useTasksStore();

const { tasks, fetchTasks, addTask } = useTasksStore();
const newTask = ref('');

onMounted(fetchTasks);

async function addNewTask() {
  await addTask(newTask.value);
  newTask.value = ''; // Resetta il campo di input dopo l'aggiunta
}
</script>
<template>
    <h1> My cool Task</h1>
    <div>
    <input v-model="addNewTask" placeholder="Add a new task" />
    <button @click="addTask">Add a new task</button>

    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
    </ul>
  </div>

</template>

<style scoped>
<style>