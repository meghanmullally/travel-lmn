<template>
  <div class="ReturnFlight">
    <md-table class="ReturnFlightTable" v-model="flights" md-card @md-selected="onSelect" md-sort="airline" md-sort-order="asc">
      <md-table-toolbar>
        <h1 class="md-title">Return Options</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }" :class="getClass(item)" md-selectable="single">
        <!-- <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell> -->
        <md-table-cell md-label="Airline" md-sort-by="airline">{{ item.airline }}</md-table-cell>
        <md-table-cell md-label="Flight" md-sort-by="flight">{{ item.flight }}</md-table-cell>
        <md-table-cell md-label="Duration" md-sort-by="duration">{{ item.time }}</md-table-cell>
        <md-table-cell md-label="Departure" md-sort-by="departure">{{ item.departure }}</md-table-cell>
        <md-table-cell md-label="Return" md-sort-by="return">{{ item.return }}</md-table-cell>
        <md-table-cell md-label="Price" md-sort-by="price">{{ item.price }}</md-table-cell>
      </md-table-row>
    </md-table>

    <!-- <p>Selected:</p>
    {{ selected }} -->
  </div>
</template>

<script>
  export default {
    name: 'TableSingle',
    data: () => ({
      selected: {},
      flights: [
        {
          id: 1,
          airline: "Alaska Arlines",
          flight: "38",
          time: "13:09",
          departure: "09/10/2019",
          return: "09/13/2019",
          price: "$480"
        },
        {
          id: 2,
          airline: "Delta",
          flight: "456",
          time: "9:23",
          departure: "10/14/2019",
          return: "10/20/2019",
          price: "$543"
        },
        {
          id: 3,
          airline: "Spirit",
          flight: "10",
          time: "16:58",
          departure: "09/20/2019",
          return: "09/30/2019",
          price: "$120"
        },
        {
          id: 4,
          airline: "Southwest Airlines",
          flight: "7854",
          time: "12:29",
          departure: "11/10/2019",
          return: "12/13/2019",
          price: "$340"
        },
        {
          id: 5,
          airline: "United Airlines",
          flight: "3856",
          time: "16:09",
          departure: "12/10/2019",
          return: "12/13/2019",
          price: "$500"
        },
        {
          id: 6,
          airline: "American Arlines",
          flight: "118",
          time: "06:09",
          departure: "01/10/2020",
          return: "01/13/2020",
          price: "$786"
        }
      ]
    }),
    methods: {
      getClass: ({ id }) => ({
        'md-primary': id%2 === 0,
        'md-accent': id%2 !== 0
      }),
      onSelect (item) {
        this.selected = item
      }
    }
  }
</script>

<style>
  /* .Price {
  margin: 0;
  padding: 0;
  } */

  .ReturnFlightTable {
    margin-top: 16px;
    width: 100%;
    height: auto;
  }


</style>