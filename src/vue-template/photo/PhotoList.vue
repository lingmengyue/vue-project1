<template>
        <div class="photoContainer">
                <div id="slider" class="mui-slider">
                        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                                <div class="mui-scroll">
                                        <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" to="" data-wid="tab-top-subpage-1.html" v-for="item in categoryList" :key="item.id" @click="getImageContent(item.id)">
                                                {{item.name}}
                                        </a>
                                </div>
                        </div>

                </div>

                <div class="imgContent">
                        <ul>
                                <li v-for="item in imageContent" :key="item.id">
                                        <img v-lazy="item.img_url">
                                        <div class="info">
                                                <h3 class="info-title">
                                                        {{item.title}}
                                                </h3>
                                                <div class="info-content">
                                                        测试内容观看<br>
                                                        测试内容观看<br>
                                                        测试内容观看<br>
                                                        测试内容观看<br>
                                                        测试内容观看<br>
                                                        测试内容观看<br>

                                                </div>
                                        </div>
                                </li>
                        </ul>
                </div>
        </div>

</template>

<script type="text/javascript">
    import mui from '../../lib/mui/js/mui.min.js';

    export default{
            data(){
                    return{
                            categoryList: [],
                            imageContent: []
                    };
            },
            created(){
                    this.getImageCategory();
                    this.getImageContent(0);
            },
            mounted(){ //当组件中的DOM结构被渲染好并放到页面中后，会执行这个钩子函数
                    mui('.mui-scroll-wrapper').scroll({
                            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
                    });
            },
            methods:{
                getImageCategory(){
                        this.$http.get('api/vue/imageCategory').then(result => {
                              if(result.body.status == 1){
                                      result.body.data.unshift({id:0,name:'全部'});
                                      this.categoryList = result.body.data
                              }
                        } )
                },
                getImageContent(cateId){
                        this.$http.get('api/vue/imageCategoryContent/'+ cateId).then(result => {
                                if(result.body.status == 1){
                                        console.log(result.body.data)
                                        this.imageContent = result.body.data
                                }
                        } )
                }
            }
    }
</script>

<style scoped lang="scss">
*{ touch-action: pan-x;}
.mint-header-title{
        z-index: 99;
}
.photoContainer{
        a{text-decoration: none;}
        .imgContent{
                margin: 0;
                padding: 5px 5px 0px 5px;
                ul{
                        padding-inline-start: 0px!important;
                }
                li{
                        position: relative;
                        list-style: none;
                        text-align: center;
                        margin-bottom: 5px;
                        box-shadow: 0 0 9px #999;

                        img{
                                width: 100%;
                                vertical-align: middle;
                        }
                        img[lazy=loading] {
                                width: 40px;
                                height: 300px;
                                margin: auto;
                        }

                        .info{
                                width: 100%;
                                color:black;
                                text-align: left;
                                position: absolute;
                                bottom: 0;
                                background-color: rgba(0,0,0,0.4);
                                text-align: center;
                                max-height: 80px;
                                .info-title{
                                    font-size: 14px;
                                }
                                .info-content{
                                      font-size: 12px;
                                }
                        }
                }

        }
}
</style>