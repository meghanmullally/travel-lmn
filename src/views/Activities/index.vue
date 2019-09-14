<template>
  <div class="Activities">
    <!-- <h1>This is the Youtube and Map page?</h1> -->
    <h3>{{info}}</h3>
    <section class='videos'>
      <md-card  v-for="(value, index) in videoIds" v-bind:key='index'>
        <YoutubeContainer v-bind="index" :id="value" />
      </md-card>
    </section >
    <GoogleMap />
  </div>
</template>
<script>
import GoogleMap from "../../components/GoogleMap/Map";
import YoutubeContainer from "../../components/YoutubeContainer";
import axios from "axios";

export default {
  name: "Activities",
  components: {
    YoutubeContainer,
    GoogleMap
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
        this.videoIds.length = 0;
        const results = response.data;
        console.log(results);
        for (var i = 0; i < 50; i++) {
          // this.videoIds.push("https://www.youtube.com/watch?v=" + results.data.items[i].id.videoId);
          if (results.items[i].id.videoId !== undefined) {
            // console.log(i+1);
            this.$set(this.videoIds, i + 1, results.items[i].id.videoId);
            // this.videoIds.push(results.items[i].id.videoId);
          }
        }

        this.videoId1 = this.videoIds[0];
      });
  }

  // possible activities api?!
  // https://www.triposo.com/api/documentation/20190906/
};
</script>
<style>
@import './assets/styles/style.css';
</style>