const path=require('path')
const webpack=require('webpack')
const Uglifyjs=require('uglifyjs-webpack-plugin')
const merge=require('webpack-merge')
const common=require('./webpack.common.js')
module.exports=merge(common,{
	mode:"development",
	// devtool:"source-map",
	devServer: {
	  contentBase: path.join(__dirname, "../src"),
	  port: 9000,
	  open:true,
	  hot:true,
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
			new webpack.HotModuleReplacementPlugin(), //这是启动热更新的第三步
		/* 	new Uglifyjs({
				sourceMap:true
			}) */
	]

})




