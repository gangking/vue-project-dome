<template>
    <div>
        <!--轮播图区域-->
        <mt-swipe :auto="4000">
            <!--
                        通过v-for循环渲染轮播图；
                        通过指定：bind简写形式绑定src属性数据；
                        设置每一项的key值，确保独一无二；
                     -->
            <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
                <img :src="item.src" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!--六宫格区域-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../assets/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../assets/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../assets/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../assets/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../assets/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../assets/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
//导入 mui  消息提示样式
import { Toast } from 'mint-ui';
export default {

    data() {
        return {
            lunbotulist: [] //定义保存轮播图的数组
        };
    },
    created() {//页面即将渲染，生命周期函数
        this.getLunboTu();//调用获取轮播图数据方法
    },
    methods: {
        getLunboTu() {//轮播图数据获取请求方法
            // 获取轮播图数据的方法
            // 跨域
            // this.$http.jsonp('https://api.douban.com/v2/book/1220562', {},
            //     {
            //         headers: {},
            //         emulateJSON: true
            //     }).then((response) => {
            //         this.movie = response.data;
            //         console.log(this.movie);
            //     });

            // 本地get请求
            // this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
            //     // console.log(result.body);
            //     if (result.body.status === 0) {
            //         // 成功了
            //         this.lunbotuList = result.body.message;
            //     } else {
            //         // 失败的
            //         Toast("加载轮播图失败。。。");
            //     }
            // });

            // 模拟假数据(轮播图)
            const data = require('../../testdata/index.json')
            // console.log(data)
            if (data.status) {
                Toast('数据加载失败！');
            } else {
                Toast('数据加载成功！');
                this.lunbotulist = data.message
                console.log(this.lunbotulist)
            }
        }
    }
}

</script>


<style lang = "scss" scoped>
.mint-swipe {
    height: 150px;
    .mint-swipe-item {
        /*&:nth-child(1) {
            background-color: red;
        }
        &:nth-child(2) {
            background-color: blue;
        }
        &:nth-child(3) {
            background-color: cyan;
        }*/
        img {
            width: 100%;
            height: 100%;
        }
    }
}
.mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
        img{
            width: 60px;
            height: 60px;
        }
        .mui-media-body{
            font-size: 13px;
        }
    }
</style>

