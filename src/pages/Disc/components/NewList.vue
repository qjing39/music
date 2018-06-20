<template>
	<div class="new-list">
		<h2 class="remd-tl">歌曲列表</h2>
		<div class="remd-newsg">
			<li class="m-sigtem" v-for="(item,index) in songs">
				<div class="sgfr">
					<div class="sgchf1">
						<div class="f-thide">{{item.name}}</div>
						<div class="f-thide sginfo">
							<i class="u-hmsprt"></i>
							{{item.singer}}
						</div>
					</div>
					<div class="sgchfr">
						<span class="u-hmsprt sgchply"></span>
					</div>
				</div>
			</li>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NewList',
		props: {
			songs: {
				type: Array
			}
		}
	}
</script>

<style scoped lang="less">
	.new-list{
		margin-bottom: 50px;
		.remd-tl{
			margin: 20px 0px;
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
				background: #D33A31;
			}
		}
		.remd-newsg{
			position: relative;
			min-height: 20px;
			.m-sigtem{
				display: flex;
				padding-left: 10px;
				color: #333;
				text-decoration: none;
				cursor: pointer;
				.sgfr{
					-webkit-box-flex: 1;
					flex: 1 1 auto;
					display: flex;
					position: relative;
					.sgchf1{
						padding: 8px 0;
						width: 0;
						-webkit-box-flex: 1;
						flex: 1 1 auto;
						.f-thide{
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							word-break: normal;
							font-size: 17px;
							&.sginfo{
								font-size: 12px;
								color: #888;
								margin-top: 5px;
							}
						}
						.u-hmsprt{
							display: inline-block;
							width: 12px;
							height: 8px;
							margin-right: 4px;
							background: url(/static/m_home/index_icon_2x.png) no-repeat;
							background-size: 166px 97px;
							font-style: normal;
							font-size: 12px;
							color: #888;
							&.sgchply{
								display: inline-block;
								width: 22px;
								height: 22px;
								background-position: -24px 0;
							}
						}
					}
					.sgchfr{
						display: flex;
						-webkit-box-align: center;
						align-items: center;
						padding: 0 10px;
						.u-hmsprt{
							display: inline-block;
							width: 12px;
							height: 8px;
							margin-right: 4px;
							background: url(/static/m_home/index_icon_2x.png) no-repeat;
							background-size: 166px 97px;
							font-style: normal;
							font-size: 12px;
							color: #888;
							&.sgchply{
								display: inline-block;
								width: 22px;
								height: 22px;
								background-position: -24px 0;
							}
						}
					}
					&:after{
						position: absolute;
						z-index: 2;
						content: '';
						top: 0;
						left: 0;
						width: 200%;
						height: 200%;
						transform: scale(.5);
						pointer-events: none;
						box-sizing: border-box;
						transform-origin: top left;
						border: 0 solid rgba(0,0,0,.1);
						border-bottom-width: 1px;
					}
				}
			}
		}
	}
</style>