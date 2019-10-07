<template>
        <div>
                <comment></comment>
        </div>

</template>

<script type="text/javascript">
import comment from '../subcomponents/comment.vue';
 export default {
         data(){
                 return {
                         productID: this.$route.params.productID
                 }
         },
         created() {
               this.getProductInfo();
         },
         methods: {
                 getProductInfo(){
                         console.log("dfgjdflhjdflgh")
                 }
         },
         components:{comment}
 }
</script>

<style>

</style>