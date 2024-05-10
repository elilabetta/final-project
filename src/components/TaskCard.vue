<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  task: {
    Object
  }
})

const localTask = ref(props.task)
const isEditable = ref(false)

const emit = defineEmits(['delete-task', 'edit-task', 'save-task'])
function deleteTask(id) {
  emit('delete-task', id)
}

function editTask(id, task) {
    emit('edit-task', id, task)
}

function saveTask(id, task) {
    emit('save-task', id, task)
    isEditable.value= !isEditable.value
}
</script>

<template>
    <article class="card">
        <h2>Ongoing Task</h2>  
  <div v-if="!isEditable" >
    <h3>Title</h3>
    <p>{{ localTask.title }}</p>
    <h4>Description</h4>
    <p>{{ localTask.description }}</p>
  </div>
  <div v-if="isEditable" >
    <input type="text" v-model="localTask.title" />
    <input type="text" v-model="localTask.description" />
  </div>
  <button @click="()=>{isEditable=!isEditable}">Edit Task</button>
  <button v-if="isEditable" @click="saveTask(task.id, localTask)">Save!</button>
  <button v-if="!isEditable" @click="deleteTask(task.id)">Delete Task</button>

</article>
  
</template>

<style scoped>
.card{
    width: 300px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
h2 {
  color: #333;
  font-size: 24px;
}

h3 {
  color: #444;
  font-size: 20px;
  margin-bottom: 0.5em;
}

p {
  color: #666;
  font-size: 16px;
  margin-top: 0;
}

/* Stilizzazione degli input per il titolo e la descrizione in modalità di modifica */
input[type="text"] {
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
  background-color: #007bff;
  color: white;
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
button:last-of-type {
  background-color: #dc3545;
}

button:last-of-type:hover {
  background-color: #c82333;
}

/* Stili specifici quando i campi sono in modalità di modifica */
div[v-if="isEditable"] {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Margini aggiuntivi intorno al blocco di modifica per separarlo visivamente dal resto del contenuto */
div[v-if="isEditable"] + button {
  margin-top: 1em;
}
</style>
