<template>
  <div class="Profile">
    <article class="container">
      <section class="userInfo">
    <!-- <UserInfo/> -->

      </section>
      <section class="navigationInfo">
      <md-tabs md-sync-route>
      <md-tab id="tab-itinerary" md-label="Itinerary" to="/components/Itinerary/Itinerary" exact>
        Itinerary Tab
      </md-tab>
      <md-tab id="tab-PastTrips" md-label="Past Trips" to="/components/PastTrips/PastTrips">
        Pages tab
        <p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
      </md-tab>
      <md-tab id="tab-favorites" md-label="Favorites" to="/components/Favorites/favorites">
        Favorites tab
        <p>Maiores, dolorum. Beatae, optio tempore fuga odit aperiam velit, consequuntur magni inventore sapiente alias sequi odio qui harum dolorem sunt quasi corporis.</p>
      </md-tab>
    </md-tabs>
      </section>
    </article>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  components: {
    // UserInfo
  },
  date(){
    return {
      msg: "Profile page"
  }
  }
}
</script>
<style>
/* @import './assets/styles/style.css'; */
</style>