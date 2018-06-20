<template>
	<div class="recom-list">
		<h2 class="remd-tl">推荐歌单</h2>
		<div class="remd-songs">
			<div class="remd-ul">
				<li class="remd-li" @click="selectItem(item.id)" v-for="(item,index) in listOne" :key="index">
					<div class="remd-img">
						<img class="u-img" :src="item.imgUrl"/>
					</div>
					<p class="remd-txt">{{item.txt}}</p>
				</li>
			</div>
			<div class="remd-ul">
				<li class="remd-li" @click="selectItem(item.id)" v-for="(item,index) in listTwo" :key="index">
					<div class="remd-img">
						<img class="u-img" :src="item.imgUrl"/>
					</div>
					<p class="remd-txt">{{item.txt}}</p>
				</li>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Recommend',
		props: {
			listOne: {
				type: Array
			},
			listTwo: {
				type: Array
			}
		},
		methods: {
			selectItem(id){
				this.$emit('select',id)
			}
		}
	}
</script>

<style scoped lang="less">
	.recom-list{
		.remd-tl{
			position: relative;
			padding-left: 9px;
			margin-bottom: 14px;
			font-size: 17px;
			height: 20px;
			line-height: 20px;
			font-weight: 400;
			&:after{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				margin-top: -9px;
				width: 2px;
				height: 16px;
				background: #d33a31;
			}
		}
		.remd-songs{
			position: relative;
			padding-bottom: 24px;
			.remd-ul{
				padding-bottom: 16px;
				&:after{
					display: block;
					visibility: hidden;
					clear: both;
					height: 0;
					overflow: hidden;
					content: '.';
				}
				.remd-li{
					padding-left: 0px;
					padding-right: 2px;
					display: block;
					float: left;
					width: 33.33%;
					box-sizing: border-box;
					cursor: pointer;
					.remd-img{
						position: relative;
						padding-bottom: 100%;
						.u-img{
							position: absolute;
							width: 100%;
							left: 0;
							top: 0;
							z-index: 1;
						}
					}
					.remd-txt{
						display: -webkit-box;	
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						overflow: hidden;
						padding: 6px 2px 0 6px;
						line-height: 1.2;
						font-size: 13px;
					}
				}
			}
		}
	}
</style>