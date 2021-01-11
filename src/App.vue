/* App.vue */

<script>
  export default {
    name: 'App',
    data() {
      return {
        title: "Db-One"
      }
    },
    computed: {
      todos() {
        return this.$store.getters.todos;
      }
    }
  }
</script>

<template>
  <div id="appgrid" v-cloak>
    <header>
      <h4>{{title}}</h4>

    </header>

    <main>
      <div>Main</div>
      <div class="list">
        <div class="listItem" :key="i"
            v-for="(item,i) of todos">
          {{item}}
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
