<template>
	<div>
		<mt-swipe :auto="2000" :continuous="true" class="swipe">
		  <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index">
				<img :src="item" alt="" :class="{full:isfull}"/>
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['lunbotuList',"isfull"]
	}
</script>

<style scoped="scoped">
	.full{
		width: 100%;
	}
	img{
		height: 100%;
	}
	.mint-swipe{
		height: 200px;
	}
	.mint-swipe-item:nth-child(1){
		background-color: blue;
	}
	.mint-swipe-item:nth-child(2){
		background-color: saddlebrown;
	}
	.mint-swipe-item:nth-child(3){
		background-color: chocolate;
	}
</style>
