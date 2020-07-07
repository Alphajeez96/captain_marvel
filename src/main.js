import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'



const base = axios.create({
    baseURL: "https://gateway.marvel.com/v1/public"
});

Vue.prototype.$http = base;
Vue.use(VueAxios, axios, )
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')