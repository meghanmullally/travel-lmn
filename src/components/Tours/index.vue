<template>
  <div class="tours">

<md-card :tour-id="this.$attrs.id">
      <md-card-media>
        <img v-bind:src="info" alt="tour-image">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{title}}</div>
        <div class="md-subhead">$ {{money}} {{curr}}</div>
        <div class="md-subhead">Rating: {{rating}} / 10
        </div>
      </md-card-header>

      <!-- <md-card-expand> -->
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button> Vendor Link </md-button>
          </div>

          <!-- <md-card-expand-trigger> -->
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>
          <!-- </md-card-expand-trigger> -->
        </md-card-actions>

        <!-- <md-card-expand-content>
          <md-card-content >
          
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand> -->
    </md-card>

</div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      msg: "Suggested Tours to Assist Your Travels at ",
      info: null,
      queryCountry: this.$store.getters.destinationName,
      title: null,
      money: null,
      curr: null,
      rating: null,
      link: null,
    }
  },

  mounted () {
    axios
    .get("https://www.triposo.com/api/20190906/tour.json?", {
        params: {
        location_ids: "Los_Angeles",
        account: process.env.VUE_APP_X_Triposo_Account,
        token: process.env.VUE_APP_X_Triposo_Token,
        }
        })
    .then(response => {
      this.tourIds = {};
      const triposoDatas = response.data.results;
      console.log(triposoDatas, "my");
      triposoDatas.filter(triposoData => {
        // grabbing the image of the event
        if(triposoData.images !== undefined){
          triposoData.images.filter(image => {

            this.info = image.sizes.medium.url;
            console.log(image.sizes.medium.url, "the medium image");
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
      if (triposoData.link !== undefined){
        this.link = triposoData.booking_info.vendor_tour_url
      }

      })

      for (var i = 0; i < 10; i++) {
        if (results[i].id.tourIds !== undefined) {
          this.$set(this.tourIds, i + 1, results[i].id.tourIds);
        }
      }
    });
  }
}
  
</script>
<style>

</style>