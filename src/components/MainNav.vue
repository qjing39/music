<template>
	<div class="nav">
		<router-link tag="li" class="tabtitle" to="/Recommend">
			<div class="tabtxt">
				<span>推荐音乐</span>
			</div>
		</router-link>
		<router-link tag="li" class="tabtitle" to="/Hot">
			<div class="tabtxt">
				<span>热歌榜</span>
			</div>
		</router-link>
		<li class="tabtitle">
			<div class="tabtxt">
				<span>搜索</span>
			</div>
		</li>
	</div>
</template>

<script>
	export default{
		name:'HomeNav'
	}
</script>

<style scoped lang="less">
	.nav{
		position: fixed;
		top: 64px;
		left: 0;
		z-index: 100;
		display: flex;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		width: 100%;
		height: 40px;
		background: #fff;
		.tabtitle{
			-webkit-box-flex: 1;
			flex: 1;
			width: 33.3%;
			height: 100%;
			text-align: center;
			cursor: pointer;
			&.router-link-active > .tabtxt{
				color: #d33a31;
				&:after{
					content: '';
					position: absolute;
					left: 0;
					bottom: -1px;
					z-index: 3;
					width: 100%;
					height: 4px;
					transform: scaleY(.5);
					background: #d33a31;
				}
			}
			.tabtxt{
				position: relative;
				display: inline-block;
				height: 100%;
				padding: 0 5px;
				box-sizing: border-box;
				font-size: 15px;
				line-height: 40px;
			}
		}
	}
</style>