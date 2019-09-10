<template>
  <div class="PopularDestination">
    <!-- Destination content -->
    <section class="md-layout md-gutter md-alignment-center" id="desContent">
        <!-- Card 1 -->
        <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="desItems">
            <md-card class="desCard">
      <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="16:9">
          <img src="./assets/images/sora-sagano-8sOZJ8JF0S8-unsplash.jpg" alt="Cherry Blossoms along the river">
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <!-- <span class="md-title">Tokyo, Japan</span> -->
            <span class="md-subhead"></span>
          </md-card-header>
          <md-card-actions>
            <md-button>Tokyo, Japan</md-button>
            <!-- <md-button>More Info</md-button> -->
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
        </div>
      <!-- Card 2 -->
        <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="desItems">
      <md-card class="desCard">
      <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="16:9">
          <img src="./assets/images/ahmet-yalcinkaya-aNrRsB2wLDk-unsplash.jpg" alt="Skyscraper">
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <!-- <span class="md-title">Los Angeles, California</span> -->
            <span class="md-subhead"></span>
          </md-card-header>
          <md-card-actions>
            <md-button>Los Angeles, California</md-button>
            <!-- <md-button>More Info</md-button> -->
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
        </div>
        <!-- Card 3 -->
        <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="desItems">
            <md-card class="desCard">
      <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="16:9">
          <img src="./assets/images/jack-finnigan-Mxqvo8hhY1s-unsplash.jpg" alt="London building with red phonebooth">
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <!-- <span class="md-title">London, England</span> -->
            <span class="md-subhead"></span>
          </md-card-header>
          <md-card-actions>
            <md-button>London, England</md-button>
            <!-- <md-button>More Info</md-button> -->
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
        </div>
        <!-- Card 4 -->
        <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="desItems">
            <md-card class="desCard">
      <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="16:9">
          <img src="./assets/images/trent-szmolnik-bRMhKnq_6us-unsplash.jpg" alt="View of New York City from a plane">
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <!-- <span class="md-title">New York City, New York</span> -->
            <span class="md-subhead"></span>
          </md-card-header>
          <md-card-actions>
            <md-button>New York City, New York</md-button>
            <!-- <md-button>More Info</md-button> -->
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
        </div>
        <!-- Card 5 -->
        <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="desItems">
            <md-card class="desCard">
      <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="16:9">
          <img src="./assets/images/florence-jones-ORtqjxOUQdE-unsplash.jpg" alt="Austin Arist Painting">
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <!-- <span class="md-title">Austin, Texas</span> -->
            <span class="md-subhead"></span>
          </md-card-header>
          <md-card-actions>
            <md-button>Austin, Texas</md-button>
            <!-- <md-button>More Info</md-button> -->
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
        </div>
        <!-- Card 6 -->
        <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" id="desItems">
            <md-card class="desCard">
      <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="16:9">
          <img src="./assets/images/cristina-gottardi-I1Lv2yX67GI-unsplash.jpg" alt="Trevi Fountain Rome Italy">
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <!-- <span class="md-title">Rome, Italy</span> -->
            <span class="md-subhead"></span>
          </md-card-header>
          <md-card-actions>
            <md-button>Rome, Italy</md-button>
            <!-- <md-button>More Info</md-button> -->
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
        </div>
    </section>
  </div>
</template>
<script>
import ToolBar from '../../components/ToolBar/ToolBar';

export default {
  name: 'Popular Destination',
  components: {
    ToolBar,
    },
  date(){
    return {
      msg: "Popular Destination"
  }
  }
}
</script>
<style>
    @import './assets/styles/style.css';
</style>