<template>
  <div class="Activities">
    <!-- <h1>This is the Youtube and Map page?</h1> -->
    <YoutubeContainer/>
    <GoogleMap/>
  </div>
</template>
<script>
// import YoutubeContainer from '../../components/YoutubeContainer/Youtube';
import GoogleMap from '../../components/GoogleMap/Map';
import YoutubeContainer from '../../components/YoutubeContainer';

export default {
  name: 'Activities',
  components: {
    YoutubeContainer,
    GoogleMap
  },
  date(){
    return {
      msg: "Activies page"
  }
  }

// possible activities api?! 
// https://www.triposo.com/api/documentation/20190906/

}
</script>
<style>
/* @import './assets/styles/style.css'; */
</style>