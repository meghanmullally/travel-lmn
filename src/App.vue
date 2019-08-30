<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Home from './views/Home/Home'
<<<<<<< HEAD
console.log(process.env, "another secret");
=======
>>>>>>> b8edb5b9a6697b302e98a8c53465cb9ba5e518e1
export default {
  name: 'app',
  components: {
    Home
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