<template>
  <div class="header">
    <div class="header_lf">
      <img src="../../common/image/remove.png">
    </div>
    <div class="header_ct">
      <div class="serach_input">
        <input type="text" placeholder="搜索你感兴趣的内容">
      </div>
    </div>
    <div class="header_rf">
      <img src="../../common/image/search_ss.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: "rank"
  }
</script>

<style scoped>
  .header {
    overflow: hidden;

    padding: 0 10px;
    background: #fff;
    display: flex;
  }
  .header .header_lf {
    width: 10%;
    line-height: 45px;
  }
  .header .header_lf img {
    font-size: 18px;
    width: 15px;
    height: 25px;
    position: relative;
    top: 25px;
    left: 5px;
  }
  .serach_main .header_ct {
    line-height: 0;
  }
  .header .header_ct {
    width: 80%;
    font-size: 18px;
    text-align: center;
  }
   .serach_input {
    height: 45px;
    margin-top: 10px;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    padding: 5px 15px;
    background: #f3f3f5;
  }
  .serach_input input {
    width: 100%;
    border: 0;
    outline: none;
    height: 45px;
    background: #f3f3f5;
  }
  .header_rf img{

    font-size: 18px;
    width: 30px;
    height: 30px;
    position: relative;
    top: 22px;
    right: -20px;
  }
  .header_rf {
    line-height: 45px;
  }
</style>
