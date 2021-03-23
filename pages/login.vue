<template>
	<view>
		<view class="logopart">
			<view class="logo imgbox">
				<image src="/static/logo.png"></image>
			</view>
			<view class="logotit">杭峰道场365</view>
		</view>
		<form @submit="formSubmit">
			<view class="formbox">
				<view class="tit">手机号</view>
				<view class="row rowsp fb">
					<input name="tel" placeholder="请输入手机号码" @input="telchange" />
					<!-- <view v-if="showText==true" @click="getCode" class="code">发送验证码</view> -->
					<!-- <view v-else class="code">{{second}}s</view> -->
				</view>
				<view class="tit">密码</view>
				<view class="row">
					<input name="psw" password placeholder="请输入密码" />
				</view>
				<view class="forget fb">
					<text></text>
					<text @click="toForget">忘记密码?</text>
				</view>
				<button class="login" form-type="submit">登录</button>
			</view>
			<view class="login_text" @click="toRegister">没有账号?去注册</view>




		</form>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				imei_code: '',
				second: 60,
				showText: true,
				tel: ''

			}
		},
		onLoad() {

		},
		onShow() { 
			
		},
		methods: {
			toRegister() {
				uni.redirectTo({
					url: '/pages/register'
				})
			},
			toForget() {
				uni.navigateTo({
					url: '/pages/forget'
				})
			},
			telchange(e) {
				this.tel = e.detail.value
			},
			formSubmit: function(e) {
				var warn = "";
				var flag = false;
				var that = this;
				console.log('---------')
				console.log(e.detail.value)
				if (e.detail.value.tel == '') {
					warn = '请输入手机号码'
				} else if (!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))) {
					warn = "手机号格式不正确";
				} else if (e.detail.value.psw == '') {
					warn = '请输入密码'
				} else {
					flag = true;
					// #ifdef APP-PLUS
						var that = this
						// 获取设备信息
						plus.device.getInfo({
							success: function(ee) {
								console.log(ee)
								console.log(ee.imei)
								uni.request({
									url: that.REQUEST_URL + 'index.php/api/user/login',
									method: 'POST',
									data: {
										account: e.detail.value.tel,
										password: e.detail.value.psw,
										mobilecode: ee.imei,
									},
									header: {
										'Content-Type': 'application/x-www-form-urlencoded'
									},
									success: res => {
										console.log(res)
										console.log(that.imei_code)
										if (res.data.code == 200) {
											var ret = res.data.datas
											uni.setStorageSync('user', res.data.datas);
											uni.showToast({
												title: res.data.msg,
												duration: 2000,
												icon: 'none'
											});
											if (res.data.datas.member_status != 0) {
												setTimeout(() => {
													uni.switchTab({
														url: 'tabbar/index'
													})
												}, 2000);
											} else {
												setTimeout(() => {
													uni.redirectTo({
														url: './xufei'
													})
												}, 2000);
											}
								
										} else {
											uni.showToast({
												title: res.data.msg,
												duration: 2000,
												icon: 'none'
											});
										}
									}
								});
							},
							fail: function(e) {
								console.log(e)
							}
						});
					// #endif
					
					// #ifdef H5
						uni.request({
							url: that.REQUEST_URL + 'index.php/api/user/login',
							method: 'POST',
							data: {
								account: e.detail.value.tel,
								password: e.detail.value.psw,
							},
							header: {
								'Content-Type': 'application/x-www-form-urlencoded'
							},
							success: res => {
								console.log(res)
								console.log(that.imei_code)
								if (res.data.code == 200) {
									var ret = res.data.datas
									uni.setStorageSync('user', res.data.datas);
									uni.showToast({
										title: res.data.msg,
										duration: 2000,
										icon: 'none'
									});
									if (res.data.datas.member_status != 0) {
										setTimeout(() => {
											uni.switchTab({
												url: 'tabbar/index'
											})
										}, 2000);
									} else {
										setTimeout(() => {
											uni.redirectTo({
												url: './xufei'
											})
										}, 2000);
									}
						
								} else {
									uni.showToast({
										title: res.data.msg,
										duration: 2000,
										icon: 'none'
									});
								}
							}
						});
					// #endif
					
				}
				if (flag == false) {
					uni.showToast({
						title: warn,
						icon: 'none',
						duration: 2000,
					});
				}
			},

			getCode() {
				var that = this
				if (that.tel == '') {
					uni.showToast({
						title: '请输入手机号码',
						icon: 'none',
						duration: 2000,
					});
					return false
				}
				that.showText = false
				var interval = setInterval(() => {
					let times = Number(that.second) - 1
					that.second = times < 10 ? '0' + times : times //小于10秒补 0
				}, 1000)
				setTimeout(() => {
					clearInterval(interval)
					that.second = 60
					that.showText = true
				}, 60000)
				uni.showLoading({
					title: '正在获取验证码'
				})
				uni.request({
					url: that.ip + 'xxx',
					method: 'POST',
					data: {
						phone: that.tel_value
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						console.log(res)
						if (res.data.status == 1) {
							uni.hideLoading();
							uni.showToast({
								title: '验证码已发送',
								icon: 'none',
								duration: 2000,
							});
							// uni.setStorageSync('code_value', res.data.data.code);
							// uni.setStorageSync('tel_value', res.data.data.phone);
						} else {
							uni.showToast({
								title: res.data.message,
								icon: 'none',
								duration: 2000,
							});
						}
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	.formbox {
		padding: 0 90rpx;
		padding-top: 40rpx;
		box-sizing: border-box;
	}

	.formbox .tit {
		font-size: 26rpx;
		color: #333;
	}

	.formbox .row {
		border-bottom: 1rpx solid #e6e6e6;
		margin-bottom: 30rpx;
	}

	.rowsp .code {
		width: 150rpx;
		height: 56rpx;
		line-height: 56rpx;
		border-radius: 8rpx;
		border: 1rpx solid #4CA8E7;
		text-align: center;
		font-size: 24rpx;
		color: #4CA8E7;
	}

	.rowsp input {
		width: 50%;
	}

	.formbox .row input {
		height: 80rpx;
		font-size: 28rpx;
	}

	.login_text {
		color: #666;
		font-size: 28rpx;
		position: fixed;
		bottom: 40rpx;
		left: 0;
		width: 100%;
		text-align: center;
	}

	.forget {
		font-size: 28rpx;
		color: #666;
	}

	.login {
		background-color: #4CA8E7;
		color: #fff;
		font-size: 30rpx;
		margin-top: 50rpx;
		height: 84rpx;
		line-height: 84rpx;
	}
</style>
