<template>
  <div class="Profile">
    <h1>This is the profile page</h1>
    <p>Itinerary Side</p>
    <p>Past Trips</p>
    <p>fav destinations?</p>
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
@import './assets/style/style.css';
</style>