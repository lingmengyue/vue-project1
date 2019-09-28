import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import app from './vue-template/App.vue';
import routers from './js/router.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
import { Header, Swipe, SwipeItem} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.use(VueRouter);
Vue.use(VueResource);
var vm = new Vue({
    el: '#app',
    render: test => test(app),
    router: routers
});