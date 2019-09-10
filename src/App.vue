<template>
  <div id="app">
<!-- <NavBar/> -->
<!-- <router-link></router-link> -->
<Destination/>
<!-- <Home/> -->
  </div>
</template>

<script>
// import NavBar from './components/Navbar/Navbar'
import Destination from './views/Destination/Destination'
// import Home from './views/Home/Home'

export default {
  name: 'app',
  components: {
    // NavBar
  Destination
  // Home
  }
  // },
  // data() {
  //     return {
  //       msg: 'Welcome to our LMN Travel App',
  //       home: {},
  //       destination: {},
  //       activities: {},
  //       profile: {},
  //       chat: {}

  //     }
  //   }
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