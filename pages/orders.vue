<template>
	<view>
		<view class="">
			<video  :src="list.video_url" controls style="width:100%;"></video>
		</view>
		<view class="order">
            <view class="order_detail">
                <view class="order_info">
                    <view>订单编号：{{list.order_sn}}</view>
                    <view>下单日期：{{list.add_time}}</view>
                </view>
                <view v-if="list.status == 1" class="order_status">已支付</view>
                <view v-if="list.status == 0" class="order_status">待支付</view>
            </view>
            <view class="goods_detail">
                <view class="tips">订单详情</view>
                <view class="goods_info">
                    <view class="goods_img"><image :src="list.photo" mode="aspectFill"></image></view>
                    <view class="goods_infos">
                        <view class="goods_title">{{list.title}}</view>
                        <view class="goods_desc">
                            <text class="goods_auth">{{list.nickname}}</text>
                            <!-- <text class="goods_style">共10集 45分钟/集</text> -->
                        </view>
                        <view class="goods_price_info">
                            <text></text>
                            <text class="goods_price">{{list.pay_price}}元/节</text>
                        </view>
                    </view>
                </view>
            </view>
            <view v-if="list.pay_type == 2" class="pay_type">支付方式：微信支付</view>
			<view v-if="list.pay_type == 1" class="pay_type">支付方式：支付宝支付</view>
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
		methods: {
			getData(id,uid){
				var that=this
				console.log('订单id',id,uid)
				uni.request({
					url:that.REQUEST_URL +　'index.php/api/user/order_detail',
					method:"POST",
					data:{
						user_id:uid,
						order_id:id
					},
					success(res){
						console.log(res)
						that.list = res.data.data
					}
				})
			}
		},
        onLoad(params){
            console.log(params);
			var that =this
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
			var id = params.id
			var uid = uni.getStorageSync('user')['id'];
			that.getData(id,uid)
        }
	}
</script>

<style>
    page{background:#f5f5f5;}
    .order{width:690rpx;margin-top:20rpx;padding:0 30rpx;background:#fff;}
    .order_detail{width:690rpx;padding:20rpx 0;display: flex;height:70rpx;justify-content: space-between;border-bottom:2rpx solid #eeeeee;}
    .order_info{font-size:27rpx;}
    .order_info view{line-height: 35rpx;}
    .order_status{width:170rpx;text-align:center;line-height: 70rpx;background: green;color:#fff;font-size:30rpx;}
    .goods_detail{width:690rpx;padding:30rpx 0;height:300rpx;border-bottom:2rpx solid #eeeeee;}
    .tips{font-size:25rpx;padding-bottom:20rpx;}
    .goods_info{display: flex;}
    .goods_img{width:250rpx;height:250rpx;border-radius: 20rpx;overflow: hidden;margin-right: 30rpx;}
    .goods_img image{width:100%;height:100%;}
    .goods_infos{position: relative;}
    .goods_title{width:410rpx;font-size:33rpx;font-weight: bold;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;}
    .goods_desc{display: flex;justify-content: space-between;line-height: 80rpx;}
    .goods_auth{font-size:33rpx;}
    .goods_style{font-size:25rpx;color:#666666;}
    .goods_price_info{position:absolute;bottom:0;display: flex;justify-content: space-between;width:100%;}
    .goods_price{font-size:30rpx;color:red;font-weight: bold;}
    .pay_type{width:690rpx;padding:20rpx 0;text-align: right;font-size:30rpx;}
</style>
