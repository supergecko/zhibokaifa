<template>
	<view>
		<view class="" v-if="list.length==0" style="color: #6e6e6e;margin: 40rpx;text-align: center;">空空如也...</view>
		<view class="olist" v-else>
			<!-- <view class="part" v-for="(item, index) in list" :key="index" @click="toDetail(item.goods_id)">
				<view class="imgbox">
				<image :src="item.photo" mode="scaleToFill" style="width:210rpx ;height: 260rpx;border-radius: 20rpx;"></image>
				</view>
				<view class="right">
					<view class="name">{{item.title}}</view>
					<view class="teacher" v-for="(items,index) in item.info" :key="index">{{items}}</view>
					<view class="fb">
                        <view></view>
						<view class="lesson"><image src="../static/time.png"></image>{{item.lesson}}课时</view>
						<view class="read flex" @click.stop="cancel(item.id)"><image src="../static/collect_hl.png"></image>取消关注</view>
					</view>
				</view>
			</view> -->
			
			<view class="part" v-for="(item, index) in list" :key="index" @click="toDetail(item.goods_id)">
				<view class="imgbox">
					<image :src="item.photo" mode="scaleToFill" style="width:160rpx ;height: 160rpx;border-radius: 20rpx;"></image>
				</view>
				<view class="name">{{item.title}}</view>
				<view class="fb" @click.stop="cancel(item.id)">
					<view class="read flex" ><image src="../static/collect_hl.png"></image>取消关注</view>
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
			that.getData()
		},
		methods: {
			getData(){
				let data = {
					uid:uni.getStorageSync('user').id,
					type:2
				}
				this.$H.post('/user/mycollect', data).then(res => {
					console.log(res.datas)
					this.list = res.datas
				}).catch(err => {
					console.log(err)
				})
			},
			toDetail(id){
				console.log(id)
				uni.navigateTo({
					url:'/pages/teacher_detail?did='+id
				})
			},
			cancel(id){
				let data = {
					uid:uni.getStorageSync('user').id,
					liveid:id
				}
				this.$H.post('/user/f_live', data).then(res => {
					console.log(res)
					this.getData()
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	.olist{
		width: 690rpx;
		margin: 0 auto;
	}
	.part{
		display: flex;
		border-bottom: 1rpx solid #cbcbcb;
		justify-content: space-around;
		align-items: center;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}
	.part .imgbox{
		height: 160rpx;
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
