<template>
<div id="gonggao">
  <h2>公告</h2>
  <div class="first" id="b"><a href="#"><span>[公告]</span>&#12288;2月24日凌晨3点停机版本公告</a></div>
    <div class="first" id="b"><a href="#"><span>[公告]</span>&#12288;事件详情</a></div>
    <div class="first" id="c"><a href="bofang.html"><span>[赛事]</span>&#12288;CUBA总决赛</a></div>
    <div class="first" id="d"><a href="bofang.html"><span>[视频]</span>&#12288;事件详情</a></div>
    <div class="first" id="e"><a href="news.html"><span>[其他]</span>&#12288;事件详情</a></div>
    <div class="first" id="e"><a href="news.html"><span>[其他]</span>&#12288;事件详情</a></div>
</div>
</template>

<script>
export default {
  name: "gonggao"
}
</script>

<style scoped>
#gonggao{
    margin-top: 50px;
    margin-left: -480px;
    float: left;
  }
   h2{
    margin-left: 220px;
  }
  span{
    font-size: 20px;
    margin: 0 20px;
  }
  .first{
    margin-top: 20px;
    margin-left: 30px;
  }
  #b span{
    border-radius: 5px;
    color: royalblue;
  }
  #c span{
    border-radius: 5px;
    color: greenyellow;
  }
  #d span{
    border-radius: 5px;
    color: wheat;
  }
  #e span{
    border-radius: 5px;
    color: black;
  }
</style>