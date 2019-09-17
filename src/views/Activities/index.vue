<template>
  <div class="Activities">
    <!-- <h1>This is the Youtube and Map page?</h1> -->
    <h3>{{videoInfo}}</h3>
    <section class="videos">
      <md-card v-for="(value, index) in videoIds" v-bind:key="index">
        <YoutubeContainer :id="value" />
      </md-card>
    </section>
    <!-- <VideoContainer/> -->

    <h3>{{msg}}</h3>
    <div class="tours-container">
      <md-card v-for="(value, index) in tourIds" v-bind:key="index">
        <Tours :title="value.title" :link="value.link" :money="value.money" :curr="value.curr" :info="value.info" :rating="value.rating"/>
      </md-card>

<div class="map-container">

    <GoogleMap/>

</div>

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
      // msg: "Activies page",
      videoInfo:
        "Suggested Videos to Assist Your Travels at " +
        this.$store.getters.destinationName,
      msg: "Suggested Tours to Assist Your Travels at " +
        this.$store.getters.destinationName,
      videoIds: {},
      queryCountry: this.$store.getters.destinationName, //this.city
      info: null,
      title: null,
      money: null,
      curr: null,
      rating: null,
      link: null,
      tourIds: [],
    };
  },
  mounted() {
    console.log(this.queryCountry, "my cityyyyyy!");
    const tripLocationArray = this.queryCountry.split(" ").join("_");
    console.log(tripLocationArray, "trip city");
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
    axios
    .get("https://www.triposo.com/api/20190906/tour.json?", {
        params: {
        location_ids: tripLocationArray,
        account: process.env.VUE_APP_X_Triposo_Account,
        token: process.env.VUE_APP_X_Triposo_Token,
        }
        })
    .then(response => {
      let tourCard = {};
      const triposoDatas = response.data.results;
      console.log(triposoDatas, "my");
      triposoDatas.filter(triposoData => {
        // grabbing the image of the event
        if(triposoData.images !== undefined){
          triposoData.images.filter(image => {

            this.info = image.sizes.medium.url;
            // console.log(image.sizes.medium.url, "the medium image");
          })
        }
        // grabbing the name of the event 
      if(triposoData.name !== undefined) {
        this.title = triposoData.name
      }
      // price for the tour 
      if(triposoData.price !== undefined) {
        // amount 
        this.money = triposoData.price.amount
        // currency, USD
        this.curr = triposoData.price.currency
      }
      // rating of tour 
      if(triposoData.score !== undefined) {
        this.rating = triposoData.score
      }
      // link to the tour 
      if (triposoData.vendor_tour_url !== undefined){
        this.link = triposoData.vendor_tour_url
      }

      tourCard = {
        "info": this.info,
        "title": this.title,
        "money": this.money,
        "curr": this.curr,
        "rating": this.rating,
        "link": this.link
      }

      this.tourIds.push(tourCard);

      })

      // for (var i = 0; i < 10; i++) {
      //   if (triposoDatas[i].id.tourIds !== undefined) {
      //     this.$set(this.tourIds, i + 1, triposoDatas[i].id.tourIds);
      //   }
      // }
    });
  }
  // export ending }
};
</script>
<style>
@import "./assets/styles/style.css";
</style>