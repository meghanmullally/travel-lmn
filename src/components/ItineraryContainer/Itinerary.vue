<template>
  <div class="itinerary">
      <md-card md-with-hover class="ticket">
        <md-ripple>
      <md-card-header class="ticket-header">
        <md-card-header class="ticket-departure">
        <h1 class="city-abbr">SEA</h1>
        <span class="city-name">Seattle</span>
        </md-card-header>
      <md-card-header class="ticket-destination">
        <i class="material-icons">flight</i>
        <h1 class="city-abbr">LAX</h1>
        <span class="city-name">Los Angeles</span>
      </md-card-header>
      </md-card-header>
      <md-card-content class="ticket-body">
        <!-- FIRST ROW -->
        <div class="row">
          <div class="col">
            <div class="item">
              <h2 class="name">Flight</h2>
              <span class="value">815</span>
            </div>
            </div>
            </div>
            <!-- SECOND ROW -->
            <div class="row">
              <!-- <div class="col"> -->
                <!-- <div class="row-vertical"> -->
                  <div class="col">
                  <div class="item">
                  <h2 class="name">Passenger</h2>
                    <span class="value">Jane Doe</span>
                  </div>
                </div>
              <div class="col">
                  <div class="item">
                    
              <h2 class="name">Class</h2>
              <span class="value">Coach</span>
                  </div>
                </div>
              <div class="col">
                  <div class="item">
              <h2 class="name">Departure</h2>
              <span class="value">3:45am, Sept 12</span>
                  </div>
                </div>
                <!-- <div class="col">
                  <img class="ticket-qrcode" src="https://cdn.barcodesinc.com/themes/barcodesinc/images/generator/qr.png" alt="ticket code">
                </div> -->
                <!-- </div> -->
              <!-- </div> -->
            </div>
        </md-card-content>
        </md-ripple>
  </md-card>
</div>
</template>
<script>
export default {
  name: 'itinerary',
  date(){
    return {
      msg: "itinerary page"
  }
  }
}
</script>
<style>
/* @import './assets/styles/style.css'; */

.ticket {
  background: white;
  border-radius: 4px;
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  padding: 30px;
  margin: 80px auto;
  max-width: 400px;
}

/* img {
  height: auto;
  width: 100%;
} */

  .ticket-header {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 50px 0;
    position: relative;
  }

  .material-icons {
      animation: flight 2s infinite;
      display: block;
      color: #d3e6f4;
      height: 30px;
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
    }
  
  .ticket-departure {
    text-align: left;
  }
  
  .ticket-destination {
    text-align: right;
  }
  
  .city-abbr {
    color: #3b8acf;
    font-size: 45px;
    font-weight: 900;
    letter-spacing: -2px;
    line-height: 50px;
    margin: 0;
    text-transform: uppercase;
  }
  
  .city-name {
    color: #aaaaac;
    font-size: 16px;
    text-transform: uppercase;
  }
  
  .item:not(:last-child) {
    margin-bottom: 20px;
  }
  
  .name {
    color: #acccac;
    font-size: 12px;
    font-weight: normal;
    line-height: 20px;
    margin: 0;
    text-transform: uppercase;
  }
  
  .value {
    color: black;
    font-size: 16px;
    line-height: 20px;
  }


.row {
  display: flex;
  flex-direction: row;
  
}
  /* .row-vertical {
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: space-between;
  } */
    
    .col {
      display: flex;
      justify-content: center;
      align-items: baseline;
    }


</style>