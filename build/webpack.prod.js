const path=require('path')
const merge=require('webpack-merge')
const CleanWebpackPlugin=require('clean-webpack-plugin')
const common=require('./webpack.common.js')
module.exports=merge(common,{
	mode:'production',
	devtool:'cheap-module-eval-source-map',
	plugins:[
		new CleanWebpackPlugin(['dist'],{
			root:path.resolve(__dirname,'../')
		})
	]
})
