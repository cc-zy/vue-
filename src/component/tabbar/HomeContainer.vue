<template>
	<div>
		<mt-swipe :auto="2000" :continuous="true" class="swipe">
		  <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index">
				<img :src="item" alt="" />
		  </mt-swipe-item>
		</mt-swipe>
		<!-- 九宫格改为六宫格 -->
	   <ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<router-link to="/home/newsList">
					<span class="mui-icon mui-icon-home"></span>
					<div class="mui-media-body">新闻资讯</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
				<div class="mui-media-body">图片分享</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
				<span class="mui-icon mui-icon-chatbubble"></span>
				<div class="mui-media-body">商品购买</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
				<span class="mui-icon mui-icon-location"></span>
				<div class="mui-media-body">留言反馈</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
				<span class="mui-icon mui-icon-search"></span>
				<div class="mui-media-body">视频专区</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
				<span class="mui-icon mui-icon-phone"></span>
				<div class="mui-media-body">联系我们</div></a></li>
		
		</ul> 
	</div>
</template>

<script>
	export default {
		data(){
			return {
				lunbotuList:[]
			}
		},
		created(){
			this.getLunbotu()
		},
		methods:{
			getLunbotu(){ //获取轮播图的请求方法
				this.$http.get("/api/api/imgages").then(result=>{
					if(result.body.status==0){
						this.lunbotuList=result.body.url
					}else{
						console.log("轮播图请求失败")
					}
				})
			}
		}
	}
</script>

<style>
	.mint-swipe{
		height: 200px;
	}
	.mint-swipe-item:nth-child(1){
		background-color: blue;
	}
	.mint-swipe-item:nth-child(2){
		background-color: saddlebrown;
	}
	.mint-swipe-item:nth-child(3){
		background-color: chocolate;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.mui-grid-view.mui-grid-9{
		background-color: white!important;
		
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border:0!important;
	}
</style>
