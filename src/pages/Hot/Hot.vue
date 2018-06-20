<template>
	<div class="hot">
		<hot-header></hot-header>
		<new-list :songs="songs"></new-list>
	</div>
</template>

<script>
	import NewList from './components/NewList'
	import HotHeader from './components/HotHeader'
	import axios from 'axios'
	export default {
		name: 'Hot',
		components: {
			NewList,
			HotHeader
		},
		data (){
			return {
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
	                	this.songs = result.data.songs
	                }
	            })
	            .catch(function (error) {
	            console.log(error);
	            });
			}
		}
	}
</script>

<style scoped lang="less">
	.hot{
		width: 100%;
		height: 100%;
	}
</style>