<template>
	<view class="content" >
		<view class="userNav" :class="ischange?'slow':'font000'" :style="{background:ischange?nowColor:'#fff'}">首页</view>
		<view style="height: 88rpx;"></view>
		<view class="bgtop" style="">
			<view class="bgcolor" :class="ischange?'slow':''" :style="{background:nowColor}"></view>
			<view class="header" >
				<view class="search flex">
					<image src="../../static/search.png"></image>
					<input type="text" @confirm="search" confirm-type="搜索" />
				</view>
			</view>
			
			<view class="banner">
				<swiper @change="bannChange" class="swiper" :autoplay="true" :interval="4000" :duration="1000" :circular="true">
					<swiper-item v-for="(item, index) in banners" :key="index">
						<!-- <image :src="item.img.replace('\\','/')"></image> -->
						<image :src="item.photo"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="classify flex">
			<view class="icon" v-for="(item, index) in classify" :key="index" @click="tolesson(item.id,index)">
				<image :src="item.photo"></image>
				<view class="text">{{item.category_name}}</view>
			</view>
			<view class="icon"  @click="toclassall()">
				<image src="../../static/44.png"></image>
				<view class="text">全部分类</view>
			</view>
		</view>
		<view  class="livebann imgbox" style=" width: 90%;margin: 0 auto;">
			<image v-if="zhuanqu.length == 0"></image>
			<image v-else @click="toDetail(zhuanqu[0].id)" style="width: 100%;" mode="widthFix" :src="zhuanqu[0].duli_images"></image>
		</view>
		<view class="lessonlist" >
<!-- 			<view style="margin:10px 20px;height:40px;padding-top: 10px;">
				<text style="font-size: 19px;font-weight: bold;">直播</text>
				<view class="" style="float: right;margin-top: 10px;">
					<image style="width: 15px;height:15px;" src="/static/00.png" mode=""></image>
				</view>
				<view class="" style="float: right;font-size: 11px;margin-top: 10px;">
					更多
				</view>
				<view  style="width: 15px;height:5px;background:#3d94fe;margin-bottom:20px;margin-left: 10px;"></view>
			</view> -->
			<view class="tit" style="margin-left: 20px;padding-top: 10px;position: relative;">
				<view class="" style="line-height:60rpx ;">
					直播
					<view  style="width: 32rpx;height:6rpx;background:#3d94fe;margin-bottom:20px;margin-left: 10px;"></view>
				</view>
			<navigator open-type="switchTab" url="/pages/tabbar/live" class="text" style="position: absolute;right: 18px;top: 17px;" >更多
			<image style="width: 36rpx;height: 36rpx;" src="/static/00.png"></image>
			</navigator></view>
        <view style="margin:0 20px;">
               <scroll-view  scroll-x="true" style="white-space: nowrap;"  >
                   <view id="demo1" style="width: 280rpx;height:280rpx;display: inline-block;padding:4px;" v-for="(item, index) in zhibo" >
					   <view class=""@click="Tozhibo(item.id)" :style="{backgroundImage:'url('+src+item.photo+')'}" style="border-radius: 10px;width: 280rpx;height:280rpx;background-size: 280rpx 280rpx;position: relative;">
					   	<view style="" class="positext">{{item.title}}</view>
					   </view>
						<!-- <image style="width: 150px;height:150px;border-radius: 10px;" :src="src+item.photo"@click="Tozhibo(item.id)" ></image> -->
					</view>
                </scroll-view>
            </view>
		</view>
		<view class="lessonlist">
			<view class="tit" style="margin-left: 20px;position: relative;">商户专区<navigator open-type="navigate" url="/pages/teachers" class="text" >更多
			<image style="width: 36rpx;height: 36rpx;" src="/static/00.png"></image>
			</navigator></view>
			<view class="olist">
			<view  style="padding-bottom:10px"  v-if="tuijian_daka.length != 0">
				<image :src="tuijian_daka[0].tj_images" style="width: 100%;" mode="widthFix" @click="toTeacher(tuijian_daka[0].id)"></image>
				<view style="height: 40px;padding-left:20px;margin-top: 5px;">
					<view style="font-size: 16px;color:#805B32">{{tuijian_daka[0].nickname}}商户</view>
					<view style="font-size: 14px;color: #7A7A7A;">{{tuijian_daka[0].info}}</view>
				</view>
			</view>
			</view>
			<view style="background: #f4f4f4;width: 100%;height:5px;"></view>
			<view class="olist">
				<view class="part" v-for="(item, index) in daka" :key="index" @click="toTeacher(item.id)">
					<view class="imgbox" style="width: 210rpx;height:260rpx"><image mode="scaleToFill" :src="item.head_img"></image></view>
					<view class="right">
						<view class="name" style="font-size: 18px;color: #282828;font-weight: bold;">{{item.nickname}}</view>
						<view class="teacher" style=" 14px;color:#6e6e6e" v-for="(items,index) in item.info">{{items}}</view>
<!-- 						<view class="fb" >
							<view class="lesson" style="font-size: 14px;color:#7a7a7a">
								{{item.goods_name}}课时</view>
						</view> -->
						<view class="read" style="margin-top: 20px;float: right;">{{item.guanzhu}}人关注</view>
					</view>
				</view>
			</view>
			<view class="lessonlist">
				<view class="tit" style="padding-left: 20px;background:#f4f4f4;position: relative;">精品专区<navigator open-type="navigate" url="/pages/jingxuan" class="text" >更多
				<image style="width: 36rpx;height: 36rpx;" src="/static/00.png"></image>
				</navigator></view>
			<view style="padding:40rpx;">
				<scroll-view  scroll-x="true" style="white-space: nowrap;overflow: hidden;"  >
					<view v-for="(item,index) in jingxuan " style="width:50%;height: 187rpx;margin-right: 10px;display: inline-block;">
						<image style="width:100%;height: 187rpx;margin-right: 10px;" mode="scaleToFill" :src="item.photo"@click="toDetail(item.id)" ></image>
					</view>
				</scroll-view>
			</view>
			</view>
			<view class="lessonlist">
				<view class="tit" style="padding-left: 20px;background:#f4f4f4;position: relative;">大咖课堂<view @click="toStudy" class="text" >更多
				<image style="width: 36rpx;height: 36rpx;" src="/static/00.png"></image>
				</view></view>
			<view class="olist">
				<view class="part" v-for="(item, index) in shops" :key="index" @click="toDetail1(item.id)">
					<view class="imgbox" style="height:210rpx"><image mode="scaleToFill" :src="item.photo"></image></view>
					<view class="right">
						<text class="name" style=" font-size: 16px;color: #282828;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">{{item.title}}</text>
						<view class="teacher" style="font-size: 14px;color:#6e6e6e;line-height: 80rpx;">{{item.nickname}}</view>
						<view class="fb">
							<view class="lesson" style="font-size: 14px;color: #7a7a7a;"><image src="../../static/time.png"></image>{{item.count}}课时</view>
							<!-- <view class="read">{{item.read}}人阅读</view> -->
						</view>
					</view>
				</view>
			</view>
			</view>
			<view class="lessonlist">
			<view class="tit" style="padding-left: 20px;background:#f4f4f4;position: relative;">猜你喜欢<navigator  open-type="switchTab" url="/pages/tabbar/study" class="text" >更多
			<image style="width: 36rpx;height: 36rpx;" src="/static/00.png"></image>
			</navigator></view>
		<view class="olist">
			<view class="part" v-for="(item, index) in cai_like" :key="index" @click="toDetail(item.id)">
				<view class="imgbox" style="height:210rpx"><image mode="scaleToFill" :src="item.photo"></image></view>
				<view class="right">
					<text class="name" style="margin-bottom: 10rpx; font-size: 16px;color: #282828;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">{{item.title}}</text>
					<view class="teacher" style="margin-bottom:10rpx; 14px;color:#6e6e6e;line-height: 80rpx;">{{item.nickname}}</view>
					<view class="fb">
						<view class="lesson" style="font-size: 14px;color: #7a7a7a;"><image src="../../static/time.png"></image>{{item.count}}课时</view>
						<!-- <view class="read">{{item.read}}人阅读</view> -->
					</view>
				</view>
			</view>
		</view>
		</view>
		</view>
	</view>
</template>

<script>
    import util from '@/util/util.js';
	export default {
		data() {
			var that = this
			return {
				wgtVer:'',
				ischange:true,//顶部颜色是否渐变
				bannH:'200',
				nowColor:'',
				img_src:that.IMG_URL,
				src:that.REQUEST_URL,
				banners:[],
				classify:[],
				list:[],
				zhibo:[],
				cai_like:[],
				zhuanqu:[],
				daka:[],
				tuijian_daka:[],
				jingxuan:[],
				shops:[],
				shopindex:""
			}
		},
		onPullDownRefresh(){
			var that =this
			uni.showLoading();
			uni.request({
				url:that.REQUEST_URL +　'index.php/api/index/lists',
				method:'POST',
				data:{},
				success:res=>{
					console.log(res)
					uni.hideLoading();
						that.banners =res.data.data.banner
						that.classify = res.data.data.category
						that.list =  res.data.data.title
						that.cai_like = res.data.data.cai_like
						that.zhuanqu = res.data.data.zhuanqu
						that.tuijian_daka = res.data.data.tuijian_daka
						that.daka = res.data.data.daka
						that.jingxuan = res.data.data.jingxuan
						that.shops = res.data.data.shops
						console.log(that.banners)
				}
			})
			uni.request({
				url:that.REQUEST_URL + 'index.php/api/live/live_lists',
				method:"POST",
				data:{},
				success(res){
					uni.hideLoading();
					that.zhibo = res.data.data
					console.log('11',that.zhibo)
					uni.stopPullDownRefresh()
				}
			})
		},
		onShow() {
			var that=this
			// // #ifdef H5
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
			// // #endif
			that.getUser()
			console.log('-----')
			uni.getSystemInfo({
			　　success: function(res) { // res - 各种参数
			　　    let info = uni.createSelectorQuery().select(".bgtop");
			　　　  　info.boundingClientRect(function(data) { //data - 各种参数
						that.bannH=data.height
			　　    }).exec()
			       }
			});
			// if (!uni.getStorageSync('user').id) {
			// 	uni.reLaunch({
			// 		url: '/pages/login'
			// 	});
			// 	return false
			// } 
		},
		onPageScroll(e){
			if(e.scrollTop>Number(this.bannH)){
				this.ischange=false
			}else{
				this.ischange=true
			}
		},
		onLoad() {
			
			uni.showLoading();
            if (!util.isLogin()) {
                uni.showToast({
                    title:'登录过期,请重新登录',
                    icon:'none',
                    duration:2000,
                    complete(){
                        setTimeout(()=>{
                            uni.reLaunch({
                                url:'/pages/login'
                            })
                        },1000)
                    }
                })
            }
			
			var that = this;
			
			uni.showLoading();
			uni.request({
				url:that.REQUEST_URL +　'index.php/api/index/lists',
				method:'POST',
				data:{},
				success:res=>{
					console.log(res)
					uni.hideLoading();
						that.nowColor=res.data.data.banner[0].background_color
						that.banners =res.data.data.banner
						that.classify = res.data.data.category
						that.list =  res.data.data.title
						that.cai_like = res.data.data.cai_like
						that.zhuanqu = res.data.data.zhuanqu
						that.tuijian_daka = res.data.data.tuijian_daka
						that.daka = res.data.data.daka
						that.jingxuan = res.data.data.jingxuan
						that.shops = res.data.data.shops
						that.shops_id = res.data.data.shops_id
						console.log(that.banners)
						var shop_id = res.data.data.shops_id
						for(var i=0 ; i<that.classify.length;i++){
							if(shop_id ==that.classify[i].id ){
								that.shopindex = i
							}
						}
				}
			})
			uni.request({
				url:that.REQUEST_URL + 'index.php/api/live/live_lists',
				method:"POST",
				data:{},
				success(res){
					uni.hideLoading();
					that.zhibo = res.data.data
					console.log('11',that.zhibo)
				}
			})
			
			
		},
		methods: {
						
			deal(con){
			    return con.replace(/\n/g,'')
			   },
			// deal(id){
			// 	return this.url+id
			// },
			bannChange(e){
				var that=this
				// console.log(e)
				// 如果ischange，停留在上面 则 全部变色
				// 否则 导航栏部分的颜色 白色 字黑色
				this.nowColor=this.banners[e.detail.current].background_color
				
				
				
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
				       if(res.data.datas.member_status == 0){
							uni.redirectTo({
								url:'../xufei'
							})
				       }
				    }
				});
			},
			
			
			toTeacher(id){
				console.log(id)
				uni.navigateTo({
					url:'/pages/teacher_detail?did='+id
				})
			},
			toclassall(){
				
				uni.navigateTo({
					url:'/pages/classall'
				})
			},
			Tozhibo(id){
				console.log(id)
                uni.navigateTo({
                    url:'/pages/live_detail?id=' + id
                })
			},
			toStudy(){
				var that = this
				console.log('222',that.shopindex)
				uni.setStorage({
					key:"study",
					data:{
						aid:that.shops_id,
						aindex:that.shopindex,
						bid:0,
						bindex:0
					}
				})
				uni.switchTab({
					url:"/pages/tabbar/study"
				})
			},
			tolesson(id,current){
				uni.setStorage({
					key:"study",
					data:{
						aid:id,
						aindex:current,
						bid:0,
						bindex:0
					}
				})
				console.log(id)
				uni.switchTab({
					url:"/pages/tabbar/study"
				})
			},
			toDetail1(id){
				console.log('课程id',id)
					uni.navigateTo({
						url:'/pages/detail?id='+id+'&type='+2
					})
				},
			toDetail(id){
				console.log('课程id',id)
				uni.navigateTo({
					url:'/pages/detail?id='+id+'&type='+1
				})
			},
			search(e){
				console.log(e.detail.value)
				var that = this;
				uni.showLoading();
				uni.request({
					url:that.REQUEST_URL +　'index.php/api/index/lists',
					method:'POST',
					data:{
						key:e.detail.value
					},
					success:res=>{
						console.log(res)
						uni.hideLoading();
							that.nowColor=res.data.data.banner[0].background_color
							that.banners =res.data.data.banner
							that.classify = res.data.data.category
							that.list =  res.data.data.title
							that.cai_like = res.data.data.cai_like
							that.zhuanqu = res.data.data.zhuanqu
							that.tuijian_daka = res.data.data.tuijian_daka
							that.daka = res.data.data.daka
							that.jingxuan = res.data.data.jingxuan
							that.shops = res.data.data.shops
							console.log(that.banners)
							var shop_id = res.data.data.shops_id
							for(var i=0 ; i<that.classify.length;i++){
								if(shop_id ==that.classify[i].id ){
									that.shopindex = i
								}
							}
					}
				})
				uni.request({
					url:that.REQUEST_URL + 'index.php/api/live/live_lists',
					method:"POST",
					data:{},
					success(res){
						uni.hideLoading();
						that.zhibo = res.data.data
						console.log('11',that.zhibo)
					}
				})
			},
		}
	}
</script>

<style>
	.content{
		background-color: #fafafa;
	}
	.header{
		padding: 30rpx 0 14rpx 0;
		box-sizing: border-box;
		position: relative;
		z-index: 9;
	}
	.search{
		margin: 0rpx auto;
		width: 620rpx;
		height: 64rpx;
		border: 1rpx solid #dcc18c;
		border-radius: 32rpx;
		line-height: 64rpx;
		background-color: #fff;
		padding: 0 26rpx;
		box-sizing: border-box;
	}
	.search image{
		width: 36rpx;
		height: 36rpx;
		margin-right: 28rpx;
	}
	.search input{
		height: 64rpx;
		width: 490rpx;
		color: #333;
		font-size: 28rpx;
	}
	
	.banner{
		width: 90%;
		margin: 0 auto;
		height: 360rpx;
	}
	.banner .swiper{
		width: 100%;
		height: 100%;
	}
	.swiper image{
		width: 100%;
		height: 100%;
	}
	.classify{
		flex-wrap: wrap;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
	}
	.classify .icon{
		width: 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 20rpx;
	}
	.classify .icon image{
		width: 86rpx;
		height: 86rpx;
	}
	.classify .icon .text{
		line-height: 60rpx;
		font-size: 26rpx;
	}
	.livebann{
		width: 100%;
		/* height: 314rpx; */
	}
	.lessonlist{
		background-color: #fff;
	}
	.lessonlist .tit{
		position: relative;
		/* text-align: center; */
		line-height: 110rpx;
		/* margin-top: 10rpx; */
		font-size: 38rpx;
		color: #333;
		font-weight:bold
	}
	
	.lessonlist .tit{
		position: relative;
		/* text-align: center; */
		line-height: 110rpx;
		/* margin-top: 10rpx; */
		font-size: 38rpx;
		color: #333;
		font-weight:bold
	}
	.lessonlist .tit .text{
		margin-top: 2px;
		position: absolute;
		right: 36rpx;
		top: 0;
		height: 40rpx;
		line-height: 40rpx;
		top:35rpx;
		font-size: 22rpx;
		color: #666;
		display: flex;
		align-items: center;
	}
	.lessonlist .tit image{
		width: 30rpx;
		height: 30rpx;
	}
	.olist{
		width: 690rpx;
		margin: 20rpx auto;
	}
	.part{
		display: flex;
		margin-bottom: 30rpx;
		padding-bottom: 20rpx;
		border-bottom: 1rpx solid #cbcbcb;
	}
	.part .imgbox{
		width: 270rpx;
		/* height: 210rpx; */
		margin-right: 26rpx;
		/* border-radius: 12rpx; */
		overflow: hidden;
	}
	.part .right{
		width: 390rpx;
	}
	.part .name{
		font-size: 30rpx;
		line-height: 44rpx;
		color: #333;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.teacher{
		font-size: 30rpx;
		color: #333;
/* 		margin-top: 20rpx;
		margin-bottom: 40rpx; */
	}
	.part .lesson{
		font-size: 28rpx;
		color: #333;
		display: flex;
		align-items: center;
	}
	.part .lesson image{
		width: 30rpx;
		height: 30rpx;
		margin-right: 4rpx;
	}
	.part .read{
		font-size: 26rpx;
		color: #999;
	}
	.bgtop{
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	.slow{
		transition: all 3s ease;
	}
	.bgcolor{
		width: 1600rpx;
		height: 1600rpx;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		margin-left: -800rpx;
		bottom: 50rpx;
	}
	.userNav{
		height: 88rpx;
		font-size: 32rpx;
		font-weight: 700;
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 999;
		left: 0;
		line-height: 88rpx;
		text-align: center;
		color: #fff;
	}
	.font000{
		color: #000!important;
	}
	.positext{
		font-size: 32rpx;color:#fff;position: absolute;
		width: 100%;height: 60rpx;
		line-height: 60rpx;text-align: center;left: 0;bottom: 0;
		padding: 0 20rpx;box-sizing: border-box;
		white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
	}
</style>
