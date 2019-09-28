import VueRouter from 'vue-router'
import Home from '../vue-template/tabbar/Home.vue';
import Cart from '../vue-template/tabbar/Cart.vue';
import Member from '../vue-template/tabbar/Member.vue';
import Search from '../vue-template/tabbar/Search.vue';
var routers = new VueRouter({
    routes: [
        {path: '/home', component:Home},
        {path: '/cart', component:Cart},
        {path: '/member', component:Member},
        {path: '/search', component:Search}
    ],
    linkActiveClass: 'mui-active'
});
export default routers;