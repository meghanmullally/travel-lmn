<template>
  <div class="Home">
    <!-- <h1>This is the home page</h1> -->
    <section class="home-section">
      <!-- area for the clock  -->
      <p class="time" v-text="currentTime"></p>
      <!-- where would you like to go? -->
    <p class="question">{{question}}</p>
</section>

<section class="trip">
<OriginPicker/> 
<DestinationPicker/>
<DepartureDatePicker/>
<ReturnDatePicker/>
<HomeButton/>
</section>


  </div>
</template>
<script>
import moment from 'moment';
import ReturnDatePicker from '../../components/ReturnDatePicker';
import DepartureDatePicker from '../../components/DepartureDatePicker';
import DestinationPicker from '../../components/DestinationPicker';
import OriginPicker from '../../components/OriginPicker';
import HomeButton from '../../components/HomeButton';

  export default {
    name: 'Home',
    components: {
      ReturnDatePicker,
      DepartureDatePicker,
      DestinationPicker,
      OriginPicker,
      HomeButton
    },
    data() {
      return {
        msg: "Home Page",
        question: "Where would you like to go?",
        clock: "Current Time:",
        currentTime: null,
        childData: "",
        menuVisible: false
      }
    },
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible
      },
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
    @import './assets/styles/style.css';
</style>
