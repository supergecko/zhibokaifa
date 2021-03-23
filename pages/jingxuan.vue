<template>
	<view class="">
<!-- 	<view class="box" v-for="(item,index) in list" :key="index" @click="toTeacher_detail(item.id)">
		<image :src="item.head_img" mode="scaleToFill" style="width:240rpx ;height: 300rpx;border-radius: 20rpx;"></image>
		<view class="right" style="margin-top: 20rpx;">
			<view class="name">{{item.nickname}}</view>
			<view class="info">{{item.info}}</view>
			<view class="guanzhu">41人关注</view>
		</view>
	</view> -->
	<view class="olist">
		<view class="part" v-for="(item, index) in list" :key="index" @click="toTeacher_detail(item.id)">
			<view class="imgbox"><image mode="aspectFill" :src="item.photo"></image></view>
			<view class="right">
				<view class="name">{{item.title}}</view>
				<view class="teacher">{{item.writer}}</view>
				<view class="fb">
					<!-- <view class="lesson"><image src="../../static/time.png"></image>{{item.lesson}}课时</view> -->
					<view class="read">{{item.views}}人阅读</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad(options) {
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
			that.getList()
		},
		methods: {
			getList(){
				var that =this
				uni.request({
					url:that.REQUEST_URL + 'index.php/api/Daka/jingxuan_lists',
					method:"POST",
					data:{},
					success(res) {
						console.log(res)
						that.list = res.data.data
					}
				})
			},
			toTeacher_detail(id){
				console.log(id)
				uni.navigateTo({
					url:'/pages/detail?id='+id
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #f5f5f5;
	}
.olist{
		width: 690rpx;
		margin: 20rpx auto;
	}
	.part{
		display: flex;
		margin-bottom: 30rpx;
		padding-bottom: 20rpx;
		border-bottom: 1rpx solid #cbcbcb;
	}
	.part .imgbox{
		width: 270rpx;
		height: 210rpx;
		margin-right: 26rpx;
		border-radius: 12rpx;
		overflow: hidden;
	}
	.part .right{
		width: 390rpx;
	}
	.part .name{
		font-size: 30rpx;
		line-height: 44rpx;
		color: #333;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.teacher{
		font-size: 30rpx;
		color: #333;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		height: 36rpx;
	}
	.part .lesson{
		font-size: 28rpx;
		color: #333;
		display: flex;
		align-items: center;
	}
	.part .lesson image{
		width: 30rpx;
		height: 30rpx;
		margin-right: 4rpx;
	}
	.part .read{
		font-size: 26rpx;
		color: #999;
	}


</style>
