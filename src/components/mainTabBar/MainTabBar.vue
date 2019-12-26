<template>
  <!--tabbar和tabbarItem-->
  <tab-bar>
      <tab-bar-item path="/zonghe" activeColor="blue">
       <div slot="item-text">综合</div> 
      </tab-bar-item> 
      <tab-bar-item path="/gonggao" activeColor="blue">
        <div slot="item-text">公告</div>
      </tab-bar-item>
      <tab-bar-item path="/saishi" activeColor="blue">
        <div slot="item-text">赛事</div>
      </tab-bar-item>
      <tab-bar-item path="/gonglue" activeColor="blue">
        <div slot="item-text">攻略</div>
      </tab-bar-item>
      <tab-bar-item path="/shequ" activeColor="blue">
        <div slot="item-text">社区</div>
      </tab-bar-item>
   </tab-bar>
</template>

<script>
import TabBar from '../tabbar/TabBar';
import TabBarItem from '../tabbar/TabBarItem';

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>