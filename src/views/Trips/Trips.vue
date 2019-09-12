<template>
  <div class="trip-page">
    <h2 class="trips-title">My Trips</h2>
    
    <h4 class="upcoming-title">Upcoming</h4>
    <Upcoming/>
    
    <h4 class="history-title">History</h4>
    <PastTrips/>

      <h4 class="fav-title">Favorite Destinations</h4> 
        <Favorites/>
  </div>
</template>
<script>
import PastTrips from '../../components/PastTrips/PastTrips';
import Favorites from '../../components/Favorites/Favorites';
import Upcoming from '../../components/UpcomingTrips/Upcoming';

export default {
  name: "Trip",
  components: {
    PastTrips,
    Favorites,
    Upcoming
  },
data() {
  return {
    msg: "Trip page"
  }
}
}
</script>
<style>
@import './assets/styles/style.css';
</style>

