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
    <!-- <section class="md-layout md-gutter md-alignment-space-around-center" id="desReturnOptions"> -->
        <!-- <h3 class="flightHeader">Return Flight Options</h3> -->
    <!-- <ReturnFlight/> -->
    <!-- </section> -->
  
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
      cities: '',
      // flightObject: {},
      departArray: []
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

      const depart = this.getDepartures;
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
  computed: {
    getDepartures: function () {
      let flightObject = {};
      let id = 1;
      let airline = '';
      let flightArray = [];
      let time = '';
      let departTime = '';
      let arrivalTime = '';
      let layOver = 0;
      let carrierIds = ''
      this.itineraries.filter(itinerary => {
        // console.log(id, "what is id");
        
        if(itinerary.OutboundLegId !== undefined){
          let outboundId = itinerary.OutboundLegId;
          // console.log("outbound id", outboundId);
          this.legs.filter(leg => {
            if(leg.Id === outboundId){
              console.log("am i here?");
              layOver = leg.Stops.length;
              arrivalTime = leg.Arrival;
              departTime = leg.Departure;
              time = leg.Duration;

              carrierIds = leg.Carriers;              

              this.carriers.filter(carrier => {
                if(carrier.Ids === carrierIds){
                  airline = carrier.Name;
                }
              })
              
              leg.FlightNumbers.filter(flightNumber => {
                if(flightNumber.FlightNumber !== undefined){
                  flightArray.push(flightNumber.FlightNumber)
                }
              })

            }
          })

        }

        if(itinerary.InboundLegId !== undefined){
          let inboundId = itinerary.InboundLegId;
          // console.log("what is inbound id? ", inboundId);
        }

        flightObject = {
          "id": id,
          "price": itinerary.PricingOptions[0].Price,
          "layover": layOver,
          "departure time": departTime,
          "arrival time": arrivalTime,
          "time": time,
          "airline": airline
        }

        this.departArray.push(flightObject);

        //         {
        //   id: 1,
        //   airline: "Alaska Arlines",
        //   flight: "38",
        //   time: "13:09",
        //   departure: "09/10/2019",
        //   return: "09/13/2019",
        //   price: "$480"
        // }

        id++;
      })
    }
  }
}
    
</script>
<style>
    @import './assets/styles/style.css';
</style>