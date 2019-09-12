<template>
  <div class="Destination">
    <!-- navigation  -->
    <!-- <ToolBar/> -->
    <!-- Destination content -->
    <article class="container">
    <section class="md-layout md-gutter md-alignment-center" id="desContent">
      <h3 class="popHeader">Popular Destinations</h3>
      <PopularDestination/>
    </section>
      <section class="md-layout md-gutter md-alignment-space-around-center" id="desPrice">
        <!-- <h3 class="flightHeader">Flight Options</h3> -->
      <PriceContainer/>
    </section>
    </article>
  </div>
</template>
<script>
// import ToolBar from '../../components/ToolBar/ToolBar';
import PopularDestination from '../../components/PopularDestinations/PopularDestination';
import PriceContainer from '../../components/PriceContainer/Price';

export default {
  name: 'Destination',
  components: {
    // ToolBar,
    PopularDestination,
    PriceContainer,
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