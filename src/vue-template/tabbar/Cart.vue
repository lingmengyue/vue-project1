<template>
        <div class="cart-container">

                <div class="product-list">

                        <div class="mui-card" v-for="(item,i) in productList" :key="item.id">
                                <div class="mui-card-content">
                                        <div class="mui-card-content-inner">
                                            <mt-switch
                                                    v-model="$store.getters.getProductSelected[item.id]"
                                                    @change="selectedChange(item.id,$store.getters.getProductSelected[item.id])">
                                            </mt-switch>
                                            <img :src="item.main_img_url">
                                            <div class="pro-info">
                                                    <h3>{{item.name}}</h3>
                                                    <p>
                                                            <span>￥{{item.price}}</span>
                                                            <numBox :initCounts="$store.getters.getProductCount[item.id]" :productID="item.id"></numBox>
                                                            <a href="#" @click.prevent="removeProduct(item.id,i)">删除</a>
                                                    </p>
                                            </div>
                                        </div>
                                </div>
                        </div>
                </div>

                <div class="priceCount">
                        <div class="mui-card">
                                <div class="mui-card-content">
                                        <div class="mui-card-content-inner">
                                                这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                                        </div>
                                </div>
                        </div>
                </div>

        </div>

</template>

<script type="text/javascript">
import numBox from '../subcomponents/cartNumberBox.vue';
export default{
        data(){
                return {
                        productList: [],
                        value:false
                }
        },
        created(){
            this.getProductList();
        },
        methods: {
            //获取商品列表
             getProductList(){
                  var idArr = [];//用于存储获取到的所有商品id
                  this.$store.state.productList.forEach(item => idArr.push(item.id));//从本地存储中获取商品id
                  if(idArr.length <=0){ //判断是否从本地存储有获取到数据，没有就返回
                      return;
                  }
                  this.$http.get('api/v1/product/cart?ids='+ idArr.join(",")).then(result => {
                      if(result.status == '200'){
                          this.productList = result.body;
                      }
                  })

             },
             //删除购物车商品
             removeProduct(productID,index){
                 this.productList.splice(index,1);
                 this.$store.commit('removeFromCart',productID);
             },
            //某一商品选中状态改变时
            selectedChange(productID,status){
                 console.log('click');
                this.$store.commit('updateProductSelected',{id:productID,selected:status})
            }
        },
        components:{
                'numBox': numBox
        }
}

</script>

<style lang="less" scoped>
.cart-container{
        background: #eee;
        overflow: hidden;
        .mui-card{margin:0;}
        .product-list{
                padding: 5px;
                .mui-card-content-inner{
                        padding: 10px;
                        display: flex;
                        img{width: 60px;height: 60px;margin: auto 10px;vertical-align: middle;}
                        .pro-info{
                               h3{font-size: 16px;}
                               p{
                                       margin: 0;
                                       display: flex;
                                       justify-content: space-between;
                                       a,span{margin: auto 0;padding:0 3px;}
                                       span{font-size: 18px;color: red;font-weight: bold;}
                                       a{text-decoration: none;}
                               }
                        }

                }
        }
}
</style>