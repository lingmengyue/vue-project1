import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './vue-template/App.vue';
import 'mint-ui/lib/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import './lib/mui/css/mui.min.css';
import routers from './js/router.js';
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.use(VueRouter);
var vm = new Vue({
    el: '#app',
    render: test => test(app),
    router: routers
});