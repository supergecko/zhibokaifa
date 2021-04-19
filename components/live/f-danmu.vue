<template>
	<view style="position: fixed;bottom: 120rpx;left: 0;right: 0;">
		<view style="width: 450rpx;">
			<text class="text-white" style="font-size: 24rpx;margin-left: 40rpx;opacity: 0.5;">{{systemContent}}</text>
		</view>
		<scroll-view scroll-y="true" style="width:600rpx;height: 300rpx;" scroll-with-animation class="pl-3"
			:scroll-into-view="scrollInToView">
			<view :id="'danmu'+item.id" class="rounded p-2 mb-2 contentWarp flex  justify-start align-start flex-wrap"
				v-for="(item,index) in list" :key="index" @click="jinyan(item.name,item.liveid,item.userId)" style="width: 450rpx;">
					<text class="font-md textBlue" style="font-size: 24rpx;">{{item.name}}：</text>
					<text class="font-md text-white flex-1" style="font-size: 24rpx;">{{item.content}}</text>		
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import $H from '@/common/request.js';
	export default {
		data() {
			return {
				scrollInToView: "",
				list: [],
				systemContent:''
			}
		},
		mounted() {
			// let id = 1
			// setInterval(() => {
			// 	this.list.push({
			// 		id: id,
			// 		name: "昵称" + id,
			// 		content: "杭峰道场测试杭峰道场 杭峰" + id
			// 	})
			// 	// 置于底部
			// 	this.toBottom()
			// 	id++
			// }, 1000)
		},
		methods: {
			//禁言
			jinyan(userName,liveId,userId){
				if (liveId == '') {
					return
				} else {
					uni.showModal({
						content: '是否禁言'+ userName + '?',
						success: (res)=> {
							if (res.cancel) {
								return
							}
							let data = {
								user_id :userId,
								teacher_id: uni.getStorageSync('user').id,
								forbid_time:999999
							}
							console.log(data)
							$H.post('/live/forbid_user', data).then(res => {
								console.log(res)
								uni.showToast({
									title: res.msg,
									icon: 'none'
								});
							}).catch(err => {
								console.log(err)
							})
						}
					});
				}
			},
			// 发送弹幕
			send(data) {
				this.list.push(data)
				// 置于底部
				this.toBottom()
			},
			//更新系统信息
			upSystemContent(data){
				this.systemContent = data
			},
			toBottom() {
				setTimeout(() => {
					let len = this.list.length
					if (len > 0 && this.list[len - 1]) {
						this.scrollInToView = 'danmu' + this.list[len - 1].id
					}
				}, 300)
			}
		},
	}
</script>

<style>
	.textBlue {
		color: #7DCAFF;
	}
	.contentWarp{
		background-color: rgba(255,255,255,0.125);
		border-radius: 50rpx;
	}
</style>
