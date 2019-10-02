<template>
        <div class="photo-container">
                <h3>{{contentData.title}}</h3>
                <p class="subtitle">
                        <span>发表时间：xxxx-xx-xx</span>
                        <span>点击次数：99999</span>
                </p>

                <hr>

                <div class="photo-content">
                        <!--<img class="preview-img" v-for="(item, i) in contentData.images" :src="item.img_url" height="100" @click="$preview.open(index, contentData.images)" :key="item.img_url">-->
                        <vue-preview :slides="thumbList" @close="handleClose"></vue-preview>
                </div>

                <div class="photo-comment">
                        <comment :show_id="this.id"></comment>
                </div>
        </div>

</template>

<script type="text/javascript">
        import comment from '../subcomponents/comment.vue';
        export default {
                data(){
                        return {
                                id: this.$route.params.id,
                                contentData: [],
                                thumbList: []
                        }
                },
                created(){
                     this.getPhotoInfo();
                },
                methods:{
                     getPhotoInfo(){
                             this.$http.get('api/vue/imageContent/'+ this.id).then(function(result){
                                   if(result.body.status == 1){
                                           this.contentData = result.body.data;
                                           this.contentData.images.forEach(item =>{
                                                   item.w = 600;   //设置以大图浏览时的宽度
                                                   item.h = 400;     //设置以大图浏览时的高度
                                                   item.src = item.img_url;  //大图
                                                   item.msrc = item.img_url;  //小图
                                           });
                                           this.thumbList = this.contentData.images;

                                   }
                             })
                     },
                        handleClose () {
                                console.log('close event')
                        }
                },
                components:{'comment':comment}
        }
</script >

<style lang="less" scoped>
   .photo-container{
           padding:3px;
           h3{color: #26A2FF;font-size: 15px;text-align: center;margin: 15px 0;}
           .subtitle{display: flex;justify-content: space-between;}
           hr{height: 1px;background: gray;}
           .photo-content{
                   /deep/ .my-gallery {
                           display: flex;
                           flex-wrap: wrap;
                           figure {
                                   width: 100px;
                                   height: 100px;
                                   img {
                                           width: 100%;
                                           height: 100px;
                                           box-shadow: 0 0 8px #999;
                                   }
                           }
                   }
           }
   }
</style>