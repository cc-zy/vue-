<template>
	<div>
		<h1>这是account的子组件login</h1>
		<mt-button type="primary" @click="getList()">primary</mt-button>
		<div class="alert alert-primary" role="alert">
		  A simple primary alert—check it out!
		</div>
		<div class="spinner-border text-primary" role="status">
		  <span class="sr-only">Loading...</span>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return {
				toastInstanse:null
			}
		},
		methods:{
			getList(){
				this.show()
				setTimeout(()=>{
					this.toastInstanse.close()
				},1000)
			},
			show:function(){
				this.toastInstanse=Toast({
					message: '提示',
					position: 'middle',
					duration: -1,
					className:'toast1'
				});
			}
		}
	}
</script>

<style scoped="scoped" >


</style>
