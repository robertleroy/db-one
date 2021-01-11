import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [],
  },
  getters: {
    todos(state) {
      return state.todos;
    }
  },
  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    }
  },
  actions: {
    async fetchTodos(commit, payload) {      
      const res = await fetch("/.netlify/functions/pokemon");
      const data = await res.json();
      commit('setTodos', data)
    }
  },
  modules: {
  }
})
