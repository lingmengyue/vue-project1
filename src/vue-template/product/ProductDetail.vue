<template>
        <div class="product-container">
                <!--购物车小球-->
                <transition
                   @before-enter="beforeEnter"
                   @enter="enter"
                   @after-enter="afterEnter"
                >
                        <div class="ball" v-show="ballFlag" ref="ball"></div>
                </transition>
                <!--轮播图区域-->
                <div class="mui-card">
                        <banner :bannerList = "productList" ></banner>
                </div>
                <!--商品购买领域-->
                <div class="mui-card shop-area">
                        <div class="mui-card-header">{{productParams.name}}</div>
                        <div class="mui-card-content">
                                <div class="mui-card-content-inner">
                                        <p class="price"><del>市场价：￥2299</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{productParams.price}}</span></p>
                                        <p><span>购买数量：</span><numberBox class="number-box" :max="productParams.stock" @getCount="getSelectCount"></numberBox></p>
                                        <p>
                                                <mt-button type="primary" size="small">立即购买</mt-button>
                                                <mt-button type="danger" size="small" @click="addToCar">加入购物车</mt-button>
                                        </p>
                                </div>
                        </div>
                </div>


                <div class="mui-card params-area">
                        <div class="mui-card-header">商品参数</div>
                        <div class="mui-card-content">
                                <div class="mui-card-content-inner">
                                        <p v-for="item in productParams.properties" :key="item.id">{{item.name}}：{{item.detail}}</p>
                                </div>
                        </div>
                        <div class="mui-card-footer">
                                <mt-button type="primary" size="large" plain @click="goProductInfo(id)">图文介绍</mt-button>
                                <mt-button type="danger" size="large" plain @click="goProductComment(id)">商品评论</mt-button>
                        </div>
                </div>
        </div>

</template>

<script type="text/javascript">
import swiper from '../../vue-template/subcomponents/swiper.vue';
import numberBox from '../../vue-template/subcomponents/productNumberBox.vue';
import {Toast} from 'mint-ui';
export default{
        data(){
                return{
                        id: this.$route.params.id,
                        productList:[],
                        productParams: [],
                        ballFlag: false,
                        selectCount: 1,
                        value: false
                }
        },
        created(){
                this.getProductBanner();
                this.getProductParams();
        },
        methods: {
                getProductBanner(){
                        this.$http.get('api/v1/banner/1').then(result => {
                                if(result.status == 200){
                                        this.productList = result.body.items;
                                        Toast('loading success');
                                }
                                else {
                                        Toast('loading fail');
                                }
                        }).catch(err => {
                                console.log(err);
                        })
                },
                getProductParams(){
                        this.$http.get('api/v1/product/11').then(result => {
                                console.log(result.body[0]);
                                if(result.status == 200){
                                        this.productParams = result.body[0];
                                        Toast('loading success');
                                }
                                else {
                                        Toast('loading fail');
                                }
                        }).catch(err => {
                                console.log(err);
                        })
                },
                goProductInfo(id){
                        this.$router.push({name:"productInfo",params: {productID: id,productInfo: this.productParams.imgs}})
                },
                goProductComment(id){
                        this.$router.push({name:"productComment",params: {productID: id}})
                },
                addToCar(){
                     this.ballFlag = !this.ballFlag;
                     var productInfo = {id:this.id,count:this.selectCount,price:this.productParams.price,selected:true};
                     this.$store.commit('addCars',productInfo);
                },
                beforeEnter(el){
                        el.style.transform = "translate(0,0)";
                },
                enter(el,done){
                        el.offsetWidth;
                        //获取小球位置坐标
                        const  ballPosition = this.$refs.ball.getBoundingClientRect();
                        //获取购物车小球位置
                        const badgePosition = document.getElementById('badge').getBoundingClientRect();
                        //获取偏移位置具体像素
                        const xDist = badgePosition.left - ballPosition.left;
                        const yDist = badgePosition.top - ballPosition.top;
                        el.style.transform = `translate(${xDist}px, ${yDist}px)`;
                        el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
                        done();
                },
                afterEnter(el){
                        this.ballFlag = !this.ballFlag;
                },
                getSelectCount(count){
                     this.selectCount = count;
                }

        },
        components: {'banner': swiper,numberBox}

}
</script>

<style lang="scss" scoped>
        .product-container{
                background: #ccc;
                overflow: hidden;
                .ball{
                        width: 15px;
                        height: 15px;
                        border-radius: 50%;
                        background: red;
                        position: absolute;
                        z-index: 99;
                        top: 410px;
                        left: 150px;
                }
                .shop-area{
                        .now_price{color: red;font-size: 16px;}
                        button{line-height: 33px;}
                        .number-box{display:inline-block;}
                }
                .params-area{
                       .mui-card-footer{display: block;button{margin: 15px 0;}}
                }


        }

</style>