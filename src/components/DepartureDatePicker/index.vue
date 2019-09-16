<template>
  <div class="datePicker">

    <section class="datePick-section">

      <md-datepicker v-model="selectedDate" class="departure" @click.native='submit'>
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
      // console.log("hello");
      this.$emit("departure", this.selectedDate);
      this.$store.commit({
        type: "changeDeparture",
        newDate: this.selectedDate
      });

      this.selectedDate = '';
    }
  },
  updated() {
    if(this.selectedDate !== null && this.selectedDate !==""){
      let date = (JSON.stringify(this.selectedDate)).split("T");
      date = date[0].split("");
      date.splice(0,1);
      date = date.join("")
      console.log("hello!", date);
      this.$emit("departure", date);
      this.$store.commit({
        type: "changeDeparture",
        newDate: date
      });

      this.selectedDate = '';
    }
  }
  
};
</script>
<style>
    @import './style.css';

</style>