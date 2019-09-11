<template>
  <div class="Favorites">
      <!-- Favorite destinations!  -->
      <section class="favorite">
      <h3>fav destinations?</h3>
      <md-card>
      <md-card-media-actions>
        <md-card-media>
          <img src="/assets/examples/villains.png" alt="Cover">
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
      </md-card-media-actions>
    </md-card>
    <md-card>
      <md-card-media-actions>
        <md-card-media>
          <img src="/assets/examples/villains.png" alt="Cover">
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
      </md-card-media-actions>
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