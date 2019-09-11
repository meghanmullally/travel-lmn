import Vue from "vue";
import Router from "vue-router";
import Home from './views/Home/Home';
import Destination from './views/Destination/Destination';
import Activities from './views/Activities/Activities';
import Profile from './views/Profile/Profile';
import Chat from './views/Chat/Chat';


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Home",
      path: "",
      component: Home
    },
    {
      name: "Destination",
      path: "",
      component: Destination
    },
    {
      name: "Activities",
      path: "",
      component: Activities
    },
    {
      name: "Profile",
      path: "",
      component: Profile
    },
    {
      name: "Chat",
      path: "",
      component: Chat
    }

  ]
});