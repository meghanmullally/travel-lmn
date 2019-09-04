<template>
  <div id="datePicker">

    <section class="datePick-section">
      
<md-datepicker v-model="selectedDate" class="departure">
      <label class="date">Select Departure date</label>
    </md-datepicker> -->

    <!-- <md-datepicker v-model="selectedDate" class="arrival">
      <label class="date">Select Arrival date</label>
    </md-datepicker> -->

    </section>



  
  </div>
</template>

<script>
export default {
  name: "datePicker",
  data() {
    return {
    msg: 'datePicker'
    }
  }
};
</script>
<style>
    @import './style.css';

</style>