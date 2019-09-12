<template>
  <div class="DestinationPicker">

<section class="destinationPick">
<md-field>
<<<<<<< HEAD
      <label class="destination">
        EX: LAX </label>
      <md-input v-model="initial"  type="text" placeholder="Destination, airport">
=======
      <label class="destination"><i class="material-icons">
flight
</i> EX: LAX </label>
      <md-input v-model="initial"  type="text" placeholder="Destination, airport" @keyup.enter='submit'>
>>>>>>> b8b6c6fa00b47d79e2cfe2c47ebcac7854b78b02
      </md-input>
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
  },
    methods: {
    submit: function() {
      this.$emit("destination", this.initial);
      this.$store.commit({
        type: "changeDestination",
        newCity: this.initial
      });

      this.initial = '';
    }
  }
};
</script>
<style>
    @import './style.css';

</style>