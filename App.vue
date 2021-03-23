<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			var that = this;
			const domModule = weex.requireModule('dom')
			domModule.addRule('fontFace', {
			    'fontFamily': "iconfont",
			    'src': "url('http://at.alicdn.com/t/font_1859985_7mxozsfdvib.ttf')"
			});
			plus.runtime.getProperty(plus.runtime.appid, function(inf) {
				var wgtVer = inf.version;
				uni.request({
				    url: that.REQUEST_URL + 'index.php/api/Upgrade/upgrade',
				    method: 'POST',
				    data: {
				        version: wgtVer
				    },
				    header: {
				        'Content-Type': 'application/x-www-form-urlencoded'
				    },
				    success: res => {
				        console.log(res)
				        if (res.data.status == 1) {
				            if (res.data.data.flag == 1) {
								console.log(res)
				                uni.showModal({
				                    title: '杭峰道场365',
				                    content: '有新版本，是否更新？',
				                    success: function(res1) {
				                        if (res1.confirm) {
				                            // plus.nativeUI.showWaiting("正在下载统计局APP更新文件...");
				                            uni.showToast({
				                                title: "正在下载杭峰道场365更新文件...",
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
				               console.log('暂无更新')
				            }
				        } else {
				           console.log('暂无更新')
				        }
							
				    }
				});
			});
			// 获取当前版本号
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style>
	@import url("/common/free.css");
	@import url("/common/common.css");
	/* #ifndef APP-PLUS-NVUE */
	@import url("/common/icon.css");
	/* #endif */
	/*每个页面公共css */
	.color{
		color: #4ca8e7;
	}
	.flex{
		display: flex;
		align-items: center;
	}
	.fb{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.ovh{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 100%;
	}
	.imgbox image{
		width: 100%;
		height: 100%;
	}
	.logopart {
		background-color: #4ca8e7;
		width: 100%;
		height: 310rpx;
		padding-top: 50rpx;
		box-sizing: border-box;
	}
	
	.logo {
		width: 130rpx;
		height: 130rpx;
		margin: 0 auto;
	}
	
	.logotit {
		text-align: center;
		font-size: 36rpx;
		color: #fff;
		margin: 30rpx auto;
	}
	
</style>
