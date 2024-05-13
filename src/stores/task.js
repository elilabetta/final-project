import { defineStore } from 'pinia'
import { supabase } from '../supabase'
import { useUserStore } from '../stores/user.js'
import router from '@/router';

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: null
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks, error } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false })
      if (error) console.error('Error to get back the task:', error)
      else this.tasks = tasks
    },
    async addTask(title, description) {
      const { data, error} = await supabase
      .from('tasks')
      .insert({
        user_id: useUserStore().user.id,
        title: title,
        description: description
      })
      await this.fetchTasks()
      router.push('/')
    },
    async editTask(id, updatedFields) {
      const { error } = await supabase.from('tasks').update(updatedFields).eq('id', id)
      if (error) console.error('Error updating task:', error.message)
      else await this.fetchTasks() 
      router.push ('/')// Ricarica la lista delle task dopo l'aggiornamento
    },
    async deleteTask(id) {
      const { error } = await supabase.from('tasks').delete().eq('id', id)
      if (error) console.error('Error delating task:', error)
      else this.tasks = this.tasks.filter((task) => task.id !== id) // update tasks status
    },
   
    async completeTask(task) {
      const { error } = await supabase
        .from('tasks')
        .update({ 
          title: task.title, 
          description: task.description,
          completed: task.completed,
          is_complete: task.complete
         })
        .eq('id', task.id);
      
      if (error) console.error('Error completing task:', error);
      else await this.fetchTasks(); 
    },
    async completeTask(task) {
      const { error } = await supabase
        .from('tasks')
        .update({ is_complete: !task.is_complete }) // Asegúrese de cambiar aquí basado en lo que ya tiene
        .eq('id', task.id);
    
      if (error) console.error('Error completing task:', error);
      else await this.fetchTasks();  // Esto refrescará la lista y mostrará el estado actualizado de las tareas
    }
    
  }
})
