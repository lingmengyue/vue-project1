<template>
        <div>
                <mt-swipe :auto="2000">
                        <mt-swipe-item v-for="item in bannerList" :key="item.key_word">
                                <img :src="item.img.url">
                        </mt-swipe-item>
                </mt-swipe>
        </div>

</template>

<script type="text/javascript">
    export default {
            props: ['bannerList']
    }
</script>

<style lang="scss" scoped>
        .mint-swipe{
                height: 250px !important;
                .mint-swipe-item {
                        img{height:100%;}
                }
        }
</style>