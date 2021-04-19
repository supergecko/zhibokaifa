<template>
	<view class="app">
		<view class="olist">
			<view class="part" v-for="(item, index) in list" :key="index" @click="toDetail(item.uid)">
				<view class="imgbox"><image mode="aspectFill" :src="item.img"></image></view>
				<view class="right">
					<view class="name ovh">{{item.title}}</view>
                    <view style="font-size:25rpx;color:#666666;">{{item.start_time}}</view>
					<view class="fb">
						<view class="lesson" style="width: 50%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
							<image style="min-width: 34rpx;" src="../../static/teacher.png"></image>
							<text style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width: 130rpx;">{{item.real_name}}</text>
						</view>
						<view  class="read">{{item.pay_num}}人观看</view>
					</view>
				</view>
			</view>
		</view>
		<view class="wrap fc" :style="{height : height + 'px',width : width + 'px'}" v-if="buywrap">
			<view class="wrapbox fc">
				<view class="tit"><text></text><text style="color: #333;font-size: 30rpx;">支付</text>
					<image class="retu" @click="retu" src="../../static/close.png"></image>
				</view>
				<view class="tips"><text style="color: #333;font-size: 32rpx;">观看直播需要支付{{price}}元</text></view>
				<radio-group @change="radioChange" style="width: 100%;">
					<view class="fr change" :style="{width : width + 'px'}">
						<label class="paybox fc">
							<image style="width: 110rpx;height: 110rpx;" src="../../static/wxpay.png"></image>
							<radio value="1" checked="true" />
						</label>
						<label class="paybox fc">
							<image style="width: 110rpx;height: 110rpx;" src="../../static/ali.png"></image>
							<radio value="2" />
						</label>
					</view>
				</radio-group>
				<view class="buybtn" @click="topay"><text style="color: #fff;font-size: 30rpx;">购买</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				nowLiveId: 0, //当前直播间ID
				buywrap: false,
				price: '',
				payType: 1,
			}
		},
		methods: {
			getData(){
				var that = this;
				uni.request({
				    url:that.REQUEST_URL + 'index.php/api/live/live_lists',
				    method:'post',
				    data:{},
				    success(res){
						uni.stopPullDownRefresh()
				        console.log(res);
				        if (res.data.code == 1) {
				            for (var i = 0; i < res.data.data.length; i++) {
				                res.data.data[i].img = that.REQUEST_URL + res.data.data[i].photo;
				            }
				            that.list = res.data.data;
				        }
				    }
				})
			},
			//选择支付方式
			radioChange(e) {
				console.log(e.detail.value)
				var that = this;
				that.payType = e.detail.value;
			},
			//取消支付
			retu() {
				this.buywrap = false
			},
			toDetail(id){
				console.log(id)
				this.nowLiveId = id
				this.tocheck()
                // uni.navigateTo({
                //     url:'/pages/live_detail?id=' + id
                // })
			},
			//检查支付
			tocheck() {
				var user = uni.getStorageSync('user')
				let data = {
					uid: user.id,
					lid: this.nowLiveId,
				}
				this.$H.post('/live/checkLivePay', data).then(res => {
					console.log(res)
					if (res.code == 500) {
						this.price = res.datas
						//若余额大于直播金额
						if (this.price < user.balance) {
							this.buywrap = false
							this.tocheckZs()
						} else {
							this.buywrap = true
						}
					} else {
						this.buywrap = false
						uni.navigateTo({
							url: '/pages/live/live?id=' + this.nowLiveId
						})
					}
				}).catch(err => {
					console.log(err);
				})
			},
			//使用钻石支付
			tocheckZs() {
				var user = uni.getStorageSync('user')
				let data = {
					uid: user.id,
					lid: this.nowLiveId,
					pay_type: 3
				}
				this.$H.post('/pay/buyLive', data).then(res => {
					uni.navigateTo({
						url: '/pages/live/live?id=' + this.nowLiveId
					})
				}).catch(err => {
					console.log(err);
				})
			},
			//支付
			topay() {
				uni.showLoading({
					title: '加载中……'
				})
				// #ifdef APP-PLUS
				var that = this
				if (this.payType == 2) {
					let uid = uni.getStorageSync('userId')
					let lid = this.nowLiveId
					let pay_type = 1
					let data = {uid,lid,pay_type}
					this.$H.post('/pay/buylive',data
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
											that.tocheck()
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
				} else if (this.pay_type == 1) {
					let uid = uni.getStorageSync('userId')
					let lid = this.nowLiveId
					let pay_type = 1
					let data = {uid,lid,pay_type}
					this.$H.post('/pay/buylive',data
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
											that.tocheck()
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
				// #endif
			}
		},
		onPullDownRefresh: function() {
			var that = this
			that.getData()
		},
        onLoad(){
            
        },
        onShow(){
            var that = this;
			// #ifdef H5
			if (uni.getStorageSync('user').id) {
				uni.request({
					url: that.REQUEST_URL + 'index.php/api/user/checkuserlogin',
					method: 'POST',
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data: {
						id: uni.getStorageSync('user').id,
					},
					success: res => {
						if (res.data== 0) {
							uni.showToast({
								title: '您的账号已在别处登录或登录超时',
								icon: 'none',
								duration: 2000,
							})
							setTimeout(() => {
								uni.clearStorageSync();
								uni.reLaunch({
								    url: '/pages/login'
								})
							}, 2000)
							return false
						} 
					}
				});
			}
			// #endif
           that.getData()
        }
	}
</script>

<style>
	.wrap {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		z-index: 99;
		left: 0;
		background-color: rgba(0, 0, 0, 0.8);
		color: #fff;
		padding: 30rpx;
		box-sizing: border-box;
	}
	.buybtn {
		width: 220rpx;
		height: 72rpx;
		border-radius: 36rpx;
		background-color: #007AFF;
		line-height: 72rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-top: 20rpx;
	}
	
	.retu {
		width: 30rpx;
		height: 30rpx;
		margin-right: 20rpx;
	
	}
	.fr {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
	}
	.paybox image {
		width: 160rpx;
		height: 160rpx;
		margin-bottom: 20rpx;
	}
	.change {
		width: 100%;
		box-sizing: border-box;
	}
	.fc {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.tit {
		width: 650rpx;
		display: flex;
		height: 80rpx;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		border-bottom-color: #d6d6d6;
		border-bottom-width: 2rpx;
		border-bottom-style: solid;
		margin-bottom: 20rpx;
	}
	.wrapbox {
		width: 650rpx;
		background-color: #fff;
		padding-bottom: 40rpx;
		border-radius: 10rpx;
	}
	.olist{
		width: 710rpx;
		margin: 20rpx auto;
		display: flex;
		flex-wrap: wrap;
	}
	.part{
		width: 50%;
		padding: 0 10rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		margin-bottom: 30rpx;
		padding-bottom: 20rpx;
		border-bottom: 1rpx solid #e6e6e6;
	}
	.part .imgbox{
		width: 100%;
		height: 335rpx;
		margin-right: 26rpx;
		border-radius: 12rpx;
		overflow: hidden;
	}
	.part .right{
		width: 100%;
	}
	.part .name{
		font-size: 30rpx;
		line-height: 44rpx;
		color: #333;
		/* height: 88rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden; */
		margin-bottom: 10rpx;
		margin-top: 10rpx;
	}
	
	.part .lesson{
		font-size: 28rpx;
		color: #333;
		font-weight: bold;
		display: flex;
		align-items: center;
	}
	.part .lesson image{
		width: 34rpx;
		height: 34rpx;
		margin-right: 4rpx;
	}
	.part .read{
		font-size: 22rpx;
		color: #999;
	}
</style>
