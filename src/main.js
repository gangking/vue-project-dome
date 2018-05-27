// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 导入路由模块
import VueRouter from "vue-router"
// 安装路由模块
Vue.use(VueRouter)

// 导入axios数据请求模块
// import axios from "axios"
// Vue.prototype.$axios = axios;

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入minit ui全局样式
import 'mint-ui/lib/style.css'
//按需导入组件(头部，轮播图)
import { Header, Swipe, SwipeItem } from 'mint-ui';
// 头部
Vue.component(Header.name, Header);
// 首页轮播图
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//导入mui组件样式
import "./lib/mui/css/mui.min.css"
//导入路由字体图标样式
import "./lib/mui/css/icons-extra.css"

// 导入自己的路由模块
import router from './router/index.js'

var vm = new Vue({
  el:"#app",
  render: c => c(App),
  router //挂载路由对象到vm实例上
})