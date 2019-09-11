<template>
  <div class="Profile md-layout md-gutter">
    <ToolBar/>
    <article class="container">
      <!-- User info container  -->
      <section class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="userInfo">
        <UserInfo/>
      </section>
      <!-- Nav Tab info container  -->
      <section class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="navInfo">
      <md-tabs md-sync-route>
        <!-- Itinerary Tab -->
      <md-tab id="tab-itinerary" md-label="Itinerary" to="/components/Itinerary/Itinerary" exact>
        <Itinerary/>
      </md-tab>
      <!-- Past Trips Tab -->
      <md-tab id="tab-PastTrips" md-label="Past Trips" to="/components/PastTrips/PastTrips">
        <PastTrips/>
      </md-tab>
      <!-- Favorties Tab -->
      <md-tab id="tab-favorites" md-label="Favorites" to="/components/Favorites/favorites">
        <Favorites/>
      </md-tab>
    </md-tabs>
      </section>
    </article>
  </div>
</template>
<script>
import ToolBar from '../../components/ToolBar/ToolBar';
  import Itinerary from '../../components/ItineraryContainer/Itinerary';
  import UserInfo from '../../components/UserInfo/User';
  import PastTrips from '../../components/PastTrips/PastTrips';
  import Favorites from '../../components/Favorites/Favorites';


export default {
  name: 'Profile',
  components: {
    ToolBar,
    Itinerary,
    UserInfo,
    PastTrips,
    Favorites
  },
  date(){
    return {
      msg: "Profile page"
  }
  }
}
</script>
<style>
@import './assets/styles/style.css';
</style>