import Vue from 'vue'
import app from '../App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)

import {Button} from 'mint-ui'
Vue.component(Button.name,Button)
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import VueResource from 'vue-resource'
Vue.use(VueResource)

import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './lib/mui/css/mui.min.css'

var vm=new Vue({
	el:"#app",
	render: c=>c(app),
	router//路由对像挂载到vm上
})

