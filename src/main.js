import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import app from './vue-template/App.vue';
import routers from './js/router.js';
import moment from 'moment'; //时间插件
import 'bootstrap/dist/css/bootstrap.css';
import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

//按需导入的mint-ui组件
/*import { Header, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.use(Lazyload);*/
import MintUI from  'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'http://www.lingmeng.com/';//全局设置访问域名
Vue.http.options.emulateJSON = true;//全局启用发起post请求时需要的参数
var vm = new Vue({
    el: '#app',
    render: test => test(app),
    router: routers
});

//全局时间格式化过滤器
Vue.filter('dateFormat',function (dateStr,pattern='YYYY-MM-DD HH:mm:ss') {
    return moment.unix(dateStr).format(pattern);//不加unix选项默认自动转换13位时间戳，加了后才可转换10位时间戳
});