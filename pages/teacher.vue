<template>
    <view>
        <!-- <view @click="alipay">支付宝支付0.01</view> -->
        <view class="menu">
            <view class="row">
                <view class="rtit">直播标题</view>
                <input class="inp inp1" placeholder-class="holder" style="width:690rpx;" v-model="title" type="text" placeholder="请输入标题">
            </view>
            <view class="row">
				<view class="rtit">直播简介</view>
                <textarea class="inp" v-model="content"  placeholder-class="holder" style="height:200rpx;width: 690rpx;" placeholder="请输入直播简介……" />
            </view>
            <view class="row">
                开播时间
                <view style="display: flex;"class="picker" >
                    <picker mode="date" @change="setDate">
                        <view>{{date}}</view>
                    </picker>
                    <picker mode="time" :value="time" style="margin-left: 10rpx;" @change="setTime">
                        <view>{{time}}</view>
                    </picker>
                </view>
            </view>
            <view class="row">
               <view  class="fb">
				   <view>设置图片</view>
				   <view class="">
				   	<view @click="upload_img" class="upload_img"><image src="../static/imgs.png"></image>上传</view>
				   </view>
			   </view>
                <image v-if="img_src" :src="img_src" style="width:280rpx;height:280rpx;margin-top:10rpx;"></image>
            </view>
        </view>
        <view class="handle">
            <view @click="save_live" class="set_live">设置直播</view>
            <!-- <view @click="close_live" class="close_live" >关闭直播</view> -->
            <view @click="start_live" class="start_live">发起直播</view>
        </view>
        
	</view>
</template>

<script>
    import util from '@/util/util.js';
	export default {
		data() {
			return {
				img_src:'',
                src:'',
                title:'',
                content:'',
                start_time:'',
                live_id:'',
                time:util.getNow('h:i'),
                date:util.getNow('y-m-d')
			}
		},
		methods: {
			start_live(){
                if (this.live_id) {
                    uni.navigateTo({
                        url:'/pages/tui?id=' + this.live_id
                    }) 
                } else {
                    uni.showToast({
                        title:'请先设置直播',
                        icon:'none',
                        duration:2000
                    })
                }
            },
            upload_img(){
                var that = this;
                uni.chooseImage({
                    count:1,
                    sizeType:['original', 'compressed'],
                    sourceType: ['album'], //从相册选择
                    success(res){
                        console.log(res);
                        const tempFilePaths = res.tempFilePaths;
                        const uploadTask = uni.uploadFile({
                            url : that.REQUEST_URL + 'index.php/api/upload/zhibo_upload',
                            filePath: tempFilePaths[0],
                            name: 'file',
                            formData: {
                                'user': 'test'
                            },
                            success: function (result) {
                                var img_src = JSON.parse(result.data).url;
                                that.src = img_src;
                                img_src = that.REQUEST_URL + img_src;
                                that.img_src = img_src;
                            }
                        });
                    }
                })
            },
			// close_live(){
			// 	var that =this
			// 	uni.request({
			// 		url:that.REQUEST_URL + 'index.php/api/live/closeLive',
			// 		method:"POST",
			// 		data:{
			// 			lid:that.live_id
			// 		},
			// 		success(res) {
			// 			console.log('close_live',res)
			// 			uni.showToast({
			// 				title:res.data.msg,
			// 				duration:3000
			// 			})
			// 			uni.switchTab({
			// 				url:"/pages/tabbar/user"
			// 			})
			// 		}
			// 	})
			// },
            save_live(){
                var that = this;
                var data = {
                    user_id:uni.getStorageSync('user').id,
                    title:that.title,
                    content:that.content,
                    start_time:that.date + ' ' + that.time,
                    photo:that.src,
                    live_id:that.live_id
                }
                uni.request({
                    url:that.REQUEST_URL + 'index.php/api/live/set_live',
                    method:'post',
                    data:data,
                    header:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    success(res){
                        uni.showToast({
                            title:res.data.msg,
                            icon:'none',
                            duration:2000,
                            complete(){
                                that.getData();
                            }
                        })
                    }
                })
                
            },
            getData(){
                var that = this;
                uni.request({
                    url:that.REQUEST_URL + 'index.php/api/live/zhibo_info',
                    method:'post',
                    data:{
                        user_id:uni.getStorageSync('user').id
                    },
                    header:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    success(res){
                        console.log(res);
                        if (res.data.code == 1) {
                            if (res.data.data) {
                                that.title = res.data.data.title;
                                that.live_id = res.data.data.id;
                                that.content = res.data.data.content;
                                that.src = res.data.data.photo;
                                that.img_src = that.REQUEST_URL + res.data.data.photo;
                                that.date = util.getNow('y-m-d', res.data.data.start_time);
                                that.time = util.getNow('h:i', res.data.data.start_time);
                            }
                        }else{
                            uni.showToast({
                                title:res.data.msg,
                                icon:'none',
                                duration:2000
                            })
                        }
                    }
                })
            },
            setDate(e){
                this.date = e.detail.value;
            },
            setTime(e){
                this.time = e.detail.value;
            },
            // alipay(){
            //     uni.getProvider({
            //         service:'payment',
            //         success(res){
            //             console.log(res);
            //         },
            //     })
            //     let orderInfo = 'alipay_sdk=alipay-sdk-php-20200415&app_id=2.0161101007827E+15&biz_content=%7B%22body%22%3A%22%E6%98%93%E6%88%BF%E8%B4%AD%22%2C%22subject%22%3A+%22123213%22%2C%22out_trade_no%22%3A+%222020-11-09+17%3A05%3A14%22%2C%22timeout_express%22%3A+%2230m%22%2C%22total_amount%22%3A+%220.01%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%7D&charset=UTF-8&format=json&method=alipay.trade.app.pay&notify_url=http%3A%2F%2Fwww.sxy.comindex.php%2Fapi%2Falipay%2Fnotify&sign_type=RSA2&timestamp=2020-11-09+17%3A05%3A14&version=1.0&sign=SSJIQOyoXElR7NTVUJSWShU0CunJf6PBaPc%2FRdhVfpjMbK5IbwNwVMbjiUsZi3iFc1ZbZJKbJzkSWTlg5FFnvN%2FsC610FBHGJL%2BqHOLsryyO3c4Nz%2FdGX2%2BcviVLMLJhE3G6zRQMfPGeyY6%2BUS7rAWE4HsngRg4p0Nud3qzO6fray6aCzZmlb8WoOtzXdRduy6nvrGgcq%2BK%2BAY43eLhYg0pVDLeXlaHYuN8akHXjyVDC5kP5USyFzENgwYPpt2axydevgosZCbyZ18KzyLXVIGZc9dj74VQqa8VtZvq9dnaFLj1Cyj1zopG4fwdsb5OcDM1XXbZHgdDf4mXP4%2Bl1%2BA%3D%3D';
            //     uni.requestPayment({
            //     	provider: 'alipay',
            //     	orderInfo: orderInfo, 
            //     	success: function (res) {
            //     		console.log('success:' + JSON.stringify(res));
            //     	},
            //     	fail: function (err) {
            //     		console.log('fail:' + JSON.stringify(err));
            //     	}
            //     });
            // }
		},
        onLoad(){
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
            this.getData();
        }
	}
</script>

<style>
	.picker picker{
		height: 70rpx;
		line-height: 70rpx;
		color: #f49149;
	}
	.upload_img image{
		width: 36rpx;
		height: 36rpx;margin-right: 4rpx;
	}
	.picker{
		border-bottom: 1rpx solid #e6e6e6;
	}
	.inp{
		font-size: 30rpx;
		border-bottom: 1rpx solid #e6e6e6;
		line-height: 46rpx;
	}
	.inp1{
		height: 70rpx;
		left: 70rpx;
	}
	.rtit{
		margin-bottom: 20rpx;
	}
	.holder{
		color: #999;
	}
    .menu{width:690rpx;padding:0rpx 30rpx;height:75rpx;padding-top: 30rpx;box-sizing: border-box;}
    .row{margin-bottom:20rpx;font-size: 30rpx;color: #333;left: 50rpx;}
    .upload_img{background:#fff;color:#007AFF;
	display: flex;
	align-items: center;
	border-radius: 5rpx;font-size:30rpx;}
    .handle{width:690rpx;position:fixed;bottom:30rpx;left:30rpx;border-radius: 72rpx;background:#E74F38;color:#fff;text-align: center;line-height: 72rpx;display: flex;}
    .handle view{width:50%;}
    .set_live{background:#4CD964;border-radius: 72rpx 0 0 72rpx;}
	/* .close_live{background:#007AFF;} */
</style>
