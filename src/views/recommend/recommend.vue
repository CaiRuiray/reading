<template>
  <div>
    <Search></Search>
    <navigation></navigation>

    <Shuffling>
      <div class="banner_main" id="banner_box">
        <div class="banner_list">
          <img src="../../common/image/1.png">
        </div>
        <div class="banner_list">
          <img src="../../common/image/2.png">
        </div>
        <div class="banner_list">
          <img src="../../common/image/3.png">
        </div>
      </div>
    </Shuffling>

    <Thebooklist></Thebooklist>  <!--知识市场-->

    <div class="advertising_box">
      <div class="advertising_img">
        <img src="../../common/image/advertising_bd.png">
        <div class="advertising_bd"></div>
      </div>
      <div class="advertising_title">
        <div class="advertising">
          <!--  <img src="../images/shangchuang.png">-->
          <span>上传知识赚钱</span>
        </div>
      </div>
      <div class="advertising_content">
        你的知识很值钱，快来上传吧
      </div>
    </div>

    <Demand></Demand>  <!-- 需求定制-->

    <div class="advertising_box">
      <div class="advertising_img">
        <img src="../../common/image/advertising_bd2.png">
        <div class="advertising_bd"></div>
      </div>
      <div class="advertising_title">
        <div class="advertising">
          <!--  <img src="../images/shangchuang.png">-->
          <span>上传知识赚钱</span>
        </div>
      </div>
      <div class="advertising_content">
        你的知识很值钱，快来上传吧
      </div>
    </div>
    <Authors></Authors>
    <div class="advertising_box" onclick="location.href='add_knowledge_product.html'">
      <div class="advertising_img">
        <img src="../../common/image/advertising_bd3.png">
        <div class="advertising_bd"></div>
      </div>
      <div class="advertising_title">
        <div class="advertising">
          <!--  <img src="../images/shangchuang.png">-->
          <span>上传知识赚钱</span>
        </div>
      </div>
      <div class="advertising_content">
        你的知识很值钱，快来上传吧
      </div>
    </div>
  </div>
</template>

<script>
  import Search from '../../components/searchforfiles/searchforfiles.vue'
  import Shuffling from '../../components/shuffling/shuffling.vue'
  import Thebooklist from '../../components/thebooklist/thebooklist.vue'
  import Demand from "../../components/needtocustomize/demand.vue"
  import Authors from "../../components/authors/authors.vue"
  import navigation from "../../components/m-header/navigation.vue"
  export default {
    name: "recommend",
    data(){
      return{
        item:[]
      }
    },
    components:{
      Search,
      Shuffling,
      Thebooklist,
      Demand,
      Authors,
      navigation
    }
  }
</script>

<style scoped>
  .menu_box {
    padding: 10px;
    background: #fff;
  }
  .menu_box .menu {
    overflow: hidden;
    display: flex;
  }
  .menu_box .menu_list {
    text-align: center;
    color: #666666;
    font-size: 18px;
    padding-top: 10px;
    flex: 1;
  }
  .menu_box .menu_list img {
    width: 60px;
    margin-bottom: 0.1rem;
  }

  .banner_main{
    width: 300%;
    height: 252px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .banner_main .banner_list{
    float: left;
  }
  .banner_list{
    float: left;
    width: 33.333333%;
    height: 100%;
  }

  .advertising_box {
    padding: 20px;
    background: #f3f3f5;
    position: relative;
  }
  .advertising_box .advertising_img {
    width: 100%;
    height: 105px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }
  img {
    width: 100%;
  }
  .advertising_bd {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.2);
  }
  .advertising_box .advertising_title {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    top: 30px;
  }
  .advertising_box .advertising {
    margin: 0 auto;
    width: 260px;
    height: 46px;
    line-height: 46px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.8);
    font-size: 18px;
  }
  .footer_padding .advertising {
    overflow: hidden;
  }
  .advertising_box .advertising img {
    width: 1rem;
  }
  .advertising_box .advertising_content {
    color: #fff;
    opacity: 0.8;
    position: absolute;
    left: 0;
    top: 85px;
    width: 100%;
    font-size: 16px;
    text-align: center;

  }
</style>
