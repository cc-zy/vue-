<template>
	<div class="goods-list">
		<div class="goods-item" v-for="item in List" :key="item.id" @click="toGoodsInfo(item.id)">
			<img   v-lazy="item.img_url"  alt=""/>
			<h1 class="title">{{item.title}}</h1>
			<div class="info">
				<p class="price">
					<span class="now">{{item.sell_price}}</span>
					<span class="old">{{item.market_price}}</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>乘{{item.stock_quantity}}件</span>
				</p>
			</div>
		</div>
		<mt-button type="danger" size="large">加载更多</mt-button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				List:[],  //商品列表
				pageIndex:1 //浏览的页数
			}
		},
		created(){
			this.getGoodsList()
		},
		methods:{
			getGoodsList(){
				this.$http.get('/host/api/getGoodsList?pageIndex='+this.pageIndex).then(function(result){
					if(result.body.status===0){
						this.List=result.body.message
					}
				})
			},
			toGoodsInfo(id){
				this.$router.push({path:"/home/goodsinfo/"+id})
			}
		}
	}
</script>

<style scoped="scoped">
	img[lazy=loading]{
		background-color: red;
	}
	img[lazy=error]{
		background-color: #000000;
	}
	.goods-list{
		display: flex;
		flex-wrap: wrap;
		padding: 10px;
		justify-content: space-between;
	}
	.goods-item{
		width: 49%;
		border: 1px solid #AAAAAA;
		margin-bottom: 5px;
		padding: 2px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 200px;
	}
	.title{
		font-size: 14px;
	}
	img{
		width: 100%;
		height: 100px;
	}
	.info{
		background-color: #DDDDDD;
	}
	.info p{
		margin: 0;
		padding: 4px;
	}
	.info .price .now{
		font-weight: bold;
		color: red;
		font-size: 17px;
	}
	.info .price .old{
		text-decoration: line-through;
		font-size: 12px;
		margin-left: 10px;
	}
	.info .sell{
		display: flex;
		justify-content: space-between;
		
	}
</style>
