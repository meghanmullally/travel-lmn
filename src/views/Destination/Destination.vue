<template>
  <div class="Destination">
    <!-- navigation  -->
    <ToolBar/>
    <!-- Destination content -->
    <section class="md-layout md-gutter md-alignment-center" id="desContent">
      <h2 class="popHeader">Popular Destinations</h2>
      <PopularDestination/>
    </section>
  </div>
</template>
<script>
import ToolBar from '../../components/ToolBar/ToolBar';
import PopularDestination from '../../components/PopularDestinations/PopularDestination';


export default {
  name: 'Destination',
  components: {
    ToolBar,
    PopularDestination,
    },
  date(){
    return {
      msg: "Destination page"
  }
  }
}
</script>
<style>
    @import './assets/styles/style.css';
</style>