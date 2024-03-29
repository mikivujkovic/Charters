import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld";
import Details from "../components/Details";
import Gallery from "../components/Gallery";
import Basic from "../components/Basic";
import Additional from "../components/Additional";
import BoatsElan from "../components/BoatsElan";
import BoatsJean from "../components/BoatsJean";
import Offer from "../components/Offer";
import PriceList from "../components/PriceList"
import Contact from "../components/Kontakt"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/details",
      name: "Details",
      component: Details
    },
    {
      path: "/order",
      name: "Order",
      component: Offer
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: Gallery
    },
    {
      path: "/basic",
      name: "Basic",
      component: Basic
    },
    {
      path: "/additional",
      name: "Additional",
      component: Additional
    },
    {
      path: "/boatsElan",
      name: "BoatsElan",
      component: BoatsElan
    },
    {
      path: "/boatsJean",
      name: "BoatsJean",
      component: BoatsJean
    },
    {
      path: "/priceList",
      name: "PriceList",
      component: PriceList
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ],
  mode: "history"
});
