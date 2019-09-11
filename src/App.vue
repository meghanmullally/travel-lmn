<template>
  <div id="app">
<!-- <NavBar/> -->
<!-- <router-link></router-link> -->
<!-- <Destination/> -->
<!-- <Home/> -->
<!-- <Profile/> -->

<nav class="navbar navbar-expand-lg fixed-top row" id="appNav">

      <!-- <router-link tag="li" class="col" class-active="active" to="/" exact>MAIN</router-link> -->
      <router-link tag="li" class="col" class-active="active" to="/Home" exact> Home</router-link>
      <router-link tag="li" class="col" class-active="active" to="Destination" exact> <md-icon class="icon">card_travel</md-icon> Destination</router-link>
      <router-link tag="li" class="col" class-active="active" to="/Profile" exact>        <md-icon class="icon">supervisor_account</md-icon> Profile</router-link>

      <router-link tag="li" class="col" class-active="active" to="/Activities" exact> <md-icon class="icon">explore</md-icon>Activities</router-link>
      <router-link tag="li" class="col" class-active="active" to="/Chat" exact>            <md-icon class="icon">chat</md-icon> Chat</router-link>
      <!-- <router-link tag="li" class="col" class-active="active" to="/contact" exact>contact</router-link> -->
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>
// import NavBar from './components/Navbar/Navbar'
// import Destination from './views/Destination/Destination'
// import Home from './views/Home/Home'
// import Profile from './views/Profile/Profile'


export default {
  name: 'app',
  // components: {
    // NavBar
  // Destination
  // Home
  // Profile
  // },
  data() {
      return {
        msg: 'Welcome to our LMN Travel App',
        Home: {},
        Destination: {},
        Activities: {},
        Profile: {},
        Chat: {}

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
    /* margin: 0; */
    /* padding: 0; */
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

  #appNav {
    background-color: transparent;
    color: black;
  }

  .icon {
    padding-right: 10px;
  }

</style>