<script setup>
import { ref, onMounted } from 'vue'
import { useTaskStore } from '@/stores/task'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import TaskCard from '../components/TaskCard.vue'

const title = ref('')
const description = ref('')
const userStore = useUserStore()
const taskStore = useTaskStore()
const { tasks } = storeToRefs(taskStore)
const router = useRouter()
const completeTask = (id) => {
  taskStore.completeTask(id)
}

const addNewTask = () => {
  taskStore.addTask(title.value, description.value)
  title.value = ''
  description.value = ''
}
const deleteTask = (id) => {
  taskStore.deleteTask(id)
}

const editTask = (id, updateFields) => {
  taskStore.editTask(id, updateFields)
  title.value = ''
  description.value = ''
}

const saveTask = (id, updateFields) => {
  taskStore.editTask(id, updateFields)
  title.value = ''
  description.value = ''
}

</script>

<template>

  <section class="page-bg">
    <div class="container">
    <div class="card">
      <form @submit.prevent="addNewTask" class="task-form">
        <h1>My New Cool Task</h1>
        <div class="form-group">
          <label for="title">Task Title:</label>
          <input id="title" v-model="title" placeholder="Title" />
        </div>
        <div class="form-group">
          <label for="description">Task description:</label>
          <textarea id="description" v-model="description" placeholder="Description"></textarea>
        </div>
        <button type="submit">  Add Task</button>
      </form>
    </div>

    <div v-if="!tasks" class="card">
      <p>No task available</p>
    </div>

    <div class="task-list">
      <div v-for="task in tasks" :key="task.id" >
        <TaskCard :task="task" @edit-task="editTask" @complete-task="completeTask" @delete-task="deleteTask" @save-task="saveTask"/>
      </div>
    </div>
  </div>

  </section>
  
</template>

<style scoped>

.page-bg {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url('../assets/ToDoList.webp');
  background-size: cover; 
  background-position: center;
}

.container {
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  margin: 30px;
  border: 1px solid #ccc;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
}

h1{
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
  color: #333;
}

.task-form {
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.task-form button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.task-form button:hover {
  background-color: #0056b3;
}

.task-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

</style>
