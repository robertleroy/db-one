/* App.vue */

<script>
  export default {
    name: 'App',
    data() {
      return {
        title: "Db-One"
      }
    }
  }
</script>

<template>
  <div id="appgrid" v-cloak>
    <header>
      <h4>{{title}}</h4>

      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
    </header>

    <main>
      <!-- <router-view v-slot="{ Component }">
        <transition name='fade' mode='out-in'>
          <component :is="Component"/>
        </transition>
      </router-view> -->
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
