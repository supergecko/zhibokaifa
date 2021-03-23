<template>
	<view class="bady">
		<rich-text :nodes="strings"></rich-text>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				strings:""
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
			console.log('接收id',options)
			uni.request({
				url:that.REQUEST_URL+'index.php/api/about/word',
				method:"POST",
				data:{
					id:options.id
				},
				success(res) {
					console.log(res)
					that.strings = res.data.datas.content
					
				}
			})
		},
		methods:{
			
		}
	}
	
</script>

<style>
	.bady{
		width: 100%;
		padding: 20px;
	}
</style>
