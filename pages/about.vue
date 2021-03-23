<template>
	<view style="padding:10px;">
		<view class="ground">
			<map class="map" :longitude="data.jing" :latitude="data.wei" :scale="18"></map>
			<view class="value">
				<rich-text :nodes="data.content"></rich-text>
			</view>
			<view class="bottom">
				<view class=""><text>公司地址：{{data.company_address}}</text></view>
				<view class=""><text>联系方式：{{data.company_phone}}</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:''
				
			}
		},
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
				url:that.REQUEST_URL + 'index.php/api/about/aboutus',
				method:"POST",
				data:{},
				success(res) {
					console.log(res)
				that.data = res.data.datas
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>
	page {
	  background-color:#f4f4f4;
	}
	.ground{
		background:#fff;
		padding:20px;
	}
	.map{
		width:100%;
		height:240px;
	}
	.value{
		margin-top:10px;
		font-size: 16px;
		line-height: 24px;
	}
	.bottom{
		margin-top:20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
