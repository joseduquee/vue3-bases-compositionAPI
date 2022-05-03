import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Recolectar las piedras del infinito', completed: false},
      { id: '2', text: 'Piedra del alma', completed: true},
      { id: '3', text: 'Regat el jardin', completed: true},
      { id: '4', text: 'Conseguir nueva tropa competente', completed: false},
      { id: '5', text: 'Relizar el viaje', completed: false},
      { id: '6', text: 'Buscar a Tonu', completed: false},
    ]
  },
  getters: {
    pendingTodos( state, getters, rootState ) {
      return state.todos.filter( todo => !todo.completed)
    },
    allTodos( state, getters, rootState ) {
      //console.log({ state, getters, rootState })
      return [...state.todos]
    },
    completedTodos( state, getters, rootState ) {
      return state.todos.filter(todo => todo.completed)
    },
    getTodosByTag: ( _, getters ) => ( tab ) => {
      switch (tab) {
        case 'all':
          return getters.allTodos
        case 'pending':
          return getters.pendingTodos
        case 'completed':
          return getters.completedTodos     
        default:
          break;
      }
    },
  },
  mutations: {
    toggleTodo( state, id) {
      const todoIdx = state.todos.findIndex(val => val.id === id)
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    },
    createTodo( state, text = '') {
      
      if(text.length <= 1) return

      state.todos.push({
        id: uuidv4(),
        completed: false,
        text
      })

    }
  },
  actions: {
  },
  modules: {
  }
})
