<template>
	<view class="app">
		<view class="olist">
			<view class="part" v-for="(item, index) in list" :key="index" @click="toDetail(item.id)">
				<view class="imgbox"><image mode="aspectFill" :src="item.img"></image></view>
				<view class="right">
					<view class="name ovh">{{item.title}}</view>
                    <view style="font-size:25rpx;color:#666666;">{{item.start_time}}</view>
					<view class="fb">
						<view class="lesson" style="width: 50%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
							<image style="min-width: 34rpx;" src="../../static/teacher.png"></image>
							<text style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width: 130rpx;">{{item.real_name}}</text>
						</view>
						<view  class="read">{{item.pay_num}}人观看</view>
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
				list:[],
			}
		},
		methods: {
			getData(){
				var that = this;
				uni.request({
				    url:that.REQUEST_URL + 'index.php/api/live/live_lists',
				    method:'post',
				    data:{},
				    success(res){
						uni.stopPullDownRefresh()
				        console.log(res);
				        if (res.data.code == 1) {
				            for (var i = 0; i < res.data.data.length; i++) {
				                res.data.data[i].img = that.REQUEST_URL + res.data.data[i].photo;
				            }
				            that.list = res.data.data;
				        }
				    }
				})
			},
			toDetail(id){
				console.log(id);
                uni.navigateTo({
                    url:'/pages/live_detail?id=' + id
                })
			},
		},
		onPullDownRefresh: function() {
			var that = this
			that.getData()
		},
        onLoad(){
            
        },
        onShow(){
            var that = this;
			// #ifdef H5
			if (uni.getStorageSync('user').id) {
				uni.request({
					url: that.REQUEST_URL + 'index.php/api/user/checkuserlogin',
					method: 'POST',
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data: {
						id: uni.getStorageSync('user').id,
					},
					success: res => {
						if (res.data== 0) {
							uni.showToast({
								title: '您的账号已在别处登录或登录超时',
								icon: 'none',
								duration: 2000,
							})
							setTimeout(() => {
								uni.clearStorageSync();
								uni.reLaunch({
								    url: '/pages/login'
								})
							}, 2000)
							return false
						} 
					}
				});
			}
			// #endif
           that.getData()
        }
	}
</script>

<style>
	.olist{
		width: 710rpx;
		margin: 20rpx auto;
		display: flex;
		flex-wrap: wrap;
	}
	.part{
		width: 50%;
		padding: 0 10rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		margin-bottom: 30rpx;
		padding-bottom: 20rpx;
		border-bottom: 1rpx solid #e6e6e6;
	}
	.part .imgbox{
		width: 100%;
		height: 335rpx;
		margin-right: 26rpx;
		border-radius: 12rpx;
		overflow: hidden;
	}
	.part .right{
		width: 100%;
	}
	.part .name{
		font-size: 30rpx;
		line-height: 44rpx;
		color: #333;
		/* height: 88rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden; */
		margin-bottom: 10rpx;
		margin-top: 10rpx;
	}
	
	.part .lesson{
		font-size: 28rpx;
		color: #333;
		font-weight: bold;
		display: flex;
		align-items: center;
	}
	.part .lesson image{
		width: 34rpx;
		height: 34rpx;
		margin-right: 4rpx;
	}
	.part .read{
		font-size: 22rpx;
		color: #999;
	}
</style>
