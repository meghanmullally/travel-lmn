import Vue from "vue";
import Router from "vue-router";
import Home from './views/Home/Home';
import Destination from './views/Destination/Destination';
import Activities from './views/Activities';
import profile from './views/Profile';
import chat from './views/Chat';


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      components: Home
    },
    {
      path: "/destination",
      name: "destination",
      components: Destination
    },
    {
      path: "/activities",
      name: "activities",
      components: Activities
    },
    {
      path: "/profile",
      name: "profile",
      components: profile
    },
    {
      path: "/chat",
      name: "chat",
      components: chat
    }

  ]
});