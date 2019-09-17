<template>
  <div class="OriginPicker">

<section class="originPick">
<md-field>
      <label class="origin">
        EX: SEA </label>
      <md-input v-model="initial"  type="text" placeholder="Origin, airport" @keydown.tab="submit">
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
    msg: 'OriginPicker',
    initial: null,
    }
  },
  methods: {
    submit: function() {
      this.$emit("origin", this.initial);
      this.$store.commit({
        type: "changeOrigin",
        newCity: this.initial.toUpperCase()
      });

      this.initial = '';
    }
  }
};
</script>
<style>
    @import './style.css';

</style>