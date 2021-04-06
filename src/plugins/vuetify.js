import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    fonticons: "mdi",
  },

  theme: {
    themes: {
      light: {
        primary: "#FEC534",
        secondary: "#E1A825",
        accent: "#F3F3F3",
        error: "#b71c1c",
        lightblue: "#62D4FF",
        white: "#FFFFFF",
      },
    },
  },
});
