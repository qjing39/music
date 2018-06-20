<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in list" :key="item.id">
       <img alt="" class="responsive-img" :src="item.imgUrl">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
		import axios from 'axios'
    export default{
        name:'HomeSwiper',
        data(){
            return {
                swiperOption:{
                    pagination:{
                        el:'.swiper-pagination'
                    },
                },
            }
        },
        props:{
            list:{
                type:Array
            }
        },
        // created (){

        // },
        // mounted(){
        //     axios.get('/static/mock/index.json')
        //     .then(response=> {
        //     let result=response.data;
        //     if(result.ret && result.data){
        //         this.list=result.data.swiperList;
        //         }
        //     })
        //     .catch(function (error) {
        //     console.log(error);
        //     });
        // },
        // destoryed(){

        // }
    }
</script>
<style lang="less" scoped>
    .wrapper{
    	width:100%;
    	/*padding-bottom:26.6667%;*/
    	/*overflow:hidden;*/
        .responsive-img{
        	width:100%;
        	height: 100%;
        };
    }
</style>