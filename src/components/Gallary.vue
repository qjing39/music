<template>
	<div class="gallary" @click.stop="closeGallary">
		<swiper :options="swiperOption">
    <!-- slides -->
		    <swiper-slide v-for="(value,index) in list" :key="index">
		    	<div class="img-box">
		       		<img alt="" class="responsive-img" :src="value">
		   		</div>
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default{
		name:'Gallary',
		props:{
			list:{
				type:Array
			}
		},
		data(){
			return {
				swiperOption:{
					pagination:{
						el:'.swiper-pagination',
						type:'fraction'
					},
					observer:true,
					
				}
			}
		},
		methods:{
			closeGallary(){
				this.$emit('handleGallaryClose')
			}
		}
	}
</script>

<style scoped lang="less">
	.gallary{
		position:fixed;top:0;bottom:0;left:0;right:0;background:#000;display:flex;align-items:center;
		.img-box{
			width:100%;height:0;padding-bottom:55%;
			.responsive-img{max-width:100%;}
		}
	}
	.swiper-pagination-fraction{
		bottom:-30px;color:#fff !important;
	}
</style>