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
  <article class="card" :class="{ 'is-complete': localTask.is_complete }">
    <h2 v-if="!localTask.is_complete">Ongoing Task</h2>
    <span v-else> 🏆 Task Completed! 🏆</span>
    <div v-if="!isEditable">
      <h3>Task Title:</h3>
      <p>{{ localTask.title }}</p>
      <h3>Task Description:</h3>
      <p>{{ localTask.description }}</p>
    </div>
    <div v-if="isEditable"> <!-- he intentado poner aqui && !localTask.is_complete no funciona-->
      <label for="editTitle">Edit Title:</label> 
      <input type="text" v-model="localTask.title" />
      <label for="editDescription">Edit Description:</label>
      <input type="text" v-model="localTask.description" />
    </div>
    <button
      @click="
        () => {
          isEditable = !isEditable
        }
      "
    >
    ✏️
    </button>
    <button v-if="isEditable" @click="saveTask(task.id, localTask)">Save!</button>
    <button v-if="!isEditable" @click="deleteTask(task.id)" class="delete-button"> <img src="../assets/delete.svg"/> </button>
    <input type="checkbox" v-model="localTask.is_complete" @change="completeTask(localTask)" />
    <label> ✅ </label>
    <!--<span v-if="localTask.is_complete">!isEditable</span> no funciona tampoco-->
  
  </article>
</template>

<style scoped>

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

p {
  color: #333;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0.5em;
}


/* Stilizzazione degli input per il titolo e la descrizione in modalità di modifica */
input[type='text'] {
  display: block;
  width: 100%;
  padding: 0.5em;
  margin: 0.5em 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Stilizzazione generale dei pulsanti per le azioni */
button {
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  margin: 10px 5px 0 0;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

/* Effetto hover per i pulsanti */
button:hover {
  background-color: #0056b3;
}

/* Specifica la differenziazione del colore del pulsante di eliminazione per maggiore chiarezza */


.delete-button:last-of-type:hover {
  background-color: #c82333;
}

/* Stili specifici quando i campi sono in modalità di modifica */
div[v-if='isEditable'] {
  padding: 20px;
  border-radius: 5px;
}
.card.is-complete {
  background-color: #f5e6b1b6; 
}
</style>
