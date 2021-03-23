<template>
	<view>
		<view class="box">
			<QSTabs :current="current" :tabs="tabs" width="150" activeColor="#42A2EC" @change="change($event, '1')" />
		</view>
		<!-- 充值 -->
		<view v-show="current===0">
			<view class="orderItemWarp" v-for="(item,i) in czArr" :key="i" v-if="czArr">
				<view>
					<view class="bigTitle">{{item.title}}</view>
					<view class="orderTime">{{item.add_time}}</view>
				</view>
				<view class="orderNumber">{{item.symbol}}{{item.num}}钻石</view>
				<view class="orderStatus">
					成功
				</view>
			</view>
			<view style="color: rgb(136, 136, 136);margin-top: 20rpx;text-align: center;" v-if="czArr.length==0">--暂无数据--</view>
		</view>
		<!-- 提现 -->
		<view v-show="current===1">
			<view class="orderItemWarp" v-for="(item,i) in txArr" :key="i" v-if="txArr">
				<view>
					<view class="bigTitle">提现</view>
					<view class="orderTime">{{item.add_time}}</view>
				</view>
				<view class="orderNumber orderStatusFaile">{{item.symbol}}{{item.num}}</view>
				<view class="orderStatus">
					成功
				</view>
			</view>
			<view style="color: rgb(136, 136, 136);margin-top: 20rpx;text-align: center;" v-if="txArr.length==0">--暂无数据--</view>
		</view>
		<!-- 消费 -->
		<view v-show="current===2">
			<view class="orderItemWarp" v-for="(item,i) in xfArr" :key="i" v-if="xfArr">
				<view>
					<view class="bigTitle">{{item.title}}</view>
					<view class="orderTime">{{item.add_time}}</view>
				</view>
				<view class="orderNumber orderStatusFaile">{{item.symbol}}{{item.num}}钻石</view>
			</view>
			<view style="color: rgb(136, 136, 136);margin-top: 20rpx;text-align: center;"v-if="xfArr.length==0">--暂无数据--</view>
		</view>
		<!-- 收礼 -->
		<view v-show="current===3">
			<view class="orderItemWarp" v-for="(item,i) in shouliArr" :key="i" v-if="shouliArr">
				<view>
					<view class="bigTitle">{{item.title}}</view>
					<view class="orderTime">{{item.add_time}}</view>
				</view>
				<view class="orderNumber">{{item.symbol}}{{item.num}}钻石</view>
			</view>
			<view style="color: rgb(136, 136, 136);margin-top: 20rpx;text-align: center;" v-if="shouliArr.length==0">--暂无数据--</view>
		</view>
		<!-- 送礼 -->
		<view v-show="current===4">
			<view class="orderItemWarp" v-for="(item,i) in songliArr" :key="i" v-if="songliArr">
				<view>
					<view class="bigTitle">{{item.title}}</view>
					<view class="orderTime">{{item.add_time}}</view>
				</view>
				<view class="orderNumber orderStatusFaile">{{item.symbol}}{{item.num}}钻石</view>
			</view>
			<view style="color: rgb(136, 136, 136);margin-top: 20rpx;text-align: center;" v-if="songliArr.length==0">--暂无数据--</view>
		</view>
	</view>
</template>

<script>
	import QSTabs from '@/components/QS-tabs/QS-tabs.vue'
	export default {
		components: {
			QSTabs
		},
		data() {
			return {
				tabs: ['充值', '提现', '消费', '收礼', '送礼'],
				current: 0, // 算力套餐/电费订单Tab切换index
				czArr: [],
				txArr:[],
				xfArr: [],
				shouliArr:[],
				songliArr:[]
				
			}
		},
		onPullDownRefresh() {
			//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
			var fres = setTimeout(() => {
				//刷新要执行的方法
				this.init()
				uni.stopPullDownRefresh(); //停止下拉刷新动画
				uni.showToast({
					icon: 'none',
					title: '刷新成功'
				})
			}, 1000);
			uni.getNetworkType({
				success: (res) => {
					if (res.networkType == 'none') {
						uni.showToast({
							icon: 'none',
							title: '当前网络不可用'
						})
						clearTimeout(fres)
						uni.stopPullDownRefresh(); //停止下拉刷新动画
					}
				}
			})
		},
		onLoad() {
			this.init()

		},

		methods: {
			init(){
				uni.showLoading({
					title: '加载中……'
				})
				this.recharge_()
				this.withDrawal_()//提现
				this.xiaofei_()//消费
				this.shouli_()//收礼
				this.songli_()//送礼
				uni.hideLoading()
			},
			goTo(url) {
				uni.navigateTo({
					url: url
				});
			},
			//订单Tab切换
			change(index, i) {
				this.current = index
			},
			//充值
			recharge_(){
				let uid = uni.getStorageSync('userId')
				let type = 1
				let data = {uid,type}
				this.$H.post('/user/myBalancelog', data).then(res => {
					this.czArr = res.data
				}).catch(err => {
					console.log(err);
				})
			},
			//提现
			withDrawal_(){
				let uid = uni.getStorageSync('userId')
				let type = 3
				let data = {uid,type}
				this.$H.post('/user/myBalancelog', data).then(res => {
					this.txArr = res.data
				}).catch(err => {
					console.log(err);
				})
			},
			//消费
			xiaofei_(){
				let uid = uni.getStorageSync('userId')
				let type = 4
				let data = {uid,type}
				this.$H.post('/user/myBalancelog', data).then(res => {
					this.xfArr = res.data
				}).catch(err => {
					console.log(err);
				})
			},
			//收礼
			shouli_(){
				let uid = uni.getStorageSync('userId')
				let type = 2
				let data = {uid,type}
				this.$H.post('/user/myBalancelog', data).then(res => {
					this.shouliArr = res.data
				}).catch(err => {
					console.log(err);
				})
			},
			//送礼
			songli_(){
				let uid = uni.getStorageSync('userId')
				let type = 5
				let data = {uid,type}
				this.$H.post('/user/myBalancelog', data).then(res => {
					this.songliArr = res.data
				}).catch(err => {
					console.log(err);
				})
			},//送
		}
	}
</script>

<style>
	.box {
		border-bottom: 1rpx solid #EAEAEA;
		;
	}

	.orderItemWarp {
		width: 681rpx;
		height: 147rpx;
		border-bottom: 1rpx solid #EAEAEA;
		;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.bigTitle {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #000000;
		margin-bottom: 20rpx;
	}

	.orderTime {
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #A0A0A0;
	}

	.orderNumber {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #19A03F;
	}

	.orderStatus {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #19A03F;
	}

	.orderStatusFaile {
		color: #EB1B33;
	}
</style>
