<template>
        <div class="news-container">
             <h3>{{newsInfo.title}}</h3>
             <p>
                     <span>发表时间：{{newsInfo.create_time}}</span>
                     <span>阅读人数：{{newsInfo.click}}</span>
             </p>
             <hr>
             <div class="content">
                     {{newsInfo.content}}
                     <br><br><br><br><br><br><br><br><br><br><br><br>
             </div>
             <div class="comment">
                 <Comment :id="this.id"></Comment>
             </div>
        </div>

</template>

<script type="text/javascript">
        import {Toast} from 'mint-ui';
        import comment from '../subcomponents/comment.vue';
        export default {
                data(){
                        return {
                                newsInfo : [],
                                id: this.$route.params.id
                        }
                },
                created(){
                        this.getNewsList();
                },
                methods: {
                        getNewsList(){
                                this.$http.get('api/vue/newsDetail/'+this.id).then(result => {
                                        if(result.status == 200){
                                                this.newsInfo = result.body;
                                                Toast({message:'loading success',duration:1000});
                                        }
                                        else {
                                                Toast('loading fail');
                                        }
                                })
                        }
                },
                components: {'Comment': comment}
        }
</script>

<style scoped lang="scss">
   .news-container{
           padding: 2px 4px;
           h3{font-size: 20px;color: red;text-align: center;}
           p{display: flex;justify-content: space-between;span{color: #226aff;}}
           hr{height: 2px;background: gray;}
           .comment{}
   }
</style>
px