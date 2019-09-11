<template>
  <div id="app">
<!-- <NavBar/> -->
<!-- <router-link></router-link> -->
<!-- <Destination/> -->
<!-- <Home/> -->
<Profile/>
  </div>
</template>

<script>
// import NavBar from './components/Navbar/Navbar'
// import Destination from './views/Destination/Destination'
// import Home from './views/Home/Home'
import Profile from './views/Profile/Profile'


export default {
  name: 'app',
  components: {
    // NavBar
  // Destination
  // Home
  Profile
  },
  data() {
      return {
        msg: 'Welcome to our LMN Travel App',
        // home: {},
        // destination: {},
        // activities: {},
        // profile: {},
        // chat: {}

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


  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>