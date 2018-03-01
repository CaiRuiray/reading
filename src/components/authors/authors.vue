<template>
  <div>
    <Search></Search>

    <Recommend></Recommend>

  </div>
</template>

<script>
  import Search from '../../components/headertext/recommend.vue'
  import Recommend from '../../components/rhecontentlist/recommend.vue'
  export default {
    name: "needtocustomize",
    components:{
      Search,
      Recommend
    }
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
