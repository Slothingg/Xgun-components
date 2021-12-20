<template>
	<view class="xg-media-box">
		<view class="xg-media-head">
			<view class="xg-media-head-avatar">
				<img :src="item.avatar" v-if="item.avatar" class="avatar" @click.stop="toUser">
				<svg v-else fill="currentColor" class="avatar" viewBox="0 0 16 16" @click.stop="toUser">
					<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
					<path fill-rule="evenodd"
						d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
				</svg>
			</view>
			<view class="xg-media-head-user">
				<view class="username" :style="'color:'+ theme " @click.stop="toUser">
					{{item.username}}
				</view>
				<view class="time sub">
					{{item.time}}
				</view>
			</view>
			<view class="xg-media-head-buttom" @click.stop="follow"> 
				<view class="buttom" :style="(theme != '' ? 'background:'+ theme+';color:white' : '')" v-show="!item.already_follow">关注</view>
				<view class="buttom on" v-show="item.already_follow">已关注</view>
			</view>
		</view>
		<view class="xg-media-content">
			<span class="content" v-html="item.content ? item.content : '暂无内容'"></span>
		</view>
		<slot name="media"></slot>
		<view class="comment" @click.stop="chat" v-if="item.comment">
			<svg fill="currentColor" class="svg" viewBox="0 0 16 16">
			  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
			  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
			</svg>
			<view class="comment-content">
				<span class="comment-user">{{item.comment.username}}:</span>
				{{item.comment.content}}
			</view>
		</view>
		<view class="xg-media-foot" :style="'color:'+ theme " v-if="!order_tools">
			<view class="tools" @click.stop="zan">
				<svg fill="currentColor" class="svg" viewBox="0 0 16 16" v-show="!item.already_zan">
				  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
				</svg>
				<svg class="svg" fill="currentColor" viewBox="0 0 16 16" v-show="item.already_zan">
				  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
				</svg>
				<span>{{item.num_zan}}</span>
			</view>
			<view class="tools" @click.stop="chat">
				<svg fill="currentColor" class="svg" viewBox="0 0 16 16" v-show="!item.already_chat">
				  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
				  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
				</svg>
				<svg fill="currentColor" class="svg" viewBox="0 0 16 16" v-show="item.already_chat">
				  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
				</svg>
				<span>{{item.num_chat}}</span>
			</view>
			<view class="tools" @click.stop="share">
				<svg fill="currentColor" class="svg" viewBox="0 0 16 16" v-show="!item.already_share">
				  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
				</svg>
				<svg class="svg" fill="currentColor" viewBox="0 0 16 16" v-show="item.already_share">
				  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
				</svg>
				<span>{{item.num_share}}</span>
			</view>
		</view>
		<slot name="tools" class="xg-media-foot" v-else></slot>
	</view>
</template>

<script>
	export default {
		name: "media",
		data() {
			return {

			};
		},
		props: {
			item: {
				type: Object,
				default: function() {
					return {
						avatar: '',
						time: '',
						username: '',
						already_follow: false,
						content: '',
						already_zan:false, //是否已经点赞
						num_zan:0,
						already_chat:false,
						num_chat:0,
						already_share:false,
						num_share:0,
						comment:{
							username:'',
							content:''
						}
					}
				}
			},
			theme:{
				type:String,
				default:''
			},
			order_tools:{
				type:Boolean,
				default:false
			}
		},
		methods: {
			follow() {
				if(this.item.already_follow){
					this.$emit("cancel_follow", this.item)
					this.item.already_follow = !this.item.already_follow
				}else{
					this.$emit("follow", this.item)
					this.item.already_follow = !this.item.already_follow
				}
			},
			toUser() {
				this.$emit("toUser", this.item)
			},
			zan(){
				if(this.item.already_zan){
					this.$emit("cancel_zan", this.item)
					this.item.num_zan --;
					this.item.already_zan = !this.item.already_zan;
				}else{
					this.$emit("zan", this.item)
					this.item.num_zan ++;
					this.item.already_zan = !this.item.already_zan;
				}
			},
			chat(){
				this.$emit("chat",this.item)
			},
			share(){
				this.$emit("share",this.item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.xg-media-box {
		width: 750rpx;
		box-sizing: border-box;
		background-size: 100% 100%;
		padding: 10rpx;
	}

	.xg-media-box .xg-media-head {
		width: 100%;
		height: 120rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
	}

	.xg-media-head-avatar {
		width: 20%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.xg-media-head-avatar .avatar {
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
		overflow: hidden;
	}

	.xg-media-head-user {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 50%;
		height: 100%;
		font-size: 0.8rem;
		color: #17233d;
	}

	.xg-media-head-user .sub {
		font-size: 0.2rem;
		color: #808695;
	}

	.xg-media-head-buttom {
		width: 30%;
		height: 100%;
		margin-right: 15rpx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.xg-media-head-buttom .buttom {
		width: 140rpx;
		height: 64rpx;
		line-height: 64rpx;
		text-align: center;
		border-radius: 40rpx;
		border: solid 1px;
		font-size: 0.3rem;
	}
	.xg-media-head-buttom .on{
		border: solid 1px;
		color: #c5c8ce;
	}
	.xg-media-content {
		padding-left: 1rem;
		width: 100%;
		padding-bottom: 0.5rem;
		padding-top: 0.5rem;
	}
	.xg-media-content .content{
		width: 90%;
		height: auto;
		display: inline-block;
		word-break: break-all;
		text-overflow: ellipsis;
		word-wrap: break-word;
		white-space: pre-wrap;
	}

	.xg-media-box .comment{
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		min-height: 48rpx;
		width: 90%;
		margin-left: 1rem;
		border-left: solid 2px #b4b4b4;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}
	.xg-media-box .comment .svg{
		width: 24px;
		height: 24px;
		color: #4a4a4a;
		margin-left: 20rpx;
		margin-right: 20rpx;
	}
	.xg-media-box .comment .comment-content{
		max-height: 96rpx;
		width: 100%;
		display: inline-block;
		word-break: break-all;
		text-overflow: ellipsis;
		word-wrap: break-word;
		white-space: pre-wrap;
		overflow:hidden;
	}
	.xg-media-box .comment .comment-content .comment-user{
		font-weight: bold;
		margin-right: 20rpx;
	}
	
	.xg-media-foot{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100rpx;
		justify-content: flex-start;
		align-items: center;
	}
	.xg-media-foot .tools{
		width: 33%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.xg-media-foot .tools .svg{
		width: 40%;
		height: 40%;
	}
</style>

<style scoped>
	@media screen and (min-width:750px) {
		.xg-media-box .xg-media-head {
			height: 180rpx;
		}
	}
</style>
