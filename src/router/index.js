import { createRouter, createWebHistory } from "vue-router";

// Import pages
import Home from "../views/Home.vue";
import Locations from "../views/Locations.vue";
import CombiDeals from "../views/CombiDeals.vue";
import AboutUs from "../views/AboutUs.vue";
import Contact from "../views/Contact.vue";
import BikingRules from "../views/BikingRules.vue";
import RentalTerms from "../views/RentalTerms.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import NotFound from "../views/NotFound.vue";
import BikeRentals from "../views/BikeRentals.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/locations", name: "Locations", component: Locations },
  { path: "/combi-deals", name: "CombiDeals", component: CombiDeals },
  { path: "/about-us", name: "AboutUs", component: AboutUs },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/biking-rules", name: "BikingRules", component: BikingRules },
  { path: "/rental-terms", name: "RentalTerms", component: RentalTerms },
  { path: "/privacy-policy", name: "PrivacyPolicy", component: PrivacyPolicy },
{ path: "/bike-rentals", name: "BikeRentals", component: BikeRentals },
  // Catch-all for 404s
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If user clicked "back/forward", restore position
    if (savedPosition) {
      return savedPosition;
    } else {
      // Always scroll to top
      return { top: 0 };
    }
  },
});

export default router;
