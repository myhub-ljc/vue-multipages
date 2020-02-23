<template>
 <div id="app">
    <!--头部-->
  <div class="new">
  <div class="frosted-glass">
    <h1 class="title">卡&nbsp;纳&nbsp;蓝</h1>
  </div>
  </div>
    <!--头部和（轮播，新闻导航）之间的导航栏-->
    <div class="dao">
      <div class="biao">
        <img class="carousel-img" src="../../../static/images/cart_empty.png"/>
        <a href="" target="_blank"><strong>购物车</strong></a>
      </div>
      <div class="biao">
        <img class="carousel-img" src="../../../static/images/小蜜.png"/>
        <a href="login.html" target="_blank"><strong>登陆</strong></a>
      </div>
    </div>
    <!--轮播图-->
      <carousel>
        <div class="carousel-item">
          <div class="carousel-img"><img class="carousel-img" src="../../../static/images/index_first.jpg"/>
          </div>
        </div>
        <div class="carousel-item"><img class="carousel-img" src="../../../static/images/index_second.jpg"/></div>
        <div class="carousel-item"><img class="carousel-img" src="../../../static/images/index_third.jpg"/></div>
        <div class="carousel-item"><img class="carousel-img" src="../../../static/images/index_forth.jpg"/></div>
        <div class="carousel-item"><img class="carousel-img" src="../../../static/images/index_five.jpg"/></div>   
        </carousel> 
        <!--新闻导航栏-->
       <main-tab-bar></main-tab-bar>
       <!--路由-->
       <router-view></router-view>
       <!--各个板块-->
       <div class="model">    
         <h1 class="model_title">致力于服务全国学生</h1>
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
              <img class= "box1" src="../../../static/images/parttime.png"/>
              </div></a>
            <div class="box_item_text">学生兼职区</div>
          </div>
          <div class="box_item">
            <a href="product.html" target="_blank"><div class="box_item_shape">
              <img class= "box1" src="../../../static/images/m_cad.png"/>
              </div></a>
            <div class="box_item_text">新产品体验区</div>
          </div>
      
          <div class="box_item">
            <a href="sijia.html" target="_blank"><div class="box_item_shape">
              <img class= "box1" src="../../../static/images/sijia.png"/>
              </div></a>
            <div class="box_item_text">时事新闻</div>
          </div>
         </div>
       </div>
    <div class="dibu">
      <h4>以上所有信息归卡纳蓝所有@违者必究</h4>
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
  padding: 0;
}
 @import url("https://fonts.googleapis.com/css?family=Lato:200");
a{
  text-decoration: none;
}
.new{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background: url(https://i.loli.net/2019/11/17/GAYyzeKsiWjP5qO.jpg);
  background-size: cover;
  background-position: center;
}

.frosted-glass {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72vw;
  height: 100px;
  box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),
    0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),
    0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  transition: 0.5s ease;

  &:hover {
    box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.157),
      0 1.7px 2.6px rgba(0, 0, 0, 0.224), 0 3.5px 5.3px rgba(0, 0, 0, 0.28),
      0 7.3px 11px rgba(0, 0, 0, 0.346), 0 20px 30px rgba(0, 0, 0, 0.5);
  }

  .title {
    padding-left: 0.375em;
    font-size: 3.6em;
    font-family: Lato, sans-serif;
    font-weight: 200;
    letter-spacing: 0.75em;
    color: white;

    @media (max-width: 640px) {
      font-size: 2em;
    }
  }
}
h1{
  font-size: 40px;
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
h2{
  margin-top: -10px;
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
.dibu{
  width: 100%;
  height: 60px;
  background-color: rgb(192, 192, 192);
  float: left;
  border-radius: 20px;
  margin-top: 2px;
}
h4{
  text-align: center;
}
.neon {
  color: #cce7f8;
  font-size: 2.5rem;
  font-family: 'Pacifico', cursive;
  text-transform: uppercase;
  text-align: center;
  animation: shining 0.1s alternate infinite;
}

@keyframes shining {
  from {
    text-shadow: 0 0 6px rgba(182, 211, 207, 0.9),
      0 0 30px rgba(182, 211, 207, 0.3), 0 0 12px rgba(15, 115, 223, 0.5),
      0 0 21px rgba(15, 115, 223, 0.9), 0 0 34px rgba(15, 115, 223, 0.8),
      0 0 54px rgba(15, 115, 223, 0.9);
  }
  to {
    text-shadow: 0 0 6px rgba(182, 211, 207, 1),
      0 0 30px rgba(182, 211, 207, 0.4), 0 0 12px rgba(15, 115, 223, 0.6),
      0 0 22px rgba(15, 115, 223, 0.8), 0 0 38px rgba(15, 115, 223, 0.9),
      0 0 60px rgba(15, 115, 223, 1);
  }
}
</style>