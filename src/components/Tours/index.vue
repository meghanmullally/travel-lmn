<template>
  <div class="tours">

<md-card :tour-id="this.$attrs.id" >
      <md-card-media>
        <img src="{this.$attr.images}" alt="tour image">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Title goes here</div>
        <div class="md-subhead">Subtitle here</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button>Action</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button>Learn more</md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content >
          
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>

</div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      // msg: "tours",
      // info: "Suggested Tours to Assist Your Travels at "
    }
  },
  // mounted () {
  //   axios
  //   .get("https://www.triposo.com/api/20190906/tour.json?", {
  //       params: {
  //       location_ids: "Seattle",
  //       account: process.env.VUE_APP_X_Triposo_Account,
  //       token: process.env.VUE_APP_X_Triposo_Token,
  //       }
  //       })
  //   .then(response => {
  //     this.tourIds = {};
  //     const results = response.data;
  //     console.log(results);
  //     for (var i = 0; i < 10; i++) {
  //       if (results.items[i].id.tourIds !== undefined) {
  //         this.$set(this.tourIds, i + 1, results.items[i].id.tourIds);
  //       }
  //     }
  //   });
  // }
}
  
</script>
<style>

</style>