<script>
  export default {
    name: 'App',
    data() {
      return {
        title: "Db-One",
      }
    },
    computed: {
      todos() {
        return this.$store.getters.todos;
      }
    },
    mounted() {
      this.$store.dispatch('fetchTodos');
    }
  }
</script>

<template>
  <div id="appgrid" v-cloak>
    <header>
      <h4>{{title}}</h4>

    </header>

    <main>
      <div>Todos</div>
      <div class="list">
        <div class="listItem" :key="i"
            v-for="(item,i) of todos">
          <!-- <input type="checkbox" v-model="item.completed"> -->
          <div class="name">{{item}}</div>
        </div>
      </div>
    </main>
  </div> 
</template>

<style lang="stylus">
  @import './styl/baseline';

  #appgrid {
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  header, main {
    padding: 1rem 2rem;
  }

  header {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;

    shadow(3);
  }
</style>
