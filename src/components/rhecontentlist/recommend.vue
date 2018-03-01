<template>
  <div class="author_box">
    <div class="author_pd">
      <div class="author_list" style="background: #f3f5fd;" onclick="location.href='author_index.html'">
        <img src="../../common/image/user.png">
        <div class="author_title">向日葵的笔记</div>
        <div class="author_hint">“与全世界分享有趣的知识”</div>
        <div class="author_button">进入主页</div>
      </div>
      <div class="author_list" style="background: #edfcf9;" onclick="location.href='author_index.html'">
        <img src="../../common/image/user.png">
        <div class="author_title">向日葵的笔记</div>
        <div class="author_hint">“与全世界分享有趣的知识”</div>
        <div class="author_button">进入主页</div>
      </div>
      <div class="author_list" style="background: #f6fff3;" onclick="location.href='author_index.html'">
        <img src="../../common/image/user.png">
        <div class="author_title">向日葵的笔记</div>
        <div class="author_hint">“与全世界分享有趣的知识”</div>
        <div class="author_button">进入主页</div>
      </div>
      <div class="author_list" style="background: #fff7fa;" onclick="location.href='author_index.html'">
        <img src="../../common/image/user.png">
        <div class="author_title">向日葵的笔记</div>
        <div class="author_hint">“与全世界分享有趣的知识”</div>
        <div class="author_button">进入主页</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab"
  }
</script>

<style scoped>

  .author_box {
    overflow: hidden;
    padding: 20px 20px 0 20px;
    background: #fff;
  }
  .author_box .author_pd {
    overflow: hidden;
    margin-left: -4%;
  }
  .author_box .author_pd .author_list {
    width: 46%;
    margin-left: 4%;
    float: left;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  .author_box .author_pd .author_list img {
    width: 70px;
    height: 70px;
    border: #e8e7e8 1px solid;
    border-radius: 50%;
    padding: 5px;
    margin: 10px 0 10px 0;
  }
  .author_box .author_pd .author_list .author_title {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .author_box .author_pd .author_list .author_hint {
    font-size: 16px;
    color: #999999;
    margin-bottom: 20px;
  }
  .author_box .author_pd .author_list .author_button {
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    color: #0398e9;
    border-radius: 10px;
    border: 1px solid #0398e9;
    display: inline-block;
    margin-bottom: 15px;
  }
</style>
