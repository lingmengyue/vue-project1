<template>
        <div class="homeContainer">

                <mt-swipe :auto="2000">
                        <mt-swipe-item v-for="item in bannerList" :key="item.key_word">
                              <img :src="item.img.url">
                        </mt-swipe-item>
                </mt-swipe>

                <ul class="mui-table-view mui-grid-view mui-grid-9">
                        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><router-link to="/home/newsList">
                                <img src="../../images/home/menu1.png" alt="news">
                                <div class="mui-media-body">新闻资讯</div></router-link></li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><router-link to="/home/photoList">
                                <img src="../../images/home/menu2.png" alt="share">
                                <div class="mui-media-body">图片分享</div></router-link></li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><router-link to="/home/product">
                                <img src="../../images/home/menu3.png" alt="shop">
                            <div class="mui-media-body">商品购买</div></router-link></li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
                                <img src="../../images/home/menu4.png" alt="message">
                                <div class="mui-media-body">留言反馈</div></a></li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
                                <img src="../../images/home/menu5.png" alt="video">
                                <div class="mui-media-body">视频专区</div></a></li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
                                <img src="../../images/home/menu6.png" alt="contact">
                                <div class="mui-media-body">联系我们</div></a></li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
                                <span class="mui-icon mui-icon-gear"></span>
                                <div class="mui-media-body">Setting</div></a></li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
                                <span class="mui-icon mui-icon-info"></span>
                                <div class="mui-media-body">about</div></a></li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
                                <span class="mui-icon mui-icon-more"></span>
                                <div class="mui-media-body">more</div></a></li>
                </ul>
        </div>

</template>

<script type="text/javascript">
   import {Toast} from 'mint-ui';
   export default {
           data(){
                   return {
                           bannerList: []
                   }
           },
           created(){
                   this.getBannerItem();
           },
           methods:{
                   getBannerItem(){
                           this.$http.get('api/v1/banner/1').then(result => {
                                   if(result.status == 200){
                                       this.bannerList = result.body.items;
                                       Toast('loading success');
                                   }
                                   else {
                                           Toast('loading fail');
                                   }
                           })
                   }
           }

   }
</script>

<style scoped lang="scss">
 .homeContainer{
         .mui-grid-view.mui-grid-9{
                 background-color: white;
                 img{width: 60px;}
                 .mui-table-view-cell{
                         border: none;
                         .mui-media-body{font-size: 12px;}
                 }

         }

         a{text-decoration: none !important;}
 }
.homeContainer .mint-swipe{
        height: 250px !important;
        .mint-swipe-item {
                &:nth-child(1){
                        background: red;
                }
                &:nth-child(2){
                        background: green;
                }
                &:nth-child(3){
                        background: blue;
                }
                img{width:100%;}
        }
}

</style>