<template>
	<view>
		<view class="logopart">
			<view class="logo imgbox">
				<image src="/static/logo.png"></image>
			</view>
			<view class="logotit">洵子教育365</view>
		</view>
		<view class="main">
			<form @submit="formSubmit">
				<view class="formbox page1" :class="page1?'':'option'">
					<!-- <view class="formbox page1" :class="!page1?option:''" v-if="page1"> -->
					<view class="tit">手机号</view>
					<view class="row rowsp fb">
						<input class="tel" name="tel" placeholder="请输入手机号码" @input="telchange" />
						<view v-if="showText==true" @click="getCode" class="code">发送验证码</view>
						<view v-else class="code">{{second}}s</view>
					</view>
					<view class="tit">验证码</view>
					<view class="row">
						<input name="code" placeholder="请输入验证码" />
					</view>
					<view class="tit">密码</view>
					<view class="row">
						<input type="password" name="psw" placeholder="请设置您的密码" />
					</view>
					<view class="tit">重复密码</view>
					<view class="row">
						<input type="password" name="repsw" placeholder="请重复您的密码" />
					</view>
					<view class="tit">邀请码</view>
					<view class="row">
						<input type="text" name="invite" placeholder="请输入邀请码" />
					</view>
					<view class="login" @click="topage2">下一步</view>
					<!-- <button class="login" form-type="submit">注册</button> -->
				</view>


				<view class="formbox page2" v-if="page2">

					<view class="tit">真实姓名</view>
					<view class="row">
						<input name="realname" placeholder="请输入真实姓名" />
					</view>
					<view class="tit">性别</view>
					<view class="row flex sexbox">
						<radio-group name="sex">
							<label class="radio">
								<radio name="sex" value="1" checked="true" color="#4CA8E7" />男</label>
							<label class="radio">
								<radio name="sex" value="2" color="#4CA8E7" />女</label>
						</radio-group>
					</view>
					<view class="tit">所在地</view>
					<view class="row addrpick fb">
						<picker name="a1" @change="bindPickerChange1" :value="index1" :range="addr1" :range-key="'areaName'">
							<view class="uni-input">{{flag1?addr1[index1].areaName:'请选择-省'}}</view>
						</picker>
						<picker name="a2" @change="bindPickerChange2" :value="index2" :range="addr2" :range-key="'areaName'">
							<view class="uni-input">{{flag2?addr2[index2].areaName:'请选择-市'}}</view>
						</picker>
						<picker name="a3" @change="bindPickerChange3" :value="index3" :range="addr3" :range-key="'areaName'">
							<view class="uni-input">{{flag3?addr3[index3].areaName:'请选择-区'}}</view>
						</picker>
					</view>
					<view class="tit">详细地址</view>
					<view class="row">
						<input name="address" placeholder="请输入详细地址" />
					</view>
					<view class="tit">所属身份</view>
					<view class="row">
						<picker name="char" @change="bindPickerChange4" :value="index4" :range="iden" :range-key="'name'">
							<view class="uni-input">{{flag4?iden[index4].name:'请选择'}}</view>
						</picker>
					</view>


					<!-- <button class="login"  form-type="submit">下一步</button> -->
					<view class="fb" style="margin: 0;margin-top: 50rpx;">
						<view class="login" style="width: 46%;margin: 0;" @click="retpage2">上一步</view>
						<button class="login" style="width: 46%;margin: 0;" form-type="submit">下一步</button>
					</view>

					<!-- <button class="login" form-type="submit">注册</button> -->
				</view>

				<view class="formbox page3" v-if="page3">

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
				<view class="login_text" @click="toLogin">已有账号?去登录</view>
			</form>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				imei_code: '',
				date: '',
				page1: false,
				page2: false,
				page3: false,
				second: 60,
				showText: true,
				tel: '',
				flag1: false, //省
				flag2: false,
				flag3: false,
				flag4: false,
				addr1: [],
				addr2: [],
				addr3: [],
				index1: 0,
				index2: 0,
				index3: 0,
				index4: 0,
				code1: '',
				code2: '',
				code3: '',
				iden: [],
				payType: 1
			}
		},
		onLoad() {
			var that = this
			that.page1 = true;
			that.page2 = false;
			that.page3 = false;
			that.getAddr()
			that.getIden();

		},
		onShow() {
			var that = this
			// 获取会员价格
			uni.request({
				url: that.REQUEST_URL + 'index.php/api/user/xufei',
				method: 'post',
				success(res) {
					that.date = res.data.datas[0]
				}
			})
			// #ifdef APP-PLUS
			// that.imei_code=plus.device.imei
			// #endif

		},
		methods: {

			formSubmit: function(e) {
				var warn = "";
				var flag = false;
				var that = this;
				console.log('---------')
				console.log(e.detail.value)
				console.log(that.addr1[5]);
				if (e.detail.value.tel == '') {
					warn = '请输入手机号码'
					// } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))) {
					// 	warn = "手机号格式不正确";
					// } else if (that.code_value == '') {
					// 	warn = '请输入验证码'
					// } else if (that.code_value != uni.getStorageSync('code_value')) {
					// 	warn = '验证码不正确'
					// } else if (that.tel_value != uni.getStorageSync('tel_value')) {
					// 	warn = '验证码不正确'
					// } else if (e.detail.value.psw == '') {
					// 	warn = '请输入密码'
				} else {
					flag = true;
					// return false
					var address = that.addr1[e.detail.value.a1].areaName + ',' + that.addr2[e.detail.value.a2].areaName + ',' + that.addr3[
						e.detail.value.a3].areaName
					console.log('address=' + address)
					// #ifdef APP-PLUS
					plus.device.getInfo({
						success: function(ee) {
							console.log(ee)
							console.log(ee.imei)
							uni.request({
								url: that.REQUEST_URL + 'index.php/api/user/reg1',
								method: 'POST',
								data: {
									account: e.detail.value.tel,
									password: e.detail.value.psw,
									repwd: e.detail.value.repsw,
									code: e.detail.value.code,
									invite: e.detail.value.invite ? e.detail.value.invite : '',
									realname: e.detail.value.realname,
									sex: e.detail.value.sex,
									address: address,
									address_xq: e.detail.value.address,
									iden: that.iden[e.detail.value.char].id,
									mobilecode: ee.imei,
								},
								header: {
									'Content-Type': 'application/x-www-form-urlencoded'
								},
								success: res => {
									console.log(res)
									if (res.data.code == 200) {
										that.page3 = true;
										that.page1 = that.page2 = false;
										var ret = res.data.data
										uni.setStorageSync('user', res.data.datas);
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
						url: that.REQUEST_URL + 'index.php/api/user/reg1',
						method: 'POST',
						data: {
							account: e.detail.value.tel,
							password: e.detail.value.psw,
							repwd: e.detail.value.repsw,
							code: e.detail.value.code,
							invite: e.detail.value.invite ? e.detail.value.invite : '',
							realname: e.detail.value.realname,
							sex: e.detail.value.sex,
							address: address,
							address_xq: e.detail.value.address,
							iden: that.iden[e.detail.value.char].id,
						},
						header: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							console.log(res)
							if (res.data.code == 200) {
								that.page3 = true;
								that.page1 = that.page2 = false;
								var ret = res.data.data
								uni.setStorageSync('user', res.data.datas);
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
			changePayType(type) {
				this.payType = type;
			},

			getCode() {
				var that = this;
				console.log(this.tel);
				if (that.tel == '') {
					uni.showToast({
						title: '请输入手机号码',
						icon: 'none',
						duration: 2000,
					});
					return false
				}
				if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.tel))) {
					uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none',
						duration: 2000
					})
					return false;
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
					url: that.REQUEST_URL + 'index.php/api/user/getCode',
					method: 'POST',
					data: {
						mobile: that.tel
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						console.log(res)
						if (res.data.code == 'OK') {
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
								title: res.data.msg,
								icon: 'none',
								duration: 2000,
							});
						}
					}
				});

			},

			getAddr() {
				var that = this
				uni.request({
					url: that.REQUEST_URL + 'index.php/api/user/getarea',
					data: {
						pid: ''
					},
					method: 'POST',
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						console.log(res)
						that.addr1 = res.data.data
					}
				});
			},
			topage2() {
				var that = this;
				that.page2 = true;
				that.page1 = that.page3 = false;
			},
			retpage2() {
				var that = this;
				that.page1 = true;
				that.page2 = that.page3 = false;
			},
			toLogin() {
				uni.redirectTo({
					url: '/pages/login'
				})
			},
			telchange(e) {
				this.tel = e.detail.value
			},
			// 地址选择
			bindPickerChange1: function(e) {
				var that = this
				var code = this.addr1[e.target.value].areaId
				console.log(this.addr1[e.target.value].areaId)
				this.code1 = code;
				// 请求
				uni.request({
					url: that.REQUEST_URL + 'index.php/api/user/getarea',
					method: 'POST',
					data: {
						pid: this.code1
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						console.log(res)
						this.addr2 = res.data.data
					}
				});
				this.index1 = e.target.value
				this.flag1 = true
				this.code2 = this.code3 = '',
					this.flag2 = this.flag3 = false
			},
			bindPickerChange2: function(e) {
				var that = this
				console.log('picker发送选择改变，携带值为', e.target.value)
				var code = this.addr2[e.target.value].areaId
				this.code2 = code;
				// 请求
				uni.request({
					url: that.REQUEST_URL + 'index.php/api/user/getarea',
					method: 'POST',
					data: {
						pid: this.code2
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						console.log(res)
						this.addr3 = res.data.data
					}
				});

				this.index2 = e.target.value
				this.flag2 = true
				this.code3 = '',
					this.flag3 = false
			},
			bindPickerChange3: function(e) {
				var that = this
				console.log('picker发送选择改变，携带值为', e.target.value)
				var code = this.addr3[e.target.value].areaId
				this.code3 = code;
				this.index3 = e.target.value
				this.flag3 = true
			},
			bindPickerChange4(e) {
				this.index4 = e.target.value;
				this.flag4 = true;
			},
			getIden() {
				var that = this;
				uni.request({
					url: that.REQUEST_URL + 'index.php/api/user/getiden',
					method: 'post',
					data: {},
					success(res) {
						if (res.data.code == 200) {
							that.iden = res.data.datas;
							console.log(that.iden);
							// console.log(that.iden[0].name);
						}
					}
				})
			},
			topay() {
				var user = uni.getStorageSync('user')
				var that = this;
				// #ifdef APP-PLUS
				console.log('app---------------')
				var payType = ''
				if (that.payType == 1) {
					payType = 'wxpay';
					uni.request({
						url: that.REQUEST_URL + 'index.php/api/pay/buymember',
						// url: that.appurl + 'index.php/api/wxpay/wxpaytest',
						method: 'post',
						data: {
							uid: user.id,
							gid:1,
							type: 2
						},
						success(res) {
							uni.hideLoading()
							console.log(res.data)
							var orderInfo = res.data
							// var orderInfo=JSON.parse(res.data)
							uni.requestPayment({
								provider: 'wxpay',
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
								fail: function(err) {
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
							gid: 1,
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
								fail: function(err) {
									console.log('fail:' + JSON.stringify(err));
								}
							});

						}
					})
				}
				// #endif

				// #ifdef H5
				console.log('h55---------------')
				var payType = ''
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
							client: 1
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
												console.log(ret)
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
							// var orderInfo = res.data
							// uni.requestPayment({
							// 	provider: 'wxpay',
							// 	orderInfo: orderInfo,
							// 	success: function(res) {
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
							// 		console.log('success:' + JSON.stringify(res));
							// 	},
							// 	fail: function(err) {
							// 		console.log('fail:' + JSON.stringify(err));
							// 	}
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
							gid:1,
							type: 1,
							client: 1
						},
						success(res) {
							uni.hideLoading()
							var orderInfo = res.data
							document.querySelector('body').innerHTML = orderInfo;
							document.forms[0].submit()
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

				// uni.showToast({
				//                 title:'支付成功',
				//                 icon:'none',
				//                 duration:2000,
				//                 complete(){
				//                     setTimeout(()=>{
				//                         uni.switchTab({
				//                             url:'/pages/tabbar/index'
				//                         })
				//                     },2000)
				//                 }
				//             })
				// uni.getProvider({
				//     service:'payment',
				//     success(res){

				//     }
				// })
			}
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
		margin-bottom: 26rpx;
		height: 76rpx;
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
		height: 76rpx;
		font-size: 28rpx;
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

	.orow {
		display: flex;
		align-items: center;
		color: #333;
	}

	.orow .icon {
		width: 58rpx;
		height: 58rpx;
		margin-right: 8rpx;
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
		text-align: center;
		border-radius: 10rpx;
	}

	.sexbox {
		font-size: 28rpx;
		color: #333;
	}

	.sexbox radio {
		transform: scale(0.8);
	}

	.sexbox label {
		margin-right: 30rpx;
	}

	.uni-input {
		color: #333;
		font-size: 28rpx;
		line-height: 76rpx;
	}

	.addrpick .picker {
		width: 33%;
	}

	.main {
		position: relative;
	}

	.page1,
	.page2,
	.page3 {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 9;
	}

	// .page1{
	// 	z-index: 10;
	// }
	// .page2{
	// 	z-index: 20;
	// }
	// .page3{
	// 	z-index: 30;
	// }
	.option {
		opacity: 0;
		z-index: 1 !important;
	}

	.paybtn {
		background-color: #4CA8E7;
		background-image: linear-gradient(to bottom, #4CA8E7, #2997e2);
	}

	.yes {
		width: 30rpx;
		height: 30rpx;
		margin-left: 20rpx;
	}
</style>
