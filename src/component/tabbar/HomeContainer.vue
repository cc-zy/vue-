<template>
	<div>
		<lun-bo-tu :lunbotuList="lunbotuList" :isfull="true"></lun-bo-tu>
		<!-- 九宫格改为六宫格 -->
	   <ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<router-link to="/home/newsList">
					<span class="mui-icon mui-icon-home"></span>
					<div class="mui-media-body">新闻资讯</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<router-link to="/home/photolist">
					<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
					<div class="mui-media-body">图片分享</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<router-link to="/home/goodslist">
					<span class="mui-icon mui-icon-chatbubble"></span>
					<div class="mui-media-body">商品购买</div>
				</router-link>
			</li>
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
	import LunBoTu from '../subcomponents/LunBoTu.vue'
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
		},
		components:{
			LunBoTu
		}
	}
</script>

<style scoped="">
	
	
	.mui-grid-view.mui-grid-9{
		background-color: white!important;
		
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border:0!important;
	}
</style>
