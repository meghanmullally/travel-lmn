<template>
  <div class="DestinationPicker">

<section class="destinationPick">
<md-field>
      <label class="destination">Ex: Seattle</label>
      <md-input v-model="initial"  type="text" placeholder="Destination"></md-input>
    </md-field>

</section>

  </div>
</template>
<script>
export default {
  name: "DestinationPicker",
  components: {
    
  },
  data() {
    return {
    msg: 'DestinationPicker'
    }
  }
};
</script>
<style>
    @import './style.css';

</style>