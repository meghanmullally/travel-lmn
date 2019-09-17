<template>
  <div class="Profile">
      <!-- everything container  -->
    <article class="everything md-layout md-gutter md-alignment-center">
      <!-- User info container  -->
      <aside class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="userInfo">
        <UserInfo/>
      </aside>
        <!-- Itinerary Tab -->
      <section class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="tineraryInfo">
        <Itinerary/>
      </section>
        <!-- Picked Activities  -->
        <section class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="pickedInfo">
        <PickedActivities/>
        </section>
      <!-- Favorties Activities -->
    <section class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="favActivitiesInfo">
        <FavoriteActivities/>

      </section>
    </article>
  </div>
</template>
<script>
  import Itinerary from '../../components/ItineraryContainer/Itinerary';
  import UserInfo from '../../components/UserInfo/User';
  import FavoriteActivities from '../../components/FavoriteActivities/FavoriteActivities';
  import PickedActivities from '../../components/PickedActivities';


export default {
  name: 'Profile',
  components: {
    Itinerary,
    UserInfo,
    FavoriteActivities,
    PickedActivities
  },
  data(){
    return {
      msg: "Profile page"
  }
  }
}
</script>
<style>
@import './assets/styles/style.css';
</style>