// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//导入minit ui全局样式
import 'mint-ui/lib/style.css'
//按需导入组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//导入mui组件完成底部样式
import "./lib/mui/css/mui.min.css"

var vm = new Vue({
  el:"#app",
  render: c => c(App)
})