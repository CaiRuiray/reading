<template>
  <div class="seach_box">
    <div class="seach">
      <input type="" />
      <label for="search" class="label">
        <i class="iconfont color-fff"></i>
        <span>搜索你感兴趣的内容</span>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recommend"
  }
</script>

<style scoped>
  .seach_box{
    overflow: hidden;
  }
  .seach{
    background-color: #009beb;
    position: relative;
    padding: 15px 20px;
  }
  .seach input{
    width: 100%;
    outline: none;
    background: rgba(255,255,255,0.4);
    line-height: 52px;
    height: 52px;
    text-align: center;
    border-radius: 20px;
    display: inherit;
    background: rgba(255,255,255,0.4);
    border: none;
    z-index: 2;
    position: relative;
  }
  .seach label{
    font-size: 18px;
    position: absolute;
    top: 26px;
    display: inline-table;
    text-align: center;
    width: 100%;
    z-index: 1;
    color: white;
  }
</style>
