<template>
 <div id="app">
    <!--头部-->
    <div id="header">
      <h2 id="wzm">名字暂定</h2>
    </div>
    <!--头部和（轮播，新闻导航）之间的导航栏-->
    <div class="dao">
      <div class="biao">
        <img class="carousel-img" src="../../../static/images/cart_empty.png"/>
        <strong>购物车</strong>
      </div>
      <div class="biao">
        <img class="carousel-img" src="../../../static/images/小蜜.png"/>
        <strong>登陆</strong>
      </div>
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
            <a href="twoHands.html" target="_blank">
            <div class="box_item_shape">
              <img class= "box1" src="../../../static/images/小蜜.png"/>
            </div></a>
             <div class="box_item_text">二手交易市场</div> 
          </div> 
          <div class="box_item">
            <a href="study.html" target="_blank"><div class="box_item_shape">
              <img class= "box1" src="../../../static/images/m_dfm.png"/>
              </div></a>
            <div class="box_item_text">学习交流区</div>
          </div>
          <div class="box_item">
            <a href="video.html" target="_blank"><div class="box_item_shape">
              <img class= "box1" src="../../../static/images/m_oee.png"/>
              </div></a>
            <div class="box_item_text">学生赛事区</div>
          </div>
          <div class="box_item">
            <a href="parttime.html" target="_blank"><div class="box_item_shape">
              <img class= "box1" src="../../../static/images/m_dfm.png"/>
              </div></a>
            <div class="box_item_text">学生兼职区</div>
          </div>
          <div class="box_item">
            <div class="box_item_shape"></div>
            <div class="box_item_text">新东西试验交流区</div>
          </div>
      
          <div class="box_item">
            <div class="box_item_shape"></div>
            <div class="box_item_text">私家小厨</div>
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
.box1{
  width: 50px;
  height: 50px;
  transform: rotate(-45deg);
  margin-left: -1px;
  margin-top: 13px;
}
.dao{
  width: 100%;
  height: 50px;
  margin-top: -10px;
  background: white;
  display: flex;
}

.biao img{
  width: 30px;
  height: 30px;
  margin: 4px 5px;
}
/*头部标题*/
#wzm{
  font-weight: bolder;
  font-style: italic;
}
/*模块部分*/
.model{
  height: 600px;
  margin-top: 100px;
  float: left;
  margin-left: 70px;
  background: radial-gradient(200% 100% at bottom center, #f7f7b6, 
  #e96f92,#1b2947);
  background: radial-gradient(220% 105% at top center,#1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
  background-attachment: fixed;
  overflow: hidden;
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
  margin-top: 60px;
	text-align: center;	
	cursor: pointer;
}
.box_item_shape{
  display: inline-block;
  width: 77px;
  height: 77px;
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