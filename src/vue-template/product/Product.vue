<template>
        <div class="product-container">
                <ul>
                        <li class="product-item" v-for="item in productList" :key="item.id" @click="goProductDetail(item.id)">
                                <img :src='item.main_img_url'>
                                <h3> {{item.name}}</h3>
                                <div class="product-info">
                                        <p class="price">
                                                <span class="new">￥{{item.price}}</span>
                                                <span class="old">￥1199</span>
                                        </p>
                                        <p class="stock">
                                                <span>热卖中</span>
                                                <span>剩余{{item.stock}}件</span>
                                        </p>
                                </div>
                        </li>
                </ul>
        </div>

</template>

<script type="text/javascript">
export default{
        data(){
                return{
                        productList:[]
                }
        },
        created(){
                this.getProductList();
        },
        methods: {
                getProductList(){
                        this.$http.get('api/v1/product/recent').then(result => {
                                if(result.status == 200){
                                     this.productList = result.body;
                                }
                        })
                },
                goProductDetail(id){
                        this.$router.push({name: 'productDetail', params: {id}});
                }
        }
}
</script>

<style lang="scss" scoped>
.product-container{
        padding: 10px;
        ul{
                margin: 0;
                padding: 0;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
        }
        li{
                width: 49%;
                height: auto;
                list-style: none;
                border: 1px solid #ccc;
                box-shadow: 0 0 8px #ccc;
                margin-bottom: 10px;
                padding: 2px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                h3{padding-left: 5px;font-size: 18px;}
                img{width: 100%;height: 200px;}
                .product-info{
                        background: #eee;
                        p{
                                margin: 0;
                                padding: 5px;
                        }
                        .price{
                                .new{
                                        color: red;
                                        font-weight: bold;
                                        font-size: 16px;
                                }
                                .old{
                                        text-decoration: line-through;
                                        font-size: 12px;
                                        margin-left: 10px;
                                }
                        }
                        .stock{
                                display: flex;
                                justify-content: space-between;
                        }

                }
        }

}
</style>