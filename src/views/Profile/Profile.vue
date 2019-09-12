<template>
  <div class="Profile">
    <!-- <ToolBar/> -->
      <!-- everything container  -->
    <article class="everything md-layout md-gutter md-alignment-center">

  <md-tabs class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" md-alignment="centered" id="tabs-container">
      <md-tab id="tab-home" md-label="User Info">
        <!-- User info container  -->
      <aside class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="userInfo">
        <UserInfo/>
      </aside>
      </md-tab>
      <md-tab id="tab-pages" md-label="Pages"></md-tab>
      <md-tab id="tab-posts" md-label="Posts"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
    </md-tabs>

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