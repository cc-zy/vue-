const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
	entry:path.join(__dirname,'../src/main.js'),
	output:{
		path:path.join(__dirname,'../dist'),
		filename:'bundle.js'
	},
	plugins:[
		
			new htmlWebpackPlugin({
				template: path.join(__dirname,'../src/index.html'),
				filename:'index.html'
			}),
			new VueLoaderPlugin()
		
			
	],
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},//配配处理css文件
			{test:/\.vue$/,use:'vue-loader'},  //处理.vue的loader
			{test: /\.less$/, use: ["style-loader",'css-loader','less-loader']},
			{test: /\.scss$/, use: ["style-loader",'css-loader','sass-loader']},
			{test: /\.(jpg|png|gif|bmp|jpeg)$/, use: [{
				loader: 'url-loader',
					options: {
						esModule: false, // 这里设置为false
						name: '[name].[ext]',
						limit: 10240,
						outputPath:'images',
						publicPath:'./images'  //设置打包后图片的引入路径  ./images/a.jpg
					}
				}]
			},
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
