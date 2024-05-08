// /store/task.js
 
import { defineStore } from "pinia";
import { supabase } from "../supabase";
 
export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),


  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },
    async function addTask(newTaskTitle) {
      const newTaskTitle = true,
      if (!newTaskTitle) return;
    
      const { data, error } = await supabase
        .from('tasks')
        .insert([{ title: newTaskTitle }])
        .single();
    
      if (!error) {
        tasks.value.unshift(data);
      } else {
        console.error('Errore nell’aggiungere nuova task:', error.message);
      }
     },
    },
});