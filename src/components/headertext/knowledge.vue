<template>
  <div class="title_box" slot="knowledgeofthemarket">
    <div class="title_lf">
      知识市场
    </div>
    <div class="title_rf">
      <span>查看更多</span>
      <i class="iconfont color-999"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab"
  }
</script>

<style scoped>
  .title_box {
    overflow: hidden;
    padding: 0 20px;
    margin-top: 5px;
    background: #fff;
    height: 52px;
    line-height: 52px;
    border-bottom: 1px solid #ececec;
  }
  .title_box .title_lf {
    float: left;
    font-size: 18px;
    font-weight: bold;
  }
  .title_box .title_rf {
    float: right;
    font-size: 18px;
    color: #999999;
  }
</style>
