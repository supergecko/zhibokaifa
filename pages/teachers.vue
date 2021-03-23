<template>
	<view class="">
	<view class="box" v-for="(item,index) in list" :key="index" @click="toTeacher_detail(item.id)">
		<image :src="item.head_img" mode="scaleToFill" style="width:210rpx ;height: 260rpx;border-radius: 20rpx;margin: 20rpx;"></image>
		<view class="right" style="margin-top: 20rpx;">
			<view class="name">{{item.nickname}}</view>
			<view class="info" >
				<view v-for="(items,index) in item.info">{{items}}</view>
			</view>
			<view class="guanzhu">{{item.count}}人关注</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad(options) {
			var that = this
			that.getList()
		},
		methods: {
			getList(){
				var that =this
				uni.request({
					url:that.REQUEST_URL + 'index.php/api/Daka/lists',
					method:"POST",
					data:{},
					success(res) {
						console.log(res)
						that.list = res.data.data
					}
				})
			},
			toTeacher_detail(id){
				console.log(id)
				uni.navigateTo({
					url:'/pages/teacher_detail?did=' + id
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #f5f5f5;
	},
	.box{
		/* width: 100%; */
		height: 300rpx;
		margin: 30rpx 40rpx;
		background:#fff
	}
	.right{
		float: right;
		width: 400rpx;
		height: 280rpx;
	}
	.name{
		font-size: 18px;
		font-weight: bold;
	}
	.info{
		width: 320rpx;
		height: 180rpx;
		font-size: 14px;
		color: #6e6e6e;
	}
	.guanzhu{
		width: 120rpx;
		float: right;
		font-size: 12px;
		color: #7a7a7a;
	}


</style>
