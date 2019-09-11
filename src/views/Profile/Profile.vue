<template>
  <div class="Profile md-layout md-gutter">
    <!-- <ToolBar/> -->
      <!-- everything container  -->
    <article class="everything">
        <!-- Itinerary Tab -->
      <section class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="tineraryInfo">
        <Itinerary/>
      </section>
      <!-- User info container  -->
      <aside class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="userInfo">
        <UserInfo/>
      </aside>


      <!-- Favorties Tab -->
    <section class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="favInfo">

        <Favorites/>
    </section>
      <!-- Favorties Activities -->
    <section class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="favActivitiesInfo">
        <FavoriteActivities/>
        
      </section>
      <!-- Past Trips Tab -->
    <section class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="pastInfo">
  
        <PastTrips/>
      </section>
    </article>
  </div>
</template>
<script>
// import ToolBar from '../../components/ToolBar/ToolBar';
  import Itinerary from '../../components/ItineraryContainer/Itinerary';
  import UserInfo from '../../components/UserInfo/User';
  import PastTrips from '../../components/PastTrips/PastTrips';
  import Favorites from '../../components/Favorites/Favorites';
  import FavoriteActivities from '../../components/FavoriteActivities/FavoriteActivities';


export default {
  name: 'Profile',
  components: {
    // ToolBar,
    Itinerary,
    UserInfo,
    PastTrips,
    Favorites,
    FavoriteActivities,
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