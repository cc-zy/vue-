<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="(item,index) in newslist" :key="item.id">
				<router-link :to="'/home/newsinfo/'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						{{item.title}}
						<p class='mui-ellipsis'>
							<span>发表时间：{{item.add_time|dateFormat}}</span>
							<span>点击：{{item.click}}</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				newslist:[]
			}
		},
		created(){
			this.getNewsList()
		},
		methods:{
			getNewsList(){
				this.$http.get('/host/api/getnewslist').then(result=>{
					if(result.body.status==0){
						this.newslist=result.body.message
					}else{
						alert("请求失败！")
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
.mui-ellipsis{
	font-size: 10px;
	color: #226aff;
	display: flex;
	justify-content: space-between;
}

</style>
