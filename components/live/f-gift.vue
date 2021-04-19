<template>
	<list style="width: 520rpx;height: 510rpx;" :show-scrollbar="false" :bounce="false">
		<cell class="flex align-center px-3 pt-3" v-for="(item,index) in gifts" :key="index" insert-animation="default" delete-animation="default" :ref="'item'+index">
			<view style="width: 325rpx;background-color: rgba(255,255,255,0.125);" class="flex rounded-circle">
				<view class="p">
					<image :src="item.avatar || defaultAvatar" style="width: 70rpx;height: 70rpx;" class="rounded-circle"></image>
				</view>
				<view class="flex-1 flex flex-column justify-center">
					<text class="text-white font">{{item.username}}</text>
					<text class="text-white font-sm">送{{item.gift_name}}</text>
				</view>
				<view class="p">
					<image :src="item.gift_image" style="width: 70rpx;height: 70rpx;" class="rounded-circle"></image>
				</view>
			</view>
			
			<text class="font-lg ml-1 text-white">X {{item.num}}</text>
		</cell>
	</list>
</template>

<script>
	const dom = weex.requireModule('dom')
	export default {
		data() {
			return {
				defaultAvatar:"/static/tabbar/min.png",
				gifts: []
			}
		},
		mounted() {
			// let id = 1
			// setInterval(() => {
			// 	this.gifts.push({
			// 		avatar: "/static/tabbar/min.png",
			// 		username: "昵称" + id,
			// 		gift_name: "蛋糕" + id,
			// 		gift_image: "/static/gift/dg.png",
			// 		num: id
			// 	})
			// 	// 置于底部
			// 	this.toBottom()
			// 	id++
			// }, 1000)
		},
		methods: {
			send(gift){
				this.gifts.push(gift)
				this.toBottom()
				this.autoHide()
			},
			// 置于底部
			toBottom() {
				this.$nextTick(()=>{
					let index = this.gifts.length - 1
					let ref = 'item' + index
					if(this.$refs[ref]){
						dom.scrollToElement(this.$refs[ref][0],{})
					}
				})
			},
			// 自动消失
			autoHide(){
				if(this.gifts.length){
					let timer = setTimeout(()=>{
						this.gifts.splice(0,1)
					},5000)
				}
			}
		},
	}
</script>

<style>
	.newBg{
		background-color: rgba(255,255,255,0.125);
	}
</style>
