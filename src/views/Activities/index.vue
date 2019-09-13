<template>
  <div class="Activities">
    <!-- <h1>This is the Youtube and Map page?</h1> -->
    <YoutubeContainer/>
    <!-- <VideoContainer/> -->
    <!-- <GoogleMap/> -->
    <!-- <youtube :video-id="videoId1" player-width="275" player-height="750"></youtube> -->
  </div>
</template>
<script>

import GoogleMap from '../../components/GoogleMap/Map';
import YoutubeContainer from '../../components/YoutubeContainer';


export default {
  name: 'Activities',
  components: {
    YoutubeContainer,
    // GoogleMap
  },
  data(){
    return {
      msg: "Activies page",
      videoIds: [],
      videoId1: "",
      queryCountry: this.$store.getters.destinationName //this.city
  }

  }

// possible activities api?! 
// https://www.triposo.com/api/documentation/20190906/

}
</script>
<style>
/* @import './assets/styles/style.css'; */
</style>