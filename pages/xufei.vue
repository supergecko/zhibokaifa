<template>
	<view>
		<view class="imgbox">
			<image style="width: 100%;" class="bann" src="../static/banner1.png"></image>
		</view>
		<view class="paybox">
			<view class="title">购买{{date.group_name}}</view>
			<view @click="changePayType(1)" class="orow ">
				<image class="icon" src="../static/wxpay.png"></image>
				微信支付{{date.price}}　
				<image v-if="payType == 1" class="yes" src="../static/yes.png"></image>
			</view>
			<view @click="changePayType(2)" style="margin-top:20rpx;" class="orow ">
				<image class="icon" src="../static/ali.png"></image>
				支付宝支付{{date.price}}　
				<image v-if="payType == 2" class="yes" src="../static/yes.png"></image>
			</view>
			<view class="login paybtn" @click="topay">注册成为会员</view>
		</view>
		
			<view style="height: 90rpx;"></view>
			<view class="login_text" @click="exit">退出账号</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				payType: 1,
				date:''
			}
		},
		onShow() {
			var that=this
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
			// 获取会员价格
			uni.request({
				url: that.REQUEST_URL + 'index.php/api/user/xufei',
				method: 'post',
				success(res) {
					that.date=res.data.datas[0]
				}
			})
			
		},
		methods: {
			changePayType(type) {
				var that=this;
				that.payType = type;
			},
			exit() {
			    uni.showModal({
			        title: '提示',
			        content: '确定退出?',
			        complete(res) {
			            console.log(res);
			            if (res.confirm) {
			                uni.clearStorageSync();
			                uni.reLaunch({
			                    url: '/pages/login'
			                })
			            }
			        }
			    })
			},
			topay() {
				var that = this
				var user = uni.getStorageSync('user')
				console.log(that.payType)
				// #ifdef APP-PLUS
				     console.log('app---------------')
					 var payType=''
					 if (that.payType == 1) {
					 	payType = 'wxpay';
					 	uni.request({
					 		url: that.REQUEST_URL + 'index.php/api/pay/buymember',
					 		// url: that.appurl + 'index.php/api/wxpay/wxpaytest',
					 		method: 'post',
					 		data: {
					 			uid: user.id,
					 			gid: 1,
					 			type: 2
					 		},
					 		success(res) {
					 			uni.hideLoading()
					 			console.log(res.data)
					 			var orderInfo=res.data
					 			// var orderInfo=JSON.parse(res.data)
					 			uni.requestPayment({
					 			    provider: 'wxpay',
					 				orderInfo: orderInfo,
					 			    success: function (res) {
					 					uni.showToast({
					 						title: '支付成功',
					 						icon: 'none',
					 						duration: 2000,
					 						complete() {
					 							setTimeout(() => {
												uni.switchTab({
													url: '/pages/tabbar/index'
												})
											}, 2000)
					 						}
					 					})
					 			        console.log('success:' + JSON.stringify(res));
					 			    },
					 			    fail: function (err) {
					 			    	uni.showToast({
					 			    		title: JSON.stringify(err)+'…',
					 			    		icon: 'none',
					 			    		duration: 2000,
					 			    	})
					 			        console.log('fail:' + JSON.stringify(err));
					 			    }
					 			});
					 	
					 		}
					 	})
					 } else if (that.payType == 2) {
					 	payType = 'alipay';
					 	uni.request({
					 		url: that.REQUEST_URL + 'index.php/api/pay/buymember',
					 		method: 'post',
					 		data: {
					 			uid: user.id,
					 			gid:1,
					 			type: 1
					 		},
					 		success(res) {
					 			uni.hideLoading()
					 			var orderInfo = res.data
					 			uni.requestPayment({
					 				provider: 'alipay',
					 				orderInfo: orderInfo,
					 				success: function(res) {
					 					uni.showToast({
					 						title: '支付成功',
					 						icon: 'none',
					 						duration: 2000,
					 						complete() {
					 							setTimeout(() => {
					 								uni.switchTab({
					 									url: '/pages/tabbar/index'
					 								})
					 							}, 2000)
					 						}
					 					})
					 					console.log('success:' + JSON.stringify(res));
					 				},
					 				fail: function (err) {
					 					uni.showToast({
					 						title: JSON.stringify(err)+'…',
					 						icon: 'none',
					 						duration: 2000,
					 					})
					 				    console.log('fail:' + JSON.stringify(err));
					 				}
					 			});
					 			
					 		}
					 	})
					 }
				    // #endif
				    
				    // #ifdef H5
				     console.log('h55---------------')
					 var payType=''
					 if (that.payType == 1) {
					 	payType = 'wxpay';
					 	uni.request({
					 		url: that.REQUEST_URL + 'index.php/api/pay/buymember',
					 		// url: that.appurl + 'index.php/api/wxpay/wxpaytest',
					 		method: 'post',
					 		data: {
					 			uid: user.id,
					 			gid: 1,
					 			type: 2,
								client:1
					 		},
					 		success(res) {
					 			uni.hideLoading()
					 			console.log(res.data)
								var od = res.data.odsn
								location.href=res.data.mweb_url;
								uni.showModal({
									confirmText:"已支付",
									content:"是否支付？",
									success(res) {
										uni.request({
											url:that.REQUEST_URL + 'index.php/api/wxpay/inquiryWxH5',
											method:"POST",
											data:{
												odsn:od
											},
											success(ret) {
												if (ret.data.data.code == 1){
													uni.switchTab({
														url:'/pages/tabbar/index'
													})
												}else{
													uni.showToast({
														title:'支付失败'
													})
												}
											}
											
										})
									}
								})
					 			// var orderInfo=res.data
					 			// uni.requestPayment({
					 			//     provider: 'wxpay',
					 			// 	orderInfo: orderInfo,
					 			//     success: function (res) {
					 			// 		uni.showToast({
					 			// 			title: '支付成功',
					 			// 			icon: 'none',
					 			// 			duration: 2000,
					 			// 			complete() {
					 			// 				setTimeout(() => {
					 			// 					uni.switchTab({
					 			// 						url: '/pages/tabbar/index'
					 			// 					})
					 			// 				}, 2000)
					 			// 			}
					 			// 		})
					 			//         console.log('success:' + JSON.stringify(res));
					 			//     },
					 			//     fail: function (err) {
					 			//         console.log('fail:' + JSON.stringify(err));
					 			//     }
					 			// });
					 	
					 		}
					 	})
					 } else if (that.payType == 2) {
					 	payType = 'alipay';
					 	uni.request({
					 		url: that.REQUEST_URL + 'index.php/api/pay/buymember',
					 		method: 'post',
					 		data: {
					 			uid: user.id,
					 			gid: 1,
					 			type: 1,
								client:1
					 		},
					 		success(res) {
					 			uni.hideLoading()
					 			var orderInfo = res.data
								document.querySelector('body').innerHTML = orderInfo;
								document.forms[0].submit()
								// document.forms['alipaysubmit'].submit() 
					 			// uni.requestPayment({
					 			// 	provider: 'alipay',
					 			// 	orderInfo: orderInfo,
					 			// 	success: function(res) {
					 			// 		uni.showToast({
					 			// 			title: '支付成功',
					 			// 			icon: 'none',
					 			// 			duration: 2000,
					 			// 			complete() {
					 			// 				setTimeout(() => {
											// 	uni.switchTab({
											// 		url: '/pages/tabbar/index'
											// 	})
											// }, 2000)
					 			// 			}
					 			// 		})
					 			// 		console.log('success:' + JSON.stringify(res));
					 			// 	},
					 			// 	fail: function(err) {
					 			// 		console.log('fail:' + JSON.stringify(err));
					 			// 	}
					 			// });
					 			
					 		}
					 	})
					 }
				    // #endif


			}



		}
	}
</script>

<style>
	.title{
		font-size: 32rpx;
		color: #333;
		line-height: 60rpx;
		margin-bottom: 30rpx;
	}
	.tit {
		font-size: 30rpx;
		color: #333;
		text-align: center;
		padding-top: 40rpx;
	}

	.topay {
		width: 300rpx;
		height: 72rpx;
		border-radius: 36rpx;
		text-align: center;
		line-height: 72rpx;
		color: #fff;
		background-color: #4CA8E7;
		background-image: linear-gradient(to bottom, #4CA8E7, #2997e2);
		margin: 40rpx auto;
		font-size: 28rpx;
	}

	.imgbox {
		width: 100%;
		height: 380rpx;
	}
	
	.paybtn{
		background-color: #4CA8E7;
		background-image: linear-gradient(to bottom, #4CA8E7, #2997e2);
	}
	.yes{
	    width:30rpx;
	    height:30rpx;
	    margin-left:20rpx;
	}
	.login {
		background-color: #4CA8E7;
		color: #fff;
		font-size: 30rpx;
		margin-top: 50rpx;
		height: 84rpx;
		line-height: 84rpx;
		text-align: center;
		border-radius: 10rpx;
	}
	.login_text {
		color: #666;
		font-size: 28rpx;
		position: fixed;
		bottom: 40rpx;
		height: 30rpx;
		left: 0;
		width: 100%;
		text-align: center;
		background-color: #fff;
	}
	.paybox{
		font-size: 28rpx;
		color: #666;
		padding: 30rpx 100rpx;
		box-sizing: border-box;
	}
	.orow{
		display: flex;
		align-items: center;
	}
	.orow .icon{
		width: 58rpx;
		height: 58rpx;
		margin-right: 8rpx;
	}
</style>
