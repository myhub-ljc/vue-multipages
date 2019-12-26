<template>
  <div class="tab-bar-item" @click="itemClick">
    <!--在maintabbar中插入每个题目-->
    <div :style="activeStyle"><slot name="item-text"></slot></div> 
    <div v-if="!isActive"><slot name="item-icon"></slot></div> 
    <div v-else><slot name="item-icon-active"></slot></div>  
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  /*注意props */
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data(){
    return {
      //isActive: true
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
/*每个导航栏内容题目的样式 */
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
</style>