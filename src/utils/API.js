import axios from "axios";


export default {
  getItinerary: function(query){
    // console.log(query, "inside api");
    // return axios.post("https://lmn-news-api.herokuapp.com/api/flight/pricing", query);
    return axios.post("http://localhost:3000/api/flight/pricing", query)
  }
}
