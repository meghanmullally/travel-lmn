<template>
  <div class="Activities">
    <!-- <h1>This is the Youtube and Map page?</h1> -->
    <h3>{{info}}</h3>
    <section class="videos">
      <md-card v-for="(value, index) in videoIds" v-bind:key="index">
        <YoutubeContainer :id="value" />
      </md-card>
    </section>
    <!-- <VideoContainer/> -->
    <!-- <GoogleMap/> -->

    <div class="tours-container">
      <!-- <md-card v-for="(value, index) in tourIds" v-bind:key="index">
        <Tours :id="value"/>
      </md-card> -->

      <Tours/>

    </div>
  </div>
</template>
<script>
import GoogleMap from "../../components/GoogleMap/Map";
import YoutubeContainer from "../../components/YoutubeContainer";
import axios from "axios";

import Tours from "../../components/Tours";

export default {
  name: "Activities",
  components: {
    YoutubeContainer,
    GoogleMap,
    Tours
  },
  data() {
    return {
      msg: "Activies page",
      info:
        "Suggested Videos to Assist Your Travels at " +
        this.$store.getters.destinationName,
      videoIds: {},
      queryCountry: this.$store.getters.destinationName, //this.city
      // queryCountry: "Las Vegas" //so that you can see the videos pop up
      tourIds: {}
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
          if (results.items[i].id.videoId !== undefined) {
            this.$set(this.videoIds, i + 1, results.items[i].id.videoId);
          }
        }
      });
    //   // Triposo API 
    // axios
    // .get("https://www.triposo.com/api/20190906/tour.json?", {
    //     params: {
    //     location_ids: "Seattle",
    //     account: process.env.VUE_APP_X_Triposo_Account,
    //     token: process.env.VUE_APP_X_Triposo_Token,
    //     }
    //     })
    // .then(response => {
    //   this.tourIds = {};
    //   const results = response.data;
    //   console.log(results);
    //   for (var j = 0; j < 10; j++) {
    //     if (results[j].id.tourIds !== undefined) {
    //       this.$set(this.tourIds, j + 1, results[j].id.tourIds);
    //     }
    //   }
    // });
  }
  // export ending }
};
</script>
<style>
@import "./assets/styles/style.css";
</style>