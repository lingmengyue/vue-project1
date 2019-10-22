import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import app from './vue-template/App.vue';
import routers from './js/router.js';
import moment from 'moment'; //时间插件
import 'bootstrap/dist/css/bootstrap.css';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
import Vuex from 'vuex';
Vue.use(Vuex);

//按需导入的mint-ui组件
/*import { Header, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.use(Lazyload);*/



//安装图片预览插件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);
/*从本地存储中读取放入的购物车商品数据*/
var productList = JSON.parse(localStorage.getItem('productList')|| '[]');
//区域滚动插件

//实例化vuex
var store = new Vuex.Store({
    state: {
        count: 0,
        productList: productList
    },
    mutations: {
        addCars(state,productInfo){    //获取商品加入购物车的数量
            var flag = false;  //默认购物车没有对应商品
            state.productList.some(item => {  //与现有商品列表作对比，看传进来的商品是否已经存在
                if(item.id == productInfo.id){
                    item.count += parseInt(productInfo.count);
                    flag = true;
                    return flag;
                }
            });
            if(!flag){  //当传过来的商品信息不存在时，加入产品列表
                state.productList.push(productInfo);
            }
            /*将购物车相关信息放到本地存储中*/
            localStorage.setItem('productList', JSON.stringify(state.productList));

        },
        //购物车商品数量改变时触发
        updateProductCount(state, productInfo) {
            state.productList.some(item => {
                if (item.id == productInfo.id) {
                    item.count = parseInt(productInfo.count);
                    return true;
                }
            });
            localStorage.setItem('productList',JSON.stringify(state.productList));
        },
        //根据商品id删除对应的本地数据
        removeFromCart(state, productID){
            state.productList.forEach((item, i) => {
                if(item.id == productID){
                    state.productList.splice(i,1);
                    return true;
                }
            });
            localStorage.setItem('productList',JSON.stringify(state.productList));
        },
        //改变特定商品的选中状态
        updateProductStatus(state,productInfo){
            state.productList.some(item => {
                if(item.id == productInfo.id){
                    item.selected = productInfo.selected;
                }
            });
            localStorage.setItem('productList',JSON.stringify(state.productList));
        }
    },
    getters: {
        // 获取全部商品数量
        getAllCounts(state){
            var count = 0;
            state.productList.forEach(item =>{
               count += item.count;
            });
            return count;
        },

        //获取商品初始数量
        getProductCount(state) {
            var counts = {};//用于存储商品加入购物车时的初始数量
            console.log(state);
            state.productList.forEach(item =>{
                counts[item.id] = item.count;
            })
            return counts;
        },
        //获取商品初始选中状态
        getProductSelected(state){
            var selects = {};
            state.productList.forEach(item =>{
                selects[item.id] = item.selected
            });
            return selects;
        }
    }
});


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'http://www.lingmeng.com/';//全局设置访问域名
Vue.http.options.emulateJSON = true;//全局启用发起post请求时需要的参数

//导入所有mint-ui组
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
var vm = new Vue({
    el: '#app',
    render: test => test(app),store,
    router: routers
});

//全局时间格式化过滤器
Vue.filter('dateFormat',function (dateStr,pattern='YYYY-MM-DD HH:mm:ss') {
    return moment(dateStr).format(pattern);//不加unix选项默认自动转换13位时间戳，加了后才可转换10位时间戳
});