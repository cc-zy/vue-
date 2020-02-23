<template>
	<div>
		<h1>我是login组件{{name}}</h1>
		<input type="button" value="show" @click="show()"/>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				name:"陈泽洋"
			};
		},
		methods:{
			show(){
				console.log("调用了login中的show方法")
			}
		}
	}
</script>

<style>
</style>
//这里node中向外暴露成员的形式
//module.export={}
//在ES6中也通过规范的形式规定了ES6中如何导入和导出模块
//在ES6导入模块，impost from  import '路径'

//在ES6中使用export default 和export

/在Node中使用var=require('模块标识')
//暴露module.export 和export

//注意:export default向外暴露成员可以用任何的变量接受,只能向外暴露一次

//注意使用export向外暴露成员只能通过{}这种形式导入成员,可以暴露多个成员
//在同一个模块可以同时使用 module.export 和export
//export var title="aa"
//export var nn={}
//import {title} from ''   {title as name}  as可以起别名
