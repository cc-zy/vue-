import account from './component/Account.vue'
import goodslist from './component/GoodsList.vue'
import login from  './component/login.vue'
import register from './component/register.vue'
import VueRouter from 'vue-router'

export default new VueRouter({
	routes:[
		{path:'/',redirect:'/goodslist'},
		{	path:'/account',
			component:account,
			children:[
				{path:'login',component:login},
				{path:'register',component:register}
			]
		},
		{path:'/goodslist',component:goodslist}
	]
		
	
})