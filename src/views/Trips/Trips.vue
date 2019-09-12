<template>
  <div class="trip-page">
    <h3 class="trips-title">My Trips</h3>
    <h4 class="history-title">History</h4>
    <PastTrips/>
  </div>
</template>
<script>
import PastTrips from '../../components/PastTrips/PastTrips';


export default {
  name: "Trip",
  components: {
    PastTrips,
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

