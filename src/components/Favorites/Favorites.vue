<template>
  <div class="Favorites">
      <!-- Favorite destinations!  -->
      <section class="favorite">
      <h3>Favorite Destinations</h3>
      <!-- favorite 1 -->
      <md-card>
      <md-card-media>
        <md-ripple>
          <img src="./assets/images/braden-jarvis-prSogOoFmkw-unsplash.jpg" alt="Hawaii">
        </md-ripple>
      </md-card-media>

      <md-card-actions>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>bookmark</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>share</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
    <!-- favorite 2 -->
    <md-card>
      <md-card-media>
        <md-ripple>
        <img src="./assets/images/lance-anderson-uevmkfCH98Q-unsplash.jpg" alt="Chicago Bean">
        </md-ripple>
      </md-card-media>

      <md-card-actions>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>bookmark</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>share</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
    <!-- Favorite 3 -->
    <md-card>
      <md-card-media>
        <md-ripple>
        <img src="./assets/images/tim-foster-o4mP43oPGHk-unsplash.jpg" alt="San Fran Golden Gate Bridge">
        </md-ripple>
      </md-card-media>

      <md-card-actions>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>bookmark</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>share</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
    <!-- Favorite 4 -->
    <md-card>
      <md-card-media>
        <md-ripple>
        <img src="./assets/images/oakie-dpVJtfywdX4-unsplash.jpg" alt="Seattle Skyline with Space Needle">
        </md-ripple>
      </md-card-media>

      <md-card-actions>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>bookmark</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>share</md-icon>
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
