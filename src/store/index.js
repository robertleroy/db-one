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
    async fetchTodos({ commit }) {      
      const res = await fetch("https://db-one.netlify.app/.netlify/functions/test");
      const data = await res.json();
      console.log(data);
      commit('setTodos', data);
    }
  },
  modules: {
  }
})
