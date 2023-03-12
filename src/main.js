import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/index.css";
// import Vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";
// import "vuetify/dist/vuetify.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

// import vuetify from "@/plugins/vuetify";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(vuetify);

app.mount("#app");
