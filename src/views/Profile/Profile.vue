<template>
  <div class="Profile">
    <article class="container">
    <h2>This is the profile page</h2>
    <!-- Itinerary section -->
      <section class="itinerary">
        <h3>Itinerary Side</h3>
      </section>
    <!-- User Profile Info -->
      <section class="user">
      <h3>User Information</h3>
      <p>Bio</p>
      <p>maybe an image?</p>
      <p>Name:</p>
      <p>Age:</p>
      <p>Email:</p>
      </section>
      <!-- Past Trips Information  -->
      <section class="pastTrips">
        <h3>Past Trips</h3>
      </section>
      <!-- Favorite destinations!  -->
      <section class="favorite">
      <h3>fav destinations?</h3>
      </section>
    </article>
    
    
    
    
  </div>
</template>
<script>
export default {
  name: 'Profile',
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