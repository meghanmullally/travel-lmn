<template>
  <div class="tours">
{{ info }}  
</div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      msg: "tours",
      info: null
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