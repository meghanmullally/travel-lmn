<template>
  <div class="PickedActivities">
    <h4>Picked Activities</h4>
    <md-card md-with-hover class="collection">
        <md-ripple>
      <md-card-header class="collection-header">
        <md-card-header class="collection-item avatar">
          <img src="./assets/images/marten-newhall-uAFjFsMS3YY-unsplash.jpg" alt="blue suit man with magnifying glass" class="circle">
        <span class="title">Escape Room</span>
      <p>Capital Hill, Seattle, WA <br>
      9:00 pm
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
        </md-card-header>
      <md-card-header class="collection-item avatar">
          <img src="./assets/images/ferdinand-stohr-0hq1X5kdkPU-unsplash.jpg" alt="Space Needle at Night thumbnail" class="circle">
        <span class="title">Space Needle Tour</span>
      <p>Seattle, WA <br>
      3:30pm
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
        </md-card-header>
      </md-card-header>
        </md-ripple>
  </md-card>

  </div>
</template>
<script>
export default {
  name: "PickedActivities",
  data() {
    return {
      msg: "Picked activities"
    }
  }
}
</script>
<style>

.collection {
  overflow:auto;
  /* width: 200px; */
}

</style>