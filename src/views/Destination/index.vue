<template>
  <div class="Destination">
    <!-- Destination content -->
    <section class="md-layout md-gutter md-alignment-center" id="desContent">
      <h3 class="popHeader">Popular Destinations</h3>
      <PopularDestination/>
    </section>

    <!-- Flight Content  -->
      <section class="md-layout md-gutter md-alignment-space-around-center" id="desFlightOptions">
        <!-- <h3 class="flightHeader"> Departure Flight Options</!--> 
      <PriceContainer/>
    </section>
    <section class="md-layout md-gutter md-alignment-space-around-center" id="desReturnOptions">
        <!-- <h3 class="flightHeader">Return Flight Options</h3> -->
    <ReturnFlight/>
    </section>
  
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
        destination: this.$store.getters.destination,
        departure: this.$store.getters.departure,
        return: this.$store.getters.return
      },
      itineraries: '',
      legs: '',
      agents: '',
      carriers: '',
      segments: '',
      cities: ''
  }},
  mounted(){
    const flightStuff =[];
    flightStuff.push(this.flightInfo);
    API.getItinerary(flightStuff).then(res => {

      this.itineraries = res.data.Itineraries;
      this.legs = res.data.Legs;
      this.cities = res.data.Places;
      this.segments = res.data.Segments;
      this.carriers = res.data.Carriers;
      this.agents = res.data.Agents;

      const cityName = this.cities.filter(city => {
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