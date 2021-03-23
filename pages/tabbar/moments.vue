<template>
	<view class="app">

		<view class="list">
			<view class="part " v-for="(item, index) in list" :key="index">
				<view class="fb">
					<view class="user">
						<image :src="item.head_img"></image>{{item.nickname}}
					</view>
					<view class="time">{{item.addtime}}</view>
				</view>
				<view class="content" @click="toDetail(item.id)">
					<view>{{item.content}}</view>
					<view class="imgrow" v-if="item.imgs !=''">
						<image @click.stop="prew(items,item.imgs)" :src="src+items" class="imgbox" v-for="(items, index) in item.imgs" :key="index"></image>
					</view>
				</view>
				
				<!-- <image v-if="item.imgs !=null" src="item.img" style="mergin:0 auto;width:100px;height:100px;"></image> -->
				<!-- <view class="btnrow fb" @click="tolike(item.id)" @click.stop="toDetail"> -->
				<view class="btnrow fb">
					<view class="forward" @click="toshare(item.id)">
						<image src="/static/forward.png"></image>{{item.fenxiang_num}}
					</view>
					<view class="forward" @click="toDetail(item.id)">
						<image src="/static/comment.png"></image>{{item.huifu_num}}
					</view>
					<view @click="tolike(item.id)" :class="item.zan_status==1?'forward red':'forward' ">
						<image :src="item.zan_status==1?'/static/like_hl.png':'/static/like.png'"></image>{{item.zan_num}}
					</view>
				</view>
			</view>
		</view>
	<image class="send" @click="sendSS" src="../../static/tosend.png"></image>
		<view style="height: 130rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				src:''
			}
		},
		onShow() {
			var that = this
			// #ifdef H5
			// if (uni.getStorageSync('user').id) {
			// 	uni.request({
			// 		url: that.REQUEST_URL + 'index.php/api/user/checkuserlogin',
			// 		method: 'POST',
			// 		header: {
			// 			'Content-Type': 'application/x-www-form-urlencoded'
			// 		},
			// 		data: {
			// 			id: uni.getStorageSync('user').id,
			// 		},
			// 		success: res => {
			// 			if (res.data== 0) {
			// 				uni.showToast({
			// 					title: '您的账号已在别处登录或登录超时',
			// 					icon: 'none',
			// 					duration: 2000,
			// 				})
			// 				setTimeout(() => {
			// 					uni.clearStorageSync();
			// 					uni.reLaunch({
			// 					    url: '/pages/login'
			// 					})
			// 				}, 2000)
			// 				return false
			// 			} 
			// 		}
			// 	});
			// }
			// #endif
			that.getData()
		},
		onLoad(options) {
			var that = this
			this.src=this.REQUEST_URL
			that.getData()
		},
		onPullDownRefresh: function() {
			var that = this
			that.getData()
		},
		methods: {
			share(){
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href: '',
				    title: '洵子教育',
				    summary: '详细标题',
				    imageUrl: 'jpg',
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
				
			},
			sendSS() {
				uni.navigateTo({
					url: '/pages/sendss'
				})
			},
			prew(url,arr){
				var arr=arr
				var urls=[]
				//预览图片
				for(var i=0;i<arr.length;i++){
					urls.push(this.src+arr[i])
				}
				uni.previewImage({
					urls: urls,
					current: this.src+url
				});
			},
			getData() {
				var userid=uni.getStorageSync('user').id
				var that = this
				uni.request({
					url: that.REQUEST_URL + 'index.php/api/shuoshuo/lists',
					method: "POST",
					data: {
						user_id:userid
					},
					success: res => {
						uni.stopPullDownRefresh()
						console.log(res)
						that.list = res.data.data
					}
				})
			},
			tolike(id) {
				console.log(id)
				var user_id=uni.getStorageSync('user').id
				var that=this
				uni.request({
					url:that.REQUEST_URL+'index.php/api/collect/add_dianzan',
					method:"POST",
					data:{
						user_id:user_id,
						shuoshuo_id:id
					},
					success(res) {
						console.log('点赞',res)
						that.getData()
						uni.showToast({
							title:res.data.msg,
							icon:'none',
							duration:2000,
						})
					}
				})
			},
			toshare(id){
				var that=this
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href: that.REQUEST_URL+"xunzi365-app.apk",
				    title: "洵子教育365",
				    summary: '洵子教育',
				    imageUrl: "/static/logo.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
						uni.request({
							url:that.REQUEST_URL+'index.php/api/shuoshuo/fenxiang',
							method:"POST",
							data:{
								sid:id
							},
							success(res) {
							}
						})
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
				
			},
			toDetail(id) {
				console.log(id)
				var that = this
				uni.getStorage({
					key: 'user',
					success(res) {
						if (res.data.id == '' || res.data.id == null) {
							uni.showToast({
								title: "请先登录",
							})
						} else {
							uni.navigateTo({
								url: '/pages/comment?id=' + id
							})
						}
					}
				})

			},
			// getData(){

			// },
		}
	}
</script>

<style>
	.imgrow{
		margin-top: 20rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.imgrow image{
		width: 120rpx;
		height: 120rpx;
		margin: 20rpx;
	}
	page {
		height: 100%;
		background-color: #f5f5f5;
	}
.send{
	width: 96rpx;
	height: 96rpx;
	border-radius: 50%;
	position: fixed;
	bottom: 30rpx;
	bottom: var(--window-bottom);
	margin-bottom: 30rpx;
	right: 30rpx;
	z-index: 99;
}
.send image{
	width: 100%;height: 100%;
}
	.part {
		width: 100%;
		background-color: #fff;
		margin-bottom: 20rpx;
		padding: 25rpx;
		box-sizing: border-box;
	}

	.user {
		display: flex;
		align-items: center;
		font-size: 30rpx;
		color: #06437e;
	}

	.user image {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
		margin-right: 16rpx;
	}

	.time {
		font-size: 22rpx;
		color: #999;
	}

	.content {
		padding: 20rpx;
		padding-left: 86rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		color: #000;
	}

	.btnrow {
		padding-left: 86rpx;
		box-sizing: border-box;
		margin-top: 20rpx;
		font-size: 28rpx;
		color: #666;
	}

	.forward {
		display: flex;
		align-items: center;
	}

	.forward image {
		width: 40rpx;
		height: 40rpx;
		margin-right: 4rpx;
	}

	.red {
		color: #e74f38;
	}
</style>
