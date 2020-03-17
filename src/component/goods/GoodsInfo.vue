<template>
	<div class="goodsinfo-container">
		
		<!-- 商品轮播图 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<lun-bo-tu :lunbotuList="lunbotuList" :isfull="true"></lun-bo-tu>
				</div>
			</div>
		</div>
		
		<div class="mui-card">
			<div class="mui-card-header">商品的名称标题</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
						市场价:<del>#2343</del>&nbsp;&nbsp;销售价格:<span class="now_price">#2100</span>
					</p>
					<p>
						购买数量:<num-box></num-box>
					</p>
					
					<mt-button type="primary" size="small">立即购买</mt-button>
					<mt-button type="danger" size="small">立即购买</mt-button>
				</div>
			</div>
		</div>
		
		<!-- 商品购买区域 -->
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号:</p>
					<p>库存情况:</p>
					<p>上架时间:</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain>图文介绍</mt-button>
				<mt-button type="danger" size="large" plain>商品评论</mt-button>
			</div>
		</div>
			
		<!-- 商品参数区域 -->
		
		
	</div>
</template>

<script>
	import LunBoTu from '../subcomponents/LunBoTu.vue'
	//导入数字选择框
	import NumBox from '../subcomponents/goodsinfo_numbox.vue'
	export default{
		data(){
			return {
				id:this.$route.params.id,//获取路由上的动态id
				lunbotuList:[] //轮播图数据列表
			}
		},
		created(){
			this.getlunbotu()
		},
		methods:{
			getlunbotu(){
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
			LunBoTu,
			NumBox
		}
		
	}
</script>

<style scoped="scoped">
	.goodsinfo-container{
		background-color: #EFEFF4;
		overflow: hidden;
	}
	.mui-card-footer{
		display: block;
	}
	button{
		margin-top: 10px;
	}
</style>
