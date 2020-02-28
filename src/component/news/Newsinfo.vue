<template>
	<div class="newsinfo-container">
		<h3 class="title">{{newsinfo.title}}</h3>
		<p class="subtitle">
			<span>发表时间：{{newsinfo.add_time|dateFormat}}</span>
			<span>点击{{newsinfo.click}}次</span>
		</p>
		<hr />
		<div class="content">
			{{newsinfo.content}}
		</div>
		<!-- 评论子组件 -->
		<comment-box :id="id"></comment-box>
	</div>
</template>

<script>
	//导入评论组件
	import comment from '../subcomponents/comment.vue'
	export default{
		data(){
			return {
				id:this.$route.params.id,
				newsinfo:{}
			}
		},
		created(){
			this.getNewsInfo()
		},
		components:
		{
			'comment-box':comment	
		},
		methods:{
			getNewsInfo(){//获取新闻详情
				this.$http.get('/host/api/getnews',{params:{id:this.id}}).then(result=>{
					if(result.body.status==0){
						this.newsinfo=result.body.message
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
.newsinfo-container{
	padding: 0 7px;
}	
.title{
	font-size: 20px;
	text-align: center;
	margin: 15px;
	color: #000000;
	font-weight: 700;
}

.subtitle{
	color: #26A2FF;
	display: flex;
	justify-content: space-between;
}
</style>
