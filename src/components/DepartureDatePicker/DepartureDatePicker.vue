<template>
  <div class="datePicker">

    <section class="datePick-section">

      <md-datepicker v-model="selectedDate" class="departure" @keyup.enter='submit'>
            <label class="date">Select Departure date</label>
          </md-datepicker> 

    <!-- <md-datepicker v-model="selectedDate" class="arrival">
      <label class="date">Select Arrival date</label>
    </md-datepicker> -->

    </section>



  
  </div>
</template>

<script>

export default {
  name: "datePicker",
  components: {
    
  },
  data() {
    return {
    msg: 'datePicker',
    childData: "",
    selectedDate: null
    }
  },
    methods: {
    submit: function() {
      this.$emit("departure", this.data.$route.selectedDate);
      this.$store.commit({
        type: "changeDeparture",
        newDate: this.data.$route.selectedDate
      });

      this.selectedDate = '';
    }
  }
  
};
</script>
<style>
    @import './style.css';

</style>