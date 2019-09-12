<template>
  <div class="HomeButton">
      <section class="HomeButton">
      <md-button to="/destination" class="home-btn">Submit</md-button> 
      </section>
      
  </div>
</template>
<script>
import API from '../../utils/API'
export default {
  name: "HomeButton",
  data() {
    return {
    msg: 'HomeButton',
    flightInfo:{
      origin: this.$store.getters.origin,
      destination: this.$store.getters.destination
    }}
  },

  // beforeUpdate(){
  //       API.getItinerary(this.flightInfo).then(res => {
  //     console.log(res);
  //   }).catch(err => console.log(err));
  // },
  // mounted() {
  //   API.getItinerary(this.flightInfo).then(res => {
  //     console.log(res);
  //   }).catch(err => console.log(err));
  // }
  // methods: {
  //   submit: function(){
  //     console.log("click button working?", this.flightInfo);
  //     API.getItinerary(this.flightInfo).then(res => {
  //       console.log(res);
  //     }).catch(err => console.log(err));
  // }}
};
</script>
<style>
    @import './style.css';

</style>