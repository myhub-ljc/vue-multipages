<template>
  <div id="tab-bar">
    <!--将每一部分的标题插进去-->
     <slot></slot>
   </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
/*新闻导航栏的整体样式 */
#tab-bar{
  margin-left: 40px;
  display: flex;
  background-color: white;
  width: 480px;
  height: 360px;
  box-shadow: 0px -5px 10px rgba(100,100,100,0.2);
  float: left;
}
</style>