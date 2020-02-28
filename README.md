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