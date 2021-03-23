<template>
	<view>
		<video :src="src" style="width:100vw;" controls=""></video>
        <view class="auth">
            <view class="auth_img">
                <image src="../static/photo.jpg"></image>
            </view>
            <view class="auth_info">
                <view class="auth_name"><text>王教授</text><image style="width:40rpx;height:40rpx;" src="../static/unfollow.png"></image></view>
                <view class="subject">科目：数学</view>
                <view class="auth_desc">一些人最大的问题不在于无知,而在于以无知当美德.只有抱有科学的态度,才能找到真正的解决办法.</view>
            </view>
        </view>
        <view class="gift">礼物</view>
        <view class="gifts">
            <view v-for="(item, index) in gift" :key="index" class="gift_img" @click="sendGift(item.id)">
                <image src="../static/rocket_icon.png"></image>
            </view>
        </view>
        <view class="content">
        <view style="width: 150upx;">
        	<view class="animate-wrap">
        		<view class="aa" :class="{'bb':item.index}" v-for="(item,index) in viewList" :key="index">
        			<image style="width: 50upx;height: 50upx;" mode="widthFix" :src="item.src" :animation="item.animationData"></image>
        		</view>
        	</view>
        	<image class="logo" src="../static/rose.png" @click="handleClick()"></image>
        </view>
        </view>
        <view>
            <view v-if="send_gift" class="popup_gift mask"></view>
            <view v-if="send_gift" class="popup_gift">
                <view style="display: flex;">
                    <image class="head_img" src="../static/t1.jpg"></image>
                    <view class="gift_info">
                        <view class="username">奥利安娜</view>
                        <view class="gift_content">送了一个火箭</view>
                    </view>
                </view>
                <image style="width:90rpx;height:90rpx" src="../static/rocket.png"></image>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:'',
                viewList:[],
                gift:[
                    {id:1, name:'火箭'}
                ],
                send_gift:0
			}
		},
		methods: {
			handleClick (index) {
				let that = this
				let arr = ['-','']
				let arrImg = ['../static/rose.png','../static/rose.png','../static/rose.png']
				let randomImg = Math.floor(Math.random() * arrImg.length)
				let arrPush = {
					src : arrImg[randomImg],	//用于随机图标
					back : this.random(),		//可删除
					index : false,				//可删除
					time : 5000,				//动画时间
					animationData: {},			//每个盒子独立动画不可全局
					x :  Math.ceil(Math.random() * 50 ),	//方向间距
					q :  Math.floor(Math.random() * arr.length ),		//用于随机方向
					lastIndex : 5,		//用于删除数组
					timer : null,		//定时器
					lastTime : 1000		//删除的倒计时
				}
				//函数节流限制用户频繁快速点击
				if(new Date() - this.pageDate < 300) return			//如果点击的时间小于初始时间300
				this.pageDate = new Date();		//同步全局时间
				//------------
				this.viewList.push(arrPush)
				
				//核心动画
				this.viewList.forEach((i,o,v)=>{
					var animate = uni.createAnimation({
							duration: i.time,
							timingFunction: 'ease-out'
						})
					that.animation = animate
					let time = arr[i.q] + i.x		//随机的方向和间距
					setTimeout(()=>{
						that.animation.translateY(-200).step()
						that.animation.opacity(0).step()
						that.animation.translateX(Number(time)).step()
						i.animationData = that.animation.export()
						//函数防抖
						clearInterval(i.timer)
						i.timer = setInterval(()=>{
							i.lastIndex--				//每个图标的倒计时到0删除
							if(i.lastIndex < 0) {
								v.splice(i,1)
								clearInterval(i.timer)
							}
						},i.lastTime)
					},100)
				})
			},
            random (){
            	let r = Math.floor(Math.random() * 256),
            		g = Math.floor(Math.random() * 256),
            		b = Math.floor(Math.random() * 256);
            	return `rgb(${r},${g},${b})`
            },
            sendGift(){
                var that = this;
                this.send_gift = 1;
                setTimeout(function(){
                    that.send_gift = 0;
                },5000)
            }
		},
        onLoad(params){
            var id = params.id;
            console.log(id);
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
        }
	}
</script>

<style>
    .gift{width:100%;padding:20rpx 30rpx;font-size:33rpx;}
    .gifts{display: flex;}
    .gift_img{width:72rpx;height:72rpx;margin-left:20rpx;border:1rpx solid #eeeeee;padding:8rpx;}
    .gift_img image{width:100%;height:100%;}
    .auth{width:100%;padding:20rpx 30rpx;display:flex;}
    .auth_img{width:200rpx;height:200rpx;border-radius:100rpx;overflow:hidden;margin-right: 20rpx;}
    .auth_img image{width:100%;height:100%;}
    .auth_info{width:470rpx;}
    .auth_name{font-size:33rpx;display: flex;justify-content: space-between;}
    .subject{font-size:27rpx;margin-top:10rpx;}
    .auth_desc{font-size:27rpx;margin-top:10rpx;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis;}
    .animate-wrap{display: inline-block;margin-right: 10px;position: absolute;width: 100upx;}.content > view {position: absolute;bottom: 10%;right: 5%;}
    .logo{display: inline-block;position: absolute;right: 0;width: 70upx;height: 70upx;}
    .aa{position: absolute;font-size: 30upx;color: white;text-align: center;line-height: 50upx;width: 80upx;transform: translateY(0);}
    .popup_gift{position:fixed;top:50%;width:330rpx;height:90rpx;border-radius: 72rpx;z-index:11;display: flex;justify-content: space-between;}
    .mask{background:#000;z-index:10;opacity: 0.3;}
    .head_img{width:90rpx;height:90rpx;border-radius: 90rpx;}
    .gift_info{font-size:25rpx;line-height: 45rpx;font-weight: bold;}
    .username{color:#fff;}
    .gift_content{color:#F0AD4E;}
</style>
