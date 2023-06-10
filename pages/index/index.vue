<template>
	<view class="content">
    <text>主页</text>
    <!-- <navigator url="/pages/404/404">404页面</navigator> -->
    <view>
      <navigator url="/subpages/chat/chat">前往知心姐姐聊天</navigator>
    </view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
    onShow() {
      console.log("show in pages/index");
    },
		onLoad() {
      console.log(getCurrentPages());
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
