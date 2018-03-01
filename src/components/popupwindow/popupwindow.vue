<template>
 <div>
  <div class="thelaminated" v-show="message.product" @click="ification">   <!-- 产品类型-->
    <div class="synthesize_sort" id="synthesize_sort2" style="bottom: 0px;">
      <div class="synthesize_title text-center">
        产品类型
      </div>
      <div class="synthesize_list">
        <span class="float-left active">全部</span>
        <img src="../../common/image/sex.png" class="float-right">
      </div>
      <div class="synthesize_list">
        文章
      </div>
      <div class="synthesize_list">
        音频
      </div>
      <div class="synthesize_list">
        视频
      </div>
    </div>
  </div>

  <div class="thelaminated" v-show="message.classification" @click="ification">       <!-- 分类-->
   <div class="pop_up_windows" id="pop_up_windows" style="right: 0px;">
     <div class="pop_up_windows_bd">
       <div class="pop_up_windows_title">情感</div>
       <div class="pop_up_windows_box">
         <div class="pop_up_windows_list active">恋爱</div>
         <div class="pop_up_windows_list">心理</div>
         <div class="pop_up_windows_list">美文</div>
         <div class="pop_up_windows_list">恋爱</div>
         <div class="pop_up_windows_list">心理</div>
         <div class="pop_up_windows_list">恋爱</div>
       </div>
       <div class="pop_up_windows_title">情感</div>
       <div class="pop_up_windows_box">
         <div class="pop_up_windows_list">恋爱</div>
         <div class="pop_up_windows_list active">心理</div>
         <div class="pop_up_windows_list active">美文</div>
         <div class="pop_up_windows_list">恋爱</div>
         <div class="pop_up_windows_list">心理</div>
         <div class="pop_up_windows_list">恋爱</div>
       </div>
       <div class="pop_up_windows_title">情感</div>
       <div class="pop_up_windows_box">
         <div class="pop_up_windows_list">恋爱</div>
         <div class="pop_up_windows_list">心理</div>
         <div class="pop_up_windows_list">美文</div>
         <div class="pop_up_windows_list">恋爱</div>
         <div class="pop_up_windows_list">心理</div>
         <div class="pop_up_windows_list">恋爱</div>
       </div>
       <div class="pop_up_windows_title">情感</div>
       <div class="pop_up_windows_box">
         <div class="pop_up_windows_list">恋爱</div>
         <div class="pop_up_windows_list">心理</div>
         <div class="pop_up_windows_list">美文</div>
         <div class="pop_up_windows_list">恋爱</div>
         <div class="pop_up_windows_list">心理</div>
         <div class="pop_up_windows_list">恋爱</div>
       </div>
       <div class="pop_up_windows_title">情感</div>
       <div class="pop_up_windows_box">
         <div class="pop_up_windows_list">恋爱</div>
         <div class="pop_up_windows_list">心理</div>
         <div class="pop_up_windows_list">美文</div>
         <div class="pop_up_windows_list">恋爱</div>
         <div class="pop_up_windows_list">心理</div>
         <div class="pop_up_windows_list">恋爱</div>
       </div>
       <div class="pop_up_windows_title">情感</div>
       <div class="pop_up_windows_box">
         <div class="pop_up_windows_list">恋爱</div>
         <div class="pop_up_windows_list">心理</div>
         <div class="pop_up_windows_list">美文</div>
         <div class="pop_up_windows_list">恋爱</div>
         <div class="pop_up_windows_list">心理</div>
         <div class="pop_up_windows_list">恋爱</div>
       </div>
       <div class="pop_up_windows_title">情感</div>
       <div class="pop_up_windows_box">
         <div class="pop_up_windows_list">恋爱</div>
         <div class="pop_up_windows_list">心理</div>
         <div class="pop_up_windows_list">美文</div>
         <div class="pop_up_windows_list">恋爱</div>
         <div class="pop_up_windows_list">心理</div>
         <div class="pop_up_windows_list">恋爱</div>
       </div>
       <div class="pop_up_windows_title">情感</div>
       <div class="pop_up_windows_box">
         <div class="pop_up_windows_list">恋爱</div>
         <div class="pop_up_windows_list">心理</div>
         <div class="pop_up_windows_list">美文</div>
         <div class="pop_up_windows_list">恋爱</div>
         <div class="pop_up_windows_list">心理</div>
         <div class="pop_up_windows_list">恋爱</div>
       </div>
     </div>
     <div class="pop_up_windows_button_box">
       <div class="pop_up_windows_button_list">
         重置
       </div>
       <div class="pop_up_windows_button_list active" id="pop_up_windows_button">
         确定
       </div>
     </div>
   </div>
  </div>
 </div>
</template>

<script>
  export default {
    name: "rank",
    props: ['message'],
    data(){
      return{

      }
    },
    methods:{
      ification(){
        this.$emit('change',false)
      }
    }
  }
</script>

<style scoped>
  .thelaminated{
     position: fixed;
     top: 0px;
     bottom: 0px;
     left:0px;
     right:0px;
    background-color:rgba(0,0,0,0.3);
  }
  .synthesize_sort {
    position: fixed;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 200;
    opacity:1;
    animation: bounce-in 0.3s linear;
  }
  @keyframes bounce-in {
    0% {
      height: 0px;
      opacity:0.1;
    }
    100% {
      height: 5.39rem;
      opacity:1;
    }
  }
  .synthesize_sort {
    opacity: 1;
  }
  #synthesize_sort2 .synthesize_title {
    font-size: 18px;
    color: #666;
  }
  .synthesize_sort .synthesize_title {
    padding: 0 10px;
    background: #f3f3f5;
    height: 80px;
    line-height: 80px;
    overflow: hidden;
  }
  .synthesize_sort .synthesize_list {
    padding: 0px 10px;
    border-bottom: 1px solid #ececec;
    font-size: 20px;
    height: 80px;
    line-height: 80px;
    overflow: hidden;
    color: #666666;
  }
  .search_list .synthesize_sort .active {
    color: #1785da;
  }
  .float-left {
    float: left;
  }
  .synthesize_list img {
    width: 35px;
    margin-top: 20px;
  }
  .float-right {
    float: right;
  }



  .pop_up_windows {
    width: 79%;
    height: 100%;
    position: fixed;
    right: -79%;
    top: 0;
    background: #fff;
    z-index: 201;
  }
  .pop_up_windows_bd {
    width: 100%;
    height: 89%;
    position: relative;
    padding: 15px;
    overflow: scroll;
  }
  .pop_up_windows_title {
    font-size: 18px;
    color: #666;
    margin-bottom: 18px;
  }
  .pop_up_windows_box {
    overflow: hidden;
    margin-left: -20px;
  }
  .pop_up_windows_box .pop_up_windows_list {
    float: left;
    padding: 0.266667rem 0.533333rem;
    border-radius: 10px;
    border: 1px solid #ececec;
    margin-left: 20px;
    margin-bottom: 18px;
    font-size: 20px;
  }
  .pop_up_windows_box .active {
    color: #1785da;
    border: 1px solid #1785da;
  }
  .pop_up_windows_button_box {
    height: 8%;
    overflow: hidden;
    position: relative;
  }
  .pop_up_windows_button_box .pop_up_windows_button_list {
    width: 50%;
    float: left;
    height: 65px;
    line-height: 65px;
    text-align: center;
    font-size: 20px;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #ececec;
  }
  .pop_up_windows_button_box .active {
    background: #1785da;
    border-top: #1785da 1px solid;
    color: #fff;
    right: 0;
  }
</style>
