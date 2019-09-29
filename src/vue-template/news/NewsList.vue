<template>
        <div>
                <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                                <router-link :to="'/home/newsInfo/'+item.id">
                                        <img class="mui-media-object mui-pull-left" src="http://wx.qlogo.cn/mmopen/G5nrRk5f7DZmCsY09dylt1ibiauVSBYtHFmiaDAFS9yIZYDno8ltsJwnjGJicbp3TQ4bSJOEGLzkAuuPqp27Rh50UEibgZEnHEaTT/64">
                                        <div class="mui-media-body">
                                                <h3>{{item.title}}</h3>
                                                <p class='mui-ellipsis'>
                                                        <span>{{item.create_time}}</span>
                                                        <span>{{item.click}}</span>
                                                </p>
                                        </div>
                                </router-link>
                        </li>
                </ul>
        </div>

</template>

<script type="text/javascript">
        import {Toast} from 'mint-ui';
        export default {
                data(){
                        return {
                                newsList: []
                        }
                },
                created(){
                        this.getNewsList();
                },
                methods:{
                        getNewsList(){
                                this.$http.get('api/vue/newslist').then(result => {
                                        if(result.status == 200){
                                                this.newsList = result.body;
                                                Toast('loading success');
                                        }
                                        else {
                                                Toast('loading fail');
                                        }
                                })
                        }
                }

        }
</script>

<style scoped lang="scss">
    .mui-table-view{
            li{
                    h3{font-size: 14px;}
                    a{text-decoration: none;}
                    .mui-ellipsis{
                          font-size: 12px;
                          color: #226aff;
                          display: flex;
                          justify-content: space-between;
                    }
            }
    }
</style>
