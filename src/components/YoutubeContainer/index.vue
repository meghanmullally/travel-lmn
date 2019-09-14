<template>
  <!-- <div id="Youtube"> -->
    <!-- <h3>{{info}}</h3> -->
  <!-- <section>
      <youtube :video-id="this.$attrs.id" player-width="275" player-height="750"></youtube>
  </section> -->
      <!-- <section class="pastTrips"> -->
        <!-- <h3>Past Trips</h3> -->
        <!-- Past Trips 1 -->
      <md-card>
      <md-card-media>
        <md-ripple>
          <youtube :video-id="this.$attrs.id" player-width="275" player-height="750"></youtube>
        </md-ripple>
      </md-card-media>
    </md-card>
      <!-- </section> -->

  <!-- </div> -->
</template>
<script>

// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
  // name: "Youtube",
  data(){
    return {
      // videoIds: [],
      // videoId1: "",
      // info: "Suggested Videos to Assist Your Travels at " + this.$store.getters.destinationName,
      // queryCountry: this.$store.getters.destinationName //this.city
    };
  },
  // mounted() {
  //   console.log(this.queryCountry, "my cityyyyyy!");
  //   axios
  //     .get("https://www.googleapis.com/youtube/v3/search", {
  //       params: {
  //         part: "id,snippet",
  //         q: "travel guide " + this.queryCountry,
  //         key: process.env.VUE_APP_YOUTUBE_ACCESS_KEY,
  //         maxResults: 50
  //       }
  //     })
  //     .then(response => {
  //       this.videoIds.length = 0;
  //       const results = response.data;
  //       console.log(results);
  //       for (var i = 0; i < 50; i++) {
  //         // this.videoIds.push("https://www.youtube.com/watch?v=" + results.data.items[i].id.videoId);
  //         if(results.items[i].id.videoId !== undefined){
  //           this.videoIds.push(results.items[i].id.videoId);
  //         }
  //       }

  //       this.videoId1 = this.videoIds[0];
  //       // this.videoId2 = this.videoIds[1];
  //       // this.videoId3 = this.videoIds[2];
  //       // this.videoId4 = this.videoIds[3];
  //     });
  // }
}
</script>
<style>
  @import './style.css';
</style>