<template>
  <div class="home">
    <!-- <h1>This is the home page</h1> -->
    <section class="home-section">
      <!-- area for the clock  -->
      <p class="time" v-text="currentTime"></p>
      <!-- where would you like to go? -->
    <p class="question">{{question}}</p>



<DatePicker/>

    </section>

  </div>
</template>
<script>
import moment from 'moment';
import DatePicker from '../../components/DatePicker/DatePicker';

  export default {
    name: 'home',
    components: {
      DatePicker
    },
    data() {
      return {
        msg: "Home Page",
        question: "Where would you like to go?",
        clock: "Current Time:",
        currentTime: null
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
