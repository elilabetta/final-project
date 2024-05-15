<script setup>
import { defineProps, defineEmits, ref, vModelCheckbox } from 'vue'
import { useTaskStore } from '../stores/task.js'
const taskStore = useTaskStore()
const props = defineProps({
  task: {
    Object
  }
})

const localTask = ref(props.task)
const isEditable = ref(false)

const emit = defineEmits(['delete-task', 'edit-task', 'save-task', 'complete-task'])
function deleteTask(id) {
  emit('delete-task', id)
}

function editTask(id, task) {
  emit('edit-task', id, task)
}

function saveTask(id, task) {
  emit('save-task', id, task)
  isEditable.value = !isEditable.value
}
async function completeTask(task) {
  task.complete = !task.complete
  await taskStore.completeTask(task)
}
</script>

<template>
  <article class="card"  :class="{ 'is-complete': localTask.is_complete, 'edit-mode': isEditable }">
    <div class="container">
      <h2 v-if="!localTask.is_complete">Ongoing Task</h2>
      <span v-else class="completed-task"> 🏆Completed Task🏆</span>
      <div v-if="!isEditable">
        <h3>Task Title:</h3>
        <p>{{ localTask.title }}</p>
        <h3>Description:</h3>
        <p>{{ localTask.description }}</p>
      </div>
      <div class="btn-style">
        <div v-if="isEditable">
          <label for="editTitle">Edit Title:</label>
          <input type="text" v-model="localTask.title" />
          <label for="editDescription">Edit Description:</label>
          <input type="text" v-model="localTask.description" />
        </div>
        <button
          v-if="!localTask.is_complete && !isEditable"
          @click="
            () => {
              isEditable = !isEditable
            }
          "
          class="icon-button">
       <img src="../assets/img/pencil.png" alt="" />
        </button>
        <button v-if="isEditable" @click="saveTask(task.id, localTask)" class="icon-button">
          <img src="../assets/img/save.png" alt="" />
        </button>
        <button @click="deleteTask(task.id)" class="icon-button">
          <img src="../assets/img/bin.png" alt="" />
        </button>
        <div class="checkbox-image" v-if="!isEditable">
          <input
            type="checkbox"
            v-model="localTask.is_complete"
            @change="completeTask(localTask)"
            class="icon-button"
          />
          <img src="../assets/img/complete.png" alt="" />
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
}


h2 {
  color: #333;
  font-size: 24px;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
}

h3 {
  font-size: 14px;
  margin-bottom: 0.5em;
}

.completed-task {
  color: #333;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
}

p {
  color: #333;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0.5em;
}

.card.edit-mode {
  background-color: hwb(6 73% 1% / 0.816); /* Cambia il colore di sfondo quando in modalità di modifica */
}

input {
  display: block;
  width: 100%;
  padding: 0.5em;
  margin: 0.5em 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-style {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10;
  vertical-align: middle;
}
.checkbox-image {
  display: flex;
  align-items: center;
}

.checkbox-image input {
  margin-right: 5px; /* Aggiungi spazio tra la casella di controllo e l'immagine se desideri */
}

.checkbox-image img {
  max-width: 25px; /* Assicurati che l'immagine non superi la dimensione della casella di controllo */
}

img {
  width: 25px;
  height: 25px;
}
button {
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  margin: 10px 5px 0 0;
  border-radius: 5px;
  font-size: 16px;
  background-color: transparent;
}

button:hover {
  background-color: #3e83bf;
}

.delete-button:last-of-type:hover {
  background-color: #e85343; /* Darker shade of red on hover */
}

/* Stili specifici quando i campi sono in modalità di modifica */
div[v-if='isEditable'] {
  padding: 20px;
  border-radius: 5px;
}
.card.is-complete {
  background-color: #ffde82c8;
}
.icon-button {
  background-color: transparent;
  border: none;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;
}
.delete-button {
  background-color: transparent;
  border: none;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;
}
</style>
