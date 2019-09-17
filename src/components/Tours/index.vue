<template>
  <div class="tours">
<md-card v-for="(value, index) in tourIds" v-bind:key="index">

</md-card>

<md-card>
      <md-card-media>
        <img src="/assets/examples/card-image-1.jpg" alt="People">
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
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
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
      msg: "tours",
      info: "Suggested Tours to Assist Your Travels at "
    }
  },
  mounted () {
    axios
    .get("https://www.triposo.com/api/20190906/tour.json?", {
        params: {
        location_ids: "Seattle",
        account: process.env.VUE_APP_X_Triposo_Account,
        token: process.env.VUE_APP_X_Triposo_Token,
        }
        })
    .then(response => {
      console.log(response);
    })
  }
}
  
</script>
<style>

</style>