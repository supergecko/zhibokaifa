<template>
	<view>
		<view class="" v-if="list == null" style="color: #6e6e6e;margin: 40rpx;">空空如也...</view>
		<view class="olist" v-else>
			<view class="part" v-for="(item, index) in list" :key="index" @click="toDetail(item.goods_id)">
				<view class="imgbox">
				<image :src="item.head_img" mode="scaleToFill" style="width:210rpx ;height: 260rpx;border-radius: 20rpx;"></image>
				</view>
				<view class="right">
					<view class="name">{{item.nickname}}</view>
					<view class="teacher" v-for="(items,index) in item.info">{{items}}</view>
					<view class="fb">
                        <view></view>
						<!-- <view class="lesson"><image src="../static/time.png"></image>{{item.lesson}}课时</view> -->
						<view class="read flex" @click.stop="cancel(item.id)"><image src="../static/collect_hl.png"></image>取消关注</view>
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
		onLoad(options) {
			console.log(options)
			var that =this
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
			uni.getStorage({
				key:'user',
				success(res) {
					that.user_id = res.data.id
				}
			})
			that.getData()
		},
		methods: {
			getData(){
				var user=uni.getStorageSync('user')
				var that =this
				uni.request({
					url:that.REQUEST_URL + 'index.php/api/user/mycollect',
					method:"POST",
					data:{
						uid:user.id,
						type:2
					},
					success(res) {
						console.log(res)
						that.list = res.data.datas
					}
				})
			},
			toDetail(id){
				console.log(id)
				uni.navigateTo({
					url:'/pages/teacher_detail?did='+id
				})
			},
			cancel(id){
				var that =this
				console.log(id)
				uni.request({
					url:that.REQUEST_URL + 'index.php/api/collect/cancel_collect',
					method:'POST',
					data:{
						id:id
					},
					success(res) {
						console.log(res)
						uni.showToast({
							title:res.data.msg
						})
						that.getData()
						
					}
				})
			}
		}
	}
</script>

<style>
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
		height: 300rpx;
		margin-right: 26rpx;
		border-radius: 12rpx;
		overflow: hidden;
	}
	.part .right{
		width: 390rpx;
	}
	.part .name{
		line-height: 44rpx;
		color: #333;
		height: 36rpx;
		font-size: 18px;
		font-weight: bold;
	}
	.teacher{
		font-size: 30rpx;
		color: #333;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
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
	.read image{
		width: 34rpx;
		height: 34rpx;
	}
</style>
