<template>
	<view class="page">
		<view class="itemWarp">
			<view>
				<view class="itemTitle">我的钻石</view>
				<view class="itemOne">
					<view class="itemTwoTitle">
						<image src="../../static/wallet/zs.png" style="width: 32rpx;height: 32rpx;margin-top: 10rpx;"></image>
						<text style="font-size: 30rpx;">钻石余额(个)</text>
					</view>
					<view class="numberText">{{zsBalance}}</view>
					
					<view class="checkBtn"  @click="goTo(`../recharge/index?balance=${zsBalance}`)">
						充值
					</view>
				</view>
			</view>
		</view>
		
		<view class="itemWarp" v-if="isTeacher">
			<view>
				<view class="itemTitle">我的收益</view>
				<view class="itemOne itemTwo">
					<view class="itemTwoTitle">
						<image src="../../static/wallet/ye.png" style="width: 32rpx;height: 32rpx;margin-top: 10rpx;"></image>
						<text style="font-size: 30rpx;">我的收益(元)</text>
					</view>
					<view class="numberText">{{balance}}</view>
					
					<view class="checkBtn" @click="goTo(`../withdrawal/index?balance=${balance}`)">
						提现
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
				screenHeight:0,
				zsBalance:0 ,//钻石
				balance:0,//收益
				zsbl: 0, //钻石和金额比例
				isTeacher:false//用户类型
			}
		},
		// 按钮监听函数
		onNavigationBarButtonTap(e) {//不需要在<view>里面做任何操作，可直接引用
			// 这里用let或者var定义变量都可以
			this.goTo('../myBill/index')
		},
		onLoad(e) {
			
		},
		onShow() {
			this.getBl()
		},
		methods: {
			goTo(url){
				uni.navigateTo({
					url: url 
				});
			},
			//获取余额
			getUser(){
				let uid = uni.getStorageSync('userId')
				let data = {uid}
				this.$H.post('/user/member', data).then(res => {
					this.zsBalance = res.datas.balance
					console.log(typeof(res.datas.group_status))
					console.log(res.datas.group_status)
					if (res.datas.group_status == 0) {
						this.isTeacher = false
					} else {
						this.isTeacher = true
					}
					this.balance = this.zsBalance * this.zsbl
				}).catch(err => {
					console.log(err);
				})
			},
			//获取当前钻石和现金兑换比例
			getBl() {
				let data = {}
				this.$H.post('/user/diamond_price', data).then(res => {
					this.zsbl = res.data.true_price
					this.getUser()
				}).catch(err => {
					console.log(err);
				})
			},
		}
	}
</script>

<style>
	.itemTwoTitle{
		display: flex;
		align-items: center;
		padding-top: 45rpx;
		margin-left: 38rpx;
	}
	uni-page-head .uni-page-head-ft{
		padding-right: 20rpx;
	}
	.numberText{
		font-size: 52rpx;
		font-family: PingFang SC;
		font-weight: 500;
		margin-top: 60rpx;
		margin-left: 38rpx;
	}
	.itemWarp{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.page{
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgb(242,242,242);
	}
	.itemOne{
		background-image: url(../../static/wallet/zsb.png);
		background-size: 100% 100%;
		width: 684rpx;
		height: 254rpx;
		color: #FFFFFF;
		position: relative;
	}
	.itemTwo{
		background-image: url(../../static/wallet/yeb.png);
	}
	.checkBtn{
		background-image: url(../../static/wallet/cz1.png);
		background-size: 100% 100%;
		width: 174rpx;
		height: 69rpx;
		text-align: center;
		line-height: 69rpx;
		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #4EA8E6;
		position: absolute;
		bottom: 41rpx;
		right: 57rpx;
	}
	.itemTitle{
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #060606;
		margin-top: 50rpx;
		margin-bottom: 25rpx;
	}
</style>
