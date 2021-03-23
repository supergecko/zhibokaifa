<template>
	<view class="app">
		<scroll-view class="tablist" scroll-x="true" :scroll-left="navScrollLeft" scroll-with-animation="true" >
			<view class="tab" :class="index==tabIndex?'active':''" v-for="(item, index) in tablist" @click="totab(item.id,index)"><text>{{item.category_name}}</text></view>
		</scroll-view>
		<scroll-view  class="navlist" scroll-x="true" :scroll-left="sNavScrollLeft" scroll-with-animation="true" >
			 <view class="nav" :class="index==navIndex?'active':''" v-for="(item, index) in tablist[tabIndex].category_erji" @click="tonav(item.id,index,item.is_info)"><text>{{item.category_name}}</text></view>
		 </scroll-view>
		<view class="olist"  v-if="is_info == 0">
			<view class="part" v-for="(item, index) in list" :key="index" @click="toDetail(item.id)">
				<view class="imgbox"><image mode="scaleToFill" :src="item.photo"></image></view>
				<view class="right">
					<view class="name">{{item.title}}</view>
					<view class="teacher">{{item.writer_name}}</view>
					<view class="fb">
						<!-- <view class="lesson"><image src="../../static/time.png"></image>{{item.lesson}}课时</view> -->
						<view class="read">{{item.views}}人阅读</view>
					</view>
				</view>
			</view>
		</view>
		<view class="olist" v-if="is_info == 1">
			
			<image :src="tablist[tabIndex].category_erji[navIndex].admin.portrait" mode="scaleToFill" style="width: 690rpx;height: 300rpx;margin:0 auto;"></image>
			<!-- <image src="http://chengguansxy.dianjinkeji.cn/public/uploads/face/20201112/62310aaa5879da1c264a95d0dc277ec9.jpg" mode="scaleToFill" style="width: 690rpx;height: 300rpx;margin:0 auto;"></image> -->
			<view class="">学院名称：{{tablist[tabIndex].category_erji[navIndex].admin.real_name}}</view>
			<view class="" style="margin: 20rpx 0;">学院简介：{{tablist[tabIndex].category_erji[navIndex].admin.info}}</view>
			<view class="obox">
				<view class="tit"><text>课程列表</text></view>
				<view class="olist1">
					<view class="part1" v-for="(item, index) in list" :key="index" @click="toDetail(item.id)">
						<view class="parts1">
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				is_info:0,
				detaicon:'',
				tab:'0',
				tabIndex:0,
                nav:'0',
				navIndex:0,
				navScrollLeft:'',
                sNavScrollLeft:'',
				windowWidth:'',
				tablist:[],
                navlist:[],
				list:[],
				// url:that.REQUEST_URL
			}
		},
		onLoad() {
			console.log('onload')
			var that=this;
			uni.getStorage({
				key:'study',
				success(res) {
					console.log('11111',res.data)
					that.tab = res.data.aid;
					that.tabIndex = res.data.aindex;
					that.nav = res.data.bid;
					that.navIndex = res.data.bindex;
					var acur =that.tabIndex;
					var bcur =that.navIndex;
					var singleNavWidth = 375 / 3;
					that.navScrollLeft= (acur - 1) * singleNavWidth
					that.sNavScrollLeft= (bcur - 1) * singleNavWidth
					that.getData('')
				},
				fail(ret){
					console.log('2',ret)
					uni.request({
						url:that.REQUEST_URL + 'index.php/api/course/lists',
					method:"POST",
					data:{
						category_id:0,
						category_id2:0
					},
					success(res) {
						console.log(res)
						that.tab = res.data.data.category[0].id
						that.nav = res.data.data.category[0].category_erji[0].id
						that.getData('')
						}
					})
				}
			})
		},
		
		onShow() {
			console.log('onshow')
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
			var temp=uni.getStorageSync('study')
			console.log(temp)
			if(temp){
				that.tab = temp.aid;
				that.tabIndex = temp.aindex;
				if(temp.bid == 0){
					console.log('aaaa')
					var yiji_id = temp.aid
					that.erji_id(yiji_id)
				}else{
					that.nav = temp.bid;
					that.navIndex = temp.bindex;
				}
			}
			var acur =that.tabIndex;
			var bcur =that.navIndex;
			var singleNavWidth = 375 / 3;
			that.navScrollLeft= (acur - 1) * singleNavWidth
			that.sNavScrollLeft= (bcur - 1) * singleNavWidth
			that.getData('')
			// uni.getStorageSync({
			// 	key:'study',
			// 	success(res) {
			// 		console.log('11111',res.data)
			// 		that.tab = res.data.aid;
			// 		that.tabIndex = res.data.aindex;
			// 		if(res.data.bid == 0){
			// 			var yiji_id = res.data.aid
			// 			that.erji_id(yiji_id)
			// 		}else{
			// 			that.nav = res.data.bid;
			// 			that.navIndex = res.data.bindex;
			// 		}
			// 		var acur =that.tabIndex;
			// 		var bcur =that.navIndex;
			// 		var singleNavWidth = 375 / 3;
			// 		that.navScrollLeft= (acur - 1) * singleNavWidth
			// 		that.sNavScrollLeft= (bcur - 1) * singleNavWidth
			// 		that.getData('')
			// 	}
			// })
		},
		methods: {
			erji_id(yiji_id){
				var that=this
				console.log(yiji_id)
				uni.request({
					url:that.REQUEST_URL +'index.php/api/course/lists',
					method:'POST',
					data:{
						category_id:yiji_id,
						category_id2:0
					},
					success(res) {
						console.log(res)
						var index = that.tabIndex
						that.nav = res.data.data.category[index].category_erji[0].id
						that.navIndex = 0
						that.getData('')
					}
				})
				
			},
			totab: function (id,current) {
			    var that = this
				that.tab=id
				that.tabIndex = current
				that.nav=that.tablist[current].category_erji[0].id
				that.navIndex = 0
				var temp=that.tablist[current].category_erji[0]
				    that.tonav(temp.id,0,temp.is_info)
				// that.navIndex = 0;
			    uni.showLoading({
			      title: '加载中……',
			    })
			    that.getData(id)
				uni.setStorage({
					key:'study',
					data:{
						aid:id,
						aindex:current,
						bid:that.tablist[current].category_erji[0].id,
						bindex:0
					}
				})
			    var cur =current;
			    var singleNavWidth = 375 / 3;
				console.log((cur - 1) * singleNavWidth)
			    that.navScrollLeft= (cur - 1) * singleNavWidth
			  },
            tonav(id, current,is_info){
                var that = this
                that.nav=id
				that.navIndex = current;
				that.is_info = is_info;
                uni.showLoading({
                  title: '加载中……',
                })
				uni.setStorage({
					key:'study',
					data:{
						aid:that.tab,
						aindex:that.tabIndex,
						bid:id,
						bindex:current
					}
				})
                that.getData(id)
                var cur =current;
                var singleNavWidth = 345 / 5;
                that.sNavScrollLeft= (cur - 1) * singleNavWidth
            },
			getData(id){
				// uni.hideLoading()
				var that = this 
				console.log(that.tab,that.nav)
				uni.request({
					url:that.REQUEST_URL+'index.php/api/course/lists',
					method:"POST",
					data:{
						category_id:that.tab,
						category_id2:that.nav
					},
					success(res) {
						console.log(res)
						uni.hideLoading()
						that.tablist = res.data.data.category
						that.list = res.data.data.title
						
					}
				})
			},
			toDetail(id){
				uni.navigateTo({
					url:'/pages/detail?id='+id+'&type='+2
				})
			},
		}
	}
</script>

<style>
	.tablist{
		width: 100%;
	}
    .navlist{
        width:690rpx;
        margin:0rpx auto;
        display: flex;
        overflow-x: auto;
        flex-wrap: nowrap;
        white-space: nowrap;
    }
    .navlist .nav{
        line-height: 56rpx;
        height: 56rpx;
        position: relative;
        font-size: 30rpx;
        color: #949597;
        text-align: center;
        display: inline-block;
        padding: 4rpx 0rpx;
        width: 138rpx;
        border-radius: 56rpx;
    }
    .navlist .nav.active text{
      color: #4CA8E7;
      border-bottom: 2rpx solid #4CA8E7;
      display: inline-block;
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
		height: 210rpx;
		margin-right: 26rpx;
		border-radius: 12rpx;
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
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		height: 36rpx;
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
	.tablist{
	  display: flex;
	  width: 100%;
	  margin-bottom: 0rpx;
	  overflow-x: auto;
	  flex-wrap: nowrap;
	  white-space: nowrap;
	}
	.tablist .tab{
	  line-height: 76rpx;
	  height: 76rpx;
	  position: relative;
	  font-size: 34rpx;
	  color: #949597;
	  text-align: center;
	  display: inline-block;
	  padding: 4rpx 0rpx;
	  width: 250rpx;
	}
	.tablist .tab.active text{
	  color: #4CA8E7;
	  border-bottom: 4rpx solid #4CA8E7;
	  display: inline-block;
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
	.part1{
		width: 50%;
		margin-bottom: 20rpx;
		padding-bottom: 20rpx;
		padding: 0rpx 10rpx;
		box-sizing: border-box;
	}
	.parts1{
		padding-bottom: 16rpx;
		border-bottom: 1rpx solid #cbcbcb;
	}
	
	.part1 .imgbox{
		width: 100%;
		height: 210rpx;
		border-radius: 12rpx;
		overflow: hidden;
	}
	.part1 .right{
		width: 100%;
	}
	.part1 .name{
		font-size: 30rpx;
		line-height: 44rpx;
		color: #333;
	}
	.olist1{
		width: 100%;
		margin: 20rpx auto;
		display: flex;
		flex-wrap: wrap;
	}
</style>
