<template>
  <div class="home">
    <!-- <h1>This is the home page</h1> -->
    <section class="home-section">
      <!-- area for the clock  -->
      <p class="time" v-text="currentTime"></p>
      <!-- where would you like to go? -->
    <p class="question">{{question}}</p>
    </section>
    <section class="trip-section">


<md-field>
      <label>Destination</label>
      <md-input v-model="withLabel" placeholder="EX: Seattle"></md-input>
    </md-field>

<md-datepicker v-model="selectedDate" class="departure">
      <label class="date">Select Departure date</label>
    </md-datepicker>

    <!-- <md-datepicker v-model="selectedDate" class="arrival">
      <label class="date">Select Arrival date</label>
    </md-datepicker> -->

    </section>


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
        childData: "",
        selectedDate: null
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
