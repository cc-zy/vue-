
import VueRouter from 'vue-router'
import home from './component/tabbar/HomeContainer.vue'
import member from './component/tabbar/MemberContainer.vue'
import shopcar from './component/tabbar/ShopcarContainer.vue'
import search from './component/tabbar/SearchContainer.vue'
import NewsList from './component/news/NewsList.vue'
import Newsinfo from './component/news/Newsinfo.vue'

export default new VueRouter({
	routes:[
		{path:"/",redirect: {name:"home"}},
		{path:"/home",name:"home",component:home},
		{path:"/shopcar",name:"shopcar",component:shopcar},
		{path:"/search",name:"search",component:search},
		{path:"/member",name:"member",component:member},
		{path:"/home/newslist",name:"newslist",component:NewsList},
		{path:"/home/newsinfo/:id",name:"newsinfo",component:Newsinfo}
		
	],
	linkActiveClass:'mui-active'//覆盖默认的路由高光
		
	
})