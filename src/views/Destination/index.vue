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
      <section class="md-layout md-gutter md-alignment-space-around-center" id="desFlightOptions">
        <!-- <h3 class="flightHeader">Flight Options</h3> -->
      <PriceContainer/>
    <ReturnFlight/>
    </section>
  
    
    </article>
  </div>
</template>
<script>
import PopularDestination from '../../components/PopularDestinations/PopularDestination';
import PriceContainer from '../../components/PriceContainer/Price';
import API from '../../utils/API';
import ReturnFlight from '../../components/ReturnFlightContainer'


export default {
  name: 'Destination',
  components: {
    PopularDestination,
    PriceContainer,
    ReturnFlight
    },
  data(){
    return {
      msg: "Destination page",
      flightInfo:{
        origin: this.$store.getters.origin,
        destination: this.$store.getters.destination
      }
  }},
  mounted(){
    const flightStuff =[];
    flightStuff.push(this.flightInfo);
    API.getItinerary(flightStuff).then(res => {
      const flights = [];
      const cities = res.data.Places;
      flights.push(res.data);
      const cityName = cities.filter(city => {
        if(city.Type === "City" && city.Code === this.$store.getters.destination){
          console.log(city.Name);
          this.$emit("destinationName");
          this.$store.commit({
            type: "changeDestinationName",
            newDestinationName: city.Name
          });          
          return;
        }
      })
      console.log(res);
    }).catch(err => console.log(err))
  },
}
    
</script>
<style>
    @import './assets/styles/style.css';
</style>