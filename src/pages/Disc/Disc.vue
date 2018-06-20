<template>
	<transition name="slide">
		<div class="disc">
			<div class="u-plhead">
				<div class="plhead-bg" :style="bgStyle"></div>
				<div class="plhead-wrap">
					<div class="back">
						<span @click="back" class="icon-keyboard_arrow_left"></span>
					</div>
					<div class="plhead-fl">
						<img class="u-img" :src="recomImg"/>
					</div>
					<div class="plhead-fr">
						<h2 class="title">{{title}}</h2>
						<div class="auth">
							<div class="u-avatar">
								<img class="u-img" :src="avatar"/>
								{{auth}}
							</div>
						</div>
					</div>
				</div>
			</div>
			<new-list :songs="songs"></new-list>
		</div>
	</transition>
</template>

<script>
	import NewList from './components/NewList'
	import axios from 'axios'
	export default {
		name: 'Disc',
		data() {
			return {
				id: this.$route.params.id,
				recomImg: '',
				title: '',
				avatar: '',
				auth: '',
				songs: []
			}
		},
		components: {
			NewList
		},
		created() {
			this.getData()
		},
		computed: {
			bgStyle() {
				return `backgroundImage: url(${this.recomImg})`
			}
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			getData() {
				axios.get('/api/disc.json')
	            .then(response=> {
	            let result=response.data;
	            this.songs = result.data.songs
	            if(result.ret && result.data){
	                	result.data.recomList.forEach((item,index) => {
	                		if(item.id == this.id){
	                			this.recomImg = item.imgUrl
	                			this.title = item.txt,
	                			this.avatar = item.authImg
	                			this.auth = item.authName
	                		}
	                	})
	                }
	            })
	            .catch(function (error) {
	            console.log(error);
	            });
			},
		}
	}
</script>

<style scoped lang="less">
	.slide-enter-active, .slide-leave-active{
		transition: all 0.3s;
	}
	.slide-enter, .slide-leave-to{
		transform: translate3d(100%,0,0);
	}
	.disc{
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fff;
		.u-plhead{
			position: relative;
			padding: 30px 10px 30px 15px;
			overflow: hidden;
			.plhead-bg{
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				z-index: 1;
				background-size: cover;
				background-position: 50%;
				filter: blur(20px);
				transform: scale(1.5);
				&:after{
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;
					z-index: 1;
					content: '';
					background-color: rgba(0,0,0,.25);
				}
			}
			.plhead-wrap{
				display: flex;
				position: relative;
				z-index: 2;
				.back{
					span{
						color: orange;
						font-size: 30px;
					}
				}
				.plhead-fl{
					width: 126px;
					height: 126px;
					position: relative;
					background: #e2e2e3;
					.u-img{
						width: 100%;
						vertical-align: middle;
					}
				}
				.plhead-fr{
					-webkit-box-flex: 1;
					flex: 1 1 auto;
					width: 1%;
					margin-left: 16px;
					.title{
						padding-top: 1px;
						font-size: 17px;
						line-height: 1.3;
						color: #fefefe;
						height: 44px;
						display: -webkit-box;
						-webkit-box-pack: center;
						overflow: hidden;
						text-overflow: ellipsis;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						word-wrap: break-word;
						word-break: break-all;
						white-space: normal;
						font-weight: 400;
					}
					.auth{
						display: block;
						position: relative;
						margin-top: 20px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						word-break: normal;
						.u-avatar{
							display: inline-block;
							width: 30px;
							height: 30px;
							border-radius: 50%;
							vertical-align: middle;
							margin-right: 5px;
							position: relative;
							color: hsla(0,0%,100%,.7);
							font-size: 14px;
							.u-img{
								border-radius: 50%;
								width: 100%;
								vertical-align: middle;
							}
						}
					}
				}
			}
		}
	}
</style>