import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import VueAxios from "vue-axios";
import Paginate from "vuejs-paginate";

const base = axios.create({
    baseURL: "https://gateway.marvel.com/v1/public",
});

Vue.component("paginate", Paginate);
Vue.prototype.$http = base;
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");