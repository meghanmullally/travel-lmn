<template>
  <div class="price">
    <md-table v-model="searched" md-sort="airline" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Flight Options</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by Airline..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No users found"
        :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
        <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Airline" md-sort-by="Airline">{{ item.airline }}</md-table-cell>
        <md-table-cell md-label="Flight" md-sort-by="Flight">{{ item.flight }}</md-table-cell>
        <md-table-cell md-label="Departure" md-sort-by="Departure">{{ item.departure }}</md-table-cell>
        <md-table-cell md-label="Arrival" md-sort-by="Arrival">{{ item.arrival }}</md-table-cell>
        <md-table-cell md-label="Price" md-sort-by="Price">{{ item.price }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByAirline = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.airline).includes(toLower(term)))
    }

    return items
  }

  export default {
    name: 'PriceSearch',
    data: () => ({
      search: null,
      searched: [],
      users: [
        {
          id: 1,
          Airline: "Alaska Arlines",
          Flight: "38",
          Time: "13:09",
          Departure: "09/10/2019",
          Arrival: "09/13/2019",
          Price: "$480"
        },
        {
          id: 2,
          Airline: "Delta",
          Flight: "456",
          Time: "9:23",
          Departure: "10/14/2019",
          Arrival: "10/20/2019",
          Price: "$543"
        },
        {
          id: 3,
          Airline: "Spirit",
          Flight: "10",
          Time: "16:58",
          Departure: "09/20/2019",
          Arrival: "09/30/2019",
          Price: "$120"
        },
        {
          id: 4,
          Airline: "Southwest Airlines",
          Flight: "7854",
          Time: "12:29",
          Departure: "11/10/2019",
          Arrival: "12/13/2019",
          Price: "$340"
        },
        {
          id: 5,
          Airline: "United Airlines",
          Flight: "3856",
          Time: "16:09",
          Departure: "12/10/2019",
          Arrival: "12/13/2019",
          Price: "$500"
        },
        {
          id: 6,
          Airline: "American Arlines",
          Flight: "118",
          Time: "06:09",
          Departure: "01/10/2020",
          Arrival: "01/13/2020",
          Price: "$786"
        }
      ]
    }),
    methods: {
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByAirline(this.users, this.search)
      }
    },
    created () {
      this.searched = this.users
    }
  }
</script>

<style>
  .md-field {
    width: 570px;
    height: auto;
  }
</style>