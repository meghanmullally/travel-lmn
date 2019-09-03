<template>
  <div class="home">
    <h1>This is the home page</h1>
    <section class="home-section">
      <!-- area for the clock  -->
      <p class="time" v-text="currentTime"></p>
    </section>

<!-- where would you like to go? -->
<p>{{question}}</p>

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
    },
    methods: {
      updateCurrentTime() {
        this.currentTime = moment().format('LTS');
      },
      updateMessage(variable) {
        this.childData = variable;
      }
    },
    created() {
      this.currentTime = moment().format('LTS');
      setInterval(() => this.updateCurrentTime(), 1 * 1000);
    }
  }

</script>


<style>
    @import './assets/style/style.css';
</style>
