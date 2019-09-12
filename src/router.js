import Vue from "vue";
import Router from "vue-router";
import Home from './views/Home';
import Destination from './views/Destination';
import Activities from './views/Activities';
import Profile from './views/Profile/Profile';
<<<<<<< HEAD
import Chat from './views/Chat';
// import Trips from './views/Trips/Trips'
=======
import Trips from './views/Trips/Trips';
// import Chat from './views/Chat/Chat';

>>>>>>> dd6ee258c350a0a0ba6e66b2b5b84b8925cc1369

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   name: "",
    //   path: "/",
    //   component: Home
    // },
    {
      name: "Home",
      path: "/",
      alias: "/Home",
      component: Home
    },
    {
      name: "Destination",
      path: "/Destination",
      component: Destination
    },
    {
      name: "Activities",
      path: "/Activities",
      component: Activities
    },
    {
      name: "Profile",
      path: "/Profile",
      component: Profile
    },
    {
      name: "Trips",
      path: "/Trips",
      component: Trips
    }
    // {
    //   name: "Chat",
    //   path: "/Chat",
    //   component: Chat
    // }

  ]
});