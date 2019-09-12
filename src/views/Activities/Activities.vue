<template>
  <div class="Activities">
    <h1>This is the Youtube and Map page?</h1>
    <YoutubeContainer/>
  </div>
</template>
<script>
import YoutubeContainer from '../../components/YoutubeContainer/Youtube';

export default {
  name: 'Activities',
  components: {
    YoutubeContainer,
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