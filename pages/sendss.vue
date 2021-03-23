<template>
	<view>
		<view style="width: 100%;height:50px">
			<view @click="send" style="width: 60px;height:25px;line-height: 25px;border:1px solid #4CA8E7;border-radius: 2px;color:#4CA8E7;float: right;text-align: center;margin-top: 12px;margin-right: 20px;">发布</view>
		</view>
		<view style="padding:0 20px">
			<textarea @input="bindTextAreaBlur" placeholder="请描述..." :value="value"  style="width: 100%;height:200px;border: 2px solid #f4f4f4;margin:0 auto;padding: 10rpx 20rpx;box-sizing: border-box;" />
			<view v-if="imgs == []"></view>
			<view v-else v-for="(item,index) in imgs" style="width: 100px;height:100px;margin-top: 20px;float:left;margin-left:10px;">
				<image @click="upLload" :src="item.img" style="width: 100px;height:100px;"></image>
			</view>
			<view  style="width: 100px;height:100px;margin-top: 20px;float:left;margin-left:10px;">
				<image @click="upLload" src="../static/123.png" style="width: 100px;height:100px;"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				value:"",
				imgs:[],
				imgs_need:[]
			}
		},
		onLoad(options){
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
			uni.getStorage({
				key:'user',
				success(res) {
					that.user_id = res.data.id
				}
			})
		},
		methods:{
			bindTextAreaBlur(e){
				var that = this
				console.log(e.detail.value)
				that.value = e.detail.value
			},
			upLload(){
				var that =this
				uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
				        uni.uploadFile({
				            url:that.REQUEST_URL + 'index.php/api/upload/zhibo_upload',
				            filePath: tempFilePaths[0],
				            name: 'file',
				            formData: {
				                'user': 'test'
				            },
				            success: (res) => {
								var img_src = JSON.parse(res.data).url;
								console.log(img_src);
								var IMG = that.REQUEST_URL + img_src
								that.imgs.unshift({img:IMG} )
								that.imgs_need.unshift(img_src)
				            }
				        });
				    }
				});
			},
			send(){
				var that =this
				var arr = that.imgs_need
				// for(var i=0;i<ids.length;i++){
				// 	arr.push(ids[i].img)
				// }
				arr = arr.join(',');
				console.log(arr)
				// angular.forEach(pulsarServers,function (item) {
				//   ids.push(item.img);
				// });
				// ids = ids.join(',');
				// console.log(ids)
				uni.request({
					url:that.REQUEST_URL + 'index.php/api/shuoshuo/add_shuoshuo',
					method:"POST",
					data:{
						user_id:that.user_id,
						content:that.value,
						imgs:arr
					},
					success(res){
						console.log(res)
						if(res.data.code == 1){
						uni.showToast({
							title:'发布成功'
						})
						setTimeout(()=>{
						   uni.switchTab({
						   	url:'tabbar/moments'
						   })
						},1000)
						// uni.navigateBack({
						// 	delta: 2
						// })
						}else{
							uni.showToast({
								title:res.data.msg
							})
						}
					}
				})
				
			},
		}
	}
</script>

<style>
</style>
