<template>
        <div class="cmt-container">
                <h3>发表评论</h3>
                <hr>
                <textarea placeholder="发表你的评论"></textarea>
                <mt-button type="primary" size="large">submit</mt-button>
                <br>
                  <div class="cmt-list">
                          <div class="cmt-item" v-for="(item,i) in commentList" :key="item.id">
                                  <div class="cmt-title">
                                          第{{i+1}}楼&nbsp;&nbsp;用户：{{item.username}}&nbsp;&nbsp;发表时间：{{item.create_time}}
                                  </div>
                                  <div class="cmt-body">
                                          {{item.comment}}
                                  </div>
                          </div>
                  </div>
                <br>
                <mt-button type="danger" size="large" plain @click="getMore">loading more</mt-button>
        </div>

</template>

<script type="text/javascript">
        import {Toast} from 'mint-ui';
        export default {
                data(){
                        return {
                                commentList : [],
                                lastPage:"",
                                total:"",
                                limit:8,
                                pageIndex: 1
                        }
                },
                created(){
                        this.getComment();
                },
                methods: {
                        getComment(){
                                this.$http.get('api/vue/comment/' + this.limit + '/' + this.pageIndex).then(result => {
                                        if(result.status == 200){
                                                this.commentList = this.commentList.concat(result.body.data);
                                                this.lastPage = result.body.last_page;
                                                this.total = result.body.total;
                                        }
                                        else {
                                                Toast('loading fail');
                                        }
                                })
                        },
                        getMore(){
                               this.pageIndex++;
                               if(this.pageIndex <= this.lastPage){
                                       this.getComment();
                               }
                               else{
                                       Toast('已经没有更多数据了');
                               }
                        }
                },
                props: ["id"]
        }
</script>

<style scoped lang="scss">
.cmt-container{
        h3{font-size:16px;margin-bottom: -10px;font-weight: bold;}
        hr{height: 1px;background: gray;}
        textarea{font-size: 14px;height: 85px;margin: 0;border: 1px solid gray;}
        .cmt-list{
                margin-top: -10px;
                .cmt-item{
                        font-size: 13px;
                        .cmt-title{
                           line-height: 30px;
                           background-color: #ccc;
                        }
                        .cmt-body{
                           line-height: 35px;
                           text-indent: 2em;
                        }
                }
        }
}
</style>