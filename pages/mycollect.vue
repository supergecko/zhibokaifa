<template>
	<view>
		<view class="" v-if="date == null" style="color: #6e6e6e;margin: 40rpx;">空空如也...</view>
		<view class="olist" v-else>
			<view class="part" v-for="(item, index) in date" :key="index" @click="toDetail(item.id)">
				<view class="imgbox"><image mode="aspectFill" :src="item.photo"></image></view>
				<view class="right">
					<view class="name">{{item.title}}</view>
					<view class="teacher">{{item.writer}}</view>
					<view class="fb">
						<view class="lesson"><image src="../static/time.png"></image>观看次数{{item.views}}</view>
						<view class="read flex" @click.stop="cancel(item.id)"><image src="../static/collect_hl.png"></image>取消收藏</view>
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
				date:"",
				list:[
					{id:'1',img:'/static/ex.jpg',name:'少时诵诗书少时诵诗书所是是是',teacher:'王教授',lesson:'20',read:'1202'},
					{id:'1',img:'/static/ex.jpg',name:'少时诵诗书少时诵诗书所是是是',teacher:'王教授',lesson:'20',read:'1202'},
					{id:'1',img:'/static/ex.jpg',name:'少时诵诗书少时诵诗书所是是是',teacher:'王教授',lesson:'20',read:'1202'},
				],
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
				var that =this
				var user=uni.getStorageSync('user')
				uni.request({
					url:that.REQUEST_URL + 'index.php/api/user/mycollect',
					method:"POST",
					data:{
						uid:user.id,
						type:1
					},
					success(res) {
						console.log(res)
						that.date = res.data.datas
					}
				})
			},
			cancel(id){
				var that =this
				console.log(id)
				uni.request({
					url:that.REQUEST_URL + 'index.php/api/collect/cancel_collect',
					method:"POST",
					data:{
						id:id
					},
					success(res){
						console.log(res)
						if(res.data.code == 200){
							uni.showToast({
								title:'取消成功'
							})
						}else{
							uni.showToast({
								title:'取消失败'
							})
						}
						that.getData()
					}
				})
			},
			toDetail(id){
				console.log(id)
				uni.navigateTo({
					url:'/pages/detail?id='+id
				})
			},
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
	.read image{
		width: 34rpx;
		height: 34rpx;
	}
</style>
