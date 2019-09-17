<template>
  <div class="tours">

<md-card>
      <md-card-media>
        <img v-bind:src="this.$attrs.info" alt="tour-image">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{this.$attrs.title}}</div>
        <div class="md-subhead">$ {{this.$attrs.money}} {{this.$attrs.curr}}</div>
        <div class="md-subhead">Rating: {{this.$attrs.rating}} / 10
        </div>
      </md-card-header>

        <md-card-actions md-alignment="space-between">
          <div>
            <md-button v-bind:href="this.$attrs.link"> Vendor Link </md-button>
          </div>

            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>
        </md-card-actions>

    </md-card>

</div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      // msg: "Suggested Tours to Assist Your Travels at ",
      // info: null,
      // queryCountry: this.$store.getters.destinationName,
      // title: null,
      // money: null,
      // curr: null,
      // rating: null,
      // link: null,
      // tourIds: [],
      // tourCard: {}
    }
  },

  // mounted () {
  //   axios
  //   .get("https://www.triposo.com/api/20190906/tour.json?", {
  //       params: {
  //       location_ids: "Los_Angeles",
  //       account: process.env.VUE_APP_X_Triposo_Account,
  //       token: process.env.VUE_APP_X_Triposo_Token,
  //       }
  //       })
  //   .then(response => {
  //     let tourCard = {};
  //     const triposoDatas = response.data.results;
  //     console.log(triposoDatas, "my");
  //     triposoDatas.filter(triposoData => {
  //       // grabbing the image of the event
  //       if(triposoData.images !== undefined){
  //         triposoData.images.filter(image => {

  //           this.info = image.sizes.medium.url;
  //           // console.log(image.sizes.medium.url, "the medium image");
  //         })
  //       }
  //       // grabbing the name of the event 
  //     if(triposoData.name !== undefined) {
  //       this.title = triposoData.name
  //     }
  //     // price for the tour 
  //     if(triposoData.price !== undefined) {
  //       // amount 
  //       this.money = triposoData.price.amount
  //       // currency, USD
  //       this.curr = triposoData.price.currency
  //     }
  //     // rating of tour 
  //     if(triposoData.score !== undefined) {
  //       this.rating = triposoData.score
  //     }
  //     // link to the tour 
  //     if (triposoData.vendor_tour_url !== undefined){
  //       this.link = triposoData.vendor_tour_url
  //     }

  //     tourCard = {
  //       "info": this.info,
  //       "title": this.title,
  //       "money": this.money,
  //       "curr": this.curr,
  //       "rating": this.rating,
  //       "link": this.link
  //     }

  //     this.tourIds.push(tourCard);

  //     })

      // for (var i = 0; i < 10; i++) {
      //   if (triposoDatas[i].id.tourIds !== undefined) {
      //     this.$set(this.tourIds, i + 1, triposoDatas[i].id.tourIds);
      //   }
      // }
    // });
  }

  
</script>
<style>

</style>