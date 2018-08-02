import Vue from "vue";
import App from "./components/App.vue";

Vue.config.productionTip = false;

new Vue({ el: "#entry", render: h => h(App) });
