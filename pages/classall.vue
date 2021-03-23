<template>
	<view style="background:#fff;padding:20rpx 30rpx;width:100%;box-sizing: border-box;">
		<!-- 一级分类 -->
		<view style="width:100%;padding: 10px 0;border-bottom: 2rpx solid #E6E6E6;" v-for="(item, index) in classall" :key="index">
			<text style="font-size: 18px;margin-top: 20px;">{{item.category_name}}</text>
			<view  style="height: auto;margin-top: 20px;overflow: hidden;" >
				<view @click="Tostudy(item.id,items.id,index,indexs)" v-for="(items,indexs) in item.son" style="color:#4ca8e7 ;border:2rpx solid #4ca8e7; white-space: nowrap;text-overflow: ellipsis;overflow: hidden; width: 20%;height: 25px; background:#fff;border-radius: 20px;font-size: 14px;text-align: center;padding-top:10rpx;float:left;margin: 5px;">{{items.category_name}}</view>
			</view>
		</view>
		<!-- 下级分类 -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				classall:[]
			}},
			onLoad() {
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
				uni.request({
					url:that.REQUEST_URL +'index.php/api/category/index',
					method:"POST",
					data:{},
					success(res) {
						that.classall = res.data.data
						console.log('11',that.classall)
					}
				})
			},
			methods:{
				Tostudy(a_id,b_id,a_index,b_index){
					console.log(a_id,b_id)
					uni.setStorage({
						key:'study',
						data:{
							aid:a_id,
							aindex:a_index,
							bid:b_id,
							bindex:b_index
						}
					})
					uni.switchTab({
						url:'/pages/tabbar/study'
					})
				}
				
			}
	}
</script>

<style>
</style>
