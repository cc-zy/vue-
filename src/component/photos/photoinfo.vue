<template>
	<div>
		<h3>{{photoinfo.title}}</h3>
		<p class="subtitle">
			<span>发表时间:{{photoinfo.add_time|dateFormat}}</span>
			<span>点击:{{photoinfo.click}}次</span>
		</p>
		<hr />
		<!-- 缩略图区域 -->
		<vue-preview
		      :list="list"
		      :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
		      :previewBoxStyle="{border: '1px solid #eee'}"
		      :tapToClose="true"
		      @close="closeHandler"
		      @destroy="destroyHandler"
		 />
		
		
		<!-- 图片内容区域 -->
		<div class="content" v-html="photoinfo.content">
			
		</div>
		<!-- 放置一个现成的评论子组件 -->
	</div>
</template>

<script>
	export default{
		data(){
			return {
				id:this.$route.params.id,//从路由中获取图片id
				photoinfo:{},//图片详情
				list:[]//缩略图的列表
			}
		},
		created(){
			this.getPhotoInfo()
			this.getPreview()
		},
		methods:{
			getPhotoInfo(){
				//获取图片的详情
				this.$http.get("/host/api/getImagesInfo/"+this.id).then(result=>{
					if(result.body.status==0){
						this.photoinfo=result.body.message[0]
					}
				})
			},
			// 即将关闭的时候，调用这个处理函数
			closeHandler() {
			  console.log('closeHandler')
			},
			// 完全关闭之后，调用这个函数清理资源
			destroyHandler() {
			  console.log('destroyHandler')
			},
			getPreview(){
				this.$http.get('/host/api/getImages/'+this.id).then((result)=>{
					if(result.body.status===0){
						result.body.message.forEach(function(item){
							item.w=600
							item.h=400
						})
						this.list=result.body.message
					}
				})
			}
		}
	}
</script>

<style>
</style>
