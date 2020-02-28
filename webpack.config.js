const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
/* 出来需要配置{test: /\.vue$/, use: 'vue-loader'}这个外，还需要载webpack.config.js配置文件中加两行代码:

const VueLoaderPlugin = require('vue-loader/lib/plugin');

new VueLoaderPlugin() */

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
	entry:path.join(__dirname,'./src/main.js'),//入口表示需要webpack打包那个文件
	output:{
		path:path.join(__dirname,'./dist'),//指定打包好的文件，输出到哪个目录中去
		filename:'bundle.js'//指定输出文件的名称
	},
	devServer: {
	  contentBase: path.join(__dirname, "src"),
	  port: 9000,
	  open:true,
	  proxy: {
			"/api": {
			  target: "http://czy2020.xyz:8989",
			  ws: true,
			  changeOrigin: true,
			  pathRewrite: {
			    "^/api": ""
			  }
			},
			"/host": {
			  target: "http://localhost:8989",
			  ws: true,
			  changeOrigin: true,
			  pathRewrite: {
			    "^/host": ""
			  }
			}
			
	        
	      }
	},
	plugins:[//配置插件的节点
	//		new webpack.HotModuleReplacementPlugin() //这是启动热更新的第三步
			new htmlWebpackPlugin({//创建一个在内存中生成HTML页面的插件
				template: path.join(__dirname,'./src/index.html'),//指定模板页面。将来会根据指定的页面路径，去生成内存中的页面
				filename:'index.html'//指定生成页面的名称
			}),
			new VueLoaderPlugin()
			
	],
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},//配配处理css文件
			{test:/\.vue$/,use:'vue-loader'},  //处理.vue的loader
			{test: /\.less$/, use: ["style-loader",'css-loader','less-loader']},
			{test: /\.scss$/, use: ["style-loader",'css-loader','sass-loader']},
			{test: /\.(jpg|png|gif|bmp|jpeg)$/, use: "url-loader?limit=8000"},
			{test: /\.(tff|eot|svg|woff|woff2|ttf)$/, use: "url-loader"},
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
		]
	},
	resolve:{
		alias:{
			"vue$":"vue/dist/vue.js"
		}
	}

}


/* rules: [
            {test: /\.css$/, use:['style-loader','css-loader']},//配置处理.css文件的第三方处理规则
            {test: /\.less$/, use: ["style-loader",'css-loader','less-loader']},
            {test: /\.scss$/, use: ["style-loader",'css-loader','sass-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: "url-loader?limit=8000"},
            {test: /\.(tff|eot|svg|woff|woff2)$/, use: "url-loader"},
            {test:/\.js$/, use:'babel-loader',exclude:/node_modules/},
            {test: /\.vue$/, use: 'vue-loader'}
        ] */
//这里node中向外暴露成员的形式
//module.export={}
//在ES6中也通过规范的形式规定了ES6中如何导入和导出模块
//在ES6导入模块，impost from  import '路径'

//在ES6中使用export default 和export

//在Node中使用var=require('模块标识')
//暴露module.export 和export

//注意:export default向外暴露成员可以用任何的变量接受,只能向外暴露一次

//注意使用export向外暴露成员只能通过{}这种形式导入成员,可以暴露多个成员
//在同一个模块可以同时使用 module.export 和export
//export var title="aa"

//import {title} from ''