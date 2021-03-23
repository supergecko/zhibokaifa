<template>
	<view>
		<form @submit="formSubmit">
		<view class="bgbox">
			<view class="head" v-if="!headchange" @click="upload_img"><image :src="userinfo.head_img?userinfo.head_img:'../static/head.png'"></image></view>
			<view class="head" v-if="headchange"  @click="upload_img"><image :src="img_src"></image></view>
			<view class="bott">
				<view class="t">个人信息</view>
				<view class="b">Personal Data</view>
			</view>
		</view>
		
		<view class="user">
			<view class="tit">真实姓名</view>
			<view class="row">
				<input name="realname" placeholder="" :value="userinfo.nickname" />
			</view>
			<view class="tit">性别</view>
			<view class="row flex sexbox">
				<radio-group name="sex">
					<label class="radio">
						<radio name="sex" value="1" :checked="userinfo.sex==1" color="#4CA8E7" />男</label>
					<label class="radio">
						<radio name="sex" value="2" :checked="userinfo.sex==2" color="#4CA8E7" />女</label>
				</radio-group>
			</view>
		</view>
		<button class="dui" form-type="submit"><image src="../static/dui.png"></image></button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headchange:false,
				img_src:'',
				headData:'',
				userinfo:''
			}
		},
		onLoad() {
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
			that.getUser()
		},
		methods: {
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
				        console.log(res)
				        if (res.data.code == 200) {
				            that.userinfo = res.data.datas;
							// 将个人信息头像的路径分割取后面
							var temp=res.data.datas.head_img.split("uploads/face/");
							console.log(temp)
				            that.headData =temp[1]
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
			                url : that.REQUEST_URL + 'index.php/api/user/header_upload',
			                filePath: tempFilePaths[0],
			                name: 'file',
			                formData: {
			                    'user': 'test'
			                },
			                success: function (result) {
								that.headchange=true
			                    var img_src = JSON.parse(result.data).info.replace(/\\/g,'/');
			                    that.headData = img_src;
			                    img_src = that.icon_url + img_src;
			                    that.img_src = img_src;
			                }
			            });
			        }
			    })
			},
			
			formSubmit: function(e) {
				var warn = "";
				var flag = false;
				var that = this;
				var uid = uni.getStorageSync('user')['id'];
				console.log('---------')
				console.log(e.detail.value)
				if (e.detail.value.realname == '') {
					warn = '请输入真实姓名'
				} else {
					flag = true;
					// return false
					uni.request({
						url: that.REQUEST_URL + 'index.php/api/user/edit_user',
						method: 'POST',
						data: {
							user_id:uid,
							head_img:that.headData,
			                nickname:e.detail.value.realname,
			                sex:e.detail.value.sex,
						},
						header: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							console.log(res)
							if (res.data.code == 200) {
								uni.showToast({
									title: res.data.msg,
									duration: 2000,
									icon: 'none'
								});
								
							} else {
								uni.showToast({
									title: res.data.msg,
									duration: 2000,
									icon: 'none'
								});
							}
			
						}
					});
			
				}
				if (flag == false) {
					uni.showToast({
						title: warn,
						icon: 'none',
						duration: 2000,
					});
				}
			},
		}
	}
</script>

<style>
	.head{
		width: 120rpx;
		height: 120rpx;
		position: absolute;
		bottom: 0rpx;
		left: 50%;
		margin: -60rpx;
		background-color: #eee;
		box-sizing: border-box;
		border-radius: 50%;
		border: 4rpx solid #fff;
		box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.2);
		overflow: hidden;
	}
	.head image{
		width: 100%;
		height: 100%;
	}
	.bgbox{
		width: 100%;
		height: 300rpx;
		position: relative;
		background-color: #4CA8E7;
		/* background: radial-gradient(center, circle, #47c9dd,#31c6e6); */
		/* background-image: linear-gradient(circle); */
	}
	.dui{
		padding: 0;
		background-color: rgba(0,0,0,0);
		outline: none;
		border: 0;
		width: 120rpx;
		height: 120rpx;
		position: fixed;bottom: 40rpx;
		left: 50%;
		margin-left: -60rpx;
	}
	.dui::after{
		border: 0;
	}
	.dui image{
		width: 100%;
		height: 100%;
	}
	.bgbox .bott{
		position: absolute;
		bottom: 30rpx;
		left: 40rpx;
		color: #fff;
	}
	.bgbox::before {
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
	
	.bgbox::after {
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
	.bgbox .bott .t{
		font-size: 40rpx;
	}
	.bgbox .bott .b{
		font-size: 34rpx;
	}
	.sexbox {
		font-size: 28rpx;
		color: #333;
	}
	
	.sexbox radio {
		transform: scale(0.8);
	}
	
	.sexbox label {
		margin-right: 30rpx;
	}
	.user{
		width: 90%;
		margin: 0 auto;
		margin-top: 80rpx;
	}
	.user .row {
		border-bottom: 1rpx solid #e6e6e6;
		margin-bottom: 26rpx;
		height: 76rpx;
		line-height: 76rpx;
	}
	.user .tit {
		font-size: 26rpx;
		color: #333;
		margin-bottom: 10rpx;
	}
	.row input{
		font-size: 28rpx;
		height: 76rpx;
		line-height: 76rpx;
	}
</style>
