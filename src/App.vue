<template>
  <div class="box-container">
    <!--顶部区域-->
    <mt-header fixed title="有熊商场"></mt-header>
    <!--中间内容区域-->
    <transition>
      <router-view></router-view>
    </transition>

    <!--底部区域-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/menber">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
// 开始动画和结束动画样式分开、
// 开始是从右边进入，所以设置100%
// 结束是从左侧消失，所以设置-100%
.v-enter{
  opacity: 0;
  transform: translateX(100%)
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute; //解决切换是下移上漂情况
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s linear;
}

.box-container {
  padding-top: 40px;
  overflow-x: hidden;//水平方向去掉滑动条
  
  >h1 {
    color: red;
  }
}
</style>
