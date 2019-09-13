<template>
  <div class="DestinationPicker">

<section class="destinationPick">
<md-field>
      <label class="destination">
        EX: LAX </label>
      <md-input v-model="initial"  type="text" placeholder="Destination, airport" @keydown.tab="submit">
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
    msg: 'DestinationPicker',
    initial: null,
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