<template>
	<div class="app-container">
		<mt-header fixed title="vue项目"></mt-header>
		<transition >
			<router-view  ></router-view>
		</transition>
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>
<!-- 普通的style标签只支持普通的样式 -->
<script>
	export default{
		data(){
			return {
			}
		}
		
	}
</script>
<!-- 样式的scoped是通过css的属性选择器实现的 -->
<style scoped="scoped" >
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}


.app-container{
	padding-top: 40px;
	padding-bottom: 40px;
	overflow-x: hidden;
}
.mint-header-title{
	z-index: 99;
}
</style>
