import Vue from "vue";
import Router from "vue-router";
import VeeValidate from "vee-validate";
import ContactPage from "./pages/Contact.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "contactPage",
      component: ContactPage
    }
  ]
});
