<template>
  <div class="OriginPicker">

<section class="originPick">
<md-field>
      <label class="origin">
        EX: SEA </label>
      <md-input v-model="initial"  type="text" placeholder="Origin, airport">
      </md-input>
    </md-field>


</section>

  </div>
</template>
<script>
export default {
  name: "OriginPicker",
  components: {
    
  },
  data() {
    return {
    msg: 'OriginPicker'
    }
  }
};
</script>
<style>
    @import './style.css';

</style>