import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import VueBridgeWebview from "vue-bridge-webview";
import VueHtmlToPaper from "vue-html-to-paper";
import Antd from "ant-design-vue/lib";
import VueCarousel from "vue-carousel";
import * as GmapVue from "gmap-vue";
import VueLodash from "vue-lodash";
import lodash from "lodash";

import "ant-design-vue/dist/antd.css";
// import { Button } from "ant-design-vue";
Vue.use(VueLodash, { lodash: lodash });
Vue.use(VueFormWizard);
Vue.use(VueBridgeWebview);
const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://unpkg.com/kidlat-css/css/kidlat.css"
  ]
};
Vue.use(VueCarousel);
Vue.use(VueHtmlToPaper, options);
Vue.use(Antd);
VueBridgeWebview.config(0, true);
Vue.use(GmapVue, {
  load: {
    key: "AIzaSyC5Aexnwo5TYY3RVzF3JzvI9bUwWuVwdcx", //s
    libraries: "places" // This is required if you use the Autocomplete plugin
  },

  installComponents: true
});

// LightBootstrap plugin
import LightBootstrap from "./light-bootstrap-main";

// router setup
import routes from "./routes/routes";

import "./registerServiceWorker";
// plugin setup
import { ClientTable } from "vue-tables-2";

// $bridge.config(handleDelayTime,silent);
Vue.use(ClientTable);
Vue.use(VueRouter);
Vue.use(LightBootstrap);
Vue.prototype.$axios = axios.create({
  // baseURL: "http://localhost:4000"
  baseURL: "https://damri-mks.herokuapp.com"
});

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "nav-item active",
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

// Vue.prototype.$axios = axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$axios.defaults.headers.common["Authorization"] = token;
}

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});
