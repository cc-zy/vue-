<template>
	<div  class="container">
		<!-- 顶部滑动导航栏 -->
		<div class="scroll-wrapper-x" ref="wrapper_x">
			<div class="scroll-content-x">
				<span class="scroll-item-x" @click="all">全部</span>
				<span class="scroll-item-x">家居生活</span>
				<span class="scroll-item-x">摄影设计</span>
				<span class="scroll-item-x">明星美女</span>
				<span class="scroll-item-x">明星美女</span>
				<span class="scroll-item-x">明星美女</span>
				<span class="scroll-item-x">明星美女</span>
			</div>
		
		</div>
		<!-- 图片列表 -->
		<ul>
		  <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
		    <img class="lazy" v-lazy="item.img_url">
			<div class="info">
				<h1 class="info-title">{{item.title}}</h1>
				<div class="info-body">{{item.zhaiyao}}</div>
			</div>
		  </router-link>
		</ul>
	</div>
</template>

<script>
	import BScroll from '@better-scroll/core'
	export default{
		data(){
			return{
				bs1:null,
				list:[]
			}
		},
		mounted(){
			      this._initScroll();       
		},
		methods:{
			_initScroll(){
				this.bs1=new BScroll(this.$refs.wrapper_x,{
					 scrollX: true
				
				}),
				
					this.$http.get('/host/api/getImages').then(result=>{
						if(result.body.status==0){
							this.list=result.body.message
						}
					})
				
			},
			all(){
				alert("all")
			}
		}
		
	}
</script>

<style scoped="scoped">
	.container{
		overflow: hidden;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}
	.scroll-wrapper-x{
		 white-space :nowrap;
		 width: 100%;
		 height: 5%;
		 box-shadow: 2px 1px 4px #888888;
	}
	.scroll-content-x{
		 display: inline-block;
		 height: 100%;
		 font-size: 15px;
		 font-weight: 600;
	}
	.scroll-item-x{
		line-height:35px;
		margin: 0 10px;
	}
	
	li{
		list-style: none;
		margin-bottom: 10px;
		background-color: #CCCCCC;
		text-align: center;
		padding-bottom: 0;
		box-shadow: 0 0 6px #999999;
		position: relative;
	}
	ul{
		padding: 10px;
		margin: 0;
		text-align: center;
	}
	img{
		width: 100%;
		vertical-align: middle;
	}
	img[lazy=loading]{
		background-color: red;
	}
	img[lazy=error]{
		background-color: #000000;
	}
	.info{
		color: white;
		position: absolute;
		bottom: 0;
		background-color: rgba(0,0,0,0.4);
	}
	.info-title{
		font-size: 14px;
	}
	.info-body{
		font-size: 13px;
	}
</style>



