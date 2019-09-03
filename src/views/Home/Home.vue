<template>
  <div class="home">
    <h1>This is the home page</h1>
  </div>
</template>
<script>
import moment from 'moment';

  export default {
    name: 'home',
    
    data() {
      return {
        msg: "Home Page",
        question: "Where would you like to go?",
        clock: "Current Time:",
        currentTime: null,
        childData: ""
      }
    }
  }

</script>


<style>
    @import './assets/style/style.css';
</style>
