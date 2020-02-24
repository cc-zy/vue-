
import VueRouter from 'vue-router'
import home from './component/tabbar/HomeContainer.vue'
import member from './component/tabbar/MemberContainer.vue'
import shopcar from './component/tabbar/ShopcarContainer.vue'
import search from './component/tabbar/SearchContainer.vue'

export default new VueRouter({
	routes:[
		{path:"/",redirect: {name:"home"}},
		{path:"/home",name:"home",component:home},
		{path:"/shopcar",name:"shopcar",component:shopcar},
		{path:"/search",name:"search",component:search},
		{path:"/member",name:"member",component:member}
	],
	linkActiveClass:'mui-active'//覆盖默认的路由高光
		
	
})