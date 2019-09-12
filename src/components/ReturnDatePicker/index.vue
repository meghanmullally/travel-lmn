<template>
  <div class="datePicker">

    <section class="datePick-section">

      <md-datepicker v-model="selectedDate" class="arrival">
            <label class="date">Select Return date</label>
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
  }
};
</script>
<style>
    @import './style.css';

</style>