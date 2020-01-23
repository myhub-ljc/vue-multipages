<template>
 <div id="parttime">
  <textarea>wowoow</textarea>
    </div>
</template>

<script>

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