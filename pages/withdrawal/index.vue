<template>
	<view class="page">
		<view class="rechargeTitle">
			<view style="margin-left: 32rpx;">我的收益(元)：</view>
			<view style="margin-left: 8rpx;margin-top: 4rpx;">{{Wbalance}}</view>
		</view>
		
		<view class="midWarp">
			<view class="Texttitle" style="margin-bottom: 26rpx;">自定义金额</view>
			<input class="InputClass" v-model="Wnumber" placeholder="请输入提现金额" />
			
			<view style="display: flex;align-items: center;padding-left: 32rpx;margin-top: 18rpx;">
				<image src="../../static/recharge/zyi.png" style="width: 27rpx;height: 27rpx;"></image>
				<view style="margin-left: 20rpx;">金额必须是100的倍数</view>
			</view>
		</view>
		
		<view class="bottomWarp">
			<view>
				<view class="Texttitle">姓名：</view>
				<input class="bottomInputClass" v-model="name" placeholder="请输入您的姓名" />
			</view>
			<view>
				<view class="Texttitle">银行卡号：</view>
				<input class="bottomInputClass" v-model="bankNumber" placeholder="请输入银行卡号" />
			</view>
			<view>
				<view class="Texttitle">联系方式：</view>
				<input class="bottomInputClass" v-model="tel" placeholder="请输入联系方式" />
			</view>
		</view>
		
		<view class="nowReBtn" @click="withDrawal()">立即申请</view>
		
		<view class="bottomText">
			<checkbox-group @change="radioChange">
				<label>
					<checkbox value="cb" checked="true" />
				</label>
			</checkbox-group>已阅读并同意 <text style="color: #4EA8E6;">《用户申请协议》</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Wbalance:'',//提现金额
				Wnumber:'',//自定义提现金额
				name:'',//用户名字
				bankNumber:'',//银行卡号
				tel:''//联系方式
			}
		},
		
		onLoad(e) {
			this.Wbalance = e.balance
		},
		
		methods: {
			goTo(url){
				uni.navigateTo({
					url: url 
				});
			},
			//下方勾选协议按钮
			radioChange(e){
				if(e.detail.value.length !=0){
					this.isCheck = true
				} else {
					this.isCheck = false
				}
			},
			//提现
			withDrawal(){
				if(this.Wnumber == ''){
					return uni.showToast({
						title: '请输入提现金额',
						icon: 'none'
					});
				}
				if(this.Wnumber%100 != 0){
					return uni.showToast({
						title: '金额必须是100的倍数',
						icon: 'none'
					});
				}
				if(this.name == ''){
					return uni.showToast({
						title: '请输入您的姓名',
						icon: 'none'
					});
				}
				if(this.bankNumber == ''){
					return uni.showToast({
						title: '请输入银行卡号',
						icon: 'none'
					});
				}
				if(this.tel == ''){
					return uni.showToast({
						title: '请输入联系方式',
						icon: 'none'
					});
				}
				uni.showLoading({
					title: '加载中……'
				})
				let uid = uni.getStorageSync('userId')
				let price = this.Wnumber
				let name = this.name
				let bankid = this.bankNumber
				let mobile = this.tel
				let data = {
					uid,price,name,bankid,mobile
				}
				this.$H.post('/user/save_cashapply',data
				).then(res=>{
					uni.hideLoading()
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					setTimeout(()=>{
						uni.navigateBack({
						    delta:1
						})
					},1500)
					
				}).catch(err=>{
					uni.hideLoading()
					console.log(err);
				})
			}
		}
	}
</script>

<style>
	.page{
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgb(242,242,242);
	}
	.Texttitle{
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		margin-left: 32rpx;
		padding-top: 30rpx;
		margin-bottom: 8rpx;
	}
	.InputClass{
		width: 683rpx;
		height: 87rpx;
		background: #F5F5F5;
		border-radius: 4rpx;
		margin: 0 auto;
		text-indent:30rpx;
	}
	.bottomInputClass{
		width: 679rpx;
		padding-bottom: 26rpx;
		margin: 0 auto;
		border-bottom: 1rpx solid #EEEEEE;;
	}
	.midWarp{
		height: 250rpx;
		width: 750rpx;
		background-color: #FFFFFF;
		margin-bottom: 11rpx;
	}
	.bottomWarp{
		height: 450rpx;
		width: 750rpx;
		background-color: #FFFFFF;
		margin-bottom: 11rpx;
	}
	.rechargeTitle{
		display: flex;
		align-items: center;
		margin-top: 11rpx;
		height: 110rpx;
		width: 750rpx;
		background-color: #FFFFFF;
		margin-bottom: 11rpx;
		font-size: 30rpx;
		color: rgb(74,74,74);
	}
	.nowReBtn{
		background-color: rgb(78,168,230);
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
	.bottomText{
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
