<template>
  <div class="Trips">
      <!-- Past Trips Information  -->
      <section class="pastTrips">
        <!-- <h3>Past Trips</h3> -->
        <!-- Past Trips 1 -->
      <md-card>
      <md-card-media>
        <md-ripple>
          <img src="./assets/images/gert-boers-qQC8tyG_JVA-unsplash.jpg" alt="Grand Canyon">
        </md-ripple>
      </md-card-media>

      <md-card-actions>
        <md-card-header>
            <span class="md-title">Grand Canyon</span>
            <span class="md-subhead"></span>
          </md-card-header>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
    <!-- Past Trips 2 -->
    <md-card>
      <md-card-media>
        <md-ripple>
        <img src="./assets/images/niklas-weiss--2WlTWZLnRc-unsplash.jpg" alt="Bali Rice Fields">
        </md-ripple>
      </md-card-media>

      <md-card-actions>
        <md-card-header>
            <span class="md-title">Bali</span>
            <span class="md-subhead"></span>
          </md-card-header>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
    <!-- Past Trips 3 -->
    <md-card>
      <md-card-media>
        <md-ripple>
        <img src="./assets/images/drew-graham-e5QfGsrdgK4-unsplash.jpg" alt="South Korea Temple Roof">
        </md-ripple>
      </md-card-media>
      <md-card-actions>
        <md-card-header>
            <span class="md-title">Seoul</span>
            <span class="md-subhead"></span>
          </md-card-header>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>
        <!-- </md-button> -->
      </md-card-actions>
    </md-card>
    <!-- Past Trips 4 -->
    <md-card>
      <md-card-media>
        <md-ripple>
        <img src="./assets/images/hugues-de-buyer-mimeure-oDcbtrD3Rrc-unsplash.jpg" alt="Bora Bora Huts on the water">
        </md-ripple>
      </md-card-media>

      <md-card-actions>
        <md-card-header>
            <span class="md-title">Bora Bora</span>
          </md-card-header>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>

      </md-card-actions>
    </md-card>
  
      </section>
  
  </div>
</template>
<script>
export default {
  name: 'PastTrips',
  date(){
    return {
      msg: "PastTrips page"
  }
  }
}
</script>
<style>
    @import './assets/styles/style.css';
</style>