<template>
<div class="app-container">
        <header><mt-header fixed title="灵梦级战列舰VUE一番舰"></mt-header></header>

        <div class="content">
                <transition><router-view></router-view></transition>
        </div>

        <footer>
                <nav class="mui-bar mui-bar-tab">
                        <router-link class="mui-tab-item" to="/home">
                                <span class="mui-icon mui-icon-home"></span>
                                <span class="mui-tab-label">首页</span>
                        </router-link>
                        <router-link class="mui-tab-item" to="/member">
                                <span class="mui-icon mui-icon-contact"></span>
                                <span class="mui-tab-label">会员</span>
                        </router-link>
                        <router-link class="mui-tab-item" to="/cart">
                                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{ $store.getters.getAllCounts }}</span></span>
                                <span class="mui-tab-label">购物车</span>
                        </router-link>
                        <router-link class="mui-tab-item" to="/search">
                                <span class="mui-icon mui-icon-search"></span>
                                <span class="mui-tab-label">搜索</span>
                        </router-link>
                </nav>
        </footer>
</div>

</template>

<script type="text/javascript">
        import mui from '../lib/mui/js/mui.min.js';
        mui('body').on('tap','a',function(){document.location.href=this.href;});
</script>

<style lang="scss" scoped>
  *{touch-action: pan-x;}
  a{text-decoration: none !important;}
 .app-container{padding-top: 40px;padding-bottom: 50px;}
  .v-enter{opacity: 0;transform:translateX(100%);}
  .v-leave-to{opacity: 0;transform:translateX(100%);position: absolute;}
  .v-enter-active,.v-leave-active{transition: all 0.5s ease;}
  .mui-badge{width: 16px;height: 16px;padding: 1px!important;}
</style>