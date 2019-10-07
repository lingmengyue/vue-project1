<template>
        <div class="infoContainer">
                <p v-for="item in contentLit" :key="item.order">
                        <img :src='item.img_url.url'>
                </p>
        </div>

</template>

<script type="text/javascript">
        export default {
                data(){
                        return {
                                productID: this.$route.params.productID,
                                contentLit: this.$route.params.productInfo
                        }
                }
        }
</script>

<style lang="scss" scoped>
.infoContainer{
        img{width: 100%;}
}
</style>