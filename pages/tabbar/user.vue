<template>
    <view>
        <view class="userbox">
            <view class="fb">
                <view v-if="userinfo.head_img == null" class="left imgbox">
                    <image src="../../static/photo.jpg"></image>
                </view>
                <view v-if="userinfo.head_img != null" class="left imgbox">
                    <image :src="userinfo.head_img"></image>
                </view>
                <view class="right">
                    <view class="name fb">
                        <view class="w60">{{userinfo.nickname}}</view>
                        <view class="cardnum">NO：20201020330</view>
                    </view>
                    <view class="char flex">
                        <image src="../../static/char.png"></image>普通会员
                    </view>
                </view>
                <!-- <view @click="exit" class="exit">退出</view> -->
            </view>
            <view class="usertime" v-if="userinfo.member_status">到期时间：{{userinfo.end_time}}</view>
            <view class="usertime" v-if="!userinfo.member_status" @click="toxufei">会员已到期，去续费&gt;</view>
            <!-- <view class="usertime" @click="">已到期，去续费&gt;</view> -->
			<view style="display: flex;align-items: center;position: absolute;bottom: 46rpx;left: 70rpx;">
				<image src="../../static/gift/zs.png" style="width: 32rpx;height: 32rpx;"></image>
				<text style="font-size: 30rpx;color: #FFFFFF;margin-top: -6rpx;margin-left: 6rpx;">{{balance}}</text>
			</view>
        </view>
        <view class="enterlist enter">

            <navigator hover-class="none" class="part" url="/pages/myfollow">
                <image src="../../static/enter/i2.png"></image>
                <text>我的关注</text>
            </navigator>
            <navigator hover-class="none" class="part" url="/pages/mycollect">
                <image src="../../static/enter/i3.png"></image>
                <text>我的收藏</text>
            </navigator>
        </view>
        <view class="enterlist">
			<navigator hover-class="none" class="part" :url="'/pages/wallet/index?balance='+balance">
			    <image src="../../static/enter/zhu.png"></image>
			    <text>我的账户</text>
			</navigator>
            <navigator hover-class="none" class="part" url="/pages/order">
                <image src="../../static/enter/i1.png"></image>
                <text>我的课程</text>
            </navigator>
           <!-- <navigator hover-class="none" class="part" url="/pages/myhours">
               <image src="../../static/enter/i4.png"></image>
               <text>学习时长</text>
           </navigator> -->
		  <navigator hover-class="none" class="part" url="/pages/profile">
		      <image src="../../static/enter/i10.png"></image>
		      <text>个人信息</text>
		  </navigator>
            <navigator hover-class="none" class="part" url="/pages/about">
                <image src="../../static/enter/i6.png"></image>
                <text>关于我们</text>
            </navigator>
            <navigator hover-class="none" class="part" url="/pages/help">
                <image src="../../static/enter/i5.png"></image>
                <text>帮助与客服</text>
            </navigator>
            <view class="part" @click="check">
                <image src="../../static/enter/i7.png"></image>
                <text>检查更新</text>
            </view>
            <view class="part" @click="isPlayLive">
                <image src="../../static/enter/i8.png"></image>
                <text>讲师入口</text>
            </view>
			<view class="part" @click="exit">
			    <image src="../../static/enter/i9.png"></image>
			    <text>退出账号</text>
			</view>
        </view>
    </view>
</template>

<script>
    import util from '@/util/util.js';
    export default {
        data() {
            return {
                userinfo: {},
                wgtVer: '',
				balance: 0//余额
            }
        },
		onPullDownRefresh: function() {
			var that = this
			that.getUser()
		},
        methods: {
			//是否能直播
			isPlayLive(){
				let data = {
					uid:uni.getStorageSync('user').id,
				}
				this.$H.post('/user/apply_live', data).then(res => {
					console.log(res.data)
					if (res.data.status ==0){
						uni.showToast({
							title: '请耐心等待后台工作人员审核',
							icon: 'none'
						});
					} else if (res.data.status == 1) {
						uni.navigateTo({
						    url:'/pages/teacher'
						})
					} else {
						uni.showToast({
							title: res.data.content,
							icon: 'none'
						});
					}
				}).catch(err => {
					// console.log(err);
				})
			},
			getUser(){
				var that=this;
				var uid = uni.getStorageSync('user')['id'];
				uni.request({
				    url: this.REQUEST_URL + '/index.php/api/user/member',
				    method: 'POST',
				    data: {
				        uid: uid
				    },
				    header: {
				        'Content-Type': 'application/x-www-form-urlencoded'
				    },
				    success: res => {
						uni.stopPullDownRefresh()
				        console.log(res.data.datas)
						this.balance = res.data.datas.balance
						uni.setStorage({
							key:"userId",
							data:res.data.datas.id
						})
				        if (res.data.code == 200) {
				            that.userinfo = res.data.datas;
							console.log('用户信息')
							console.log(that.userinfo)
				        } else {
				            uni.showToast({
				                title: res.data.message,
				                duration: 2000,
				                icon: 'none'
				            });
				        }
				    }
				});
			},
            toxufei() {
                uni.navigateTo({
                    url: '/pages/xufei'
                })
            },
            isLogin() {
                if (!util.isLogin()) {
                    uni.showToast({
                        title: '登录过期,请重新登录',
                        icon: 'none',
                        duration: 2000,
                        complete() {
                            uni.reLaunch({
                                url: '/pages/login'
                            })
                        }
                    })
                }
            },
            exit() {
                uni.showModal({
                    title: '提示',
                    content: '确定退出?',
                    complete(res) {
                        console.log(res);
                        if (res.confirm) {
                            uni.clearStorageSync();
                            uni.reLaunch({
                                url: '/pages/login'
                            })
                        }
                    }
                })
            },
            goLive(){
                if (this.userinfo.group_status) {
                    uni.navigateTo({
                        url:'/pages/teacher'
                    })
					// uni.navigateTo({
					//     url:'/pages/create-live/create-live'
					// })
                } else {
                    uni.showToast({
                        title:'权限不足',
                        icon:'none',
                        duration:2000
                    })
                }
            },
            check() {
                // 获取当前版本号
                var that = this;
                uni.request({
                    url: that.REQUEST_URL + 'index.php/api/Upgrade/upgrade',
                    method: 'POST',
                    data: {
                        version: that.wgtVer
                    },
                    header: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    success: res => {
                        console.log(res)
                        if (res.data.status == 1) {
                            if (res.data.data.flag == 1) {
                                uni.showModal({
                                    title: '洵子教育365',
                                    content: '有新版本，是否更新？',
                                    success: function(res1) {
                                        if (res1.confirm) {
                                            // plus.nativeUI.showWaiting("正在下载统计局APP更新文件...");
                                            uni.showToast({
                                                title: "正在下载洵子教育APP更新文件...",
                                                duration: 5000,
                                                icon: 'none'
                                            });

                                            plus.runtime.openURL(res.data.data.version.url);
                                        } else if (res1.cancel) {
                                            console.log('用户点击取消');
                                        }
                                    }
                                });
                            } else {
                                uni.showToast({
                                    title: res.data.message,
                                    duration: 1200,
                                    icon: 'none'
                                });
                            }
                        } else {
                            uni.showToast({
                                title: res.data.msg,
                                duration: 1200,
                                icon: 'none'
                            });
                        }

                    }
                });
            },
        },
		onShow() {
			var that=this;
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
			that.getUser()
		},
        onLoad() {
            var that = this;
            that.isLogin();
            
			plus.runtime.getProperty(plus.runtime.appid, function(inf) {
                that.wgtVer = inf.version;
                console.log(that.wgtVer);
            });
        }
    }
</script>

<style>
    .exit {
        position: absolute;
        right: 20rpx;
        top: 20rpx;
        color: red;
        font-size: 25rpx;
    }

    page {
        background-color: #f2f2f2;
    }

    .userbox {
        padding: 50rpx 30rpx;
        box-sizing: border-box;
        background-color: #4CA8E7;
        position: relative;
        overflow: hidden;
    }

    .userbox::before {
        content: '';
        position: absolute;
        width: 320rpx;
        height: 320rpx;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.1);
        right: -50rpx;
        top: -150rpx;
        pointer-events: none;
    }

    .userbox::after {
        content: '';
        position: absolute;
        width: 320rpx;
        height: 320rpx;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.1);
        right: -180rpx;
        bottom: -120rpx;
        pointer-events: none;
    }

    .userbox .left {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
        overflow: hidden;
    }

    .userbox .right {
        width: 590rpx;
        padding-left: 20rpx;
        color: #fff;
        box-sizing: border-box;
    }

    .userbox .w60 {
        width: 60%;
    }

    .userbox .name {
        font-size: 30rpx;
        line-height: 60rpx;
        font-weight: bold;
    }

    .userbox .char {
        font-size: 24rpx;
        line-height: 40rpx;
        color: #eee;
    }

    .cardnum {
        font-size: 24rpx;
        color: #FBD786;
        text-align: right;
        font-weight: normal;
    }

    .usertime {
        text-align: right;
        color: #eee;
        font-size: 24rpx;
        padding-top: 60rpx;
    }

    .char image {
        width: 38rpx;
        height: 38rpx;
        margin-right: 8rpx;
    }

    .enterlist {
        display: flex;
        flex-wrap: wrap;
        padding: 20rpx 30rpx;
        background-color: #fff;
        /* width: 700rpx; */
        margin: 30rpx auto;
        box-sizing: border-box;
        border-radius: 10rpx;
    }

    .enter {
        width: 100%;
        box-shadow: none;
        margin: 0;
        padding: 10rpx;
    }

    .enter .part {
        flex-direction: row !important;
    }

    .enter .part image {
        width: 50rpx !important;
        height: 50rpx !important;
        margin-right: 16rpx;
    }

    .enterlist .part {
        width: 33.33%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 20rpx 0;
        box-sizing: border-box;
    }

    .enter .part {
        width: 50% !important;
    }

    .enterlist .part image {
        width: 60rpx;
        height: 60rpx;
    }

    .enterlist .part text {
        color: #505050;
        line-height: 60rpx;
        font-size: 28rpx;
    }
</style>
