<template>
        <div>
                <div class="mui-numbox" data-numbox-min='1' data-numbox-step='1' style="height: 25px;">
                        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                        <input id="test" class="mui-input-numbox" type="number" :value="initCounts" @change="countChange" ref="numBox" />
                        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                </div>
        </div>

</template>

<script type="text/javascript">
        import mui from '../../lib/mui/js/mui.js';
        export default {
                mounted() {
                        mui('.mui-numbox').numbox();
                },
                methods:{
                        countChange(){
                                this.$store.commit("updateProductCount",{
                                    id: this.productID,
                                    count: this.$refs.numBox.value
                                })
                        }
                },
                props: ["initCounts","productID"]//必须要用双引号否则不生效
        }
</script>

<style>

</style>