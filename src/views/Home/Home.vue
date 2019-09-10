<template>
  <div class="home">
    <!-- <h1>This is the home page</h1> -->
    <md-toolbar class="md" id="navigation">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <!-- <span class="md-title">LMN</span> -->
      </md-toolbar>

      <md-drawer :md-active.sync="menuVisible" md-persistent="full" id="drawer">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <md-list id="nav-list">
          <md-list-item>
            <md-icon>card_travel</md-icon>
            <span class="md-list-item-text">Destination</span>
          </md-list-item>

          <md-list-item>
            <md-icon>explore</md-icon>
            <span class="md-list-item-text">Activities</span>
          </md-list-item>

          <md-list-item>
            <md-icon>supervisor_account</md-icon>
            <span class="md-list-item-text">Profile</span>
          </md-list-item>

          <md-list-item>
            <md-icon>chat</md-icon>
            <span class="md-list-item-text">Chat</span>
          </md-list-item>
        </md-list>
      </md-drawer>
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
<ArrivalDatePicker/>
<HomeButton/>
</section>



  </div>
</template>
<script>
import moment from 'moment';
import ArrivalDatePicker from '../../components/ArrivalDatePicker/ArrivalDatePicker';
import DepartureDatePicker from '../../components/DepartureDatePicker/DepartureDatePicker';
import DestinationPicker from '../../components/DestinationPicker/DestinationPicker';
import OriginPicker from '../../components/OriginPicker/OriginPicker';
import HomeButton from '../../components/HomeButton/HomeButton';

  export default {
    name: 'home',
    components: {
      ArrivalDatePicker,
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
