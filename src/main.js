import Vue from 'vue'
import app from '../App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)
import {Button} from 'mint-ui'
Vue.component(Button.name,Button)
//图片懒加载
// import { Lazyload } from 'mint-ui';

// Vue.use(Lazyload);

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

/* import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css' */
import VueResource from 'vue-resource'
Vue.use(VueResource)

import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './lib/mui/css/mui.min.css'
//导入时间插件
import moment from 'moment'
//定义全局的过滤器  格式化时间

Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
	return moment(dataStr).format(pattern)
})
//图片懒加载
import VueLazyload from 'vue-lazyload'
 
// Vue.use(VueLazyload)
 
// or with options
Vue.use(VueLazyload, {
/*  preLoad: 1.3,
  error: './images/muwu.jpg',
  loading: './images/muwu.jpg',
  attempt: 1 */
})
//图片的缩略图插件
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)  


var vm=new Vue({
	el:"#app",
	render: c=>c(app),
	router//路由对像挂载到vm上
})

