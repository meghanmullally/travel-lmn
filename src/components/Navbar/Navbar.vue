<template>
  <div class="navBar">
<nav>
    <div class="nav-wrapper">
      <!-- <a href="#" class="brand-logo right">LMN</a> -->
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <router-link tag="li" class="col" class-active="active" to="/home" exact>home</router-link>
      <router-link tag="li" class="col" class-active="active" to="/destination" exact>destination</router-link>
      <router-link tag="li" class="col" class-active="active" to="/activities" exact>Activities</router-link>
      <router-link tag="li" class="col" class-active="active" to="/profile" exact>Profile</router-link>
      <router-link tag="li" class="col" class-active="active" to="/chat" exact>Chat</router-link>
      </ul>
    </div>
  </nav>
  <router-view/>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data(){
    return {
      msg: "Welcome to LMN Travel",
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
    @import './style.css';
</style>