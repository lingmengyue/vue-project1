import VueRouter from 'vue-router'
import Home from '../vue-template/tabbar/Home.vue';
import Cart from '../vue-template/tabbar/Cart.vue';
import Member from '../vue-template/tabbar/Member.vue';
import Search from '../vue-template/tabbar/Search.vue';
import NewsList from '../vue-template/news/NewsList.vue';
import NewsInfo from '../vue-template/news/NewsInfo.vue';
import PhotoList from '../vue-template/photo/PhotoList.vue';
var routers = new VueRouter({
    routes: [
        {path:'/',redirect: '/home'},
        {path: '/home',component:Home,},
        {path: '/cart', component:Cart},
        {path: '/member', component:Member},
        {path: '/search', component:Search},
        {path: '/home/newsList', component:NewsList},
        {path: '/home/newsInfo/:id', component:NewsInfo},
        {path: '/home/photoList', component:PhotoList},
    ],
    linkActiveClass: 'mui-active'
});
export default routers;