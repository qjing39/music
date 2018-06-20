<template>
	<div class="hotop">
		<div class="hotopct">
			<div class="u-hmsprt hoticon"></div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.u-hmsprt{
		background: url(/static/m_home/index_icon_2x.png) no-repeat;
		background-size: 166px 97px;
	}
	.hotop{
		position: relative;
		padding-top: 45%;
		overflow: hidden;
		background: url(/static/m_hot/hot_music_bg_2x.jpg) no-repeat;
		background-size: contain;
		.hotopct{
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			flex-direction: column;
			-webkit-box-pack: center;
			justify-content: center;
			z-index: 2;
			padding-left: 20px;
			box-sizing: border-box;
			&:after{
				content: '';
				z-index: 1;
				background: rgba(0,0,0,.2);
			}
			.hoticon{
				width: 142px;
				height: 67px;
				background-position: -24px -30px;
			}
		}
	}
</style>