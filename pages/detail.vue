<template>
	<view>
		<view class="bann imgbox" :class="is_video==0?'h380':'h420'">
            <image v-if="is_video == 0" :src="data.photo"></image>
            <video v-else :src="video_src" controls style="width: 100%;height:100%"></video>
            <!-- <video style="width:100%;height:380rpx" v-else :src="video_src"></video> -->
        </view>
		<view class="basic">
			<view class="name">{{data.title}}</view>
			<view class="cate fb">
				<view><image src="../static/cate.png"></image>类别: {{data.cate_name}}</view>
				<view v-if="data.is_collect == 0" @click="bindCollect(data.id)" class="collect flex"><image :src="data.is_collect == 1?'/static/collect_hl.png':'/static/collect.png'"></image></view>
				<view v-if="data.is_collect == 1" @click="cancelColl(data.id)" class="collect flex"><image :src="data.is_collect == 1?'/static/collect_hl.png':'/static/collect.png'"></image></view>
			</view>
		</view>
		<view class="obox" :class="all?'auto':'limit'">
			<view class="tit"><text>课程列表</text></view>
            
			<view class="lessbox">
				<view class="lesson ovh" v-for="(item, index) in data.goods" :key="index" @click="select1(item.video_url)">
                    {{item.goods_name}}
					<!-- <image @click="select(index)" class="arrow" src="../static/arrow.png"></image> -->
                    <!-- <view v-if="select_index == index">
                        <view style="margin-left: 40rpx;" v-for="(item2, index2) in item.goods" @click="select1(item2.video_url)">{{item2.goods_name}}</view>
                    </view> -->
                </view>
            </view>
			<view class="showall" @click="showall">{{showtit}}</view>
		</view>
		<view class="obox">
			<view class="tit"><text>详细信息</text></view>
			<!-- <view class="name">{{data.remark}}</view> -->
			<rich-text :nodes="data.remark"></rich-text>
		</view>
		<view class="obox">
			<view class="tit"><text>猜你喜欢</text></view>
			<view class="olist">
				<view class="part" v-for="(item, index) in list" :key="index" @click="toDetail(item.id)">
					<view class="parts">
						<view class="imgbox"><image mode="scaleToFill" :src="item.photo"></image></view>
						<view class="right">
							<view class="name ovh">{{item.title}}</view>
							<!-- <view class="teacher">{{item.remark}}</view> -->
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
				showtit:'展开',
				type:'1',
				lesson:[],
				list:[
					{id:'1',img:'/static/ex.jpg',name:'少时诵诗书少时诵诗书所是是是',teacher:'王教授'},
					{id:'1',img:'/static/ex.jpg',name:'少时诵诗书少时诵诗书所是是是',teacher:'王教授'},
					{id:'1',img:'/static/ex.jpg',name:'少时诵诗书少时诵诗书所是是是',teacher:'王教授'},
					{id:'1',img:'/static/ex.jpg',name:'少时诵诗书少时诵诗书所是是是',teacher:'王教授'},
				],
                data:[],
                select_index:-1,
                is_video:0,
                video_src:''
			}
		},
		onLoad(options) {
			var that =this
			console.log('获取课程id',options)
			that.id =options.id,
			that.type =options.type,
			uni.getStorage({
				key:'user',
				success(res) {
					that.user_id = res.data.id
				}
			})
			that.getData();
			that.cai_like()
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
		},
		methods: {
			getData(){
				console.log('onshowwwwwwwwwwww')
                var that = this;
                var id = that.id;
				var type = that.type
				var user=uni.getStorageSync('user')
                console.log(id);
                uni.request({
                    url:that.REQUEST_URL + 'index.php/api/course/course_detail',
                    method:'post',
                    data:{
                        title_id:id,
						user_id:user.id,
                    },
                    header: {
                    	'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    success(res){
                        console.log(res);
                        if (res.data.code == 1) {
                            // res.data.data.photo =that.REQUEST_URL + res.data.data.photo;
                            that.data = res.data.data;
                        }
                    }
                    
                })
			},
			cai_like(){
				var that = this
				uni.request({
					url:that.REQUEST_URL +'index.php/api/Daka/like_lists',
					method:'POST',
					data:{},
					success(res) {
						console.log(res)
						that.list = res.data.data
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
			cancelColl(id){
				var that = this
				console.log(id)
				var user=uni.getStorageSync('user')
				uni.request({
					url:that.REQUEST_URL+'index.php/api/collect/cancel_collect_by_guid',
					method:"POST",
					data:{
						uid:user.id,
						gid:id,
					},
					success(res) {
						console.log(res)
						uni.showToast({
							title:'取消成功'
						})
						that.getData();
					}
				})
			},
			bindCollect(id){
				var that = this
				console.log(id)
				var user=uni.getStorageSync('user')
				uni.request({
					url:that.REQUEST_URL+'index.php/api/collect/add_collect',
					method:"POST",
					data:{
						uid:user.id,
						goods_id:id,
						type:1
					},
					success(res) {
						console.log(res)
						uni.showToast({
							title:res.data.msg
						})
						that.getData();
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
                var video_src =  index2
                this.is_video = 1;
                this.video_src = video_src;
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
	.h380{
		
	}
	.h420{
		height: 420rpx!important;
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
		font-size: 26rpx;
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
