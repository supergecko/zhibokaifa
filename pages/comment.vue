<template>
	<view class="app">
		<view class="list">
			<view class="part" >
				<view class="fb">
					<view class="user"><image :src="oshuoshuo.photo"></image>{{oshuoshuo.nickname}}</view>
					<view class="time">{{oshuoshuo.addtime}}</view>
				</view>
				<!-- <view class="content">{{oshuoshuo.content}}</view> -->
				<view class="content">
					<view>{{oshuoshuo.content}}</view>
					<view class="imgrow" v-if="oshuoshuo.imgs !=''">
						<image @click.stop="prew(items,oshuoshuo.imgs)" :src="src+items" class="imgbox" v-for="(items, index) in oshuoshuo.imgs" :key="index"></image>
					</view>
				</view>
				<view class="btnrow fb">
					<view class="forward" @click="share"><image style="width: 40rpx;height: 40rpx;" src="/static/forward.png"></image>{{oshuoshuo.fenxiang_num}}</view>
					<view @click="tocomm(1,oshuoshuo.id,'')" class="forward"><image style="width: 40rpx;height: 40rpx;" src="/static/comment.png"></image>{{oshuoshuo.comment}}</view>
					<view @click="tolike(oshuoshuo.id)" :class="date.zan!=null?'forward red':'forward' "><image style="width: 40rpx;height: 40rpx;" :src="date.zan!=null?'/static/like_hl.png':'/static/like.png'"></image>{{oshuoshuo.zan_num}}</view>
				</view>
			</view>
		</view>
		<view class="allcomm">全部评论</view>
		<view class="commlist">
			<view class="report" v-for="(item, index) in date.pinglun" :key="index">
				<view class="flex rename">
					<image :src="item.photo != null?item.photo:'../../static/photo.jpg'"></image>
					<text>{{item.nickname}}</text>
				</view>
				<view class="pl80" style="margin-bottom: 40rpx;">
					{{item.pl_content}}
				</view>
				<view class="pl80">
					<view class="writer " v-for="(items ,index) in item.huifu">
						<text>{{items.hfname}}</text>：{{items.hf_content}}
					</view>
				</view>
				<view class="pl80 retime fb" >
					<view>{{item.addtime}}</view>
					<view class="rebtn" @click="tocomm(2,item.id,item.nickname)">回复</view>
				</view>
			</view>
		</view>
		
		<!--  -->
		<view style="height: 116rpx;"></view>
		<form >
		<view class="bottfix fb">
			<input type="text" :value="value" :focus="focus" :placeholder="holder" @input="bindInput" />
			<view class="btn" @click="send()">发送</view>
		</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oshuoshuo:'',
				date:'',
				src:'',
				id:"",
				user_id:"",
				holder:'评论',
				type:1,//默认1，评论；用户点击回复时type=2
				focus:true,
				value:''
			}
		},
		onLoad(options) {
			var that = this
			console.log(options)
			that.id = options.id
			var user_id=uni.getStorageSync('user').id
			that.user_id = user_id
		
		},
		onShow() {
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
			this.src=this.REQUEST_URL
			that.getData(that.id)
			
		},
		methods: {
			prew(url,arr){
				var arr=arr
				var urls=[]
				//预览图片
				for(var i=0;i<arr.length;i++){
					urls.push(this.src+arr[i])
				}
				uni.previewImage({
					urls: urls,
					current: this.src+url
				});
			},
			bindInput(e){
				var that = this
				console.log(e.detail.value)
				that.value = e.detail.value
			},
			send(id){
				var that =this
				console.log('获取说说id',JSON.stringify(id) )
				var comment= that.value
				//获取输入内容 判断type是评论 1/回复 2，请求接口
				if(that.type== 1){
					uni.request({
						url: that.REQUEST_URL +"index.php/api/shuoshuo/pinglun",
						method:"POST",
						data:{
							uid:that.user_id,
							shuo_id:that.id,
							content:comment
						},
						success(res) {
							console.log(res)
							that.getData(that.id)
							// that.holder ='评论',
							that.value=''
							uni.showToast({
								title:res.data.msg
							})
						}
					})
				}else{
					uni.request({
						url:that.REQUEST_URL + 'index.php/api/shuoshuo/huifu',
						method:"POST",
						data:{
							id:that.pinglun_id,
							uid:that.user_id,
							content:that.value,
							type:1
						},
						success(res) {
							console.log(res)
							that.getData(that.id)
							that.value=''
							// that.holder = '评论'
							uni.showToast({
								title:res.data.msg
							})
						}
					})
				}
				// that.holder ='评论',
				that.getData(id)
			},
			tocomm(type,id,name){
				console.log(id)
				var that=this
				var type=type;
				if(type==1){
					that.holder='评论'
				}else{
					that.holder='：回复'+name
					that.pinglun_id = id
				}
				this.focus=true
				this.type=type
			},
			share(){
				var that=this
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href: that.REQUEST_URL+"xunzi365-app.apk",
				    title: "洵子教育365",
				    summary: that.oshuoshuo.content,
				    imageUrl: "/static/logo.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
						uni.request({
							url:that.REQUEST_URL+'index.php/api/shuoshuo/fenxiang',
							method:"POST",
							data:{
								sid:that.oshuoshuo.id
							},
							success(res) {
							}
						})
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
				
			},
			tolike(id){
				var user_id=uni.getStorageSync('user').id
				var that=this
				console.log(id)
				uni.request({
					url:that.REQUEST_URL+'index.php/api/collect/add_dianzan',
					method:"POST",
					data:{
						user_id:user_id,
						shuoshuo_id:id
					},
					success(res) {
						console.log('点赞',res)
						that.getData(that.id)
						uni.showToast({
							title:res.data.msg,
							icon:'none',
							duration:2000,
						})
					}
				})
			},
			
			getData(id){
				var that =this
				uni.showLoading({
					title:'加载中……'
				})
				uni.request({
					url:that.REQUEST_URL +'index.php/api/shuoshuo/shuoshuo',
					method:"POST",
					data:{
						id:id,
						uid:that.user_id
					},
					success(res) {
						console.log(res)
						uni.hideLoading()
						that.date = res.data.datas
						that.oshuoshuo = res.data.datas.shuoshuo
					}
				})
			},
		}
	}
</script>

<style>
	page{
		height: 100%;
		background-color: #f5f5f5;
	}
	.imgrow{
		margin-top: 20rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.imgrow image{
		width: 120rpx;
		height: 120rpx;
		margin: 20rpx;
	}
	.part{
		width: 100%;
		background-color: #fff;
		margin-bottom: 20rpx;
		padding: 25rpx;
		box-sizing: border-box;
	}
	.user{
		display: flex;align-items: center;
		font-size: 30rpx;
		color: #06437e;
	}
	.user image{
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
		margin-right: 16rpx;
	}
	.time{
		font-size: 22rpx;
		color: #999;
	}
	.content{
		padding: 20rpx;
		padding-left: 86rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		color: #000;
	}
	.btnrow{
		padding-left: 86rpx;
		box-sizing: border-box;
		margin-top: 20rpx;
		font-size: 28rpx;
		color: #666;
	}
	.forward{
		display: flex;
		align-items: center;
	}
	.forward image{
		width: 40rpx!important;
		height: 40rpx!important;
		margin-right: 4rpx;
	}
	.red{
		color: #e74f38;
	}
	.bottfix{
		height: 116rpx;
		background-color: #fff;
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		box-sizing: border-box;
		padding: 0 20rpx;
	}
	.bottfix input{
		height: 76rpx;
		width: 580rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
		background-color: #f5f5f5;
		font-size: 28rpx;
	}
	.btn{
		width: 110rpx;
		font-size: 28rpx;
		line-height: 76rpx;
		height: 76rpx;
		background-color: #4ca8e7;
		color: #fff;
		text-align: center;
		border-radius: 4rpx;
	}
	.allcomm{
		background-color: #fff;
		font-size: 30rpx;
		color: #333;
		padding: 30rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid #e6e6e6;
	}
	.commlist{
		background-color: #fff;
	}
	.report{
		border-bottom: 1rpx solid #e6e6e6;
		padding: 24rpx 40rpx;
		box-sizing: border-box;
	}
	.rename image{
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		margin-right: 10rpx;
	}
	.rename{
		font-size: 28rpx;
		margin-bottom: 30rpx;
	}
	.pl80{
		padding-left: 80rpx;
		box-sizing: border-box;
		font-size: 28rpx;
	}
	.writer{
		margin-top: 10rpx;
		padding: 20rpx;
		box-sizing: border-box;
		background-color: #f5f5f5;
		font-size: 28rpx;
	}
	.writer text{
		color: #06437e;
	}
	.retime{
		font-size: 26rpx;
		color: #aaa;
		margin-top: 30rpx;
	}
	.rebtn{
		color: #06437e;
	}
</style>
