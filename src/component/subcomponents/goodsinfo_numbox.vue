<template>
	<div class="mui-numbox" data-numbox-min='1' data-numbox-max='10'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1" />
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>

<script>
	// import mui from '../../lib/mui/js/mui.js'
	export default{
		mounted(){
			//初始化数字选择框
			// mui('mui-numbox').numbox()
		}
	}
</script>

<style scoped="scoped">
</style>
