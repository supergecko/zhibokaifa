<template>
	<view class="background">
		<!-- 帮助问题列表 -->
		<view class="list" v-for="(item,index) in list" >
			<text @click="jumpToHelps(item.id)" class="title">{{item.title}}</text>
		</view>
		<!-- 联系客服按钮 -->
		<view class="contact">
			<button class="button" @click="jumpPhone">联系客服</button>
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
			jumpToHelps(id){
				console.log(id)
				uni.navigateTo({
					url:'/pages/helps?id='+id
				})
			},
			jumpPhone(){
				var that =this
				console.log('1111')
				uni.makePhoneCall({
					phoneNumber:that.list.kefudianhua,
					success(res){
						console.log(res)
					}
				})
			}
		},
        onLoad(){
            var that = this;
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
            uni.request({
                url:that.REQUEST_URL + 'index.php/api/about/help',
                method:'post',
                data:{},
                header: {
                	'Content-Type': 'application/x-www-form-urlencoded'
                },
                success(res){
                    console.log(res);
					that.list = res.data.datas
                }
            })
        }
	}
</script>

<style>
	.background{
		padding:30px;
	}
	.list{
		background:#fff;
		width:100%;
	}
	.contact{
		margin:0 auto;
		width: 140px;
	}
	.title{
		border-bottom: 2px solid #f1f1f1;
	}
	.button{
		background:#4CA8E7;
		color:#fff;
		margin-top: 20px;
	}

</style>
