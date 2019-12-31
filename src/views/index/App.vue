<template>
 <div id="app">
    <!--头部-->
    <div id="header">
      <h2 id="wzm">名字暂定</h2>
    </div>
    <!--头部和（轮播，新闻导航）之间的导航栏-->
    <div>
      <h2>导航栏暂定</h2>
    </div>
    <!--轮播图-->
      <carousel>
        <div class="carousel-item">
          <div class="carousel-img" style="padding-top: 130px;    font-size: 40px;color: #fff">第一个自定义html轮播图内容
          </div>
        </div>
        <div class="carousel-item"><img class="carousel-img" src="../../../static/images/carousel1.png"/></div>
        <div class="carousel-item"><img class="carousel-img" src="../../../static/images/carousel2.png"/></div>
        <div class="carousel-item"><img class="carousel-img" src="../../../static/images/carousel3.png"/></div>
        <div class="carousel-item"><img class="carousel-img" src="../../../static/images/carousel4.png"/></div>   
        </carousel> 
        <!--新闻导航栏-->
       <main-tab-bar></main-tab-bar>
       <!--路由-->
       <router-view></router-view>
       <!--各个板块-->
       <div class="model">
         <h1 class="model_title">总共分为哪几个模块呢</h1>
         <div class="model_underLine"></div>
         <div class="box">
          <div class="box_item">
            <a href="twoHands.html" target="_blank"><div class="box_item_shape"></div></a>
             <div class="box_item_text">二手交易市场</div> 
          </div> 
          <div class="box_item">
            <a href="study.html" target="_blank"><div class="box_item_shape"></div></a>
            <div class="box_item_text">学习交流区</div>
          </div>
          <div class="box_item">
            <div class="box_item_shape"></div>
            <div class="box_item_text">大学生实习兼职区</div>
          </div>
          <div class="box_item">
            <div class="box_item_shape"></div>
            <div class="box_item_text">新东西试验交流区（游戏）</div>
          </div>
          <div class="box_item">
            <div class="box_item_shape"></div>
            <div class="box_item_text">全国学生各类比赛直播区</div>
          </div>
          <div class="box_item">
            <div class="box_item_shape"></div>
            <div class="box_item_text">第六个模块的简介</div>
          </div>
         </div>
       </div>
    </div>
</template>

<script>
import carousel from '../../index/carousel.vue'
import MainTabBar from '../../components/mainTabBar/MainTabBar'

export default {
  name: 'App',
  components: {
    carousel,
    MainTabBar
  }
}
</script>

<style>
  body{
  margin: 0;
}
/*头部*/
#header{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
}
/*头部标题*/
#wzm{
  font-weight: bolder;
  font-style: italic;
}
/*模块部分*/
.model{
  margin-top: 100px;
  float: left;
  margin-left: 70px;
}
/*模块大标题*/
.model_title{
  margin-left: 440px;
} 
/*模块下方横线*/
.model_underLine{
  width: 200px;
  height: 10px;
  background-color: aqua;
  margin: 20px 490px;
}
.box{
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.box_item{
  flex: 23.33%;
  padding: 10px;
	text-align: center;	
	cursor: pointer;
}
.box_item_shape{
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid #82ccdd;
  transform: rotate(45deg);
  margin-bottom: 30px;
	margin-top: 16px;
	transition: 0.3s linear;
}
.box_item_shape:hover{
	background: #82ccdd;
}
</style>