<template>
	<view class="page">
		<view class="rechargeTitle">
			<view style="margin-left: 27rpx;">账户余额：</view>
			<image src="../../static/recharge/zs.png" style="width: 40rpx; height: 40rpx;margin-top: 8rpx;"></image>
			<view style="margin-left: 8rpx;margin-top: 4rpx;">{{balance}}</view>
		</view>

		<view class="numberBg">
			<view class="payNumberItem" v-for="(item,i) in payNumberArr" :key="i" @click="checkNumber(item,i)"
				v-bind:class="numberFlag==i?'checkOnBlue':''">
				{{item}}
			</view>
		</view>

		<view class="bottomWarp">

			<view class="bottomWarpTitle" @click="openZdy()">自定义充值</view>

			<view class="zdy">
				<view style="width: 350rpx;line-height: 110rpx;font-size: 34rpx;text-align: center;">{{payZs}}元
				</view>
				<view>
					<view style="font-size: 28rpx;color: #7A7A7A;margin-top:10rpx;">你将获得钻石</view>
					<view style="display: flex;">
						<image src="../../static/recharge/zs.png" style="width: 40rpx; height: 40rpx;margin-top: 8rpx;">
						</image>
						<view style="margin-top: 8rpx;margin-left: 10rpx;">{{payNumber}}</view>
					</view>
				</view>
			</view>

			<view class="checkBtnWarp">
				<view class="checkBtn" v-for="(item,i) in payArr" :key="i" @click="checkPay(i)"
					v-bind:class="payBtnFlag==i?'checkOnBlue':''">
					<image :src="item.img" style="width: 57rpx;height: 57rpx;margin-right: 26rpx;"></image>
					<view>{{item.text}}</view>
				</view>
			</view>
		</view>

		<view class="nowReBtn" @click="payMoney()">立即充值</view>

		<view class="bottomText">
			<checkbox-group @change="radioChange">
				<label>
					<checkbox value="cb" checked="true" />
				</label>
			</checkbox-group>已阅读并同意 <text style="color: #4EA8E6;">《用户申请协议》</text>
		</view>

		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog mode="input" message="自定义充值" :duration="2000" placeholder="请输入充值钻石数量" inputType="number"
				:before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	import uniPopupDialog from '@/components/uni-ui/uni-popup/uni-popup-dialog.vue';
	export default {
		components: {
			uniPopup,
			uniPopupDialog
		},
		data() {
			return {
				payArr: [{
					img: "../../static/recharge/zfbpay.png",
					text: "支付宝支付"
				}, {
					img: "../../static/recharge/wxpay.png",
					text: "微信支付"
				}],
				payBtnFlag: -1,
				numberFlag: -1,
				payNumber: 0, //充值金额
				payZs: 0, //充值钻石
				balance: 0, //账户余额
				isCheck: true, //是否勾选协议
				zsbl: 0, //钻石和金额比例
				pay_type: 0, //支付方式标签
				payNumberArr: []
			}
		},
		created() {
			this.init()
		},
		onLoad(e) {
			this.getUser()
			// this.balance = e.balance
		},

		methods: {
			getUser(){
				var uid = uni.getStorageSync('user')['id']
				let data = {
					uid : uid
				}
				this.$H.post('/user/member', data).then(res => {
					console.log(res)
					this.balance = res.datas.balance
				}).catch(err => {
					console.log(err);
				})
			},
			init(){
				uni.showLoading({
					title: '加载中……'
				})
				this.getNumber()
				this.getBl()
				uni.hideLoading()
			},
			goTo(url) {
				uni.navigateTo({
					url: url
				});
			},
			//充值费用
			payMoney() {
				if (this.payNumber == 0) {
					return uni.showToast({
						title: '请选择充值钻石数量',
						icon: 'none'
					});
				}
				if (this.pay_type == 0) {
					return uni.showToast({
						title: '请选择支付方式',
						icon: 'none'
					});
				}
				uni.showLoading({
					title: '加载中……'
				})
				// #ifdef APP-PLUS
				if (this.pay_type == 1) {
					let uid = uni.getStorageSync('userId')
					let diamond_num = this.payNumber
					let pay_type = this.pay_type
					let data = {uid,diamond_num,pay_type}
					this.$H.post('/pay/buyDiamond',data
					).then(res=>{
						uni.requestPayment({
							provider: 'alipay',
							orderInfo: res,
							success: function(res) {
								uni.showToast({
									title: '支付成功',
									icon: 'none',
									duration: 2000,
									complete() {
										setTimeout(()=>{
											uni.navigateBack({
											    delta:1
											})
										},1000)
									}
								})
								console.log('success:' + JSON.stringify(res))
							},
							fail: function(err) {
								console.log('fail:' + JSON.stringify(err));
							}
						});
						console.log(JSON.stringify(res))
						uni.hideLoading()
					}).catch(err=>{
						uni.hideLoading()
						console.log(err);
					})
				} else if (this.pay_type == 2) {
					let uid = uni.getStorageSync('userId')
					let diamond_num = this.payNumber
					let pay_type = this.pay_type
					let data = {uid,diamond_num,pay_type}
					this.$H.post('/pay/buyDiamond',data
					).then(res=>{
						uni.requestPayment({
							provider: 'wxpay',
							orderInfo: res,
							success: function(res) {
								uni.showToast({
									title: '支付成功',
									icon: 'none',
									duration: 2000,
									complete() {
										setTimeout(()=>{
											uni.navigateBack({
											    delta:1
											})
										},1000)
									}
								})
								console.log('success:' + JSON.stringify(res))
							},
							fail: function(err) {
								console.log('fail:' + JSON.stringify(err));
							}
						});
						console.log(JSON.stringify(res))
						uni.hideLoading()
					}).catch(err=>{
						uni.hideLoading()
						console.log(err);
					})
				}
				// #endif

				// #ifdef H5
				
				if (this.pay_type == 1) {
					
				} else if (this.pay_type == 2) {
					let uid = uni.getStorageSync('userId')
					let diamond_num = this.payNumber
					let pay_type = this.pay_type
					let data = {uid,diamond_num,pay_type}
					this.$H.post('/pay/buyDiamond',data
					).then(res=>{
						console.log(res)
						console.log(typeof(res))
						uni.requestPayment({
							provider: 'wxpay',
							orderInfo: res,
							success: function(res) {
								uni.showToast({
									title: '支付成功',
									icon: 'none',
									duration: 2000,
									complete() {
										setTimeout(()=>{
											uni.navigateBack({
											    delta:1
											})
										},1000)
									}
								})
								console.log('success:' + JSON.stringify(res))
							},
							fail: function(err) {
								console.log('fail:' + JSON.stringify(err));
							}
						});
						console.log(JSON.stringify(res))
						uni.hideLoading()
					}).catch(err=>{
						uni.hideLoading()
						console.log(err);
					})
				}
				// #endif
			},
			//获取当前充值金额
			getNumber() {
				let data = {}
				this.$H.post('/pay/diamond_specs', data).then(res => {
					this.payNumberArr = res.diamond_specs
				}).catch(err => {
					console.log(err);
				})
			},
			//获取当前钻石和现金兑换比例
			getBl() {
				let data = {}
				this.$H.post('/user/diamond_price', data).then(res => {
					this.zsbl = res.data.true_price
				}).catch(err => {
					console.log(err);
				})
			},
			checkPay(e) {
				this.payBtnFlag = e
				if (e == 0) {
					this.pay_type = 1
				} else {
					this.pay_type = 2
				}
			},
			checkNumber(e, i) {
				this.numberFlag = i
				this.payNumber = e
				console.log(e)
				console.log(this.zsbl)
				this.payZs = e * this.zsbl
			},
			// 自定义价格
			openZdy() {
				this.$refs.popup.open()
			},
			/**
			 * 点击取消按钮触发
			 * @param {Object} done
			 */
			close(done) {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			/**
			 * 点击确认按钮触发
			 * @param {Object} done
			 * @param {Object} value
			 */
			confirm(done, value) {
				if (!value) {
					return uni.showToast({
						title: '请输入要充值的钻石数量',
						icon: 'none'
					});
				}
				this.payNumber = value
				this.payZs = value * this.zsbl
				done()
			},
			//下方勾选协议按钮
			radioChange(e) {
				if (e.detail.value.length != 0) {
					this.isCheck = true
				} else {
					this.isCheck = false
				}
			}
		}
	}
</script>

<style>
	.page {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgb(242, 242, 242);
	}

	.checkBtnWarp {
		display: flex;
		justify-content: center;
	}

	.checkOnBlue {
		border: 4rpx solid #4EA8E6 !important;
	}

	.checkBtn {
		width: 341rpx;
		height: 101rpx;
		display: flex;
		margin: 14rpx;
		align-items: center;
		justify-content: center;
		border: 4rpx solid rgb(242, 242, 242);
	}

	.payNumberItem {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		border: 4rpx solid rgb(242, 242, 242);
		display: inline-block;
		padding: 12rpx 24rpx;
		border-radius: 20rpx;
		margin: 10rpx;
	}

	.zdy {
		width: 700rpx;
		height: 110rpx;
		background-color: rgb(242, 242, 242);
		margin: 0 auto;
		display: flex;
	}

	.bottomWarpTitle {
		text-align: center;
		color: rgb(74, 74, 74);
		padding: 30rpx 0;
	}

	.rechargeTitle {
		display: flex;
		align-items: center;
		margin-top: 11rpx;
		height: 110rpx;
		width: 750rpx;
		background-color: #FFFFFF;
		margin-bottom: 23rpx;
		font-size: 30rpx;
		color: rgb(74, 74, 74);
	}

	.numberBg {
		min-height: 110rpx;
		width: 750rpx;
		background-color: #FFFFFF;
		margin-bottom: 23rpx;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
	}

	.bottomWarp {
		height: 360rpx;
		width: 750rpx;
		background-color: #FFFFFF;
		font-size: 30rpx;
	}

	.nowReBtn {
		background-color: rgb(78, 168, 230);
		width: 672rpx;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		border-radius: 50rpx;
		margin: 0 auto;
		margin-top: 100rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
	}

	.bottomText {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #7F7F7F;
		text-align: center;
		margin-top: 36rpx;
		display: flex;
		align-items: center;
		justify-content: center;


	}
</style>
