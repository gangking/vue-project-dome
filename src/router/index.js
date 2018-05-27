//1、导入 router 包
import VueRouter from 'vue-router'

// 导入组件
import HomeContainer from "../components/tabbar/HomeContainer.vue"
import MemberContainer from "../components/tabbar/MemberContainer.vue"
import SearchContainer from "../components/tabbar/SearchContainer.vue"
import ShopContainer from "../components/tabbar/ShopContainer.vue"


//2、创建路由对象
var router = new VueRouter({
	routes: [
    {path:'/', redirect: '/home'},//重定向
    {path:'/home',component:HomeContainer},
    {path:'/menber',component:MemberContainer},
    {path:'/search',component:SearchContainer},
    {path:'/shopcar',component:ShopContainer}
	],
	linkActiveClass: 'mui-active' //覆盖默认路由高亮的类
})

// 3、把路由对象暴露出去
export default router