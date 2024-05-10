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

onMounted(() => {
  taskStore.fetchTasks()
})

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
  taskStore.saveTask(id, updateFields)
  title.value = ''
  description.value = ''
}
</script>

<template>
  <div class="container">
    <div class="card">
      <form @submit.prevent="addNewTask" class="task-form">
        <h1>My New Cool Task</h1>
        <div class="form-group">
          <label for="title">Titolo Task:</label>
          <input id="title" v-model="title" placeholder="Inserisci il titolo" />
        </div>
        <div class="form-group">
          <label for="description">Descrizione Task:</label>
          <textarea id="description" v-model="description" placeholder="Inserisci la descrizione"></textarea>
        </div>
        <button type="submit">Aggiungi Task</button>
      </form>
    </div>

    <div v-if="!tasks" class="card">
      <p>Nessun task disponibile</p>
    </div>

    <div class="task-list">
      <div v-for="task in tasks" :key="task.id" class="card">
        <TaskCard :task="task" @edit-task="editTask" @delete-task="deleteTask" @save-task="saveTask"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
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
  margin-bottom: 20px;
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
  border-radius: 4px;
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
