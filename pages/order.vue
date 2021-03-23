<template>
	<view>
<!-- 		<view class="tablist">
			<view class="tab" :class="item.id==tab?'active':''" v-for="(item, index) in tablist" @click="totab(item.id,index)"><text>{{item.name}}</text></view>
		</view> -->
		<view class="wrap fc" :style="{height : height + 'px',width : width + 'px'}" v-if="buywrap">
			<view class="wrapbox fc">
				<view class="tit"><text></text><text style="color: #333;font-size: 30rpx;">支付</text><image class="retu" @click="retu" src="../static/close.png"></image></view>
				<view class="tips"><text style="color: #333;font-size: 32rpx;">观看直播需要支付{{price}}元</text></view>
				<radio-group @change="radioChange" style="width: 100%;">
					<view class="fr change"  :style="{width : width + 'px'}">
						<label class="paybox fc" >
							<image style="width: 110rpx;height: 110rpx;" src="../static/wxpay.png"></image>
							<radio  value="1" checked="true" />
						</label>
						<label class="paybox fc">
							<image style="width: 110rpx;height: 110rpx;" src="../static/ali.png"></image>
							<radio  value="2"  />
						</label>
					</view>
				</radio-group>
				<view class="buybtn" @click="topay"><text style="color: #fff;font-size: 30rpx;">购买</text></view>
			</view>
			
		</view>
		<view class="olist" v-if="!buywrap">
			<view class="part" v-for="(item, index) in date" :key="index" >
				<view class="parts">
					<view class="imgbox"><image mode="aspectFill" :src="item.photo"></image></view>
					<view class="right">
						<view class="name">{{item.title}}</view>
							<view class="lesson"><image src="../static/teacher.png"></image>{{item.luid}}</view>
							<view class="read">￥{{item.pay_price}}</view>
					</view>
				</view>
				<view class="state">
					<view v-if="item.status == 1" class="btn btns">已支付</view>
					<view v-if="item.status == 0" class="btn btns" @click="bindpay(item.zhibo_id,item.pay_price,item.id)">待支付</view>
					<view class="btn" @click="toDetail(item.id,item.status)">查看详情</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				appurl:'http://chengguansxy.dianjinkeji.cn/public/',
				payType: 1,
				buywrap:false,
				height:'',
				width:'',
				mark:false,
				url:'',
				id:'',
				str:'',
				test:'1',
				price:'',
				tab:1,
				// tablist:[
				// 	{id:1,name:'全部'},
				// 	{id:2,name:'待支付'},
				// 	{id:4,name:'已购买'},
				// ],
				date:[
					// {id:'1',img:'/static/t1.jpg',name:'少时诵诗书少时诵诗书所是是是少时是是是少时诵诗书少时诵诗书所是是是',teacher:'王教授',lesson:'20',read:'1202'},
					// {id:'1',img:'/static/t2.jpg',name:'少时诵诗书少时诵诗书所是是是',teacher:'王教授',lesson:'20',read:'1202'},
					// {id:'1',img:'/static/t1.jpg',name:'少时诵诗书少时诵诗书所是是是',teacher:'王教授',lesson:'20',read:'1202'},
				],
			}
		},
		onShow() {
			console.log('show')
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
			that.getData('')
		},
		onPullDownRefresh: function() {
			var that = this
			that.getData()
		},
		onBackPress() {
			console.log('return')
		},
		methods: {
			radioChange(e){
				console.log(e.detail.value)
				var that=this;
				that.payType =e.detail.value;
			},
			retu(){
				var that =this
				that.buywrap = false
			},returns(){
				var that =this
				that.buywrap = false
			},
			bindpay(id,price,pid){
				console.log('11')
				var that =this
				that.buywrap = true 
				that.zhibo_id = id
				that.price = price
				that.id = pid
			},
			topay() {
				uni.showLoading({
					title:'加载中……'
				})
				var that = this
				var user = uni.getStorageSync('user')
				console.log(that.payType)
				// #ifdef APP-PLUS
				     console.log('app---------------')
					 var payType=''
					 if (that.payType == 1) {
					 	payType = 'wxpay';
					 	uni.request({
					 		url: that.REQUEST_URL + 'index.php/api/pay/buylive',
					 		// url: that.appurl + 'index.php/api/wxpay/wxpaytest',
					 		method: 'post',
					 		data: {
					 			uid: user.id,
					 			lid: that.zhibo_id,
								pid:that.id,
					 			pay_type: 2
					 		},
					 		success(res) {
					 			uni.hideLoading()
					 			console.log(res.data)
					 			var orderInfo=res.data
					 			// var orderInfo=JSON.parse(res.data)
					 			uni.requestPayment({
					 			    provider: 'wxpay',
					 				orderInfo: orderInfo,
					 			    success: function (res) {
					 					uni.showToast({
					 						title: '支付成功',
					 						icon: 'none',
					 						duration: 2000,
					 						complete() {
					 							that.tocheck()
					 						}
					 					})
					 			        console.log('success:' + JSON.stringify(res));
					 			    },
					 			    fail: function (err) {
					 			        console.log('fail:' + JSON.stringify(err));
					 			    }
					 			});
					 	
					 		}
					 	})
					 } else if (that.payType == 2) {
					 	payType = 'alipay';
					 	uni.request({
					 		url: that.REQUEST_URL + 'index.php/api/pay/buylive',
					 		method: 'post',
					 		data: {
					 			uid: user.id,
					 			lid: that.zhibo_id,
								pid:that.id,
					 			pay_type: 1
					 		},
					 		success(res) {
					 			uni.hideLoading()
					 			var orderInfo = res.data
					 			uni.requestPayment({
					 				provider: 'alipay',
					 				orderInfo: orderInfo,
					 				success: function(res) {
					 					uni.showToast({
					 						title: '支付成功',
					 						icon: 'none',
					 						duration: 2000,
					 						complete() {
					 							that.tocheck()
					 						}
					 					})
					 					console.log('success:' + JSON.stringify(res));
					 				},
					 				fail: function(err) {
					 					console.log('fail:' + JSON.stringify(err));
					 				}
					 			});
					 			
					 		}
					 	})
					 }
				    // #endif
				    
				    // #ifdef H5
				     console.log('h55---------------')
					 var payType=''
					 if (that.payType == 1) {
					 	payType = 'wxpay';
					 	uni.request({
					 		url: that.REQUEST_URL + 'index.php/api/pay/buylive',
					 		// url: that.appurl + 'index.php/api/wxpay/wxpaytest',
					 		method: 'post',
					 		data: {
					 			uid: user.id,
					 			lid: that.zhibo_id,
								pid:that.id,
					 			pay_type: 2,
								client:1
					 		},
					 		success(res) {
					 			uni.hideLoading()
					 			console.log(res.data)
								var od = res.data.odsn
								location.href=res.data.mweb_url;
								uni.showModal({
									confirmText:"已支付",
									content:"是否支付？",
									success(res) {
										uni.request({
											url:that.REQUEST_URL + 'index.php/api/wxpay/inquiryWxH5',
											method:"POST",
											data:{
												odsn:od
											},
											success(ret) {
												console.log(ret)
												if (ret.data.data.code == 1){
													that.getData()
													that.buywrap=false
													}else{
													uni.showToast({
														title:'支付失败'
													})
												}
											}
											
										})
									}
								})
					 			// var orderInfo=res.data
					 			// uni.requestPayment({
					 			//     provider: 'wxpay',
					 			// 	orderInfo: orderInfo,
					 			//     success: function (res) {
					 			// 		uni.showToast({
					 			// 			title: '支付成功',
					 			// 			icon: 'none',
					 			// 			duration: 2000,
					 			// 			complete() {
					 			// 				that.tocheck()
					 			// 			}
					 			// 		})
					 			//         console.log('success:' + JSON.stringify(res));
					 			//     },
					 			//     fail: function (err) {
					 			//         console.log('fail:' + JSON.stringify(err));
					 			//     }
					 			// });
					 	
					 		}
					 	})
					 } else if (that.payType == 2) {
					 	payType = 'alipay';
					 	uni.request({
					 		url: that.REQUEST_URL + 'index.php/api/pay/buylive',
					 		method: 'post',
					 		data: {
					 			uid: user.id,
					 			lid: that.zhibo_id,
								pid:that.id,
					 			pay_type: 1,
								client:1
					 		},
					 		success(res) {
								console.log(res)
					 			uni.hideLoading()
					 			var orderInfo = res.data
								document.querySelector('body').innerHTML = orderInfo;
								document.forms[0].submit()
					 			// uni.requestPayment({
					 			// 	provider: 'alipay',
					 			// 	orderInfo: orderInfo,
					 			// 	success: function(res) {
					 			// 		uni.showToast({
					 			// 			title: '支付成功',
					 			// 			icon: 'none',
					 			// 			duration: 2000,
					 			// 			complete() {
					 			// 				that.tocheck()
					 			// 			}
					 			// 		})
					 			// 		console.log('success:' + JSON.stringify(res));
					 			// 	},
					 			// 	fail: function(err) {
					 			// 		console.log('fail:' + JSON.stringify(err));
					 			// 	}
					 			// });
					 			
					 		}
					 	})
					 }
				    // #endif
			},
			tocheck(){
				var that = this;
				var user=uni.getStorageSync('user')
				uni.request({
				    url:that.REQUEST_URL + 'index.php/api/live/checkLivePay',
				    method:'post',
				    data:{
						uid:user.id,
				        lid:that.zhibo_id
				    },
				    header:{
				        'Content-Type': 'application/x-www-form-urlencoded'
				    },
				    success(res){
				        console.log(res)
						if(res.data.code == 500){
							that.buywrap=true
							that.price=res.data.datas
							return false
						}else{
							that.getData()
							that.buywrap=false
						}
				    }
				})
			},
			getData(){
				var that=this;
				var uid = uni.getStorageSync('user')['id'];
				uni.stopPullDownRefresh()
				uni.request({
				    url: this.REQUEST_URL + '/index.php/api/user/myorder',
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
				            that.date = res.data.datas;
				        } else {
				            uni.showToast({
				                title: res.data.msg,
				                duration: 2000,
				                icon: 'none'
				            });
				        }
				    }
				});
			},
			// totab: function (id,current) {
			// 	console.log('dd')
			//     var that = this
			// 	that.tab=id
			//     uni.showLoading({
			//       title: '加载中……',
			//     })
			//     that.getData(id)
			// },
			toDetail(id,status){
				if(status == 0){
					uni.showToast({
						title:'请先支付',
						icon:'none'
					})
				}else{
					uni.navigateTo({
						url:'/pages/orders?id='+ id
					})
				}
			}
		}
	}
</script>

<style>
	.tablist{
	  display: flex;
	  width: 100%;
	  margin-bottom: 50rpx;
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
	.olist{
		width: 690rpx;
		margin: 20rpx auto;
	}
	.part{
		margin-bottom: 30rpx;
	}
	.parts{
		display: flex;
	}
	.imgbox{
		width: 230rpx;
		height: 230rpx;
		border-radius: 10rpx;
		overflow: hidden;
	}
	.part .right{
		width: 460rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
	}
	.part .name{
		font-size: 30rpx;
		line-height: 44rpx;
		color: #333;
		height: 88rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		margin-bottom: 20rpx;
		margin-top: 10rpx;
	}
	
	.part .lesson{
		font-size: 28rpx;
		color: #333;
		font-weight: bold;
		display: flex;
		align-items: center;
	}
	.part .lesson image{
		width: 34rpx;
		height: 34rpx;
		margin-right: 4rpx;
	}
	.part .read{
		font-size: 28rpx;
		color: #DD524D;
		margin-top: 22rpx;
		/* border-bottom: 1rpx solid #e9e9e9; */
		padding-bottom: 14rpx;
	}
	.state{
		width: 100%;
		display: flex;
		justify-content: flex-end;
		margin-top: 16rpx;
		padding-bottom: 16rpx;
		border-bottom: 1rpx solid #e6e6e6;
	}
	.state .btn{
		width: 130rpx;
		height: 56rpx;
		border-radius: 28rpx;
		line-height: 56rpx;
		font-size: 24rpx;
		text-align: center;
		border: 1rpx solid #4CA8E7;
		color: #4CA8E7;
		margin-left: 10rpx;
	}
	.btns{
		background-color: #4CA8E7!important;
		color: #fff!important;
	}
	.fr{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
	}
	.fc{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.wrapbox{
		width: 650rpx;
		background-color: #fff;
		padding-bottom: 40rpx;
		border-radius: 10rpx;
	}
	.tips{
		margin-bottom: 40rpx;
	}
	.paybox{
		width: 160rpx;
		margin: 30rpx;
	}
	.retu{
		width: 30rpx;
		height: 30rpx;
		margin-right: 20rpx;
		
	}
	
	.tit{
		width: 650rpx;
		display: flex;
		height: 80rpx;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		border-bottom-color: #d6d6d6;
		border-bottom-width: 2rpx;
		border-bottom-style: solid;
		margin-bottom: 20rpx;
	}
	.paybox image{
		width: 160rpx;
		height: 160rpx;
		margin-bottom: 20rpx;
	}
	.wrap{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		z-index:99;
		left: 0;
		background-color: rgba(0,0,0,0.8);
		color: #fff;
		padding: 30rpx;
		box-sizing:border-box;
		
	}
	.buybtn{
		width: 220rpx;
		height: 72rpx;
		border-radius: 36rpx;
		background-color: #007AFF;
		line-height: 72rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-top: 20rpx;
	}
	.change{
		width: 100%;
		box-sizing:border-box;
	}
	.wrap text{
		/* color: #fff!important; */
	}
	.mark{
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: #FFFFFF;
	}
	.mark-text{
		padding-right: 75px;
		font-size: 20px;
		color: #333333;
	}
	.mark-texts{
		line-height: 20px;
		line-height: 10px;
		font-size: 14px;
		height: 50px;
		width: 300px;
		color: white;
		background-color: #D4237A;
	}
	.text{
		text-align: center;
		padding-top: 400px;
		padding-bottom: 50px;
	}
	.back{
	    width:60rpx;
	    height:60rpx;
	    display: flex;
	    align-items: center;
	    flex-direction: row;
	    justify-content: center;
	    position: fixed;
	    top: 20px;
	    left: 20px;
	    z-index: 10;
	    border-radius: 30px;
	    background-color: rgba(0, 0, 0, .4);
	}
</style>
