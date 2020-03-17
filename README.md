# 移动端商城小项目 vue+node(express)+json文件(模仿数据)


# git init 
# git add . 
# git status 
# git commit -m "提交信息"
# 
# git push


## .gitgnore 忽略文件
##  node_modules 包不用上传  .idea .vscode .git
##  
##  
##  如何获取数据 vue-resource
##  
##  
##  新闻资讯 页面制作
##  1.绘制页面
##  2.使用vue-resource 获取数据
##  
##  实现 新闻资讯列表 点击跳到新闻详情 
##  1.把列表中的每一项改变为 router-link，同时在跳转的时候因该提供唯一的id标识
##  2.创建新闻详情的组件页面 NewsInfo.vue
##  3.在路由模块中，将新闻详情的路由地址和组件页面对应起来
##  
##  实现新闻详情的页面 和数据渲染
##  content 这样的一般都是带html
##  
##  
##  
##  单独封装一个组件 coment.vue评论组件
##  1.先创建一个单独的comment.vue组件模板
##  2.在需要的comment组件页面中先手动导入comment组件
##  3.import comment from './comment.vue'
##  4.在父组件使用compontents属性，将导入的子组件注册为自己的子组件
##  5.将注册子组件时候注册名称以标签的形式在页面中引用
##  
##  
##  
##  获取所有的评论数据显示到页面中
##  
##  实现点击加载更多评论的功能
##  
##  1.为加载更多按钮绑定点击事件,在事件中,下一页数据
##  2.点击加载多，让加载pageIndex++ 然后重新调用this.getComments()方法重新获取最新页的数据
##  
##  
##  制作图片列表区域
##  
##  1.图片列表需要使用懒加载技术，我们可以使用Mint-ui现成的组件 'lany-load'
##  2.根据lany-load的使用文档尝试使用
##  3.渲染图片列表数据
##  
##  
##  实现图片列表 懒加载改造和样式美华
##  实现了 点击图片跳转到图片详情页面
##  
##  在改造li成router-link的时候,需要使用tag属性指定渲染为哪种元素
##  
##  图片缩略图 vue2-preview [](https://www.npmjs.com/package/vue2-preview)
##  
##  
##  实现图片详情中的缩略图
##  1.使用缩略图插件vue2-preview
##  2.获取到所有的图片列表然后使用v-for指令渲染数据
##  3.每个图片对象中有w，h属性
##  
##  
##  在自建组件的时候发现每个引用的该组件的样式都不一样有分歧的时候，可以从父组件传值:is="istrue"  子组件 props:['istrue']接收
##  然后:class={red:istrue} 设置不同的组件的各自的样式
