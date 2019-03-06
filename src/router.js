import Vue from "vue";
import Router from "vue-router";
import VeeValidate from "vee-validate";
import ContactPage from "./pages/Contact.vue";

Vue.use(Router);
Vue.use(VeeValidate, {
  classes: true
});
export default new Router({
  routes: [
    {
      path: "/",
      name: "contactPage",
      component: ContactPage
    }
  ]
});
