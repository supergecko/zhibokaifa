import Vue from 'vue'
import Vuex from 'vuex'

import $H from '../common/request.js';
import $C from '../common/config.js';
import io from '../common/uni-socket.io.js';

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		user:null,
		token:null,
		socket:null,
		client_id:'',//websocket id
		liveId:0,
		type:''
	},
	actions:{
		//确定type为user
		setType({state},data){
			state.type = data
		},
		//修改liveId的值
		setLiveId({ state },data){
			state.liveId = data
		},
		//断开websocket
		closeWebSocket({state,dispatch}){
			if(state.socket){
				state.socket.close()
				console.log("WebSocket 已关闭")
			}
		},
		//连接websocket
		connectWebSocket({state,dispatch}){
			var S = uni.connectSocket({
			    url: $C.socketUrl,
			    complete: ()=> {}
			})
			//加入直播间
			let joinLive = (e)=>{
					let data = {
						userid:uni.getStorageSync('user').id,
						liveid:state.liveId,
						client_id:state.client_id,
						type:state.type
					}
					$H.post('/Websocket/bind', data).then(res => {
						console.log(res)
					}).catch(err => {
						// console.log(err);
					})
			}
			let onlineEvent = (e)=>{
				uni.$emit('live',{
					type:"online",
					data:e
				})
			}
			let commentEvent = (e)=>{
				uni.$emit('live',{
					type:"comment",
					data:e
				})
			}
			let systemEvent = (e)=>{
				uni.$emit('live',{
					type:"system",
					data:e
				})
			}
			let giftEvent = (e)=>{
				uni.$emit('live',{
					type:"gift",
					data:e
				})
			}
			//关注人数
			let followEvent = (e)=>{
				uni.$emit('live',{
					type:"follow",
					data:e
				})
			}
			// 监听连接成功 与后端操作在这
			S.onOpen(()=>{
				console.log('已连接 WebSocket ')
				state.socket = S //方便其他页面进行使用
				//S.send()用来发送  S.onMessage用来接受
				S.onMessage((e)=>{
					state.client_id = JSON.parse(e.data).client_id
					joinLive()
					//1 弹幕  2礼物  3系统消息  4在线人数
					switch (JSON.parse(e.data).type) {
						case '1':
							commentEvent(JSON.parse(e.data))
							break;
						case '2':
							giftEvent(JSON.parse(e.data))
							break;
						case '3':
							systemEvent(JSON.parse(e.data))
							break;
						case '4':
							onlineEvent(JSON.parse(e.data))
							break;
						case '5':
							followEvent(JSON.parse(e.data))
							break;
						default:
							break;
					}
					
				})
			})
			// 监听失败
			S.onError((err)=>{
				console.log(err)
				// removeListener()
				state.socket = null //需要把它设为null因为没有连接了
				console.log(' WebSocket 连接失败')
			})
			// 监听断开
			S.onClose(()=>{
				// removeListener()
				state.socket = null //需要把它设为null因为没有连接了
				console.log(' WebSocket 连接断开')
			})
		},
		
		authMethod({ state },callback){
			if(!state.token){
				uni.showToast({
					title: '请先登录',
					icon: 'none'
				});
				return uni.navigateTo({
					url: '/pages/login/login'
				});
			}
			callback()
		},
		// 初始化用户登录状态
		initUser({ state,dispatch }){
			let u = uni.getStorageSync('user')
			let t = uni.getStorageSync('token')
			if(u){
				state.user = JSON.parse(u)
				state.token = t
				// 连接socket
				console.log('连接socket')
				dispatch('connectSocket')
			}
		},
		logout({ state,dispatch }){
			$H.post('/logout',{},{
				token:true,toast:false
			})
			console.log('断开socket')
			dispatch('closeSocket')
			state.user = null
			state.token = null
			uni.removeStorageSync('user')
			uni.removeStorageSync('token')
		},
		login({ state },user){
			state.user = user
			state.token = user.token
			
			uni.setStorageSync('user',JSON.stringify(user))
			uni.setStorageSync('token',user.token)
			// 连接socket
			console.log('连接socket')
			dispatch('connectSocket')
		},
		getUserInfo({ state }){
			$H.get('/user/info',{
				token:true,
				noJump:true,
				toast:false
			}).then(res=>{
				state.user = res
				uni.setStorage({
					key:"user",
					data:JSON.stringify(state.user)
				})
			})
		}
	}
})