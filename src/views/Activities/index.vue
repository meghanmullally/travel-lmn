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
import GoogleMap from "../../components/GoogleMap/Map";
import YoutubeContainer from "../../components/YoutubeContainer";
import axios from "axios";

import Tours from '../../components/Tours';

export default {
  name: "Activities",
  components: {
    YoutubeContainer,
    // GoogleMap
    Tours
  },
  data() {
    return {
      msg: "Activies page",
      // videoIds: [],
      // videoId1: "",
      info:
        "Suggested Videos to Assist Your Travels at " +
        this.$store.getters.destinationName,
      videoIds: {},
      queryCountry: this.$store.getters.destinationName //this.city
      // queryCountry: "Las Vegas" //so that you can see the videos pop up
    };
  },
  mounted() {
    console.log(this.queryCountry, "my cityyyyyy!");
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "id,snippet",
          q: "travel guide " + this.queryCountry,
          key: process.env.VUE_APP_YOUTUBE_ACCESS_KEY,
          maxResults: 5
        }
      })
      .then(response => {
        this.videoIds = {};
        const results = response.data;
        console.log(results);
        for (var i = 0; i < 50; i++) {
        
  }
}) 
  }
// export ending } 
}

</script>
<style>
@import './assets/styles/style.css';
</style>