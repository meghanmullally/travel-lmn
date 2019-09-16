<template>
  <div class="Activities">
    <!-- <h1>This is the Youtube and Map page?</h1> -->
    <YoutubeContainer/>
    <!-- <VideoContainer/> -->
    <!-- <GoogleMap/> -->
    <!-- <youtube :video-id="videoId1" player-width="275" player-height="750"></youtube> -->

<div class="tours-container">

  <Tours/>

</div>


  </div>
</template>
<script>

import GoogleMap from '../../components/GoogleMap/Map';
import YoutubeContainer from '../../components/YoutubeContainer';


import Tours from '../../components/Tours';

export default {
  name: 'Activities',
  components: {
    YoutubeContainer,
    // GoogleMap
    Tours
  },
  data(){
    return {
      msg: "Activies page",
      videoIds: [],
      videoId1: "",
      queryCountry: this.$store.getters.destinationName //this.city
  }

  }
}
</script>
<style>
/* @import './assets/styles/style.css'; */
</style>