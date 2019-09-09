<template>
  <div id="app">
    <Home/>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './views/Home/Home';

export default {
  name: 'app',
  components: {
    Home,
    // Destination,
    // Activities,
    // Profile,
    // Chat
  },
  data(){
    return {
      msg: "Welcome to LMN Travel",
      // Home: {},
      // Destination: {},
      // Activities: {},
      // Profile: {},
      // Chat: {}
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>