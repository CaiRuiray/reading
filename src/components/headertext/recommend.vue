<template>
  <div class="demand">
    <div class="tile">作者推荐</div>
    <div class="demand_right">
      <span>查看更多</span>
      <i>2</i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab"
  }
</script>

<style scoped>
  .demand{
    display: flex;
    padding: 20px;
    border-bottom: 0.013333rem solid #ececec;
  }
  .demand .tile{ font-size: 18px; flex: 1;font-weight: bold;}
  .demand .demand_right{ font-size: 18px;}
</style>
