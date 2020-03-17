
import VueRouter from 'vue-router'
import home from './component/tabbar/HomeContainer.vue'
import member from './component/tabbar/MemberContainer.vue'
import shopcar from './component/tabbar/ShopcarContainer.vue'
import search from './component/tabbar/SearchContainer.vue'
import NewsList from './component/news/NewsList.vue'
import Newsinfo from './component/news/Newsinfo.vue'
import PhotoList from './component/photos/PhotoList.vue'
import PhotoInfo from './component/photos/photoinfo.vue'
import GoodsList from './component/goods/GoodsList.vue'
import GoodsInfo from './component/goods/GoodsInfo.vue'

export default new VueRouter({
	routes:[
		{path:"/",redirect: {name:"home"}},
		{path:"/home",name:"home",component:home},
		{path:"/shopcar",name:"shopcar",component:shopcar},
		{path:"/search",name:"search",component:search},
		{path:"/member",name:"member",component:member},
		{path:"/home/newslist",name:"newslist",component:NewsList},
		{path:"/home/newsinfo/:id",name:"newsinfo",component:Newsinfo},
		{path:"/home/photolist",name:"photolist",component:PhotoList},
		{path:"/home/photoinfo/:id",name:"photoinfo",component:PhotoInfo},
		{path:"/home/goodslist",name:"goodslist",component:GoodsList},
		{path:"/home/goodsinfo/:id",name:"goodsinfo",component:GoodsInfo}
		
	],
	linkActiveClass:'mui-active'//覆盖默认的路由高光
		
	
})