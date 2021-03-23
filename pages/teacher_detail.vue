<template>
	<view>
		<view class="bann imgbox">
            <image :src="data.tj_images"></image>
<!--            <video v-else :src="video_src" controls style="width: 100%;"></video>
            <video style="width:100%;" v-else :src="video_src"></video> -->
        </view>
		<view class="basic">
			<view class="name">{{data.title}}</view>
			<view class="cate fb">
				<view><image src="../static/cate.png"></image>商户: {{data.nickname}}</view>
				<view @click="bindGz(data.id)" class="collect flex"><image :src="data.guanzhu != null?'/static/follow.png':'/static/unfollow.png'"></image></view>
			</view>
		</view>
<!-- 		<view class="obox" :class="all?'auto':'limit'">
			<view class="tit"><text>课程列表</text></view>
            
			<view class="lessbox">
				<view class="lesson ovh" v-for="(item, index) in data.goods_cate" :key="index" >
                    {{item.type_name}}<image @click="select(index)" class="arrow" src="../static/arrow.png"></image>
                    <view v-if="select_index == index">
                        <view style="margin-left: 40rpx;" v-for="(item2, index2) in item.goods" @click="select1(item2.video_url)">{{item2.goods_name}}</view>
                    </view>
                </view>
            </view>
			<view class="showall" @click="showall">{{showtit}}</view>
		</view> -->
		<view class="obox">
			<view class="tit"><text>商户信息</text></view>
			<view class="name" v-for="(item,index) in data.info">{{item}}</view>
		</view>
		<view class="obox">
			<view class="tit"><text>商户展示</text></view>
			<view class="olist">
				<view class="part" v-for="(item, index) in data.kecheng" :key="index" @click="toDetail(item.id)">
					<view class="parts">
						<view class="imgbox"><image mode="scaleToFill" :src="item.photo"></image></view>
						<view class="right">
							<view class="name ovh">{{item.title}}</view>
							<!-- <view class="teacher">{{item.teacher}}</view> -->
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				all:false,
				lesson:[],
				list:[],
                data:[],
                select_index:-1,
                is_video:0,
			}
		},
		onLoad(options) {
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
			console.log('获取讲师id',options)
			uni.getStorage({
				key:'user',
				success(res) {
					that.user_id = res.data.id
				}
			})
			that.getData(options.did);
		},
		methods: {
			getData(id){
				var user=uni.getStorageSync('user')
                var that = this;
				var type = that.type
                uni.request({
                    url:that.REQUEST_URL + 'index.php/api/daka/daka',
                    method:'post',
                    data:{
                        did:id,
						uid:user.id,
                    },
                    header: {
                    	'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    success(res){
                        console.log(res);
                            that.data = res.data.data;
                    }
                    
                })
			},
			select(index){
                console.log(index);
				var that=this;
                if (that.select_index == index) {
                    that.select_index = -1;
                }else{
                    that.select_index = index;
                }
				// that.getData(id)
			},
			bindGz(id){
				var that = this
				console.log(id)
				var user=uni.getStorageSync('user')
				uni.request({
					url:that.REQUEST_URL+'index.php/api/collect/add_collect',
					method:"POST",
					data:{
						uid:user.id,
						goods_id:id,
						type:2
					},
					success(res) {
						console.log(res)
						uni.showToast({
							title:res.data.msg
						})
						that.getData(id);
					}
				})
			},
			showall(){
				var all=this.all;
				this.all=!all
				this.showtit=this.all?'收起':'展开'
			},
			toDetail(id){
				uni.navigateTo({
					url:'/pages/detail?id='+id
				})
				// var that=this;
				// that.getData((id))
			},
            select1(index2){
                var video_src = this.REQUEST_URL + index2
                this.is_video = 1;
                // this.video_src = video_src;
                console.log(this.video_src);
            }
		}
	}
</script>

<style>
	page{
		background-color: #f5f5f5;
	}
	.bann{
		width: 100%;
		height: 380rpx;
		overflow: hidden;
	}
	.basic{
		padding: 24rpx;
		box-sizing: border-box;
		background-color: #fff;
	}
	.obox{
		width: 700rpx;
		margin: 20rpx auto;
		padding: 24rpx;
		box-sizing: border-box;	
		background-color: #fff;
		border-radius: 10rpx;
	}
	.obox .tit{
		text-align: center;
		font-size: 30rpx;
		color: #333;
		height: 50rpx;
	}
	.obox text{
		display: inline-block;
		position: relative;
	}
	.obox .tit text::before,.obox .tit text::after{
		content: '';
		position: absolute;
		top: 24rpx;
		left: -90rpx;
		height: 1rpx;
		width: 72rpx;
		background-color: #ccc;
	}
	.obox .tit text::after{
		right: -90rpx!important;
		left: auto;
	}
	.basic .name{
		font-size: 32rpx;
		color: #333;
		line-height: 48rpx;
		padding: 10rpx 0;
	}
	.basic .cate{
		font-size: 32rpx;
		color: #999;
		line-height: 60rpx;
	}
	.basic .cate image{
		width: 28rpx;
		height: 28rpx;
		margin-right: 6rpx;
	}
	.collect image{
		width: 42rpx!important;
		height: 42rpx!important;
	}
	.lesson{
		color: #333;
		font-size: 28rpx;
		line-height: 66rpx;
		padding-right: 40rpx;
		box-sizing: border-box;
		position: relative;
	}
	.lesson .arrow{
		width: 36rpx;
		height: 36rpx;
		position: absolute;
		right: 0;
		top: 15rpx;
	}
	.limit .lessbox{
		height: 264rpx;
		overflow-y: auto;
	}
	.auto  .lessbox{
		height: auto!important;
	}
	.showall{
		line-height: 50rpx;
		text-align: center;
		font-size: 28rpx;
		color: #4CA8E7;
		margin-top: 20rpx;
	}
	
	.olist{
		width: 100%;
		margin: 20rpx auto;
		display: flex;
		flex-wrap: wrap;
	}
	.part{
		width: 50%;
		margin-bottom: 20rpx;
		padding-bottom: 20rpx;
		padding: 0rpx 10rpx;
		box-sizing: border-box;
	}
	.parts{
		padding-bottom: 16rpx;
		border-bottom: 1rpx solid #cbcbcb;
	}
	
	.part .imgbox{
		width: 100%;
		height: 210rpx;
		border-radius: 12rpx;
		overflow: hidden;
	}
	.part .right{
		width: 100%;
	}
	.part .name{
		font-size: 30rpx;
		line-height: 44rpx;
		color: #333;
	}
	.teacher{
		font-size: 26rpx;
		color: #666;
		margin-top: 10rpx;
		height: 36rpx;
	}

</style>
