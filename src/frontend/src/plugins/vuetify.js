// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#41B883"
      },
      dark: {
        primary: "#34495E"
      }
    }
  }
};

export default new Vuetify(opts);
