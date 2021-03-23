<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:''
			}
		},
		methods: {
			
		},
        onLoad(params){
            this.id = params.id;
            var that = this;
            uni.request({
                url:that.REQUEST_URL + 'index.php/api/live/tuila',
                method:'post',
                data:{
                    user_id:uni.getStorageSync('user').id,
                    live_id:that.id
                },
                success(res){
                    console.log(res.data.data.push_url);
                }
            })
        }
	}
</script>

<style>

</style>
