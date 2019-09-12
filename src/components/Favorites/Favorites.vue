<template>
  <div class="Favorites">
      <!-- Favorite destinations!  -->
      <section class="favorite">
      <!-- <h3>Favorite Destinations</h3> -->
      <!-- favorite 1 -->
      <md-card>
      <md-card-media>
        <md-ripple>
          <img src="./assets/images/braden-jarvis-prSogOoFmkw-unsplash.jpg" alt="Hawaii">
        </md-ripple>
      </md-card-media>

      <md-card-actions>
        <md-card-header>
            <span class="md-title">Hawaii</span>
            <span class="md-subhead"></span>
          </md-card-header>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
    <!-- favorite 2 -->
    <md-card>
      <md-card-media>
        <md-ripple>
        <img src="./assets/images/george-brits-wvO5tPfTpug-unsplash.jpg" alt="Zebras in the wild">
        </md-ripple>
      </md-card-media>

      <md-card-actions>
        <md-card-header>
            <span class="md-title">South Africa</span>
            <span class="md-subhead"></span>
          </md-card-header>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
    <!-- Favorite 3 -->
    <md-card>
      <md-card-media>
        <md-ripple>
        <img src="./assets/images/oakie-dpVJtfywdX4-unsplash.jpg" alt="Seattle Skyline with Space Needle">
        </md-ripple>
      </md-card-media>

      <md-card-actions>
        <md-card-header>
            <span class="md-title">Seattle</span>
            <!-- <span class="md-subhead"> Washington</span> -->
          </md-card-header>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
    <!-- Favorite 4 -->
    <md-card>
      <md-card-media>
        <md-ripple>
        <img src="./assets/images/dan-freeman-7Zb7kUyQg1E-unsplash.jpg" alt="Sydney Opera House bird's eye view from the water">
        </md-ripple>
      </md-card-media>
      <md-card-actions>
        <md-card-header>
            <span class="md-title">Sydney</span>
            <span class="md-subhead"></span>
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
  name: 'Favorites',
  date(){
    return {
      msg: "favorite"
  }
  }
}
</script>
<style>
@import './assets/styles/style.css';
</style>
