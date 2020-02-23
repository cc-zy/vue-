import Vue from 'vue'
import app from '../App.vue'
import VueRouter from 'vue-router'
//导入自定义路由模块
import router from './router.js'
//手动安装VueRouter
Vue.use(VueRouter)
//创建路由对象
// var router=new VueRouter({
// 	routes:[
// 		{path:'/',redirect:'/goodslist'},
// 		{	path:'/account',
// 			component:account,
// 			children:[
// 				{path:'login',component:login},
// 				{path:'register',component:register}
// 			]
// 		},
// 		{path:'/goodslist',component:goodslist}
// 	]
		
	
// })
/* import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI) */
import {Button} from 'mint-ui'
// import 'mint-ui/lib/style.css'
Vue.component(Button.name,Button)
import './css/toast.css'

import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

var vm=new Vue({
	el:"#app",
	render: c=>c(app),
	router//路由对像挂载到vm上
})

import './lib/mui/css/mui.min.css'
class Person{
	static  info ={name:"zs",age:12}
}
console.log(Person.info)

//在webpack中默认只能处理一些低级的语法,一些高级的语法,es6或者es7语法,webpack是处理不了的时候,
//借助于第三方loader来帮助webpack处理这些高级的语法当第三方把高级的语法转为低级之后会把结果交给webpack
//去打包到bundle.js
//通过Babel可以帮我们将一些高级的语法转为低级的语法
//在webpack中可以运行如下命令安装两套包
//第一套包:npm i babel-core bebel-loader bebel-plugin-trensform-runtime -D
//第二套包: npm i bebel-preset-env bebel-preset-stage-0 -D

//打开webpack配置文件 ,在module节点下添加新的比配规则
//{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
//在项目更目录新建一个叫做.babelrc的Babel配置文件这个配置文件属于JSON格式
//所以在.babelrc配置的时候要符合JSON格式不能写注释和字符串要用双引号
// {
// 	"presets":[],
// 	"plugins":[]
// }
