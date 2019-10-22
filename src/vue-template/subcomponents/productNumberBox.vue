<template>
        <div>
                <div class="mui-numbox" data-numbox-min='1' data-numbox-step='1'>
                        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChange" ref="numBox" />
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
                                this.$emit("getCount",parseInt(this.$refs.numBox.value));
                        }
                },
                props: ["max"],//必须要用双引号否则不生效
                watch: {
                        max: function(newVal,oldVal){
                                //使用JS API设置 numBox的最大值,mui文档里面有描写
                                mui(".mui-numbox").numbox().setOption("max",newVal);
                        }
                }
        }
</script>

<style>

</style>