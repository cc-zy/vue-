<template>
	<div>
		<h1>{{name}}</h1>
		<router-link to="/account">Account</router-link>
		<router-link to="/goodslist">Goodslist</router-link>
		<router-view></router-view>
	</div>
</template>
<!-- 普通的style标签只支持普通的样式 -->
<script>
	export default{
		data(){
			return {
				name:"陈泽阳"
			}
		}
		
	}
</script>
<!-- 样式的scoped是通过css的属性选择器实现的 -->
<style scoped="scoped" >
	
</style>
