<template>
	<div>
		<h3>发表评论</h3>
		<textarea placeholder="请输入你要评论的内容" maxlength="120"></textarea>
		<mt-button size="large" type="primary">发表</mt-button>
		<div class="cmt-lsit" v-for="item in comments" :key="item.id">
			<div class="cmt-title">
				第{{item.id}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time|dateFormat}}
			</div>
			<div class="cmt-body">{{item.content}}</div>
		</div>
		<mt-button size="large" type="danger" @click="getMore">加载更多</mt-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				pageIndex:1,//默认等于1
				comments:[] //评论数组
			}
		},
		created(){
			this.getComment()
		},
		props:["id"],
		methods:{
			getMore(){
				this.pageIndex++
				this.getComment()
			},
			getComment(){
				this.$http.get('/host/api/getcomments/'+this.id+"?pageindex="+this.pageIndex).then((result)=>{
					if(result.body.status==0){
						this.comments=this.comments.concat(result.body.message)//数组数据拼接
					}else{
						console.log("没有响应数据!")
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.cmt-title{
		margin-top: 5px;
		width: 100%;
		height: 20px;
		font-size: 12px;
		overflow-x: hidden;
		background-color: silver;
	}
	.cmt-body{
		font-size: 15px;
		padding: 0 5px;
	}
	
</style>
