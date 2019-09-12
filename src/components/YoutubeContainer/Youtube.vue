<template>
  <div class="youtube">
    <h3>{{info}}</h3>

  </div>
</template>
<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
  name: "youtube",
  data(){
    return {
      videoIds: [],
      videoId1: "videoId",
      videoId2: "",
      vvideoId3: "",
      videoId4: "",
      info: "Suggested Videos to Assist Your Travels",
      queryCountry: this.$store.getters.city //this.city
    };
  },
  mounted() {
    console.log(this.queryCountry, "my cityyyyyy!");
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet, id",
          q: "travel guide " + this.queryCountry,
          key:VUE_APP_YOUTUBE_ACCESS_KEY
        }
      })
      .then(response => {
        var results = response;
        console.log(results);
        for (var i = 0; i < 4; i++) {
          // this.videoIds.push("https://www.youtube.com/watch?v=" + results.data.items[i].id.videoId);
          this.videoIds.push(results.data.items[i].id.videoId);
        }

        this.videoId1 = this.videoIds[0];
        this.videoId2 = this.videoIds[1];
        this.videoId3 = this.videoIds[2];
        this.videoId4 = this.videoIds[3];
      });
  }
}
</script>
<style>
    @import './style.css';
</style>