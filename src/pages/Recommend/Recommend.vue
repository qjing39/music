<template>
	<div class="recommend">
		<swiper :list="swiperList"></swiper>
		<div class="m-homeremd">
			<recom-list @select="selectList" :list-one="listOne" :list-two="listTwo"></recom-list>
			<new-list :songs="songs"></new-list>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import Swiper from './components/Swiper'
	import RecomList from './components/RecomList'
	import NewList from './components/NewList'
	import axios from 'axios'
	export default {
		name: 'Recommend',
		components: {
			Swiper,
			RecomList,
			NewList
		},
		data (){
			return {
				swiperList:[],
				listOne: [],
				listTwo: [],
				songs: []
			}
		},
		created() {
			this.getData()
		},
		methods: {
			getData() {
				axios.get('/api/recommend.json')
	            .then(response=> {
	            let result=response.data;
	            if(result.ret && result.data){
	                	this.swiperList = result.data.swiperList;
	                	this.listOne = result.data.recomList.listOne
	                	this.listTwo = result.data.recomList.listTwo
	                	this.songs = result.data.songs
	                }
	            })
	            .catch(function (error) {
	            console.log(error);
	            });
			},
			selectList(id){
				this.$router.push({
					path: `/Recommend/${id}`
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.recommend{
		.m-homeremd{
			padding-top: 20px;
		}
	}
</style>